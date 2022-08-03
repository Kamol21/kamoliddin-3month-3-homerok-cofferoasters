var elModalTogleButton = document.querySelector(".site-header__btn");
var elModalOpenButton = document.querySelector(".plan-s3__buttom-box-button");
var elModalNavbar = document.querySelector(".site-header");
var elModal = document.querySelector(".modal");

elModalTogleButton.addEventListener("click", function(){
  elModalNavbar.classList.toggle("site-header__nav-show");
})

elModalOpenButton.addEventListener("click", function(){
  elModal.classList.add("modal-show");
})


var elModalCloseButton = document.querySelector(".modal-close-button");

elModalCloseButton.addEventListener("click" , function (){
  elModal.classList.remove("modal-show");
})





