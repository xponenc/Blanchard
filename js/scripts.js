$(document).ready(function () {
    // gallery select
    const element1 = document.querySelector('#id-filter-1');
    const choices1 = new Choices(element1, {
      searchEnabled: false,
      itemSelectText: '',
      position: 'bottom',
    });
    choices1.setChoices(
      [
        { value: 'One', label: 'Живопись', selected: true },
        { value: 'One', label: 'Рисунок', },
        { value: 'Two', label: 'Скульптура', },
      ],
      'value',
      'label',
      false,
    );  

    // gallery modal
    $('.gallery__slide').click(function () {
        var bgImage = $(this).children('.gallery__slide-image').attr("src");
        var header = $(this).children('.gallery__slide-author').text()
        var subheader = $(this).children('.gallery__slide-pict-name').text()
        var subSubheader = $(this).children('.gallery__slide-create-years').text()
        var info = $(this).children('.gallery__slide-info').text()
        $('.modal__content-header').text(header)
        $('.modal__content-subheader').text(subheader)
        $('.modal__content-sub-subheader').text(subSubheader)
        $('.modal__content-description').text(info)
        $('.modal__content-img').css('background-image', 'url(' + bgImage + ')');

        if (((screen.width > 1024) || (screen.width <= 768)) && ((window.innerWidth > 1024) || (window.innerWidth <= 768))) {
            $('.modal').toggleClass("closed")
            $('.modal-overlay').toggleClass("closed")
        }
        else {
            $('.modal').insertAfter($('.gallery__swiper-control'));
            $('.modal').toggleClass("closed")
        }
    });

    $('.modal__btn-close').on('click', function () {
        if (((screen.width > 1024) || (screen.width <= 768)) && ((window.innerWidth > 1024) || (window.innerWidth <= 768))) {
            $('.modal').toggleClass("closed")
            $('.modal-overlay').toggleClass("closed")
        }
        else {
            $('.modal').toggleClass("closed")
        }
    })

    // catalog
    function onResizeCalc() {
        $('.accordion__content').each(function (index, element) {
            var padding = 35
            var countItems = $(this).children('.catalog__list').children('.catalog__item').length
            var width = screen.width
            // var width = width.innerWidth
            if (width > 1360) {
                var columns = 3
                var unit = 37.5
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
            $(this).children('.catalog__list').css('height', heightList + padding + 'px')
        })
    }
    onResizeCalc();
    $(window).resize(function () {
        onResizeCalc();
    })
    $('.lang-tabs__btn').on('click', function () {
        const path = $(this).data('path')

        $('.lang-tabs__btn').removeClass('lang-tabs__btn_active')
        $('.catalog__language').removeClass('catalog__language_active')

        $(`[data-path="${path}"]`).addClass('lang-tabs__btn_active')
        $(`[data-target="${path}"]`).addClass('catalog__language_active')
    })

    $('.catalog__item-btn').on('click', function () {
        const path = $(this).data('path')

        $('.catalog__item-btn').removeClass('catalog__item-btn_active')
        $('.catalog__author').removeClass('author_active')

        $(`[data-path="${path}"]`).addClass('catalog__item-btn_active')
        $(`[data-target="${path}"]`).addClass('author_active')

        if ((screen.width <= 768) || (window.innerWidth <= 768)) {
            let offset = $(`[data-target="${path}"]`).offset().top;
            $('body,html').animate({
                scrollTop: offset,
            }, 1000);
        }
    })


    $(function () {
        $("#accordion").accordion({
            heightStyle: "fill",
            icons: false,
            collapsible: true,
            header: '.accordion__btn',
        });
    });

    // add ARIA for accordion

    var accordionButtons = $('.accordion__btn');

    function accordionToggle() {
        $('.accordion__btn').on('click', function (e) {
            $control = $(this);
            accordionContent = $control.attr('aria-controls');
            // console.log(accordionContent)
            checkOthers($control[0]);

            isAriaExp = $control.attr('aria-expanded');
            newAriaExp = (isAriaExp == "false") ? "true" : "false";
            $control.attr('aria-expanded', newAriaExp);

            isAriaHid = $('#' + accordionContent).attr('aria-hidden');
            if (isAriaHid == "true") {
                $('#' + accordionContent).attr('aria-hidden', "false");
                // $('#' + accordionContent).css('display', 'block');
            } else {
                $('#' + accordionContent).attr('aria-hidden', "true");
                // $('#' + accordionContent).css('display', 'none');
            }
        });
    };

    function checkOthers(elem) {
        for (var i = 0; i < accordionButtons.length; i++) {
            if (accordionButtons[i] != elem) {
                if (($(accordionButtons[i]).attr('aria-expanded')) == 'true') {
                    $(accordionButtons[i]).attr('aria-expanded', 'false');
                    content = $(accordionButtons[i]).attr('aria-controls');
                    $('#' + content).attr('aria-hidden', 'true');
                    // $('#' + content).css('display', 'none');
                }
            }
        }
    };

    //call this function on page load
    accordionToggle(); $(function () {
        $("#accordion").accordion({
            heightStyle: "fill",
            icons: false,
            collapsible: true,
            header: '.accordion__btn',
        });
    });

    // add ARIA for accordion

    var accordionButtons = $('.accordion__btn');

    function accordionToggle() {
        $('.accordion__btn').on('click', function (e) {
            $control = $(this);

            accordionContent = $control.attr('aria-controls');
            // console.log(accordionContent)
            checkOthers($control[0]);

            isAriaExp = $control.attr('aria-expanded');
            newAriaExp = (isAriaExp == "false") ? "true" : "false";
            $control.attr('aria-expanded', newAriaExp);

            isAriaHid = $('#' + accordionContent).attr('aria-hidden');
            if (isAriaHid == "true") {
                $('#' + accordionContent).attr('aria-hidden', "false");
                // $('#' + accordionContent).css('display', 'block');
            } else {
                $('#' + accordionContent).attr('aria-hidden', "true");
                // $('#' + accordionContent).css('display', 'none');
            }
        });
    };

    function checkOthers(elem) {
        for (var i = 0; i < accordionButtons.length; i++) {
            if (accordionButtons[i] != elem) {
                if (($(accordionButtons[i]).attr('aria-expanded')) == 'true') {
                    $(accordionButtons[i]).attr('aria-expanded', 'false');
                    content = $(accordionButtons[i]).attr('aria-controls');
                    $('#' + content).attr('aria-hidden', 'true');
                    // $('#' + content).css('display', 'none');
                }
            }
        }
    };

    //call this function on page load
    accordionToggle();

    //   publication

    function showChecked() {
        $('.genre__label').each(function (index, value) {
            if ($(this).children('.genre__checkbox').is(':checked')) {
                $(this).css('display', 'flex')
                $(this).addClass('genre__label_checked')
            } else {
                $(this).css('display', 'none')
            }
        });
    }

    if ((screen.width <= 550) || (window.innerWidth <= 550)) {
        showChecked()
        $('.genre__heading').on('click', function () {
            $('.genre__heading').toggleClass('pub-angle-down')
            $('.genre__heading').toggleClass('pub-angle-up')

            if ($('.genre__heading').hasClass('pub-angle-down')) {
                showChecked()
                hideUnchecked()
            } else {
                $('.genre__label').css('display', 'flex')
            }
        })
        var sc = document.createElement('script');
        sc.src = 'https://sourse.xakplant.ru/lib/js/stickjaw.min.js';
        sc.type = 'text/javascript';
        if (typeof sc['async'] !== 'undefined') {
            sc.async = true;
        }
        $(sc).insertAfter($('.modal-overlay.closed'));
        // var sj = new SJ();
    }

    function hideUnchecked() {
        $('.genre__label_checked').each(function (index, element) {
            $(element).on('click', function () {
                $(this).removeClass('genre__label_checked')
                $(this).children('.genre__checkbox').prop('checked', false)
                $(this).hide(300)
            })
        })
    }

    // projects

    shiftToopltip()
    if (((screen.width <= 1024) || (window.innerWidth <= 1024)) && ((screen.width > 768) || (window.innerWidth > 768))) {
        // console.log(screen.width, window.innerWidth)
        $('.tooltiptext-mark').click(function () {
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
        // console.log(screen.width, window.innerWidth)
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

    // events

    $('.events__btn').on('click', function(event){
        event.preventDefault();
        $(this).addClass('visually-hidden')
        $('.events__item').css('display', 'flex')
        $('.events__item').css('opacity', '1')
    })

    // LazyLoad
    var lazyLoadInstance = new LazyLoad({
    });


});
