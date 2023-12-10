const show = document.querySelector(".show");
let questAll = document.querySelectorAll(".question");

questAll.forEach((element) => {
  element.onclick = () => {
    element.classList.toggle("show");
  };
});
