// // HERO: свайпер
// new Swiper('.hero__swiper', {
//     preloadImages: false,
//     lazy: true,
//     loop: true,
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true
//     },
//     autoplay: {
//         delay: 3000,
//     },
// });
// // GALLERY: свайпер
// new Swiper('.gallery__swiper', {
//     preloadImages: false,
//     lazy: true,
//     watchSlidesVisibility: true,
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//             spaceBetween: 15,
//         },
//         551: {

//             slidesPerView: 2,
//             slidesPerColumn: 2,
//             slidesPerGroup: 2,
//             spaceBetween: 34,

//         },
//         1360: {
//             slidesPerView: 3,
//             slidesPerGroup: 3,
//             slidesPerColumn: 2,
//             spaceBetween: 50,
//         }
//     },
//     pagination: {
//         el: ".gallery__swiper-control .block-pagination",
//         type: "fraction",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.gallery__swiper-control .swiper-control__btn_next',
//         prevEl: '.gallery__swiper-control .swiper-control__btn_prev',
//     },
// });
// // Перенос позиции слайдера на разрешении 768 и меньше
// if ((screen.width <= 768) || (window.innerWidth <= 768)) {
//     const target = document.querySelector('.info__filter')
//     const content = document.querySelector('.gallery__content')

//     target.insertAdjacentElement('afterend', content)
// }
// // PUBLICATIONS: свайпер
// // Инициализируется на разрешении больше 550
// if ((screen.width > 550) || (window.innerWidth > 550)) {
//     new Swiper('.publication__swiper', {
//         preloadImages: false,
//         lazy: true,
//         watchSlidesVisibility: true,
//         loop: true,
//         breakpoints: {
//             551: {
//                 slidesPerView: 2,
//                 slidesPerGroup: 2,
//                 spaceBetween: 34,
//             },
//             1024: {
//                 slidesPerView: 2,
//                 slidesPerGroup: 2,
//                 spaceBetween: 49,
//             },
//             1360: {
//                 slidesPerView: 3,
//                 slidesPerGroup: 3,
//                 spaceBetween: 50,
//             }
//         },
//         pagination: {
//             el: ".publication__swiper-control .block-pagination",
//             type: "fraction",
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.publication__swiper-control .swiper-control__btn_next',
//             prevEl: '.publication__swiper-control .swiper-control__btn_prev',
//         },
//     });
// } else {
//     document.querySelector('.publication__slide').classList.remove('swiper-slide')
//     document.querySelector('.publication__swiper').classList.remove('swiper-container')
//     document.querySelector('.publication__swiper-wrapper').classList.remove('swiper-wrapper')

//     const publicationSlides = document.querySelectorAll('.publication__slide-img') 

//     if (publicationSlides.length > 0 ) {
//         publicationSlides.forEach(element => {
//             let bgnd = element.querySelector('img').dataset.src
//             element.style.cssText = `background-image: url("../${bgnd}"); background-size: contain;`
//             element.querySelector('.swiper-lazy-preloader').remove()
//         })
//     }
// }

// // PROJECTS: Свайпер
// new Swiper('.partners__swiper', {
//     preloadImages: false,
//     lazy: true,
//     watchSlidesVisibility: true,
//     loop: true,
//     breakpoints: {
//         240: {
//             slidesPerGroup: 1,
//             slidesPerView: 1,
//             spaceBetween: 21,
//             // centeredSlides: true,
//         },
//         768: {
//             slidesPerView: 2,
//             slidesPerGroup: 2,
//             spaceBetween: 34,
//         },
//         1024: {
//             slidesPerView: 2,
//             slidesPerGroup: 2,
//             spaceBetween: 50,
//         },
//         1360: {
//             slidesPerView: 3,
//             slidesPerGroup: 3,
//             spaceBetween: 50,
//         }
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.partners__swiper-control .swiper-control__btn_next',
//         prevEl: '.partners__swiper-control .swiper-control__btn_prev',
//     },
// });