$(document).ready(function () {
  //initialize modals
  $(".modal").modal();
  //initialize sidenav
  $("#mobileNav").sidenav();

  //swiper and its customization
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
















})