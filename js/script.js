
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




// yandex map

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [50.25489907311284,127.5666185],
            controls: ['trafficControl'],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search',
            suppressMapOpenBlock: true

        });



      myMap.geoObjects
          .add(new ymaps.Placemark([50.25489907311284,127.5666185], {
            balloonContent: ''
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#1e1a63'
        }))
})
