$(document).ready(function () {
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
})