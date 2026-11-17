const translations = {
  "en": {
    "skip": "Skip to content",
    "heroLabel": "Engineering intelligence.",
    "impactLabel": "Selected outcomes",
    "impactIntro": "From research to real-world systems.",
    "impactProducts": "AI products led",
    "impactDocs": "Documents connected",
    "impactLookup": "FAE lookup time",
    "projectDetails": "Explore implementation",
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
    "heroLabel": "讓智慧，成為實際。",
    "impactLabel": "精選成果",
    "impactIntro": "從研究探索，到實際落地。",
    "impactProducts": "主導 AI 產品",
    "impactDocs": "串聯產品文件",
    "impactLookup": "FAE 查詢時間",
    "projectDetails": "探索實作細節",

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
  document.dispatchEvent(new CustomEvent("resume:language", { detail: next }));
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

// Original interaction design: a small portfolio workspace, with no backend or runtime dependencies.
const labCopy = {
  en: {
    labLocal: "Portfolio guide", labViews: "Portfolio views", labAgent: "Explore work", labProjects: "All projects", labTerminal: "Terminal",
    labAvatar: "Interactive agent. Drag and release, or use arrow keys. Escape resets.",
    labReady: "Ready to explore", labDragging: "A little outside the box", labReturning: "Finding my balance",
    labHint: "Drag a little. Let go. Watch it return.", labReset: "Reset ↺",
    labChooseProject: "Choose a project", labReadCase: "Read the project ↗",
    labTerminalHint: "Explore this résumé with local commands. Try help, projects, skills, paper, or contact.",
    labCommandOutput: "Command output", labCommandLabel: "Portfolio command", labRun: "Run ↵",
    labTerminalNote: "Local navigation only · no AI requests or shell execution",
    labFooter: "A little play. A lot of engineering.", labArchitecture: "Architecture overview",
    labMapAgent: "Task → Plan → Validated tools → Result",
    labMapMemory: "Query → Graph candidates → Reranking → Raw evidence",
    labMapKnowledge: "Product query → Model matching → Hybrid retrieval → Answer",
    labMapData: "Specifications → Structured facts / RAG → Answer → Evaluation",
    labUnknown: "Unknown command. Type help to see the available commands.",
    labHelp: "help · projects · skills · paper · contact · clear. Use ↑ / ↓ for command history.",
    labSkills: "Agentic workflows · RAG / GraphRAG · Long-term memory · LLM evaluation · Python / FastAPI / Electron",
    labPaper: "GRACE-Mem — first-author research · EMNLP 2026 AKBC · Runner-Up Award",
    labPaperLink: "Read publication details ↗", labSkillsLink: "View technical skills ↗"
  },
  "zh-TW": {
    labLocal: "在你的瀏覽器中運作", labViews: "工作台檢視", labAgent: "互動角色", labProjects: "作品",
    labAvatar: "互動代理角色。拖拉後放開，或用方向鍵移動；Escape 重設。",
    labReady: "準備好一起探索", labDragging: "試著跳出框架", labReturning: "正在找回平衡",
    labHint: "拉一下，放開，看它彈回原位。", labReset: "重設 ↺",
    labChooseProject: "選擇專案", labReadCase: "閱讀專案 ↗",
    labTerminalHint: "用本機指令探索履歷。試試 help、projects、skills、paper 或 contact。",
    labCommandOutput: "指令輸出", labCommandLabel: "履歷導覽指令", labRun: "執行 ↵",
    labTerminalNote: "僅供本機導覽 · 不呼叫 AI、不執行系統指令",
    labFooter: "一點玩心，更多工程實作。", labArchitecture: "架構概覽",
    labMapAgent: "任務 → 規劃 → 驗證工具參數 → 執行結果",
    labMapMemory: "問題 → 圖候選探索 → 重排序 → 原始證據",
    labMapKnowledge: "產品問題 → 型號匹配 → 混合檢索 → 回答",
    labMapData: "規格資料 → 結構化事實／RAG → 回答 → 評估",
    labUnknown: "找不到這個指令。輸入 help 查看可用指令。",
    labHelp: "help · projects · skills · paper · contact · clear。可用 ↑ / ↓ 瀏覽指令紀錄。",
    labSkills: "代理工作流程 · RAG／GraphRAG · 長期記憶 · LLM 評估 · Python／FastAPI／Electron",
    labPaper: "GRACE-Mem — 第一作者研究 · EMNLP 2026 AKBC · Runner-Up Award",
    labPaperLink: "閱讀論文資訊 ↗", labSkillsLink: "查看技術能力 ↗"
  }
};
Object.keys(labCopy).forEach((lang) => Object.assign(translations[lang], labCopy[lang]));

const workspace = document.querySelector(".agent-workspace");
const projectSources = {
  gimate: { id: "gimate-agent", name: "GiMATE Agent", summary: "gimateSummary", index: "01" },
  grace: { id: "grace-mem", name: "GRACE-Mem", summary: "graceSummary", index: "02" },
  enterprise: { id: "enterprise-knowledge-assistant", name: "Enterprise Knowledge Assistant", summary: "faeSummary", index: "03" },
  laptop: { id: "laptop-specification-assistant", name: "Laptop Specification Assistant", summary: "laptopSummary", index: "04" }
};
let selectedLabProject = "gimate";
const labLanguage = () => root.lang === "zh-Hant" ? "zh-TW" : "en";
const labText = (key) => translations[labLanguage()][key];

function showLabView(view, focusInput = false) {
  if (!["agent", "projects", "terminal"].includes(view)) return;
  workspace.querySelectorAll("[data-view]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.view === view));
  });
  workspace.querySelectorAll(".workspace-view").forEach((panel) => {
    panel.hidden = panel.id !== `view-${view}`;
  });
  if (focusInput && view === "terminal") document.querySelector("#terminal-command").focus();
}

workspace.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => showLabView(button.dataset.view, true));
});

