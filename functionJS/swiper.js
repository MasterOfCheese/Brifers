  const swiper = new Swiper('.swiper', {
    pagination: false,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      250: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        loop: true,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3, //default in design
      },
    }
  })
  

  // document.querySelector('.swiper-scrollbar').style.display = 'none'
  // document.querySelector('.swiper-button-prev').style.display = 'none'
  // document.querySelector('.swiper-button-next').style.display = 'none'
  
  const testimonialSwiper = new Swiper('.testimonials__swiper', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  speed: 970,
  touchAngle: 45,
  simulateTouch: true,
  touchRatio: 1.5,
  loop: true,
})

const partnersSwiper = new Swiper('.partners__swiper', {
  slidesPerView: 10,
  speed: 700,
  touchAngle: 45,
  simulateTouch: true,
  touchRatio: 1.5,
  loop: true,
});

const blogMain = new Swiper('.blog__swiper', {
  slidesPerView: 3,
  speed: 700,
  touchAngle: 45,
  touchRatio: 1.5,
  loop: true,
  navigation: {
    nextEl: '.blog-next',
    prevEl: '.blog-prev',
},
breakpoints: {
  250: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 3, //default in design
  },
}
});

// const btnPrevNext = new Swiper('.btnPrevNext', {
//   navigation: {
//     nextEl: '.blog-next',
//     prevEl: '.blog-prev',
// },
// });

const mapSwiper = new Swiper('.map__swiper', {
  slidesPerView: 1,
  speed: 700,
  touchAngle: 45,
  touchRatio: 1.5,
  loop: false,
  navigation: {
    nextEl: '.map-next',
    prevEl: '.map-prev',
  },
});