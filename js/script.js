
// top-slider

$(function () {
  $('#top-slider').carousel({
      interval:4000,
      pause: "hover",
  });
});

// car slider

$(document).ready(function(){
    $('.car-slider-content').slick({
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.js-car-slider-prev'),
      nextArrow: $('.js-car-slider-next')
    });
  });
