/* GiMATE Agent — illustrative interface concept.
   Recreates the interaction model only: task sidebar, a conversation with execution-step cards,
   an approval gate before side effects, and a workbench that renders the agent's outputs.
   No product screenshots, artwork, unreleased feature names, model names or internal data:
   every task, file, number and result below is fictional sample content. */
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
    send: '<path d="M12 19V5m-6 6 6-6 6 6"/>', panel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/>',
    slides: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

  /* ── Fictional tasks ─────────────────────────────────────── */
  const TASKS = {
    summary: {
      icon: "doc", title: () => T("Summarize a document", "整理文件重點"), hint: () => T("Notes → brief + deck", "筆記 → 摘要與簡報"),
      prompt: () => T("Summarize the sample planning notes into a one-page brief and a short deck.", "把範例規劃筆記整理成一頁摘要和一份短簡報。"),
      steps: () => [
        { icon: "list", title: T("Plan created", "已建立執行計畫"), detail: T("4 steps · read → condense → design → save", "4 個步驟：讀取 → 濃縮 → 設計 → 儲存"), logs: [T("goal parsed: brief + deck", "目標解析：摘要 + 簡報"), T("skills selected: files.read, writer, slides", "選用技能：files.read、writer、slides")], dur: "0.4s" },
        { icon: "file", title: T("Read local files", "讀取本機檔案"), detail: "planning-notes.md · meeting-log.md", logs: ["planning-notes.md · 12 KB", "meeting-log.md · 7 KB", T("38 paragraphs indexed", "已索引 38 個段落")], dur: "0.9s" },
        { icon: "spark", title: T("Extract decisions", "萃取決策"), detail: T("5 decisions · 3 open questions · 4 owners", "5 項決策 · 3 個待確認 · 4 位負責人"), logs: [T("clustered 38 → 9 themes", "38 段落歸納為 9 個主題"), T("linked owners to decisions", "已將負責人對應到決策"), T("cross-checked dates", "已交叉核對日期")], dur: "1.6s" },
        { icon: "slides", title: T("Design brief and deck", "設計摘要與簡報"), detail: T("1-page brief · 3 slides", "一頁摘要 · 3 張投影片"), logs: [T("layout: decision table + timeline", "版面：決策表 + 時間軸"), T("3 slides drafted", "已草擬 3 張投影片")], dur: "1.2s" },
        { icon: "shield", title: T("Save to Documents", "儲存到文件資料夾"), detail: T("Writes 2 files", "寫入 2 個檔案"), logs: [], approve: { files: [["Planning brief.docx", "18 KB"], ["Beta rollout.pptx", "1.2 MB"]], risk: T("Low · local write", "低 · 本機寫入"), level: "low" }, dur: "0.3s" }
      ],
      artifacts: () => [{ kind: "brief", icon: "doc", name: "Planning brief.docx", meta: T("1 page · 18 KB", "1 頁 · 18 KB") }, { kind: "deck", icon: "slides", name: "Beta rollout.pptx", meta: T("3 slides · 1.2 MB", "3 張 · 1.2 MB") }],
      reply: () => T("Done. I condensed 38 paragraphs into 5 decisions with owners, flagged 3 open questions, and built a 3-slide deck for the review.", "完成。我把 38 個段落濃縮成 5 項附負責人的決策，標出 3 個待確認事項，並做了一份 3 張的審查簡報。")
    },
    data: {
      icon: "chart", title: () => T("Analyze a spreadsheet", "分析試算表"), hint: () => T("Trends, outliers, dashboard", "趨勢、異常值、儀表板"),
      prompt: () => T("Analyze the sample sales sheet: find the trend, flag outliers, and build a dashboard.", "分析範例銷售表：找出趨勢、標記異常值，並做一個儀表板。"),
      steps: () => [
        { icon: "list", title: T("Plan created", "已建立執行計畫"), detail: T("4 steps · load → model → visualize → export", "4 個步驟：載入 → 建模 → 視覺化 → 匯出"), logs: [T("goal parsed: trend + outliers + dashboard", "目標解析：趨勢 + 異常值 + 儀表板")], dur: "0.3s" },
        { icon: "code", title: T("Python analysis", "Python 資料分析"), detail: T("Local sandbox · 12 weeks × 4 regions", "本機沙盒 · 12 週 × 4 區域"), logs: ["df = load('sample-sales.xlsx')  # 48 rows", "trend = linear_fit(weekly_total)  # R² 0.91", "z = robust_zscore(residuals)  # |z| > 2.5"], dur: "2.1s" },
        { icon: "chart", title: T("Build dashboard", "建立儀表板"), detail: T("4 KPIs · trend chart · anomaly table", "4 個 KPI · 趨勢圖 · 異常值表"), logs: [T("week 7 spike · +31% vs trend", "第 7 週暴增 · 高於趨勢 31%"), T("week 11 dip · −24% vs trend", "第 11 週下滑 · 低於趨勢 24%")], dur: "1.4s" },
        { icon: "shield", title: T("Export files", "匯出檔案"), detail: T("Writes 2 files to the project", "寫入 2 個檔案到專案"), logs: [], approve: { files: [["Sales dashboard.html", "212 KB"], ["Findings.md", "3 KB"]], risk: T("Low · project folder", "低 · 專案資料夾"), level: "low" }, dur: "0.3s" }
      ],
      artifacts: () => [{ kind: "dashboard", icon: "chart", name: "Sales dashboard.html", meta: T("4 KPIs · 2 outliers", "4 個 KPI · 2 個異常") }, { kind: "findings", icon: "list", name: "Findings.md", meta: T("4 insights · 3 KB", "4 項發現 · 3 KB") }],
      reply: () => T("Sales grow +18.4% over the period with a strong linear trend (R² 0.91). Two weeks break the pattern; both are flagged with likely causes in the dashboard.", "期間銷售成長 18.4%，線性趨勢明確（R² 0.91）。有兩週偏離趨勢，已在儀表板中標記並附可能原因。")
    },
    plan: {
      icon: "cal", title: () => T("Plan my day", "規劃今天"), hint: () => T("Notes → timed schedule", "筆記 → 時間表"),
      prompt: () => T("Turn today's sample notes and calendar into a prioritized, time-blocked plan.", "把今天的範例筆記與行事曆整理成有優先順序的時間區塊計畫。"),
      steps: () => [
        { icon: "list", title: T("Plan created", "已建立執行計畫"), detail: T("3 steps · gather → prioritize → schedule", "3 個步驟：蒐集 → 排序 → 排程"), logs: [T("goal parsed: time-blocked plan", "目標解析：時間區塊計畫")], dur: "0.3s" },
        { icon: "file", title: T("Gather notes and calendar", "蒐集筆記與行事曆"), detail: T("9 tasks · 3 meetings", "9 項任務 · 3 場會議"), logs: ["today-notes.md · 4 KB", T("calendar: 3 fixed meetings", "行事曆：3 場固定會議")], dur: "0.7s" },
        { icon: "spark", title: T("Prioritize and schedule", "排序與排程"), detail: T("2 urgent · 3.5h focus · 1 buffer", "2 項緊急 · 3.5 小時專注 · 1 段緩衝"), logs: [T("urgency × impact scoring", "依緊急度 × 影響力評分"), T("focus blocks placed in the morning", "專注時段安排在上午"), T("30 min buffer before the demo", "展示前預留 30 分鐘緩衝")], dur: "1.3s" }
      ],
      artifacts: () => [{ kind: "schedule", icon: "cal", name: T("Today's plan", "今日計畫"), meta: T("8 blocks · 09:00–17:00", "8 個時段 · 09:00–17:00") }],
      reply: () => T("Your day is blocked out: two urgent items first, a focus window before lunch, and a buffer before the 16:00 demo.", "今天已排好：先處理兩件緊急事項，午餐前留專注時段，16:00 展示前預留緩衝。")
    },
    reply: {
      icon: "mail", title: () => T("Draft a reply", "草擬回覆"), hint: () => T("Never sends without asking", "未經同意不會寄出"),
      prompt: () => T("Read the sample thread, draft a reply that confirms Thursday, and send it.", "閱讀範例郵件串，草擬確認週四的回覆並寄出。"),
      steps: () => [
        { icon: "list", title: T("Plan created", "已建立執行計畫"), detail: T("3 steps · read → draft → send", "3 個步驟：讀取 → 草擬 → 寄出"), logs: [T("goal parsed: reply + send", "目標解析：回覆 + 寄出")], dur: "0.3s" },
        { icon: "mail", title: T("Read sample thread", "讀取範例郵件串"), detail: T("1 thread · 3 messages · 2 asks", "1 個郵件串 · 3 則訊息 · 2 個請求"), logs: [T("asks: confirm Thursday, bring checklist", "請求：確認週四、帶上清單"), T("tone detected: friendly, brief", "語氣判斷：友善、簡短")], dur: "0.8s" },
        { icon: "spark", title: T("Draft reply", "草擬回覆"), detail: T("Answers 2/2 asks · 74 words", "回應 2/2 個請求 · 74 字"), logs: [T("matched tone: friendly · concise", "語氣對應：友善 · 簡潔"), T("all asks answered", "所有請求皆已回應")], dur: "1.1s" },
        { icon: "shield", title: T("Send email", "寄出郵件"), detail: T("External action · needs your approval", "對外動作 · 需要你核准"), logs: [], approve: { files: [["sample.contact@example.com", T("1 email", "1 封郵件")]], risk: T("Medium · leaves your device", "中 · 會離開你的裝置"), level: "medium" }, dur: "0.4s" }
      ],
      artifacts: () => [{ kind: "email", icon: "mail", name: T("Reply draft", "回覆草稿"), meta: T("74 words · friendly", "74 字 · 友善") }],
      reply: () => T("The reply answers both asks in a matching tone.", "回覆已用相符的語氣回應兩個請求。")
    }
  };

  /* ── Output renderers (all sample content) ───────────────── */
  const tag = (text, tone = "") => `<span class="gx-tag ${tone}">${esc(text)}</span>`;
  const OUT = {
    brief: () => `<article class="gx-doc">
      <header><span class="gx-doc-kicker">${T("PLANNING BRIEF", "規劃摘要")}</span><h6>${T("Beta rollout · Q3", "Beta 上線 · 第三季")}</h6><p>${T("Prepared from 2 notes · sample data", "整理自 2 份筆記 · 範例資料")}</p></header>
      <div class="gx-tldr"><b>TL;DR</b> ${T("Ship the beta to two pilot teams in week 3, keep a weekly review, and close the onboarding gap before a wider release.", "第 3 週先將 Beta 交給兩個試點團隊，維持每週檢視，並在擴大發布前補齊新手引導。")}</div>
      <table><thead><tr><th>${T("Decision", "決策")}</th><th>${T("Owner", "負責人")}</th><th>${T("Status", "狀態")}</th></tr></thead><tbody>
        <tr><td>${T("Beta to 2 pilot teams", "Beta 給 2 個試點團隊")}</td><td>Lin</td><td>${tag(T("Agreed", "已同意"), "ok")}</td></tr>
        <tr><td>${T("Weekly review cadence", "每週檢視節奏")}</td><td>Chen</td><td>${tag(T("Agreed", "已同意"), "ok")}</td></tr>
        <tr><td>${T("Opt-in telemetry only", "遙測僅限自願開啟")}</td><td>Wu</td><td>${tag(T("Agreed", "已同意"), "ok")}</td></tr>
        <tr><td>${T("Onboarding guide owner", "新手指南負責人")}</td><td>—</td><td>${tag(T("Open", "待定"), "warn")}</td></tr>
        <tr><td>${T("Wider release date", "擴大發布日期")}</td><td>Huang</td><td>${tag(T("Pending data", "待資料"))}</td></tr>
      </tbody></table>
      <div class="gx-timeline">${[["W1", T("Freeze scope", "凍結範圍")], ["W3", T("Pilot launch", "試點上線")], ["W5", T("Review metrics", "檢視指標")], ["W7", T("Go / no-go", "是否擴大")]].map(([w, l], i) => `<div style="--i:${i}"><span>${w}</span><p>${l}</p></div>`).join("")}</div>
    </article>`,
    deck: () => `<div class="gx-deck">${[
      [T("Beta rollout", "Beta 上線"), `<p class="gx-slide-sub">${T("Q3 plan · sample", "第三季計畫 · 範例")}</p><div class="gx-slide-hero"></div>`],
      [T("What we decided", "我們決定了什麼"), `<ul><li>${T("2 pilot teams in W3", "W3 兩個試點團隊")}</li><li>${T("Weekly review", "每週檢視")}</li><li>${T("Opt-in telemetry", "自願遙測")}</li></ul>`],
      [T("Path to launch", "上線路徑"), `<svg viewBox="0 0 160 60" aria-hidden="true"><path d="M8 48 L48 38 L88 30 L128 16 L152 10" fill="none" stroke="#ff8a4c" stroke-width="3" stroke-linecap="round"/>${[[8, 48], [48, 38], [88, 30], [128, 16], [152, 10]].map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="3.5" fill="#fff" stroke="#ff8a4c" stroke-width="2"/>`).join("")}</svg>`]
    ].map(([t, body], i) => `<figure class="gx-slide" style="--i:${i}"><span class="gx-slide-no">${i + 1}</span><h6>${esc(t)}</h6>${body}</figure>`).join("")}</div>`,
    dashboard: () => {
      const v = [42, 45, 47, 50, 52, 55, 76, 60, 62, 64, 49, 70];
      const x = i => 18 + i * 26, y = val => 128 - (val - 30) * 2;
      const pts = v.map((val, i) => `${x(i)},${y(val)}`);
      const area = `M${x(0)},128 L${pts.join(" L")} L${x(11)},128 Z`;
      return `<div class="gx-dash">
        <div class="gx-kpis">${[[T("Revenue", "營收"), "$1.24M", "+18.4%", "ok"], [T("Trend fit", "趨勢擬合"), "R² 0.91", T("strong", "強"), "ok"], [T("Outliers", "異常值"), "2", T("of 12 wk", "／12 週"), "warn"], [T("Top region", "最佳區域"), T("North", "北區"), "+26%", "ok"]].map(([l, val, d, tone], i) => `<div style="--i:${i}"><span>${l}</span><strong>${val}</strong><em class="${tone}">${d}</em></div>`).join("")}</div>
        <figure class="gx-chart"><figcaption>${T("Weekly sales · sample data", "每週銷售 · 範例資料")}<span>${T("— trend", "— 趨勢")}</span></figcaption>
          <svg viewBox="0 0 320 140" role="img" aria-label="${T("Weekly sales trend with two flagged outliers", "每週銷售趨勢，標記兩個異常值")}">
            <defs><linearGradient id="gxArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ff8a4c" stop-opacity=".32"/><stop offset="1" stop-color="#ff8a4c" stop-opacity="0"/></linearGradient></defs>
            ${[40, 70, 100].map(g => `<line x1="12" x2="314" y1="${g}" y2="${g}" stroke="#2f2c27"/>`).join("")}
            <path class="gx-chart-area" d="${area}" fill="url(#gxArea)"/>
            <line x1="${x(0)}" y1="${y(42)}" x2="${x(11)}" y2="${y(68)}" stroke="#9a9488" stroke-dasharray="4 4"/>
            <polyline class="gx-chart-line" points="${pts.join(" ")}" pathLength="1" fill="none" stroke="#ff8a4c" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
            ${v.map((val, i) => `<circle cx="${x(i)}" cy="${y(val)}" r="${[6, 10].includes(i) ? 4.5 : 2.4}" fill="${[6, 10].includes(i) ? "#f0b46a" : "#ff8a4c"}"/>`).join("")}
            <circle class="gx-flag" cx="${x(6)}" cy="${y(76)}" r="11" fill="none" stroke="#f0b46a" stroke-width="1.5"/><text x="${x(6) + 15}" y="${y(76) + 4}" fill="#f0b46a" font-size="9">W7 +31%</text>
            <circle class="gx-flag" cx="${x(10)}" cy="${y(49)}" r="11" fill="none" stroke="#f0b46a" stroke-width="1.5"/><text x="${x(10) - 22}" y="${y(49) + 24}" fill="#f0b46a" font-size="9">W11 −24%</text>
          </svg></figure>
        <table><thead><tr><th>${T("Week", "週")}</th><th>${T("vs trend", "相對趨勢")}</th><th>${T("Likely cause", "可能原因")}</th></tr></thead><tbody>
          <tr><td>W7</td><td class="warn">+31%</td><td>${T("Promotion overlap", "促銷活動重疊")}</td></tr>
          <tr><td>W11</td><td class="warn">−24%</td><td>${T("Holiday week, 2 stores closed", "假期週，2 間門市休息")}</td></tr>
        </tbody></table></div>`;
    },
    findings: () => `<article class="gx-doc"><header><span class="gx-doc-kicker">${T("FINDINGS", "分析發現")}</span><h6>${T("What the data says", "資料告訴我們什麼")}</h6><p>${T("Ranked by confidence · sample data", "依信心排序 · 範例資料")}</p></header>
      <ul class="gx-insights">${[[T("Growth is steady and linear", "成長穩定且呈線性"), 92], [T("North drives most of the lift", "北區貢獻最多成長"), 84], [T("The W7 spike is promotion-driven", "W7 暴增來自促銷"), 71], [T("The W11 dip is seasonal, not demand", "W11 下滑屬季節性而非需求"), 66]].map(([t, c], i) => `<li style="--i:${i}"><p>${t}</p><span class="gx-conf"><i style="--w:${c}%"></i></span><em>${c}%</em></li>`).join("")}</ul></article>`,
    schedule: () => {
      const blocks = [["09:00", "09:30", T("Reply to design review", "回覆設計審查"), "urgent"], ["09:30", "10:00", T("Confirm demo checklist", "確認展示清單"), "urgent"], ["10:00", "12:30", T("Focus · write proposal", "專注 · 撰寫提案"), "focus"], ["13:30", "14:00", T("1:1 with Lin", "與 Lin 一對一"), "meet"], ["14:00", "15:00", T("Focus · data review", "專注 · 檢視資料"), "focus"], ["15:00", "15:30", T("Team sync", "團隊同步"), "meet"], ["15:30", "16:00", T("Buffer", "緩衝"), "buffer"], ["16:00", "17:00", T("Product demo", "產品展示"), "meet"]];
      const min = t => { const [h, m] = t.split(":").map(Number); return (h - 9) * 60 + m; };
      const span = 480;
      return `<div class="gx-sched"><div class="gx-sched-sum">${tag(T("2 urgent", "2 項緊急"), "warn")}${tag(T("3.5h focus", "3.5 小時專注"), "ok")}${tag(T("3 meetings", "3 場會議"))}${tag(T("1 buffer", "1 段緩衝"))}</div>
        <div class="gx-grid">${[9, 10, 11, 12, 13, 14, 15, 16, 17].map(h => `<span class="gx-hour" style="top:${(h - 9) * 60 / span * 100}%">${String(h).padStart(2, "0")}:00</span>`).join("")}
        ${blocks.map(([a, b, l, k], i) => `<div class="gx-block is-${k}" style="--i:${i};top:${min(a) / span * 100}%;height:${(min(b) - min(a)) / span * 100}%"><b>${l}</b><span>${a}–${b}</span></div>`).join("")}</div></div>`;
    },
    email: () => `<div class="gx-mail">
      <div class="gx-mail-status ${state.decision === "deny" ? "" : "is-sent"}">${state.decision === "deny" ? T("Draft · not sent — you denied sending", "草稿 · 未寄出 — 你拒絕寄出") : T("Approved · would be sent (demo only, nothing leaves this page)", "已核准 · 將會寄出（僅示意，不會實際寄送）")}</div>
      <dl><dt>${T("To", "收件者")}</dt><dd>sample.contact@example.com</dd><dt>${T("Subject", "主旨")}</dt><dd>Re: ${T("Review on Thursday", "週四審查")}</dd></dl>
      <div class="gx-mail-body"><p>${T("Hi Sam,", "Sam 你好，")}</p><p>${T("Thanks for the update — Thursday at 14:00 works for the review. I'll bring the revised checklist so we can go through the open items together.", "謝謝更新，週四 14:00 進行審查沒問題。我會帶修訂後的清單，一起確認待辦事項。")}</p><p>${T("Best,", "謝謝，")}<br>Arthur</p></div>
      <div class="gx-mail-meta">${tag(T("Friendly", "友善"), "ok")}${tag(T("Concise", "簡潔"), "ok")}${tag(T("2/2 asks answered", "回應 2/2 個請求"), "ok")}</div></div>`
  };

  /* ── State and rendering ────────────────────────────────── */
  const state = { task: null, phase: "home", typed: 0, step: -1, logs: 0, decision: null, decided: -1, shown: 0, tab: "overview", run: 0, started: 0, elapsed: 0 };
  const seen = new Set();
  const fresh = key => { if (seen.has(key)) return ""; seen.add(key); return " is-new"; };
  let timer = null;
  const replyText = () => TASKS[state.task].reply() + (state.decision === "deny" ? ` ${T("You denied the external action, so it stayed a draft.", "你拒絕了對外動作，因此維持草稿。")}` : "");

  function sidebar() {
    const nav = [["clock", T("History", "對話記錄")], ["spark", T("Skills", "技能")], ["shield", T("Approvals", "權限與核准")], ["chip", T("Local models", "本機模型")]];
    return `<nav class="gx-side" aria-label="${T("Concept navigation", "示意導覽")}">
      <button type="button" class="gx-new" data-gx="home">${icon("plus")}<span>${T("New task", "新任務")}</span><kbd>Ctrl N</kbd></button>
      <ul class="gx-nav">${nav.map(([i, l]) => `<li><span>${icon(i)}${esc(l)}</span></li>`).join("")}</ul>
      <p class="gx-group">${T("Projects", "專案")}</p>
      <ul class="gx-nav"><li><span>${icon("folder")}${T("Sample workspace", "範例工作區")}</span></li><li><span>${icon("folder")}${T("Personal", "個人")}</span></li></ul>
      <div class="gx-account"><span class="gx-avatar" aria-hidden="true">A</span><span>${T("Sample user", "範例使用者")}</span></div>
    </nav>`;
  }
  function composer() {
    const task = state.task && TASKS[state.task];
    const typing = state.phase === "typing";
    const busy = !["home", "done", "typing"].includes(state.phase);
    const full = typing && state.typed >= task.prompt().length;
    return `<div class="gx-composer ${typing ? "is-typing" : ""}">
      <div class="gx-input">${typing ? `<span>${esc(task.prompt().slice(0, state.typed))}</span><i class="gx-caret"></i>` : `<span class="gx-ph">${state.phase === "home" ? T("What would you like to get done?", "想聊什麼或想完成什麼？") : T("Add direction… (concept)", "補充方向…（示意）")}</span>`}</div>
      <div class="gx-tools"><span class="gx-chip">${icon("plus")}${T("Attach", "附件")}</span><span class="gx-chip">${icon("at")}${T("Apps", "應用")}</span>
        <span class="gx-spacer"></span><span class="gx-chip gx-model">${icon("chip")}${T("Local model", "本機模型")}<b>${T("on-device", "裝置端")}</b></span>
        <span class="gx-send ${busy ? "is-busy" : ""} ${full ? "is-press" : ""}" aria-hidden="true">${busy ? "<i></i>" : icon("send")}</span></div>
      <p class="gx-mode">${icon("shield")}${T("Standard: reads run automatically, actions ask first", "標準自動化：讀取與分析自動執行，其餘先詢問")}</p>
    </div>`;
  }
  function home() {
    return `<div class="gx-home"><h5>${T("What should we get done first?", "想先完成哪一件事？")}</h5>
      <div class="gx-starters">${Object.entries(TASKS).map(([key, task]) => `<button type="button" class="gx-starter" data-gx="start:${key}"><span class="gx-starter-icon">${icon(task.icon)}</span><strong>${esc(task.title())}</strong><span>${esc(task.hint())}</span></button>`).join("")}</div>
      ${composer()}</div>`;
  }
  const LABEL = () => ({ done: T("Done", "完成"), running: T("Running", "執行中"), approval: T("Needs approval", "等待核准"), skipped: T("Skipped by you", "你已略過") });
  function stepStatus(i) {
    if (i === state.decided) return state.decision === "deny" ? "skipped" : "done";
    if (i < state.step) return "done";
    if (i === state.step) return state.phase === "approval" ? "approval" : state.phase === "running" ? "running" : "done";
    return "waiting";
  }
  function stepCard(s, i) {
    const st = stepStatus(i), labels = LABEL();
    const logs = st === "running" ? s.logs.slice(0, state.logs) : s.logs;
    const gate = st === "approval" ? `<div class="gx-gate"><div class="gx-gate-head"><span>${icon("shield")}${T("Approval required", "需要核准")}</span>${tag(s.approve.risk, s.approve.level === "medium" ? "warn" : "ok")}</div>
      <ul class="gx-diff">${s.approve.files.map(([n, size]) => `<li><b>+</b><span>${esc(n)}</span><em>${esc(size)}</em></li>`).join("")}</ul>
      <div class="gx-gate-actions"><button type="button" class="gx-btn gx-btn-primary" data-gx="approve">${T("Approve", "核准")}</button><button type="button" class="gx-btn" data-gx="deny">${T("Deny", "拒絕")}</button><span>${T("The agent pauses until you decide.", "在你決定前，Agent 會暫停。")}</span></div></div>` : "";
    return `<li class="gx-step is-${st}${fresh(`step-${state.run}-${i}`)}"><div class="gx-step-row"><span class="gx-step-icon">${st === "running" ? "<i></i>" : icon(st === "done" ? "check" : s.icon)}</span><div><strong>${esc(s.title)}</strong><span>${esc(s.detail)}</span></div><em>${labels[st]}${st === "done" ? ` · ${s.dur}` : ""}</em></div>
      ${st === "running" ? `<span class="gx-progress"><i style="--d:${Math.round(parseFloat(s.dur) * 900)}ms"></i></span>` : ""}
      ${logs.length && st !== "approval" ? `<ol class="gx-logs">${logs.map((l, j) => `<li class="${fresh(`log-${state.run}-${i}-${j}`).trim()}"><span>›</span>${esc(l)}</li>`).join("")}</ol>` : ""}${gate}</li>`;
  }
  function resultCard(task) {
    return `<div class="gx-result${fresh(`result-${state.run}`)}"><div class="gx-result-head">${icon("spark")}<b>${T("Outputs ready", "產出完成")}</b><span>${task.artifacts().length} ${task.artifacts().length === 1 ? T("file · open in workbench", "個檔案 · 在右側開啟") : T("files · open in workbench", "個檔案 · 在右側開啟")}</span></div>
      <div class="gx-thumbs">${task.artifacts().map((a, i) => `<button type="button" class="gx-thumb ${String(i) === state.tab ? "is-open" : ""}" data-gx="tab:${i}"><span class="gx-thumb-art is-${a.kind}" aria-hidden="true"><i></i><i></i><i></i></span><strong>${esc(a.name)}</strong><span>${esc(a.meta)}</span></button>`).join("")}</div></div>`;
  }
  function conversation() {
    const task = TASKS[state.task], steps = task.steps();
    if (state.phase === "typing") return `<div class="gx-thread"></div>${composer()}`;
    const visible = steps.slice(0, Math.max(0, Math.min(steps.length, state.step + 1)));
    const thinking = state.phase === "thinking" ? `<p class="gx-thinking">${T("Planning the task…", "正在規劃任務…")}</p>` : "";
    const reply = ["streaming", "done"].includes(state.phase) ? `<p class="gx-reply"><span data-gx-reply>${esc(state.phase === "done" ? replyText() : replyText().slice(0, state.shown))}</span>${state.phase === "streaming" ? '<i class="gx-caret"></i>' : ""}</p>` : "";
    const skeleton = state.phase === "building" ? `<div class="gx-result is-loading"><div class="gx-result-head">${icon("spark")}<b>${T("Rendering outputs…", "正在產生成果…")}</b></div><div class="gx-thumbs">${task.artifacts().map(() => '<span class="gx-thumb gx-skel"></span>').join("")}</div></div>` : "";
    return `<div class="gx-thread"><p class="gx-user${fresh(`user-${state.run}`)}">${esc(task.prompt())}</p>${thinking}<ol class="gx-steps" aria-live="polite">${visible.map(stepCard).join("")}</ol>${skeleton}${reply}${state.phase === "done" ? resultCard(task) : ""}</div>${composer()}`;
  }
  function ring(done, total) {
    const c = 2 * Math.PI * 15, p = total ? done / total : 0;
    return `<svg class="gx-ring" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="15" fill="none" stroke="#2f2c27" stroke-width="4"/><circle cx="20" cy="20" r="15" fill="none" stroke="${p === 1 ? "#7fd1a8" : "#ff8a4c"}" stroke-width="4" stroke-linecap="round" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${(c * (1 - p)).toFixed(2)}" transform="rotate(-90 20 20)"/></svg>`;
  }
  function workbench() {
    const label = T("Workbench", "工作面板");
    if (!state.task || state.phase === "typing") return `<div role="region" class="gx-bench" aria-label="${label}"><div class="gx-tabs"><span class="gx-tab is-active">${icon("panel")}Overview</span></div><div class="gx-empty-art" aria-hidden="true"><i></i><i></i><i></i></div><p class="gx-empty">${T("Execution units and outputs appear here while a task runs.", "任務執行時，執行單元與產出會出現在這裡。")}</p></div>`;
    const task = TASKS[state.task], steps = task.steps(), labels = LABEL();
    const artifacts = state.phase === "done" ? task.artifacts() : [];
    const openIndex = state.tab === "overview" ? -1 : Number(state.tab);
    const open = artifacts[openIndex];
    const tabs = `<div class="gx-tabs" role="tablist"><button type="button" role="tab" aria-selected="${!open}" class="gx-tab ${open ? "" : "is-active"}" data-gx="tab:overview">${icon("panel")}Overview</button>${artifacts.map((a, i) => `<button type="button" role="tab" aria-selected="${i === openIndex}" class="gx-tab ${i === openIndex ? "is-active" : ""}" data-gx="tab:${i}">${icon(a.icon)}<span>${esc(a.name)}</span></button>`).join("")}</div>`;
    if (open) return `<div role="region" class="gx-bench" aria-label="${label}">${tabs}<div class="gx-viewer${fresh(`view-${state.run}-${openIndex}`)}"><header>${icon(open.icon)}<div><strong>${esc(open.name)}</strong><span>${esc(open.meta)} · v1</span></div>${tag(T("sample", "範例"))}</header><div class="gx-out">${OUT[open.kind]()}</div></div></div>`;
    const doneCount = steps.filter((_, i) => i <= state.step && ["done", "skipped"].includes(stepStatus(i))).length;
    const units = steps.slice(0, Math.max(0, Math.min(steps.length, state.step + 1))).map((s, i) => { const st = stepStatus(i); return `<li class="is-${st}${fresh(`unit-${state.run}-${i}`)}"><span class="gx-unit-dot"></span><div><strong>${esc(s.title)}</strong><span>${esc(s.detail)}</span></div><em>${labels[st]}</em></li>`; }).join("");
    return `<div role="region" class="gx-bench" aria-label="${label}">${tabs}
      <div class="gx-runcard">${ring(doneCount, steps.length)}<div><strong>${doneCount}/${steps.length} ${T("steps", "步驟")}</strong><span><span class="gx-elapsed">${(state.elapsed / 1000).toFixed(1)}s</span> · ${T("local · 0 external calls", "本機 · 0 次外部呼叫")}</span></div></div>
      <p class="gx-section">${T("Execution units", "執行單元")} <b>${Math.min(steps.length, state.step + 1)}</b></p><ul class="gx-units">${units}</ul>
      <p class="gx-section">${T("Outputs", "產出")} <b>${artifacts.length}</b></p>
      ${artifacts.length ? `<ul class="gx-artifacts">${artifacts.map((a, i) => `<li class="${fresh(`art-${state.run}-${i}`).trim()}"><button type="button" data-gx="tab:${i}">${icon(a.icon)}<div><strong>${esc(a.name)}</strong><span>${esc(a.meta)}</span></div><span class="gx-open">↗</span></button></li>`).join("")}</ul>` : `<p class="gx-empty">${state.phase === "building" ? T("Rendering outputs…", "正在產生成果…") : T("Outputs appear when the task finishes.", "任務完成後會出現產出。")}</p>`}
    </div>`;
  }
  function render(focusSel) {
    const crumb = state.task ? TASKS[state.task].title() : T("New task", "新任務");
    const viewing = state.phase === "done" && state.tab !== "overview";
    root.innerHTML = `<div class="gx-window">
      <header class="gx-chrome"><span class="gx-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="gx-title">GiMATE Agent <span>· ${T("interface concept", "介面示意")}</span></span><span class="gx-badge">${T("Illustrative · sample data", "示意 · 範例資料")}</span></header>
      <div class="gx-body ${viewing ? "is-viewing" : ""}">${sidebar()}<section class="gx-main" aria-label="${T("Conversation", "對話")}"><p class="gx-crumb">GiMATE Agent <span>›</span> <b>${esc(crumb)}</b></p>${state.phase === "home" ? home() : conversation()}</section>${workbench()}</div>
      <footer class="gx-foot">${T("Concept recreation of the interaction model: plan → steps → approval gate → outputs. Not the shipping interface; all tasks, files, numbers and results are fictional.", "依互動模式重新繪製的示意：計畫 → 步驟 → 核准閘門 → 產出。非正式產品介面；任務、檔案、數字與結果皆為虛構範例。")}</footer>
    </div>`;
    const thread = root.querySelector(".gx-thread"); if (thread) thread.scrollTop = thread.scrollHeight;
    if (focusSel) root.querySelector(focusSel)?.focus({ preventScroll: true });
  }

  /* ── Run loop (presentation only) ───────────────────────── */
  const live = id => id === state.run;
  function startTimer() {
    clearInterval(timer); state.started = performance.now();
    timer = setInterval(() => { state.elapsed = performance.now() - state.started; const el = root.querySelector(".gx-elapsed"); if (el) el.textContent = `${(state.elapsed / 1000).toFixed(1)}s`; }, 100);
  }
  const stopTimer = () => { clearInterval(timer); state.elapsed = performance.now() - state.started; };
  async function run(key) {
    const id = ++state.run; seen.clear(); clearInterval(timer);
    Object.assign(state, { task: key, phase: "typing", typed: 0, step: -1, logs: 0, decision: null, decided: -1, shown: 0, tab: "overview", elapsed: 0 });
    const prompt = TASKS[key].prompt();
    if (reduced.matches) state.typed = prompt.length;
    while (state.typed < prompt.length) { state.typed = Math.min(prompt.length, state.typed + 3); render(); await wait(16); if (!live(id)) return; }
    render(); await wait(280); if (!live(id)) return;
    state.phase = "thinking"; startTimer(); render(); await wait(800); if (!live(id)) return;
    await continueSteps(id);
  }
  async function continueSteps(id) {
    const steps = TASKS[state.task].steps();
    while (state.step < steps.length - 1) {
      state.step += 1; state.logs = 0; state.phase = "running"; render();
      const s = steps[state.step];
      if (s.approve) { await wait(380); if (!live(id)) return; state.phase = "approval"; render('[data-gx="approve"]'); return; }
      for (let j = 0; j < s.logs.length; j += 1) { await wait(Math.max(240, parseFloat(s.dur) * 900 / (s.logs.length + 1))); if (!live(id)) return; state.logs = j + 1; render(); }
      await wait(280); if (!live(id)) return;
    }
    await finish(id);
  }
  async function finish(id) {
    state.step = TASKS[state.task].steps().length; state.phase = "building"; render(); await wait(900); if (!live(id)) return;
    stopTimer(); state.phase = "streaming"; state.shown = 0; render();
    const reply = replyText();
    while (state.shown < reply.length && !reduced.matches) {
      state.shown = Math.min(reply.length, state.shown + 4);
      const el = root.querySelector("[data-gx-reply]"); if (el) el.textContent = reply.slice(0, state.shown);
      await wait(18); if (!live(id)) return;
    }
    state.phase = "done"; render(); await wait(450); if (!live(id)) return;
    state.tab = "0"; render(); // open the primary output in the widened workbench
  }

  root.addEventListener("click", event => {
    const el = event.target.closest("[data-gx]"); if (!el) return;
    const [action, value] = el.dataset.gx.split(/:(.*)/s);
    if (action === "home") { state.run += 1; clearInterval(timer); Object.assign(state, { task: null, phase: "home", step: -1, tab: "overview" }); render('[data-gx^="start"]'); return; }
    if (action === "start") { run(value); return; }
    if ((action === "approve" || action === "deny") && state.phase === "approval") {
      state.decision = action; state.decided = state.step; state.phase = "running"; render();
      const id = state.run; wait(320).then(() => { if (live(id)) continueSteps(id); }); return;
    }
    if (action === "tab" && state.phase === "done") { state.tab = value; render(`[data-gx="tab:${value}"]`); }
  });
  root.addEventListener("pointermove", event => {
    const card = event.target.closest(".gx-starter"); if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - r.left}px`); card.style.setProperty("--my", `${event.clientY - r.top}px`);
  });
  document.addEventListener("resume:language", () => render());
  render();
})();
