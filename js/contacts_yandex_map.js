$(document).ready(function () {
  let flagMap = false
  $(window).on('scroll', function () {
    if (!flagMap) {
      flagMap = true
      showMap()
      // ymaps.ready(init);
    }
    function showMap() {
      console.log('Создаю скрипт')
      var src = 'https://api-maps.yandex.ru/2.1/?apikey=edb7a56f-b6d2-4a63-af7c-ab1645a6e948&lang=ru_RU';
      $.getScript(src).done(function () {
        ymaps.ready(init);
        function init() {
          var myMap = new ymaps.Map("mapYandex", {
            center: [55.76009, 37.63869], zoom: 14, controls: []
          }),
            myGeoObject = new ymaps.GeoObject({
              geometry: {
                type: "Point",
                coordinates: [55.75846806898367, 37.60108849999989]
              },
              properties: {
                iconContent: 'Леонтьевский переулок, дом 5, строение 1',
                hintContent: 'Леонтьевский переулок, дом 5, строение 1',
              }
            }, {
              iconLayout: 'default#image',
              iconImageHref: 'img/icons/map-pin.svg',
              iconImageSize: [20, 20],
              iconImageOffset: [-10, -10]
            });
          if ($(window).width() > '1360') {
            myMap.setCenter([55.760091893815854, 37.63869358468625]);
          } else if ($(window).width() > '1024') {
            myMap.setCenter([55.75808357148573, 37.615080153259235]);
          } else {
            myMap.setCenter([55.758043717365965,37.61548821153161], 13);
          }
          myMap.geoObjects.add(myGeoObject);
        }

        window.onresize = function () {
          onResizeMap();
        };

        if ((screen.width <= 550) || (window.innerWidth <= 550)) {
          $('.contacts__map').insertAfter($('.info__showroom'));
        }
        function onResizeMap() {
          if ($(window).width() > '1360') {
            myMap.setCenter([55.760091893815854, 37.63869358468625]);
          } else if ($(window).width() > '768') {
            myMap.setCenter([55.75808357148573, 37.615080153259235]);
          } else {
            myMap.setCenter([10, 10]);
            myMap.setCenter([55.758043717365965,37.61548821153161], 13);
          }
        }
      })
    }
  })
})