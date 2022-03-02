const slider = document.querySelector('.swiper');
const slider1 = document.querySelector('.galery__slider-container');
const slider2 = document.querySelector('.event__swiper');
const slider3 = document.querySelector('.project__swiper');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
    delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
    /* navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
    }, */
    /* pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  } */

})

let mySwiper1 = new Swiper(slider1, {
	slidesPerView: "auto",
    spaceBetween: 40,
        /* loop: true, */
        /* loopedSlides: 3, */
        allowTouchMove: true,
    // пагинация
    pagination: {
        el: '.swiper-pagination',
		    clickable: true,
		    type: 'fraction',
    },
    // навигация
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
  },
  breakpoints: {
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 43,
    },
    1301: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 23,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 23,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    610: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});

let mySwiper2 = new Swiper(slider2, {
  slidesPerView: 3,
  slidesPerGroup: 3,
    spaceBetween: 50,
    /* loop: true, */
    allowTouchMove: true,
        // пагинация
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
      type: 'bullets',
      },
    // навигация
     navigation: {
      nextEl: '.swiper-button-right1',
      prevEl: '.swiper-button-left1',
  },
  breakpoints: {
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    610: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});

let mySwiper3 = new Swiper(slider3, {
  slidesPerView: 3,
  slidesPerGroup: 3,
    spaceBetween: 48,
    /* loop: true, */
    allowTouchMove: true,
        // пагинация
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
      },
    // навигация
     navigation: {
      nextEl: '.swiper-button-right2',
      prevEl: '.swiper-button-left2',
  },
  breakpoints: {
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 48,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 48,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33,
    },
    660: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});