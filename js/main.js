/*=== SHOW MENUU ===*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=== REMOVE MENU MOBILE ===*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((el) => el.addEventListener("click", linkAction));

/*=== CHANGE BACKGROUND HEADER/ ADD SHADOW HEADER ===*/

const shadowHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

/*=== SHOW SCROLL UP ===*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*===SCROLL SECTION ACTIVE LINK ===*/

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");

  const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionID = current.getAttribute("id");
      const sectionsClass = document.querySelector(
        `.nav__menu a[href*="#${sectionID}"]`
      );

      if (sectionsClass) {
        if (
          scrollDown > sectionTop &&
          scrollDown <= sectionTop + sectionHeight
        ) {
          sectionsClass.classList.add("active-link");
        } else {
          sectionsClass.classList.remove("active-link");
        }
      }
    });
  };

  window.addEventListener("scroll", scrollActive);
});
