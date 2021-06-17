$(document).ready(function () {
    const swiper = new Swiper('.hero__slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 9000,
        },
    });

    const swiper2 = new Swiper('.gallery__slider', {
        slidesPerView: 1,
        // slidesPerColumn: 2,
        // slidesPerGroup: 3,
        // spaceBetween: 50,
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


    const swiper3 = new Swiper('.publication__slider', {
        // loop: true,
        // loopFillGroupWithBlank: true,
        // slidesPerGroup: 2,
        // slidesPerColumn: 4,
        // slidesPerView: 2,
        // spaceBetween: 30,
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

    const swiper4 = new Swiper('.partners__slider', {
        loop: true,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 21,
        // centeredSlides: true,
        breakpoints: {
            // 240: {
            //     slidesPerView: 2,
            //     slidesPerGroup: 2,
            //     spaceBetween: 34,
            // },
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

    var width = screen.width
    if (width <= 550) {
        console.log('Стартует свайпер events')
        $('.events__list').removeClass('events__list')
        $('.events__item').addClass('swiper-slide')
        $('.events__slider').addClass('swiper-container')
        $('.events__slider__wrapper').addClass('swiper-wrapper')
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


