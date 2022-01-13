let menu = document.querySelector('.menu');
let menuToggle = document.querySelector('.page-header__toggle');

menuToggle.addEventListener('click', function() {
  if (menuToggle.classList.contains('page-header__toggle--closed')) {
    menuToggle.classList.remove('page-header__toggle--closed');
    menu.classList.remove('menu--closed');
  } else {
    menuToggle.classList.add('page-header__toggle--closed');
    menu.classList.add('menu--closed');
  }
});
