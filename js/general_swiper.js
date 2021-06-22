$(document).ready(function () {
    var width = screen.width


    const swiper = new Swiper('.hero__slider', {
        preloadImages: false,
        lazy: true,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 100000,
        },
    });

    const swiper2 = new Swiper('.gallery__slider', {
        // preloadImages: false,
        slidesPerView: 1,
        // slidesPerColumn: 2,
        // slidesPerGroup: 3,
        spaceBetween: 50,
        breakpoints: {
            // // when window width is >= 320px
            // 320: {
            //     slidesPerView: 2,
            //     spaceBetween: 20
            // },
            // // when window width is >= 480px
            551: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                slidesPerGroup: 2,
                spaceBetween: 34,

            },
            // when window width is >= 640px
            1360: {
                slidesPerView: 3,
                slidesPerColumn: 2,
                slidesPerGroup: 3,
                spaceBetween: 50,
            }
        },
        pagination: {
            el: ".gallery__slider__control .block-pagination",
            type: "fraction",
            clickable: true,
        },
        navigation: {
            nextEl: '.gallery__slider__control .btn_next',
            prevEl: '.gallery__slider__control .btn_prev',
        },
    });

    if (width > 550) {
        const swiper3 = new Swiper('.publication__slider', {
            // preloadImages: false,
            // loop: true,
            // loopFillGroupWithBlank: true,
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
                el: ".publication__slider__control .block-pagination",
                type: "fraction",
                clickable: true,
            },
            navigation: {
                nextEl: '.publication__slider__control .btn_next',
                prevEl: '.publication__slider__control .btn_prev',
            },
        });
    } else {
        $('.publication__slide__item, .publication__slide').removeClass('swiper-slide')
        $('.publication__slider').removeClass('swiper-container')
        $('.publication__slider__wrapper').removeClass('swiper-wrapper')
    }


    const swiper4 = new Swiper('.partners__slider', {
        // preloadImages: false,
        loop: true,
        breakpoints: {
            240: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetween: 21,
                centeredSlides: true,
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
            nextEl: '.partners__slider__control .btn_next',
            prevEl: '.partners__slider__control .btn_prev',
        },
    });

    if (width <= 550) {
        $('.events__list').removeClass('events__list')
        $('.events__item').addClass('swiper-slide')
        $('.events__slider').addClass('swiper-container')
        $('.events__slider__wrapper').addClass('swiper-wrapper')
        $('.events__pagination').css('display', 'block')
        const swiper5 = new Swiper('.events__slider', {
            loop: true,
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 21,
            centeredSlides: true,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
})


