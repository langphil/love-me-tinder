class GameController < ApplicationController
  def index
    @game = Game.new
    @players = Player.all
    @rails_side_json = { :name => 'Will', :age => 23 }.to_json
  end

end
