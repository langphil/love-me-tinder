'use_strict'

var Game = function () {
  this._health = 30;
  this._wealth = 30;
  this.DATE_COST = 10;
  this.DATE_SATISFACTION = sample([6, -6]);
  this.GIFT_COST = sample([7, -7]);
  this.GIFT_SATISFACTION = sample([4, -4]);
  this.GAMBLNG_NET = sample([16, -16]);
  this.GAMBLNG_DISAPPOINTMENT = 4;
};

Game.prototype.healthPoints = function() {
  return this._health;
};

Game.prototype.wealthPoints = function() {
  return this._wealth;
};

sample = function (array) {
  return array[Math.floor ( Math.random() * array.length )]
}

Game.prototype.work = function() {
  this.changeWealth(5);
  this.changeHealth(-2);
};

Game.prototype.date = function () {
  if (this._wealth >= this.DATE_COST) {
    this.changeWealth(-this.DATE_COST);
    this.changeHealth(this.DATE_SATISFACTION);
    if (this.DATE_SATISFACTION <= 0) {
      alert("Sorry your date went badly :(");
    }
  } else {
    alert("You don't have enough money to go on a date. Go to work!") ;
  }
};

Game.prototype.gift = function () {
  if (this._wealth >= this.GIFT_COST) {
  this.changeWealth(-this.GIFT_COST);
  this.changeHealth(this.GIFT_SATISFACTION);
} else {
  alert("You can't afford a gift. Go to work!");
}
};

Game.prototype.gamble = function () {
  if (this._wealth + this.GAMBLNG_NET >= 0) {
    this.changeWealth(this.GAMBLNG_NET);
    this.changeHealth(-this.GAMBLNG_DISAPPOINTMENT);
  } else {
    alert("You don't have enough money to gamble. Go to work!");
  }
};

Game.prototype.changeHealth = function (amount = 1) {
  this._health += amount
}

Game.prototype.changeWealth = function (amount = 1) {
  this._wealth += amount
}

Game.prototype.win = function () {
  if(this._health >= 100){
    return true
  } else {
    return false
  }
}

Game.prototype.lose = function () {
  if(this._health <= 0){
    return true
  } else {
    return false
  }
}
