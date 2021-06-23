let darkMode = false;

function toggleDarkMode() {
  const root = document.documentElement;
  if (darkMode) {
    root.style.setProperty("--background", "#fffffe");
    root.style.setProperty("--heading", "#272343");
    root.style.setProperty("--paragraph", "#2d334a");
    darkMode = false;
    return;
  } else {
    root.style.setProperty("--background", "#004643");
    root.style.setProperty("--heading", "white");
    root.style.setProperty("--paragraph", "white");
    darkMode = true;
    return;
  }
}
