$(document).ready(function () {

    function showChecked() {
        $('.genre__form__label').each(function (index, value) {
            if ($(this).children('.genre__form__checkbox').is(':checked')) {
                $(this).css('display', 'inline-block')
                $(this).addClass('genre__form__label_checked')

            } else {
                $(this).css('display', 'none')
            }
        });
    }
    var width = screen.width

    if ((width < 550) || (window.innerWidth < 550)) {
        showChecked()
        $('.publication__subheading').on('click', function () {
            console.log('клац')
            $('.publication__subheading').toggleClass('pub-angle-down')
            $('.publication__subheading').toggleClass('pub-angle-up')

            if ($('.publication__subheading').hasClass('pub-angle-down')) {
                showChecked()
            } else {
                $('.genre__form__label').css('display', 'inline-block')
            }
        })
    }

    $('.genre__form__label_checked').each(function (index, value) {
        console.log(value)
        $(value).on('click', function () {
            console.log($(value).children('.genre__form__checkbox'))
            $(value).children('.genre__form__checkbox').prop('checked', false)
        },
            showChecked()
        )
    })
})