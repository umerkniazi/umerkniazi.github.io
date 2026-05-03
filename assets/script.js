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

  // Update aria-pressed
  themeToggle.setAttribute('aria-pressed', resolved === 'dark');

  // Update icon and aria-label (icon-only button)
  const icon = themeToggle.querySelector('.icon');
  if (resolved === 'dark') {
    // Currently dark; clicking will switch to light
    if (icon) icon.textContent = '☀️';
    themeToggle.setAttribute('aria-label', 'Switch to light theme');
    themeToggle.title = 'Switch to light theme';
  } else {
    // Currently light; clicking will switch to dark
    if (icon) icon.textContent = '🌙';
    themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    themeToggle.title = 'Switch to dark theme';
  }
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

systemPreference.addEventListener('change', () => {
  if (!localStorage.getItem('theme')) {
    applyTheme();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    header.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});