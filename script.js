// Navbar toggle
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// DOM Manipulation
const welcomeText = document.getElementById("welcomeText");
const changeTextBtn = document.getElementById("changeTextBtn");
const themeBtn = document.getElementById("themeBtn");

if (changeTextBtn) {
    changeTextBtn.addEventListener("click", () => {
        welcomeText.textContent = "Your Pet’s Happiness Is Our Mission 🐾";
    });
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
}

// Success message animation
const form = document.querySelector(".contact-form");
const successMessage = document.getElementById("successMessage");

if (form) {
    form.addEventListener("submit", () => {
        successMessage.style.display = "block";
    });
}

console.log("JS Loaded Successfully");
