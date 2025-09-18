var r = document.querySelector(":root");

function orangeTheme() {
  r.style.setProperty("--accent", "#FF5B00");
  r.style.setProperty("--grad", "#0F0501");
  document.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  document.querySelector(".or").className += " active";
}
function greenTheme() {
  r.style.setProperty("--accent", "#0f0");
  r.style.setProperty("--grad", "#010");
  document.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  document.querySelector(".ge").className += " active";
}
function pinkTheme() {
  r.style.setProperty("--accent", "#f0f");
  r.style.setProperty("--grad", "#101");
  document.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  document.querySelector(".pn").className += " active";
}
function whiteTheme() {
  r.style.setProperty("--accent", "#fff");
  r.style.setProperty("--grad", "#111");
  document.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  document.querySelector(".wh").className += " active";
}
function redTheme() {
  r.style.setProperty("--accent", "#f00");
  r.style.setProperty("--grad", "#100");
  document.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  document.querySelector(".rd").className += " active";
}
function blueTheme() {
  r.style.setProperty("--accent", "#00f");
  r.style.setProperty("--grad", "#001");
  document.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  document.querySelector(".bl").className += " active";
}
