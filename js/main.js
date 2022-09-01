var elMenuBtn = document.querySelector(".js-menu-open-btn");
var elBody = document.querySelector("body");

elMenuBtn.addEventListener("click", function () {
  elBody.classList.toggle("body-active");
})