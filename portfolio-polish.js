/* Project index: highlight the project in view and keep sticky offsets in sync with the header. */
(() => {
  const nav = document.querySelector(".project-jump");
  const header = document.querySelector(".site-header");
  if (!nav || !header) return;
  const links = [...nav.querySelectorAll("a")];
  const targets = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  const labels = { en: "Jump to a project", "zh-TW": "跳至專案" };
  const rootStyle = document.documentElement.style;

  const syncHeader = () => rootStyle.setProperty("--header-h", `${header.offsetHeight}px`);
  const update = () => {
    const line = header.offsetHeight + nav.offsetHeight + 120;
    let current = null;
    for (const target of targets) if (target.getBoundingClientRect().top <= line) current = target.id;
    const work = document.querySelector("#work");
    if (work && work.getBoundingClientRect().bottom < line) current = null;
    links.forEach(link => {
      if (link.hash === `#${current}`) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
    nav.classList.toggle("is-stuck", nav.getBoundingClientRect().top <= header.offsetHeight + 1);
  };

  let queued = false;
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { update(); queued = false; });
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", () => { syncHeader(); schedule(); });
  document.addEventListener("resume:language", () => {
    nav.setAttribute("aria-label", labels[document.documentElement.lang === "zh-Hant" ? "zh-TW" : "en"]);
    syncHeader(); schedule();
  });
  syncHeader();
  update();
})();

/* Hero portrait, explore section and StockRadar real-interface showcase. */
(() => {
  Object.assign(translations.en, {
    portraitAlt: "Arthur Wang standing beside a car on a tree-lined road",
    exploreKicker: "Portfolio guide", exploreTitle: "Explore the work your way.", exploreText: "Pick a topic, browse all projects, or open the terminal.",
    srBadge: "Real interface", srZoom: "View larger", srNote: "Screenshots from a local instance with public-market data. Prices, rankings and dates are illustrative and time-sensitive.",
    srTab0: "Signal Radar", srTab1: "Research", srTab2: "DCF", srTab3: "Financials", srTab4: "Sector RS", srTab5: "Earnings"
  });
  Object.assign(translations["zh-TW"], {
    portraitAlt: "Arthur Wang 站在林道旁的車邊",
    exploreKicker: "作品導覽", exploreTitle: "用你的方式探索作品。", exploreText: "選擇主題、瀏覽所有專案，或打開 Terminal。",
    srBadge: "真實介面", srZoom: "放大檢視", srNote: "截圖取自本機執行的實例與公開市場資料；價格、排名與日期僅供示意，且具時效性。",
    srTab0: "訊號雷達", srTab1: "個股研究", srTab2: "DCF 估值", srTab3: "財務報表", srTab4: "板塊強弱", srTab5: "財報行事曆"
  });
  const screens = [
    { file: "signal-radar", path: "radar", en: ["Signal Radar", "Scans the tracked universe for trend changes, momentum, overbought/oversold conditions and volume confirmation, ranked by signal strength instead of an unfiltered alert stream."], zh: ["訊號雷達", "掃描追蹤清單中的趨勢轉折、動能、超買超賣與量能確認，依訊號強度排序，而不是一串未經篩選的警示。"], alt: "Signal Radar ranking technical setups across the tracked universe" },
    { file: "stock-research", path: "stock/NVDA", en: ["Stock research workspace", "One workspace per ticker: price action, technical ratings, volatility, support and resistance, fundamentals, valuation, filings, news and analyst revisions."], zh: ["個股研究工作區", "每檔股票一個工作區：價格走勢、技術評級、波動度、支撐壓力、基本面、估值、申報文件、新聞與分析師修正。"], alt: "NVDA research workspace with technical summary" },
    { file: "dcf-analysis", path: "stock/NVDA/dcf", en: ["Scenario-based DCF", "Pessimistic, moderate and optimistic assumptions instead of one opaque target, with confidence, scenario weights, implied value and the full calculation bridge."], zh: ["情境式 DCF 估值", "以悲觀、中性、樂觀三種假設取代單一目標價，並顯示可信度、情境權重、隱含價值與完整計算過程。"], alt: "Scenario-based DCF valuation for NVDA" },
    { file: "financial-statements", path: "stock/NVDA/fundamentals", en: ["Financial statements", "Annual or quarterly income statements, balance sheets, cash flows and derived ratios from SEC filings and XBRL company facts, with period-over-period changes."], zh: ["三大財報與基本面", "取自 SEC 申報與 XBRL 的年度或季度損益表、資產負債表、現金流量與衍生比率，並顯示期間變化。"], alt: "SEC financial statements and derived fundamentals table" },
    { file: "sector-rs", path: "analysis/sector-rs", en: ["Sector relative strength", "SPDR sectors against SPY or each other: relative-strength scores, multi-horizon returns, trend direction and rotation curves."], zh: ["板塊相對強弱", "比較 SPDR 各板塊與 SPY 或彼此之間的相對強弱分數、多期報酬、趨勢方向與輪動曲線。"], alt: "Sector relative-strength comparison chart and table" },
    { file: "earnings-calendar", path: "analysis/earnings", en: ["Earnings calendar", "Upcoming earnings across the research universe in calendar and agenda views, linked to each ticker’s workspace, conclusions and thesis history."], zh: ["財報行事曆", "以月曆與清單檢視研究範圍內即將公布的財報，並可直接進入個股工作區、結論與論點紀錄。"], alt: "Earnings calendar with upcoming events" }
  ];
  const root = document.getElementById("system-stock");
  if (!root) return;
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  const stage = root.querySelector(".sr-stage"), img = stage.querySelector("img"), shot = stage.querySelector(".sr-shot");
  const dialog = document.querySelector(".sr-dialog"), dialogImg = dialog.querySelector("img");
  const lang = () => (document.documentElement.lang === "zh-Hant" ? "zh" : "en");
  let current = 0;
  const preload = i => { const s = screens[(i + screens.length) % screens.length]; const im = new Image(); im.src = `assets/stockradar/${s.file}.webp`; };
  function show(i, focus = false) {
    current = (i + screens.length) % screens.length;
    const s = screens[current];
    tabs.forEach((tab, j) => { tab.setAttribute("aria-selected", String(j === current)); tab.tabIndex = j === current ? 0 : -1; });
    if (focus) tabs[current].focus();
    stage.setAttribute("aria-labelledby", tabs[current].id);
    stage.classList.remove("is-swapping"); void stage.offsetWidth; stage.classList.add("is-swapping");
    img.src = `assets/stockradar/${s.file}.webp`; img.alt = s.alt;
    img.height = s.file === "stock-research" ? 640 : 717;
    root.querySelector("[data-sr-path]").textContent = s.path;
    root.querySelector("[data-sr-title]").textContent = s[lang()][0];
    root.querySelector("[data-sr-text]").textContent = s[lang()][1];
    shot.setAttribute("aria-label", translations[lang() === "zh" ? "zh-TW" : "en"].srZoom);
    preload(current + 1);
  }
  tabs.forEach((tab, i) => tab.addEventListener("click", () => show(i)));
  root.querySelector(".sr-tabs").addEventListener("keydown", event => {
    const keys = { ArrowRight: 1, ArrowLeft: -1 };
    if (event.key in keys) { event.preventDefault(); show(current + keys[event.key], true); }
    else if (event.key === "Home") { event.preventDefault(); show(0, true); }
    else if (event.key === "End") { event.preventDefault(); show(screens.length - 1, true); }
  });
  shot.addEventListener("click", () => {
    if (!dialog.showModal) { window.open(img.src, "_blank", "noopener"); return; }
    dialogImg.src = img.src; dialogImg.alt = img.alt; dialog.showModal(); dialog.querySelector(".sr-dialog-close").focus();
  });
  dialog.querySelector(".sr-dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => shot.focus({ preventScroll: true }));
  document.addEventListener("resume:language", () => show(current));
  setLanguage(labLanguage());
  show(0);
})();

/* Interviewer-first layout: hero proof points, at-a-glance facts, folded case studies, lab section. */
(() => {
  Object.assign(translations.en, {
    heroRoleTitle: "AI Algorithm Deputy Manager / Technical Lead", heroRoleSince: "since 2024", emailMe: "Email me",
    heroProofLabel: "Key results",
    heroProof1: "LoCoMo accuracy · first-author paper, EMNLP 2026 AKBC Runner-Up",
    heroProof2: "FAE spec lookup, down from 5–10 minutes",
    heroProof3: "On-device and enterprise AI products led",
    glanceTitle: "At a glance",
    glanceNowLabel: "Now", glanceNow: "Technical lead for on-device & enterprise AI at GIGABYTE", glanceNowMeta: "Jun. 2024 — Present · New Taipei",
    glanceFocusLabel: "Focus", glanceFocus: "Agents · RAG & memory · LLM evaluation", glanceFocusMeta: "llama.cpp · vLLM · LangChain · FastAPI",
    glanceResearchLabel: "Research", glanceResearch: "GRACE-Mem, first author", glanceResearchMeta: "EMNLP 2026 · AKBC Runner-Up Award",
    glanceEduLabel: "Education", glanceEdu: "B.S. Computer Science, NCTU", glanceEduMeta: "2017–2021 · Mandarin · English",
    caseMore: "Full case study · architecture, implementation, demo", caseMoreStock: "Real interface · 6 screens and feature notes",
    navLab: "Lab", labKicker: "Interactive lab", labSectionTitle: "Prefer to explore? Try the lab.",
    labSectionText: "Topic search, a project index, and a terminal walkthrough of how I build grounded retrieval."
  });
  Object.assign(translations["zh-TW"], {
    heroRoleTitle: "AI 演算法副理／技術負責人", heroRoleSince: "2024 年至今", emailMe: "寄信給我",
    heroProofLabel: "關鍵成果",
    heroProof1: "LoCoMo 準確率 · 第一作者論文，EMNLP 2026 AKBC Runner-Up",
    heroProof2: "FAE 規格查詢時間，從 5–10 分鐘縮短",
    heroProof3: "主導的裝置端與企業 AI 產品",
    glanceTitle: "一眼看懂",
    glanceNowLabel: "現職", glanceNow: "技嘉科技 裝置端與企業 AI 技術負責人", glanceNowMeta: "2024.06 — 至今 · 台灣新北",
    glanceFocusLabel: "專長", glanceFocus: "Agent · RAG 與記憶 · LLM 評估", glanceFocusMeta: "llama.cpp · vLLM · LangChain · FastAPI",
    glanceResearchLabel: "研究", glanceResearch: "GRACE-Mem，第一作者", glanceResearchMeta: "EMNLP 2026 · AKBC Runner-Up Award",
    glanceEduLabel: "學歷", glanceEdu: "國立交通大學 資訊工程學士", glanceEduMeta: "2017–2021 · 中文 · 英文",
    caseMore: "完整案例：架構、實作與互動示範", caseMoreStock: "真實介面：6 個畫面與功能說明",
    navLab: "實驗室", labKicker: "互動實驗室", labSectionTitle: "想自己探索？試試實驗室。",
    labSectionText: "主題搜尋、專案索引，以及示範我如何打造有證據檢索的 Terminal。"
  });
  document.querySelectorAll(".case-more").forEach(details => {
    details.addEventListener("toggle", () => { details.querySelector(".case-more-icon").textContent = details.open ? "−" : "+"; });
  });
  // Print and deep links: open the case study that contains the target.
  const openFor = hash => {
    let target = null;
    try { target = hash.length > 1 ? document.querySelector(hash) : null; } catch { return; }
    const details = target?.closest(".case-more"); if (details) details.open = true;
  };
  window.addEventListener("hashchange", () => openFor(location.hash)); openFor(location.hash);
  window.addEventListener("beforeprint", () => document.querySelectorAll(".case-more").forEach(d => { d.open = true; }));
  setLanguage(labLanguage());
})();
