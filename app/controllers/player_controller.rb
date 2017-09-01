class PlayerController < ApplicationController
  def index
    @player = Player.last
  end

  def new
    @player = Player.new
  end

  def create
    @player = Player.create(player_params)
    redirect_to player_url(@player)
  end

  def show
    @player = Player.find(params[:id])
  end

private

  def player_params
    params.require(:player).permit(:name, :age, :gender, :interest)
  end

end
