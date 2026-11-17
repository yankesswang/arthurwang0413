/* Interactive product concepts. Fixtures and state changes are local illustrations. */
(() => {
  const roots = [...document.querySelectorAll("[data-system-demo]")];
  const T = (en, zh) => document.documentElement.lang === "zh-Hant" ? zh : en;
  const esc = value => String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]));
  const icon = name => {
    const paths = {
      agent: '<rect x="4" y="7" width="16" height="13" rx="3"/><path d="M12 3v4M8 12v3m8-3v3m-7 3h6"/>',
      search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',
      grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
      chart: '<path d="M4 3v17h17M8 15l4-5 4 2 5-7"/>',
      file: '<path d="M14 3H5v18h14V8Z M14 3v5h5M8 12h8m-8 4h6"/>',
      check: '<path d="m5 12 4 4L20 5"/>',
      bolt: '<path d="m13 2-9 12h7l-1 8 10-12h-7Z"/>'
    };
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.grid}</svg>`;
  };
  const pill = (value, tone = "") => `<span class="demo-pill ${tone}">${esc(value)}</span>`;
  const button = (action, label, primary = false, extra = "") => `<button type="button" data-demo-action="${action}" class="demo-button${primary ? " demo-primary" : ""}" ${extra}>${esc(label)}</button>`;
  const field = (label, control) => `<label class="demo-field"><span>${esc(label)}</span>${control}</label>`;
  const options = (values, selected) => values.map(([value, name]) => `<option value="${value}" ${value === selected ? "selected" : ""}>${esc(name)}</option>`).join("");
  const state = {
    gimate: { task: "meeting", phase: "idle", step: -1, run: 0 },
    knowledge: { query: "memory", method: "hybrid", answered: true, source: 0 },
    laptop: { model: "atlas", query: "memory", mode: "strict", answer: "32", judged: false },
    stock: { company: "nova", scenario: "base", tab: "brief" }
  };
  const names = { gimate: "GiMATE / Agent Workspace", knowledge: "Atlas / Knowledge Console", laptop: "SpecLab / Retrieval & Evaluation", stock: "StockRadar / Research Desk" };
  const architecture = {
    gimate: ["Goal", "Plan", "Skill router", "Validated tools", "SQLite checkpoint"],
    knowledge: ["Query", "Model matching", "Hybrid retrieval", "Grounded answer", "Sources"],
    laptop: ["Specification", "Structured facts / RAG", "Answer", "Evaluation"],
    stock: ["Screen", "Financials", "Scenarios", "Research brief", "Review"]
  };
  function shell(key, content, status) {
    return `<header class="demo-chrome"><div><span class="demo-window-dots" aria-hidden="true"><i></i><i></i><i></i></span><h4>${names[key]}</h4></div><div>${pill(T("INTERACTIVE CONCEPT", "互動系統示意"))}${button("expand", T("Expand ↗", "放大操作 ↗"))}</div></header>
      <div class="demo-topline"><span>${icon({gimate:"agent",knowledge:"search",laptop:"grid",stock:"chart"}[key])}${esc(T("Product experience / sample data", "產品體驗 / 範例資料"))}</span><span>${esc(status)}</span></div>
      ${content}<footer class="demo-architecture"><span class="demo-section-label">SYSTEM MAP</span><ol>${architecture[key].map((item, index) => `<li><span>${String(index + 1).padStart(2,"0")}</span>${item}</li>`).join("")}</ol><p>${esc(T("Illustrative frontend with local sample data; no external services or real execution.", "以前端範例資料示意系統操作，未連接外部服務或執行真實任務。"))}</p></footer>`;
  }
  const tasks = {
    meeting: {
      title: () => T("Prepare my meeting brief", "準備會議摘要"),
      goal: () => T("Find the project notes, extract the open questions, and prepare a short meeting brief.", "找出專案筆記、整理待確認事項，準備一份會議摘要。"),
      steps: () => [T("Locate project notes", "定位專案筆記"), T("Extract open questions", "整理待確認事項"), T("Save a draft brief", "儲存摘要草稿")],
      tools: ["knowledge.search", "notes.read", "draft.save"],
      result: () => [T("Atlas launch review", "Atlas 上線檢視"), T("Discuss retrieval coverage, source freshness, and recovery behavior.", "討論檢索覆蓋率、來源時效與失敗恢復行為。"), T("Open questions: missing sources · retry policy · release checklist", "待確認：缺漏來源 · 重試策略 · 上線清單")]
    },
    mail: {
      title: () => T("Organize a follow-up draft", "整理後續追蹤草稿"),
      goal: () => T("Read the sample inbox, collect action items, and prepare an unsent follow-up draft.", "閱讀範例收件內容、彙整待辦，產出尚未寄出的追蹤草稿。"),
      steps: () => [T("Read sample messages", "讀取範例訊息"), T("Collect action items", "彙整待辦項目"), T("Prepare an unsent draft", "建立未寄出的草稿")],
      tools: ["mail.list", "mail.read", "draft.save"],
      result: () => [T("Follow-up / draft only", "後續追蹤 / 僅草稿"), T("Confirm the document owner and schedule a retrieval quality review.", "確認文件負責人，並安排檢索品質檢視。"), T("No message has been sent.", "未寄出任何訊息。")]
    },
    recovery: {
      title: () => T("Inspect a recovery path", "觀察失敗恢復路徑"),
      goal: () => T("Try the sample lookup, handle an unavailable connector, and resume from a local snapshot.", "嘗試範例查詢，處理連接器不可用的情況，再從本機快照接續。"),
      steps: () => [T("Request source lookup", "請求來源查詢"), T("Use cached evidence", "改用快取證據"), T("Write a recovery note", "記錄恢復結果")],
      tools: ["source.lookup", "cache.read", "task.checkpoint"],
      result: () => [T("Recovered from checkpoint", "已從檢查點恢復"), T("The sample connector was unavailable. The concept resumed with a labeled cached snapshot.", "示範連接器不可用，介面改用已標示的快照接續流程。"), T("Recovery bounded to one illustrated retry.", "此示意只進行一次恢復嘗試。")]
    }
  };
  function agent() {
    const s = state.gimate, task = tasks[s.task], planned = s.phase !== "idle", done = s.phase === "done", running = s.phase === "running";
    const statuses = { idle: T("Ready to plan", "等待規劃"), approval: T("Approval needed", "等待核准"), running: T("Demonstration running", "示範執行中"), done: T("Demonstration complete", "示範完成") };
    const control = field(T("Example task", "範例任務"), `<select data-demo-field="task" ${running ? "disabled" : ""}>${options(Object.keys(tasks).map(k => [k,tasks[k].title()]),s.task)}</select>`);
    return shell("gimate", `<div class="demo-agent-grid"><aside class="demo-sidebar"><span class="demo-section-label">WORKSPACE</span><p class="demo-side-brand">${icon("agent")} GiMATE</p><div class="demo-side-item is-current">${icon("bolt")}${T("Task session", "任務工作階段")}</div><div class="demo-side-item">${icon("file")} ${T("Skill registry", "技能登錄")}</div><div class="demo-side-item">${icon("grid")} ${T("Local memory", "本機記憶")}</div><div class="demo-local-model"><span class="demo-indicator"></span> Qwen3.5-4B<span>Electron · FastAPI</span></div></aside>
      <div class="demo-main"><div class="demo-heading"><div><span class="demo-section-label">TASK / 001</span><h5>${T("One goal. A visible plan.", "一個目標，清楚的執行計畫。")}</h5></div>${pill(statuses[s.phase], done ? "good" : "")}</div>${control}<div class="demo-goal">${icon("agent")}<p>${esc(task.goal())}</p></div>
      <div class="demo-plan">${task.steps().map((step,i) => `<div class="demo-plan-step ${planned ? "is-planned" : ""} ${s.step > i || done ? "is-done" : ""} ${s.step === i && running ? "is-running" : ""}"><span>${s.step > i || done ? icon("check") : String(i+1).padStart(2,"0")}</span><div><strong>${esc(step)}</strong><code>${task.tools[i]}</code></div><small>${!planned ? T("Not planned", "尚未規劃") : s.step > i || done ? T("Completed", "完成") : s.step === i && running ? T("Running", "執行中") : T("Queued", "待執行")}</small></div>`).join("")}</div>
      <div class="demo-actions">${s.phase === "idle" ? button("plan",T("Generate example plan", "產生示範計畫"),true) : s.phase === "approval" ? `<div class="demo-approval"><p>${T("Review the sample plan before running the demonstration.", "先確認範例計畫，再執行前端示範。")}</p>${button("approve",T("Approve demonstration", "核准示範執行"),true)}</div>` : ""}${button("reset",T("Reset", "重設"))}</div></div>
      <aside class="demo-inspector"><span class="demo-section-label">OUTPUT / PREVIEW</span><div class="demo-result-paper ${done ? "is-ready" : ""}"><div>${icon("file")}${pill(done ? T("DRAFT READY", "草稿已就緒") : T("AWAITING RUN", "等待示範"),done ? "good" : "")}</div><h5>${done ? esc(task.result()[0]) : T("Your output lives here.", "執行結果會出現在這裡。")}</h5><p>${done ? esc(task.result()[1]) : T("Run the example to inspect the result and checkpoint.", "執行範例，查看輸出與檢查點。")}</p>${done ? `<p class="demo-output-note">${esc(task.result()[2])}</p>` : '<div class="demo-skeleton"><i></i><i></i><i></i></div>'}</div><div class="demo-checkpoint"><span class="demo-section-label">DURABLE STATE</span><code>task_001 / ${done ? "completed" : running ? "running" : "pending"}</code><p>${T("SQLite-backed task persistence", "SQLite 任務持久化示意")}</p></div></aside></div>`,statuses[s.phase]);
  }
  const knowledgeSamples = {
    memory: { query: () => T("What memory does Atlas X2 support?", "Atlas X2 支援哪種記憶體？"), answer: () => T("The sample Atlas X2 supports DDR5 memory with two SO-DIMM slots. Capacity depends on the selected configuration.", "範例 Atlas X2 支援 DDR5 記憶體，提供兩個 SO-DIMM 插槽；容量需依選定配置確認。"), docs: ["SPEC-042","CONFIG-018","GUIDE-007"], snippets: () => [T("Memory: DDR5 · 2 × SO-DIMM · configuration-specific capacity.","記憶體：DDR5 · 2 個 SO-DIMM 插槽 · 容量依配置。"), T("Confirm the exact SKU before quoting capacity.","報價或回答容量前，先確認確切 SKU。"), T("Installation steps reference the service guide.","安裝步驟請對照維修指南。")] },
    power: { query: () => T("Can Atlas X2 use the travel adapter?", "Atlas X2 可以使用旅行用變壓器嗎？"), answer: () => T("The illustrative support note requires checking the SKU power profile and connector before confirming adapter compatibility.", "示範支援紀錄要求先確認 SKU 功耗配置與接頭，再判定變壓器相容性。"), docs: ["COMPAT-011","SPEC-042","SERVICE-003"], snippets: () => [T("Compatibility check: connector, rated power, and device SKU must match.","相容性檢查：接頭、額定功率與裝置 SKU 必須相符。"),T("Power profiles are configuration-specific.","功耗配置依 SKU 而異。"),T("Escalate when the connector is not listed.","接頭不在列表時，轉交支援確認。")] },
    ambiguous: { query: () => T("Show the Atlas specifications", "查看 Atlas 規格"), answer: () => T("Atlas is a family name. Select a model before generating a specification answer; the concept keeps an ambiguous query unresolved.", "Atlas 是系列名稱。先選定型號再產生規格回答；此示意不會直接把模糊名稱當成確定產品。"), docs: ["CATALOG-001","ATLAS-X2","ATLAS-MINI"], snippets: () => [T("Atlas family includes Atlas X2 and Atlas Mini.","Atlas 系列包含 Atlas X2 與 Atlas Mini。"),T("Atlas X2: notebook configuration.","Atlas X2：筆電配置。"),T("Atlas Mini: compact device configuration.","Atlas Mini：小型裝置配置。")] }
  };
  function knowledge() {
    const s=state.knowledge,q=knowledgeSamples[s.query],order=s.method === "dense" ? [1,0,2] : s.method === "bm25" ? [0,2,1] : [0,1,2];
    return shell("knowledge", `<div class="demo-knowledge-layout"><div class="demo-main"><div class="demo-heading"><div><span class="demo-section-label">ENTERPRISE KNOWLEDGE</span><h5>${T("Answers with a paper trail.", "回答，附上可追溯的依據。")}</h5></div>${pill("GraphRAG")}</div>
      <div class="demo-query-controls">${field(T("Sample question", "範例問題"),`<select data-demo-field="query">${options(Object.entries(knowledgeSamples).map(([k,v])=>[k,v.query()]),s.query)}</select>`)}${button("retrieve",T("Retrieve", "檢索"),true)}</div>
      <div class="demo-methods" role="group" aria-label="${T("Retrieval method","檢索方式")}">${["hybrid","bm25","dense"].map(method=>button(`method:${method}`,method === "hybrid" ? "Hybrid" : method.toUpperCase(),false,`aria-pressed="${s.method===method}"`)).join("")}</div>
      <div class="demo-answer-box"><div class="demo-inline-heading">${icon("bolt")}<strong>${T("Grounded answer", "來源導向回答")}</strong>${pill(s.query === "ambiguous" ? T("CLARIFY", "需釐清") : T("SOURCE LINKED", "已附來源"),s.query === "ambiguous" ? "" : "good")}</div><p>${s.answered?esc(q.answer()):esc(T("Choose Retrieve to build an answer from the sample records.","點選檢索，從範例紀錄建立回答。"))}</p><div class="demo-citations">${(s.answered?q.docs:[]).map((doc,i)=>button(`source:${i}`,`[${i+1}] ${doc}`,false,`aria-pressed="${s.source===i}"`)).join("")}</div></div>
      <div class="demo-retrieval-list"><span class="demo-section-label">RETRIEVAL / ${s.method.toUpperCase()}</span>${(s.answered?order:[]).map((i,rank)=>`<button type="button" data-demo-action="source:${i}" class="demo-hit ${s.source===i?"is-selected":""}" aria-pressed="${s.source===i}"><span>0${rank+1}</span><div><strong>${q.docs[i]}</strong><p>${esc(q.snippets()[i])}</p></div>${icon("file")}</button>`).join("")}</div></div>
      <aside class="demo-source-pane"><div class="demo-source-toolbar">${icon("file")}<span>${q.docs[s.source]}</span>${pill("SAMPLE")}</div><span class="demo-section-label">SOURCE PREVIEW</span><h5>${T("Product knowledge record", "產品知識紀錄")}</h5><dl class="demo-record-meta"><dt>Model</dt><dd>${s.query === "ambiguous" ? "Atlas family" : "Atlas X2"}</dd><dt>Record</dt><dd>${q.docs[s.source]}</dd><dt>Scope</dt><dd>${T("Illustrative fixture", "示意資料")}</dd></dl><blockquote>${s.answered?esc(q.snippets()[s.source]):esc(T("No source selected yet.","尚未選定來源。"))}</blockquote><p class="demo-pane-note">${T("Select a citation to inspect the exact record used by this concept.", "點選引用標記，查看這個概念介面所使用的確切紀錄。")}</p></aside></div>`,T("Sample knowledge base", "範例知識庫"));
  }
  const models={atlas:{name:"Atlas 14",memory:32,weight:"1.4 kg",display:"14-inch",cpu:"Sample Series A"},nova:{name:"Nova 16",memory:16,weight:"1.9 kg",display:"16-inch",cpu:"Sample Series B"}};
  function laptop() {
    const s=state.laptop,m=models[s.model],fact=s.query === "memory",normalized=s.answer.trim().toLowerCase().replace(/\s/g,"");
    const pass = s.mode === "strict" ? normalized === `${m.memory}gb` : new RegExp(`\\b${m.memory}\\b`).test(s.answer);
    return shell("laptop",`<div class="demo-spec-layout"><aside class="demo-spec-card"><span class="demo-section-label">PRODUCT FIXTURE</span><div class="demo-laptop-art" aria-hidden="true"><div><span>SPEC / ${s.model.toUpperCase()}</span><i></i><b>${m.name}</b></div><span></span></div>${field(T("Sample model","範例型號"),`<select data-demo-field="model">${options(Object.entries(models).map(([k,v])=>[k,v.name]),s.model)}</select>`)}<dl class="demo-spec-list"><dt>Memory</dt><dd>${m.memory} GB</dd><dt>Display</dt><dd>${m.display}</dd><dt>Weight</dt><dd>${m.weight}</dd><dt>CPU</dt><dd>${m.cpu}</dd></dl><p>${T("Fictional products for interface demonstration.","虛構產品，僅供介面示意。")}</p></aside>
      <div class="demo-main"><div class="demo-heading"><div><span class="demo-section-label">FACTS × RETRIEVAL</span><h5>${T("The right path for each question.","依問題選擇回答路徑。")}</h5></div></div>
      ${field(T("Question type","問題類型"),`<select data-demo-field="query">${options([["memory",T("How much memory does this SKU have?","此 SKU 的記憶體容量是多少？")],["explanation",T("Why separate facts from explanations?","為什麼要把規格事實與解釋分開？")]],s.query)}</select>`)}
      <div class="demo-route-selector"><div class="${fact?"active":""}">${icon("grid")}<strong>Structured facts</strong><span>Exact SKU values</span></div><span aria-hidden="true">/</span><div class="${!fact?"active":""}">${icon("search")}<strong>Retrieval context</strong><span>Explanations</span></div></div>
      <div class="demo-spec-answer">${pill(fact?"FACT QUERY":"RAG CONTEXT","good")}<h5>${fact?`${m.name} / ${m.memory} GB`:T("Facts stay exact. Context adds explanation.","事實保持精確，檢索補足解釋。")}</h5><p>${fact?T("Read directly from the selected model’s sample memory field.","直接讀取所選型號的範例 memory 欄位。"):T("Use structured values for exact specifications, and retrieve supporting context for explanatory questions.","精確規格由結構化欄位提供；解釋性問題再透過檢索補充相關內容。")}</p><code>${fact?`fixture.${s.model}.memory_gb = ${m.memory}`:"query → model filter → retrieve → grounded explanation"}</code></div>
      <section class="demo-eval"><div class="demo-inline-heading"><strong>${T("Memory-answer evaluation", "記憶體答案評估示意")}</strong>${pill(T("RULE-BASED DEMO","規則評分示意"))}</div><p>${T("Try “32” versus “32 GB”. Strict mode requires the unit; lenient mode checks the number. This illustrates grading, not an LLM judge call.","試試「32」與「32 GB」。嚴格模式要求單位，寬鬆模式檢查數值；這裡用規則呈現評分概念，未呼叫 LLM Judge。")}</p><div class="demo-eval-controls">${field(T("Candidate answer","候選回答"),`<input data-demo-field="answer" type="text" maxlength="40" value="${esc(s.answer)}">`)}${field(T("Grading mode","評分模式"),`<select data-demo-field="mode">${options([["strict",T("Strict","嚴格")],["lenient",T("Lenient","寬鬆")]],s.mode)}</select>`)}${button("evaluate",T("Evaluate","評估"),true)}</div><div class="demo-grade" role="status">${s.judged?`${pill(pass?"PASS":"CHECK",pass?"good":"bad")} <span>${esc(pass?T("The sample answer meets this rule.","範例回答符合目前規則。"):T(`Expected ${m.memory} GB under the selected rule.`,`依目前規則，預期為 ${m.memory} GB。`))}</span>`:`<span>${T("Run the evaluation to compare with the fixture.","執行評估，與範例規格進行比對。")}</span>`}</div></section></div></div>`,T("Specification pipeline / sample","規格資料流程 / 示意"));
  }
  const companies={nova:{name:"Nova Systems",ticker:"NOVA",growth:18,quality:82,base:[38,44,42,51,57,64,72],theme:()=>T("Compute infrastructure","運算基礎設施")},orbt:{name:"Orbit Works",ticker:"ORBT",growth:11,quality:75,base:[48,43,47,49,56,55,63],theme:()=>T("Industrial software","工業軟體")},luma:{name:"Luma Labs",ticker:"LUMA",growth:24,quality:68,base:[24,38,31,46,43,67,73],theme:()=>T("Data applications","資料應用")}};
  function stock() {
    const s=state.stock,c=companies[s.company],mult={bear:.75,base:1,bull:1.25}[s.scenario],values=c.base.map((v,i)=>Math.round(v*(i>3?mult:1)));
    const pts=values.map((v,i)=>`${28+i*51},${170-v*1.4}`).join(" ");
    return shell("stock",`<div class="demo-research-layout"><aside class="demo-watchlist"><span class="demo-section-label">RESEARCH UNIVERSE</span><h5>${T("A focused watchlist.","聚焦的研究清單。")}</h5>${Object.entries(companies).map(([key,v])=>`<button type="button" data-demo-action="company:${key}" class="demo-company ${s.company===key?"is-selected":""}" aria-pressed="${s.company===key}"><span class="demo-company-symbol">${v.ticker.slice(0,1)}</span><span><strong>${v.ticker}</strong><small>${v.name}</small></span><span>${v.quality}<small>quality*</small></span></button>`).join("")}<p class="demo-watchlist-note">${T("*Synthetic scores. Fictional companies and financial data.","*示範分數；公司與財務資料皆為虛構。")}</p></aside>
      <div class="demo-main"><div class="demo-heading"><div><span class="demo-section-label">RESEARCH / ${c.ticker}</span><h5>${c.name}</h5><p>${esc(c.theme())}</p></div>${pill(T("SAMPLE DATA","範例資料"))}</div><div class="demo-metric-grid"><div><span>${T("Revenue growth*","營收成長示意*")}</span><strong>${c.growth}%</strong></div><div><span>${T("Quality score*","品質分數示意*")}</span><strong>${c.quality}<small>/100</small></strong></div><div><span>${T("Review status","檢視狀態")}</span><strong class="demo-metric-text">${T("In research","研究中")}</strong></div></div>
      <div class="demo-chart-header"><span class="demo-section-label">OPERATING INDEX / SCENARIO</span><div class="demo-methods" role="group" aria-label="${T("Research scenario","研究情境")}">${["bear","base","bull"].map(v=>button(`scenario:${v}`,({bear:T("Bear","保守"),base:T("Base","基準"),bull:T("Bull","積極")})[v],false,`aria-pressed="${s.scenario===v}"`)).join("")}</div></div>
      <svg class="demo-scenario-chart" viewBox="0 0 370 200" role="img" aria-label="${esc(T(`Synthetic operating index for ${c.name}, ${s.scenario} scenario: ${values.join(", ")}`,`${c.name} 的 ${s.scenario} 情境示意指數：${values.join("、")}`))}"><path d="M20 40H350M20 90H350M20 140H350" class="demo-chart-grid"/><path d="M181 20V175" class="demo-chart-cutoff"/><polygon points="28,175 ${pts} 334,175" class="demo-chart-area"/><polyline points="${pts}" class="demo-chart-line"/>${values.map((v,i)=>`<circle cx="${28+i*51}" cy="${170-v*1.4}" r="3" class="demo-chart-point"/>`).join("")}<text x="28" y="195">Q1</text><text x="170" y="195">Q4</text><text x="300" y="195">Scenario*</text></svg>
      <div class="demo-research-tabs" role="group" aria-label="${T("Research view","研究內容")}">${button("tab:brief",T("Research brief","研究摘要"),false,`aria-pressed="${s.tab==="brief"}"`)}${button("tab:checks",T("Review checks","檢視清單"),false,`aria-pressed="${s.tab==="checks"}"`)}</div><section class="demo-research-brief">${s.tab==="brief"?`<h6>${T("What to investigate next","下一步研究重點")}</h6><p>${esc(T(`Under the ${s.scenario} sample scenario, inspect revenue durability, margin assumptions, and concentration risk before forming a thesis.`,`${s.scenario} 範例情境下，先檢查營收持續性、利潤率假設與集中度風險，再形成研究論點。`))}</p><div class="demo-research-source">${icon("file")} ${T("Illustrative filing + earnings notes","範例財報與法說筆記")}</div>`:`<ul class="demo-review-checks"><li>${icon("check")}${T("Separate reported values from assumptions","區分報告數值與情境假設")}</li><li>${icon("check")}${T("Inspect source freshness and missing evidence","檢查來源時效與缺漏證據")}</li><li>${icon("check")}${T("Record counterarguments before a decision","決策前記錄反方論點")}</li></ul>`}</section></div></div>`,T("Research concept / fictional universe","研究系統示意 / 虛構標的"));
  }
  const renderers={gimate:agent,knowledge,laptop,stock};
  function render(key,focusField) {
    const root=roots.find(el=>el.dataset.systemDemo===key); if(!root)return;
    const focused = root.contains(document.activeElement) ? document.activeElement.dataset.demoAction : null;
    root.innerHTML=renderers[key]();
    if (focused && !focusField) root.querySelector(`[data-demo-action="${focused === "approve" ? "reset" : focused}"]`)?.focus({preventScroll:true});
    if(focusField)root.querySelector(`[data-demo-field="${focusField}"]`)?.focus({preventScroll:true});
  }
  const dialog=document.querySelector(".system-dialog"),portal=dialog.querySelector(".system-dialog-portal");
  let expanded=null,placeholder=null;
  function updateDialog(){dialog.querySelector("h2").textContent=expanded?`${names[expanded.dataset.systemDemo]} · ${T("Interactive concept","互動系統示意")}`:"";dialog.querySelector(".system-dialog-close").textContent=T("Close ✕","關閉 ✕");}
  function resetAgent(){state.gimate.run++;Object.assign(state.gimate,{phase:"idle",step:-1});render("gimate");}
  async function animateAgent() {
    const s=state.gimate;if(s.phase!=="approval")return;
    const run=++s.run;s.phase="running";
    for(let step=0;step<3;step++){
      if(run!==s.run)return;s.step=step;render("gimate");
      await new Promise(resolve=>setTimeout(resolve,window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:500));
    }
    if(run!==s.run)return;s.phase="done";s.step=3;render("gimate");
  }
  roots.forEach(root=>{
    const key=root.dataset.systemDemo;render(key);
    root.addEventListener("change",event=>{
      const field=event.target.dataset.demoField;if(!field)return;
      if(key==="gimate"){resetAgent();state.gimate.task=event.target.value;render(key,field);return;}
      state[key][field]=event.target.value;
      if(key==="knowledge"){state.knowledge.source=0;state.knowledge.answered=false;}
      if(key==="laptop")state.laptop.judged=false;
      render(key,field);
    });
    root.addEventListener("input",event=>{if(key==="laptop"&&event.target.dataset.demoField==="answer"){state.laptop.answer=event.target.value;state.laptop.judged=false;root.querySelector(".demo-grade").textContent=T("Evaluate the edited answer.","請評估修改後的回答。");}});
    root.addEventListener("click",event=>{
      const target=event.target.closest("[data-demo-action]");if(!target)return;
      const [action,value]=target.dataset.demoAction.split(":");
      if(action==="expand"){
        if(dialog.open){dialog.close();return;}
        expanded=root;placeholder=document.createComment(`system-${key}`);root.before(placeholder);portal.append(root);updateDialog();dialog.showModal();dialog.querySelector(".system-dialog-close").focus();return;
      }
      if(key==="gimate"){
        if(action==="plan"){state.gimate.phase="approval";render(key);root.querySelector('[data-demo-action="approve"]').focus({preventScroll:true});}
        if(action==="approve")animateAgent();
        if(action==="reset")resetAgent();return;
      }
      if(key==="knowledge"){if(action==="method")state.knowledge.method=value;if(action==="source")state.knowledge.source=Number(value);if(action==="retrieve"){state.knowledge.source=0;state.knowledge.answered=true;}}
      if(key==="laptop"&&action==="evaluate")state.laptop.judged=true;
      if(key==="stock"){if(action==="company")state.stock.company=value;if(action==="scenario")state.stock.scenario=value;if(action==="tab")state.stock.tab=value;}
      render(key);root.querySelector(`[data-demo-action="${target.dataset.demoAction}"]`)?.focus({preventScroll:true});
    });
  });
  dialog.querySelector(".system-dialog-close").addEventListener("click",()=>dialog.close());
  dialog.addEventListener("close",()=>{if(!expanded||!placeholder)return;placeholder.replaceWith(expanded);expanded.querySelector('[data-demo-action="expand"]')?.focus({preventScroll:true});expanded=null;placeholder=null;});
  document.addEventListener("resume:language",()=>{roots.forEach(root=>render(root.dataset.systemDemo));if(expanded)updateDialog();});
})();
