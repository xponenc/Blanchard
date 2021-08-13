    gallerySlider = new Swiper('.gallery__swiper', {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        preloadImages: false,
        lazy: true,
        watchSlidesVisibility: true,
        breakpoints: {
            240: {
                slidesPerView: 1,
                spaceBetween: 15,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
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
