const navigation = document.querySelector(".header");
const navigationHeight = navigation.offsetHeight;
//
const tabs = document.querySelectorAll(".header-nav-tab");
//
const mobileNavBarIcon = document.getElementById("mobile-nav-bar-icon");
const headerNavList = document.getElementById("header-nav-list");
let active = document.getElementsByClassName(".active");

// media query
const mediaQuery = window.matchMedia("(max-width: 955px)");
mediaQuery.addListener(handleDeviceChange);

// document.documentElement.style.setProperty(
//   "--scroll-padding",
//   navigationHeight + "px"
// );

mobileNavBarIcon.addEventListener("click", function () {
  console.log("hamborger clicked");
});
// check the device width, adding/removig class '.active' from a tag in the menu
function handleDeviceChange(e) {
  if (e.matches) {
    tabs.forEach(tab => {
      tab.addEventListener("click", function () {
        // hides menu after clicking on a link
        mobileNavBarIcon.className = "fas fa-bars";
        headerNavList.style.transform = "translateX(200%)";
        // Add active class to the selected tab
        tabs.forEach(tab => tab.classList.remove("active"));
        this.classList.remove("active");
        console.log("class 'active' removed");
      });
    });
  } else
    tabs.forEach(tab => {
      tab.addEventListener("click", function () {
        // Add active class to the selected tab
        tabs.forEach(tab => tab.classList.remove("active"));
        this.classList.add("active");
        console.log("class 'active' Added");
      });
    });
}

handleDeviceChange(mediaQuery);

mobileNavBarIcon.onclick = function () {
  if (mobileNavBarIcon.className == "fas fa-bars") {
    mobileNavBarIcon.className = "fas fa-times";
    headerNavList.style.display = "flex";
    headerNavList.style.transform = "translateX(0)";
  } else {
    headerNavList.style.display = "none";
    mobileNavBarIcon.className = "fas fa-bars";
    headerNavList.style.transform = "translateX(200%)";
  }
};
