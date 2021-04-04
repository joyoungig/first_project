const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  observer: true,
  observeParents: true,
  swiper.update();
  // If we need pagination
  // Navigation arrows

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
