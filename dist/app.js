const allSections = document.querySelectorAll(".section");
const navEl = document.querySelector(".nav");
const headerNavList = document.querySelector(".nav__links");
const tabs = document.querySelectorAll(".nav__link");
const itemTab = document.querySelectorAll(".nav__item");
// const navigation = document.querySelector(".header");
// const navigationHeight = navigation.offsetHeight;
const toggleBtn = document.querySelector(".toggle-btn");
const checkbox = document.querySelector("input[name=checkbox]");
// const checkBoxMenu = document.getElementById("#toogle");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
//
// const dropDownMenu = document.querySelector(".dropdown-menu");
const dropDownOption = document.querySelectorAll(".dropdown-menu ul li a");
//
let backToTop = document.querySelector(".btt");
//
let active = document.getElementsByClassName(".active");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    headerNavList.style.display = "flex";
    headerNavList.style.transform = "translateX(0)";
    // headerNavList.style.transform = "scale(0)";
    console.log("Checkbox is checked..");
  } else {
    headerNavList.style.display = "none";
    headerNavList.style.transform = "translateX(200%)";
    console.log("Checkbox is not checked..");
  }
});

navEl.addEventListener("mouseover", function (e) {
  const link = e.target.classList.contains("nav__link");
  if (link) {
    tabs.forEach(tab => tab.classList.remove("active"));
    e.target.classList.add("active");
  }
});

// itemTab.addEventListener("click", function (e) {
//   if (e) {
//     checkbox.checked = false;
//   }
// });

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

const revaelSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revaelSection, {
  root: null,
  threshold: 0.4,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // reavele the section
  section.classList.add("section--hidden");
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

// dropDownOption.forEach(opt => {
//   opt.addEventListener("click", function (e) {
//     console.log(e.target);
//     dropDownMenu.classList.remove("open");
//     toggleBtnIcon.classList.remove("fa-xmark");
//     toggleBtnIcon.classList.add("fa-bars");
//   });
// });

// toggleBtn.addEventListener("click", e => {
//   console.log(e.target);
//   dropDownMenu.classList.toggle("open");
//   const isOpen = dropDownMenu.classList.contains("open");

//   toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
// });

// toggleBtn.addEventListener("click", function () {
//   console.log("hamborger clicked");
// });
