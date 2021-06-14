$(document).ready(function () {
    $('.accordion__content').each(function (index, element) {
        // console.log(this)
        // console.log(element)
        var countItems = $(this).children('.catalog__info__list').children('.catalog__info__item').length
        var width = screen.width
        if (width <= 1360 ) {
            var columns  = 2
        }
        else {
            var columns = 3
        }
        // console.log(width)
        var heightList =  Math.ceil(countItems / columns ) * 36.25
        // console.log(countItems)
        // console.log(heightList)
        // $(this).css('height', heightList + 50 + 'px')
        $(this).children('.catalog__info__list').css('height', heightList + 'px')
    })
})