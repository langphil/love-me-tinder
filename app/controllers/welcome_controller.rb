class WelcomeController < ApplicationController
  def index
    @matches = Match.all
    @crush = Crush.new
  end

end
