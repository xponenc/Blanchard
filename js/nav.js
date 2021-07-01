$(document).ready(function () {
    if (window.innerWidth <= 1320) {
        $('.nav__toggle').on('click', function () {
            $('.nav__top-block').toggleClass('nav__top-block_active')
            $('.nav__top-sign-in-btn').toggleClass('btn_simple btn')
            $('.nav__top-burger-close').toggleClass('nav__top-burger-close_active')
        })
        $('.nav__top-burger-close').on('click', function () {
            $('.nav__top-block').toggleClass('nav__top-block_active')
            $('.nav__top-sign-in-btn').toggleClass('btn_simple btn')
            $('.nav__top-burger-close').toggleClass('nav__top-burger-close_active')
        })
    }
    if ((screen.width <= 768) || (window.innerWidth <= 768)) {
        $('.nav__top-search-toogle').on('click', function () {
            $('.nav__bottom').toggleClass('nav__bottom_active')
        })
        $('.nav__bottom-search-close').on('click', function () {
            $('.nav__bottom').toggleClass('nav__bottom_active')
        })
    }
    if (((screen.width <= 1360) && (screen.width > 768)) || ((window.innerWidth <= 1360) && (window.innerWidth > 768))) {
        $('.search__btn').insertAfter($('.search__label'));
    }

    $('.nav__bottom-link').on('click', function () {
        const btn = this
        $('.nav__bottom-link').each(function (index, element) {
            if (element === btn) {
                $(element).toggleClass('angle-up');
                $(element).toggleClass('angle-down');
                $(element).next().toggleClass('sub-menu_active')
            } else {
                $(element).addClass('angle-down')
                $(element).removeClass('angle-up')
                $(element).next().removeClass('sub-menu_active')
            }
        });
    });
})
$('.nav__bottom-sub-menu').each(function (index, element) {
    new SimpleBar(element, {
        autoHide: false,
        scrollbarMaxSize: 28,
    });
});