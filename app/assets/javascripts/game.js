$(document).ready(function() {
  var game = new Game();
  updateScore();
  gameStatus();

  $('#gift_button').click(function() {
    event.preventDefault();
    game.gift();
    updateScore();
    gameStatus();
  });

  $('#date_button').click(function() {
    event.preventDefault();
    game.date();
    updateScore();
    gameStatus();
  });

  $('#work_button').click(function() {
    event.preventDefault();
    game.work();
    updateScore();
    gameStatus();
  });

function updateScore() {
  $('#gameHealth').text(game._health);
  $('#gameWealth').text(game._wealth);
}

function gameStatus() {
  if(game.win() === true){
    window.location.replace('/outcome');
} else if(game.lose() === true){
  $('#gameStatus').text("You suck!");
}
}


});
