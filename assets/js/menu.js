document.addEventListener("DOMContentLoaded", () => {
  let e = document.querySelector(".mobile-menu-toggle"),
    s = document.querySelector(".nav-links");
  if (!e || !s) return;
  let t = e.querySelector("img");

  const getCurrentTheme = () => {
    return (
      document.documentElement.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  };

  const updateIcon = (isOpen) => {
    const theme = getCurrentTheme();
    const iconName = isOpen ? "x" : "menu";
    t.src = `/assets/icons/${theme}/${iconName}.svg`;
    t.alt = isOpen ? "Close menu" : "Open menu";
  };

  e.addEventListener("click", () => {
    s.classList.toggle("open");
    let isOpen = s.classList.contains("open");
    updateIcon(isOpen);
  });

  const observer = new MutationObserver(() => {
    let isOpen = s.classList.contains("open");
    updateIcon(isOpen);
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      let isOpen = s.classList.contains("open");
      updateIcon(isOpen);
    });

  updateIcon(false);
});
