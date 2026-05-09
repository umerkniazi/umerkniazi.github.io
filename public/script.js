const root = document.documentElement;
const header = document.querySelector('.site-header');
const menuToggle = document.getElementById('menuToggle');
const themeToggle = document.getElementById('themeToggle');
const navLinks = document.querySelectorAll('#siteNav a');
const revealItems = document.querySelectorAll('[data-reveal]');
const whoamiOutput = document.getElementById('whoamiOutput');

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

  if (resolved === 'dark') {
    themeToggle.setAttribute('aria-label', 'Switch to light theme');
    themeToggle.title = 'Switch to light theme';
  } else {
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

if (whoamiOutput) {
  const text = whoamiOutput.getAttribute('data-text') || whoamiOutput.textContent || '';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reducedMotion && text) {
    whoamiOutput.textContent = '';
    
    let start = null;
    const typeSpeed = 22; // ms per character
    const delay = 260; // initial delay
    
    const type = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      
      if (elapsed > delay) {
        const typingTime = elapsed - delay;
        const targetIndex = Math.floor(typingTime / typeSpeed);
        const currentIndex = whoamiOutput.textContent.length;
        
        if (targetIndex > currentIndex) {
          whoamiOutput.textContent = text.slice(0, Math.min(targetIndex, text.length));
        }
      }
      
      if (whoamiOutput.textContent.length < text.length) {
        window.requestAnimationFrame(type);
      }
    };
    
    window.requestAnimationFrame(type);
  }
}

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

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
