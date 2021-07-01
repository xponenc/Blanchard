$(document).ready(function () {
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
})