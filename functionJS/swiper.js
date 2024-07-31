  const swiper = new Swiper('.swiper', {
    pagination: false,
    slidesPerView: 3,
    spaceBetween: 30,
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
  pagination: {
    // el: '.swiper-pagination',
    // clickable: true,
  },
  // simulateTouch: true,
  speed: 970,
  touchAngle: 45,
  simulateTouch: true,
  touchRatio: 1.5,
  loop: true,
})