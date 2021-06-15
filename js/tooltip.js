$(document).ready(function () {
    $('.tooltiptext').click(function () {
        console.log($(this).parent())
        var width = screen.width
        if (width <= 1024 ) {
            $(this).css('opacity', '0')
            $(this).css('visibility', 'hidden')

            // $(this).parent().blur()
        }
    })
})