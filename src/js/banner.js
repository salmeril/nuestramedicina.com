document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
      loop: true, // Slider infinito
      autoplay: {
        delay: 5000, // Cambiar cada 5 segundos
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  