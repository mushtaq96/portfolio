const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

//on click of hamburger symbol
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

//close the hamburger
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
