$(document).ready(function(){
    $('.events__btn').on('click', function(event){
        event.preventDefault();
        $(this).addClass('visually-hidden')
        // $( ".events__item_overflow" ).show( "slide", { direction: "up" }, 1500 );
        $('.events__item').css('display', 'inline-block')
        $('.events__item').css('opacity', '1')
    })
});