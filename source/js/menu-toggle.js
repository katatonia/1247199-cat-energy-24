let menuList = document.querySelector('.menu__list');
let menuToggle = document.querySelector('.page-header__toggle');

menuToggle.addEventListener('click', function() {
  if (menuToggle.classList.contains('page-header__toggle--closed')) {
    menuToggle.classList.remove('page-header__toggle--closed');
    menuList.classList.remove('menu__list--closed');
  } else {
    menuToggle.classList.add('page-header__toggle--closed');
    menuList.classList.add('menu__list--closed');
  }
});
