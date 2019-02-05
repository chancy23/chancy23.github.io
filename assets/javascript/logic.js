$(document).ready(function () {
  //initialize modals
  $(".modal").modal();
  //initialize sidenav
  $("#mobileNav").sidenav();
  //parallax
  $('.parallax').parallax();

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


})