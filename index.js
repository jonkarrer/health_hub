import { toggleDarkMode } from "./modules/toggleDarkMode.js";

document
  .getElementById("dark_mode_switch")
  .addEventListener("click", () => toggleDarkMode());

document.querySelectorAll(".flipButton").forEach((item) => {
  item.addEventListener("click", () => {
    const card = document.querySelector(".card");
    card.classList.toggle("is-flipped");
  });
});
