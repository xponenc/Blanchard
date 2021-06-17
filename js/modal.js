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
        // Изменение поведения модального окна от размеров экрана
        var width = screen.width
        if ((width > 1024) || (width <= 768)) {
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
            $('body').css('overflow', 'hidden')
            

        }
        else {
            $('.gallery__slider__control').after('<div class="modal-1024"><button class="modal__close-button btn"></button><div class="modal-guts"><div class="modal-guts__img"></div><div class="modal-guts__info"><h1 class="modal-guts__header"></h1><h2 class="modal-guts__subheader"></h2><h3 class="modal-guts__sub-subheader"></h3><p class="modal-guts__description"></p></div></div></div>');
            var bgImage = $(this).css('background-image');
            var header = $(this).children('.gallery__slide__author').text()
            var subheader = $(this).children('.gallery__slide__pict-name').text()
            var subSubheader = $(this).children('.gallery__slide-create-years').text()
            var info = $(this).children('.gallery__slide__info').text()
            $('.modal-guts__header').text(header)
            $('.modal-guts__subheader').text(subheader)
            $('.modal-guts__sub-subheader').text(subSubheader)
            $('.modal-guts__description').text(info)
            $('.modal-guts__img').css('background-image', bgImage);

            $('.gallery__content').css('position', 'relative')
            // $('.modal-1024').toggleClass("closed")
        }
    });

    $('.modal__close-button').on('click', function () {
        console.log('click')
        var width = screen.width
        if ((width > 1024) || (width <= 768)) {
            $('.modal').toggleClass("closed")
            $('.modal-overlay').toggleClass("closed")
            
        }
        else {
            console.log($('.modal-1024'))
            $('.modal-1024').fadeOut()
        }
    })
});



