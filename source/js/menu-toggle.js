let menuList = document.querySelector('.menu__list');
let menuToggle = document.querySelector('.menu__toggle');

menuToggle.addEventListener('click', function() {
  if (menuToggle.classList.contains('menu__toggle--closed')) {
    menuList.classList.add('menu__list--opened')
    menuToggle.classList.remove('menu__toggle--closed');
    menuToggle.classList.add('menu__toggle--opened');
  } else {
    menuList.classList.add('menu__list--closed');
    menuToggle.classList.remove('menu__toggle--opened');
    menuToggle.classList.add('menu__toggle--closed');
  }
});
