/* System architecture diagrams for GiMATE Agent, E-Support and NB Spec, drawn as interactive SVG flows.
   Reconstructed from the project source (E-Support integration + KG branches, NB Spec raw_spec);
   parameters are the code defaults. Short labels in the diagram; one-sentence detail on selection. */
(() => {
  const T = (en, zh) => (document.documentElement.lang === "zh-Hant" ? zh : en);
  const esc = v => String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // node: [id, x, y, w, kind, label, sub, detail]   kind: io | step | key | store | model
  const ARCH = {
    gimate: () => ({
      title: T("One sentence in: pick skills, plan the steps, check them, then execute.", "一句話進來：先選技能、再規劃步驟，檢查後才執行。"),
      width: 1320, height: 470,
      bands: [[16, 420, T("1 · UNDERSTAND", "1 · 理解與選擇"), T("guard · memory · skill selection", "檢查 · 記憶 · 選技能")], [452, 430, T("2 · PLAN & CHECK", "2 · 規劃與檢查"), T("small model, validated by code", "小模型規劃，程式把關")], [898, 406, T("3 · EXECUTE & REPLY", "3 · 執行與回覆"), T("skills · MCP · approval", "技能 · MCP · 使用者確認")]],
      nodes: [
        ["in", 32, 110, 190, "io", T("Request", "使用者請求"), T("desktop · avatar · Telegram", "桌面 · Avatar · Telegram"), T("All three entry points call the same single-turn pipeline; only the reply format differs.", "三個入口都進入同一條單輪對話流程，只有回覆的呈現方式不同。")],
        ["guard", 32, 220, 190, "step", T("Safety check", "敏感內容檢查"), T("reject on hit", "命中直接拒絕"), T("Every turn is screened for sensitive or confidential content before any skill runs.", "每一輪在執行任何技能前，先檢查是否含敏感或機密內容。")],
        ["mem", 32, 330, 190, "store", T("Memory", "記憶與上下文"), "SQLite · Chroma", T("Recent turns, the session window, and up to three semantically related past turns are pulled in automatically.", "自動帶入最近對話、對話視窗，以及最多三則語意相關的舊對話。")],
        ["sel", 246, 220, 186, "model", T("Pick skills", "選擇技能"), T("LLM pass 1", "第一輪 LLM"), T("Sees only each skill's name and description, so a 4B model classifies quickly; GiMATE feature names route by keyword first.", "只看各技能的名稱與說明，讓 4B 模型快速分類；GiMATE 功能名稱先用關鍵字直接導向。")],
        ["load", 468, 110, 190, "step", T("Load tools", "載入工具"), T("selected skills only", "只載入選中技能"), T("Tools are lazy-loaded for the chosen skills, keeping the planner's context small.", "只為選中的技能載入工具，讓規劃階段的上下文保持精簡。")],
        ["fast", 676, 110, 190, "step", T("Fast path", "免規劃捷徑"), T("common requests", "常見請求"), T("Frequent requests map straight to a plan without a second LLM call.", "常見請求直接對應到既有步驟，省下一次 LLM 呼叫。")],
        ["plan", 468, 220, 190, "key", T("Plan steps", "規劃步驟"), T("LLM pass 2 · JSON", "第二輪 LLM · JSON"), T("Produces a multi-step JSON plan; later steps reference earlier results with placeholders, so 'look up, then compute' chains work.", "產出多步驟 JSON 計畫；後面的步驟可用佔位符引用前一步結果，讓「先查再算」能串起來。")],
        ["val", 676, 220, 190, "step", T("Validate & repair", "驗證與修補"), T("args · references", "參數 · 跨步驟參照"), T("Code checks every step's tool and arguments and repairs what it can before anything runs.", "執行前由程式檢查每一步的工具與參數，能修的先修好。")],
        ["gate", 914, 110, 180, "step", T("Approval", "使用者確認"), T("risky actions", "風險操作"), T("Dangerous steps such as closing apps or deleting files wait for the user to tick what to apply; channels without a confirm UI refuse them.", "關閉程式、刪除檔案等風險步驟會等使用者勾選確認；沒有確認介面的入口直接拒絕執行。")],
        ["exec", 914, 220, 180, "model", T("Run tools", "執行工具"), T("skills · MCP", "技能 · MCP 服務"), T("Runs skill tools step by step, including local MCP servers for code, images, and hardware control; progress persists so tasks can resume.", "逐步執行技能工具，包含寫程式、生圖與硬體控制的本機 MCP 服務；進度會保存，中斷可恢復。")],
        ["out", 1112, 220, 176, "io", T("Reply", "回覆與卡片"), T("charts · cards", "圖表 · 簡報 · 任務卡"), T("Long tool output is compacted before the final answer, which cites its sources and renders as cards in the app.", "過長的工具結果先壓縮再寫最終回答，附上來源，並在 App 中以卡片呈現。")],
        ["save", 1112, 330, 176, "store", T("Save turn", "寫回記憶"), T("history · vectors", "對話紀錄 · 向量索引"), T("Each finished turn is stored in SQLite and the vector index so later conversations can recall it.", "每輪結束後寫入 SQLite 與向量索引，之後的對話就能找回來。")]
      ],
      edges: [["in", "guard", "down"], ["guard", "sel"], ["mem", "sel"], ["sel", "load"], ["load", "plan", "down"], ["load", "fast"], ["fast", "val", "down"], ["plan", "val"], ["val", "gate"], ["val", "exec"], ["gate", "exec", "down"], ["exec", "out"], ["out", "save", "down"]],
      loopFrom: "exec", loopTo: "plan",
      loop: T("Step fails or result is off → bounded repair and replanning", "步驟失敗或結果不對 → 有限次數的修復與重新規劃"),
      decisions: [T("Two small LLM passes: choose, then plan", "兩輪小模型：先選技能，再規劃"), T("Code validates; tools execute deterministically", "程式驗證參數，工具確定性執行"), T("Risky actions always wait for approval", "風險操作一律等使用者確認")]
    }),
    knowledge: () => ({
      title: T("Identify the product first. Answer only from that product's data.", "先辨識產品，再只用該產品的資料回答。"),
      width: 1240, height: 380,
      lanes: [[185, T("1 · IDENTIFY", "1 · 辨識產品")], [660, T("2 · RETRIEVE, SCOPED", "2 · 限定產品檢索")], [900, T("3 · GENERATE", "3 · 生成")]],
      nodes: [
        ["q", 20, 160, 130, "io", T("Question", "問題"), T("EN · ZH", "中 · 英"), T("Language is detected first so the answer can be translated back.", "先偵測語言，回答時再翻譯回使用者語言。")],
        ["ft", 185, 80, 220, "step", T("FlashText", "FlashText"), T("names + keywords", "型號 + 關鍵字"), T("Matches full product names and keywords from the catalogue. These candidates always come first.", "比對型錄中的完整型號與關鍵字，這些候選永遠排在最前面。")],
        ["hy", 185, 240, 220, "step", T("Hybrid search", "混合搜尋"), "BM25 + vector · RRF k=60", T("Fixes typos without touching model strings, then fuses BM25 and vector rankings with RRF. It only fills gaps after exact matches.", "在不動到型號字串的前提下修正拼錯，再以 RRF 融合 BM25 與向量排名；只負責補足精確匹配找不到的部分。")],
        ["id", 445, 160, 175, "key", T("Product ID", "產品確認"), T("exact → hybrid", "精確 → 混合"), T("The confirmed product (and revision) scopes everything downstream.", "確認後的產品（含版本）決定下游所有資料範圍。")],
        ["sp", 660, 80, 205, "store", T("Spec store", "規格資料"), T("MongoDB · top-5 chunks", "MongoDB · top-5 片段"), T("Spec JSON and Q&A filtered by product, flattened, chunked (128 / 20) and searched.", "依產品過濾的規格 JSON 與問答，攤平後切片（128／20）再檢索。")],
        ["kg", 660, 240, 205, "store", T("Knowledge graph", "知識圖譜"), T("FalkorDB · name + rev", "FalkorDB · 型號 + 版本"), T("One graph per product type. Cypher matches name and revision, then expands chipset, socket, CPU, features and OS.", "每種產品一個圖；Cypher 同時比對型號與版本，再展開晶片組、插槽、CPU、功能與 OS。")],
        ["llm", 900, 160, 185, "model", T("Local LLM", "本機 LLM"), T("per-product context", "依產品分段"), T("Context stays labelled per product, so comparisons never mix specs. Served through LM Studio or an OpenAI-compatible endpoint.", "上下文依產品分段標記，比較時不會混用規格；透過 LM Studio 或 OpenAI 相容端點提供。")],
        ["ans", 1110, 160, 110, "io", T("Answer", "回答"), T("streamed", "串流"), T("Streamed back in the user's language with the product it refers to.", "以使用者語言串流回覆，並標明所指產品。")]
      ],
      edges: [["q", "ft"], ["q", "hy"], ["ft", "id"], ["hy", "id"], ["id", "sp"], ["id", "kg"], ["sp", "llm"], ["kg", "llm"], ["llm", "ans"]],
      loop: T("Evaluated per layer: product ID · retrieval hit · answer accuracy", "分層評估：產品辨識 · 檢索命中 · 回答正確率"),
      decisions: [T("Identify before retrieving", "先辨識再檢索"), T("Exact match leads, hybrid fills", "精確優先，混合補充"), T("Fuse by rank, not score", "以排名融合，不相加分數")]
    }),
    laptop: () => ({
      title: T("Synthetic data → RAG → evaluation, run as one reproducible loop.", "合成資料 → RAG → 評估，串成一個可重現的迴圈。"),
      width: 1320, height: 470,
      bands: [[16, 460, T("1 · SYNTHETIC DATA", "1 · 合成資料"), T("EN + ZH · general + specific", "中英 · general + specific")], [492, 404, T("2 · RAG", "2 · RAG"), T("local · hybrid · fact-aware", "本機 · 混合檢索 · 事實優先")], [912, 392, T("3 · EVALUATION", "3 · 評估"), T("named experiments", "命名實驗")]],
      nodes: [
        ["sp", 32, 110, 200, "store", T("Spec sheets", "規格表"), T("crawled · cleaned", "爬取 · 清理"), T("Product and spec pages are crawled with rate limiting, cleaned from HTML and stored as structured spec sheets.", "限速爬取產品與規格頁，清理 HTML 後存成結構化規格表。")],
        ["sd", 32, 220, 200, "io", T("Seed questions", "種子題庫"), T("templates · EN/ZH", "範本 · 中英"), T("Cleaned question templates in two categories (general and specific), in both English and Chinese.", "兩類（general、specific）中英文問題範本，已先清理。")],
        ["rq", 256, 110, 200, "model", T("Rephrase per model", "依機型改寫"), T("grounded in spec", "貼合規格的問題"), T("An LLM rewrites each seed question so it is accurate to one model's spec sheet, e.g. naming its real CPU or GPU.", "LLM 依每台機型的規格表改寫種子問題，例如帶入它實際的 CPU 或 GPU。")],
        ["ra", 256, 220, 200, "model", T("Reference answers", "參考答案"), T("from the spec only", "只根據規格"), T("A second prompt answers each question strictly from the spec sheet, as JSON, with no outside knowledge.", "第二個 prompt 只根據規格表回答每一題，輸出 JSON，不使用外部知識。")],
        ["vd", 32, 330, 200, "key", T("Judge validation", "評審驗證"), T("keep verified Q&A", "只保留驗證通過"), T("An LLM judge checks every generated Q&A against the spec; accuracy is recorded per product before the set is used.", "LLM 評審逐題比對規格驗證生成的問答，記錄每台機型的正確率後才採用。")],
        ["gd", 256, 330, 200, "store", T("Golden set", "黃金資料集"), T("NocoDB · synced", "NocoDB · 同步"), T("Validated bilingual Q&A merged per language and synced to NocoDB, so every run starts from the same reviewed data.", "驗證後的雙語問答依語言合併並同步到 NocoDB，每次執行都從同一份資料開始。")],
        ["ix", 508, 110, 180, "store", T("Index build", "建立索引"), "Chroma + BM25", T("Vector and BM25 indexes are rebuilt when stale, filtered by model and category.", "索引過期時重建向量與 BM25 索引，並依機型與類別過濾。")],
        ["rt", 508, 220, 180, "key", T("Router", "路由"), T("facts vs. RAG", "事實 vs. RAG"), T("Exact hardware values go to the deterministic fact path; descriptive questions go to hybrid retrieval.", "精確硬體數值走確定性事實路徑；描述性問題走混合檢索。")],
        ["hy", 708, 110, 172, "step", T("Hybrid retrieval", "混合檢索"), "RRF k=60", T("Dense (gate 0.60 EN / 0.52 ZH) and BM25 top-8 each, fused with weighted RRF.", "向量（門檻 EN 0.60／ZH 0.52）與 BM25 各取 top-8，以加權 RRF 融合。")],
        ["lm", 708, 220, 172, "model", "Qwen3.5-4B", T("answers EN + ZH", "產生中英回答"), T("Local generation through LM Studio for every golden question, both languages.", "透過 LM Studio 在本機為每一題黃金問題產生中英回答。")],
        ["jg", 928, 220, 180, "key", T("LLM judge", "LLM 評審"), "STRICT → LENIENT", T("gpt-oss-20b judges every answer strictly first and leniently only on failure; the two levels are reported separately.", "gpt-oss-20b 先嚴格評分，失敗才寬鬆評分；兩個層級分開呈現。")],
        ["sw", 928, 110, 180, "step", T("Model swap", "切換模型"), T("Qwen → judge", "Qwen → 評審"), T("Generator and judge share one local GPU, so the pipeline unloads Qwen3.5-4B and loads gpt-oss-20b between stages.", "生成與評審模型共用同一張本機 GPU，因此流程在兩個階段之間卸載 Qwen3.5-4B、載入 gpt-oss-20b。")],

        ["rp", 1124, 110, 168, "io", T("Reports", "報表"), T("Excel · CSV", "Excel · CSV"), T("Per-question Excel, a summary CSV and an error analysis for every named experiment.", "每個命名實驗都產出逐題 Excel、摘要 CSV 與錯誤分析。")],
        ["ab", 1124, 220, 168, "step", T("Ablations", "消融實驗"), T("router · model", "路由 · 模型"), T("Flags switch off the router, alias expansion or RAG (fact-only), or swap the generator, all on the same golden set.", "可關閉路由、別名擴展或 RAG（只用事實），或替換生成模型，全部使用同一份黃金資料集。")]
      ],
      edges: [["sp", "rq"], ["sd", "rq"], ["rq", "ra", "down"], ["ra", "vd", "down"], ["vd", "gd"], ["gd", "ix"], ["gd", "rt"], ["ix", "hy"], ["rt", "hy"], ["hy", "lm", "down"], ["lm", "sw"], ["sw", "jg", "down"], ["jg", "rp"], ["rp", "ab", "down"]],
      loopFrom: "ab", loopTo: "vd",
      loop: T("Error analysis → fix seeds, prompts or retrieval → rerun the same experiment", "錯誤分析 → 修正題庫、prompt 或檢索 → 重跑同一實驗"),
      decisions: [T("Spec-grounded, judge-validated synthetic Q&A", "依規格生成、經評審驗證的合成問答"), T("One golden set drives RAG and scoring", "同一份黃金資料集驅動 RAG 與評分"), T("Every run is a named, comparable experiment", "每次執行都是可比較的命名實驗")]
    })
  };

  const H = 62; // node height
  const ICON = {
    io: '<path d="M4 7h16M4 12h10M4 17h7"/>', step: '<circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/>',
    key: '<path d="M12 3 3 8l9 5 9-5-9-5Z M3 16l9 5 9-5"/>', store: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
    model: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/>'
  };
  function edgePath(a, b, mode) {
    if (mode === "down") { const x1 = a[1] + a[3] / 2, y1 = a[2] + H, x2 = b[1] + b[3] / 2, y2 = b[2]; return `M${x1},${y1} C${x1},${(y1 + y2) / 2} ${x2},${(y1 + y2) / 2} ${x2},${y2}`; }
    if (mode === "left") { const x1 = a[1], y1 = a[2] + H / 2, x2 = b[1] + b[3], y2 = b[2] + H / 2, mx = (x1 + x2) / 2; return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`; }
    const x1 = a[1] + a[3], y1 = a[2] + H / 2, x2 = b[1], y2 = b[2] + H / 2, mx = (x1 + x2) / 2;
    return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
  }
  function render(el) {
    const key = el.dataset.arch, a = ARCH[key](), byId = Object.fromEntries(a.nodes.map(n => [n[0], n]));
    const selected = el.dataset.selected && byId[el.dataset.selected] ? el.dataset.selected : a.nodes.find(n => n[4] === "key")[0];
    const sel = byId[selected];
    const first = byId[a.loopTo] || a.nodes[0], last = byId[a.loopFrom] || a.nodes[a.nodes.length - 1], loopY = a.height - 22;
    const loop = `M${last[1] + last[3] / 2},${last[2] + H} V${loopY} H${first[1] + first[3] / 2} V${first[2] + H}`;
    const lanes = a.bands
      ? a.bands.map(([x, w, label, sub], i) => `<g class="arch-band" style="--i:${i}"><rect x="${x}" y="16" width="${w}" height="${a.height - 64}" rx="16"/><text class="arch-band-label" x="${x + 16}" y="46">${esc(label)}</text><text class="arch-band-sub" x="${x + 16}" y="66">${esc(sub)}</text></g>`).join("")
      : (a.lanes || []).map(([x, label]) => `<text class="arch-lane" x="${x}" y="40">${esc(label)}</text>`).join("");
    el.innerHTML = `<header class="arch-head"><span class="arch-kicker">${T("SYSTEM ARCHITECTURE", "系統架構")}</span><h4 id="arch-${key}">${esc(a.title)}</h4></header>
      <div class="arch-canvas"><svg viewBox="0 0 ${a.width} ${a.height}" role="group" aria-labelledby="arch-${key}">
        <defs><pattern id="arch-dots-${key}" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" class="arch-dot"/></pattern>
          <marker id="arch-arrow-${key}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="arch-arrowhead"/></marker></defs>
        <rect width="${a.width}" height="${a.height}" fill="url(#arch-dots-${key})"/>
        ${lanes}
        <path class="arch-loop" d="${loop}"/><text class="arch-loop-label" x="${(first[1] + last[1] + last[3]) / 2}" y="${loopY - 8}" text-anchor="middle">↺ ${esc(a.loop)}</text>
        ${a.edges.map(([f, t, mode], i) => { const d = edgePath(byId[f], byId[t], mode); const on = f === selected || t === selected; return `<path class="arch-edge ${on ? "is-on" : ""}" d="${d}" marker-end="url(#arch-arrow-${key})"/><path class="arch-flow" d="${d}" style="--i:${i}"/>`; }).join("")}
        ${a.nodes.map(([id, x, y, w, kind, label, sub]) => `<g class="arch-node is-${kind} ${id === selected ? "is-selected" : ""}" data-node="${id}" tabindex="0" role="button" aria-pressed="${id === selected}" aria-label="${esc(label)}: ${esc(sub)}" transform="translate(${x},${y})">
          <rect width="${w}" height="${H}" rx="12"/><g class="arch-icon" transform="translate(12,${H / 2 - 10}) scale(.84)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICON[kind]}</svg></g>
          <text class="arch-label" x="42" y="${H / 2 - 3}">${esc(label)}</text><text class="arch-sub" x="42" y="${H / 2 + 14}">${esc(sub)}</text></g>`).join("")}
      </svg></div>
      <div class="arch-detail" aria-live="polite"><b>${esc(sel[5])}</b><span>${esc(sel[7])}</span></div>
      <ul class="arch-decisions" aria-label="${T("Key design decisions", "關鍵設計決策")}">${a.decisions.map(d => `<li>${esc(d)}</li>`).join("")}</ul>`;
  }
  const mount = () => document.querySelectorAll("[data-arch]").forEach(render);
  document.addEventListener("click", event => {
    const node = event.target.closest(".arch-node"); if (!node) return;
    const host = node.closest("[data-arch]"); host.dataset.selected = node.dataset.node; render(host);
    host.querySelector(`[data-node="${node.dataset.node}"]`)?.focus({ preventScroll: true });
  });
  document.addEventListener("keydown", event => {
    const node = event.target.closest?.(".arch-node"); if (!node || !["Enter", " "].includes(event.key)) return;
    event.preventDefault(); node.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  document.addEventListener("resume:language", mount);
  mount();
})();
