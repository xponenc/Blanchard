$(document).ready(function () {
    function onResizeCalc() {
        $('.accordion__content').each(function (index, element) {
            var padding = 40
            var countItems = $(this).children('.catalog__list').children('.catalog__item').length
            var width = screen.width
            // var width = width.innerWidth
            if (width > 1360) {
                var columns = 3
                var unit = 36.625
            }
            else if ((width <= 1360) && (width > 768)) {
                var columns = 2
                var unit = 32.5
                var padding = 40
            } else if ((width <= 768) && (width > 667)) {
                var columns = 3
                var unit = 36.25
                var padding = 45
            } else if ((width <= 667) && (width > 550)) {
                var columns = 2
                var unit = 36.25
            } else {
                var columns = 1
                var unit = 32
                var padding = 30
            }
            var heightList = Math.ceil(countItems / columns) * unit
            $(this).css('height', heightList + padding + 'px')
            $(this).children('.catalog__list').css('height', heightList + 'px')
        })
    }
    onResizeCalc();
    $(window).resize(function () {
        onResizeCalc();
    })
})