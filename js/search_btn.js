$(document).ready(function () {
    var width = screen.width
    console.log(screen.width)
    console.log(window.innerWidth)
    if ((width <= 768) || (window.innerWidth <= 768)) {
        console.log('768')
        $('.nav__top__search-toogle').on('click', function () {
            $('.nav__bottom-bgcolor').toggleClass('nav__bottom-bgcolor_active')
        })
        $('.nav__bottom__search-close').on('click', function () {
            $('.nav__bottom-bgcolor').toggleClass('nav__bottom-bgcolor_active')
        })
    }
})