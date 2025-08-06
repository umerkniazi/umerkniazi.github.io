document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!toggleBtn || !navLinks) return;

  const icon = toggleBtn.querySelector("img");

  toggleBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    icon.src = isOpen
      ? "assets/icons/close.svg"
      : "assets/icons/hamburger-menu.svg";
    icon.alt = isOpen ? "Close menu" : "Open menu";
  });
});
