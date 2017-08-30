class GameController < ApplicationController
  def index
    @game = Game.new
  end

  def gift
    @game.gift
  end
end
