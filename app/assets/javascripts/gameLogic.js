var Game = function() {
  this._health = 60;
  this._wealth = 60;
};

Game.prototype.addHealth = function(amount = 10) {
  this._health += amount
}

Game.prototype.addWealth = function(amount = 10) {
  this._wealth += amount
}

Game.prototype.minusHealth = function(amount = 10) {
  this._health -= amount
}

Game.prototype.minusWealth = function(amount = 10) {
  this._wealth -= amount
}

Game.prototype.work = function() {
  this.addWealth();
};

Game.prototype.date = function() {
  this.minusWealth();
  this.minusHealth();
};

Game.prototype.gift = function() {
  this.minusWealth();
  this.addHealth();
};

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

Game.prototype.random = function () {
  
}