function selectLabProject(key) {
  const project = projectSources[key];
  if (!project) return;
  selectedLabProject = key;
  workspace.querySelectorAll("[data-project]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.project === key));
  });
  workspace.querySelector(".lab-file-label").textContent = `README / ${project.index}`;
  workspace.querySelector(".lab-project-name").textContent = project.name;
  workspace.querySelector(".lab-project-description").textContent = labText(project.summary);
  workspace.querySelector(".lab-case-link").href = `#${project.id}`;
}
workspace.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => selectLabProject(button.dataset.project));
});

const stage = workspace.querySelector(".agent-stage");
const avatar = workspace.querySelector(".elastic-agent");
const agentStatus = workspace.querySelector("#agent-status");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let agentStatusKey = "labReady";
let agentX = 0, agentY = 0, velocityX = 0, velocityY = 0;
let pointerStart = null;
let agentFrame = 0;
let lastFrame = 0;
const limit = (value, max) => Math.max(-max, Math.min(max, value));

function setAgentStatus(key) {
  agentStatusKey = key;
  agentStatus.textContent = labText(key);
}
function paintAgent() {
  avatar.style.setProperty("--agent-x", `${agentX}px`);
  avatar.style.setProperty("--agent-y", `${agentY}px`);
  avatar.style.setProperty("--agent-rotation", `${agentX * .12}deg`);
  avatar.style.setProperty("--agent-stretch", String(1 + Math.abs(agentX) / 350));
  avatar.style.setProperty("--agent-squash", String(1 - Math.abs(agentX) / 650));
}
function returnAgent(timestamp) {
  const dt = Math.min((timestamp - (lastFrame || timestamp)) / 16.67, 2) || 1;
  lastFrame = timestamp;
  const damping = Math.pow(.76, dt);
  velocityX = (velocityX - agentX * .11 * dt) * damping;
  velocityY = (velocityY - agentY * .11 * dt) * damping;
  agentX += velocityX * dt;
  agentY += velocityY * dt;
  paintAgent();
  if (Math.abs(agentX) + Math.abs(agentY) + Math.abs(velocityX) + Math.abs(velocityY) > .12) {
    agentFrame = window.requestAnimationFrame(returnAgent);
  } else {
    agentFrame = 0;
    lastFrame = 0;
    agentX = agentY = velocityX = velocityY = 0;
    paintAgent();
    setAgentStatus("labReady");
  }
}
function releaseAgent() {
  if (pointerStart && avatar.hasPointerCapture(pointerStart.id)) avatar.releasePointerCapture(pointerStart.id);
  pointerStart = null;
  avatar.classList.remove("is-grabbed");
  if (agentFrame) window.cancelAnimationFrame(agentFrame);
  agentFrame = 0;
  lastFrame = 0;
  if (reducedMotion.matches) {
    agentX = agentY = velocityX = velocityY = 0;
    paintAgent();
    setAgentStatus("labReady");
  } else {
    setAgentStatus("labReturning");
    agentFrame = window.requestAnimationFrame(returnAgent);
  }
}
avatar.addEventListener("pointerdown", (event) => {
  if (!event.isPrimary || event.button !== 0) return;
  if (agentFrame) window.cancelAnimationFrame(agentFrame);
  agentFrame = 0;
  velocityX = velocityY = 0;
  pointerStart = { x: event.clientX - agentX, y: event.clientY - agentY, id: event.pointerId };
  avatar.setPointerCapture(event.pointerId);
  avatar.classList.add("is-grabbed");
  setAgentStatus("labDragging");
});
avatar.addEventListener("pointermove", (event) => {
  if (!pointerStart || pointerStart.id !== event.pointerId) return;
  agentX = limit((event.clientX - pointerStart.x) * .65, 48);
  agentY = limit((event.clientY - pointerStart.y) * .5, 32);
  paintAgent();
});
["pointerup", "pointercancel", "lostpointercapture"].forEach((name) => avatar.addEventListener(name, () => { if (pointerStart) releaseAgent(); }));
avatar.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { event.preventDefault(); releaseAgent(); return; }
  const offsets = { ArrowLeft: [-22, 0], ArrowRight: [22, 0], ArrowUp: [0, -22], ArrowDown: [0, 22] };
  if (!offsets[event.key]) return;
  event.preventDefault();
  if (agentFrame) window.cancelAnimationFrame(agentFrame);
  agentX = offsets[event.key][0]; agentY = offsets[event.key][1];
  velocityX = velocityY = 0;
  paintAgent();
  releaseAgent();
});
avatar.addEventListener("blur", () => { if (pointerStart) releaseAgent(); });
workspace.querySelector(".lab-reset").addEventListener("click", releaseAgent);
stage.addEventListener("pointermove", (event) => {
  if (pointerStart || reducedMotion.matches) return;
  const box = stage.getBoundingClientRect();
  stage.style.setProperty("--eye-x", `${limit((event.clientX - box.left - box.width / 2) / 35, 4)}px`);
  stage.style.setProperty("--eye-y", `${limit((event.clientY - box.top - box.height / 2) / 35, 3)}px`);
});
stage.addEventListener("pointerleave", () => { stage.style.setProperty("--eye-x", "0px"); stage.style.setProperty("--eye-y", "0px"); });
window.addEventListener("blur", () => { if (pointerStart) releaseAgent(); });
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) return;
  if (pointerStart) releaseAgent();
  if (agentFrame) window.cancelAnimationFrame(agentFrame);
  agentFrame = 0; lastFrame = 0;
  agentX = agentY = velocityX = velocityY = 0;
  paintAgent(); setAgentStatus("labReady");
});
if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", releaseAgent);

