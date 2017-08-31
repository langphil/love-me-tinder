var Game = function () {
  'use_strict'
  this._health = 20;
  this._wealth = 20;
};

sample = function (array) {
  return array[Math.floor ( Math.random() * array.length )]
}

Game.prototype.work = function() {
  this.changeWealth(5);
  this.changeHealth(-2);
};

Game.prototype.date = function () {
  var satisfaction = sample([16, 6, -4, -15])
  if (this._wealth >= 10) {
    this.changeWealth(-10);
    this.changeHealth(satisfaction);
    if (satisfaction <= 0) {
      alert("Sorry your date went badly :(");
    }
  } else {
    alert("You don't have enough money to go on a date. Go to work!") ;
  }
};

Game.prototype.gift = function () {
  var price = sample([4, 7, 12, 16]);
  var satisfaction = sample([13, 18, 3, -6, -4]);
  if (this._wealth >= price) {
  this.changeWealth(-price);
  this.changeHealth(satisfaction);
} else {
  alert("You can't afford a gift. Go to work!");
}
};

Game.prototype.gamble = function () {
  var net = sample([35, -7, -12, -16]);
  if (this._wealth + net >= 0) {
    this.changeWealth(net);
    this.changeHealth(-4);
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
