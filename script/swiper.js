var swiper = new Swiper(".mySwiper", {
  pagination: {
    type: "fraction",
    loop: "true",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var bestsellerSwiper = new Swiper(".bestsellerSwiper", {
  slidesPerView: 1.2,
  loop: true,
  navigation: {
    nextEl: ".bestseller-next",
    prevEl: ".bestseller-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      spaceBetween: 24,
    },

    1024: {
      slidesPerView: 4.3,
      spaceBetween: 32,
    },
  },
});

var testimonialsSwiper = new Swiper(".testimonialsSwiper", {
  slidesPerView: 1.1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".testimonials-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonials-next",
    prevEl: ".testimonials-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 32,
    },
  },
});
