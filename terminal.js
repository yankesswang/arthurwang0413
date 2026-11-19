/* Arthur CLI — an illustrative retrieval walkthrough.
   Nothing is downloaded or indexed: questions are matched to a few scripted answers, the pipeline
   animation is a visual explanation of how the systems on this page work, and every answer quotes
   the résumé text through its translation keys so it stays in sync with the page. */
(() => {
  const copy = {
    en: {
      labTerminal: "Terminal", cliNew: "New session", cliExpand: "Expand ↗", cliClose: "Close ↙",
      cliTranscript: "Session transcript", cliSuggestions: "Command and project suggestions",
      cliInputLabel: "Ask about Arthur’s work or enter a slash command",
      cliSend: "Run ↵", cliEnter: "run", cliNewline: "new line", cliHistory: "history", cliCommandsLabel: "commands",
      cliPlaceholder: "Ask anything about my work…", cliPlaceholderShort: "Ask, or type / …",
      cliNote: "Illustrative demo · scripted answers quoted from this résumé", cliReady: "Ready", cliSearching: "Retrieving…",
      cliDialog: "Arthur CLI session", cliCompleted: "Answer ready", cliCanceled: "Request canceled.", cliClear: "Start a fresh session",
      cliPaletteHint: "↑↓ navigate · ↵ select · esc close", cliEmptySuggestions: "No matching command or project. Press Escape to return to your question.",
      cliBootTitle: "Grounded retrieval, illustrated", cliBootSub: "A walkthrough of how I build retrieval systems that answer with evidence.",
      cliBootCorpus: "corpus", cliBootRetrieve: "retrieve", cliBootRerank: "rerank", cliBootGround: "ground",
      cliBootCorpusText: "5 projects · 2 roles · 1 paper", cliBootRetrieveText: "hybrid BM25 + dense embeddings",
      cliBootRerankText: "evidence-first, provenance kept", cliBootGroundText: "every answer links to its source",
      cliDemoTag: "demo",
      cliTry: "Try a question", cliEx1: "How does GRACE-Mem keep answers grounded in evidence?", cliEx2: "What runs on-device under a 4 GB VRAM limit?", cliEx3: "How did FAE lookup drop to under 30 seconds?",
      cliStageParse: "parse", cliStageRetrieve: "retrieve", cliStageRerank: "rerank", cliStageGround: "ground", cliStageAnswer: "answer",
      cliStageParseText: "intent + keywords", cliStageRetrieveText: "BM25 + dense", cliStageRerankText: "evidence-first", cliStageGroundText: "cite sources", cliStageAnswerText: "compose",
      cliTopPassage: "Answer", cliAlso: "Supporting evidence",
      cliNoHits: "This demo answers a few scripted questions. Try one of these:",
      cliScripted: "Illustrative demo: answers are scripted and quoted from this résumé.",
      cliScope: "scope", cliProjects: "Browse projects", cliContact: "Find contact details", cliResume: "Get the PDF résumé", cliHelpCommand: "Show commands", cliOpenPdf: "Download résumé PDF ↗",
      cliHelp: "Commands", cliHelpText: "Ask in plain language, or pick one of the sample questions. Mention a project with @.",
      cliCopy: "Copy email", cliCopied: "Copied ✓"
    },
    "zh-TW": {
      labTerminal: "Terminal", cliNew: "新工作階段", cliExpand: "展開 ↗", cliClose: "收合 ↙",
      cliTranscript: "工作階段紀錄", cliSuggestions: "指令與專案建議",
      cliInputLabel: "詢問 Arthur 的工作，或輸入斜線指令",
      cliSend: "執行 ↵", cliEnter: "執行", cliNewline: "換行", cliHistory: "歷史紀錄", cliCommandsLabel: "指令",
      cliPlaceholder: "問任何關於我的工作…", cliPlaceholderShort: "提問，或輸入 / …",
      cliNote: "示意展示 · 回答為預先撰寫並引用本頁履歷", cliReady: "就緒", cliSearching: "檢索中…",
      cliDialog: "Arthur CLI 工作階段", cliCompleted: "回答已完成", cliCanceled: "已取消查詢。", cliClear: "開始新的工作階段",
      cliPaletteHint: "↑↓ 選擇 · ↵ 確認 · esc 關閉", cliEmptySuggestions: "沒有符合的指令或專案，按 Escape 返回輸入。",
      cliBootTitle: "有證據的檢索，示意展示", cliBootSub: "示範我如何打造能附上證據回答的檢索系統。",
      cliBootCorpus: "corpus", cliBootRetrieve: "retrieve", cliBootRerank: "rerank", cliBootGround: "ground",
      cliBootCorpusText: "5 個專案 · 2 段經歷 · 1 篇論文", cliBootRetrieveText: "BM25 + 向量混合檢索",
      cliBootRerankText: "證據優先，保留來源", cliBootGroundText: "每個回答都連回來源",
      cliDemoTag: "示意",
      cliTry: "試著問問", cliEx1: "GRACE-Mem 如何確保回答有證據？", cliEx2: "4GB VRAM 限制下在裝置端跑什麼？", cliEx3: "FAE 查詢時間如何縮短到 30 秒內？",
      cliStageParse: "parse", cliStageRetrieve: "retrieve", cliStageRerank: "rerank", cliStageGround: "ground", cliStageAnswer: "answer",
      cliStageParseText: "意圖與關鍵字", cliStageRetrieveText: "BM25 + 向量", cliStageRerankText: "證據優先", cliStageGroundText: "附上來源", cliStageAnswerText: "組成回答",
      cliTopPassage: "回答", cliAlso: "佐證",
      cliNoHits: "這個示意版只回答幾個預設問題，試試看：",
      cliScripted: "示意展示：回答為預先撰寫，內容引用本頁履歷。",
      cliScope: "範圍", cliProjects: "瀏覽所有專案", cliContact: "查看聯絡方式", cliResume: "下載 PDF 履歷", cliHelpCommand: "查看指令", cliOpenPdf: "下載 PDF 履歷 ↗",
      cliHelp: "指令", cliHelpText: "直接用文字提問，或選擇範例問題。輸入 @ 可指定專案。",
      cliCopy: "複製 Email", cliCopied: "已複製 ✓"
    }
  };
  Object.entries(copy).forEach(([lang, values]) => Object.assign(translations[lang], values));

  const view = document.getElementById("view-terminal");
  const form = view.querySelector(".cli-form");
  const input = view.querySelector("textarea");
  const output = view.querySelector(".cli-transcript");
  const suggestions = view.querySelector(".cli-suggestions");
  const announcer = view.querySelector(".terminal-announcer");
  const state = view.querySelector(".cli-session-state");
  const dialog = document.querySelector(".terminal-dialog");
  const portal = dialog.querySelector(".terminal-portal");
  const projects = { ...projectSources, stock: { id: "stockradar", name: "StockRadar", summary: "stockSummary" } };
  const commands = [["/projects", "cliProjects"], ["/contact", "cliContact"], ["/resume", "cliResume"], ["/help", "cliHelpCommand"], ["/clear", "cliClear"]];
  const examples = ["cliEx1", "cliEx2", "cliEx3"];
  // Scripted answers: each passage is a résumé translation key plus the section it comes from.
  const scripts = [
    { match: /grace|evidence|grounded|memory|hallucinat|provenance|證據|記憶|來源/i, passages: [["graceSummary", "#grace-mem", "GRACE-Mem"], ["graceDetail1", "#grace-mem", "GRACE-Mem"], ["graceDetail5", "#grace-mem", "GRACE-Mem"]] },
    { match: /on-?device|vram|4 ?gb|offline|local|llama|gimate|edge|端側|裝置|離線|本地/i, passages: [["gigabyte2", "#experience", "GIGABYTE"], ["gimateDetail3", "#gimate-agent", "GiMATE Agent"], ["gimateSummary", "#gimate-agent", "GiMATE Agent"]] },
    { match: /fae|30 ?s|lookup|enterprise|neo4j|graphrag|knowledge|chatbot|查詢|知識|企業/i, passages: [["faeDetail5", "#enterprise-knowledge-assistant", "Enterprise Knowledge Assistant"], ["gigabyte3", "#experience", "GIGABYTE"], ["capRetrievalText", "#work", "Core expertise"]] }
  ];
  const narrow = window.matchMedia("(max-width: 600px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const STAGE_MS = 220;
  let records = [], history = [], historyIndex = 0, draft = "", active = null, returnFocus = null, sequence = 0;
  let candidates = [], selected = 0, suggestionsDismissed = false;

  const t = key => translations[labLanguage()][key] ?? translations.en[key] ?? key;
  const node = (tag, className, value) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (value !== undefined) el.textContent = value;
    return el;
  };
  const link = (parent, label, href, className = "cli-source-link") => {
    const el = node("a", className, label); el.href = href; parent.appendChild(el); return el;
  };
  const wait = delay => new Promise(resolve => setTimeout(resolve, reducedMotion.matches ? 0 : delay));

  /* ───────────── Commands ───────────── */
  function resolve(raw) {
    const trimmed = raw.trim(), lower = trimmed.toLowerCase();
    const aliases = { help: "/help", "?": "/help", ls: "/projects", projects: "/projects", contact: "/contact", resume: "/resume", cv: "/resume", clear: "/clear", cls: "/clear" };
    const command = aliases[lower] || lower.split(/\s+/)[0];
    if (commands.some(([name]) => name === command)) return { type: command.slice(1) };
    if (command.startsWith("/")) return { type: "unknown" };
    const scope = trimmed.match(/@([\w-]+)/)?.[1];
    const query = trimmed.replace(/@[\w-]+/g, "").trim() || trimmed;
    const exampleIndex = examples.findIndex(key => translations.en[key] === trimmed || translations["zh-TW"][key] === trimmed);
    const script = exampleIndex >= 0 ? scripts[exampleIndex] : scripts.find(s => s.match.test(query));
    return { type: "search", query, scope: projects[scope] ? scope : null, script };
  }
  async function submit(value) {
    const raw = value.trim().slice(0, 500); if (!raw || active) return;
    if (raw === "/") { input.value = "/"; suggestionsDismissed = false; updateSuggestions(); input.focus(); return; }
    const parsed = resolve(raw);
    history.push(raw); if (history.length > 50) history.shift(); historyIndex = history.length; draft = "";
    if (parsed.type === "clear") { reset(); return; }
    const record = { ...parsed, input: raw, id: ++sequence, pending: parsed.type === "search", stage: 0, shown: 0 };
    records.push(record); if (records.length > 20) records.shift();
    input.value = ""; input.style.height = ""; closeSuggestions();
    if (parsed.type !== "search") { render(); output.scrollTop = output.scrollHeight; return; }
    active = record; render(); output.scrollTop = output.scrollHeight;
    // Light the pipeline stages one by one; this is presentation only.
    for (let i = 1; i <= 5; i += 1) {
      await wait(STAGE_MS); if (active !== record) return;
      record.stage = i; render();
    }
    await wait(120); if (active !== record) return;
    record.pending = false; active = null; render(); output.scrollTop = output.scrollHeight;
    announcer.textContent = t("cliCompleted");
    if (record.script) typeLead(record);
  }
  function typeLead(record) {
    const text = t(record.script.passages[0][0]);
    if (reducedMotion.matches) { record.shown = text.length; render(); return; }
    const step = Math.max(2, Math.ceil(text.length / 45));
    const tick = () => {
      if (!records.includes(record)) return;
      record.shown = Math.min(text.length, record.shown + step);
      const lead = output.querySelector(`[data-lead="${record.id}"]`);
      if (lead && record.shown < text.length) { lead.textContent = text.slice(0, record.shown); requestAnimationFrame(tick); }
      else { record.shown = text.length; render(); output.scrollTop = output.scrollHeight; }
    };
    requestAnimationFrame(tick);
  }

  /* ───────────── Rendering ───────────── */
  const bootSeen = new Set();
  function bootLine(parent, key, body) {
    const row = node("div", "cli-boot-row is-ok");
    if (!bootSeen.has(key)) { row.classList.add("is-fresh"); bootSeen.add(key); }
    row.append(node("span", "cli-boot-mark", "✓"), node("span", "cli-boot-key", t(key)), node("span", "cli-boot-value", body));
    parent.appendChild(row);
  }
  function exampleButtons(parent) {
    examples.forEach((key, i) => {
      const button = node("button", "cli-example"); button.type = "button"; button.dataset.cliRun = t(key);
      button.append(node("span", "cli-example-index", String(i + 1)), node("span", "cli-example-text", t(key)), node("kbd", "cli-example-arrow", "↵"));
      parent.appendChild(button);
    });
  }
  function boot() {
    const el = node("section", "cli-boot");
    const head = node("div", "cli-boot-head");
    head.append(node("span", "cli-boot-logo", "arthur-cli 2.0"), node("h2", "", t("cliBootTitle")), node("p", "", t("cliBootSub")));
    el.appendChild(head);
    const log = node("div", "cli-boot-log");
    [["cliBootCorpus", "cliBootCorpusText"], ["cliBootRetrieve", "cliBootRetrieveText"], ["cliBootRerank", "cliBootRerankText"], ["cliBootGround", "cliBootGroundText"]].forEach(([key, text]) => bootLine(log, key, t(text)));
    el.appendChild(log);
    const tries = node("div", "cli-tries"); tries.appendChild(node("span", "cli-small-label", t("cliTry")));
    exampleButtons(tries); el.appendChild(tries);
    return el;
  }
  function promptLine(text, scope) {
    const line = node("div", "cli-user-message");
    const prompt = node("span", "cli-prompt"); prompt.setAttribute("aria-hidden", "true");
    prompt.append(node("span", "cli-prompt-path", "~/portfolio"), node("span", "cli-prompt-symbol", "❯"));
    line.append(prompt, node("p", "", text));
    if (scope) line.appendChild(node("span", "cli-scope-chip", `${t("cliScope")} · ${projects[scope].name}`));
    return line;
  }
  function pipeline(parent, record) {
    const card = node("div", "cli-pipeline");
    const row = node("ol", "cli-stages");
    [["cliStageParse", "cliStageParseText"], ["cliStageRetrieve", "cliStageRetrieveText"], ["cliStageRerank", "cliStageRerankText"], ["cliStageGround", "cliStageGroundText"], ["cliStageAnswer", "cliStageAnswerText"]].forEach(([key, detail], i) => {
      const li = node("li", record.stage > i ? "is-done" : record.stage === i ? "is-active" : "is-waiting");
      li.append(node("span", "cli-stage-dot"), node("span", "cli-stage-name", t(key)), node("span", "cli-stage-detail", t(detail)));
      row.appendChild(li);
    });
    row.style.setProperty("--progress", (record.stage / 5).toFixed(2));
    const foot = node("div", "cli-pipeline-foot");
    foot.append(node("span", "cli-demo-tag", t("cliDemoTag")), node("span", "cli-pipeline-total", t("cliNote")));
    card.append(row, foot); parent.appendChild(card);
  }
  function passage(parent, record, [key, href, label], lead) {
    const text = t(key);
    const el = node("article", lead ? "cli-passage is-lead" : "cli-passage");
    const body = node("p", "cli-passage-text");
    if (lead && record.shown < text.length) { body.dataset.lead = record.id; body.classList.add("is-typing"); body.textContent = text.slice(0, record.shown); }
    else body.textContent = text;
    el.appendChild(body);
    link(el, `${label} ↗`, href, "cli-passage-source");
    parent.appendChild(el);
  }
  function renderSearch(parent, record) {
    pipeline(parent, record);
    if (record.pending) return;
    if (!record.script) {
      parent.appendChild(node("p", "cli-notice", t("cliNoHits")));
      const tries = node("div", "cli-tries"); exampleButtons(tries); parent.appendChild(tries); return;
    }
    const [first, ...rest] = record.script.passages;
    parent.appendChild(node("p", "cli-small-label", t("cliTopPassage")));
    passage(parent, record, first, true);
    if (record.shown >= t(first[0]).length) {
      parent.appendChild(node("p", "cli-small-label", t("cliAlso")));
      rest.forEach(item => passage(parent, record, item, false));
      parent.appendChild(node("p", "cli-footnote", t("cliScripted")));
    }
  }
  function renderAnswer(parent, record) {
    const type = record.type;
    if (type === "search") renderSearch(parent, record);
    else if (type === "help") {
      parent.append(node("h3", "", t("cliHelp")), node("p", "", t("cliHelpText")));
      const list = node("dl", "cli-command-list");
      commands.forEach(([command, label]) => { const dt = node("dt", ""); const b = node("button", "", command); b.type = "button"; b.dataset.cliRun = command; dt.appendChild(b); list.append(dt, node("dd", "", t(label))); });
      parent.appendChild(list);
    } else if (type === "projects") {
      const list = node("div", "cli-project-list");
      Object.entries(projects).forEach(([key, p]) => { const a = node("a", "cli-project-row"); a.href = `#${p.id}`; a.append(node("code", "", `@${key}`), node("strong", "", p.name), node("span", "", t(p.summary))); list.appendChild(a); });
      parent.appendChild(list);
    } else if (type === "contact") {
      const card = node("div", "cli-contact"), row = node("div", "cli-contact-row");
      const mail = node("a", "cli-contact-email", "yankesswang@gmail.com"); mail.href = "mailto:yankesswang@gmail.com";
      const button = node("button", "cli-chip", t("cliCopy")); button.type = "button"; button.dataset.cliCopy = "yankesswang@gmail.com";
      row.append(mail, button); card.appendChild(row);
      const links = node("div", "cli-chip-row");
      const li = link(links, "LinkedIn ↗", "https://linkedin.com/in/arthur-wang0413"); li.target = "_blank"; li.rel = "noopener noreferrer";
      link(links, t("cliOpenPdf"), "arthurwang_cv.pdf"); card.appendChild(links); parent.appendChild(card);
    } else if (type === "resume") link(parent, t("cliOpenPdf"), "arthurwang_cv.pdf");
    else if (type === "canceled") parent.appendChild(node("p", "cli-notice", t("cliCanceled")));
    else parent.appendChild(node("p", "cli-notice", `${t("cliHelpText")} → /help`));
  }
  function render() {
    const oldTop = output.scrollTop, follow = output.scrollHeight - oldTop - output.clientHeight < 80;
    const fragment = document.createDocumentFragment();
    if (!records.length) fragment.appendChild(boot());
    records.forEach(record => {
      const entry = node("article", "cli-turn"); entry.dataset.turn = record.id;
      if (!record.painted) { entry.classList.add("is-fresh"); record.painted = true; }
      entry.appendChild(promptLine(record.type === "search" ? record.query : record.input, record.scope));
      const response = node("div", "cli-answer");
      renderAnswer(response, record);
      entry.appendChild(response); fragment.appendChild(entry);
    });
    output.replaceChildren(fragment); output.scrollTop = follow ? output.scrollHeight : oldTop;
    state.textContent = active ? t("cliSearching") : t("cliReady");
    view.dataset.state = active ? "busy" : "ready";
    form.setAttribute("aria-busy", String(Boolean(active)));
    view.querySelector(".cli-send").disabled = Boolean(active);
    input.placeholder = t(narrow.matches ? "cliPlaceholderShort" : "cliPlaceholder"); dialog.setAttribute("aria-label", t("cliDialog"));
    view.querySelector(".terminal-expand").textContent = t(dialog.open ? "cliClose" : "cliExpand");
  }
  function reset() {
    active = null; records = []; input.value = ""; input.style.height = ""; draft = ""; historyIndex = history.length; closeSuggestions(); render(); input.focus({preventScroll:true}); announcer.textContent = t("cliClear");
  }

  /* ───────────── Palette, keyboard, dialog ───────────── */
  function closeSuggestions() { suggestions.hidden = true; suggestions.replaceChildren(); candidates = []; selected = 0; }
  function getCandidates() {
    const value = input.value;
    if (/^\/[^\s]*$/.test(value)) return commands.filter(([name]) => name.startsWith(value.toLowerCase())).map(([name, label]) => ({ value: name, label: t(label), replace: () => name }));
    const match = value.match(/@([\w-]*)$/);
    if (match) return Object.entries(projects).filter(([key, p]) => key.startsWith(match[1].toLowerCase()) || p.name.toLowerCase().startsWith(match[1].toLowerCase())).map(([key, p]) => ({ value: `@${key}`, label: p.name, replace: () => `${value.slice(0, match.index)}@${key} ` }));
    return [];
  }
  function updateSuggestions() {
    if (suggestionsDismissed) return;
    const oldScroll = suggestions.scrollTop;
    candidates = getCandidates(); selected = Math.min(selected, Math.max(0, candidates.length - 1));
    suggestions.replaceChildren();
    const trigger = /^\/[^\s]*$/.test(input.value) || /@([\w-]*)$/.test(input.value);
    suggestions.hidden = !trigger;
    if (!trigger) return;
    if (!candidates.length) { suggestions.appendChild(node("p", "cli-menu-empty", t("cliEmptySuggestions"))); return; }
    suggestions.appendChild(node("p", "cli-palette-head", input.value.startsWith("/") ? "/command" : "@project"));
    candidates.forEach((item, i) => { const button = node("button", "cli-suggestion"); button.type = "button"; button.dataset.candidate = i; button.classList.toggle("is-selected", selected === i); button.setAttribute("aria-pressed", String(selected === i)); button.append(node("code", "", item.value), node("span", "", item.label)); suggestions.appendChild(button); });
    suggestions.appendChild(node("p", "cli-palette-hint", t("cliPaletteHint")));
    suggestions.scrollTop = oldScroll;
    const chosen = suggestions.querySelectorAll(".cli-suggestion")[selected];
    if (chosen.offsetTop < suggestions.scrollTop) suggestions.scrollTop = chosen.offsetTop;
    else if (chosen.offsetTop + chosen.offsetHeight > suggestions.scrollTop + suggestions.clientHeight) suggestions.scrollTop = chosen.offsetTop + chosen.offsetHeight - suggestions.clientHeight;
  }
  function accept(i = selected) { const candidate = candidates[i]; if (!candidate) return; input.value = candidate.replace(); closeSuggestions(); input.focus(); }
  const grow = () => { input.style.height = "auto"; input.style.height = `${Math.min(input.scrollHeight, 160)}px`; };
  form.addEventListener("submit", event => { event.preventDefault(); submit(input.value); });
  input.addEventListener("input", () => { grow(); suggestionsDismissed = false; selected = 0; updateSuggestions(); });
  input.addEventListener("keydown", event => {
    if (event.isComposing) return;
    if (event.key === "Escape") { if (!suggestions.hidden) { event.preventDefault(); event.stopPropagation(); suggestionsDismissed = true; closeSuggestions(); } else if (active) { event.preventDefault(); active.pending = false; active.type = "canceled"; active = null; render(); announcer.textContent = t("cliCanceled"); } return; }
    if (!suggestions.hidden && candidates.length) {
      if (["ArrowDown", "ArrowUp"].includes(event.key)) { event.preventDefault(); selected = (selected + (event.key === "ArrowDown" ? 1 : -1) + candidates.length) % candidates.length; updateSuggestions(); announcer.textContent = `${candidates[selected].value} — ${candidates[selected].label}`; return; }
      if ((event.key === "Tab" || event.key === "Enter") && !event.shiftKey) {
        event.preventDefault(); const value = candidates[selected].value; accept();
        if (event.key === "Enter" && value.startsWith("/")) submit(value);
        return;
      }
    }
    if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); submit(input.value); return; }
    if (["ArrowUp", "ArrowDown"].includes(event.key) && !input.value.includes("\n")) {
      const atBoundary = event.key === "ArrowUp" ? input.selectionStart === 0 : input.selectionEnd === input.value.length;
      if (!atBoundary || !history.length) return;
      event.preventDefault(); if (historyIndex === history.length) draft = input.value;
      historyIndex = Math.max(0, Math.min(history.length, historyIndex + (event.key === "ArrowUp" ? -1 : 1)));
      input.value = historyIndex === history.length ? draft : history[historyIndex];
      input.setSelectionRange(input.value.length, input.value.length); grow();
    }
  });
  view.addEventListener("click", event => {
    const run = event.target.closest("[data-cli-run]"), copyButton = event.target.closest("[data-cli-copy]");
    const fill = event.target.closest("[data-cli-fill]"), candidate = event.target.closest("[data-candidate]");
    if (run) { submit(run.dataset.cliRun); input.focus({preventScroll:true}); return; }
    if (copyButton) { navigator.clipboard?.writeText(copyButton.dataset.cliCopy).then(() => { copyButton.textContent = t("cliCopied"); announcer.textContent = t("cliCopied"); setTimeout(() => { if (copyButton.isConnected) copyButton.textContent = t("cliCopy"); }, 2000); }).catch(() => {}); return; }
    if (fill) { input.value = fill.dataset.cliFill; suggestionsDismissed = false; selected = 0; updateSuggestions(); input.focus(); }
    if (candidate) accept(Number(candidate.dataset.candidate));
    const source = event.target.closest('a[href^="#"]'); if (source && dialog.open) dialog.close();
  });
  view.querySelector(".cli-new").addEventListener("click", reset);
  view.querySelector(".terminal-expand").addEventListener("click", () => {
    if (dialog.open) { dialog.close(); return; }
    returnFocus = view.querySelector(".terminal-expand"); portal.appendChild(view); view.hidden = false; dialog.showModal(); render(); input.focus();
  });
  dialog.addEventListener("close", () => { workspace.insertBefore(view, workspace.querySelector(".workspace-footer")); showLabView("terminal"); render(); if (returnFocus?.isConnected) returnFocus.focus({preventScroll:true}); });
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); if (!dialog.open) showLabView("terminal"); input.focus(); }
  });
  narrow.addEventListener?.("change", render);
  document.addEventListener("resume:language", () => { render(); if (!suggestions.hidden) updateSuggestions(); });
  setLanguage(labLanguage()); render();
})();
