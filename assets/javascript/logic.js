$(document).ready(function () {
  //initialize modals
  $(".modal").modal();
  //initialize sidenav
  $("#mobileNav").sidenav();
  //materialize parallax
  $('.parallax').parallax();
  $('.pushpin').pushpin({
    top: 50,
    bottom: 1700,
    offset: 30,
  });
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