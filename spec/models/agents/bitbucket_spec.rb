require 'rails_helper'

describe Bitbucket, type: :model, vcr: true do
  subject { FactoryGirl.create(:bitbucket) }

  let(:work) { FactoryGirl.create(:work, :canonical_url => "https://bitbucket.org/galaxy/galaxy-central") }

  context "get_data" do
    it "should report that there are no events if the canonical_url is missing" do
      work = FactoryGirl.create(:work, :canonical_url => nil)
      expect(subject.get_data(work_id: work.id)).to eq({})
    end

    it "should report that there are no events if the canonical_url is not a Bitbucket URL" do
      work = FactoryGirl.create(:work, :canonical_url => "https://code.google.com/p/gwtupload/")
      expect(subject.get_data(work_id: work.id)).to eq({})
    end

    it "should report if there are no events and event_count returned by the Bitbucket API" do
      body = File.read(fixture_path + 'bitbucket_nil.json')
      stub = stub_request(:get, subject.get_query_url(work_id: work.id)).to_return(:body => body)
      response = subject.get_data(work_id: work.id)
      expect(response).to eq(JSON.parse(body))
      expect(stub).to have_been_requested
    end

    it "should report if there are events and event_count returned by the Bitbucket API" do
      body = File.read(fixture_path + 'bitbucket.json')
      stub = stub_request(:get, subject.get_query_url(work_id: work.id)).to_return(:body => body)
      response = subject.get_data(work_id: work.id)
      expect(response).to eq(JSON.parse(body))
      expect(stub).to have_been_requested
    end

    it "should catch timeout errors with the bitbucket API" do
      stub = stub_request(:get, subject.get_query_url(work_id: work.id)).to_return(:status => [408])
      response = subject.get_data(work_id: work.id, :agent_id => subject.id)
      expect(response).to eq(error: "the server responded with status 408 for https://api.bitbucket.org/1.0/repositories/galaxy/galaxy-central", :status=>408)
      expect(stub).to have_been_requested
      expect(Notification.count).to eq(1)
      notification = Notification.first
      expect(notification.class_name).to eq("Net::HTTPRequestTimeOut")
      expect(notification.status).to eq(408)
      expect(notification.agent_id).to eq(subject.id)
    end
  end

  context "parse_data" do
    it "should report if the canonical_url is missing" do
      work = FactoryGirl.create(:work, :canonical_url => nil)
      result = {}
      # expect(subject.parse_data(result, work_id: work.id)).to eq(events: [{ source_id: "bitbucket", work_id: work.pid, readers: 0, likes: 0, total: 0, events_url: nil, extra: {} }])
      expect(subject.parse_data(result, work_id: work.id)).to eq([{ "subj_id" => "http://bitbucket.org",
                                                                    "obj_id" =>  work.pid,
                                                                    "relation_type_id" => "reads",
                                                                    "total" => 0,
                                                                    "source_id" => "bitbucket"},
                                                                  { "subj_id" => "http://bitbucket.org",
                                                                    "obj_id" => work.pid,
                                                                    "relation_type_id" => "forks",
                                                                    "total" => 0,
                                                                    "source_id" => "bitbucket"}])
    end

    it "should report that there are no events if the canonical_url is not a Bitbucket URL" do
      work = FactoryGirl.create(:work, :canonical_url => "https://code.google.com/p/gwtupload/")
      result = {}
      # expect(subject.parse_data(result, work_id: work.id)).to eq(events: [{ source_id: "bitbucket", work_id: work.pid, readers: 0, likes: 0, total: 0, events_url: nil, extra: {} }])
      expect(subject.parse_data(result, work_id: work.id)).to match_array [{ "subj_id" => "http://bitbucket.org",
                                                                             "obj_id" => work.pid, 
                                                                             "relation_type_id" => "reads", 
                                                                             "total" => 0,
                                                                             "source_id" => "bitbucket"}, 
                                                                           { "subj_id" => "http://bitbucket.org",
                                                                             "obj_id" => work.pid, 
                                                                             "relation_type_id" => "forks", 
                                                                             "total" => 0, 
                                                                             "source_id" => "bitbucket"}]
    end

    it "should report if there are no events and event_count returned by the Bitbucket API" do
      body = File.read(fixture_path + 'bitbucket_nil.json')
      result = JSON.parse(body)
      # extra = { "followers_count"=>0, "forks_count"=>0, "description"=>"Exemplos da Aula 1 do curso de Desenvolvimento Web com Ruby on Rails do ruby+web\r\n\r\nhttp://rubymaisweb.ning.com", "utc_created_on"=>"2012-01-13 14:47:01+00:00" }
      response = subject.parse_data(result, work_id: work.id)
      # expect(response).to eq(events: [{ source_id: "bitbucket", work_id: work.pid, readers: 0, likes: 0, total: 0, events_url: nil, extra: extra }])
      expect(response).to eq([{ "subj_id" => "http://bitbucket.org",
                                "obj_id" => work.pid,
                                "relation_type_id" => "reads",
                                "total" => 0,
                                "source_id" => "bitbucket"},
                              { "subj_id" => "http://bitbucket.org",
                                "obj_id" => work.pid,
                                "relation_type_id" => "forks",
                                "total" => 0,
                                "source_id" => "bitbucket"},

                                ])
    end

    it "should report if there are events and event_count returned by the Bitbucket API" do
      body = File.read(fixture_path + 'bitbucket.json')
      result = JSON.parse(body)
      response = subject.parse_data(result, work_id: work.id)

      expect(response).to eq([{ "subj_id" => "http://bitbucket.org",
                                "obj_id" => work.pid,
                                "relation_type_id" => "reads",
                                "total" => 162,
                                "source_id" => "bitbucket" },
                              { "subj_id" => "http://bitbucket.org",
                                "obj_id" => work.pid,
                                "relation_type_id" => "forks",
                                "total" => 272,
                                "source_id" => "bitbucket"}])

      # TODO JW - bit if a mismatch (and duplication) here
      # expect(event[:total]).to eq(434)
      # expect(event[:readers]).to eq(272)
      # expect(event[:likes]).to eq(162)
      # expect(event[:events_url]).to eq("https://bitbucket.org/galaxy/galaxy-central")
      # expect(event[:extra]["followers_count"]).to eq(162)
    end

    it "should catch timeout errors with the Bitbucket API" do
      work = FactoryGirl.create(:work, :doi => "10.1371/journal.pone.0000001")
      result = { error: "the server responded with status 408 for https://api.bitbucket.org/1.0/repositories/galaxy/galaxy-central", status: 408 }
      response = subject.parse_data(result, work_id: work.id)
      expect(response).to eq(result)
    end
  end
end