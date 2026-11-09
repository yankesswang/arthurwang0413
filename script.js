const translations = {
  en: {
    skip: "Skip to content", menu: "Menu", navExperience: "Experience", navWork: "Work", navSkills: "Skills", navContact: "Contact", navPdf: "Résumé PDF ↗",
    heroEyebrow: "Applied AI Engineer · Technical Lead · Taiwan", heroLead: "I design and ship on-device agents, long-term memory systems, and production retrieval infrastructure.", downloadResume: "Download résumé", emailMe: "Email me ↗", portraitAlt: "Arthur Wang standing outdoors beside a car", portraitRole: "AI Algorithm Deputy Manager / Technical Lead",
    snapshotKicker: "Expertise", snapshotTitle: "Core expertise", capAgentsTitle: "Agent systems", capAgentsText: "Plan-and-Execute workflows, tool use, permissions, memory, recovery, and human approval for dependable agents.", capRetrievalTitle: "Retrieval & memory", capRetrievalText: "Production RAG, GraphRAG, hybrid search, reranking, evidence grounding, and long-term conversational memory.", capProductTitle: "AI product engineering", capProductText: "Local inference, FastAPI, Electron, evaluation infrastructure, packaging, and cross-functional technical leadership.", outcome1: "AI applications led from architecture to delivery", outcome2: "agent routing accuracy across 385 tests", outcome3: "product documents indexed for enterprise retrieval", outcome4: "VRAM target for offline production inference",
    experienceKicker: "Experience", experienceTitle: "Experience", experienceIntro: "Model infrastructure, agent architecture, evaluation, and product delivery.", present: "Present", gigabyteDate: "Jun. 2024 — Present", taroboDate: "Jun. 2023 — Oct. 2023", newTaipei: "New Taipei, Taiwan", taipei: "Taipei, Taiwan", gigabyteRole: "AI Algorithm Deputy Manager / Technical Lead", gigabyte1: "Lead 6+ on-device and enterprise AI products across local agents, hardware Q&A, translation, and meeting intelligence.", gigabyte2: "Architect offline LLM systems with llama.cpp, vLLM, LangChain, and LlamaIndex under a 4GB VRAM constraint.", gigabyte3: "Built retrieval pipelines over 1,000+ documents, reducing FAE lookup time from 5–10 minutes to under 30 seconds.", gigabyte4: "Own agent reliability: planning, tool execution, memory, permissions, durable execution, evaluation, and recovery.", gigabyte5: "Partner with product, engineering, FAE, customer service, and management to ship AI into laptop applications, support systems, and hardware workflows.", taroboRole: "Quantitative Trading Engineer", tarobo1: "Developed deep-learning stock-direction models, improving accuracy by 15% and reducing strategy evaluation from 6 hours to 15 minutes.", tarobo2: "Analyzed market signals, financial indicators, and model outputs to evaluate opportunities and improve strategy iteration.",
    workKicker: "Selected work", workTitle: "Selected projects", workIntro: "Role, architecture, implementation decisions, and measured outcomes.", projectRoleLabel: "Role", gimateType: "On-device agent · Feb. 2026—Present", gimateSummary: "Led a Windows AI assistant from local inference to standalone packaging, with progressive skill discovery and recoverable execution.", gimateRole: "Technical lead · Agent architecture and deployment", gimateDetail1: "Built the Electron frontend and FastAPI backend, integrated local inference, and packaged Qwen3.5-4B into a standalone Windows exe.", gimateDetail2: "Delivered 22 skills and 76 tools for PowerPoint, data analysis, local-file RAG, hardware control, Web Search, Gmail, Notion, and Outlook.", gimateDetail3: "Combined Plan-and-Execute, progressive skill discovery, and deterministic tool execution to reduce unnecessary LLM calls on constrained devices.", gimateDetail4: "Built dynamic replanning, SQLite task persistence, cross-session memory, and human approval; achieved 97% routing accuracy across 385 tests.", gimateProof1: "skills / tools", gimateProof2: "routing accuracy", graceType: "Long-term memory · Oct. 2025—Jul. 2026", graceSummary: "Designed an evidence-first memory system combining hybrid retrieval, hierarchical reranking, and bounded agentic curation.", graceRole: "Research lead · Retrieval and evaluation", graceDetail1: "Separated graph candidate discovery, compressed-record reranking, and provenance-linked raw-dialogue reconstruction so summaries never become final evidence.", graceDetail2: "Combined BM25, dense entity/relation search, two-hop query-conditioned spreading activation, and hierarchical reranking.", graceDetail3: "Instruction-conditioned reranking raised gold-evidence recall from 34.5% to 63.4% (+28.9 points) and answer accuracy by 3.0 points.", graceDetail4: "Built a bounded 10-call GREP / READ / VEC curation loop with trajectory-level provenance validation, additive coverage recovery, and identity fallback.", graceDetail5: "Reached 86.9% LoCoMo and 80.2% LongMemEval, beating AMA by 7.9 / 3.4 points; ablations isolated gains from graph retrieval and raw-dialogue reconstruction.", faeType: "Enterprise RAG · Jan. 2026—Present", faeSummary: "Built hybrid hardware knowledge infrastructure for specifications, compatibility, and troubleshooting across motherboards, GPUs, and laptops.", faeRole: "System architect · Knowledge graph and retrieval", faeDetail1: "Covered specifications, compatibility, and troubleshooting across GIGABYTE motherboards, GPUs, and laptops.", faeDetail2: "Parsed and standardized more than 1,000 product documents into a Neo4j hardware knowledge graph.", faeDetail3: "Deployed BERT query classification and entity linking for product models, categories, and ambiguous hardware references.", faeDetail4: "Combined graph retrieval, BM25, embeddings, and fuzzy matching for exact models, fuzzy descriptions, and natural-language troubleshooting.", faeDetail5: "Reached 95% model identification, 97% Top-3 entity hit, and 92% Q&A accuracy; cut lookup from 5–10 minutes to under 30 seconds and manual search by about 70%.", faeProof1: "Q&A accuracy", faeProof2: "lookup time", faeProof3: "Top-3 entity hit", otherWork: "Additional projects", stockSummary: "An autonomous equity research workflow that turns quantitative screening into evidence-backed trading recommendations.", stockDetail1: "Generates buy, add, hold, or short recommendations with entry ranges, targets, stops, and risk/reward ratios.", stockDetail2: "Cross-analyzes news, earnings, technical charts, DCF valuation, market conditions, and portfolio exposure.", stockDetail3: "Tracks 18 sectors, 60+ financial metrics, and 32 indicators, with research history and real-time Telegram alerts.", alphaSummary: "A source-linked research pipeline that converts high-value technical material into structured knowledge memos.", alphaDetail1: "Monitors 90+ AI/ML, software, security, arXiv, GitHub, and Hugging Face sources; selects the Top 3 stories and 2–3 cross-source trends.", alphaDetail2: "Runs Screening → Deep Research → Cross-Source Synthesis with explicit agreement and conflict analysis.", alphaDetail3: "Uses Whisper and long-context analysis to turn podcasts and YouTube into source- and timestamp-linked Obsidian research memos.",
    publicationKicker: "Research publication", authors: "Heng (Arthur) Wang — first author, X.-N. Chen, P.-Y. Chang, C.-H. Chen, H.-Y. Huang, C. Lin, I-L. Chung.", featured: "Featured Paper · 3 selected", candidate: "Best Paper Award Candidate",
    skillsKicker: "Skills & education", skillsTitle: "Technical skills", skillAgentTitle: "Agents & retrieval", skillAgentText: "Agent harness engineering, MCP, skills, context engineering, long-term memory, Agentic RAG, GraphRAG, hybrid search, reranking, evaluation.", skillModelTitle: "Models & frameworks", skillEngineeringTitle: "Engineering", education: "Education", university: "National Chiao Tung University", degree: "B.S. in Computer Science · 2017–2021", languages: "Languages", languageValue: "Mandarin Chinese · English",
    contactKicker: "Contact", contactTitle: "Contact", footerPdf: "Résumé PDF ↗", backTop: "Back to top ↑"
  },
  "zh-TW": {
    skip: "跳至主要內容", menu: "選單", navExperience: "經歷", navWork: "作品", navSkills: "技能", navContact: "聯絡", navPdf: "下載 PDF 履歷 ↗",
    heroEyebrow: "應用 AI 工程師 · 技術負責人 · 台灣", heroLead: "設計並交付裝置端代理、長期記憶系統與正式環境中的檢索基礎設施。", downloadResume: "下載履歷", emailMe: "寄信給我 ↗", portraitAlt: "Arthur Wang 在戶外的個人照片", portraitRole: "AI 演算法副理／技術負責人",
    snapshotKicker: "專業領域", snapshotTitle: "核心能力", capAgentsTitle: "代理系統", capAgentsText: "規劃與執行、工具使用、權限控管、記憶、失敗復原與人工核准，打造可靠的代理流程。", capRetrievalTitle: "檢索與記憶", capRetrievalText: "正式環境 RAG、GraphRAG、混合檢索、重排序、證據導向回答與長期對話記憶。", capProductTitle: "AI 產品工程", capProductText: "本地推論、FastAPI、Electron、評估基礎設施、應用程式封裝與跨團隊技術領導。", outcome1: "項 AI 應用，從架構一路帶到交付", outcome2: "代理路由準確率，涵蓋 385 組測試", outcome3: "份以上產品文件納入企業檢索系統", outcome4: "離線正式部署的 VRAM 目標",
    experienceKicker: "工作經歷", experienceTitle: "工作經歷", experienceIntro: "模型基礎設施、代理架構、評估與產品交付。", present: "至今", gigabyteDate: "2024.06 — 至今", taroboDate: "2023.06 — 2023.10", newTaipei: "台灣新北", taipei: "台灣台北", gigabyteRole: "AI 演算法副理／技術負責人", gigabyte1: "帶領 6 項以上裝置端與企業 AI 產品，涵蓋本地代理、硬體問答、翻譯與會議智慧。", gigabyte2: "在 4GB VRAM 限制下，以 llama.cpp、vLLM、LangChain 與 LlamaIndex 設計離線 LLM 系統。", gigabyte3: "建立涵蓋 1,000 份以上文件的檢索流程，將 FAE 查找時間從 5–10 分鐘降至 30 秒內。", gigabyte4: "負責代理可靠度：規劃、工具執行、記憶、權限、持久執行、評估與失敗復原。", gigabyte5: "與產品、工程、FAE、客服及管理團隊協作，將 AI 能力交付到筆電應用、內部支援系統與硬體產品流程。", taroboRole: "量化交易工程師", tarobo1: "開發股票方向深度學習模型，將準確率提升 15%，並把策略評估由 6 小時縮短至 15 分鐘。", tarobo2: "分析市場訊號、財務指標與模型輸出，評估交易機會並改善策略迭代。",
    workKicker: "代表作品", workTitle: "代表專案", workIntro: "清楚呈現職責、系統架構、實作選擇與量化成果。", projectRoleLabel: "職責", gimateType: "裝置端代理 · 2026.02—至今", gimateSummary: "主導 Windows AI 助理，從本地推論做到獨立封裝，並具備漸進式技能探索與可復原執行。", gimateRole: "技術負責人 · Agent 架構與部署", gimateDetail1: "建置 Electron 前端與 FastAPI 後端、整合本地推論，並將 Qwen3.5-4B 封裝為獨立 Windows exe。", gimateDetail2: "交付 22 項技能與 76 個工具，涵蓋 PowerPoint、資料分析、本機檔案 RAG、硬體控制、Web Search、Gmail、Notion 與 Outlook。", gimateDetail3: "結合 Plan-and-Execute、漸進式技能探索與確定性工具執行，降低資源受限裝置上的非必要 LLM 呼叫。", gimateDetail4: "建置動態重規劃、SQLite 任務持久化、跨對話記憶與人工核准；在 385 組測試中達到 97% 路由準確率。", gimateProof1: "項技能／工具", gimateProof2: "路由準確率", graceType: "長期記憶 · 2025.10—2026.07", graceSummary: "設計證據優先的記憶系統，結合混合檢索、分層重排序與有界的代理式證據策展。", graceRole: "研究負責人 · 檢索與評估", graceDetail1: "拆分圖候選探索、壓縮紀錄重排序與可追溯原始對話重建，避免摘要成為最終證據。", graceDetail2: "整合 BM25、稠密實體／關係搜尋、兩跳查詢條件式擴散啟動與分層重排序。", graceDetail3: "指令條件式重排序將正確證據召回率由 34.5% 提升至 63.4%（+28.9 點），回答準確率提高 3.0 點。", graceDetail4: "建置最多 10 次呼叫的 GREP / READ / VEC 證據策展迴圈，包含軌跡級來源驗證、覆蓋補全與 identity fallback。", graceDetail5: "LoCoMo 達 86.9%、LongMemEval 達 80.2%，超越 AMA 7.9 / 3.4 點；並以 ablation 分離圖檢索與原始對話重建的增益。", faeType: "企業 RAG · 2026.01—至今", faeSummary: "為主機板、顯示卡與筆電建立混合式硬體知識系統，處理規格、相容性與故障排除。", faeRole: "系統架構師 · 知識圖譜與檢索", faeDetail1: "涵蓋 GIGABYTE 主機板、顯示卡與筆電的規格查詢、相容性檢查與故障排除。", faeDetail2: "解析並標準化超過 1,000 份產品文件，建成 Neo4j 硬體知識圖譜。", faeDetail3: "部署 BERT 查詢分類與實體連結，辨識產品型號、類別及語意模糊的硬體指涉。", faeDetail4: "結合圖檢索、BM25、向量嵌入與模糊比對，支援精確型號、模糊描述與自然語言故障排除。", faeDetail5: "達到 95% 型號辨識、97% Top-3 實體命中與 92% 問答準確率；查找由 5–10 分鐘降至 30 秒內，人工搜尋降低約 70%。", faeProof1: "問答準確率", faeProof2: "查找時間", faeProof3: "Top-3 實體命中", otherWork: "其他專案", stockSummary: "從量化篩選一路產出具證據依據交易建議的自主股票研究流程。", stockDetail1: "產出買進、加碼、持有或放空建議，包含進場區間、目標價、停損與風險報酬比。", stockDetail2: "交叉分析新聞、財報、技術圖表、DCF 估值、市場環境與投資組合曝險。", stockDetail3: "追蹤 18 個產業、60+ 項財務指標與 32 種技術訊號，保留研究歷史並透過 Telegram 即時通知。", alphaSummary: "將高價值技術內容轉換為具來源連結、可持續累積的結構化研究筆記。", alphaDetail1: "監測 90+ 個 AI/ML、軟體、安全、arXiv、GitHub 與 Hugging Face 來源，選出 Top 3 內容與 2–3 個跨來源趨勢。", alphaDetail2: "依序執行 Screening → Deep Research → Cross-Source Synthesis，明確整理不同資料間的一致與衝突。", alphaDetail3: "以 Whisper 與長上下文分析將 Podcast、YouTube 轉為附來源與時間戳的 Obsidian 研究筆記。",
    publicationKicker: "研究論文", authors: "Heng (Arthur) Wang（第一作者）、X.-N. Chen、P.-Y. Chang、C.-H. Chen、H.-Y. Huang、C. Lin、I-L. Chung。", featured: "Featured Paper · 僅選 3 篇", candidate: "最佳論文獎候選",
    skillsKicker: "技能與學歷", skillsTitle: "技術能力", skillAgentTitle: "代理與檢索", skillAgentText: "代理框架工程、MCP、技能系統、上下文工程、長期記憶、Agentic RAG、GraphRAG、混合檢索、重排序與評估。", skillModelTitle: "模型與框架", skillEngineeringTitle: "軟體工程", education: "學歷", university: "國立交通大學", degree: "資訊工程學系學士 · 2017–2021", languages: "語言", languageValue: "中文 · 英文",
    contactKicker: "聯絡方式", contactTitle: "聯絡方式", footerPdf: "下載 PDF 履歷 ↗", backTop: "回到頁首 ↑"
  }
};

