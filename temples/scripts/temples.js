// Footer Date Updates
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("last-modified");

    // Current Year
    yearSpan.textContent = new Date().getFullYear();

    // Last Modified Date
    lastModifiedSpan.textContent = document.lastModified;
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});
