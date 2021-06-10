$(document).ready(function () {
    $('.accordion__content').each(function (index, element) {
        console.log(this)
        console.log(element)
        var countItems = $(this).children('.catalog__info__list').children('.catalog__info__item').length
        var heightList =  Math.ceil(countItems /3 ) * 36.25
        console.log(countItems)
        console.log(heightList)
        $(this).css('height', heightList + 50 + 'px')
        $(this).children('.catalog__info__list').css('height', heightList + 'px')
    })
})