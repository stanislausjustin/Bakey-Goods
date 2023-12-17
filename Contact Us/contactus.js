document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded");

  let navToggle = document.querySelector(".toggle-btn");
  let nav_first_ul = document.querySelector(".nav.navbar-nav");
  let nav_second_ul = document.querySelector(".nav.navbar-nav.navbar-right");

  navToggle.addEventListener("click", function () {
    console.log("Toggle button clicked");

    if (nav_first_ul.classList.contains("active")) {
      console.log("Closing menu");
      this.setAttribute("aria-expanded", "false");
      this.setAttribute("aria-label", "menu");
      nav_first_ul.classList.remove("active");
      nav_second_ul.classList.remove("keep-right");
    } else {
      console.log("Opening menu");
      nav_first_ul.classList.add("active");
      nav_second_ul.classList.add("keep-right");
      this.setAttribute("aria-label", "close menu");
      this.setAttribute("aria-expanded", "true");
    }
  });
});