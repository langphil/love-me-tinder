var Game = function() {
  this._health = 20;
  this._wealth = 20;
};

randomNumber = function(array) {
  return array[Math.floor ( Math.random() * array.length )]
}

Game.prototype.work = function() {
  this.addWealth(5);
  this.minusHealth(2);
};

Game.prototype.date = function() {
  if (this._wealth >= 10) {
    this.minusWealth(10);
    randomNumber([this.addHealth(16), this.addHealth(6), this.minusHealth(4), this.minusHealth(15)]);
  } else {
    alert("You don't have enough money to go on a date. Go to work!") ;
  }
};

Game.prototype.gift = function() {
  var price = randomNumber([4, 7, 12, 16]);
  if (this._wealth >= price) {
  this.minusWealth(price);
  randomNumber([this.addHealth(13), this.addHealth(18), this.addHealth(3), this.minusHealth(5)]);
} else {
  alert("You can't afford a gift. Go to work!");
}
};

Game.prototype.gamble = function() {
  var net = randomNumber([35, -7, -12, -16]);
  if (this._wealth + net >= 0) {
    this.addWealth(net);
    this.minusHealth(4);
  } else {
    alert("You don't have enough money to gamble. Go to work!");
  }
};

Game.prototype.changeHealth = function(amount = 1) {
  this._health += amount
}

Game.prototype.addWealth = function(amount = 1) {
  this._wealth += amount
}

Game.prototype.minusHealth = function(amount = 1) {
  this._health -= amount
}

Game.prototype.minusWealth = function(amount = 1) {
  this._wealth -= amount
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
