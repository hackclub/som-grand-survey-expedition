
// TODO: music
// Add scroll effect for main content
window.addEventListener("scroll", () => {
    const content = document.querySelector(".content");
    if (window.scrollY > 40) {
    content.classList.add("scrolled");
    } else {
    content.classList.remove("scrolled");
    }
});

// Scroll to content when chevron is clicked
document
    .getElementById("scroll-down")
    .addEventListener("click", function () {
    document
        .getElementById("content")
        .scrollIntoView({ behavior: "smooth" });
    });

// Make arrows clickable (since <a> is hidden)
document
    .querySelectorAll(".arrow-group-arrows .arrow")
    .forEach(function (el) {
    el.addEventListener("click", function () {
        var link = el.querySelector("a");
        if (link && link.href) {
        window.location.href = link.href;
        }
    });
    });

// Overlay click -> reveal + play audio
const overlay = document.getElementById("overlay");
const audio = document.querySelector("audio");

overlay.addEventListener("click", () => {
    overlay.classList.add("open");
    setTimeout(() => {
    overlay.style.display = "none";
    }, 1600); // after curtain animation
    if (audio) {
    audio.play().catch((err) => console.log("Autoplay blocked:", err));
    }
});
