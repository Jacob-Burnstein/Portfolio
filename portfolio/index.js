const darkModeToggle = document.querySelector(".dark-mode-toggle");

const nav = document.querySelector(".nav-bar");

const addDarkHeaderStyling = () => {
  nav.classList.add("dark-mode-header");
};

const removeDarkHeaderStyling = () => {
  if (nav.classList.contains("dark-mode-header"))
    nav.classList.remove("dark-mode-header");
};

const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  darkModeToggle.classList.remove("fa-regular", "fa-moon");
  darkModeToggle.classList.add("fa-solid", "fa-sun");
  addDarkHeaderStyling();
};

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  darkModeToggle.classList.remove("fa-solid", "fa-sun");
  darkModeToggle.classList.add("fa-regular", "fa-moon");
  removeDarkHeaderStyling();
};

const toggleDarkMode = () => {
  if (document.body.classList.contains("darkMode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};

darkModeToggle.addEventListener("click", toggleDarkMode);

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
const matchUserSettings = () => {
  if (prefersDarkMode.matches) {
    enableDarkMode();
  } else disableDarkMode();
};

matchUserSettings();
