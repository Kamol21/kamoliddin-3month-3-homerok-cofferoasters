var elModalTogleButton = document.querySelector(".site-header__btn");
var elModal = document.querySelector(".site-header");

elModalTogleButton.addEventListener("click", function(){
  elModal.classList.toggle("site-header__nav-show");
})


// var elModalCloseButton = document.querySelector(".modal-close-button");

// elModalTogleButton.addEventListener("click" , function (){
//   elModal.classList.remove("modal__show");
// })