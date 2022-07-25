var elModalOpenButton = document.querySelector(".site-header__btn");
var elModal = document.querySelector(".modal");

elModalOpenButton.addEventListener("click", function(){
  elModal.classList.add("modal__show");
})


var elModalCloseButton = document.querySelector(".modal-close-button");

elModalCloseButton.addEventListener("click" , function (){
  elModal.classList.remove("modal__show");
})