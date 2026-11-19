// Fills each experience item's duration chip from data-start / data-end ("YYYY-MM"; no end = present).
(() => {
  const items = document.querySelectorAll(".timeline .experience-item[data-start]");
  if (!items.length) return;
  const toIndex = (value) => { const [y, m] = value.split("-").map(Number); return y * 12 + (m - 1); };
  const now = new Date();
  const format = (months, zh) => {
    const y = Math.floor(months / 12), m = months % 12;
    if (zh) return [y && `${y} 年`, m && `${m} 個月`].filter(Boolean).join(" ") || "1 個月";
    const part = (n, unit) => `${n} ${unit}${n === 1 ? "" : "s"}`;
    return [y && part(y, "yr"), m && part(m, "mo")].filter(Boolean).join(" ") || "1 mo";
  };
  const render = () => {
    const zh = document.documentElement.lang === "zh-Hant";
    items.forEach((item) => {
      const end = item.dataset.end ? toIndex(item.dataset.end) : now.getFullYear() * 12 + now.getMonth();
      const months = Math.max(1, end - toIndex(item.dataset.start) + 1);
      const chip = item.querySelector("[data-tl-duration]");
      if (chip) chip.textContent = format(months, zh);
    });
  };
  render();
  document.addEventListener("resume:language", () => requestAnimationFrame(render));
})();
