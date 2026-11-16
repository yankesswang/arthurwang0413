const translations = {
  "en": {
    "skip": "Skip to content",
    "menu": "Menu",
    "navExperience": "Experience",
    "navWork": "Work",
    "navSkills": "Skills",
    "navContact": "Contact",
    "navPdf": "Résumé PDF ↗",
    "heroEyebrow": "Applied AI Engineer · Technical Lead · Taiwan",
    "heroLead": "I design and ship on-device agents, long-term memory systems, and production retrieval infrastructure.",
    "downloadResume": "Download résumé",
    "emailMe": "Email me ↗",
    "portraitAlt": "Arthur Wang standing outdoors beside a car",
    "portraitRole": "AI Algorithm Deputy Manager / Technical Lead",
    "snapshotKicker": "Expertise",
    "snapshotTitle": "Core expertise",
    "capAgentsTitle": "Agent systems",
    "capAgentsText": "Plan-and-Execute workflows, tool use, permissions, memory, recovery, and human approval for dependable agents.",
    "capRetrievalTitle": "Retrieval & memory",
    "capRetrievalText": "Production RAG, GraphRAG, hybrid search, reranking, evidence grounding, and long-term conversational memory.",
    "capProductTitle": "AI product engineering",
    "capProductText": "Local inference, FastAPI, Electron, evaluation infrastructure, packaging, and cross-functional technical leadership.",
    "experienceKicker": "Experience",
    "experienceTitle": "Experience",
    "experienceIntro": "Model infrastructure, agent architecture, evaluation, and product delivery.",
    "present": "Present",
    "gigabyteDate": "Jun. 2024 — Present",
    "taroboDate": "Jun. 2023 — Oct. 2023",
    "newTaipei": "New Taipei, Taiwan",
    "taipei": "Taipei, Taiwan",
    "gigabyteRole": "AI Algorithm Deputy Manager / Technical Lead",
    "gigabyte1": "Lead 6+ on-device and enterprise AI products across local agents, hardware Q&A, translation, and meeting intelligence.",
    "gigabyte2": "Architect offline LLM systems with llama.cpp, vLLM, LangChain, and LlamaIndex under a 4GB VRAM constraint.",
    "gigabyte3": "Built retrieval pipelines over 1,000+ documents, reducing FAE lookup time from 5–10 minutes to under 30 seconds.",
    "gigabyte4": "Own agent reliability: planning, tool execution, memory, permissions, durable execution, evaluation, and recovery.",
    "gigabyte5": "Partner with product, engineering, FAE, customer service, and management to ship AI into laptop applications, support systems, and hardware workflows.",
    "taroboRole": "Quantitative Trading Engineer",
    "tarobo1": "Developed deep-learning stock-direction models, improving accuracy by 15% and reducing strategy evaluation from 6 hours to 15 minutes.",
    "tarobo2": "Analyzed market signals, financial indicators, and model outputs to evaluate opportunities and improve strategy iteration.",
    "workKicker": "Selected work",
    "workTitle": "Selected projects",
    "workIntro": "Role, architecture, implementation decisions, and measured outcomes.",
    "projectRoleLabel": "Role",
    "gimateType": "On-device agent · Feb. 2026—Present",
    "gimateSummary": "Led a Windows AI assistant from local inference to standalone packaging, with progressive skill discovery and recoverable execution.",
    "gimateRole": "Technical lead · Agent architecture and deployment",
    "gimateDetail1": "Built the Electron frontend and FastAPI backend, integrated local inference, and packaged Qwen3.5-4B into a standalone Windows exe.",
    "gimateDetail2": "Developed a skill and tool architecture for desktop workflows; prototyped Gmail email summarization, Outlook scheduling, and Notion knowledge retrieval.",
    "gimateDetail3": "Combined Plan-and-Execute, progressive skill discovery, and deterministic tool execution to reduce unnecessary LLM calls on constrained devices.",
    "gimateDetail4": "Built SQLite-backed task persistence, approval gates, bounded repair/replanning, and regression tests for skill routing, multi-step tool sequences, and failure recovery.",
    "gimateProof1": "Execution model",
    "gimateProof2": "Recovery strategy",
    "graceType": "Long-term memory · Oct. 2025—Jul. 2026",
    "graceSummary": "Designed an evidence-first memory system combining hybrid retrieval, hierarchical reranking, and bounded agentic curation.",
    "graceRole": "Research lead · Retrieval and evaluation",
    "graceDetail1": "Separated graph candidate discovery, compressed-record reranking, and provenance-linked raw-dialogue reconstruction so summaries never become final evidence.",
    "graceDetail2": "Combined BM25, dense entity/relation search, two-hop query-conditioned spreading activation, and hierarchical reranking.",
    "graceDetail3": "Instruction-conditioned reranking raised gold-evidence recall from 34.5% to 63.4% (+28.9 points) and answer accuracy by 3.0 points.",
    "graceDetail4": "Built a bounded 10-call GREP / READ / VEC curation loop with trajectory-level provenance validation, additive coverage recovery, and identity fallback.",
    "graceDetail5": "Best reported results reached 86.9% on LoCoMo and 80.2% on LongMemEval across evaluated configurations.",
    "faeType": "Enterprise RAG · Jan. 2026—Present",
    "faeSummary": "Built a company-wide internal chatbot giving product, engineering, FAE, and customer-service teams access to product specifications and technical support knowledge.",
    "faeRole": "System architect · Knowledge graph and retrieval",
    "faeDetail1": "Gave product, engineering, FAE, and customer-service teams a unified interface to product specifications and technical support knowledge.",
    "faeDetail2": "Unified 1,000+ product documents into a structured knowledge base, standardizing product models, categories, and specification fields.",
    "faeDetail3": "Combined exact/fuzzy product matching, BM25, dense embeddings, and graph-based retrieval to resolve ambiguous model references.",
    "faeDetail4": "Evaluated product identification, entity linking, and answer quality separately: approximately 95% model identification, 97% Top-3 entity-linking hit rate, and 92% Q&A accuracy on internal test sets.",
    "faeDetail5": "Reduced FAE specification and compatibility lookup time from 5–10 minutes to under 30 seconds.",
    "faeProof1": "Q&A accuracy",
    "faeProof2": "lookup time",
    "faeProof3": "Top-3 entity hit",
    "otherWork": "Additional projects",
    "stockSummary": "A research platform connecting quantitative screening, financial statements, valuation, and tool-enabled research agents.",
    "stockDetail1": "Combines 60+ financial metrics, SEC/XBRL financial statements, and scenario-based and reverse DCF valuation in a React/FastAPI dashboard.",
    "stockDetail2": "Screens and ranks candidates before agents investigate news, earnings, valuation, and catalysts to generate portfolio-aware research briefings.",
    "stockDetail3": "Adds event-triggered analysis, adversarial review, decision tracking, Telegram alerts, and checks for stale data and unsupported execution claims.",
    "publicationKicker": "Research publication",
    "authors": "Heng (Arthur) Wang — first author, X.-N. Chen, P.-Y. Chang, C.-H. Chen, H.-Y. Huang, C. Lin, I-L. Chung.",
    "skillsKicker": "Skills & education",
    "skillsTitle": "Technical skills",
    "skillAgentTitle": "Agents & retrieval",
    "skillAgentText": "Agentic workflows, RAG/GraphRAG, long-term memory, synthetic data generation, LLM evaluation.",
    "skillModelTitle": "Models & frameworks",
    "skillEngineeringTitle": "Engineering",
    "education": "Education",
    "university": "National Chiao Tung University",
    "degree": "B.S. in Computer Science · 2017–2021",
    "languages": "Languages",
    "languageValue": "Mandarin Chinese · English",
    "contactKicker": "Contact",
    "contactTitle": "Contact",
    "footerPdf": "Résumé PDF ↗",
    "backTop": "Back to top ↑",
    "navResearch": "Research",
    "viewWork": "View selected work",
    "award": "Runner-Up Award",
    "laptopType": "Data pipeline · Retrieval & evaluation",
    "laptopSummary": "Built a specification-to-answer pipeline combining bilingual data generation, hybrid retrieval, structured fact queries, and answer evaluation.",
    "laptopDetail1": "Transformed laptop specifications into structured product data and bilingual Q&A datasets for retrieval and evaluation.",
    "laptopDetail2": "Combined dense/BM25 retrieval, model-specific filtering, and batch answer generation for laptop specification questions.",
    "laptopDetail3": "Implemented LLM-as-a-Judge evaluation with strict/lenient grading, per-question reports, and error analysis.",
    "laptopDetail4": "Separated exact specification values and SKU options into a structured fact-query path, with RAG reserved for explanatory answers.",
    "designLabel": "Key design decision",
    "laptopDecision": "Exact hardware values come from structured facts; explanations use retrieved context."
  },
  "zh-TW": {
    "skip": "跳至主要內容",
    "menu": "選單",
    "navExperience": "經歷",
    "navWork": "作品",
    "navSkills": "技能",
    "navContact": "聯絡",
    "navPdf": "下載 PDF 履歷 ↗",
    "heroEyebrow": "應用 AI 工程師 · 技術負責人 · 台灣",
    "heroLead": "設計並交付裝置端代理、長期記憶系統與正式環境中的檢索基礎設施。",
    "downloadResume": "下載履歷",
    "emailMe": "寄信給我 ↗",
    "portraitAlt": "Arthur Wang 在戶外的個人照片",
    "portraitRole": "AI 演算法副理／技術負責人",
    "snapshotKicker": "專業領域",
    "snapshotTitle": "核心能力",
    "capAgentsTitle": "代理系統",
    "capAgentsText": "規劃與執行、工具使用、權限控管、記憶、失敗復原與人工核准，打造可靠的代理流程。",
    "capRetrievalTitle": "檢索與記憶",
    "capRetrievalText": "正式環境 RAG、GraphRAG、混合檢索、重排序、證據導向回答與長期對話記憶。",
    "capProductTitle": "AI 產品工程",
    "capProductText": "本地推論、FastAPI、Electron、評估基礎設施、應用程式封裝與跨團隊技術領導。",
    "experienceKicker": "工作經歷",
    "experienceTitle": "工作經歷",
    "experienceIntro": "模型基礎設施、代理架構、評估與產品交付。",
    "present": "至今",
    "gigabyteDate": "2024.06 — 至今",
    "taroboDate": "2023.06 — 2023.10",
    "newTaipei": "台灣新北",
    "taipei": "台灣台北",
    "gigabyteRole": "AI 演算法副理／技術負責人",
    "gigabyte1": "帶領 6 項以上裝置端與企業 AI 產品，涵蓋本地代理、硬體問答、翻譯與會議智慧。",
    "gigabyte2": "在 4GB VRAM 限制下，以 llama.cpp、vLLM、LangChain 與 LlamaIndex 設計離線 LLM 系統。",
    "gigabyte3": "建立涵蓋 1,000 份以上文件的檢索流程，將 FAE 查找時間從 5–10 分鐘降至 30 秒內。",
    "gigabyte4": "負責代理可靠度：規劃、工具執行、記憶、權限、持久執行、評估與失敗復原。",
    "gigabyte5": "與產品、工程、FAE、客服及管理團隊協作，將 AI 能力交付到筆電應用、內部支援系統與硬體產品流程。",
    "taroboRole": "量化交易工程師",
    "tarobo1": "開發股票方向深度學習模型，將準確率提升 15%，並把策略評估由 6 小時縮短至 15 分鐘。",
    "tarobo2": "分析市場訊號、財務指標與模型輸出，評估交易機會並改善策略迭代。",
    "workKicker": "代表作品",
    "workTitle": "代表專案",
    "workIntro": "清楚呈現職責、系統架構、實作選擇與量化成果。",
    "projectRoleLabel": "職責",
    "gimateType": "裝置端代理 · 2026.02—至今",
    "gimateSummary": "主導 Windows AI 助理，從本地推論做到獨立封裝，並具備漸進式技能探索與可復原執行。",
    "gimateRole": "技術負責人 · Agent 架構與部署",
    "gimateDetail1": "建置 Electron 前端與 FastAPI 後端、整合本地推論，並將 Qwen3.5-4B 封裝為獨立 Windows exe。",
    "gimateDetail2": "建立桌面工作流程的技能與工具架構，並製作 Gmail 郵件摘要、Outlook 排程與 Notion 知識檢索原型。",
    "gimateDetail3": "結合 Plan-and-Execute、漸進式技能探索與確定性工具執行，降低資源受限裝置上的非必要 LLM 呼叫。",
    "gimateDetail4": "建置 SQLite 任務持久化、操作核准、有界修復與重規劃，以及技能路由、多步驟工具執行與失敗恢復的回歸測試。",
    "gimateProof1": "執行模式",
    "gimateProof2": "恢復策略",
    "graceType": "長期記憶 · 2025.10—2026.07",
    "graceSummary": "設計證據優先的記憶系統，結合混合檢索、分層重排序與有界的代理式證據策展。",
    "graceRole": "研究負責人 · 檢索與評估",
    "graceDetail1": "拆分圖候選探索、壓縮紀錄重排序與可追溯原始對話重建，避免摘要成為最終證據。",
    "graceDetail2": "整合 BM25、稠密實體／關係搜尋、兩跳查詢條件式擴散啟動與分層重排序。",
    "graceDetail3": "指令條件式重排序將正確證據召回率由 34.5% 提升至 63.4%（+28.9 點），回答準確率提高 3.0 點。",
    "graceDetail4": "建置最多 10 次呼叫的 GREP / READ / VEC 證據策展迴圈，包含軌跡級來源驗證、覆蓋補全與 identity fallback。",
    "graceDetail5": "不同評估設定下，最佳報告結果在 LoCoMo 達 86.9%、LongMemEval 達 80.2%。",
    "faeType": "企業 RAG · 2026.01—至今",
    "faeSummary": "建立全公司內部聊天助理，讓產品、工程、FAE 與客服團隊透過統一介面查詢產品規格與技術支援知識。",
    "faeRole": "系統架構師 · 知識圖譜與檢索",
    "faeDetail1": "為產品、工程、FAE 與客服團隊提供統一的產品規格與技術支援知識查詢介面。",
    "faeDetail2": "整合 1,000 份以上產品文件，標準化產品型號、類別與規格欄位，建立結構化知識庫。",
    "faeDetail3": "整合精確／模糊產品匹配、BM25、向量嵌入與圖檢索，處理語意模糊的型號指涉。",
    "faeDetail4": "分別評估產品辨識、實體連結與回答品質；內部測試集約達 95% 型號辨識、97% Top-3 實體命中與 92% 問答準確率。",
    "faeDetail5": "將 FAE 規格與相容性查找時間從 5–10 分鐘縮短至 30 秒內。",
    "faeProof1": "問答準確率",
    "faeProof2": "查找時間",
    "faeProof3": "Top-3 實體命中",
    "otherWork": "其他專案",
    "stockSummary": "串接量化篩選、財務報表、估值與工具型研究代理的投資研究平台。",
    "stockDetail1": "以 React／FastAPI 儀表板整合 60+ 財務指標、SEC／XBRL 財報，以及情境式與反向 DCF 估值。",
    "stockDetail2": "先篩選與排序候選，再由代理研究新聞、財報、估值與催化事件，產出考量投資組合的研究摘要。",
    "stockDetail3": "加入事件觸發分析、對抗式審查、決策紀錄、Telegram 通知，以及資料時效與無依據執行聲明的檢查。",
    "publicationKicker": "研究論文",
    "authors": "Heng (Arthur) Wang（第一作者）、X.-N. Chen、P.-Y. Chang、C.-H. Chen、H.-Y. Huang、C. Lin、I-L. Chung。",
    "skillsKicker": "技能與學歷",
    "skillsTitle": "技術能力",
    "skillAgentTitle": "代理與檢索",
    "skillAgentText": "代理工作流程、RAG／GraphRAG、長期記憶、合成資料生成與 LLM 評估。",
    "skillModelTitle": "模型與框架",
    "skillEngineeringTitle": "軟體工程",
    "education": "學歷",
    "university": "國立交通大學",
    "degree": "資訊工程學系學士 · 2017–2021",
    "languages": "語言",
    "languageValue": "中文 · 英文",
    "contactKicker": "聯絡方式",
    "contactTitle": "聯絡方式",
    "footerPdf": "下載 PDF 履歷 ↗",
    "backTop": "回到頁首 ↑",
    "navResearch": "研究",
    "viewWork": "查看代表作品",
    "award": "Runner-Up Award",
    "laptopType": "資料流程 · 檢索與評估",
    "laptopSummary": "建立從筆電規格到回答的完整流程，整合雙語資料生成、混合檢索、結構化事實查詢與回答評估。",
    "laptopDetail1": "將筆電規格轉為結構化產品資料與雙語問答資料集，供檢索及評估使用。",
    "laptopDetail2": "整合 Dense／BM25 混合檢索、機型篩選與批次回答生成，處理筆電規格問題。",
    "laptopDetail3": "建立 LLM-as-a-Judge 評估，提供嚴格／寬鬆評分、逐題報告與錯誤分析。",
    "laptopDetail4": "以結構化事實查詢處理精確規格值與 SKU 選項，並以 RAG 處理解釋性回答。",
    "designLabel": "關鍵設計決策",
    "laptopDecision": "精確硬體數值由結構化事實提供；解釋性回答使用檢索內容。"
  }
};

const root = document.documentElement;
const progress = document.querySelector(".reading-progress span");
const languageButtons = document.querySelectorAll("[data-lang]");



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
  try { localStorage.setItem("resume-language", next); } catch { /* Storage may be unavailable. */ }
}

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
let savedLanguage;
try { savedLanguage = localStorage.getItem("resume-language"); } catch { /* Use browser language. */ }
setLanguage(savedLanguage || (navigator.language.toLowerCase().startsWith("zh") ? "zh-TW" : "en"));

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
  root.classList.add("motion-ready");

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
