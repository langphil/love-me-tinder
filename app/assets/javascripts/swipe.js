$(document).ready(function(){
var count = 0
  $(".accept_btn").on("click",function(){
    $('.buddy').addClass('rotate-left').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $('.buddy').append('<div class="status like">Like!</div>');
    window.location.replace('/instruction');
  });

  $(".buddy").on("click",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('OUPS');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    }
  });
});
