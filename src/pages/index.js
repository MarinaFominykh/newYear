const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  centeredSlides: false,
  speed: 800,
  simulateTouch: true,
  grabCursor: true,
  breakpoints: {
    705: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 2.5,
    },
    960: {
      slidesPerView: 3,
    },
  },
});
