let menuOpen = document.querySelector('.menu-toggle');
let menuWrapper = document.querySelector('.menu-wrapper');

menuOpen.addEventListener('click', function () {
    menuOpen.classList.toggle('bx-x');
    menuWrapper.classList.toggle('active');
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      },
      loop: true,
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});