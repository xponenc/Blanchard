$(document).ready(function () {
    $('.nav__top__link, .hero__btn').on('click', function (event) {
        event.preventDefault();

        hrefId = $(this).attr('href')
        // console.log(hrefId)
        //если надо корректируем сдвиг высотой header
        let headerHeight = $('.header').height()
        // console.log(headerHeight)
        //offset это координата картинки, top - от верха
        let offset = $(hrefId).offset().top;
        // console.log(offset)
        //анимация скролла, 1000мс
        $('body,html').animate({
            scrollTop: offset,
        }, 1000);
    });

    $('.btn__to-top').on('click', function (event) {
        event.preventDefault();

        $('body,html').animate({
            scrollTop: 0,
        }, 1000);
    });

    // let showedMap = false
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 1100) {
            $('.btn__to-top').css('display', 'inline-block');
            // if (!showedMap) {
            //     showedMap = true
            //     console.log(showedMap)
            //     showMap()
            //     ymaps.ready(init);
            // }
        }
        else {
            $('.btn__to-top').css('display', 'none');
        }
    });

    // function showMap() {
    //     console.log('Создаю скрипт')
    //     var sc = document.createElement('script');
    //     sc.src = 'https://api-maps.yandex.ru/2.1/?apikey=edb7a56f-b6d2-4a63-af7c-ab1645a6e948&lang=ru_RU';
    //     sc.type = 'text/javascript';
    //     $(sc).insertAfter($('.modal-overlay.closed')); 
    // }

    // function init() {
    //     var myMap = new ymaps.Map("mapYandex", {
    //         center: [55.760091893815854, 37.63869358468625],
    //         zoom: 14,
    //         controls: []
    //     }),
    //         // Создаем геообъект с типом геометрии "Точка".
    //         myGeoObject = new ymaps.GeoObject({
    //             // Описание геометрии.
    //             geometry: {
    //                 type: "Point",
    //                 coordinates: [55.75846806898367, 37.60108849999989]
    //             },
    //             // Свойства.
    //             properties: {
    //                 // Контент метки.
    //                 iconContent: 'Леонтьевский переулок, дом 5, строение 1',
    //                 hintContent: 'Леонтьевский переулок, дом 5, строение 1',
    //             }
    //         }, {
    //             // Опции.
    //             // Иконка метки будет растягиваться под размер ее содержимого.
    //             preset: 'islands#blackStretchyIcon',
    //             // Метку можно перемещать.
    //             draggable: true,
    //             iconLayout: 'default#image',
    //             // Своё изображение иконки метки.
    //             iconImageHref: 'img/icons/map-pin.svg',
    //             // Размеры метки.
    //             iconImageSize: [20, 20],
    //             // Смещение левого верхнего угла иконки относительно
    //             // её "ножки" (точки привязки).
    //             iconImageOffset: [-10, -10]
    //         });
    //     myMap.geoObjects
    //         .add(myGeoObject);

    //     // ON RESIZE
    //     //Get curent center and zoom
    //     // var pixelCenter = myMap.getGlobalPixelCenter('map_page');

    //     //
    //     function onResizeMap() {
    //         if ($(window).width() > '1360') {
    //             //Set New center
    //             myMap.setCenter([55.760091893815854, 37.63869358468625]);
    //             // var pixelCenter2 = myMap.getGlobalPixelCenter('map_page');
    //         } else if ($(window).width() > '1024') {
    //             myMap.setCenter([55.75808357148573, 37.615080153259235]);
    //         } else {
    //             myMap.setCenter([55.75669543341636, 37.60865232942189]);
    //         }
    //     } onResizeMap();

    //     window.onresize = function () {
    //         onResizeMap();
    //     };


    //     var width = screen.width
    //     if ((width <= 550) || (window.innerWidth <= 550)) {
    //         console.log('Перемещение блока карты')
    //         $('.contacts__map').insertAfter($('.info__showroom'));
    //     }
    // }
});