/* A read-only résumé session inspired by coding CLIs. All content comes from this page. */
(() => {
  const copy = {
    en: {
      labTerminal: "Terminal", cliNew: "New session", cliExpand: "Expand ↗", cliClose: "Close ↙",
      cliContext: "portfolio / local", cliScope: "5 projects · read-only", cliTranscript: "Session transcript",
      cliSuggestions: "Command and project suggestions", cliInputLabel: "Ask about Arthur’s work or enter a slash command",
      cliSend: "Send ↵", cliEnter: "send", cliNewline: "new line", cliCommands: "/ commands",
      cliNote: "Local résumé search · no model connected", cliReady: "Ready", cliSearching: "Searching résumé…",
      cliWelcome: "Get to know the work.", cliWelcomeText: "Ask about a project, explore the technical stack, or find relevant experience. Every answer points to the résumé.",
      cliTry: "TRY A QUESTION", cliExampleAgent: "Explain GiMATE’s architecture", cliExampleMemory: "Explain GRACE-Mem’s evidence workflow", cliExampleAbout: "Summarize Arthur’s experience",
      cliPlaceholder: "Ask about my work, or type / for commands", cliTools: "Source activity", cliSearched: "Searched project descriptions", cliRead: "Read résumé section",
      cliAnswer: "arthur / portfolio", cliSources: "Read full project ↗", cliRelevant: "Here’s the relevant work from my résumé.",
      cliNoHits: "I couldn’t find that topic in this résumé. Try a project name, RAG, agents, or evaluation.",
      cliUnknown: "That command isn’t available. Type / to see commands, or ask about the work in plain language.",
      cliHelp: "A few useful commands", cliHelpText: "Ask a question directly, or use a command below. Mention a project with @ to narrow your search.",
      cliProjects: "Browse projects", cliSkills: "View technical skills", cliResearch: "Read the publication", cliResume: "Get the PDF résumé", cliAbout: "Summarize experience", cliContact: "Find contact details", cliClear: "Start a fresh session", cliHelpCommand: "Show available commands", cliOpenPdf: "Download résumé PDF ↗",
      cliSearchResult: "Relevant experience", cliCanceled: "Request canceled.", cliError: "Couldn’t read the résumé. Please try another question.", cliMore: "Related projects", cliSource: "Résumé source", cliDialog: "Arthur CLI session", cliCompleted: "Answer ready", cliEmptySuggestions: "No matching command or project. Press Escape to return to your question."
    },
    "zh-TW": {
      labTerminal: "Terminal", cliNew: "新工作階段", cliExpand: "展開 ↗", cliClose: "收合 ↙",
      cliContext: "portfolio / 本機", cliScope: "5 個專案 · 唯讀", cliTranscript: "工作階段紀錄",
      cliSuggestions: "指令與專案建議", cliInputLabel: "詢問 Arthur 的工作，或輸入斜線指令",
      cliSend: "送出 ↵", cliEnter: "送出", cliNewline: "換行", cliCommands: "/ 指令",
      cliNote: "本機履歷檢索 · 未串接語言模型", cliReady: "就緒", cliSearching: "正在查閱履歷…",
      cliWelcome: "從一個問題開始。", cliWelcomeText: "了解專案架構、查看技術能力，或尋找相關經驗。每個回答都能追溯到履歷內容。",
      cliTry: "試著問問", cliExampleAgent: "說明 GiMATE 的系統架構", cliExampleMemory: "說明 GRACE-Mem 的證據處理流程", cliExampleAbout: "整理 Arthur 的工作經驗",
      cliPlaceholder: "詢問我的工作，或輸入 / 查看指令", cliTools: "來源查閱紀錄", cliSearched: "搜尋專案介紹", cliRead: "閱讀履歷段落",
      cliAnswer: "arthur / portfolio", cliSources: "閱讀完整專案 ↗", cliRelevant: "以下是履歷中與問題相關的實作。",
      cliNoHits: "這份履歷中沒有找到相關內容。可以試試專案名稱、RAG、Agent 或評估。",
      cliUnknown: "目前沒有這個指令。輸入 / 查看可用指令，也可以直接用文字詢問工作內容。",
      cliHelp: "幾個實用的指令", cliHelpText: "可以直接提問，也可以使用下方指令。輸入 @ 選擇專案，讓查詢更聚焦。",
      cliProjects: "瀏覽所有專案", cliSkills: "查看技術能力", cliResearch: "閱讀研究論文", cliResume: "下載 PDF 履歷", cliAbout: "整理工作經驗", cliContact: "查看聯絡方式", cliClear: "開始新的工作階段", cliHelpCommand: "查看可用指令", cliOpenPdf: "下載 PDF 履歷 ↗",
      cliSearchResult: "相關實作經驗", cliCanceled: "已取消查詢。", cliError: "未能讀取履歷，請試著重新提問。", cliMore: "相關專案", cliSource: "履歷來源", cliDialog: "Arthur CLI 工作階段", cliCompleted: "回答已完成", cliEmptySuggestions: "沒有符合的指令或專案，按 Escape 返回輸入。"
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
  const commands = [
    ["/projects", "cliProjects"], ["/about", "cliAbout"], ["/skills", "cliSkills"], ["/research", "cliResearch"],
    ["/resume", "cliResume"], ["/contact", "cliContact"], ["/help", "cliHelpCommand"], ["/clear", "cliClear"]
  ];
  const examples = ["cliExampleAgent", "cliExampleMemory", "cliExampleAbout"];
  let records = [], history = [], historyIndex = 0, draft = "", active = null, returnFocus = null, sequence = 0;
  let candidates = [], selected = 0, suggestionsDismissed = false;
  const t = key => translations[labLanguage()][key];
  const node = (tag, className, value) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (value !== undefined) el.textContent = value;
    return el;
  };
  const link = (parent, label, href) => {
    const el = node("a", "cli-source-link", label); el.href = href; parent.appendChild(el); return el;
  };
  const textOf = selector => document.querySelector(selector)?.textContent.trim() || "";
  const projectKeys = query => {
    const lower = query.toLowerCase();
    return Object.entries(projects).filter(([key, p]) => keywordPresent(lower, key) || lower.includes(p.name.toLowerCase()) ||
      ({gimate: /gimate/, grace: /grace|mem[_-]?kg/, enterprise: /企業|enterprise|fae/, laptop: /筆電|laptop/, stock: /股票|stockradar|stock radar/}[key]).test(lower)).map(([key]) => key);
  };
  function resolve(query) {
    const trimmed = query.trim();
    const [head, ...tail] = trimmed.split(/\s+/);
    const aliases = { help: "/help", projects: "/projects", skills: "/skills", paper: "/research", resume: "/resume", contact: "/contact", whoami: "/about", clear: "/clear", cls: "/clear", ls: "/projects" };
    const command = aliases[trimmed.toLowerCase()] || head.toLowerCase();
    const args = tail.join(" ");
    if (commands.some(([name]) => name === command)) return { type: command.slice(1), keys: [], query: trimmed };
    if (command.startsWith("/")) return { type: "unknown", keys: [], query: trimmed };
    // Support familiar project-oriented legacy commands while leading with natural language.
    const goal = ["run", "search", "cat", "architecture"].includes(command) && args ? args : trimmed;
    const explicit = projectKeys(goal);
    if (explicit.length) return {
      type: "evidence", keys: explicit, query: goal,
      architecture: /架構|流程|寫入|回退|驗證|architecture|workflow|pipeline|ingestion|fallback|validation|how.*work/i.test(trimmed),
      flow: /寫入|建構|ingestion|ingest|write/i.test(trimmed) ? "ingestion" : /回退|驗證|fallback|validation|guard/i.test(trimmed) ? "guards" : "retrieval",
      explicit: true
    };
    if (/\b(skills?|stack|technologies)\b|技術能力|技能|技術棧|技術堆疊/i.test(goal)) return { type: "skills", keys: [], query: goal };
    if (/\b(contact|email|linkedin)\b|聯絡|聯繫|信箱/i.test(goal)) return { type: "contact", keys: [], query: goal };
    if (/\b(paper|publication|research)\b|論文|發表/i.test(goal)) return { type: "research", keys: [], query: goal };
    if (/\b(resume|cv|pdf)\b|下載履歷/i.test(goal)) return { type: "resume", keys: [], query: goal };
    if (/summari[sz]e.*(experience|career)|\babout\b|工作經驗|自我介紹|介紹自己/i.test(goal)) return { type: "about", keys: [], query: goal };
    let hits = portfolioSearch(goal);
    // Topic aliases use the same project evidence as the main guide.
    const preset = /\b(memory|retrieval|rag)\b|記憶|檢索/i.test(goal) ? "memory" : /\b(evaluation|data)\b|評估|資料/i.test(goal) ? "evaluation" : /\bagents?\b|代理/i.test(goal) ? "agents" : null;
    if (!hits.length && preset) hits = portfolioSearch(t(sessionPresets[preset]));
    const stock = document.getElementById("stockradar");
    const terms = [...new Set((goal.toLowerCase().match(/[a-z0-9]+/g) || []).filter(term => term.length > 2 && !["show", "find", "work", "experience", "project", "projects", "the", "and", "with", "for", "arthur"].includes(term)))];
    const stockDetails = [...stock.querySelectorAll("[data-i18n^=stockDetail]")].map(element => ({
      key: "stock", excerptKey: element.dataset.i18n,
      score: terms.filter(term => keywordPresent(element.textContent.toLowerCase(), term)).length
    })).sort((a, b) => b.score - a.score);
    if (stockDetails[0]?.score) hits.push(stockDetails[0]);
    hits.sort((a, b) => b.score - a.score);
    const evidence = hits.slice(0, 2).map(hit => hit.key === "stock" ? { key: "stock", excerptKey: hit.excerptKey } : portfolioRead(hit));
    return { type: "evidence", query: goal, keys: evidence.map(item => item.key), evidence, architecture: false };
  }
  function welcome() {
    const el = node("section", "cli-welcome");
    const title = node("div", "cli-welcome-title"); title.append(node("span", "cli-brand-mark", ">_"), node("h2", "", t("cliWelcome"))); el.appendChild(title);
    el.appendChild(node("p", "", t("cliWelcomeText")));
    const prompts = node("div", "cli-examples"); prompts.appendChild(node("span", "cli-small-label", t("cliTry")));
    examples.forEach(key => { const button = node("button", "cli-example"); button.type = "button"; button.dataset.cliExample = key; button.append(node("span", "", t(key)), node("span", "cli-example-arrow", "↗")); prompts.appendChild(button); });
    el.appendChild(prompts); return el;
  }
  function sourceTrace(parent, record) {
    const contentTypes = { about: "experience", skills: "skills", research: "research", contact: "contact", resume: "resume" };
    if (!["evidence", "projects", ...Object.keys(contentTypes)].includes(record.type)) return;
    const details = node("details", "cli-activity");
    const count = record.type === "evidence" ? record.keys.length : record.type === "projects" ? 5 : 1;
    details.appendChild(node("summary", "", `${t("cliTools")} · ${count}`));
    const list = node("ul", "");
    if (record.type === "evidence" && !record.explicit) list.appendChild(node("li", "", `${t("cliSearched")} · 5`));
    const paths = record.type === "evidence" && !record.keys.length ? [] : record.keys?.length ? record.keys.map(key => `index.html#${projects[key].id}`) : record.type === "projects" ? Object.values(projects).map(p => `index.html#${p.id}`) : [record.type === "resume" ? "arthurwang_cv.pdf" : `index.html#${contentTypes[record.type] || "work"}`];
    paths.forEach(path => { const li = node("li", ""); li.append(node("span", "", t("cliRead")), node("code", "", path)); list.appendChild(li); });
    details.appendChild(list); parent.appendChild(details);
  }
  function renderAnswer(parent, record) {
    const type = record.type;
    if (type === "help") {
      parent.append(node("h3", "", t("cliHelp")), node("p", "", t("cliHelpText")));
      const list = node("dl", "cli-command-list");
      commands.forEach(([command, label]) => { const dt = node("dt", ""); const b = node("button", "", command); b.type = "button"; b.dataset.cliFill = command; dt.appendChild(b); list.append(dt, node("dd", "", t(label))); }); parent.appendChild(list);
    } else if (type === "unknown") parent.appendChild(node("p", "cli-notice", t("cliUnknown")));
    else if (type === "canceled") parent.appendChild(node("p", "cli-notice", t("cliCanceled")));
    else if (type === "error") parent.appendChild(node("p", "cli-notice", t("cliError")));
    else if (type === "about") {
      parent.append(node("h3", "", "Arthur Wang"), node("p", "", textOf("[data-i18n=portraitRole]")));
      const list = node("ul", "cli-bullets"); ["gigabyte1", "gigabyte2", "gigabyte3"].forEach(key => list.appendChild(node("li", "", t(key)))); parent.appendChild(list); link(parent, t("cliSource"), "#experience");
    } else if (type === "skills") {
      document.querySelectorAll(".skill-groups article").forEach(article => { parent.append(node("h3", "", article.querySelector("h3").textContent), node("p", "", article.querySelector("p").textContent)); }); link(parent, t("cliSource"), "#skills");
    } else if (type === "research") {
      parent.append(node("h3", "", textOf("#publication-title")), node("p", "", textOf(".authors")), node("p", "", [...document.querySelectorAll(".publication-meta span")].map(e => e.textContent).join(" · "))); link(parent, t("cliSource"), "#research");
    } else if (type === "resume") link(parent, t("cliOpenPdf"), "arthurwang_cv.pdf");
    else if (type === "contact") { link(parent, "yankesswang@gmail.com", "mailto:yankesswang@gmail.com"); link(parent, "LinkedIn ↗", "https://linkedin.com/in/arthur-wang0413"); }
    else {
      const keys = type === "projects" ? Object.keys(projects) : record.keys;
      if (!keys.length) { parent.appendChild(node("p", "cli-notice", t("cliNoHits"))); return; }
      if (type === "evidence") parent.appendChild(node("p", "", t("cliRelevant")));
      keys.forEach(key => {
        const project = projects[key], article = document.getElementById(project.id), section = node("section", "cli-project-answer");
        section.append(node("h3", "", project.name), node("p", "", t(project.summary)));
        const workflow = record.architecture && article.querySelector(".memory-workflow");
        if (record.architecture) {
          const map = article.querySelector(".architecture-strip p"); if (map) section.appendChild(node("p", "cli-flow", map.textContent));
        }
        if (workflow) {
          const source = workflow.querySelector(`[data-flow="${record.flow || "retrieval"}"]`);
          const list = node("ol", "cli-workflow");
          [...source.children].forEach(item => {
            const li = node("li", "");
            li.append(node("strong", "", item.querySelector("h5").textContent), node("p", "", item.querySelector("p").textContent));
            list.appendChild(li);
          });
          section.appendChild(list);
          if (record.flow !== "guards") section.appendChild(node("p", "cli-excerpt", t("memoryFallbackText")));
          section.appendChild(node("p", "cli-workflow-source", workflow.querySelector(".memory-source-note").textContent));
        }
        const evidence = record.evidence?.find(item => item.key === key);
        if (evidence) section.appendChild(node("p", "cli-excerpt", t(evidence.excerptKey)));
        else if (record.explicit && !workflow) {
          const list = node("ul", "cli-bullets"); [...article.querySelectorAll(".project-details li, :scope > ul > li")].slice(0, 2).forEach(li => list.appendChild(node("li", "", li.textContent))); if (list.children.length) section.appendChild(list);
        }
        link(section, t("cliSources"), `#${project.id}`); parent.appendChild(section);
      });
    }
  }
  function render() {
    const oldTop = output.scrollTop, follow = output.scrollHeight - oldTop - output.clientHeight < 80;
    const fragment = document.createDocumentFragment();
    if (!records.length) fragment.appendChild(welcome());
    records.forEach(record => {
      const entry = node("article", "cli-turn"); entry.dataset.turn = record.id;
      const prompt = node("div", "cli-user-message"); prompt.append(node("span", "cli-prompt-symbol", "❯"), node("p", "", record.input)); entry.appendChild(prompt);
      if (record.pending) { const busy = node("div", "cli-busy"); busy.append(node("span", "cli-dot", ""), node("span", "", t("cliSearching"))); entry.appendChild(busy); }
      else { const response = node("div", "cli-answer"); response.appendChild(node("p", "cli-answer-label", `◆ ${t("cliAnswer")}`)); sourceTrace(response, record); renderAnswer(response, record); entry.appendChild(response); }
      fragment.appendChild(entry);
    });
    output.replaceChildren(fragment); output.scrollTop = follow ? output.scrollHeight : oldTop;
    state.textContent = t(active ? "cliSearching" : "cliReady"); form.setAttribute("aria-busy", String(Boolean(active)));
    view.querySelector(".cli-send").disabled = Boolean(active);
    input.placeholder = t("cliPlaceholder"); dialog.setAttribute("aria-label", t("cliDialog"));
    view.querySelector(".terminal-expand").textContent = t(dialog.open ? "cliClose" : "cliExpand");
  }
  function reset() {
    active = null; records = []; input.value = ""; draft = ""; historyIndex = history.length; closeSuggestions(); render(); input.focus({preventScroll:true}); announcer.textContent = t("cliClear");
  }
  async function submit(value) {
    const raw = value.trim().slice(0, 500); if (!raw || active) return;
    if (raw === "/" || raw === "?") { input.value = "/"; suggestionsDismissed = false; updateSuggestions(); input.focus(); return; }
    const parsed = resolve(raw);
    history.push(raw); if (history.length > 50) history.shift(); historyIndex = history.length; draft = "";
    if (parsed.type === "clear") { reset(); return; }
    const record = { ...parsed, input: raw, id: ++sequence, pending: true };
    records.push(record); if (records.length > 20) records.shift(); active = record;
    input.value = ""; closeSuggestions(); render(); output.scrollTop = output.scrollHeight;
    try {
      // Paint feedback once. No simulated token stream or artificial tool delays.
      await new Promise(resolve => requestAnimationFrame(resolve));
      if (active !== record) return;
      record.pending = false; active = null; render(); output.scrollTop = output.scrollHeight;
      announcer.textContent = t("cliCompleted");
    } catch { if (active !== record) return; record.pending = false; record.type = "error"; active = null; render(); announcer.textContent = t("cliError"); }
  }
  function closeSuggestions() { suggestions.hidden = true; suggestions.replaceChildren(); candidates = []; selected = 0; input.removeAttribute("aria-describedby"); input.setAttribute("aria-describedby", "terminal-shortcuts terminal-note"); }
  function getCandidates() {
    const value = input.value;
    if (/^\/[^\s]*$/.test(value)) return commands.filter(([name]) => name.startsWith(value.toLowerCase())).map(([name, label]) => ({ value: name, label: t(label), replace: () => name }));
    const match = value.match(/@([\w-]*)$/);
    if (match) return Object.entries(projects).filter(([key, p]) => key.startsWith(match[1].toLowerCase()) || p.name.toLowerCase().startsWith(match[1].toLowerCase())).map(([key, p]) => ({ value: `@${key}`, label: p.name, replace: () => value.slice(0, match.index) + `@${key} ` }));
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
    candidates.forEach((item, index) => { const button = node("button", "cli-suggestion"); button.type = "button"; button.dataset.candidate = index; button.classList.toggle("is-selected", selected === index); button.setAttribute("aria-pressed", String(selected === index)); button.append(node("code", "", item.value), node("span", "", item.label)); suggestions.appendChild(button); });
    suggestions.scrollTop = oldScroll;
    const chosen = suggestions.children[selected];
    if (chosen.offsetTop < suggestions.scrollTop) suggestions.scrollTop = chosen.offsetTop;
    else if (chosen.offsetTop + chosen.offsetHeight > suggestions.scrollTop + suggestions.clientHeight) suggestions.scrollTop = chosen.offsetTop + chosen.offsetHeight - suggestions.clientHeight;
  }
  function accept(index = selected) { const candidate = candidates[index]; if (!candidate) return; input.value = candidate.replace(); closeSuggestions(); input.focus(); }
  form.addEventListener("submit", event => { event.preventDefault(); submit(input.value); });
  input.addEventListener("input", () => { suggestionsDismissed = false; selected = 0; updateSuggestions(); });
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
      input.setSelectionRange(event.key === "ArrowUp" ? 0 : input.value.length, event.key === "ArrowUp" ? 0 : input.value.length);
    }
  });
  view.addEventListener("click", event => {
    const example = event.target.closest("[data-cli-example]"), fill = event.target.closest("[data-cli-fill]"), candidate = event.target.closest("[data-candidate]");
    if (example) { submit(t(example.dataset.cliExample)); input.focus({preventScroll:true}); }
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
  document.addEventListener("resume:language", () => { render(); if (!suggestions.hidden) updateSuggestions(); });
  setLanguage(labLanguage()); render();
})();
