require 'sinatra'

get '/' do
  response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
  Dir.entries("data").select{ |it|
    it != "." && it != ".." && !it.start_with?(".DS_Store")
  }.sort().to_json
end

get '/:name' do |name|
  response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
  File.read("data/#{name}")
end
