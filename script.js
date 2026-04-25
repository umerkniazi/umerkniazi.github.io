const root = document.documentElement;
const header = document.querySelector('.site-header');
const menuToggle = document.getElementById('menuToggle');
const themeToggle = document.getElementById('themeToggle');
const navLinks = document.querySelectorAll('#siteNav a');
const storedTheme = localStorage.getItem('theme');
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
  if (theme) {
    root.setAttribute('data-theme', theme);
    themeToggle.setAttribute('aria-pressed', theme === 'dark');
    return;
  }

  root.removeAttribute('data-theme');
  themeToggle.setAttribute('aria-pressed', systemPreference.matches);
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