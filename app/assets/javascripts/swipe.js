$(document).ready(function(){

  $(".accept_btn").on("click",function(){
    $('.buddy').addClass('rotate-left').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $('.buddy').append('<div class="status like">Like!</div>');
    window.location.replace('/game');
  });

  $(".buddy").on("click",function(){
    console.log(this)
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    console.log(this)
    $(this).append('<div class="status dislike">Dislike!</div>');

    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('OUPS');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    }
  });
});
