let darkMode = false;

function toggleDarkMode() {
  const root = document.documentElement;
  if (darkMode) {
    //Change to light mode styles
    root.style.setProperty("--background", "#fffffe");
    root.style.setProperty("--heading", "#272343");
    root.style.setProperty("--paragraph", "#2d334a");
    root.style.setProperty("--article_background", "hsla(37, 57%, 97%, 0.9)");
    darkMode = false;
    return;
  } else {
    //Change to dark mode styles
    root.style.setProperty("--background", "#004643");
    root.style.setProperty("--heading", "white");
    root.style.setProperty("--paragraph", "white");
    root.style.setProperty("--article_background", "hsla(0, 5%, 20%, 0.9)");
    darkMode = true;
    return;
  }
}

export { toggleDarkMode };
