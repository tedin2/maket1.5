const swiper = new Swiper('.mySwiper', {
  width: 240,
  height: 72,
  loop: false,
  slidesPerView: 'auto',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    768: {
      toggle: false,
      loop: false,
      spaceBetween: 'auto',
      slidesPerView: 'auto',
      centeredSlides: false,
    }
  }
});
document.addEventListener('DOMContentLoaded', function() {
const button = document.getElementById('button');
const show = document.querySelector('.brands__wrapper-button');

button.addEventListener('click', function(event) {
  event.preventDefault;

  if (show.classList.contains('brands__wrapper-button')) {
    button.textContent = 'Скрыть';
      button.className = 'wrapper-button__button-show';
      show.className = 'brands__wrapper-button-show';
   } else {
      button.textContent = 'Показать все';
       button.className = 'wrapper-button__button'; 
       show.className = 'brands__wrapper-button';
   }
});
})