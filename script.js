const translations = {
  en: {
    skip: "Skip to résumé", utility: "TAIPEI · APPLIED AI · PORTFOLIO / 2026", menu: "Menu",
    navExperience: "Experience", navWork: "Selected work", navResearch: "Research", navProfile: "Profile", navContact: "Contact", navPdf: "PDF résumé ↗",
    issue: "THE SYSTEMS ISSUE", heroKicker: "Engineering intelligence under real constraints", heroLine1: "AI that works", heroLine2: "after the demo.",
    heroIntro: "Arthur Wang builds on-device agents, evidence-grounded memory, and retrieval infrastructure made for production—not just prototypes.", heroByline: "BY ARTHUR WANG", heroRole: "APPLIED AI ENGINEER · TECHNICAL LEAD",
    portraitAlt: "Arthur Wang standing outdoors beside a car", portraitCaption: "Currently leading applied AI development at GIGABYTE Technology.",
    metric1: "agent skills and tools in one on-device ecosystem", metric2: "routing accuracy across 385 agent test cases", metric3: "LoCoMo accuracy with evidence-grounded memory", metric4: "VRAM target for local production deployment",
    experienceLabel: "FIELD NOTES", experienceTitle: "Experience", experienceDeck: "From research questions to shipped systems, with technical ownership across inference, agents, retrieval, and product delivery.", present: "Present", newTaipei: "New Taipei, Taiwan", taipei: "Taipei, Taiwan",
    gigabyteRole: "AI Algorithm Deputy Manager / Technical Lead", gigabyte1: "Lead 6+ on-device and enterprise AI applications spanning local agents, hardware Q&A, translation, and meeting intelligence.", gigabyte2: "Architect offline LLM systems under a 4GB VRAM production constraint.", gigabyte3: "Built RAG and knowledge graph pipelines over 1,000+ product documents, cutting FAE lookup from 5–10 minutes to under 30 seconds.", gigabyte4: "Design reliable agent workflows with planning, memory, permissions, durable execution, and recovery.",
    taroboRole: "Quantitative Trading Engineer", tarobo1: "Developed deep learning models for stock direction prediction, improving directional accuracy by 15%.", tarobo2: "Reduced strategy evaluation time from 6 hours to 15 minutes with a Python backtesting pipeline.", tarobo3: "Analyzed market signals, financial indicators, and model outputs to guide strategy iteration.",
    workLabel: "SELECTED WORK", workTitle: "Five systems, built to hold up.", workDeck: "Select a story to open the technical details. Every result below came with a real product, benchmark, or operating constraint.",
    gimateType: "ON-DEVICE AGENT · 2026", gimateSub: "A Windows assistant with 22 skills and 76 tools", routingAccuracy: "routing accuracy", gimateIntro: "Led the Electron and FastAPI product from local inference through standalone Windows packaging.", gimate1: "Qwen3.5-4B powers presentations, data analysis, local-file RAG, hardware control, and third-party integrations.", gimate2: "Plan-and-Execute, progressive skill discovery, and deterministic tool execution run on constrained devices.", gimate3: "Dynamic replanning, SQLite persistence, cross-session memory, and human approval make failures recoverable.",
    graceType: "LONG-TERM MEMORY · 2025–2026", graceSub: "Evidence-grounded conversational memory", graceIntro: "Architected a source-evidence-centric memory system that keeps compressed summaries from becoming final evidence.", grace1: "Hybrid BM25 and dense retrieval with two-hop spreading activation and hierarchical reranking.", grace2: "Instruction-conditioned reranking lifted gold-evidence recall from 34.5% to 63.4%.", grace3: "A bounded Evidence Curation Agent validates provenance and recovers missing coverage.",
    faeType: "ENTERPRISE RAG · 2026", faeSub: "Hybrid hardware knowledge infrastructure", qaAccuracy: "Q&A accuracy", faeIntro: "Built hardware Q&A across motherboards, GPUs, and laptops for specification, compatibility, and troubleshooting workflows.", fae1: "Standardized 1,000+ product documents into a Neo4j hardware knowledge graph.", fae2: "Combined graph retrieval, BM25, embeddings, fuzzy matching, and BERT entity linking.", fae3: "Reached a 97% Top-3 entity hit rate and reduced manual lookup effort by roughly 70%.",
    stockType: "EQUITY INTELLIGENCE · 2025", stockSub: "Autonomous equity research agent", metrics: "metrics", stockIntro: "A 24/7 AI analyst that moves from quantitative screening to evidence-backed trading recommendations.", stock1: "Cross-analyzes news, earnings, technical charts, DCF valuation, market conditions, and portfolio exposure.", stock2: "Tracks research history and sends real-time opportunity alerts through Telegram.",
    alphaType: "KNOWLEDGE INTELLIGENCE · 2026", alphaSub: "Autonomous research and knowledge agent", sources: "sources", alphaIntro: "Monitors technical sources and turns high-value material into structured, source-linked research memos.", alpha1: "Screening → Deep Research → Cross-Source Synthesis with explicit agreement and conflict analysis.", alpha2: "Processes podcasts and YouTube through Whisper ASR and long-context analysis, then organizes findings in Obsidian.",
    publicationLabel: "COVER STORY", authors: "Heng (Arthur) Wang — first author, X.-N. Chen, P.-Y. Chang, C.-H. Chen, H.-Y. Huang, C. Lin, I-L. Chung.", publicationDeck: "A memory architecture that retrieves source evidence before composing an answer—designed to stay accurate across long conversations.", featured: "Featured Paper · 3 selected", candidate: "Best Paper Award Candidate",
    profileLabel: "THE TOOLBOX", profileTitle: "Research depth. Product discipline.", cap1Title: "Agentic AI & retrieval", cap1: "Agent harness engineering, MCP, skills, context engineering, long-term memory, Agentic RAG, GraphRAG, hybrid search, reranking, and evaluation.", cap2Title: "Models & frameworks", cap2: "llama.cpp, vLLM, LangChain, LlamaIndex, PyTorch, Hugging Face, quantization, QLoRA, GRPO, OCR, ASR, and VLM.", cap3Title: "Engineering", cap3: "Python, React, FastAPI, Electron, REST APIs, SQLite, application packaging, and evaluation infrastructure.",
    education: "EDUCATION", educationValue: "National Chiao Tung University · B.S. in Computer Science · 2017–2021", languages: "LANGUAGES", languagesValue: "Mandarin Chinese · English", basedIn: "BASED IN", basedInValue: "Taiwan · GMT+8",
    footerLabel: "CONTACT / OPEN CHANNEL", footerTitle: "Have a difficult AI system to build?", footerPdf: "PDF résumé ↗", backTop: "Back to top ↑", footerBuilt: "BUILT IN TAIWAN"
  },
  "zh-TW": {
    skip: "跳至履歷內容", utility: "台北 · 應用 AI · 作品履歷 / 2026", menu: "選單",
    navExperience: "經歷", navWork: "代表作品", navResearch: "研究", navProfile: "專業能力", navContact: "聯絡", navPdf: "下載 PDF 履歷 ↗",
    issue: "系統工程特刊", heroKicker: "在真實限制下，打造可落地的智慧系統", heroLine1: "不只做出 Demo，", heroLine2: "還要真正運作。",
    heroIntro: "Arthur Wang 專注於裝置端代理、證據導向的長期記憶，以及為正式環境打造的檢索基礎設施。", heroByline: "文／ARTHUR WANG", heroRole: "應用 AI 工程師 · 技術負責人",
    portraitAlt: "Arthur Wang 在戶外的個人照片", portraitCaption: "現於技嘉科技帶領應用 AI 產品開發。",
    metric1: "項代理技能與工具，整合於單一裝置端生態系", metric2: "代理路由準確率，涵蓋 385 組測試案例", metric3: "證據導向記憶於 LoCoMo 的準確率", metric4: "本地端正式部署的 VRAM 目標",
    experienceLabel: "現場紀錄", experienceTitle: "工作經歷", experienceDeck: "從研究問題一路做到產品上線，負責推論、代理架構、檢索系統與交付的完整技術鏈。", present: "至今", newTaipei: "台灣新北", taipei: "台灣台北",
    gigabyteRole: "AI 演算法副理／技術負責人", gigabyte1: "帶領 6 項以上裝置端與企業 AI 應用，涵蓋本地代理、硬體問答、翻譯與會議智慧。", gigabyte2: "在 4GB VRAM 的產品限制下，設計可離線運作的 LLM 系統。", gigabyte3: "以 1,000 份以上產品文件建立 RAG 與知識圖譜流程，將 FAE 查找時間從 5–10 分鐘降至 30 秒內。", gigabyte4: "設計具備規劃、記憶、權限控管、持久執行與失敗復原能力的可靠代理流程。",
    taroboRole: "量化交易工程師", tarobo1: "開發股票漲跌預測的深度學習模型，方向預測準確率提升 15%。", tarobo2: "以 Python 回測流程將策略評估時間由 6 小時縮短至 15 分鐘。", tarobo3: "整合市場訊號、財務指標與模型輸出，推動策略迭代。",
    workLabel: "代表作品", workTitle: "五套經得起驗證的系統。", workDeck: "點開每則作品可查看技術細節；每項成果都對應真實產品、基準測試或運行限制。",
    gimateType: "裝置端代理 · 2026", gimateSub: "具備 22 項技能、76 個工具的 Windows 助理", routingAccuracy: "路由準確率", gimateIntro: "主導 Electron 與 FastAPI 產品，從本地推論一路完成獨立 Windows 封裝。", gimate1: "以 Qwen3.5-4B 支援簡報、資料分析、本地檔案 RAG、硬體控制與第三方整合。", gimate2: "在受限裝置上實作 Plan-and-Execute、漸進式技能探索與確定性工具執行。", gimate3: "透過動態重規劃、SQLite 持久化、跨工作階段記憶與人工核准，使失敗可被復原。",
    graceType: "長期記憶 · 2025–2026", graceSub: "以來源證據為核心的對話記憶", graceIntro: "設計以來源證據為核心的記憶系統，避免壓縮摘要取代原始證據。", grace1: "結合 BM25 與稠密檢索、兩跳擴散活化及分層重排序。", grace2: "指令條件式重排序將黃金證據召回率由 34.5% 提升至 63.4%。", grace3: "有界的證據策展代理負責驗證來源並補回缺失資訊。",
    faeType: "企業 RAG · 2026", faeSub: "混合式硬體知識基礎設施", qaAccuracy: "問答準確率", faeIntro: "針對主機板、顯示卡與筆電建立硬體問答，支援規格、相容性與故障排除流程。", fae1: "將 1,000 份以上產品文件標準化為 Neo4j 硬體知識圖譜。", fae2: "整合圖檢索、BM25、向量嵌入、模糊比對與 BERT 實體連結。", fae3: "Top-3 實體命中率達 97%，人工查找工作量降低約 70%。",
    stockType: "股票情報 · 2025", stockSub: "自主式股票研究代理", metrics: "項指標", stockIntro: "全天候 AI 分析師，從量化篩選一路產出有證據支持的交易建議。", stock1: "交叉分析新聞、財報、技術圖表、DCF 估值、市場環境與投資組合曝險。", stock2: "保留研究歷史，並透過 Telegram 即時推送機會警示。",
    alphaType: "知識情報 · 2026", alphaSub: "自主式研究與知識代理", sources: "個來源", alphaIntro: "持續監測技術來源，將高價值資訊轉為結構化、可追溯來源的研究備忘錄。", alpha1: "依序執行篩選、深度研究、跨來源綜合，明確分析共識與衝突。", alpha2: "以 Whisper ASR 與長上下文分析處理 Podcast 及 YouTube，並將結果整理至 Obsidian。",
    publicationLabel: "封面研究", authors: "Heng (Arthur) Wang（第一作者）、X.-N. Chen、P.-Y. Chang、C.-H. Chen、H.-Y. Huang、C. Lin、I-L. Chung。", publicationDeck: "一套先找回來源證據、再組織答案的記憶架構，目標是在長對話中持續維持準確度。", featured: "Featured Paper · 僅選 3 篇", candidate: "最佳論文獎候選",
    profileLabel: "專業工具箱", profileTitle: "研究深度，產品紀律。", cap1Title: "代理式 AI 與檢索", cap1: "代理框架工程、MCP、技能系統、上下文工程、長期記憶、Agentic RAG、GraphRAG、混合檢索、重排序與評估。", cap2Title: "模型與框架", cap2: "llama.cpp、vLLM、LangChain、LlamaIndex、PyTorch、Hugging Face、量化、QLoRA、GRPO、OCR、ASR 與 VLM。", cap3Title: "軟體工程", cap3: "Python、React、FastAPI、Electron、REST API、SQLite、應用程式封裝與評估基礎設施。",
    education: "學歷", educationValue: "國立交通大學 · 資訊工程學系學士 · 2017–2021", languages: "語言", languagesValue: "中文 · 英文", basedIn: "所在地", basedInValue: "台灣 · GMT+8",
    footerLabel: "聯絡方式 / 開放交流", footerTitle: "有一套困難的 AI 系統要打造嗎？", footerPdf: "下載 PDF 履歷 ↗", backTop: "回到頁首 ↑", footerBuilt: "製作於台灣"
  }
};

const root = document.documentElement;
const nav = document.querySelector(".site-nav");
const menuButton = document.querySelector(".menu-button");
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
  localStorage.setItem("resume-language", next);
}

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
const savedLanguage = localStorage.getItem("resume-language");
setLanguage(savedLanguage || (navigator.language.toLowerCase().startsWith("zh") ? "zh-TW" : "en"));

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".project-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const story = trigger.closest(".project-story");
    const isOpening = !story.classList.contains("is-open");
    document.querySelectorAll(".project-story").forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector(".project-trigger").setAttribute("aria-expanded", "false");
    });
    if (isOpening) {
      story.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
});

const sections = document.querySelectorAll("main section[id], footer[id]");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6%" });
  document.querySelectorAll(".observe").forEach((item) => revealObserver.observe(item));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-38% 0px -55%", threshold: 0 });
  sections.forEach((section) => sectionObserver.observe(section));
} else {
  document.querySelectorAll(".observe").forEach((item) => item.classList.add("is-visible"));
}

function updateProgress() {
  const scrollable = root.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.transform = `scaleX(${Math.min(Math.max(value, 0), 1)})`;
}
updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
