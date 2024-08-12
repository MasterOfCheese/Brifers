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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  })
})