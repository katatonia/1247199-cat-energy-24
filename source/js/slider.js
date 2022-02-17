let offset = 0;
const sliderList = document.querySelector('.slider__list');
const btnBefore = document.querySelector('.range__text--before');
const btnAfter = document.querySelector('.range__text--after');
const rangeToggle = document.querySelector('.range__toggle');

btnAfter.addEventListener('click', () => {
  offset += 280;
  if (offset > 280) {
    offset = 280;
  }
  sliderList.style.left = -offset + 'px';
  rangeToggle.style.left = 50 + 'px';
})

btnBefore.addEventListener('click', () => {
  offset -= 280;
  if (offset < 280) {
    offset = 0;
  }
  sliderList.style.left = offset + 'px';
  rangeToggle.style.left = 25 + 'px';
})

