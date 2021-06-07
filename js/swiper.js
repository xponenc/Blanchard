const swiper = new Swiper('.hero__slider', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 9000,
    },
    // pagination: {
    //     // el: '.swiper-pagination',
    //     // clickable: true,
    // },
    // navigation: {
    //     // nextEl: '.swiper-button-next',
    //     // prevEl: '.swiper-button-prev',
    // },
});

const swiper2 = new Swiper('.gallery__slider', {
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
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

// const swiperPrev = document.getElementById('swiperPrev')
// const swiperNext = document.getElementById('swiperNext')

// swiperPrev.addEventListener('click', () => {
//     swiper4.slidePrev();
// })
// swiperNext.addEventListener('click', () => {
//     swiper4.slideNext();
// })



