/* System architecture diagrams for the Enterprise Knowledge Assistant (E-Support) and the
   Laptop Specification Assistant (NB Spec). Reconstructed from the project source code:
   E-Support integration + KG branches, NB Spec raw_spec branch. Parameters are the code defaults. */
(() => {
  const T = (en, zh) => (document.documentElement.lang === "zh-Hant" ? zh : en);
  const esc = v => String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ARCH = {
    knowledge: () => ({
      title: T("Identify the product first, then answer only from that product's data", "先辨識產品，再只用該產品的資料回答"),
      summary: T("Support questions fail most often at product identification, not generation. The pipeline resolves the exact model before any retrieval, then keeps every piece of context labelled with its product.", "產品支援問答最常出錯的地方是產品辨識，而不是生成。這套流程在任何檢索之前先確定型號，之後每段上下文都標記所屬產品。"),
      layers: [
        { name: T("Input", "輸入"), nodes: [
          [T("Web / desktop chat", "Web／桌面聊天"), T("Streaming responses, user sessions", "串流回應、使用者 session")],
          [T("Language detection", "語言偵測"), T("Normalises the target language for translation", "決定翻譯目標語言")]
        ] },
        { name: T("Product identification", "產品辨識"), nodes: [
          [T("FlashText exact match", "FlashText 精確匹配"), T("Full product names + keywords from the product catalogue; added first", "比對產品型錄的完整名稱與關鍵字，優先加入候選")],
          [T("Hybrid search (complement)", "Hybrid 搜尋（補充）"), T("Fuzzy correction that protects model strings → BM25 + embeddings", "保護型號字串的模糊校正 → BM25 + 向量")],
          [T("Rank fusion", "排名融合"), "RRF · k = 60", true],
          [T("Candidates", "候選"), T("Hybrid results appended after exact matches, not re-fused", "Hybrid 結果接在精確匹配之後，不再重新融合")]
        ] },
        { name: T("Product-scoped retrieval", "限定產品的檢索"), nodes: [
          [T("Spec & Q&A store", "規格與問答資料"), T("MongoDB spec JSON and Q&A collections, filtered by product", "MongoDB 規格 JSON 與問答，依產品過濾")],
          [T("Vector retrieval", "向量檢索"), T("JSON flattened → chunks 128 / overlap 20 → top-5", "JSON 攤平 → chunk 128／重疊 20 → top-5"), true],
          [T("Knowledge graph", "知識圖譜"), T("FalkorDB graph per product type (motherboard, GPU, laptop, monitor); Cypher by name + revision → chipset, socket, CPU family, features, OS", "每種產品類型一個 FalkorDB 圖（主機板、GPU、筆電、螢幕）；以型號 + 版本用 Cypher 展開晶片組、插槽、CPU、功能、OS")]
        ] },
        { name: T("Generation", "生成"), nodes: [
          [T("Context assembly", "組合上下文"), T("One labelled block per product, so comparisons never mix specs", "每個產品一段帶標記的上下文，比較時不混用規格")],
          [T("Local LLM", "本機 LLM"), T("LM Studio / OpenAI-compatible endpoint", "LM Studio／OpenAI 相容端點")],
          [T("Answer + translation", "回答 + 翻譯"), T("Streamed back in the user's language", "以使用者語言串流回覆")]
        ] },
        { name: T("Evaluation", "評估"), nodes: [
          [T("Layered metrics", "分層指標"), T("Product identification, retrieval hit and answer accuracy measured separately", "產品辨識、檢索命中、回答正確率分開計算")],
          [T("Ablations", "消融比較"), T("Search strategy, RRF and rerank comparisons; KG evaluation", "搜尋策略、RRF、rerank 比較；知識圖譜評估")]
        ] }
      ],
      decisions: [
        [T("Identify before retrieving", "先辨識再檢索"), T("Scoping retrieval to the confirmed product prevents answers that quote a sibling model's specs.", "把檢索限定在已確認的產品，避免回答引用到相近型號的規格。")],
        [T("Exact match leads, hybrid complements", "精確匹配優先，Hybrid 補充"), T("Model strings need lexical precision; semantic search only fills gaps for loose phrasing and typos.", "型號字串需要字面精確；語意搜尋只補足模糊問法與拼錯。")],
        [T("Fuse by rank, not by score", "以排名融合，不相加分數"), T("RRF avoids calibrating BM25 against cosine scores. Trade-off: score gaps are lost.", "RRF 不需要校準 BM25 與 cosine 的量尺；代價是分數差距資訊會流失。")],
        [T("Revision-aware graph lookups", "依版本查圖譜"), T("Board revisions change supported CPUs and memory; the graph query matches name and revision together.", "主機板版本會改變支援的 CPU 與記憶體；圖譜查詢同時比對型號與版本。")]
      ]
    }),
    laptop: () => ({
      title: T("Exact hardware values come from facts; language models only explain", "精確硬體數值來自事實；語言模型只負責解釋"),
      summary: T("Numbers, versions, counts and SKU options are answered by a deterministic fact path. Retrieval-augmented generation is kept for descriptive questions, and everything is scored by a layered evaluation loop.", "數字、版本、數量與 SKU 選項由確定性的事實路徑回答；描述性問題才交給 RAG，最後由分層評估整體評分。"),
      layers: [
        { name: T("Data pipeline", "資料管線"), nodes: [
          [T("Crawler", "爬蟲"), T("Product and spec pages; HTML cleaning; rate-limited", "產品與規格頁；HTML 清理；限速")],
          [T("Dataset sync", "資料集同步"), T("NocoDB dataset sync before every evaluation run", "每次評估前同步 NocoDB 資料集")],
          [T("Bilingual Q&A + golden specs", "雙語 QA + 黃金規格"), T("Generated EN/ZH Q&A; spec extraction into facts", "產生中英 QA；規格抽取成事實")],
          [T("Fact records", "事實紀錄"), "path · value · relation · flags · source_text", true]
        ] },
        { name: T("Indexes", "索引"), nodes: [
          [T("Fact store", "事實庫"), T("Normalised values per field path", "依欄位路徑正規化的數值")],
          [T("Dense index", "向量索引"), T("Chroma, filtered by model and category", "Chroma，依機型與類別過濾")],
          [T("BM25 index", "BM25 索引"), "k1 1.5 · b 0.75 · EN/ZH tokenisation", true]
        ] },
        { name: T("Understanding & planning", "理解與規劃"), nodes: [
          [T("Query parser", "查詢解析"), T("Field aliases, intent, qualifiers, model", "欄位別名、意圖、限定條件、機型")],
          [T("Multi-turn memory (optional)", "多輪記憶（可選）"), T("Topic, entity, qualifiers and references (“and its version?”); off by default", "主題、實體、限定條件與指代（「那它的版本呢？」）；預設關閉")],
          [T("Retrieval plan", "檢索計畫"), T("Sources ranked authoritative / supporting / verification-only", "來源分為 authoritative／supporting／verification-only")]
        ] },
        { name: T("Answer paths", "回答路徑"), nodes: [
          [T("A · Deterministic facts", "A · 確定性事實"), T("Spec executor: value, limit, count, version, compare, options → ANSWERABLE · NOT_SPECIFIED · AMBIGUOUS · OUT_OF_SCOPE", "規格執行器：值、上限、數量、版本、比較、選配 → ANSWERABLE · NOT_SPECIFIED · AMBIGUOUS · OUT_OF_SCOPE")],
          [T("B · Hybrid RAG", "B · 混合 RAG"), T("Dense top-8 (gate 0.60 EN / 0.52 ZH) + BM25 top-8 → weighted RRF k = 60 → top 6 EN / 4 ZH", "Dense top-8（門檻 EN 0.60／ZH 0.52）+ BM25 top-8 → 加權 RRF k = 60 → EN top 6／ZH top 4"), true],
          [T("Local generation", "本機生成"), T("Qwen3.5-4B via LM Studio; llama.cpp GGUF fallback", "Qwen3.5-4B（LM Studio），llama.cpp GGUF 備援")],
          [T("New-model fallback", "新機型備援"), T("Static spec → runtime spec → live hardware probe (observed hardware only)", "靜態規格 → runtime 規格 → 即時硬體偵測（僅限實機觀察值）")]
        ] },
        { name: T("Evaluation", "評估"), nodes: [
          [T("LLM judge", "LLM 評審"), T("gpt-oss-20b · STRICT first, LENIENT only on failure; levels reported separately", "gpt-oss-20b · 先 STRICT，失敗才 LENIENT；分層呈現")],
          [T("Reports", "報表"), T("Per-question Excel, summary CSV, error analysis", "逐題 Excel、摘要 CSV、錯誤分析")],
          [T("Memory benchmark", "記憶 benchmark"), T("State exact match, qualifier F1, grounded writes", "狀態完全一致、限定條件 F1、grounded 寫入")]
        ] }
      ],
      decisions: [
        [T("Facts are the authority for numbers", "數字以事實為準"), T("Values, versions, counts and SKU options are reproducible from rules and sources; generation never rewrites a fact.", "數值、版本、數量與 SKU 選項可由規則與來源重現；生成內容不得改寫事實。")],
        [T("Limits are not installed hardware", "上限不等於已安裝"), T("A supported maximum or a family of SKUs is never collapsed into one machine's configuration.", "支援上限或同系列多個 SKU，不會被合併成單一機器的配置。")],
        [T("Memory resolves, it does not invent", "記憶只解析，不創造"), T("Conversation memory only rewrites the question; new facts must come from planned sources.", "對話記憶只用來改寫問題；新的事實必須來自計畫中的來源。")],
        [T("Judge strictly, then leniently", "先嚴格、再寬鬆評審"), T("Lenient matches rescue wording differences but are reported separately, so accuracy is not inflated.", "寬鬆判定救回措辭差異，但分開呈現，避免灌水正確率。")]
      ]
    })
  };

  function render(el) {
    const a = ARCH[el.dataset.arch]();
    const id = `arch-${el.dataset.arch}`;
    el.innerHTML = `<header class="arch-head"><span class="arch-kicker">${T("SYSTEM ARCHITECTURE", "系統架構")}</span><h4 id="${id}">${esc(a.title)}</h4><p>${esc(a.summary)}</p></header>
      <ol class="arch-flow" aria-label="${T("Pipeline layers", "流程分層")}">${a.layers.map((layer, i) => `<li class="arch-layer" style="--i:${i}"><div class="arch-layer-head"><span>${String(i + 1).padStart(2, "0")}</span><h5>${esc(layer.name)}</h5></div><ul>${layer.nodes.map(([name, detail, key]) => `<li class="${key ? "is-key" : ""}"><b>${esc(name)}</b><span>${esc(detail)}</span></li>`).join("")}</ul></li>`).join("")}</ol>
      <div class="arch-decisions"><h5>${T("Key design decisions", "關鍵設計決策")}</h5><ul>${a.decisions.map(([t, d], i) => `<li><span>${String(i + 1).padStart(2, "0")}</span><div><b>${esc(t)}</b><p>${esc(d)}</p></div></li>`).join("")}</ul></div>
      <p class="arch-source">${T("Reconstructed from the project source code; parameters are code defaults. Branch features are shown as designed, not as a claim about production rollout.", "依專案原始碼重建；參數為程式預設值。分支上的功能依設計呈現，不代表正式上線狀態。")}</p>`;
    el.setAttribute("aria-labelledby", id);
  }
  const mount = () => document.querySelectorAll("[data-arch]").forEach(render);
  document.addEventListener("resume:language", mount);
  mount();
})();
