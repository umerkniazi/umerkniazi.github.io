document.addEventListener("DOMContentLoaded", () => {
  let e = document.querySelector(".mobile-menu-toggle"),
    s = document.querySelector(".nav-links");
  if (!e || !s) return;

  let darkIcon = e.querySelector(".dark-icon");
  let lightIcon = e.querySelector(".light-icon");

  const updateIcon = (isOpen) => {
    const iconName = isOpen ? "x" : "menu";

    darkIcon.src = `/assets/icons/dark/${iconName}.svg`;
    lightIcon.src = `/assets/icons/light/${iconName}.svg`;

    darkIcon.alt = isOpen ? "Close menu" : "Open menu";
    lightIcon.alt = isOpen ? "Close menu" : "Open menu";
  };

  e.addEventListener("click", () => {
    s.classList.toggle("open");
    let isOpen = s.classList.contains("open");
    updateIcon(isOpen);
  });

  updateIcon(false);
});
