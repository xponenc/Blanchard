ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("mapYandex", {
    center: [48.872185, 2.354215],
    zoom: 16,
    controls: []
  }),

    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [48.872185, 2.354215]
      },
      // Свойства.
      properties: {
        // Контент метки.
        iconContent: 'Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени  54',
        hintContent: 'Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени  54',

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
      iconImageSize: [28, 40],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-14, -40]

    });


  myMap.geoObjects
    .add(myGeoObject);
}