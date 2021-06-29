$(document).ready(function () {
    shiftToopltip()
    if (((screen.width <= 1024) || (window.innerWidth <= 1024)) && ((screen.width > 768) || (window.innerWidth > 768))) {
        $('.tooltiptext-mark').click(function () {
            console.log($(this))
            $('.tooltiptext').css('opacity', '')
            $('.tooltiptext').css('visibility', '')
            $('.tooltiptext-mark').css('opacity', '')
            $('.tooltiptext-mark').css('visibility', '')
            $(this).parent().blur()
            $(this).css('opacity', '0')
            $(this).css('visibility', 'hidden')
            $(this).parent().children('.tooltiptext').css('opacity', '0')
            $(this).parent().children('.tooltiptext').css('visibility', 'hidden')
        })
    } else if ((screen.width <= 768) || (window.innerWidth <= 768)) {
        $('.tooltip').click(function () {
            const btn = this
            $(this).toggleClass('tooltip-active');
            $(this).children('.tooltiptext').toggleClass('tooltiptext_active')
            $('.tooltip').each(function (index, element) {
                if (element !== btn) {
                    $(element).removeClass('tooltip-active')
                    $(element).children('.tooltiptext').removeClass('tooltiptext_active')
                } 
            })
        })
    }

    function shiftToopltip() {
        $('.tooltip').each(function (index, element) {
            var positionX = $(element).position().left;
            var widthParent = $('.projects__text').innerWidth()
            var widthTooltip = $(element).children('.tooltiptext').innerWidth()
            console.log(element, positionX, widthTooltip, widthParent)
            console.log('вправо - ', positionX + widthTooltip / 2)
            console.log('влево - ', positionX - widthTooltip / 2)

            // Проверка - тултип вылез вправо
            if (positionX + widthTooltip / 2 > widthParent) {
                var leftOverflow = positionX + widthTooltip / 2 - widthParent + $(element).innerWidth() / 2
                var leftShift = widthTooltip / 2 + leftOverflow
                $(element).children('.tooltiptext').css('margin-left', - leftShift - 10)
            }
            // Проверка - тултип вылез влево
            if (positionX - widthTooltip / 2 < 0) {
                var rightOverflow = positionX - widthTooltip / 2
                var rightShift = widthTooltip / 2 + rightOverflow
                $(element).children('.tooltiptext').css('margin-left', - rightShift)
            }
        })
    }
})