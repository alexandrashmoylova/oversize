import Swiper from 'swiper/bundle';


const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    //   },
  });


// const slides = document.querySelectorAll(".description-list__item");
// console.log(slides);

// let timer;

// let slideIndex = 0;
// showSlides(slideIndex);

// function autoSlider() {
//   timer = setTimeout(plusSlide, 3000);
// }

// function plusSlide() {
//   showSlides(slideIndex += 1);
//   autoSlider();
// }

// function minusSlide() {
//   showSlides(slideIndex -= 1);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   if (n > slides.length) {
//     slideIndex = 1;
//     clearTimeout(timer)
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

// const togglePreviousSlide = () => {
//   minusSlide();
// };

// const toggleNextSlide = () => {
//   plusSlide();
// };

// toggleNextSlide();