function refreshLabLanguage() {
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => element.setAttribute("aria-label", labText(element.dataset.i18nAria)));
  selectLabProject(selectedLabProject);
  setAgentStatus(agentStatusKey);
}
document.addEventListener("resume:language", refreshLabLanguage);
workspace.classList.add("lab-enabled");
// Apply newly registered translations after the base résumé has initialized.
setLanguage(labLanguage());
refreshLabLanguage();

// A small, inspectable local workflow over the published portfolio. No generated claims.
const sessionCopy = {
  en: {
    heroEyebrow: "Agent systems · Retrieval & memory · Taiwan",
    heroLead: "I build agents that plan, use tools, and recover — with retrieval and memory grounded in traceable evidence.",
    labAgent: "Agent session", labLocal: "Local execution", labFooter: "Plan. Execute. Verify.",
    askPortfolio: "Explore with my agent", sessionCompanion: "Meet the companion ↗",
    sessionTitle: "Give me a goal.", sessionExamples: "Example tasks", sessionAgents: "Agent engineering", sessionMemory: "Retrieval & memory", sessionEvaluation: "Data & evaluation",
    sessionQueryLabel: "What would you like to know about Arthur's work?", sessionRun: "Run ↗", sessionStop: "Stop",
    sessionProgress: "Task progress", sessionPlan: "Plan", sessionSearch: "Search", sessionRead: "Read", sessionBrief: "Brief",
    sessionPlanLabel: "Task plan", sessionPlanText: "Match the goal to project capabilities, read the relevant descriptions, and return linked evidence.",
    sessionTrace: "Tool activity", sessionEvidence: "Source-linked evidence", sessionWelcome: "Choose a goal to explore my work.",
    sessionDisclosure: "Runs locally · keyword matching and excerpts from this résumé",
    sessionReady: "Ready", sessionRunning: "Running", sessionComplete: "Complete", sessionStopped: "Stopped", sessionNoMatch: "Needs a clearer goal", sessionError: "Could not finish",
    sessionResults: "Matching projects", sessionNoResultTitle: "No matching evidence found.",
    sessionNoResult: "Try a focused topic: agent execution, retrieval, memory, or evaluation. All projects are available below.",
    sessionPending: "Reading the project evidence…", sessionStoppedText: "Task stopped. Edit the goal or choose an example to start again.",
    sessionErrorText: "This task could not finish. Try again, or read the projects below.",
    sessionSources: "sources", sessionCalls: "calls", sessionReadSource: "Read source ↗", sessionMatches: "matches",
    sessionGoalAgents: "Find evidence of agent planning and tool execution",
    sessionGoalMemory: "Show retrieval and conversational memory projects",
    sessionGoalEvaluation: "Find data pipelines and evaluation experience",
    sessionWorking: "Working through your goal…"
  },
  "zh-TW": {
    heroEyebrow: "Agent 系統 · 檢索與記憶 · 台灣",
    heroLead: "打造能規劃、使用工具與恢復執行的 Agent，讓檢索與記憶建立在可追溯的證據上。",
    labAgent: "Agent 任務", labLocal: "本機執行", labFooter: "規劃。執行。驗證。",
    askPortfolio: "讓 Agent 帶你探索", sessionCompanion: "認識互動角色 ↗",
    sessionTitle: "交給我一個目標。", sessionExamples: "任務範例", sessionAgents: "Agent 工程", sessionMemory: "檢索與記憶", sessionEvaluation: "資料與評估",
    sessionQueryLabel: "你想了解 Arthur 的哪些專案能力？", sessionRun: "執行 ↗", sessionStop: "中止",
    sessionProgress: "任務進度", sessionPlan: "規劃", sessionSearch: "搜尋", sessionRead: "讀取", sessionBrief: "整理",
    sessionPlanLabel: "執行計畫", sessionPlanText: "比對目標與專案能力，讀取相關介紹，再整理附來源的證據。",
    sessionTrace: "工具執行紀錄", sessionEvidence: "附來源的專案證據", sessionWelcome: "選擇目標，探索我的工作。",
    sessionDisclosure: "在本機執行 · 以關鍵字比對與履歷原文摘錄呈現",
    sessionReady: "待命", sessionRunning: "執行中", sessionComplete: "已完成", sessionStopped: "已中止", sessionNoMatch: "需要更明確的目標", sessionError: "未能完成",
    sessionResults: "符合目標的專案", sessionNoResultTitle: "找不到對應的專案證據。",
    sessionNoResult: "試試更聚焦的主題：Agent 執行、檢索、記憶或評估。也可以直接閱讀下方所有作品。",
    sessionPending: "正在讀取專案證據…", sessionStoppedText: "任務已中止。可以修改目標，或選擇範例重新開始。",
    sessionErrorText: "這次任務未能完成。請再試一次，或直接閱讀下方專案。",
    sessionSources: "個來源", sessionCalls: "次呼叫", sessionReadSource: "閱讀原始介紹 ↗", sessionMatches: "筆結果",
    sessionGoalAgents: "找出 Agent 規劃與工具執行的專案證據",
    sessionGoalMemory: "了解檢索與對話記憶專案",
    sessionGoalEvaluation: "查看資料流程與評估經驗",
    sessionWorking: "正在處理你的目標…"
  }
};
Object.keys(sessionCopy).forEach((lang) => Object.assign(translations[lang], sessionCopy[lang]));

