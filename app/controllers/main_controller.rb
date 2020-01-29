class MainController < ApplicationController
  def index
    @message = Message.new
  end
end
