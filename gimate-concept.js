/* GiMATE Agent — illustrative interface concept.
   Recreates the interaction model only: a task sidebar, a conversation with execution-step cards,
   and a workbench of execution units and artifacts, with an approval gate before side effects.
   No product screenshots, artwork, unreleased feature names, model names or internal data:
   every task, file and result below is fictional sample content. */
(() => {
  const root = document.querySelector("[data-gimate-concept]");
  if (!root) return;
  const zh = () => document.documentElement.lang === "zh-Hant";
  const T = (en, cn) => (zh() ? cn : en);
  const esc = v => String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const wait = ms => new Promise(r => setTimeout(r, reduced.matches ? 0 : ms));
  const ICONS = {
    plus: '<path d="M12 5v14M5 12h14"/>', clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
    spark: '<path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6"/>',
    shield: '<path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6Z"/>', chip: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4m4-4v4m-4 10v4m4-4v4M3 10h4m-4 4h4m10-4h4m-4 4h4"/>',
    folder: '<path d="M3 7h6l2 2h10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>', file: '<path d="M14 3H6v18h12V7Z"/><path d="M14 3v4h4"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>', check: '<path d="m5 12 4 4L19 6"/>',
    code: '<path d="m8 8-4 4 4 4m8-8 4 4-4 4"/>', doc: '<path d="M14 3H6v18h12V7Z M14 3v4h4M9 13h6M9 17h4"/>',
    chart: '<path d="M4 20V4m0 16h16M8 16v-4m4 4V8m4 8v-6"/>', mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4m8-4v4"/>', at: '<circle cx="12" cy="12" r="4"/><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1"/>',
    send: '<path d="M12 19V5m-6 6 6-6 6 6"/>', panel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/>', x: '<path d="M6 6l12 12M18 6 6 18"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

  // Fictional sample tasks. Each has one step that needs approval before a side effect.
  const TASKS = {
    summary: {
      icon: "doc", title: () => T("Summarize a document", "整理文件重點"), hint: () => T("Turn long notes into one page", "把長篇筆記整理成一頁"),
      prompt: () => T("Summarize the sample planning notes into a one-page brief.", "把範例規劃筆記整理成一頁摘要。"),
      steps: () => [
        ["list", T("Plan created", "已建立執行計畫"), T("3 steps · read, condense, save", "3 個步驟：讀取、濃縮、儲存")],
        ["file", T("Read local file", "讀取本機檔案"), "sample-planning-notes.md · 12 KB"],
        ["spark", T("Condense key decisions", "整理關鍵決策"), T("5 decisions · 3 open questions", "5 項決策 · 3 個待確認事項")],
        ["shield", T("Save to Documents", "儲存到文件資料夾"), T("Writes Planning brief.docx", "寫入 Planning brief.docx"), "approve"]
      ],
      artifacts: () => [["doc", "Planning brief.docx", "18 KB · v1"], ["list", T("Open questions.md", "待確認事項.md"), "2 KB · v1"]],
      reply: () => T("Done. The one-page brief and the open questions are in the workbench for review.", "完成。一頁摘要與待確認事項已放在右側工作區，可逐項檢閱。"),
      preview: () => [T("Planning brief", "規劃摘要"), T("Decisions", "決策"), T("Ship the beta to two pilot teams first.", "先將 Beta 版提供給兩個試點團隊。"), T("Keep the review cadence weekly.", "維持每週檢視。"), T("Open questions", "待確認"), T("Owner for the onboarding guide?", "新手指南由誰負責？")]
    },
    data: {
      icon: "chart", title: () => T("Analyze a spreadsheet", "分析試算表"), hint: () => T("Find trends and outliers", "找出趨勢與異常值"),
      prompt: () => T("Find the trend and any outliers in the sample sales sheet.", "找出範例銷售表的趨勢與異常值。"),
      steps: () => [
        ["list", T("Plan created", "已建立執行計畫"), T("3 steps · load, analyze, export", "3 個步驟：載入、分析、匯出")],
        ["code", T("Python analysis", "Python 資料分析"), T("Local sandbox · 240 rows", "本機沙盒 · 240 列")],
        ["chart", T("Chart and findings", "圖表與發現"), T("1 upward trend · 2 outliers flagged", "1 個上升趨勢 · 標記 2 個異常值")],
        ["shield", T("Export files", "匯出檔案"), T("Writes 2 files to the project", "寫入 2 個檔案到專案"), "approve"]
      ],
      artifacts: () => [["chart", "Trend chart.png", "96 KB · v1"], ["doc", T("Findings.md", "分析發現.md"), "3 KB · v1"]],
      reply: () => T("Sales rise steadily across the sample period; two weeks stand out and are flagged for review.", "範例期間銷售穩定上升；有兩週明顯偏離，已標記待檢視。"),
      preview: () => [T("Findings", "分析發現"), T("Trend", "趨勢"), T("Steady growth across the sample period.", "範例期間呈穩定成長。"), T("Outliers", "異常值"), T("Week 7 and week 11 deviate from the trend.", "第 7 週與第 11 週偏離趨勢。"), T("Data: fictional sample sheet", "資料：虛構範例表")]
    },
    plan: {
      icon: "cal", title: () => T("Plan my day", "規劃今天"), hint: () => T("Prioritize today's notes", "依優先順序整理今日事項"),
      prompt: () => T("Turn today's sample notes into a prioritized plan.", "把今天的範例筆記整理成有優先順序的計畫。"),
      steps: () => [
        ["list", T("Plan created", "已建立執行計畫"), T("2 steps · read, prioritize", "2 個步驟：讀取、排序")],
        ["file", T("Read today's notes", "讀取今日筆記"), "today-notes.md · 4 KB"],
        ["spark", T("Prioritize tasks", "排定優先順序"), T("6 tasks · 2 marked urgent", "6 項任務 · 2 項標記緊急")]
      ],
      artifacts: () => [["list", T("Today's plan.md", "今日計畫.md"), "2 KB · v1"]],
      reply: () => T("Here's today's plan: two urgent items first, then focused work blocks.", "這是今天的計畫：先處理兩件緊急事項，再安排專注工作時段。"),
      preview: () => [T("Today's plan", "今日計畫"), T("Urgent", "緊急"), T("Reply to the design review thread.", "回覆設計審查討論串。"), T("Confirm the demo checklist.", "確認展示清單。"), T("Focus blocks", "專注時段"), T("10:00–12:00 · draft the proposal", "10:00–12:00 · 撰寫提案")]
    },
    reply: {
      icon: "mail", title: () => T("Draft a reply", "草擬回覆"), hint: () => T("Never sends without asking", "未經同意不會寄出"),
      prompt: () => T("Draft a reply to the sample email and send it.", "草擬範例郵件的回覆並寄出。"),
      steps: () => [
        ["list", T("Plan created", "已建立執行計畫"), T("3 steps · read, draft, send", "3 個步驟：讀取、草擬、寄出")],
        ["mail", T("Read sample email", "讀取範例郵件"), T("1 thread · 3 messages", "1 個討論串 · 3 則訊息")],
        ["spark", T("Draft reply", "草擬回覆"), T("Polite confirmation · 92 words", "禮貌確認 · 92 字")],
        ["shield", T("Send email", "寄出郵件"), T("External action · needs your approval", "對外動作 · 需要你核准"), "approve"]
      ],
      artifacts: () => [["mail", T("Reply draft.txt", "回覆草稿.txt"), "1 KB · v1"]],
      reply: () => T("The reply is drafted. Sending is an external action, so it waited for your decision.", "回覆已草擬完成。寄信屬於對外動作，因此會等待你的決定。"),
      preview: () => [T("Reply draft", "回覆草稿"), T("To: sample.contact@example.com", "收件者：sample.contact@example.com"), T("Thanks for the update — Thursday works for the review.", "謝謝更新，週四進行審查沒問題。"), T("I'll bring the revised checklist.", "我會帶修訂後的清單。"), T("Status", "狀態"), T("Draft only unless approved", "未核准前僅為草稿")]
    }
  };
  const state = { task: null, step: -1, phase: "home", decision: null, decided: -1, tab: "overview", run: 0 };

  function sidebar() {
    const nav = [["clock", T("History", "對話記錄")], ["spark", T("Skills", "技能")], ["shield", T("Approvals", "權限與核准")], ["chip", T("Local models", "本機模型")]];
    return `<nav class="gx-side" aria-label="${T("Concept navigation", "示意導覽")}">
      <button type="button" class="gx-new" data-gx="home">${icon("plus")}<span>${T("New task", "新任務")}</span><kbd>Ctrl N</kbd></button>
      <ul class="gx-nav">${nav.map(([i, l]) => `<li><span>${icon(i)}${esc(l)}</span></li>`).join("")}</ul>
      <p class="gx-group">${T("Projects", "專案")}</p>
      <ul class="gx-nav gx-projects"><li><span>${icon("folder")}${T("Sample workspace", "範例工作區")}</span></li><li><span>${icon("folder")}${T("Personal", "個人")}</span></li></ul>
      <div class="gx-account"><span class="gx-avatar" aria-hidden="true">A</span><span>${T("Sample user", "範例使用者")}</span></div>
    </nav>`;
  }
  function composer(disabled) {
    return `<div class="gx-composer">
      <div class="gx-input" aria-hidden="true">${state.phase === "home" ? T("What would you like to get done?", "想聊什麼或想完成什麼？") : T("Add direction… (concept)", "補充方向…（示意）")}</div>
      <div class="gx-tools"><span class="gx-chip">${icon("plus")}${T("Attach", "附件")}</span><span class="gx-chip">${icon("at")}${T("Apps", "應用")}</span>
        <span class="gx-spacer"></span><span class="gx-chip gx-model">${icon("chip")}${T("Local model", "本機模型")}<b>${T("on-device", "裝置端")}</b></span>
        <span class="gx-send ${disabled ? "is-busy" : ""}" aria-hidden="true">${disabled ? "<i></i>" : icon("send")}</span></div>
      <p class="gx-mode">${icon("shield")}${T("Standard: reads run automatically, actions ask first", "標準自動化：讀取與分析自動執行，其餘先詢問")}</p>
    </div>`;
  }
  function home() {
    return `<div class="gx-home"><h5>${T("What should we get done first?", "想先完成哪一件事？")}</h5>
      <div class="gx-starters">${Object.entries(TASKS).map(([key, task]) => `<button type="button" class="gx-starter" data-gx="start:${key}"><span class="gx-starter-icon">${icon(task.icon)}</span><strong>${esc(task.title())}</strong><span>${esc(task.hint())}</span></button>`).join("")}</div>
      ${composer(false)}</div>`;
  }
  function stepStatus(i) {
    if (i === state.decided) return state.decision === "deny" ? "skipped" : "done";
    if (i < state.step) return "done";
    if (i === state.step) return state.phase === "approval" ? "approval" : state.phase === "done" ? "done" : "running";
    return "waiting";
  }
  const STATUS = () => ({ done: T("Done", "完成"), running: T("Running", "執行中"), approval: T("Needs approval", "等待核准"), skipped: T("Skipped by you", "你已略過"), waiting: T("Queued", "排隊中") });
  function conversation() {
    const task = TASKS[state.task], steps = task.steps(), labels = STATUS();
    const visible = steps.slice(0, Math.max(0, Math.min(steps.length, state.step + 1)));
    const cards = visible.map((s, i) => {
      const st = stepStatus(i);
      const gate = st === "approval" ? `<div class="gx-gate"><p>${T("This step changes something outside the conversation. Allow it?", "這個步驟會改變對話以外的內容，要允許嗎？")}</p><div><button type="button" class="gx-btn gx-btn-primary" data-gx="approve">${T("Approve", "核准")}</button><button type="button" class="gx-btn" data-gx="deny">${T("Deny", "拒絕")}</button></div></div>` : "";
      return `<li class="gx-step is-${st}"><div class="gx-step-row"><span class="gx-step-icon">${st === "running" ? "<i></i>" : icon(s[0])}</span><div><strong>${esc(s[1])}</strong><span>${esc(s[2])}</span></div><em>${labels[st]}</em></div>${gate}</li>`;
    }).join("");
    const reply = state.phase === "done" ? `<p class="gx-reply">${esc(task.reply())}${state.decision === "deny" ? ` ${T("You denied the action, so nothing was changed outside the draft.", "你拒絕了該動作，因此草稿以外的內容都未變更。")}` : ""}</p>` : "";
    return `<div class="gx-thread"><p class="gx-user">${esc(task.prompt())}</p><ol class="gx-steps" aria-live="polite">${cards}</ol>${reply}</div>${composer(state.phase !== "done")}`;
  }
  function workbench() {
    if (state.phase === "home") return `<div role="region" class="gx-bench is-empty" aria-label="${T("Workbench", "工作面板")}"><div class="gx-tabs"><span class="gx-tab is-active">${icon("panel")}Overview</span></div><p class="gx-empty">${T("Execution units and artifacts appear here while a task runs.", "任務執行時，執行單元與產物會出現在這裡。")}</p></div>`;
    const task = TASKS[state.task], steps = task.steps(), labels = STATUS();
    const units = steps.slice(0, Math.max(0, state.step + 1)).map((s, i) => { const st = stepStatus(i); return `<li class="is-${st}"><span class="gx-unit-dot"></span><div><strong>${esc(s[1])}</strong><span>${esc(s[2])}</span></div><em>${labels[st]}</em></li>`; }).join("");
    const artifacts = state.phase === "done" ? task.artifacts() : [];
    const open = state.tab !== "overview" ? artifacts.find(a => a[1] === state.tab) : null;
    const tabs = `<div class="gx-tabs" role="tablist"><button type="button" role="tab" aria-selected="${!open}" class="gx-tab ${open ? "" : "is-active"}" data-gx="tab:overview">${icon("panel")}Overview</button>${open ? `<span class="gx-tab is-active" role="tab" aria-selected="true">${icon(open[0])}${esc(open[1])}<button type="button" class="gx-tab-x" data-gx="tab:overview" aria-label="${T("Close", "關閉")}">${icon("x")}</button></span>` : ""}</div>`;
    if (open) {
      const p = task.preview();
      return `<div role="region" class="gx-bench" aria-label="${T("Workbench", "工作面板")}">${tabs}<div class="gx-preview"><header>${icon(open[0])}<div><strong>${esc(open[1])}</strong><span>${esc(open[2])}</span></div></header><article class="gx-paper"><h6>${esc(p[0])}</h6><b>${esc(p[1])}</b><p>${esc(p[2])}</p><p>${esc(p[3])}</p><b>${esc(p[4])}</b><p>${esc(p[5])}</p></article></div></div>`;
    }
    return `<div role="region" class="gx-bench" aria-label="${T("Workbench", "工作面板")}">${tabs}
      <p class="gx-section">${T("Execution units", "執行單元")} <b>${Math.min(steps.length, state.step + 1)}</b></p><ul class="gx-units">${units}</ul>
      <p class="gx-section">${T("Artifacts", "產物")} <b>${artifacts.length}</b></p>
      ${artifacts.length ? `<ul class="gx-artifacts">${artifacts.map(a => `<li><button type="button" data-gx="tab:${esc(a[1])}">${icon(a[0])}<div><strong>${esc(a[1])}</strong><span>${esc(a[2])}</span></div><span class="gx-open">↗</span></button></li>`).join("")}</ul>` : `<p class="gx-empty">${T("Artifacts appear when the task finishes.", "任務完成後會出現產物。")}</p>`}
    </div>`;
  }
  function render(focusSel) {
    const crumb = state.phase === "home" ? T("New task", "新任務") : TASKS[state.task].title();
    root.innerHTML = `<div class="gx-window">
      <header class="gx-chrome"><span class="gx-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="gx-title">GiMATE Agent <span>· ${T("interface concept", "介面示意")}</span></span><span class="gx-badge">${T("Illustrative · sample data", "示意 · 範例資料")}</span></header>
      <div class="gx-body">${sidebar()}<section class="gx-main" aria-label="${T("Conversation", "對話")}"><p class="gx-crumb">GiMATE Agent <span>›</span> <b>${esc(crumb)}</b></p>${state.phase === "home" ? home() : conversation()}</section>${workbench()}</div>
      <footer class="gx-foot">${T("Concept recreation of the interaction model: plan → steps → approval gate → artifacts. Not the shipping interface; all tasks, files and results are fictional.", "依互動模式重新繪製的示意：計畫 → 步驟 → 核准閘門 → 產物。非正式產品介面；任務、檔案與結果皆為虛構範例。")}</footer>
    </div>`;
    if (focusSel) root.querySelector(focusSel)?.focus({ preventScroll: true });
  }
  async function advance(run) {
    const steps = TASKS[state.task].steps();
    while (state.step < steps.length - 1) {
      await wait(state.step < 0 ? 350 : 650); if (run !== state.run) return;
      state.step += 1; state.phase = "running"; render();
      if (steps[state.step][3] === "approve") { await wait(300); if (run !== state.run) return; state.phase = "approval"; render('[data-gx="approve"]'); return; }
    }
    await wait(500); if (run !== state.run) return;
    state.step = steps.length; state.phase = "done"; render();
  }
  root.addEventListener("click", event => {
    const el = event.target.closest("[data-gx]"); if (!el) return;
    const [action, value] = el.dataset.gx.split(/:(.*)/s);
    if (action === "home") { state.run += 1; Object.assign(state, { task: null, step: -1, phase: "home", decision: null, decided: -1, tab: "overview" }); render('[data-gx^="start"]'); return; }
    if (action === "start") { state.run += 1; Object.assign(state, { task: value, step: -1, phase: "running", decision: null, decided: -1, tab: "overview" }); render('[data-gx="home"]'); advance(state.run); return; }
    if ((action === "approve" || action === "deny") && state.phase === "approval") { state.decision = action; state.decided = state.step; state.phase = "running"; render(); advance(state.run); return; }
    if (action === "tab") { state.tab = value; render(value === "overview" ? '[data-gx^="tab:"]' : ".gx-tab-x"); }
  });
  document.addEventListener("resume:language", () => render());
  render();
})();
