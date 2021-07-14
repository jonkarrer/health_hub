let darkMode = false;

function toggleDarkMode() {
  const root = document.documentElement;
  const top_wave_home = document.getElementById("top-wave_home-sect-two");
  const infoWave = document.querySelector("section.info .bottom_wave");
  const footerWave = document.querySelector("section.banner .top_wave");
  if (darkMode) {
    //Change to light mode styles
    root.style.setProperty("--background", "#fffffe");
    root.style.setProperty("--heading", "#272343");
    root.style.setProperty("--paragraph", "#2d334a");
    root.style.setProperty("--article_background", "hsla(37, 57%, 97%, 0.9)");
    //Refactor
    top_wave_home.style.backgroundImage = `url("../../assets/nav_wave/white.svg")`;
    infoWave.style.backgroundImage = `url("../../assets/nav_wave/bottoms/white.svg")`;
    footerWave.style.backgroundImage = `url("../../assets/nav_wave/white.svg")`;
    darkMode = false;
    return;
  } else {
    //Change to dark mode styles
    root.style.setProperty("--background", "#004643");
    root.style.setProperty("--heading", "white");
    root.style.setProperty("--paragraph", "#abd1c6");
    root.style.setProperty("--article_background", "hsla(0, 5%, 20%, 0.9)");
    //Refactor
    top_wave_home.style.backgroundImage = `url("../../assets/nav_wave/dark_green.svg")`;
    infoWave.style.backgroundImage = `url("../../assets/nav_wave/bottoms/dark_green.svg")`;
    footerWave.style.backgroundImage = `url("../../assets/nav_wave/dark_green.svg")`;
    darkMode = true;
    return;
  }
}

export { toggleDarkMode };
