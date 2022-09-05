require_relative './config/environment'
require_relative './app/controllers/applicationController'

use Rack::JSONBodyParser

run ApplicationController
