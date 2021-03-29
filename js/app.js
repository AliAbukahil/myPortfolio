const slideNav = () => {
  const burger = document.querySelector(".burger"); // to get the burger
  const nav = document.querySelector(".nav-links"); // to get the Nav
  const navLinks = document.querySelectorAll(".nav-links li"); // querySelectorAll to get all the individual links in the nav-links and every li link

  burger.addEventListener("click", () => {
    // on the click run this function
    // The Toggle Nav.
    nav.classList.toggle("nav-active"); // the nav const gets a classList of toggle (like switch) and it is gonna toggle the class list of nav-active in the css file

    // the Animation section for the Nav Links.
    navLinks.forEach((link, index) => {
      // forEach link and we run a function here, and we can get access to the index and if we console.log("index"); it is gonna bring back how many links we have. Why do we need the index so we can easily animate the delay between each link
      if (link.style.animation) {
        // the if else statement so the animation would occur again when you click on the burger menu
        link.style.animation = ``;
      } else {
        // else we are gonna add our animation
        link.style.animation = `navLinkFade 0.5 ease forwards ${
          // navLinkFade is the animation in css
          //
          index / 7 + 4.1 // here is the delay of the appearance between every link
        }s `; // ps you can add in the future more links in the html and they get the same result as their ancestors
      } // 4.1 is for the initial delay (to start automatically with the delay)
    });
    // the Animation section for the Burger.
    burger.classList.toggle("spin"); // Here we toggled the spin class for the burger in the CSS file.
  });
};

slideNav(); // to invoke the function slideNav
