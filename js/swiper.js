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
        480: {
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
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 50,
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
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 50,
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



