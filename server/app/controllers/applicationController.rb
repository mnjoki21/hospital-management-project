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

  post '/doctors' do
  end

  patch '/doctors/:id' do
  end

  put '/doctors' do
  end

  delete '/doctors/:id' do
  end

  get '/ailments' do
    ailment = Ailment.all.order(:ailment_name)
    ailment.to_json
  end

  get '/ailments/:id' do
    ailment = Ailment.find(params[:id])
    ailment.to_json
  end

  post '/ailments' do
  end

  patch '/ailments/:id' do
  end

  put '/ailments' do
  end

  delete '/ailments/:id' do
  end

  get '/patients' do
    patient = Patient.all.order(:patient_name)
    patient.to_json
  end

  get '/patients/:id' do
    patient = Patient.find(params[:id])
    patient.to_json
  end

  post '/patients' do
  end

  patch '/patients/:id' do
  end

  put '/patients' do
  end

  delete '/patients/:id' do
  end

end
