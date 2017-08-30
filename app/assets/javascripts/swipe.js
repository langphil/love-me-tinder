var sliderEl = document.querySelector('.slider');
var slideCount = 3;
var activeSlide = 0; // NEW: the current slide # (0 = first)
var sliderManager = new Hammer.Manager(sliderEl);
sliderManager.add( new Hammer.Pan({ threshold: 0, pointers: 0 }) );
sliderManager.on('pan', function(e) {
  var percentage = 100 / slideCount * e.deltaX / window.innerWidth;
  var transformPercentage = percentage - 100 / slideCount * activeSlide; // NEW
  sliderEl.style.transform = 'translateX( ' + transformPercentage + '% )';
  if(e.isFinal) { // NEW: this only runs on event end
    if(percentage < 0)
      goToSlide(activeSlide + 1);
    else if(percentage > 0)
      goToSlide(activeSlide - 1);
    else
      goToSlide(activeSlide);
  }
});

// NEW: function that changes the slide
var goToSlide = function(number) {
  if(number < 0)
    activeSlide = 0;
  else if(number > slideCount - 1)
    activeSlide = slideCount - 1
  else
    activeSlide = number;

 var percentage = -(100 / slideCount) * activeSlide;
 sliderEl.style.transform = 'translateX(' + percentage + '%)';
};

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-25622294-9', 'webdevbreak.com');
ga('send', 'pageview');
