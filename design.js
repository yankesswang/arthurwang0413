/* Track the visible résumé section without interfering with anchor navigation. */
(() => {
  const links = [...document.querySelectorAll(".section-nav a")];
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  const update = () => {
    const threshold = document.querySelector(".site-header").offsetHeight + 100;
    let current = null;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) current = section.id;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) current = "contact";
    links.forEach(link => {
      if (link.hash === `#${current}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  let queued = false;
  window.addEventListener("scroll", () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { update(); queued = false; });
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
  // Print the complete résumé, including progressively disclosed implementation details.
  let expandedBeforePrint = [];
  window.addEventListener("beforeprint", () => {
    expandedBeforePrint = [...document.querySelectorAll(".project-deep-dive:not([open]), .memory-panel:not([open]), .figure-results:not([open])")];
    expandedBeforePrint.forEach(detail => { detail.open = true; });
  });
  window.addEventListener("afterprint", () => {
    expandedBeforePrint.forEach(detail => { detail.open = false; });
  });
})();