const portfolioSession = document.querySelector("#portfolio-agent-session");
const sessionForm = portfolioSession.querySelector(".session-form");
const sessionInput = portfolioSession.querySelector("#session-query");
const sessionStop = portfolioSession.querySelector(".session-stop");
const sessionState = portfolioSession.querySelector(".session-state");
const sessionEvidence = portfolioSession.querySelector(".session-evidence-list");
const sessionLog = portfolioSession.querySelector(".session-tool-log");
// Visitor-facing project discovery: explain the destination, not internal execution steps.
Object.assign(translations.en, {
  askPortfolio: "Find a relevant project",
  labLocal: "Portfolio guide", labAgent: "Explore work", labProjects: "All projects", labTerminal: "Terminal",
  guideEyebrow: "A CLOSER LOOK AT MY WORK", sessionTitle: "What are you curious about?",
  guideIntro: "Pick a topic to see relevant projects and what I built.",
  sessionExamples: "Explore work by topic", sessionAgents: "AI agents that get things done",
  guideAgentsDesc: "Local models, desktop tools, and reliable execution.",
  sessionMemory: "Finding the right knowledge", guideMemoryDesc: "Search, conversational memory, and traceable answers.",
  sessionEvaluation: "Making AI answers dependable", guideEvaluationDesc: "Structured data, test sets, and answer-quality checks.",
  guideCustom: "Have a specific skill in mind?", sessionQueryLabel: "Search skills or project keywords",
  sessionRun: "Search ↗", sessionReady: "Explore", sessionRunning: "Searching", sessionComplete: "Found",
  sessionWelcome: "Choose a topic above to discover a project.", sessionEvidence: "RELATED PROJECTS",
  sessionResults: "Projects to explore", sessionTrace: "How these results were found",
  sessionDisclosure: "Matches topics to this résumé. Every result links to the full project.",
  labFooter: "Explore the work. See the details."
});
Object.assign(translations["zh-TW"], {
  askPortfolio: "找適合你的專案",
  labLocal: "作品導覽", labAgent: "依興趣探索", labProjects: "所有專案", labTerminal: "指令模式",
  guideEyebrow: "從你感興趣的主題開始", sessionTitle: "你想了解哪一面？",
  guideIntro: "選一個主題，看看我做過的專案與實作內容。",
  sessionExamples: "依主題探索作品", sessionAgents: "能實際執行任務的 AI Agent",
  guideAgentsDesc: "本機模型、桌面工具，以及可靠的任務執行。",
  sessionMemory: "找到知識，也記住對話", guideMemoryDesc: "知識檢索、長期記憶與可追溯的回答。",
  sessionEvaluation: "讓 AI 的答案更可靠", guideEvaluationDesc: "結構化資料、測試集與回答品質評估。",
  guideCustom: "想找特定技能或技術？", sessionQueryLabel: "搜尋技能或專案關鍵字",
  sessionRun: "搜尋 ↗", sessionReady: "探索", sessionRunning: "搜尋中", sessionComplete: "已找到",
  sessionWelcome: "點選上方主題，找到你感興趣的專案。", sessionEvidence: "相關專案",
  sessionResults: "推薦閱讀的專案", sessionTrace: "這些結果是如何找到的？",
  sessionDisclosure: "依主題比對這份履歷，每筆結果都能連到完整專案介紹。",
  labFooter: "從興趣出發，看見實作。"
});

