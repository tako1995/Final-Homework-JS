// accordion

let accordionContainers = document.querySelectorAll(".container-accor");

accordionContainers.forEach(function (el) {
  el.addEventListener("click", function () {
    this.classList.toggle("activeNew");
  });
});
