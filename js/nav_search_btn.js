$(document).ready(function () {
    if ((screen.width <= 768) || (window.innerWidth <= 768)) {
        $('.nav__top-search-toogle').on('click', function () {
            $('.nav__bottom').toggleClass('nav__bottom_active')
        })
        $('.nav__bottom-search-close').on('click', function () {
            $('.nav__bottom').toggleClass('nav__bottom_active')
        })
    }
})