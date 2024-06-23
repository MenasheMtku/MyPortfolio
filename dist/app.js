// let yearEl = document.querySelector(".year");

const navEl = document.querySelector(".nav");
const headerNavList = document.querySelector(".nav__links");
const tabs = document.querySelectorAll(".nav__link");
// --------------------------------------------------

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
console.log(currentYear);
document.querySelector(
  ".year"
).innerHTML = `&copy; ${currentYear} Menashe Mtku`;

const headerEl = document.querySelector("header");
let navHeight = navEl.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) navEl.classList.add("fixed");
  else navEl.classList.remove("fixed");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.3,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(headerEl);
