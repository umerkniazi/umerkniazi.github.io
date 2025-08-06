// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get the mobile menu toggle button and nav links container
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!toggleBtn || !navLinks) return;

  // Get both SVG icons inside the toggle button
  const hamburgerIcon = toggleBtn.querySelector(".icon-hamburger");
  const closeIcon = toggleBtn.querySelector(".icon-close");

  // Toggle menu open/close on click
  toggleBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    // Also toggle a class on the button to control which icon is visible
    toggleBtn.classList.toggle("open", isOpen);

    // Update aria-label based on menu state
    toggleBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Toggle menu");
  });
});
