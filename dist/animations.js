const allSections = document.querySelectorAll(".section");
let backToTop = document.querySelector(".btt");
let rocketIcon = document.querySelector(".rocket");
let active = document.getElementsByClassName(".active");

let themeToggle = document.getElementById("theme-toogle");

themeToggle.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeToggle.src = "./assets/sun-svgrepo-com.svg";
  } else {
    themeToggle.src = "./assets/moon-svgrepo-com-2.svg";
  }
};

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
  section.classList.add("section--hidden");
});
// --------------------------------------------------
// BackToTop Button
// var $backToTop = $(".btt");
// $backToTop.hide();
let scrolled = 400;
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

// window.onscroll = function (ev) {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     backToTop.classList.add("btt-box-shadow");
//   } else {
//     backToTop.classList.remove("btt-box-shadow");
//   }
// };

// --------------------------------------------------
backToTop.addEventListener("mouseover", function () {
  console.log("mouse in");
  // this.classList.add("maslul");
});
backToTop.addEventListener("mouseleave", function () {
  console.log("mouse out");
  // this.classList.remove("maslul");
});
// rocketIcon.addEventListener("click", function (e) {});

// --------------------------------------------------
