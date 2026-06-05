const root = document.documentElement;
const header = document.querySelector('.site-header');
const menuToggle = document.getElementById('menuToggle');
const themeToggle = document.getElementById('themeToggle');
const navLinks = document.querySelectorAll('#siteNav a');
const storedTheme = localStorage.getItem('theme');
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
  let resolved = theme;
  if (resolved) {
    root.setAttribute('data-theme', resolved);
  } else {
    root.removeAttribute('data-theme');
    resolved = systemPreference.matches ? 'dark' : 'light';
  }
  themeToggle.setAttribute('aria-pressed', resolved === 'dark');
  themeToggle.setAttribute('aria-label', resolved === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.title = themeToggle.getAttribute('aria-label');
}

function currentTheme() {
  return root.getAttribute('data-theme') || (systemPreference.matches ? 'dark' : 'light');
}

if (storedTheme === 'light' || storedTheme === 'dark') {
  applyTheme(storedTheme);
} else {
  applyTheme();
}

themeToggle.addEventListener('click', () => {
  const nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', nextTheme);
  applyTheme(nextTheme);
});

menuToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    header.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

systemPreference.addEventListener('change', () => {
  if (!localStorage.getItem('theme')) applyTheme();
});