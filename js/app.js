const slideNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll("nav-links li");

  burger.addEventListener("click", () => {
    // The Toggle Nav.
    nav.classList.toggle("nav-active");

    // the Animation section.
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5 ease forwards ${
          index / 7 + 0.3
        }s `;
      }
    });
  });
};

slideNav();
