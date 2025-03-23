window.onload=function(){
    // Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeToggle.textContent = body.classList.contains('dark') ? '🌙' : '🌞';
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Font toggle
const fontToggle = document.getElementById('fontToggle');

fontToggle.addEventListener('click', () => {
  body.classList.toggle('serif');
  fontToggle.textContent = body.classList.contains('serif') ? 'S' : 'A';
  localStorage.setItem('font', body.classList.contains('serif') ? 'serif' : 'sans');
});

// Language toggle
const langToggle = document.getElementById('langToggle');
let currentLang = 'en';

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ru' : 'en';
  langToggle.textContent = currentLang.toUpperCase();
  updateLanguage();
  localStorage.setItem('lang', currentLang);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.main-nav');

// Only set up mobile menu if the toggle exists
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', 
      menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && nav.classList.contains('nav-open')) {
      nav.classList.remove('nav-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function updateLanguage() {
  document.querySelectorAll('[data-en]').forEach(element => {
    element.textContent = element.getAttribute(`data-${currentLang}`);
  });
}

// Load saved preferences
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '🌙';
  }

  // Font
  const savedFont = localStorage.getItem('font');
  if (savedFont === 'serif') {
    body.classList.add('serif');
    fontToggle.textContent = 'S';
  }

  // Language
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    currentLang = savedLang;
    langToggle.textContent = currentLang.toUpperCase();
    updateLanguage();
  }

  // Initialize menu button state
  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});
  }