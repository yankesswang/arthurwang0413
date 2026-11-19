/* System architecture diagrams for E-Support and NB Spec, drawn as interactive SVG flows.
   Reconstructed from the project source (E-Support integration + KG branches, NB Spec raw_spec);
   parameters are the code defaults. Short labels in the diagram; one-sentence detail on selection. */
(() => {
  const T = (en, zh) => (document.documentElement.lang === "zh-Hant" ? zh : en);
  const esc = v => String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // node: [id, x, y, w, kind, label, sub, detail]   kind: io | step | key | store | model
  const ARCH = {
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
      title: T("Numbers come from facts. Language models only explain.", "數字來自事實，語言模型只負責解釋。"),
      width: 1320, height: 430,
      lanes: [[630, T("FACT LANE · exact values", "事實路徑 · 精確數值")], [630, T("RAG LANE · explanations", "RAG 路徑 · 說明")]],
      laneY: [52, 346],
      nodes: [
        ["q", 20, 170, 130, "io", T("Question", "問題"), T("EN · ZH", "中 · 英"), T("Bilingual questions about a specific notebook model.", "針對特定筆電機型的中英文問題。")],
        ["pl", 185, 170, 210, "step", T("Parser + memory", "解析 + 記憶"), T("intent · model · refs", "意圖 · 機型 · 指代"), T("Resolves field aliases, qualifiers and follow-ups such as “and its version?”. Memory rewrites the question but never adds facts.", "解析欄位別名、限定條件與「那它的版本呢？」這類追問；記憶只改寫問題，不會新增事實。")],
        ["rt", 430, 170, 165, "key", T("Router", "路由"), T("authority plan", "來源權威計畫"), T("Sends exact hardware questions to the fact lane and descriptive ones to RAG, ranking sources as authoritative, supporting or verification-only.", "精確硬體問題走事實路徑，描述性問題走 RAG；來源分為 authoritative／supporting／verification-only。")],
        ["fs", 630, 80, 210, "store", T("Fact store", "事實庫"), T("path · value · source", "欄位 · 值 · 來源"), T("Normalised spec facts built by the data pipeline: crawler → NocoDB → bilingual Q&A → golden specs.", "由資料管線建立的正規化規格事實：爬蟲 → NocoDB → 雙語 QA → 黃金規格。")],
        ["ex", 880, 80, 190, "key", T("Spec executor", "規格執行器"), T("4 answer states", "4 種回答狀態"), T("Answers values, limits, counts, versions and comparisons as ANSWERABLE, NOT_SPECIFIED, AMBIGUOUS or OUT_OF_SCOPE.", "回答數值、上限、數量、版本與比較，結果為 ANSWERABLE、NOT_SPECIFIED、AMBIGUOUS 或 OUT_OF_SCOPE。")],
        ["rg", 630, 260, 210, "store", T("Dense + BM25", "向量 + BM25"), "RRF k=60 · top 6/4", T("Chroma (gate 0.60 EN / 0.52 ZH) and BM25 top-8 each, fused with weighted RRF.", "Chroma（門檻 EN 0.60／ZH 0.52）與 BM25 各取 top-8，以加權 RRF 融合。")],
        ["lm", 880, 260, 190, "model", "Qwen3.5-4B", T("LM Studio · local", "LM Studio · 本機"), T("Local generation through LM Studio, with a llama.cpp GGUF fallback.", "透過 LM Studio 本機生成，llama.cpp GGUF 作為備援。")],
        ["ans", 1110, 170, 190, "io", T("Answer", "回答"), T("value + explanation", "數值 + 說明"), T("Exact values from facts, explanations from RAG. Generated text never overrides a fact.", "數值來自事實、說明來自 RAG；生成文字不會覆寫事實。")]
      ],
      edges: [["q", "pl"], ["pl", "rt"], ["rt", "fs"], ["rt", "rg"], ["fs", "ex"], ["rg", "lm"], ["ex", "ans"], ["lm", "ans"]],
      loop: T("LLM judge · STRICT → LENIENT, reported separately", "LLM 評審 · 先 STRICT 再 LENIENT，分開呈現"),
      decisions: [T("Facts are the authority for numbers", "數字以事實為準"), T("Limits ≠ installed hardware", "上限 ≠ 已安裝配置"), T("Strict, then lenient judging", "先嚴格、再寬鬆評審")]
    })
  };

  const H = 62; // node height
  const ICON = {
    io: '<path d="M4 7h16M4 12h10M4 17h7"/>', step: '<circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/>',
    key: '<path d="M12 3 3 8l9 5 9-5-9-5Z M3 16l9 5 9-5"/>', store: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
    model: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/>'
  };
  function edgePath(a, b) {
    const x1 = a[1] + a[3], y1 = a[2] + H / 2, x2 = b[1], y2 = b[2] + H / 2, mx = (x1 + x2) / 2;
    return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
  }
  function render(el) {
    const key = el.dataset.arch, a = ARCH[key](), byId = Object.fromEntries(a.nodes.map(n => [n[0], n]));
    const selected = el.dataset.selected && byId[el.dataset.selected] ? el.dataset.selected : a.nodes.find(n => n[4] === "key")[0];
    const sel = byId[selected];
    const first = a.nodes[0], last = a.nodes[a.nodes.length - 1], loopY = a.height - 22;
    const loop = `M${last[1] + last[3] / 2},${last[2] + H} V${loopY} H${first[1] + first[3] / 2} V${first[2] + H}`;
    const lanes = key === "laptop"
      ? a.lanes.map(([x, label], i) => `<text class="arch-lane" x="${x}" y="${a.laneY[i]}">${esc(label)}</text>`).join("")
      : a.lanes.map(([x, label]) => `<text class="arch-lane" x="${x}" y="40">${esc(label)}</text>`).join("");
    el.innerHTML = `<header class="arch-head"><span class="arch-kicker">${T("SYSTEM ARCHITECTURE", "系統架構")}</span><h4 id="arch-${key}">${esc(a.title)}</h4></header>
      <div class="arch-canvas"><svg viewBox="0 0 ${a.width} ${a.height}" role="group" aria-labelledby="arch-${key}">
        <defs><pattern id="arch-dots-${key}" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" class="arch-dot"/></pattern>
          <marker id="arch-arrow-${key}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="arch-arrowhead"/></marker></defs>
        <rect width="${a.width}" height="${a.height}" fill="url(#arch-dots-${key})"/>
        ${lanes}
        <path class="arch-loop" d="${loop}"/><text class="arch-loop-label" x="${(first[1] + last[1] + last[3]) / 2}" y="${loopY - 8}" text-anchor="middle">↺ ${esc(a.loop)}</text>
        ${a.edges.map(([f, t], i) => { const d = edgePath(byId[f], byId[t]); const on = f === selected || t === selected; return `<path class="arch-edge ${on ? "is-on" : ""}" d="${d}" marker-end="url(#arch-arrow-${key})"/><path class="arch-flow" d="${d}" style="--i:${i}"/>`; }).join("")}
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
