$(document).ready(function () {
    $('.nav__top-link, .hero__btn').on('click', function (event) {
        event.preventDefault();
        hrefId = $(this).attr('href')
        let offset = $(hrefId).offset().top;
        $('body,html').animate({
            scrollTop: offset,
        }, 1000);
    });

    $('.btn-to-top').on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, 1000);
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 1100) {
            $('.btn-to-top').css('display', 'inline-block');
        }
        else {
            $('.btn-to-top').css('display', 'none');
        }
    });
});