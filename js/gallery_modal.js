// var modal = document.querySelector("#modal");
// var modalOverlay = document.querySelector("#modal-overlay");
// var closeButton = document.querySelector(".modal__btn-close");
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
        var bgImage = $(this).children('.gallery__slide-image').attr("src");
        var header = $(this).children('.gallery__slide-author').text()
        var subheader = $(this).children('.gallery__slide-pict-name').text()
        var subSubheader = $(this).children('.gallery__slide-create-years').text()
        var info = $(this).children('.gallery__slide-info').text()
        $('.modal__content-header').text(header)
        $('.modal__content-subheader').text(subheader)
        $('.modal__content-sub-subheader').text(subSubheader)
        $('.modal__content-description').text(info)
        $('.modal__content-img').css('background-image', 'url('+ bgImage + ')');

        if (((screen.width > 1024 ) || (screen.width <= 768 )) && ((window.innerWidth > 1024) || (window.innerWidth <= 768))) {
            $('.modal').toggleClass("closed")
            $('.modal-overlay').toggleClass("closed")
        }
        else {
            $('.modal').insertAfter($('.gallery__swiper-control'));
            $('.modal').toggleClass("closed")
        }
    });

    $('.modal__btn-close').on('click', function () {
        if (((screen.width > 1024 ) || (screen.width <= 768 )) && ((window.innerWidth > 1024) || (window.innerWidth <= 768))) {
            $('.modal').toggleClass("closed")
            $('.modal-overlay').toggleClass("closed")
        }
        else {
            $('.modal').toggleClass("closed")
        }
    })
});



