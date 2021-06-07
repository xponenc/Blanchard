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
        coordinates: [55.75797806898367, 37.59380849999989]
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
}