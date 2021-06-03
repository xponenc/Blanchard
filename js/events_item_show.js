$(document).ready(function(){
    $('.events__btn').on('click', function(event){
        event.preventDefault();
        $(this).addClass('visually-hidden')
        $( ".events__item_overflow" ).switchClass( "events__item_overflow", "events__item");
    })
});