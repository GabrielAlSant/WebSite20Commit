
const buyButtons = document.querySelectorAll(".buyButton");

buyButtons.forEach(button => {
  button.addEventListener("click", function() {
    this.innerText = "Comprado";
    this.classList.remove("btn-success");
    this.classList.add("btn-secondary");
    this.disabled = true;
  });
});
