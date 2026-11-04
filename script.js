
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");
const themeButton = document.getElementById("theme-toggle");
const topButton = document.getElementById("back-to-top");

// 1. Open or close the mobile navigation menu
menuButton.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("show");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close menu when a navigation link is clicked
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});

// 2. Switch between dark and light mode
themeButton.addEventListener("click", function () {
    const isLight = document.body.classList.toggle("light-mode");

    themeButton.textContent = isLight ? "🌙" : "☀️";
    themeButton.setAttribute(
        "aria-label",
        isLight ? "Switch to dark mode" : "Switch to light mode"
    );
});

// 3. Display back-to-top button when scrolling
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
});

// Scroll back to the top
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
