'use strict';

describe('Game', function() {

  it('starts with 20 health & wealth points', function() {
    expect(game.healthPoints()).toEqual(30);
    expect(game.wealthPoints()).toEqual(30);
  });

  it('increases the wealth points by 5 with the work button', function() {
    game.work();
    expect(game.wealthPoints()).toEqual(35);
  });

  it('decreases the health points by 2 with the work button', function() {
    game.work();
    expect(game.healthPoints()).toEqual(28);
  });

  it('increases the health points by 6 with the date button', function() {
    game.date();
    expect(game.healthPoints()).toEqual(36);
  });

  it('decreases the wealth points by 10 with the date button', function() {
    game.date();
    expect(game.wealthPoints()).toEqual(20);
  });

  it('increases the wealth points by 16 with the gamble button', function() {
    game.gamble();
    expect(game.wealthPoints()).toEqual(46);
  });

  it('decreases the health points by 4 with the gamble button', function() {
    game.gamble();
    expect(game.healthPoints()).toEqual(26);
  });

  it('has won if the health points are 100+', function() {
    game.gift();
    game.date();
    expect(game.win()).toBe(false);
  });

  it('has lost if the health points are less than or === 0', function() {
    game.work();
    game.gamble();
    expect(game.lose()).toBe(false);
  });
});
