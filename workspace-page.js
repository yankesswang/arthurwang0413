/* A full product canvas, sharing the portfolio's workspace logic and fixtures. */
(() => {
  const params = new URLSearchParams(location.search);
  const key = params.get("app") === "laptop" ? "laptop" : "knowledge";
  const root = document.querySelector("#workspace");
  root.dataset.systemDemo = key;
  try { document.documentElement.lang = localStorage.getItem("resume-language") === "en" ? "en" : "zh-Hant"; } catch { /* Keep the page default. */ }
  function render() {
    root.innerHTML = window.PortfolioWorkspaces.render(key);
    root.querySelectorAll("h5").forEach(heading => {
      heading.setAttribute("aria-level", heading.closest(".ws-page-heading,.nb-report-heading") ? "2" : "3");
    });
    root.querySelectorAll("h6").forEach(heading => heading.setAttribute("aria-level", "4"));
    document.title = `${key === "knowledge" ? "E-Support" : "NB Spec"} | Arthur Wang`;
    const link = document.querySelector(".workspace-skip");
    link.textContent = document.documentElement.lang === "en" ? "Skip to workspace" : "跳至工作台";
  }
  render();
  window.PortfolioWorkspaces.mount(root, render);
})();
