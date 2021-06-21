ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("mapYandex", {
    center: [55.760091893815854, 37.63869358468625],
    zoom: 14,
    controls: []
  }),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [55.75846806898367, 37.60108849999989]
      },
      // Свойства.
      properties: {
        // Контент метки.
        iconContent: 'Леонтьевский переулок, дом 5, строение 1',
        hintContent: 'Леонтьевский переулок, дом 5, строение 1',
      }
    }, {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands#blackStretchyIcon',
      // Метку можно перемещать.
      draggable: true,
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/pin.svg',
      // Размеры метки.
      iconImageSize: [20, 20],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-10, -10]
    });
  myMap.geoObjects
    .add(myGeoObject);

  // ON RESIZE
  //Get curent center and zoom
  // var pixelCenter = myMap.getGlobalPixelCenter('map_page');

  //
  function onResizeMap() {
    if ($(window).width() > '1360') {
      //Set New center
      myMap.setCenter([55.760091893815854, 37.63869358468625]);
      // var pixelCenter2 = myMap.getGlobalPixelCenter('map_page');
    } else if ($(window).width() > '1024') {
      myMap.setCenter([55.75808357148573, 37.615080153259235]);
    } else {
      myMap.setCenter([55.75669543341636, 37.60865232942189]);
    }
  } onResizeMap();

  window.onresize = function () {
    onResizeMap();
  };


  var width = screen.width
  if ((width <= 550) || (window.innerWidth <= 550)) {
    console.log('Перемещение блока карты')
    $('.contacts__map').insertAfter($('.info__showroom'));
  }
}