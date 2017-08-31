'use strict';

describe('Game', function() {

  it('starts with 20 health & wealth points', function() {
    expect(game.healthPoints()).toEqual(20);
    expect(game.wealthPoints()).toEqual(20);
  });

  it('increases the wealth points by 5 with the work button', function() {
    game.work();
    expect(game.wealthPoints()).toEqual(25);
  });

  it('decreases the health points by 2 with the work button', function() {
    game.work();
    expect(game.healthPoints()).toEqual(18);
  });

  // hard to test the below because of randomness
  // it('increases the health points by X with the date button', function() {
  //   game.date();
  //   expect(game.healthPoints()).toEqual(X);
  // });

  it('decreases the wealth points by 10 with the date button', function() {
    game.date();
    expect(game.wealthPoints()).toEqual(10);
  });

  // it('increases the wealth points by X with the gamble button', function() {
  //   game.gamble();
  //   expect(game.wealthPoints()).toEqual(X);
  // });

  it('decreases the health points by 4 with the gamble button', function() {
    game.gamble();
    expect(game.healthPoints()).toEqual(16);
  });

  // it('has won if the health points are 100+', function() {
  //   need to run functions that will result in win
  //   hard to do with all the unpredictablity and
  //   no hard-coded increases in health
  //   expect(game.win()).toBe(true);
  // });

  it('has lost if the health points are less than 0', function() {
    game.work();
    game.work();
    game.work();
    game.work();
    game.work();
    game.work();
    game.work();
    game.work();
    game.work();
    game.work();
    // the above is not very clean
    expect(game.lose()).toBe(true);
  });
});
