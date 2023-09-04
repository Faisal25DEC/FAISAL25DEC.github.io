const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("left");
});

//----------------mix it up------------
const containerEl = document.querySelector(".projects-container");
var mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});
mixer.filter(".best");
