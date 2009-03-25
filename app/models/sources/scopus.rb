require 'digest/md5'
require 'soap/wsdlDriver'
require 'soap/rpc/element'
require 'soap/header/simplehandler'
scopus_dir = File.join(Rails.root, 'app', 'models', 'sources', 'scopus')
if File.exist?(File.join(scopus_dir, "AbstractsMetadataServiceDriver.rb"))
  # Avoid doing this stuff if we haven't installed the generated WSDL code yet
  # (this file is 'require'd to get the URLs when generating the WSDL code).

  $: << scopus_dir
  require 'AbstractsMetadataServiceDriver'

  def fix_scopus_wsdl
    # The generated WSDL code has problems: fix them.
    # - it's set up to discard results, instead of returning them
    # - it wants an EASIReq object as a parameter, instead of putting it
    #   in the SOAP header as required by the service (we'll insert it in
    #   the header manually below).
    methods = AbstractsMetadataServicePortType_V7::Methods
    if methods[0][3][:response_use] != :literal
      methods.each do |method| 
        method[3][:response_use] = :literal
        method[2].delete_if {|arg| arg[0..1] == ["in", "EASIReq"] }
      end
    end
  end
  fix_scopus_wsdl
end

class Scopus < Source
  def uses_username; true; end
  def uses_live_mode; true; end
  def uses_salt; true; end

  def query(article, options={})
    url = Scopus::query_url(live_mode)
    driver = get_soap_driver(username, url, options[:verbose])
    result = driver.getCitedByCount(build_payload(article.doi))
    return -1 unless result.status.statusCode == "OK"

    #list = result.getCitedByCountRspPayload.citedByCountList
    #list.each {|r| puts "#{r.inputKey.doi} => #{r.linkData[0].citedByCount} citations"}

    countList = result.getCitedByCountRspPayload.citedByCountList
    return 0 if countList.nil? # we get no entry if this DOI wasn't found.
    countList[0].linkData[0].citedByCount.to_i
  end

  def public_url(retrieval)
    query_string = "doi=" + CGI.escape(retrieval.article.doi) \
      + "&rel=R3.0.0&partnerID=OIVxnoIl"
    digest = Digest::MD5.hexdigest(query_string + salt)
    "http://www.scopus.com/scopus/inward/citedby.url?" \
      + query_string + "&md5=" + digest
  end

  def self.query_url(live_mode)
    "http://#{"cdc315-" unless live_mode}services.elsevier.com/EWSXAbstractsMetadataWebSvc/XAbstractsMetadataServiceV7"
  end

  def self.wsdl_url(live_mode)
    query_url(live_mode) + "/WEB-INF/wsdl/absmet_service_v7.wsdl"
  end
  
protected
  def get_soap_driver(username, url, verbose)
    driver = AbstractsMetadataServicePortType_V7.new(url)
    driver.wiredump_dev = STDOUT if verbose && verbose > 1
    driver.headerhandler << ScopusSoapHeader.new(username)
    driver
  end

  def build_payload(*doi_list)
    inputkeys = []
    doi_list.each_with_index do |doi, index| 
      inputkeys << InputKeyType.new(doi, nil, nil, nil, nil, nil, nil, nil, nil, nil, 
                                    nil, nil, nil, nil, nil, nil, index.to_s)
    end

    GetCitedByCountType.new(GetLinkDataReqPayloadType.new(nil, 
      AbsMetSourceType::All, ResponseStyleType::WellDefined, 
      DataResponseType.new("MESSAGE"), inputkeys))
  end
end

class ScopusSoapHeader < SOAP::Header::SimpleHandler
  def initialize(username)
    super(XSD::QName.new(AbstractsMetadataServiceMappingRegistry::NsV1, "EASIReq"))
    @username = username
  end

  def on_simple_outbound
    # Build a synthetic EASIReq header
    { "ReqId" => '1',
      "Ver" => '2',
      "Consumer" => @username,
      "ConsumerClient" => "PLoS_Article_Metrics",
      "LogLevel" => "Default"
    }
  end
end

