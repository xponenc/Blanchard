window.onload = function () {
    const target = document.querySelector('header')
    target.addEventListener("click", headerActions);
    function headerActions(e) {
        const targetElement = e.target;
        console.log(targetElement)
        // Субменю
        if (targetElement.classList.contains('nav__bottom-link')) {
            // Эта проверка блокирует одновременное открытие нескольких пунктов меню
            if (document.querySelectorAll('.nav__bottom-item_active').length > 0) {
                document.querySelectorAll('.nav__bottom-item_active').forEach(n => n.classList.remove('nav__bottom-item_active'))
            }
            targetElement.closest('.nav__bottom-item').classList.toggle('nav__bottom-item_active');
        }
        if (!targetElement.closest('.nav__bottom-item') && document.querySelectorAll('.nav__bottom-item_active').length > 0) {
            document.querySelectorAll('.nav__bottom-item_active').forEach(n => n.classList.remove('nav__bottom-item_active'))
        }
        // Открытие-закрытие формы поиска
        if (window.innerWidth <= 1024) {
            if (!targetElement.closest('.header__search') && document.querySelector('.nav__top-search-toggle').classList.contains('nav__top-search-toggle_hide')) {
                document.querySelector('.header__search-wrapper').classList.remove('header__search-wrapper_active');
                setTimeout(function () {
                    document.querySelector('.nav__top-search-toggle').classList.remove('nav__top-search-toggle_hide')
                }, 150);
            }
            if (targetElement.classList.contains('nav__top-search-toggle')) {
                targetElement.classList.add('nav__top-search-toggle_hide')
                document.querySelector('.header__search-wrapper').classList.add('header__search-wrapper_active');
            }
        }
        // Открытие-закрытие бургера
        if (window.innerWidth <= 1360) {
            if (targetElement.classList.contains('.nav__toggle') || targetElement.closest('.nav__toggle')) {
                targetElement.classList.toggle('nav__toggle_active')
                document.querySelector('.nav__top-block').classList.toggle('nav__top-block_active')
                document.querySelector('.nav__top-sign-in-btn').classList.toggle('btn_simple')
                document.querySelector('.nav__top-sign-in-btn').classList.toggle('btn')
            }
        }
    }
}

//Инициализация прокруток в пунктах субменю
Array.prototype.forEach.call(
    document.querySelectorAll('.nav__bottom-sub-menu'),
    el => new SimpleBar(el, {
        autoHide: false,
        scrollbarMaxSize: 28,
    })
);