// Process summaries grounded in the supplied GRACE-Mem manuscript.
const memoryWorkflowCopy = {
  "en": {
    "memoryWorkflowTitle": "How GRACE-Mem builds an answer",
    "memoryPrinciple": "Keep the path back to the original conversation.",
    "memoryPrincipleText": "Graph and compressed records locate candidates. Successful evidence curation rebuilds the answer context from provenance-linked raw dialogue.",
    "memoryRetrieval": "Retrieval and answering",
    "memoryIngestion": "Memory ingestion and updates",
    "memoryGuards": "Evidence validation and fallback",
    "memoryQueryTitle": "Analyze the question",
    "memoryQueryText": "Extract keywords and embed the full question and individual keywords for complementary retrieval signals.",
    "memoryDiscoverTitle": "Find and expand graph candidates",
    "memoryDiscoverText": "Combine dense and BM25 entity search with keyword-level relation retrieval. Expand connected evidence with query-conditioned spreading activation.",
    "memoryMergeTitle": "Rerank the graph and merge records",
    "memoryMergeText": "Rank entity and relation candidates independently. Merge their linked compressed records with direct compressed-record retrieval, then deduplicate IDs.",
    "memorySeedTitle": "Select the compressed-record seeds",
    "memorySeedText": "Rerank the merged pool and retain the top-K records with provenance IDs. These records guide the corpus search.",
    "memoryCurateTitle": "Inspect the original dialogue",
    "memoryCurateText": "Use GREP for lexical search, READ for local dialogue, and VEC for semantic search. FINAL submits the selected provenance IDs within a bounded call budget.",
    "memoryRebuildTitle": "Validate, reconstruct, and answer",
    "memoryRebuildText": "Check submitted IDs against the search trajectory. Eligible coverage checks may restore omitted seeds; rebuild the selected raw spans as context for the answer model.",
    "memoryRawTitle": "Preserve the dialogue and its origin",
    "memoryRawText": "Keep the raw text, dialogue timestamp, session ID, and message ID so selected records can be traced back to their source.",
    "memoryViewsTitle": "Build complementary memory views",
    "memoryViewsText": "Compress each dialogue unit with LLMLingua-2 and extract its entities. Resolve entity candidates through lexical and semantic matching with ADD or UPDATE decisions.",
    "memoryRelationsTitle": "Link relations to reconciled entities",
    "memoryRelationsText": "Extract entities before relations. Before writing a relation, replace its endpoints with resolved entity IDs.",
    "memoryStoreTitle": "Write the graph and vector indexes",
    "memoryStoreText": "Store entities, relations, compressed records, and provenance. Maintain separate entity, relation, and compressed-record vector indexes alongside the memory graph.",
    "memoryVerifyTitle": "Only admit verified additions",
    "memoryVerifyText": "Seeds can be kept directly. A new provenance ID is accepted only if a corpus-access tool observed it during the current search trajectory.",
    "memoryCoverageTitle": "Restore omitted seeds when eligible",
    "memoryCoverageText": "For configured question categories, and only when capacity remains, an answer-blind check may add back useful omitted seeds. It does not remove retained evidence or launch a new open-ended search.",
    "memoryFallbackTitle": "Preserve the complete seed context on failure",
    "memoryFallbackText": "If FINAL is missing, invalid, or empty, or ID validation leaves nothing, return the upstream compressed seed context unchanged. At the call cap, request FINAL without further corpus access.",
    "memoryDefaults": "Reported defaults · 2 graph hops · top-16 seeds · 10 evidence-access calls · up to 16 final IDs",
    "memorySource": "Research manuscript: §3.1–3.4, Figures 1–2, Algorithm 1; defaults from Table 9 (p. 14).",
    "memoryProofModel": "Reported with OSS-120B",
    "labMapMemory": "Hybrid graph search → Two-stage reranking → Evidence curation → Raw dialogue context",
    "graceDetail1": "Separated graph discovery, compressed-record reranking, and provenance-linked raw-dialogue reconstruction; failed curation preserves the complete compressed seed context."
  },
  "zh-TW": {
    "memoryWorkflowTitle": "GRACE-Mem 如何找到回答依據",
    "memoryPrinciple": "保留通往原始對話的路徑。",
    "memoryPrincipleText": "圖與壓縮紀錄用來定位候選內容；證據策展成功後，依來源 ID 取回原始對話，重建回答上下文。",
    "memoryRetrieval": "檢索與回答流程",
    "memoryIngestion": "記憶寫入與更新",
    "memoryGuards": "證據驗證與失敗回退",
    "memoryQueryTitle": "解析使用者問題",
    "memoryQueryText": "抽取關鍵字，分別建立完整問題與個別關鍵字的向量，提供互補的檢索訊號。",
    "memoryDiscoverTitle": "找出並擴展圖候選",
    "memoryDiscoverText": "整合 dense 與 BM25 實體搜尋，以及關鍵字層級的關係檢索，再以問題條件式 spreading activation 找到相連的證據。",
    "memoryMergeTitle": "圖層重排序，合併壓縮紀錄",
    "memoryMergeText": "分別重排實體與關係候選，取回其連結的壓縮紀錄，再與直接檢索的壓縮紀錄合併，依 ID 去重。",
    "memorySeedTitle": "選出壓縮紀錄種子",
    "memorySeedText": "對合併候選進行第二階段重排序，保留 top-K 紀錄及來源 ID，作為後續原始語料搜尋的起點。",
    "memoryCurateTitle": "查閱原始對話",
    "memoryCurateText": "GREP 搜尋字詞與模式、READ 查閱局部對話、VEC 執行語意檢索；在工具呼叫預算內，以 FINAL 提交選定的來源 ID。",
    "memoryRebuildTitle": "驗證來源，重建上下文並回答",
    "memoryRebuildText": "依本次搜尋軌跡驗證 ID；符合條件時補回遺漏種子，再取回選定的原始對話片段，交給回答模型。",
    "memoryRawTitle": "保留對話與來源位置",
    "memoryRawText": "保存原始文字、對話時間戳、session ID 與 message ID，讓候選紀錄能追溯回原始對話。",
    "memoryViewsTitle": "建立互補的記憶表示",
    "memoryViewsText": "以 LLMLingua-2 壓縮對話並抽取實體；透過字面與語意匹配對齊既有候選，決定 ADD 或 UPDATE。",
    "memoryRelationsTitle": "以對齊後的 ID 連結關係",
    "memoryRelationsText": "先抽取實體，再抽取以這些實體為端點的關係；寫入前將端點改成對齊後的實體 ID。",
    "memoryStoreTitle": "寫入圖與向量索引",
    "memoryStoreText": "保存實體、關係、壓縮紀錄與來源映射；在記憶圖之外，分別維護實體、關係及壓縮紀錄的向量索引。",
    "memoryVerifyTitle": "新增證據必須經過實際查閱",
    "memoryVerifyText": "原有種子可直接保留；新增來源 ID 則必須在本次搜尋中，確實由語料存取工具觀察到，才會被接受。",
    "memoryCoverageTitle": "符合條件時補回遺漏種子",
    "memoryCoverageText": "僅對設定的問題類別、且仍有容量時，進行不查看答案的覆蓋檢查，補回有用的遺漏種子；不刪除已保留證據，也不另開無界搜尋。",
    "memoryFallbackTitle": "策展失敗，保留完整 seed context",
    "memoryFallbackText": "FINAL 缺失、無效、為空，或 ID 驗證後沒有證據時，原封不動回傳上游壓縮種子上下文。呼叫預算用完後，只要求 FINAL，不再存取語料。",
    "memoryDefaults": "稿件預設配置 · 圖擴展 2 hops · top-16 種子 · 10 次證據存取呼叫 · 最多 16 個最終 ID",
    "memorySource": "依研究稿 §3.1–3.4、圖 1–2、Algorithm 1 整理；預設值見表 9（第 14 頁）。",
    "memoryProofModel": "OSS-120B 配置結果",
    "labMapMemory": "混合圖檢索 → 兩階段重排序 → 證據策展 → 原始對話上下文",
    "graceDetail1": "分離圖候選探索、壓縮紀錄重排序與來源連結的原始對話重建；策展失敗時保留完整壓縮種子上下文。"
  }
};
Object.entries(memoryWorkflowCopy).forEach(([language, values]) => Object.assign(translations[language], values));

