$(document).ready(function () {
    if ((screen.width <= 768) || (window.innerWidth <= 768)) {
        $('.nav__top__search-toogle').on('click', function () {
            $('.nav__bottom-bgcolor').toggleClass('nav__bottom-bgcolor_active')
        })
        $('.nav__bottom__search-close').on('click', function () {
            $('.nav__bottom-bgcolor').toggleClass('nav__bottom-bgcolor_active')
        })
    }
})