const root = document.documentElement;
const progress = document.querySelector(".reading-progress span");
const languageButtons = document.querySelectorAll("[data-lang]");

let motionReady = root.classList.contains("motion-ready");
function enableMotion() {
  if (motionReady) return;
  motionReady = true;
  root.classList.add("motion-ready");
}

window.setTimeout(enableMotion, 1200);

function setLanguage(language) {
  const next = translations[language] ? language : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[next][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = translations[next][element.dataset.i18nAlt];
    if (value) element.setAttribute("alt", value);
  });
  root.lang = next === "zh-TW" ? "zh-Hant" : "en";
  languageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === next)));
  localStorage.setItem("resume-language", next);
}

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
setLanguage(localStorage.getItem("resume-language") || (navigator.language.toLowerCase().startsWith("zh") ? "zh-TW" : "en"));

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -4%" });
  revealItems.forEach((item) => revealObserver.observe(item));

} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

function updateProgress() {
  const scrollable = root.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.transform = `scaleX(${Math.min(Math.max(value, 0), 1)})`;
}
updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });

function attachMagnet(wrapper) {
  if (!window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
  const inner = wrapper.firstElementChild;
  if (!inner) return;

  let active = false;
  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;

  function updateMagnet() {
    frame = 0;
    const bounds = wrapper.getBoundingClientRect();
    const offsetX = pointerX - (bounds.left + bounds.width / 2);
    const offsetY = pointerY - (bounds.top + bounds.height / 2);
    const nearby = Math.abs(offsetX) < bounds.width / 2 + 70 && Math.abs(offsetY) < bounds.height / 2 + 70;

    if (nearby) {
      active = true;
      inner.style.transition = "transform 300ms ease-out";
      inner.style.transform = `translate3d(${offsetX / 8}px, ${offsetY / 8}px, 0)`;
    } else if (active) {
      active = false;
      inner.style.transition = "transform 600ms ease-in-out";
      inner.style.transform = "translate3d(0, 0, 0)";
    }
  }

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!frame) frame = window.requestAnimationFrame(updateMagnet);
  }, { passive: true });
}

document.querySelectorAll("[data-magnet]").forEach(attachMagnet);