const sessionAliases = {
  gimate: ["agent", "agents", "tool", "tools", "execution", "planning", "orchestration", "repair", "recovery", "local", "desktop", "electron", "sqlite", "代理", "工具", "執行", "規劃", "恢復", "桌面", "本機"],
  grace: ["memory", "conversational", "retrieval", "graph", "reranking", "provenance", "curation", "agent", "evaluation", "記憶", "檢索", "溯源", "重排序", "圖譜", "評估"],
  enterprise: ["rag", "retrieval", "hybrid", "bm25", "product", "knowledge", "support", "enterprise", "檢索", "混合", "規格", "產品", "知識", "企業", "客服"],
  laptop: ["data", "pipeline", "pipelines", "evaluation", "evaluate", "judge", "fact", "facts", "sku", "bilingual", "rag", "資料", "流程", "評估", "事實", "規格", "雙語", "正確率"]
};
const sessionPresets = { agents: "sessionGoalAgents", memory: "sessionGoalMemory", evaluation: "sessionGoalEvaluation" };
const sessionModel = { runId: 0, status: "idle", phase: -1, query: "", calls: [], results: [], matchCount: 0, controller: null, preset: null };
const keywordPresent = (text, term) => /[^\x00-\x7F]/.test(term)
  ? text.includes(term)
  : new RegExp(`\\b${term}\\b`, "i").test(text);

