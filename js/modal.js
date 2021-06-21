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
        var width = screen.width
        var bgImage = $(this).css('background-image');
        var header = $(this).children('.gallery__slide__author').text()
        var subheader = $(this).children('.gallery__slide__pict-name').text()
        var subSubheader = $(this).children('.gallery__slide-create-years').text()
        var info = $(this).children('.gallery__slide__info').text()

        // Изменение поведения модального окна от размеров экрана
        if ((width > 1024 ) || (width <= 768 )) {
            $('.modal-guts__header').text(header)
            $('.modal-guts__subheader').text(subheader)
            $('.modal-guts__sub-subheader').text(subSubheader)
            $('.modal-guts__description').text(info)
            $('.modal-guts__img').css('background-image', bgImage);
    
            $('.modal').toggleClass("closed")
            $('.modal-overlay').toggleClass("closed")
        }
        else {
            $('.gallery__slider__control').after('<div class="modal-1024 closed"><button class="modal__close-button btn"></button><div class="modal-guts"><div class="modal-guts__img"></div><div class="modal-guts__info"><h1 class="modal-guts__header"></h1><h2 class="modal-guts__subheader"></h2><h3 class="modal-guts__sub-subheader"></h3><p class="modal-guts__description"></p></div></div></div>');
            $('.modal-guts__header').text(header)
            $('.modal-guts__subheader').text(subheader)
            $('.modal-guts__sub-subheader').text(subSubheader)
            $('.modal-guts__description').text(info)
            $('.modal-guts__img').css('background-image', bgImage);

            $('.gallery__content').css('position', 'relative')
            $('.modal-1024').toggleClass("closed")

            $('.modal__close-button').on('click', function () {
                $('.modal-1024').remove()
            });
        }
    });

    $('.modal__close-button').on('click', function () {
        // var width = screen.width
        // if ((width > 1024 ) || (width <= 768 ) || (window.innerWidth > 1024 ) || (window.innerWidth <= 768 ))  {
            $('.modal').toggleClass("closed")
            $('.modal-overlay').toggleClass("closed")
        // }
        // else {
        //     $('.modal-1024').remove()
        // }
    })
});



