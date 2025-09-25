// temples.js

// Toggle mobile nav
const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Footer year
document.querySelector("#year").textContent = new Date().getFullYear();

// Last modified
document.querySelector("#lastModified").textContent = document.lastModified;
