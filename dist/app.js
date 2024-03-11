const allSections = document.querySelectorAll(".section");
const navEl = document.querySelector(".main-navbar");
const headerNavList = document.querySelector(".nav__links");
const tabs = document.querySelectorAll(".nav__link");
// const navigation = document.querySelector(".header");
// const navigationHeight = navigation.offsetHeight;
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
//
const dropDownMenu = document.querySelector(".dropdown-menu");
const dropDownOption = document.querySelectorAll(".dropdown-menu ul li a");
//
let backToTop = document.querySelector(".btt");
//
// let active = document.getElementsByClassName(".active");

navEl.addEventListener("mouseover", function (e) {
  const link = e.target.classList.contains("nav__link");
  if (link) {
    tabs.forEach(tab => tab.classList.remove("active"));
    e.target.classList.add("active");
    console.log(e.target);
  }
});

const headerEl = document.querySelector("header");
let navHeight = navEl.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navEl.classList.add("fixed");
  else navEl.classList.remove("fixed");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.1,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(headerEl);

dropDownOption.forEach(opt => {
  opt.addEventListener("click", function (e) {
    console.log(e.target);
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList.remove("fa-xmark");
    toggleBtnIcon.classList.add("fa-bars");
  });
});

const revaelSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revaelSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // reavele the section
  // section.classList.add("section--hidden");
});

toggleBtn.addEventListener("click", e => {
  console.log(e.target);
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

// BackToTop Button
const scrolled = 400;
$(window).scroll(function () {
  if ($(window).scrollTop() > scrolled) {
    $(".btt").fadeIn("slow");
  } else {
    $(".btt").fadeOut("slow");
  }
});
$(".btt").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 100);
  tabs.forEach(tab => tab.classList.remove("active"));
  tabs[0].classList.add("active");
  return false;
});

window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    backToTop.classList.add("box-shadow");
  } else {
    backToTop.classList.remove("box-shadow");
  }
};

toggleBtn.addEventListener("click", function () {
  console.log("hamborger clicked");
});

// media query
// const mediaQuery = window.matchMedia("(max-width: 955px)");
// mediaQuery.addListener(handleDeviceChange);

// document.documentElement.style.setProperty(
//   "--scroll-padding",
//   navigationHeight + "px"
// );

// // check the device width, adding/removig class '.active' from a tag in the menu
// function handleDeviceChange(e) {
//   if (e.matches) {
//     tabs.forEach(tab => {
//       tab.addEventListener("click", function () {
//         // hides menu after clicking on a link
//         mobileNavBarIcon.className = "fas fa-bars";
//         headerNavList.style.transform = "translateX(200%)";
//         // Add active class to the selected tab
//         tabs.forEach(tab => tab.classList.remove("active"));
//         this.classList.remove("active");
//         console.log("class 'active' removed");
//       });
//     });
//   } else
//     tabs.forEach(tab => {
//       tab.addEventListener("click", function () {
//         // Add active class to the selected tab
//         tabs.forEach(tab => tab.classList.remove("active"));
//         this.classList.add("active");
//         console.log("class 'active' Added");
//       });
//     });
// }

// handleDeviceChange(mediaQuery);
