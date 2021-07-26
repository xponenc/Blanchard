$(document).ready(function () {
    // gallery select
    const element1 = document.querySelector('#id-filter-1');
    const choices1 = new Choices(element1, {
        silent: true,
        placeholder: true,
        searchEnabled: false,
        itemSelectText: '',
        position: 'bottom',
        renderSelectedChoices: 'always',
    });

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
            if ($(element).children('.catalog__list').length > 0) {
                var countItems = $(this).children('.catalog__list').children('.catalog__item').length
                var width = screen.width
                if (width > 1360) {
                    var columns = 3
                    var unit = 37.5
                    var padding = 40
                }
                else if ((width <= 1360) && (width > 768)) {
                    var columns = 2
                    var unit = 32.5
                    var padding = 45
                } else if ((width <= 768) && (width > 667)) {
                    var columns = 3
                    var unit = 36.25
                    var padding = 50
                } else {
                    var columns = 2
                    var unit = 36.25
                }

                if (width > 550) {
                    var heightList = Math.ceil(countItems / columns) * unit
                    $(this).css('height', heightList + padding + 'px')
                    $(this).children('.catalog__list').css('height', heightList + padding + 'px')
                }
            }
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

        $('.catalog__language_active').find('.catalog__item-btn').removeClass('catalog__item-btn_active')
        $('.catalog__language_active').find('.catalog__author').removeClass('author_active')
        $('.catalog__language_active').find('.catalog__item-btn').first().addClass('catalog__item-btn_active')
        $('.catalog__language_active').find('.catalog__author').first().addClass('author_active')
    })

    $('.catalog__item-btn').on('click', function () {
        const path = $(this).data('path')
        // let parent = $(this).parents('.catalog__language')
        $('.catalog__language_active').find('.catalog__item-btn').removeClass('catalog__item-btn_active')
        $('.catalog__language_active').find('.catalog__author').removeClass('author_active')

        // $('.catalog__item-btn').removeClass('catalog__item-btn_active')
        // $('.catalog__author').removeClass('author_active')

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
        $(".accordion").accordion({
            heightStyle: "content",
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
            // accordionContent = $control.attr('aria-controls');
            // console.log(accordionContent)
            checkOthers($control[0]);

            isAriaExp = $control.attr('aria-expanded');
            newAriaExp = (isAriaExp == "false") ? "true" : "false";
            $control.attr('aria-expanded', newAriaExp);

            // isAriaHid = $('#' + accordionContent).attr('aria-hidden');
            isAriaHid = $(this).next().attr('aria-hidden');
            if (isAriaHid == "true") {
                // $('#' + accordionContent).attr('aria-hidden', "false");
                $(this).next().attr('aria-hidden', "false");

                // $('#' + accordionContent).css('display', 'block');
            } else {
                // $('#' + accordionContent).attr('aria-hidden', "true");
                $(this).next().attr('aria-hidden', "true");

                // $('#' + accordionContent).css('display', 'none');
            }
        });
    };

    function checkOthers(elem) {
        for (var i = 0; i < accordionButtons.length; i++) {
            if (accordionButtons[i] != elem) {
                if (($(accordionButtons[i]).attr('aria-expanded')) == 'true') {
                    $(accordionButtons[i]).attr('aria-expanded', 'false');
                    // content = $(accordionButtons[i]).attr('aria-controls');
                    // $('#' + content).attr('aria-hidden', 'true');
                    // content = $(accordionButtons[i]).attr('aria-controls');
                    $(accordionButtons[i]).next().attr('aria-hidden', 'true');
                    // $('#' + content).css('display', 'none');
                }
            }
        }
    };

    //call this function on page load
    accordionToggle();

    //   publication


    function showCheckedGenre() {
        $('.genre__label').each(function (index, value) {
            let checkbox = $(this).find(':first-child')[0]
            if ($(checkbox).is(':checked')) {
                $(this).css('display', 'flex')
                $(this).addClass('genre__label_checked')
            } else {
                $(this).css('display', 'none')
            }
        });
        $('.genre__label_checked').each(function (index, element) {
            $(element).on('click', function () {
                if ($('.genre__heading').hasClass('pub-angle-down')) {
                    $(this).removeClass('genre__label_checked')
                    $(this).children('.genre__checkbox').prop('checked', false)
                    $(this).hide(300)
                }
            })
        })
    }

    if ((screen.width <= 550) || (window.innerWidth <= 550)) {
        showCheckedGenre()

        $('.genre__heading').on('click', function () {
            $('.genre__heading').toggleClass('pub-angle-down')
            $('.genre__heading').toggleClass('pub-angle-up')

            if ($('.genre__heading').hasClass('pub-angle-down')) {
                showCheckedGenre()
            } else {
                $('.genre__label').css('display', 'flex')
                $('.genre__label').removeClass('genre__label_checked')
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

    // Функция загрузки карточек events
    async function getEvents() {
        const file = 'json/events.json'
        let response = await fetch(file, {
            method: "GET",
        })
        if (response.ok) {
            let result = await response.json();
            loadEvents(result);
        } else {
            alert("Ошибка")
        }
    }

    function loadEvents(data) {
        let eventsItem = document.querySelector('.events__list')
        if (!eventsItem) {
            eventsItem = document.querySelector('.events__swiper-wrapper')
        }

        data.events.forEach(item => {
            const eventUrl = item.url
            const eventPlace = item.place
            const eventDate = item.date
            const eventSubheading = item.subheading
            const eventImage = item.image
            const eventDescription = item.description

            let eventTemplate = `<li class="events__item event swiper-slide">
                                    <div class="event__image ibg">
                                        <img src="img/events/${eventImage}" alt="${eventSubheading}">
                                    </div>
                                    <div class="event__block">
                                        <div class="event__info">
                                        <span class="event__place">${eventPlace}</span>
                                        <span class="event__date">${eventDate}</span>
                                        </div>
                                        <h3 class="event__subheading subheading">${eventSubheading}</h3>
                                        <p class="event__description">${eventDescription}</p>
                                    </div>
                                    <div class="event__footer">
                                        <a class="event__link" href="${eventUrl}">Подробнее</a>
                                    </div>
                                </li>`
            eventsItem.insertAdjacentHTML('beforeend', eventTemplate)
        })
        ibg();
        hideEvents();
        // Инициализация свайпера на разрешении меньше 550
        if ((width <= 550) || (window.innerWidth <= 550)) {
            $(".events__list, .events__pagination").wrapAll("<div class='events__swiper swiper-container'></div>");
            $('.events__list').addClass('events__swiper-wrapper')
            $('.events__list').removeClass('events__list')
            $('.events__swiper-wrapper').addClass('swiper-wrapper')
            const swiper5 = new Swiper('.events__swiper', {
                preloadImages: true,
                loop: true,
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetween: 21,
                centeredSlides: true,
                pagination: {
                    el: ".events__pagination",
                    clickable: true,
                },
            });
        }
    }

    function hideEvents() {
        let events = document.querySelectorAll(".events__item");
        let showItems = 7
        if (events) {
            if ((window.width >= 667) || (window.innerWidth >= 768)) {
                showItems = 2
            } if ((window.width >= 1024) || (window.innerWidth >= 1320)) {
                showItems = 3
            }
            for (var i = 0; i < events.length; i++) {
                if (i + 1 > showItems) {
                    events[i].classList.add('events__item_hide')
                }
            }
        }
    }

    getEvents()

    $('.events__btn').on('click', function (event) {
        event.preventDefault();
        $(this).addClass('visually-hidden')
        document.querySelectorAll('.events__item').forEach(n => n.classList.remove('events__item_hide'))
        // $('.events__item').css('display', 'flex')
        // $('.events__item').css('opacity', '1')
    })


    // LazyLoad
    var lazyLoadInstance = new LazyLoad({
    });

    // отзывчивые изображения
    function ibg() {
        let ibg = document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }

    ibg();


});
