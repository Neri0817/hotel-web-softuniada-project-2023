let preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
  this.window.setTimeout(function preload() {
    preloader.style.display = "none";
  }, 3000);
});
