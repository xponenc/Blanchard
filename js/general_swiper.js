var width = screen.width
const swiper = new Swiper('.hero__swiper', {
    preloadImages: false,
    lazy: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 3000,
    },
});
const swiper2 = new Swiper('.gallery__swiper', {
    preloadImages: false,
    lazy: true,
    watchSlidesVisibility: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        551: {

            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,

        },
        1360: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerColumn: 2,
            spaceBetween: 50,
        }
    },
    pagination: {
        el: ".gallery__swiper-control .block-pagination",
        type: "fraction",
        clickable: true,
    },
    navigation: {
        nextEl: '.gallery__swiper-control .swiper-control__btn_next',
        prevEl: '.gallery__swiper-control .swiper-control__btn_prev',
    },
});

if ((screen.width <= 768) || (window.innerWidth <= 768)) {
    $('.gallery__content').insertAfter($('.info__filter'));
}

if (width > 550) {
    const swiper3 = new Swiper('.publication__swiper', {
        preloadImages: false,
        lazy: true,
        watchSlidesVisibility: true,
        loop: true,
        breakpoints: {
            240: {
                slidesPerGroup: 2,
                slidesPerColumn: 4,
                slidesPerView: 2,
                spaceBetween: 30,
            },
            551: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34,
            },
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 49,
            },
            1360: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
            }
        },
        pagination: {
            el: ".publication__swiper-control .block-pagination",
            type: "fraction",
            clickable: true,
        },
        navigation: {
            nextEl: '.publication__swiper-control .swiper-control__btn_next',
            prevEl: '.publication__swiper-control .swiper-control__btn_prev',
        },
    });
} else {
    console.log('ПАБ')
    $('.publication__slide').removeClass('swiper-slide')
    $('.publication__swiper').removeClass('swiper-container')
    $('.publication__swiper-wrapper').removeClass('swiper-wrapper')

    $('.publication__slide-img').each(function (index, element) {
        var bgnd = $(element).children('img').attr('data-src')
        $(element).css('background-image', 'url(' + bgnd + ')')
        $(element).css('background-size', 'contain')

        // $(element).css('opacity', 1)
        // $(element).removeAttr('data-background')
        $(element).children('.swiper-lazy-preloader').remove()
    })
}


const swiper4 = new Swiper('.partners__swiper', {
    preloadImages: false,
    lazy: true,
    watchSlidesVisibility: true,
    loop: true,
    breakpoints: {
        240: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 21,
            // centeredSlides: true,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
        },
        1360: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
    },
    navigation: {
        nextEl: '.partners__swiper-control .swiper-control__btn_next',
        prevEl: '.partners__swiper-control .swiper-control__btn_prev',
    },
});