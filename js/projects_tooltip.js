$(document).ready(function () {
    shiftToopltip()
    if (((screen.width <= 1024) || (window.innerWidth <= 1024)) && ((screen.width > 768) || (window.innerWidth > 768))) {
        console.log('true')
        $('.tooltiptext').on('click', function () {
            console.log($(this).parent())
            $(this).parent().blur()
            $(this).css('opacity', '0')
            $(this).css('visibility', 'hidden')

        })

        $('.tooltip').blur(function () {
            console.log('не в фокусе')
            $(this).children('.tooltiptext').css('opacity', '0')
            $(this).children('.tooltiptext').css('visibility', 'invisible')
        })

    } else if ((screen.width <= 768) || (window.innerWidth <= 768)) {
        console.log('> 1024')
        $('.tooltip').on('click', function () {
            const btn = this
            $('.tooltip').each(function (index, element) {
                if (element === btn) {
                    $(element).toggleClass('tooltip-active');
                    if ($(btn).children('.tooltiptext').hasClass('tooltiptext_active')) {
                        $(btn).children('.tooltiptext').removeClass('tooltiptext_active')
                    } else {
                        $(btn).children('.tooltiptext').addClass('tooltiptext_active')

                    }
                } else {
                    $(element).removeClass('tooltip-active')
                }
            })
        })
        $('.tooltip').blur(function () {
            $(this).removeClass('tooltip-active');
            $(this).children('.tooltiptext').removeClass('tooltiptext_active')
        })
    }

    function shiftToopltip() {
        $('.tooltip').each(function (index, element) {
            var positionX = $(element).position().left;
            var widthParent = $('.projects__text').innerWidth()
            var widthTooltip = $(element).children('.tooltiptext').innerWidth()

            // Проверка - тултип вылез вправо
            if (positionX + widthTooltip / 2 > widthParent) {
                var leftOverflow = positionX + widthTooltip / 2 - widthParent + $(element).innerWidth() / 2
                var leftShift = widthTooltip / 2 + leftOverflow
                $(element).children('.tooltiptext').css('margin-left', - leftShift - 15)
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