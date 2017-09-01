$(document).ready(function() {
  var game = new Game();
  (function(){
    setInterval(function() {
      game.changeHealth(-1);
      updateScore();
      gameStatus();
    }, 1000);
  })();

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

  $('#gamble_button').click(function() {
    event.preventDefault();
    game.gamble();
    updateScore();
    gameStatus();
  });

function updateScore() {
  $('#gameHealth').text(game._health);
  $('#gameWealth').text(game._wealth);
  var heart_width = game._health*0.3 + "vw";
  var coin_width = game._wealth*0.3 + "vw";
  $('#heart-bar').width(heart_width);
  $('#wealth-bar').width(coin_width);
}

function gameStatus() {
  if(game.win() === true){
    window.location.replace('/outcome');
  } else if(game.lose() === true){
    window.location.replace('/lose');
    }
  }
});
