(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getHeaderOffset = () => {
    const header = document.querySelector('.site-header');
    if (!header) return 0;
    const pos = getComputedStyle(header).position;
    return (pos === 'fixed' || pos === 'sticky') ? header.getBoundingClientRect().height : 0;
  };

  const scrollToY = (y) => {
    if (prefersReducedMotion) window.scrollTo(0, y);
    else window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      link.addEventListener('click', (e) => {
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset() - 4;
        scrollToY(y);
        if (history.pushState) history.pushState(null, '', `#${id}`);
        else location.hash = id;
      }, { passive: false });
    });
  };

  const initAutoYear = () => {
    const year = String(new Date().getFullYear());
    document.querySelectorAll('[data-year]').forEach((el) => {
      if (el.tagName.toLowerCase() === 'time') el.setAttribute('datetime', year);
      el.textContent = year;
    });
  };

  const ready = (fn) => {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  };

  ready(() => {
    initSmoothScroll();
    initAutoYear();
  });
})();