
const swiper = new Swiper('.swiper', {
  slidesPerView: 10,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  let windowWidth = window.innerWidth;
  let direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}



