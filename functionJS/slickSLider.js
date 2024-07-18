$(document).ready(function(){
  $('.background__why-items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    swipeDistance: 20,
    draggable: true,
    dots: true,
    speed: 1000,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      },
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: true,
      }
    }],
  })
})