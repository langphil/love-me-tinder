$(function(){
  var blue = document.getElementById("blue");

  Hammer(blue).on("swipeleft", function() {
        $(blue).animate({left: "-=100"}, 500)
  });

  Hammer(document.getElementById("blue")).on("swiperight", function() {
        $(blue).animate({left: "+=100"}, 500)
  });
})
