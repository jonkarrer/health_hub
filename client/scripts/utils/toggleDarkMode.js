let darkMode = false;

function toggleDarkMode() {
  const root = document.documentElement;
  const foodWaveHome = document.querySelector("section.food_wave .top_wave");
  const infoWaveHome = document.querySelector("section.info .bottom_wave");
  const footerWaveHome = document.querySelector("section.banner .top_wave");
  if (darkMode) {
    //Change to light mode styles
    root.style.setProperty("--background", "#fffffe");
    root.style.setProperty("--heading", "#272343");
    root.style.setProperty("--paragraph", "#2d334a");
    root.style.setProperty("--article_background", "hsla(37, 57%, 97%, 0.9)");
    //Refactor
    foodWaveHome.style.backgroundImage = `url("../assets/wave/tops/white.svg")`;
    infoWaveHome.style.backgroundImage = `url("../assets/wave/bottoms/white.svg")`;
    footerWaveHome.style.backgroundImage = `url("../assets/wave/tops/white.svg")`;
    darkMode = false;
    return;
  } else {
    //Change to dark mode styles
    root.style.setProperty("--background", "#004643");
    root.style.setProperty("--heading", "white");
    root.style.setProperty("--paragraph", "#abd1c6");
    root.style.setProperty("--article_background", "hsla(0, 5%, 20%, 0.9)");
    //Refactor
    foodWaveHome.style.backgroundImage = `url("../assets/wave/tops/dark_green.svg")`;
    infoWaveHome.style.backgroundImage = `url("../assets/wave/bottoms/dark_green.svg")`;
    footerWaveHome.style.backgroundImage = `url("../assets/wave/tops/dark_green.svg")`;
    darkMode = true;
    return;
  }
}

export { toggleDarkMode };
