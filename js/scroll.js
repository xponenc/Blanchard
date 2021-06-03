$(document).ready(function(){
    $('.nav__link').on('click', function(event){
        event.preventDefault();
        
        hrefId = $(this).attr('href')
        console.log(hrefId)
//если надо корректируем сдвиг высотой header
        let headerHeight = $('.header').height()
        console.log(headerHeight)
        //offset это координата картинки, top - от верха
        let offset = $(hrefId).offset().top;
        console.log(offset)
//анимация скролла, 1000мс
        $('body,html').animate({
            scrollTop: offset,
        }, 1000);
    });

    $('.btn__to-top').on('click', function(event){
            event.preventDefault();

            $('body,html').animate({
                scrollTop: 0,
            }, 1000);
        });

    $(window).on('scroll', function () {
        console.log('Я реакция на скроллинг')
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 1100) {
            $('.btn__to-top').css('display', 'inline-block');
        }
        else {
            $('.btn__to-top').css('display', 'none');
        }
    });
});