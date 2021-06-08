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


var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector(".modal__close-button");
var openButton = document.querySelector(".gallery__slide");

closeButton.addEventListener("click", function() {
  console.log($(this))  
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function() {
  console.log($(this))  

  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});



