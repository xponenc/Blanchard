$(document).ready(function () {
    $('.accordion__content').each(function (index, element) {
        // console.log(this)
        // console.log(element)
        var countItems = $(this).children('.catalog__info__list').children('.catalog__info__item').length
        var width = screen.width
        if (width > 1360 ) {
            var columns = 3
            var unit = 36.25
        }
        else  if ((width <= 1360) && (width >= 1024 )){
            console.log('1360-1024')
            var columns  = 2
            var unit = 32
        } else if ((width < 1024) && (width > 667 )) {
            console.log('1024 - 668')
            var columns  = 3
            var unit = 36.25

        } else if ((width <= 667) && (width > 550 )) {
            console.log('667-549')
            var columns  = 2
            var unit = 36.25
        } else { 
            var columns  = 1
            var unit = 32
        } 
        // console.log(width)
        var heightList =  Math.ceil(countItems / columns ) * unit
        // console.log(countItems)
        // console.log(heightList)
        $(this).css('height', heightList + 54 + 'px')
        $(this).children('.catalog__info__list').css('height', heightList + 'px')
    })
})