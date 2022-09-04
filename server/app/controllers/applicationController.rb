# This is where requests will be processed

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/doctors' do
    doc = Doctor.all.order(:first_name)
    doc.to_json
  end

  get '/doctors/:id' do
    doc = Doctor.find(params[:id])
    doc.to_json
  end

end
