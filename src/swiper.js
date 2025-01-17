import Swiper from "swiper/bundle";
const width = window.innerWidth;
const swiper = new Swiper(".swiper1", {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

const swiperGallery = new Swiper(".swiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: false,
});

function destroySwiper() {
  if (width >= 768) {
    swiper.destroy(true, true);
    swiper.update();
  }
}

destroySwiper();
