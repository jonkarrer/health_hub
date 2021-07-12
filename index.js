import { toggleDarkMode } from "./modules/toggleDarkMode.js";

document
  .getElementById("dark_mode_switch")
  .addEventListener("click", () => toggleDarkMode());

document.querySelectorAll(".flipButton").forEach((item) => {
  const card = item.parentElement.parentElement;
  item.addEventListener("click", () => {
    console.log(card);
    card.classList.toggle("is-flipped");
  });
});
