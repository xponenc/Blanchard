$(document).ready(function () {
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
        console.log('<=768')
        $('.tooltip').on('click', function () {
            const btn = this
            $('.tooltip').each(function (index, element) {
                if (element === btn) {
                    $(element).toggleClass('tooltip-active');
                    console.log('Перекл')
                    shiftToopltip.call(btn)
                    if ($(btn).children('.tooltiptext').css('opacity') == '0') {
                        console.log('Спрятан - показываю')
                        $(btn).children('.tooltiptext').css('opacity', '1')
                        $(btn).children('.tooltiptext').css('visibility', 'visible')
                    } else {
                        console.log('Показан - прячу')
                        $(btn).children('.tooltiptext').css('opacity', '0')
                        $(btn).children('.tooltiptext').css('visibility', 'invisible')
                    }
                } else {
                    console.log('Выкл')
                    $(element).removeClass('tooltip-active')
                    // $(btn).children('.tooltiptext').css('opacity', '0')
                    // $(btn).children('.tooltiptext').css('visibility', 'invisible')
                }
            })
        })
        $('.tooltip').blur(function () {
            console.log('не в фокусе')
            $(this).removeClass('tooltip-active');
            $(this).children('.tooltiptext').css('opacity', '0')
            $(this).children('.tooltiptext').css('visibility', 'invisible')
        })
    }

    function shiftToopltip() {
        console.log($(this).innerWidth())
        var positionX = $(this).position().left + $(this).innerWidth() / 2;
        console.log($(this).parent())
        console.log('позиция', positionX)

        var widthParent = $('.projects__text').innerWidth()
        console.log('ширина абзаца', widthParent)

        console.log('запас справа', widthParent - positionX)

        var widthTooltip = $(this).children('.tooltiptext').innerWidth()
        console.log('ширина тултип', widthTooltip)

        if (positionX + widthTooltip / 2 > widthParent) {
            var left = positionX + widthTooltip / 2 - widthParent
            console.log("Не хватает", left)
            console.log('Вылез вправо - сдвиг')
            var leftShift = widthTooltip / 2 + left
            console.log(leftShift)
            $(this).children('.tooltiptext').css('left', 1)
        }

        $(this).children('.tooltiptext').css('opacity', '1')
        $(this).children('.tooltiptext').css('visibility', 'visible')
    }
})