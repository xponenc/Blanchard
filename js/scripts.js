window.onload = function () {
    document.addEventListener("click", documentActions);
    function documentActions(e) {
        const targetElement = e.target;
        console.log(targetElement)
        // NAV: Субменю
        if (targetElement.classList.contains('nav__bottom-link') || targetElement.closest('.nav__bottom-link')) {
            // Эта проверка блокирует одновременное открытие нескольких пунктов меню
            if (document.querySelectorAll('.nav__bottom-item_active').length > 0) {
                document.querySelectorAll('.nav__bottom-item_active').forEach(n => n.classList.remove('nav__bottom-item_active'))
            }
            targetElement.closest('.nav__bottom-item').classList.toggle('nav__bottom-item_active');
        }
        if (!targetElement.closest('.nav__bottom-item') && document.querySelectorAll('.nav__bottom-item_active').length > 0) {
            document.querySelectorAll('.nav__bottom-item_active').forEach(n => n.classList.remove('nav__bottom-item_active'))
        }
        // NAV: Открытие-закрытие формы поиска
        if (document.body.clientWidth <= 1024) {
            if (!targetElement.closest('.header__search') && document.querySelector('.nav__top-search-toggle').classList.contains('nav__top-search-toggle_hide')) {
                enableScroll();
                document.querySelector('.header__search-wrapper').classList.remove('header__search-wrapper_active');
                if (document.body.clientWidth <= 900 && document.body.clientWidth > 768) {
                    document.querySelector('.header__logo').classList.toggle('header__logo__hide')
                }
                setTimeout(function () {
                    document.querySelector('.nav__top-search-toggle').classList.remove('nav__top-search-toggle_hide')
                }, 150);
            }
            if (targetElement.classList.contains('nav__top-search-toggle')) {
                disableScroll();
                targetElement.classList.add('nav__top-search-toggle_hide')
                document.querySelector('.header__search-wrapper').classList.add('header__search-wrapper_active');
                if (document.body.clientWidth <= 900 && document.body.clientWidth > 768) {
                    document.querySelector('.header__logo').classList.toggle('header__logo__hide')
                }
            }
        }
        // NAV: Открытие-закрытие бургера
        if ((targetElement.classList.contains('nav__toggle') || targetElement.closest('.nav__toggle')) && document.body.clientWidth <= 1360) {
            burgerToggle(targetElement)
        }

        // GALLERY: Открытие модального окна картины в галерее
        if (targetElement.classList.contains('gallery__slide')) {
            openGalleryModalWindow(targetElement)
            disableScroll();
        }

        // GALLERY: Закрытие модального окна картины в галерее
        if (targetElement.closest('.modal__btn-close')) {
            closeGalleryModalWindow(targetElement)
            enableScroll();
        }

        // GALLERY: Переключение табов языков в галерее
        if (targetElement.classList.contains('lang-tabs__btn')) {
            toggleActiveLang(targetElement)
        }

        // GALLERY: Переключение автора в галерее
        if (targetElement.classList.contains('catalog__item-btn')) {
            toggleActiveAuthor(targetElement)
        }
        // CATALOG: добавление разметок ARIA при нажатии кнопок accordion
        if (targetElement.classList.contains('accordion__btn')) {
            addAriaForAccordion(targetElement)
        }
        // EVENTS: показ скрытых карточек по кнопке Все события
        if (targetElement.classList.contains('events__btn')) {
            targetElement.classList.add('visually-hidden')
            // document.querySelectorAll('.events__item').forEach(n => n.classList.remove('events__item_hide'))
            document.querySelectorAll('.events__item').forEach(n => n.classList.add('events__item_show'))

        }
        // PUBLICATIONS: открытие/закрытие фильтра жанров при изменении поведения формы на 550px и меньше
        if (targetElement.classList.contains('genre__heading') && ((screen.width <= 550) || (document.body.clientWidth <= 550))) {
            targetElement.classList.toggle('genre__heading_open')
            showFormGenre()
        }
        // PROJECTS: открытие тултип
        if (targetElement.classList.contains('tooltip')) {
            if (((screen.width <= 1024) || (document.body.clientWidth <= 1024)) && ((screen.width > 768) || (document.body.clientWidth > 768))) {
                targetElement.querySelector('.tooltiptext').classList.add('tooltiptext_active')
                targetElement.querySelector('.tooltiptext-mark').classList.add('tooltiptext-mark_active')
            } else if ((screen.width <= 768) || (document.body.clientWidth <= 768)) {
                targetElement.classList.toggle('tooltip_active')
                targetElement.querySelector('.tooltiptext').classList.toggle('tooltiptext_active')
                if (!targetElement.classList.contains('tooltip_active')) {
                    targetElement.blur()
                }
            }
        }
        // PROJECTS: закрытие тултип
        if (targetElement.classList.contains('tooltiptext-mark')) {
            console.log(targetElement.parentNode.querySelector('.tooltiptext'))
            targetElement.parentNode.querySelector('.tooltiptext').classList.remove('tooltiptext_active')
            targetElement.classList.remove('tooltiptext-mark_active')
            targetElement.parentNode.blur()
        }
        if (!targetElement.closest('.tooltip') && document.querySelectorAll('.tooltiptext_active').length > 0) {
            document.querySelectorAll('.tooltiptext_active').forEach(e => { e.classList.remove('tooltiptext_active') })
            document.querySelectorAll('.tooltiptext-mark_active').forEach(e => { e.classList.remove('tooltiptext-mark_active') })
            document.querySelectorAll('.tooltip_active').forEach(e => { e.classList.remove('tooltip_active') })

        }
        // TOTAL: Скроллинги
        // Основное меню навигации, кнопка в hero, кнопки перехода в Gallery из Catalog
        if (targetElement.closest('.nav__top-item') || targetElement.classList.contains('hero__btn')
            || targetElement.classList.contains('author__gallery-link') || targetElement.classList.contains('unknown__gallery-link')) {
            e.preventDefault();
            if (targetElement.closest('.nav__top-item')) {burgerToggle(document.querySelector('.nav__toggle'))}
            let hrefId = targetElement.getAttribute('href')
            let target = document.querySelector(hrefId)
            doScrolling(target, 1000)
        }
        // MAIN: Кнопка возврата к началу страницы
        if (targetElement.classList.contains('btn-to-top')) {
            e.preventDefault();
            let target = document.querySelector('header')
            doScrolling(target, 1000)
        }
    }

    // Реакция на изменение размеров окна
    window.addEventListener('resize', function (event) {
        searchFormMove() // NAV: Перемещение формы поиска
        // catalogContentHeightCalc() // CATALOG: Временная функция для подсчета высоты размера поля контента в аккордеоне Каталога
        gallerySliderChangePlace() // Изменение места в DOM слайдера Gallery на breakpoint 50
        eventsSliderStart(); //Запуск/разрушение слайдера Events:Slider
        showFormGenre() // Изменение формы Publications:Genre 
        publicationsSliderStartEnd() //Запуск/разрушение слайдера Publications:Slider
        shiftToopltip() // Расчет сдвига контейнера tooltip относительно края родителя
        moveMap() //Перемещение контейнера с картой при <=550px
    }, true);

    // Реакция на скролл по странице
    window.addEventListener('scroll', function () {
        // MAIN: Добавление кнопки ToTop 
        if (window.pageYOffset > 1100) {
            document.querySelector('.btn-to-top').style.cssText = `display: inline-block;`
        } else {
            document.querySelector('.btn-to-top').style.cssText = `display: none;`
        }
    })

    // LazyLoad
    var lazyLoadInstance = new LazyLoad({
    });

    // отзывчивые изображения IBG 
    function ibg() {
        let ibg = document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
    ibg();

    // TOTAL============================================================================================================
    // SWIPERS
    // SWIPER:HERO: swiper
    new Swiper('.hero__swiper', {
        preloadImages: false,
        lazy: true,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
        },
    });
    // SWIPER:GALLERY: swiper
    // let gallerySlider = null
    gallerySliderStart()

    function gallerySliderStart() {
        gallerySlider = new Swiper('.gallery__swiper', {
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            preloadImages: false,
            lazy: true,
            watchSlidesVisibility: true,
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                },
                551: {

                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 34,

                },
                1360: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    slidesPerColumn: 2,
                    spaceBetween: 50,
                }
            },
            pagination: {
                el: ".gallery__swiper-control .block-pagination",
                type: "fraction",
                clickable: true,
            },
            navigation: {
                nextEl: '.gallery__swiper-control .swiper-control__btn_next',
                prevEl: '.gallery__swiper-control .swiper-control__btn_prev',
            },
        });
        gallerySliderChangePlace()
    }


    // SWIPER:PUBLICATIONS: swiper
    // Инициализируется на разрешении больше 550, меньше - разрушается
    let publicationsSlider = null
    let publicationsSliderImageReady = null

    publicationsSliderStartEnd()

    function publicationsSliderStartEnd() {

        if ((screen.width > 550) || (document.body.clientWidth > 550)) {
            if (!publicationsSlider) {
                publicationsSliderImageReady = null

                document.querySelector('.publication__swiper-wrapper').classList.add('swiper-wrapper')
                publicationsSlider = new Swiper('.publication__swiper', {
                    observer: true,
                    observeParents: true,
                    preloadImages: false,
                    lazy: true,
                    watchSlidesVisibility: true,
                    loop: true,
                    breakpoints: {
                        551: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 34,
                        },
                        1024: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 49,
                        },
                        1360: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 50,
                        }
                    },
                    pagination: {
                        el: ".publication__swiper-control .block-pagination",
                        type: "fraction",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.publication__swiper-control .swiper-control__btn_next',
                        prevEl: '.publication__swiper-control .swiper-control__btn_prev',
                    },
                });
                console.log(' Создан publicationsSlider', publicationsSlider);

            }
        } else {
            if (publicationsSlider) {
                publicationsSlider.destroy()
                publicationsSlider = null
                console.log('publicationsSlider', publicationsSlider);

                if (document.querySelector('.publication__slide').classList.contains('swiper-slide')) {
                    // document.querySelector('.publication__slide').classList.remove('swiper-slide')
                    // document.querySelector('.publication__swiper').classList.remove('swiper-container')
                    document.querySelector('.publication__swiper-wrapper').classList.remove('swiper-wrapper')

                }
            }
            const publicationSlides = document.querySelectorAll('.publication__slide-img')

            if (publicationSlides.length > 0 && !publicationsSliderImageReady) {
                publicationsSliderImageReady = true;
                publicationSlides.forEach(element => {
                    // let bgnd = element.querySelector('img').dataset.src
                    // element.style.cssText = `background-image: url("../${bgnd}"); background-size: contain; background-repeat: no-repeat;`
                    if (element.querySelector('img').dataset.src) { element.querySelector('img').src = element.querySelector('img').dataset.src }
                    if (element.querySelector('.swiper-lazy-preloader')) { element.querySelector('.swiper-lazy-preloader').remove() }
                })
            }

        }
    }

    // SWIPER:PROJECTS: swiper
    new Swiper('.partners__slider-body', {
        observer: true,
        observeParents: true,
        preloadImages: false,
        lazy: true,
        watchSlidesVisibility: true,
        speed: 600,
        loop: true,
        breakpoints: {
            240: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetween: 21,
                // centeredSlides: true,
            },
            551: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34,
            },
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 50,

            },
            1360: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
            }
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            clickable: true,
        },
        navigation: {
            nextEl: '.partners__slider-control .swiper-control__btn_next',
            prevEl: '.partners__slider-control .swiper-control__btn_prev',
        },
    });
    // Блокировка скроллинга сайта
    let scrollDisabled = null
    let disableScroll = function () {
        scrollDisabled = true
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        // console.log(window.innerWidth);
        // console.log(document.body.clientWidth);
        // console.log(document.body.scrollWidth);
        // console.log( document.body.offsetWidth);

        document.body.style.paddingRight = paddingOffset

        let pagePosition = window.scrollY;
        console.log('disScr', pagePosition);

        document.body.classList.add('disable-scroll');
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
    }

    let enableScroll = function () {
        scrollDisabled = null
        let pagePosition = parseInt(document.body.dataset.position, 10);
        document.body.style.top = 'auto';
        document.body.classList.remove('disable-scroll');
        window.scroll({ top: pagePosition, left: 0 });
        document.body.removeAttribute('data-position');

        document.body.style.paddingRight = '0'

    }

    // HEADER============================================================================================================
    // Включение выключение бургера
    function burgerToggle(element) {
        if (element.classList.contains('nav__toggle')) {
            element.classList.toggle('nav__toggle_active')
        } else {
            element.closest('.nav__toggle').classList.toggle('nav__toggle_active')
        }
        document.querySelector('.nav__top-block').classList.toggle('nav__top-block_active')
        document.querySelector('.nav__top-sign-in-btn').classList.toggle('btn_simple')
        document.querySelector('.nav__top-sign-in-btn').classList.toggle('btn')
        if (scrollDisabled) { enableScroll() } else { disableScroll() }
    }

    // Перемещение формы поиска в sub-menu при >= 1024px
    function searchFormMove() {
        const navTarget = document.querySelector('.nav__top-container')
        const navSubTarget = document.querySelector('.nav__bottom-container')
        const searchFormItem = document.querySelector('.header__search-wrapper')
        if (document.body.clientWidth >= 1024) {
            navSubTarget.appendChild(searchFormItem)
        } else {
            navTarget.appendChild(searchFormItem)
        }
    }
    searchFormMove()

    //Инициализация прокруток в пунктах субменю
    Array.prototype.forEach.call(
        document.querySelectorAll('.nav__bottom-sub-menu'),
        el => {
            new SimpleBar(el, {
                autoHide: false,
                scrollbarMaxSize: 28,
            })
        }
    );

    // GALLERY============================================================================================================

    // Фильтр - select

    const element1 = document.querySelector('#id-filter-1');
    const choices1 = new Choices(element1, {
        silent: true,
        placeholder: true,
        searchEnabled: false,
        itemSelectText: '',
        position: 'bottom',
        renderSelectedChoices: 'always',
    });
    // Перенос позиции слайдера на разрешении 768 и меньше
    function gallerySliderChangePlace() {
        const content = document.querySelector('.gallery__content')

        if ((screen.width <= 768) || (document.body.clientWidth <= 768)) {
            if (!content.closest('.gallery__info')) {
                const target = document.querySelector('.info__filter')
                target.insertAdjacentElement('afterend', content)
            }
        } else {
            if (content.closest('.gallery__info')) {
                const target = document.querySelector('.gallery__info')
                target.insertAdjacentElement('afterend', content)
            }
        }
    }

    // Модальное окно изображения в галерее

    function openGalleryModalWindow(target) {
        let bgImage = target.querySelector('.gallery__slide-image').src;
        let header = target.querySelector('.gallery__slide-author').textContent
        let subheader = target.querySelector('.gallery__slide-pict-name').textContent
        let subSubheader = target.querySelector('.gallery__slide-create-years').textContent
        let info = target.querySelector('.gallery__slide-info').textContent

        const modalWindow = document.querySelector('.modal__content')

        modalWindow.querySelector('.modal__content-header').textContent = header
        modalWindow.querySelector('.modal__content-subheader').textContent = subheader
        modalWindow.querySelector('.modal__content-sub-subheader').textContent = subSubheader
        modalWindow.querySelector('.modal__content-description').textContent = info
        modalWindow.querySelector('.modal__content-img').style.cssText = `
        background-image: url("${bgImage}");
        `
        const modal = document.querySelector('.modal')

        modal.classList.toggle("closed")
        document.querySelector('.modal-overlay').classList.toggle("closed")

        // В старом макете на 1024 модал открывался в теле галереи
        // if (((screen.width > 1024) || (screen.width <= 768)) || ((document.body.clientWidth > 1024) || (document.body.clientWidth <= 768))) {
        //     modal.classList.toggle("closed")
        //     document.querySelector('.modal-overlay').classList.toggle("closed")
        // }
        // else {
        //     document.querySelector('.gallery__swiper-control').insertAdjacentElement('afterend', modal)
        //     modal.classList.toggle("closed")
        // }
    }

    function closeGalleryModalWindow(target) {
        const modal = document.querySelector('.modal')

        modal.classList.toggle("closed")
        document.querySelector('.modal-overlay').classList.toggle("closed")
        // В старом макете на 1024 модал открывался в теле галереи
        // if (((screen.width > 1024) || (screen.width <= 768)) || ((document.body.clientWidth > 1024) || (document.body.clientWidth <= 768))) {
        //     modal.classList.toggle("closed")
        //     document.querySelector('.modal-overlay').classList.toggle("closed")
        // }
        // else {
        //     // document.querySelector('.gallery__swiper-control').insertAdjacentHTML('afterend', modal)
        //     modal.classList.toggle("closed")
        // }
    }
    // CATALOG=============================================================================================================
    // Инициализация accordion jQuery
    $(function () {
        $(".accordion").accordion({
            heightStyle: "content",
            icons: false,
            collapsible: true,
            header: '.accordion__btn',
        });
    });
    // добавление разметка ARIA для accordion
    function addAriaForAccordion(target) {
        let accordionButtons = document.querySelectorAll('.accordion__btn');

        checkOthers(target, accordionButtons);

        isAriaExp = target.getAttribute('aria-expanded');
        newAriaExp = (isAriaExp == "false") ? "true" : "false";
        target.setAttribute('aria-expanded', newAriaExp);

        isAriaHid = target.nextSibling.getAttribute('aria-hidden');
        newAriaHid = (isAriaHid == "true") ? "false" : "true";
        target.nextSibling.setAttribute('aria-hidden', newAriaHid);

        for (var i = 0; i < accordionButtons.length; i++) {
            if (accordionButtons[i] != target) {
                if (($(accordionButtons[i]).getAttribute('aria-expanded')) == 'true') {
                    $(accordionButtons[i]).setAttribute('aria-expanded', 'false');
                    $(accordionButtons[i]).nextSibling.setAttribute('aria-hidden', 'true');
                }
            }
        }
    };

    //Временная функция расчета высота блока контент в аккордеоне
    function catalogContentHeightCalc() {
        const accordionItems = document.querySelectorAll('.accordion__content')

        accordionItems.forEach(element => {
            if (element.querySelector('.catalog__list')) {
                let countItems = element.querySelector('.catalog__list').querySelectorAll('.catalog__item').length
                if (screen.width > 1360 || document.body.clientWidth > 1360) {
                    var columns = 3
                    var unit = 37.5
                    var padding = 40
                } else if ((screen.width <= 1360 || document.body.clientWidth <= 1360) && (screen.width > 768 || document.body.clientWidth > 768)) {
                    var columns = 2
                    var unit = 32.5
                    var padding = 45
                } else if ((screen.width <= 768 || document.body.clientWidth <= 768) && (screen.width > 667 || document.body.clientWidth > 667)) {
                    var columns = 3
                    var unit = 36.25
                    var padding = 50
                } else if (screen.width > 550 || document.body.clientWidth > 550) {
                    var columns = 2
                    var unit = 36.25
                }

                if (screen.width > 550 || document.body.clientWidth > 550) {
                    let heightItem = (Math.ceil(countItems / columns) * unit) + padding
                    element.style.cssText = `height: ${heightItem}px;`
                    element.querySelector('.catalog__list').style.cssText = `height: ${heightItem}px;`
                }


            }
        })
    }
    // catalogContentHeightCalc()

    // Переключение активного языкового блока в Gallery
    function toggleActiveLang(target) {
        const path = target.dataset.path

        const langTabsItems = document.querySelectorAll('.lang-tabs__btn')
        const langContentItems = document.querySelectorAll('.catalog__language')

        langTabsItems.forEach(e => { e.classList.remove('lang-tabs__btn_active') })
        langContentItems.forEach(e => { e.classList.remove('catalog__language_active') })

        document.querySelector(`[data-path="${path}"]`).classList.add('lang-tabs__btn_active')
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__language_active')

        const langContentActive = document.querySelector('.catalog__language_active')
        const langContentActiveButtons = langContentActive.querySelectorAll('.catalog__item-btn')
        const langContentActiveAuthors = langContentActive.querySelectorAll('.catalog__author')

        if (langContentActiveButtons.length > 0) {
            langContentActiveButtons.forEach(e => { e.classList.remove('catalog__item-btn_active') })
            langContentActiveButtons.item(0).classList.add('catalog__item-btn_active')
        }

        if (langContentActiveAuthors.length > 0) {
            langContentActiveAuthors.forEach(e => { e.classList.remove('author_active') })
            langContentActiveAuthors.item(0).classList.add('author_active')
        }
        console.log(langContentActiveAuthors.item(0))

    }
    // Переключение автора в Gallery
    function toggleActiveAuthor(target) {
        const path = target.dataset.author_path
        console.log(document.querySelector(`[data-author_target="${path}"]`))
        const langContentActive = document.querySelector('.catalog__language_active')
        const langContentActiveButtons = langContentActive.querySelectorAll('.catalog__item-btn')
        const langContentActiveAuthors = langContentActive.querySelectorAll('.catalog__author')

        if (langContentActiveButtons.length > 0) {
            langContentActiveButtons.forEach(e => { e.classList.remove('catalog__item-btn_active') })
        }

        if (langContentActiveAuthors.length > 0) {
            langContentActiveAuthors.forEach(e => { e.classList.remove('author_active') })
        }

        langContentActive.querySelector(`[data-author_path="${path}"]`).classList.add('catalog__item-btn_active')
        langContentActive.querySelector(`[data-author_target="${path}"]`).classList.add('author_active')

        if ((screen.width <= 768) || (document.body.clientWidth <= 768)) {
            let target = langContentActive.querySelector(`[data-author_target="${path}"]`)
            doScrolling(target, 1000)
        }
    }


    function doScrolling(element, duration) {
        const startingY = window.pageYOffset;
        const elementY = element.offsetTop
        var diff = elementY - startingY;
        var start;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            // Elapsed milliseconds since start of scrolling.
            var time = timestamp - start;
            // Get percent of completion in range [0, 1].
            var percent = Math.min(time / duration, 1);

            window.scrollTo(0, startingY + diff * percent);

            // Proceed with animation as long as we wanted it to.
            if (time < duration) {
                window.requestAnimationFrame(step);
            }
        })
    }

    // EVENTS============================================================================================================

    getEvents()
    // Функция загрузки карточек events
    async function getEvents() {
        const file = '../json/events.json'
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

    // Функция формирует и вставляет в html темплейты карточек событий (events)
    function loadEvents(data) {
        let eventsItem = document.querySelector('.events__list')
        // if (!eventsItem) {
        //     eventsItem = document.querySelector('.events__swiper-wrapper')
        // }

        data.events.forEach(item => {
            const eventUrl = item.url
            const eventPlace = item.place
            const eventDate = item.date
            const eventSubheading = item.subheading
            const eventImage = item.image
            const eventDescription = item.description

            let eventTemplate = `<li class="events__item event swiper-slide">
                                    <div class="event__image">
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
        // ibg();
        hideEvents();
        // Инициализация swiperа на разрешении меньше 550
        eventsSliderStart()
    }

    let eventsSlider = null
    // Инициализация swiper на разрешении меньше 550
    function eventsSliderStart() {
        if ((screen.width <= 550) || (document.body.clientWidth <= 550)) {
            if (!eventsSlider) {
                let sliderContent = document.querySelector('.events__list')
                let sliderPlace = document.querySelector('.events__heading')
                sliderPlace.insertAdjacentHTML("afterend", `<div class='events__swiper swiper-container'></div>`);
                let slderBody = document.querySelector('.events__swiper')
                slderBody.insertAdjacentElement("afterbegin", sliderContent);
                sliderContent.classList.add('events__swiper-wrapper')
                sliderContent.classList.remove('events__list')
                sliderContent.classList.add('swiper-wrapper')
                // $(".events__list").wrapAll("<div class='events__swiper swiper-container'></div>");
                // $('.events__list').addClass('events__swiper-wrapper')
                // $('.events__list').removeClass('events__list')
                // $('.events__swiper-wrapper').addClass('swiper-wrapper')
                console.log('Создай свайпер');

                eventsSlider = new Swiper('.events__swiper', {
                    observer: true,
                    observeParents: true,
                    preloadImages: true,
                    loop: true,
                    // slidesPerGroup: 1,
                    slidesPerView: 1,
                    spaceBetween: 21,
                    // centeredSlides: true,
                    pagination: {
                        el: ".events__pagination",
                        clickable: true,
                        type: 'bullets',
                    },
                });
                console.log(eventsSlider);

            }
        } else {
            if (eventsSlider) {
                eventsSlider.destroy()
                eventsSlider = null
                document.querySelector('.events__swiper-wrapper').classList.add('events__list')
                document.querySelector('.events__swiper-wrapper').classList.remove('events__swiper-wrapper')
                let content = document.querySelector('.events__list')
                let target = document.querySelector('.events__heading')
                target.insertAdjacentElement('afterend', content)
                document.querySelector('.events__swiper').remove()
            }
        }
    }
    // Функция прячет лишние карточки на разных разрешениях
    function hideEvents() {
        let events = document.querySelectorAll(".events__item");
        let showItems = 7
        if (events) {
            if ((window.width >= 551) || (document.body.clientWidth >= 551)) {
                showItems = 2
            } if ((window.width > 768) || (document.body.clientWidth > 768)) {
                showItems = 3
            }
            for (var i = 0; i < events.length; i++) {
                if (i + 1 > showItems) {
                    // events[i].classList.add('events__item_hide')
                }
            }
        }
    }
    // PUBLICATIONS============================================================================================================
    //  Форма фильтров Категории жанров
    showFormGenre()
    // let GenreFormIsSpoiler = false

    function showFormGenre() {
        if ((screen.width <= 550) || (document.body.clientWidth <= 550)) {
            let checkTargetIsOpen = document.querySelector('.genre__heading').classList.contains('genre__heading_open')
            let genreCheckboxes = document.querySelectorAll('.checkbox-genre')
            if (checkTargetIsOpen) {
                genreCheckboxes.forEach(e => {
                    e.style.cssText = `display: flex;`
                    e.classList.remove('checkbox-genre_checked')
                })
            } else {
                genreCheckboxes.forEach(e => {
                    if (e.querySelector('.checkbox-genre__input').checked) {
                        e.style.cssText = `display: flex;`
                        e.classList.add('checkbox-genre_checked')
                        e.addEventListener("click", function () {
                            if (!document.querySelector('.genre__heading').classList.contains('genre__heading_open')) {
                                e.classList.remove('checkbox-genre_checked')
                                e.querySelector('.checkbox-genre__input').checked = false
                                e.style.cssText = `display: none;`
                            }
                        });
                    } else {
                        e.style.cssText = `display: none;`
                    }
                })
            }
        } else {
            let genreCheckboxes = document.querySelectorAll('.checkbox-genre')
            genreCheckboxes.forEach(e => {
                e.style.cssText = `display: flex;`
                e.classList.remove('checkbox-genre_checked')
            })
        }

    }

    // PROJECTS============================================================================================================
    // Тултип - поправка положения тела тултипа для избежения вылета за пределы контейнера
    shiftToopltip()

    function shiftToopltip() {
        const toopltipsList = document.querySelectorAll('.tooltip')
        toopltipsList.forEach(element => {
            let positionX = element.offsetLeft;
            let widthParent = element.parentElement.offsetWidth
            let widthTooltip = element.querySelector('.tooltiptext').offsetWidth

            // Проверка - тултип вылез вправо
            if (positionX + widthTooltip / 2 > widthParent) {
                let leftOverflow = positionX + widthTooltip / 2 - widthParent + element.offsetWidth / 2
                let leftShift = widthTooltip / 2 + leftOverflow
                element.querySelector('.tooltiptext').style.cssText = `margin-left: -${leftShift}px;`
            } else if (positionX - widthTooltip / 2 < 0) {
                let rightOverflow = positionX - widthTooltip / 2
                let rightShift = widthTooltip / 2 + rightOverflow
                element.querySelector('.tooltiptext').style.cssText = `margin-left: -${rightShift}px;`
            } else {
                element.querySelector('.tooltiptext').style.cssText = `margin-left: -132px;`
            }
        })
    }

    // CONTACTS============================================================================================================
    // Перемещение контейнра с картой при <=550px
    function moveMap() {
        if ((screen.width <= 550) || (document.body.clientWidth <= 550)) {
            let map = document.querySelector('.contacts__map')
            let container = document.querySelector('.info__showroom')
            container.insertAdjacentElement('afterend', map)
        }
    }
}
