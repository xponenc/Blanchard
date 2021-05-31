const swiper = new Swiper('.hero__slider', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper('.gallery__slider', {
    loop: true,
    // slidesPerGroup: 4,
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const swiper3 = new Swiper('.partners__slider', {
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});