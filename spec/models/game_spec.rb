require 'rails_helper'

RSpec.describe Game, type: :model do

  it "has a default initial health" do
    game = Game.new
    expect(game.health).to eq(60)
  end

  it "has a default initial wealth" do
    game = Game.new
    expect(game.wealth).to eq(60)
  end

  it "increase the health" do
    game = Game.new
    expect(game.add_health(20)).to eq(80)
  end

  it "increase the wealth" do
    game = Game.new
    expect(game.add_wealth(20)).to eq(80)
  end

  it "decreases the health" do
    game = Game.new
    expect(game.minus_health(20)).to eq(40)
  end

  it "decreases the wealth" do
    game = Game.new
    expect(game.minus_wealth(20)).to eq(40)
  end

  describe "can give a gift" do
    it "increases the health by 10 and decreases the wealth by 10" do
      game = Game.new
      game.gift
      expect(game.wealth).to eq(50)
      expect(game.health).to eq(70)
    end
  end

  describe "can go on a date" do
    it "always decreases the wealth" do
      game = Game.new
      game.date
      expect(game.wealth).to eq(40)
    end

    it "increases the wealth by 30" do
      game = Game.new
      game.date
      expect(game.health).to eq(90)
    end
  end

  describe "#work" do
    it "increases your wealth by 10" do
    game = Game.new
    game.work
    expect(game.wealth).to eq(70)
    end
  end

  describe "#win?" do
    it "returns true if health = 100" do
    game = Game.new
    game.add_health(100)
    expect(game.win?).to eq(true)
    end
  end

  describe "#lose?" do
    it "returns true if health = 100" do
    game = Game.new
    game.add_health(-70)
    expect(game.lose?).to eq(true)
    end
  end

end
