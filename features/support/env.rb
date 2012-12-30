# IMPORTANT: This file is generated by cucumber-rails - edit at your own peril.
# It is recommended to regenerate this file in the future when you upgrade to a 
# newer version of cucumber-rails. Consider adding your own code to a new file 
# instead of editing this one. Cucumber will automatically load all features/**/*.rb
# files.

ENV["RAILS_ENV"] = 'test'

require 'simplecov'
require 'cucumber/rails'
require 'factory_girl_rails'
require 'aruba/cucumber'
require 'capybara/poltergeist'

World(FactoryGirl::Syntax::Methods)

# Allow connections to localhost, required for Selenium
WebMock.disable_net_connect!(:allow_localhost => true)

# Capybara defaults to XPath selectors rather than Webrat's default of CSS3. In
# order to ease the transition to Capybara we set the default here. If you'd
# prefer to use XPath just remove this line and adjust any selectors in your
# steps to use the XPath syntax.
Capybara.default_selector = :css

Capybara.javascript_driver = :poltergeist

# By default, any exception happening in your Rails application will bubble up
# to Cucumber so that your scenario will fail. This is a different from how 
# your application behaves in the production environment, where an error page will 
# be rendered instead.
#
# Sometimes we want to override this default behaviour and allow Rails to rescue
# exceptions and display an error page (just like when the app is running in production).
# Typical scenarios where you want to do this is when you test your error pages.
# There are two ways to allow Rails to rescue exceptions:
#
# 1) Tag your scenario (or feature) with @allow-rescue
#
# 2) Set the value below to true. Beware that doing this globally is not
# recommended as it will mask a lot of errors for you!
#
ActionController::Base.allow_rescue = false

Cucumber::Rails::World.use_transactional_fixtures = true
Cucumber::Rails::Database.javascript_strategy = :truncation

# Remove/comment out the lines below if your app doesn't have a database.
# For some databases (like MongoDB and CouchDB) you may need to use :truncation instead.
# begin
#   DatabaseCleaner.strategy = :transaction
# rescue NameError
#   raise "You need to add database_cleaner to your Gemfile (in the :test group) if you wish to use it."
# end
# 
Before do
  #DatabaseCleaner.start
  
  # Set the defaults for Aruba
  @dirs = [Rails.root]
  @aruba_timeout_seconds = 60
  @aruba_io_wait_seconds = 5
end

# After do |scenario|
#   DatabaseCleaner.clean
# end