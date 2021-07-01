$(document).ready(function(){
    $('.events__btn').on('click', function(event){
        event.preventDefault();
        $(this).addClass('visually-hidden')
        $('.events__item').css('display', 'flex')
        $('.events__item').css('opacity', '1')
    })
});