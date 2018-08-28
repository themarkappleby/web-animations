const SLIDE_SPEED = 0.4

var animation = lottie.loadAnimation({
  container: document.getElementById('bodymovin'),
  renderer: 'svg',
  autoplay: false,
  path: './data.json'
})
animation.setSpeed(1.75)
animation.play()

$(document).keydown(function(e) {
    switch(e.which) {
        case 37:
          prevSlide()
          break;
        case 39:
          nextSlide()
          break;
        default: return;
    }
    e.preventDefault()
})

function nextSlide () {
  var slide = $('.slide--active').last().next()
  slide.addClass('slide--active')
  slideIntro(slide)
}

function prevSlide () {
  var activeSlides = $('.slide--active')
  if (activeSlides.length > 1) {
    activeSlides.last().removeClass('slide--active')
    slideIntro($(activeSlides[activeSlides.length - 2]))
  }
}

function slideIntro (slide) {
  var tl = new TimelineLite();
  tl.delay(SLIDE_SPEED).staggerFrom(slide.children(), 0.3, {
    opacity: 0,
    y: 10
  }, 0.1)
}
