document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const loading = document.getElementById("loading");
  const themeToggle = document.getElementById("themeToggle");
  const musicEnabled = document.getElementById("musicEnabled");
  const volumeControl = document.getElementById("volumeControl");
  const oldTheme = document.getElementById("oldTheme");

  // Theme system
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.classList.add(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
      localStorage.setItem("theme", currentTheme);
    });
  }

  // Old theme toggle
  if (oldTheme) {
    oldTheme.checked = localStorage.getItem("oldTheme") === "true";
    oldTheme.addEventListener("change", () => {
      localStorage.setItem("oldTheme", oldTheme.checked);
      alert("Theme will change on reload!");
    });
  }

  // Music system
  const bgMusic = document.getElementById("bgMusic");
  if (bgMusic) {
    const musicState = localStorage.getItem("musicEnabled") === "true";
    const savedVolume = parseFloat(localStorage.getItem("musicVolume")) || 0.5;
    bgMusic.volume = savedVolume;
    if (musicState) bgMusic.play();

    const musicToggle = document.getElementById("musicToggle");
    if (musicToggle) {
      musicToggle.addEventListener("click", () => {
        if (bgMusic.paused) {
          bgMusic.play();
          localStorage.setItem("musicEnabled", true);
        } else {
          bgMusic.pause();
          localStorage.setItem("musicEnabled", false);
        }
      });
    }
  }

  // Volume control
  if (volumeControl) {
    volumeControl.value = localStorage.getItem("musicVolume") || 0.5;
    volumeControl.addEventListener("input", () => {
      localStorage.setItem("musicVolume", volumeControl.value);
    });
  }

  // Loading animation
  if (loading && app) {
    setTimeout(() => {
      loading.classList.add("hidden");
      app.classList.remove("hidden");
    }, 1200);
  }
});