function portfolioSearch(query) {
  const normalized = query.toLowerCase();
  const generic = new Set(["find", "show", "evidence", "work", "experience", "arthur", "projects", "project", "the", "and", "with", "for", "how", "what", "does", "this", "that", "from", "engineering"]);
  const terms = [...new Set((normalized.match(/[a-z0-9]+/g) || []).filter((term) => term.length > 2 && !generic.has(term)))];
  return Object.entries(projectSources).map(([key, project]) => {
    const article = document.getElementById(project.id);
    if (!article) return null;
    const text = article.textContent.toLowerCase();
    const aliases = sessionAliases[key].filter((term) => keywordPresent(normalized, term));
    const matchedTerms = terms.filter((term) => keywordPresent(text, term));
    const nameMatch = normalized.includes(project.name.toLowerCase());
    const score = aliases.length * 3 + matchedTerms.length + (nameMatch ? 20 : 0);
    return score ? { key, score, terms: [...new Set([...aliases, ...matchedTerms])] } : null;
  }).filter(Boolean).sort((a, b) => b.score - a.score);
}

function portfolioRead(hit) {
  const project = projectSources[hit.key];
  const article = document.getElementById(project.id);
  if (!article) throw new Error("Source unavailable");
  const details = [...article.querySelectorAll(".project-details [data-i18n]")];
  const ranked = details.map((item) => ({ key: item.dataset.i18n, score: hit.terms.reduce((count, term) => count + (keywordPresent(item.textContent.toLowerCase(), term) ? 1 : 0), 0) }));
  ranked.sort((a, b) => b.score - a.score);
  if (!ranked.length) throw new Error("Source has no evidence text");
  return { key: hit.key, excerptKey: ranked[0].key };
}

