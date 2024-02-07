const darkModeToggle = document.querySelector(".dark-mode-toggle");

const enableDarkMode = () => {
  document.body.classList.add("darkMode");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
};

const toggleDarkMode = () => {
  if (document.body.classList.contains("darkMode")) {
    disableDarkMode();
    darkModeToggle.classList.remove("fa-solid", "fa-sun");
    darkModeToggle.classList.add("fa-regular", "fa-moon");
  } else {
    enableDarkMode();
    darkModeToggle.classList.remove("fa-regular", "fa-moon");
    darkModeToggle.classList.add("fa-solid", "fa-sun");
  }
};

darkModeToggle.addEventListener("click", toggleDarkMode);

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
const matchUserSettings = () => {
  if (prefersDarkMode.matches) {
    enableDarkMode();
  }
};

matchUserSettings();
