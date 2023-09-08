const btnBurger = document.querySelector('.menu-burger');
const menuBody = document.querySelector('.menu-body');

document.addEventListener('click', menu);
function menu(event) {
    if (event.target.closest('.menu-burger')) {
        menuBody.classList.toggle('active');
        btnBurger.classList.toggle('active');
    }
    if (!event.target.closest('.menu-burger') & !event.target.closest('.menu-body')
  ) {
        menuBody.classList.remove('active');
        btnBurger.classList.remove('active');
    }
}

new Swiper('.swiper', {
  loop: true, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
  }
})
