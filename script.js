console.log("Welcome to SarbaNanda Chakma's Portfolio!");

// 📅 Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById("dark-toggle");
const icon = document.getElementById("toggle-icon");

// Apply saved mode on load
const isDark = localStorage.getItem("darkMode") === "true";
document.body.classList.toggle("dark-mode", isDark);
toggle.checked = isDark;
icon.textContent = isDark ? "☀️ Day Mode" : "🌙 Dark Mode";

// Toggle and save
toggle.addEventListener("change", () => {
  const mode = toggle.checked;
  document.body.classList.toggle("dark-mode", mode);
  icon.textContent = mode ? "☀️ Day Mode" : "🌙 Dark Mode";
  localStorage.setItem("darkMode", mode);
});


// 🎯 Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 👀 Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// 🍔 Toggle Side Panel Navigation
const navLinks = document.getElementById('nav-links');
const menuIcon = document.getElementById('menu-icon');
const header = document.querySelector('header');

menuIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('open');
  menuIcon.classList.toggle('attached', navLinks.classList.contains('open'));
});

// 🧠 Close Side Panel on Outside Click
document.addEventListener('click', (e) => {
  if (
    navLinks.classList.contains('open') &&
    !navLinks.contains(e.target) &&
    !menuIcon.contains(e.target)
  ) {
    navLinks.classList.remove('open');
    menuIcon.classList.remove('attached');
  }
});

// 🧠 Close Side Panel on Link Click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuIcon.classList.remove('attached');
  });
});

// 📌 Sticky Menu Icon When Header Is Hidden
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) {
    const headerBottom = header.getBoundingClientRect().bottom;
    const isPanelOpen = navLinks.classList.contains('open');

    if (!isPanelOpen) {
      if (headerBottom < 0) {
        menuIcon.classList.add('sticky');
      } else {
        menuIcon.classList.remove('sticky');
      }
    }
  }
});