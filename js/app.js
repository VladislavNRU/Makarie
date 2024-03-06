/***************** header sldier ***************/

var headerSlider = new Swiper(".header-swiper", {
    spaceBetween: 30,
    pagination: {
      el: ".header-slide_pagination",
      clickable: true,
    },
    effect: 'fade'
});

/***************** mobil menu ***************/

const menuBtn = document.querySelector('.mobil-menu');
const mobileMenu = document.querySelector('.mobil-links');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})


/************** area slider ******************/
var areaSlider = new Swiper(".area-swiper", {
    
    slidesPerView: 1,
    navigation: {
      nextEl: ".area-slide-next",
      prevEl: ".area-slide-prev",
    },
});

/************** sale slider ******************/

var saleSwiper = new Swiper(".sale-slider", {
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".sale-arrow-next",
      prevEl: ".sale-arrow-prev",
    },
});

/************** feedback slider ******************/

var feedbackSwiper = new Swiper(".feedback-slider", {
  spaceBetween: 24,
  slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  pagination: {
    el: ".feedback-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".feedback-arrow-next",
    prevEl: ".feedback-arrow-prev",
  }

});