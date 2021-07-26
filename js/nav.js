window.onload = function () {
    const target = document.querySelector('header')
    target.addEventListener("click", documentActions);
    function documentActions(e) {
        const targetElement = e.target;
        console.log(targetElement)

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
    }
}


$(document).ready(function () {
    if (window.innerWidth <= 1360) {
        $('.nav__toggle').on('click', function () {
            $(this).toggleClass('nav__toggle_active')
            $('.nav__top-block').toggleClass('nav__top-block_active')
            $('.nav__top-sign-in-btn').toggleClass('btn_simple btn')
            $('.nav__top-burger-close').toggleClass('nav__top-burger-close_active')
        })
        $('.nav__top-burger-close').on('click', function () {
            $('.nav__top-block').toggleClass('nav__top-block_active')
            $('.nav__top-sign-in-btn').toggleClass('btn_simple btn')
            $('.nav__top-burger-close').toggleClass('nav__top-burger-close_active')
        })
    }

    $('.nav__bottom-link').on('click', function () {
        const btn = this
        $('.nav__bottom-link').each(function (index, element) {
            if (element === btn) {
                $(element).toggleClass('angle-up');
                $(element).toggleClass('angle-down');
                $(element).next().toggleClass('sub-menu_active')
            } else {
                $(element).addClass('angle-down')
                $(element).removeClass('angle-up')
                $(element).next().removeClass('sub-menu_active')
            }
        });
    });
})
$('.nav__bottom-sub-menu').each(function (index, element) {
    new SimpleBar(element, {
        autoHide: false,
        scrollbarMaxSize: 28,
    });
});