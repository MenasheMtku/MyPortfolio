"use strict";
const allSections = document.querySelectorAll(".section");
let backToTop = document.querySelector(".btt");
let rocketIcon = document.querySelector(".rocket");
let active = document.getElementsByClassName(".active");

const revaelSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
  // observer.disconnect();
};

const sectionObserver = new IntersectionObserver(revaelSection, {
  root: null,
  threshold: 0.4,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
// --------------------------------------------------

// Define the scroll threshold
let scrolled = 400;

// Function to handle scroll events
function handleScroll() {
  const button = document.querySelector(".btt");
  if (window.scrollY > scrolled) {
    button.classList.add("show"); // Add class to show button
  } else {
    button.classList.remove("show"); // Remove class to hide button
  }
}
// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);
// Attach the click event listener to the button
document.querySelector(".btt").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default action
  scrollToTop(); // Scroll to the top
});

// let scrolled = 400;
// $(window).scroll(function () {
//   if ($(window).scrollTop() > scrolled) {
//     $(".btt").fadeIn("slow");
//   } else {
//     $(".btt").fadeOut("slow");
//   }
// });
// $(".btt").click(function () {
//   $("html, body").animate({ scrollTop: 0 }, 100);
//   return false;
// });
