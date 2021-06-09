// var modal = document.querySelector("#modal");
// var modalOverlay = document.querySelector("#modal-overlay");
// var closeButton = document.querySelector(".modal__close-button");
// var openButton = document.querySelector(".gallery__slide");

// closeButton.addEventListener("click", function() {
//   console.log($(this))  
//   modal.classList.toggle("closed");
//   modalOverlay.classList.toggle("closed");
// });

// openButton.addEventListener("click", function() {
//   console.log($(this))  

//   modal.classList.toggle("closed");
//   modalOverlay.classList.toggle("closed");
// });



$(document).ready(function () {
    $('.gallery__slide').click(function () {
        // Можно взять наполнение окна по индексу элемента в галерее
        var index = $('.gallery__slide').index(this);
        
        var bgImage = $(this).css('background-image');

        var header = $(this).children('.gallery__slide__author').text()
        var subheader = $(this).children('.gallery__slide__pict-name').text()
        var subSubheader = $(this).children('.gallery__slide-create-years').text()
        var info = $(this).children('.gallery__slide__info').text()
        $('.modal-guts__header').text(header)
        $('.modal-guts__subheader').text(subheader)
        $('.modal-guts__sub-subheader').text(subSubheader)
        $('.modal-guts__description').text(info)
  

        // let src = 'img/gallery/' + (index + 1) + '.jpg';
        // $('.modal-guts__img').attr('src', src);
        $('.modal-guts__img').css('background-image', bgImage);

        $('.modal').toggleClass("closed")
        $('.modal-overlay').toggleClass("closed")
    });

    $('.modal__close-button').on('click', function () {
        $('.modal').toggleClass("closed")
        $('.modal-overlay').toggleClass("closed")
    })
});



