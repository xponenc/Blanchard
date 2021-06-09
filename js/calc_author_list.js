$(document).ready(function () {
    $('.catalog__info__list').each(function (index, element) {
        console.log(this)
        console.log(element)
        console.log($(this).children('.catalog__info__item').length)
        var height = ($(this).children('.catalog__info__item').length) * 
    })
})