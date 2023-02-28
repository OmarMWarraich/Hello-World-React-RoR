class API::V1::GreetingsController < API::V1::ApplicationController
  def index
    render json: Greeting.find(rand(1..5))
  end
end
