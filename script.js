// Smooth scroll for Enroll button

document.addEventListener("DOMContentLoaded", function () {

  const btn = document.querySelector(".btn");
  const contact = document.querySelector("#contact");

  if (btn && contact) {

    btn.addEventListener("click", function (e) {
      e.preventDefault();

      contact.scrollIntoView({
        behavior: "smooth"
      });
    });

  }

});


// Small fade-in effect on scroll

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

  sections.forEach(function (section) {

    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }

  });

});


// Initial style for animation

sections.forEach(function (section) {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
});
