"use strict";
const year = document.querySelector(".year");
const themeToggle = document.getElementById("theme-toogle");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
year.innerHTML = `&copy; ${currentYear} Menashe Mtku`;
console.log(`${currentYear}\n${year.textContent}`);

// Theme Handling
const calculateSettingAsThemeString = ({
  localStorageTheme,
  systemSettingDark,
}) => {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }
  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
};

const updateButton = ({ buttonEl, isDark }) => {
  const srcSvg = isDark
    ? "./assets/sun-svgrepo-com.svg"
    : "./assets/moon-svgrepo-com-2.svg";
  buttonEl.src = srcSvg;
  // console.log(`Theme toggle button:\n ${buttonEl.src}`);
};

const updateThemeOnHtmlEl = ({ theme }) => {
  document.querySelector("html").setAttribute("data-theme", theme);
};
/**
 * On page load:
 * 1. Grab what we need from the DOM and system settings on page load
 */
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
/**
 * 2. Work out the current site settings
 */
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});
/**
 * 3. Update the theme setting and button text accoridng to current settings
 */
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });
/**
 * 4. Add an event listener to toggle the theme
 */
button.addEventListener("click", event => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});
