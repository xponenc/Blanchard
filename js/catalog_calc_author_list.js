$(document).ready(function () {
    function onResizeCalc() {
        $('.accordion__content').each(function (index, element) {
            var padding = 54
            var countItems = $(this).children('.catalog__info__list').children('.catalog__info__item').length
            var width = screen.width
            if (width > 1360 ) {
                var columns = 3
                var unit = 36.25
            }
            else  if ((width <= 1360) && (width > 768 )){
                var columns  = 2
                var unit = 32
            } else if ((width <= 768) && (width > 667 )) {
                var columns  = 3
                var unit = 36.25
    
            } else if ((width <= 667) && (width > 550 )) {
                var columns  = 2
                var unit = 36.25
            } else { 
                var columns  = 1
                var unit = 32
                var padding = 39
            } 
            var heightList =  Math.ceil(countItems / columns ) * unit
            $(this).css('height', heightList + padding + 'px')
            $(this).children('.catalog__info__list').css('height', heightList + 'px')
        })
    }
    onResizeCalc();
    $(window).resize(function() {
        onResizeCalc();
      })
})