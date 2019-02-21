$(document).ready(function () {
  //initialize modals
  $(".modal").modal();
  //initialize sidenav
  $("#mobileNav").sidenav();
  //materialize parallax
  $('.parallax').parallax();

  $('.collapsible').collapsible();

  //for typed.js elements
  var typed = new Typed("#typedHeader", {
    strings: ["Hi, I'm Chancy..."],
    startDelay: 1000,
    typeSpeed: 30,
    showCursor: false
  });

  var typed2 = new Typed("#typed", {
    strings: ["Full Stack Web Developer", "Certified Usability Analyst", "Certified Associate in Project Management"],
    startDelay: 2500,
    typeSpeed: 40,
    fadeOut: true,
    loop: true
  });

});

//resume customer parallax
window.addEventListener('scroll', function (e) {
  const target = document.querySelectorAll('.scroll');

  let index = 0, length = target.length;
  for (index; index < length; index++) {
    var positionY = window.pageYOffset * target[index].dataset.ratey;
    if (target[index].dataset.direction === 'vertical') {
      target[index].style.transform = 'translate3d(0px, ' + positionY + 'px, 0px)';
    }
    else {
      var positionX = window.pageYOffset * target[index].dataset.ratex;
      target[index].style.transform = 'translate3d(' + positionX + 'px, ' + positionY + 'px, 0px)';
    }
  }
});