$(document).ready(function () {
    function showChecked() {
        $('.genre__form__label').each(function (index, value) {
            if ($(this).children('.genre__form__checkbox').is(':checked')) {
                $(this).css('display', 'flex')
                $(this).addClass('genre__form__label_checked')
            } else {
                $(this).css('display', 'none')
            }
        });
    }

    if ((screen.width <= 550) || (window.innerWidth <= 550)) {
        showChecked()
        $('.publication__subheading').on('click', function () {
            $('.publication__subheading').toggleClass('pub-angle-down')
            $('.publication__subheading').toggleClass('pub-angle-up')

            if ($('.publication__subheading').hasClass('pub-angle-down')) {
                showChecked()
                hideUnchecked()
            } else {
                $('.genre__form__label').css('display', 'flex')
            }
        })
    }

    function hideUnchecked() {
        $('.genre__form__label_checked').each(function (index, element) {
            $(element).on('click', function () {
                $(this).removeClass('genre__form__label_checked')
                $(this).children('.genre__form__checkbox').prop('checked', false)
                $(this).hide(300)
            })
        })
    }
})