function sessionNode(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderPortfolioSession() {
  const running = sessionModel.status === "running";
  portfolioSession.dataset.status = sessionModel.status;
  portfolioSession.querySelectorAll("[data-intent]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.intent === sessionModel.preset)));
  const statusKeys = { idle: "sessionReady", running: "sessionRunning", complete: "sessionComplete", stopped: "sessionStopped", empty: "sessionNoMatch", error: "sessionError" };
  sessionState.textContent = labText(statusKeys[sessionModel.status]);
  sessionState.dataset.state = sessionModel.status;
  sessionStop.hidden = !running;
  portfolioSession.querySelector(".session-run-body").setAttribute("aria-busy", String(running));
  portfolioSession.querySelector(".session-tool-count").textContent = `${sessionModel.calls.length} ${labText("sessionCalls")}`;
  portfolioSession.querySelector(".session-source-count").textContent = sessionModel.results.length ? `${sessionModel.results.length} ${labText("sessionSources")}` : "";
  const title = portfolioSession.querySelector("#session-result-title");
  title.textContent = sessionModel.status === "complete" ? `${labText("sessionResults")} / ${sessionModel.results.length}`
    : labText({ idle: "sessionWelcome", running: "sessionWorking", empty: "sessionNoResultTitle", stopped: "sessionStopped", error: "sessionError" }[sessionModel.status]);
  const feedback = portfolioSession.querySelector(".session-feedback");
  feedback.textContent = sessionModel.status === "empty" ? labText("sessionNoResult")
    : sessionModel.status === "stopped" ? labText("sessionStoppedText")
    : sessionModel.status === "error" ? labText("sessionErrorText") : "";
  const log = document.createDocumentFragment();
  sessionModel.calls.forEach((call) => {
    const entry = sessionNode("li", "session-tool-call");
    entry.appendChild(sessionNode("code", "", call.name));
    const argument = sessionNode("span", "session-call-args", call.argument);
    argument.title = call.argument;
    entry.appendChild(argument);
    entry.appendChild(sessionNode("span", "session-call-result", call.name === "portfolio.search" ? `${call.count} ${labText("sessionMatches")}` : "✓"));
    log.appendChild(entry);
  });
  sessionLog.replaceChildren(log);
  const evidence = document.createDocumentFragment();
  sessionModel.results.forEach((result, index) => {
    const project = projectSources[result.key];
    const card = sessionNode("article", "session-source");
    const link = sessionNode("a", "session-source-name", `[${index + 1}] ${project.name}`);
    link.href = `#${project.id}`;
    card.appendChild(link);
    card.appendChild(sessionNode("p", "session-source-excerpt", labText(result.excerptKey)));
    const source = sessionNode("a", "session-source-link", labText("sessionReadSource"));
    source.href = `#${project.id}`;
    card.appendChild(source);
    evidence.appendChild(card);
  });
  sessionEvidence.replaceChildren(evidence);
  document.dispatchEvent(new CustomEvent("portfolio:session"));
}

async function runPortfolioTask(query, preset = null) {
  const goal = query.trim().slice(0, 180);
  if (!goal) return;
  if (sessionModel.controller) sessionModel.controller.abort();
  const controller = new AbortController();
  sessionModel.runId += 1;
  Object.assign(sessionModel, { status: "running", phase: 1, query: goal, calls: [], results: [], matchCount: 0, controller, preset });
  sessionInput.value = goal;
  renderPortfolioSession();
  try {
    // Yield once for input feedback; results come directly from the local résumé.
    await new Promise(resolve => window.requestAnimationFrame(resolve));
    if (controller.signal.aborted) return;
    const hits = portfolioSearch(goal);
    sessionModel.matchCount = hits.length;
    sessionModel.calls.push({ name: "portfolio.search", argument: goal, count: hits.length });
    for (const hit of hits.slice(0, 2)) {
      sessionModel.results.push(portfolioRead(hit));
      sessionModel.calls.push({ name: "portfolio.read", argument: projectSources[hit.key].name });
    }
    sessionModel.phase = 3;
    sessionModel.status = hits.length ? "complete" : "empty";
    sessionModel.controller = null;
    renderPortfolioSession();
  } catch (error) {
    if (error.name === "AbortError" || controller.signal.aborted) return;
    sessionModel.status = "error";
    sessionModel.controller = null;
    renderPortfolioSession();
  }
}

sessionForm.addEventListener("submit", (event) => { event.preventDefault(); runPortfolioTask(sessionInput.value); });
function stopPortfolioTask() {
  if (!sessionModel.controller) return false;
  sessionModel.controller.abort();
  sessionModel.controller = null;
  sessionModel.status = "stopped";
  renderPortfolioSession();
  return true;
}
sessionStop.addEventListener("click", () => { stopPortfolioTask(); sessionInput.focus(); });
portfolioSession.querySelectorAll("[data-intent]").forEach((button) => {
  button.addEventListener("click", async () => {
    const intent = button.dataset.intent;
    await runPortfolioTask(labText(sessionPresets[intent]), intent);
    if (sessionModel.preset !== intent || sessionModel.status !== "complete") return;
    const result = portfolioSession.querySelector(".session-result");
    const heading = result.querySelector("h3");
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "nearest" });
  });
});
document.querySelector('a[href="#portfolio-agent-session"]').addEventListener("click", () => {
  showLabView("agent");
  window.requestAnimationFrame(() => portfolioSession.querySelector("[data-intent]").focus({ preventScroll: true }));
});
document.addEventListener("resume:language", () => {
  if (sessionModel.preset && [translations.en[sessionPresets[sessionModel.preset]], translations["zh-TW"][sessionPresets[sessionModel.preset]]].includes(sessionInput.value)) {
    sessionInput.value = labText(sessionPresets[sessionModel.preset]);
  }
  sessionInput.placeholder = labLanguage() === "zh-TW" ? "試試 RAG、Electron 或評估" : "Try RAG, Electron, or evaluation";
  renderPortfolioSession();
});
setLanguage(labLanguage());
renderPortfolioSession();
