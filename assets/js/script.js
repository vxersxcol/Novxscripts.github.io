document.addEventListener("DOMContentLoaded", () => {
  // Typewriter Fun Fact
  const fact = "Did you know GitHub can host websites?";
  const factEl = document.getElementById("fun-fact");
  if (factEl) {
    let i = 0;
    const type = () => {
      if (i < fact.length) {
        factEl.textContent += fact.charAt(i);
        i++;
        setTimeout(type, 60);
      } else {
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      }
    };
    type();
  }

  // Search popup logic
  const searchBtn = document.getElementById("search-btn");
  const searchPopup = document.getElementById("search-popup");
  const closePopup = document.getElementById("close-popup");
  if (searchBtn && searchPopup) {
    searchBtn.onclick = () => {
      const value = document.getElementById("search-bar").value.trim();
      if (value) window.location.href = "discover.html";
      else searchPopup.classList.remove("hidden");
    };
  }
  if (closePopup) closePopup.onclick = () => searchPopup.classList.add("hidden");
});

// Theme + Settings
function setTheme(t) {
  localStorage.setItem("theme", t);
  document.body.className = `theme-${t}`;
}
function toggleMultiTheme() {
  const multi = !(localStorage.getItem("multiTheme") === "true");
  localStorage.setItem("multiTheme", multi);
  alert("Multi-theme " + (multi ? "Enabled" : "Disabled"));
}
function toggleMusic() {
  const audio = document.getElementById("bg-audio");
  if (audio.paused) audio.play();
  else audio.pause();
  localStorage.setItem("musicEnabled", !audio.paused);
}
function setVolume(v) {
  const audio = document.getElementById("bg-audio");
  if (audio) audio.volume = v;
  localStorage.setItem("musicVolume", v);
}
function resetSettings() {
  localStorage.clear();
  alert("Settings reset! Reloading...");
  location.reload();
}

// Apply saved theme
window.onload = () => {
  const theme = localStorage.getItem("theme") || "dark";
  document.body.className = `theme-${theme}`;
};
