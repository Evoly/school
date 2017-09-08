
// top-slider

$(function () {
  $('#top-slider').carousel({
      interval:4000000,
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

ymaps.ready(init);

function init(){

    var myMap;

    myMap = new ymaps.Map("map", {
        center: [50.25489907311284,127.5666185],
        zoom: 17,
        controls: ['trafficControl']
    })

    var html  = '<div class="map">';
        html +=     '<div class="map-text">';
        html +=         '<p class="map-title">Мы находимся здесь</p>';
        html +=         '<p>г.Благовещенск, ул. Ленина 27, 3 этаж, каб.№ 311, 312</p>';
        html +=         '<p class="tel">+7 (924) 344-22-59</p>';
        html +=         '<p class="text whatsapp-text">Поддерживаем WhatsApp</p>';
        html +=         '<p class="email">542-666@mail.ru</p>';
        html +=         '<p class="text ">По любым вопросам</p>';
        html +=     '</div>';
        html += '</div>';

    var myPlacemark = new ymaps.Placemark([50.2549, 127.56661],
        {
          balloonContent: html
        },
        {
          balloonLayout: "default#imageWithContent",
          balloonContentSize: [280, 151],
          balloonImageOffset: [0, -70],
          iconColor: '#117af0'
        }
        );

    myMap.geoObjects.add(myPlacemark);

    myPlacemark.balloon.open();

    myMap.events.add('click', function (e) {
       myMap.balloon.close();
     });

}
