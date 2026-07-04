// ==============================
// Typing Animation
// ==============================

const words = [
    "Full Stack Developer",
    "Web Developer",
    "UI/UX Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.querySelector(".typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// ==============================
// Mobile Menu
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ==============================
// Close Menu After Click
// ==============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ==============================
// Navbar Shadow on Scroll
// ==============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ==============================
// Active Navigation Link
// ==============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(
".about-box,.skill,.project-card,.experience-box,.edu-card,.cert-box,form"
);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "0.8s";

});

window.addEventListener("scroll", reveal);

reveal();


// ==============================
// Smooth Button Hover
// ==============================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});