const background = document.querySelector('.banner__svg')
const banner = document.querySelector('.banner')

const resizeListener = () => {
const bannerWidth = window.getComputedStyle(banner).width
const bannerHeight = window.getComputedStyle(banner).height
const backgroundWidth = window.getComputedStyle(background).width
const backgroundHeight = window.getComputedStyle(background).height
background.style.width = bannerWidth
background.style.height = bannerHeight
  console.log("banner", {
    width: bannerWidth,
    height:bannerHeight
  })
    console.log("back", {
    width: backgroundWidth,
    height:backgroundHeight
  })

}
// window.addEventListener("resize", resizeListener)

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
      slidesPerView: 2.3,
    },
    960: {
      slidesPerView: 2.5,
    },
      1200: {
      slidesPerView: 3,
    },

  },
});
