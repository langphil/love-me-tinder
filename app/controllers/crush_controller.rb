class CrushController < ApplicationController
  def index
    @crushes = Crush.all
  end

  def new
    @matches = Match.all
    @crush = Crush.new
  end

  def create
    # @crush = Crush.create(crush_params)
    redirect_to '/game'
  end

  def show
    @crush = Crush.find(params[:id])
  end

private

  def player_params
    params.require(:crush).permit(:match_id)
  end
end
