const translations = {
  en: {
    skip: "Skip to content", menu: "Menu", navExperience: "Experience", navWork: "Work", navSkills: "Skills", navContact: "Contact", navPdf: "Résumé PDF ↗",
    heroEyebrow: "Applied AI Engineer · Technical Lead · Taiwan", heroLead: "I design and ship on-device agents, long-term memory systems, and production retrieval infrastructure.", downloadResume: "Download résumé", emailMe: "Email me ↗", portraitAlt: "Arthur Wang standing outdoors beside a car", portraitRole: "AI Algorithm Deputy Manager / Technical Lead",
    snapshotKicker: "Expertise", snapshotTitle: "Core expertise", capAgentsTitle: "Agent systems", capAgentsText: "Plan-and-Execute workflows, tool use, permissions, memory, recovery, and human approval for dependable agents.", capRetrievalTitle: "Retrieval & memory", capRetrievalText: "Production RAG, GraphRAG, hybrid search, reranking, evidence grounding, and long-term conversational memory.", capProductTitle: "AI product engineering", capProductText: "Local inference, FastAPI, Electron, evaluation infrastructure, packaging, and cross-functional technical leadership.", outcome1: "AI applications led from architecture to delivery", outcome2: "agent routing accuracy across 385 tests", outcome3: "product documents indexed for enterprise retrieval", outcome4: "VRAM target for offline production inference",
    experienceKicker: "Experience", experienceTitle: "Experience", experienceIntro: "Model infrastructure, agent architecture, evaluation, and product delivery.", present: "Present", newTaipei: "New Taipei, Taiwan", taipei: "Taipei, Taiwan", gigabyteRole: "AI Algorithm Deputy Manager / Technical Lead", gigabyte1: "Lead 6+ on-device and enterprise AI products across local agents, hardware Q&A, translation, and meeting intelligence.", gigabyte2: "Architect offline LLM systems with llama.cpp, vLLM, LangChain, and LlamaIndex under a 4GB VRAM constraint.", gigabyte3: "Built retrieval pipelines over 1,000+ documents, reducing FAE lookup time from 5–10 minutes to under 30 seconds.", gigabyte4: "Own agent reliability: planning, tool execution, memory, permissions, durable execution, evaluation, and recovery.", taroboRole: "Quantitative Trading Engineer", tarobo1: "Improved stock-direction prediction accuracy by 15% with deep learning models.", tarobo2: "Cut strategy evaluation time from 6 hours to 15 minutes with a Python backtesting pipeline.",
    workKicker: "Selected work", workTitle: "Selected projects", workIntro: "Role, architecture, implementation decisions, and measured outcomes.", projectRoleLabel: "Role", gimateType: "On-device agent · 2026", gimateSummary: "Led a Windows AI assistant from local inference to standalone packaging, with progressive skill discovery and recoverable execution.", gimateRole: "Technical lead · Agent architecture and deployment", gimateDetail1: "Delivered 22 skills and 76 tools for presentations, data analysis, local-file RAG, hardware control, and third-party integrations.", gimateDetail2: "Designed a Plan-and-Execute workflow with progressive skill discovery and deterministic tool execution for constrained devices.", gimateDetail3: "Added dynamic replanning, SQLite persistence, cross-session memory, and human approval for recoverable execution.", gimateProof1: "skills / tools", gimateProof2: "routing accuracy", graceType: "Long-term memory · 2025–2026", graceSummary: "Designed an evidence-first memory system combining hybrid retrieval, hierarchical reranking, and bounded agentic curation.", graceRole: "Research lead · Retrieval and evaluation", graceDetail1: "Kept source evidence authoritative while using compressed summaries only for navigation and retrieval.", graceDetail2: "Combined BM25, dense entity/relation retrieval, two-hop spreading activation, and hierarchical reranking.", graceDetail3: "Instruction-conditioned reranking raised gold-evidence recall from 34.5% to 63.4%; a bounded curation agent validates provenance and coverage.", faeType: "Enterprise RAG · 2026", faeSummary: "Built hybrid hardware knowledge infrastructure for specifications, compatibility, and troubleshooting across motherboards, GPUs, and laptops.", faeRole: "System architect · Knowledge graph and retrieval", faeDetail1: "Standardized more than 1,000 product documents into a Neo4j hardware knowledge graph.", faeDetail2: "Combined graph retrieval, BM25, embeddings, fuzzy matching, and BERT entity linking for noisy model queries.", faeDetail3: "Reached 95% model identification and 97% Top-3 entity hit rate, reducing manual lookup effort by about 70%.", faeProof1: "Q&A accuracy", faeProof2: "lookup time", faeProof3: "Top-3 entity hit", otherWork: "Additional projects", stockSummary: "An autonomous equity research workflow that turns quantitative screening into evidence-backed trading recommendations.", stockDetail1: "Cross-analyzes news, earnings, technical charts, DCF valuation, market conditions, and portfolio exposure.", stockDetail2: "Tracks 18 sectors, 60+ metrics, and 32 indicators, with research history and real-time Telegram alerts.", alphaSummary: "A source-linked research pipeline that converts high-value technical material into structured knowledge memos.", alphaDetail1: "Runs screening, deep research, and cross-source synthesis with explicit agreement and conflict analysis.", alphaDetail2: "Monitors 90+ technical sources and processes podcasts and YouTube with Whisper into an Obsidian knowledge base.",
    publicationKicker: "Research publication", authors: "Heng (Arthur) Wang — first author, X.-N. Chen, P.-Y. Chang, C.-H. Chen, H.-Y. Huang, C. Lin, I-L. Chung.", featured: "Featured Paper · 3 selected", candidate: "Best Paper Award Candidate",
    skillsKicker: "Skills & education", skillsTitle: "Technical skills", skillAgentTitle: "Agents & retrieval", skillAgentText: "Agent harness engineering, MCP, skills, context engineering, long-term memory, Agentic RAG, GraphRAG, hybrid search, reranking, evaluation.", skillModelTitle: "Models & frameworks", skillEngineeringTitle: "Engineering", education: "Education", university: "National Chiao Tung University", degree: "B.S. in Computer Science · 2017–2021", languages: "Languages", languageValue: "Mandarin Chinese · English",
    contactKicker: "Contact", contactTitle: "Contact", footerPdf: "Résumé PDF ↗", backTop: "Back to top ↑"
  },
  "zh-TW": {
    skip: "跳至主要內容", menu: "選單", navExperience: "經歷", navWork: "作品", navSkills: "技能", navContact: "聯絡", navPdf: "下載 PDF 履歷 ↗",
    heroEyebrow: "應用 AI 工程師 · 技術負責人 · 台灣", heroLead: "設計並交付裝置端代理、長期記憶系統與正式環境中的檢索基礎設施。", downloadResume: "下載履歷", emailMe: "寄信給我 ↗", portraitAlt: "Arthur Wang 在戶外的個人照片", portraitRole: "AI 演算法副理／技術負責人",
    snapshotKicker: "專業領域", snapshotTitle: "核心能力", capAgentsTitle: "代理系統", capAgentsText: "規劃與執行、工具使用、權限控管、記憶、失敗復原與人工核准，打造可靠的代理流程。", capRetrievalTitle: "檢索與記憶", capRetrievalText: "正式環境 RAG、GraphRAG、混合檢索、重排序、證據導向回答與長期對話記憶。", capProductTitle: "AI 產品工程", capProductText: "本地推論、FastAPI、Electron、評估基礎設施、應用程式封裝與跨團隊技術領導。", outcome1: "項 AI 應用，從架構一路帶到交付", outcome2: "代理路由準確率，涵蓋 385 組測試", outcome3: "份以上產品文件納入企業檢索系統", outcome4: "離線正式部署的 VRAM 目標",
    experienceKicker: "工作經歷", experienceTitle: "工作經歷", experienceIntro: "模型基礎設施、代理架構、評估與產品交付。", present: "至今", newTaipei: "台灣新北", taipei: "台灣台北", gigabyteRole: "AI 演算法副理／技術負責人", gigabyte1: "帶領 6 項以上裝置端與企業 AI 產品，涵蓋本地代理、硬體問答、翻譯與會議智慧。", gigabyte2: "在 4GB VRAM 限制下，以 llama.cpp、vLLM、LangChain 與 LlamaIndex 設計離線 LLM 系統。", gigabyte3: "建立涵蓋 1,000 份以上文件的檢索流程，將 FAE 查找時間從 5–10 分鐘降至 30 秒內。", gigabyte4: "負責代理可靠度：規劃、工具執行、記憶、權限、持久執行、評估與失敗復原。", taroboRole: "量化交易工程師", tarobo1: "以深度學習模型將股票方向預測準確率提升 15%。", tarobo2: "以 Python 回測流程將策略評估時間從 6 小時縮短至 15 分鐘。",
    workKicker: "代表作品", workTitle: "代表專案", workIntro: "清楚呈現職責、系統架構、實作選擇與量化成果。", projectRoleLabel: "職責", gimateType: "裝置端代理 · 2026", gimateSummary: "主導 Windows AI 助理，從本地推論做到獨立封裝，並具備漸進式技能探索與可復原執行。", gimateRole: "技術負責人 · Agent 架構與部署", gimateDetail1: "交付 22 項技能與 76 個工具，涵蓋簡報、資料分析、本機檔案 RAG、硬體控制與第三方整合。", gimateDetail2: "設計 Plan-and-Execute 流程，透過漸進式技能探索與確定性工具執行，適配資源受限裝置。", gimateDetail3: "加入動態重規劃、SQLite 持久化、跨對話記憶與人工核准，讓失敗任務能安全恢復。", gimateProof1: "項技能／工具", gimateProof2: "路由準確率", graceType: "長期記憶 · 2025–2026", graceSummary: "設計證據優先的記憶系統，結合混合檢索、分層重排序與有界的代理式證據策展。", graceRole: "研究負責人 · 檢索與評估", graceDetail1: "以原始來源作為最終證據，壓縮摘要僅用於導覽與檢索，避免摘要失真成為答案依據。", graceDetail2: "整合 BM25、稠密實體／關係檢索、兩跳擴散啟動與階層式重排序。", graceDetail3: "指令條件式重排序將正確證據召回率由 34.5% 提升至 63.4%，並由受限 Agent 驗證來源與覆蓋度。", faeType: "企業 RAG · 2026", faeSummary: "為主機板、顯示卡與筆電建立混合式硬體知識系統，處理規格、相容性與故障排除。", faeRole: "系統架構師 · 知識圖譜與檢索", faeDetail1: "將超過 1,000 份產品文件標準化，建成 Neo4j 硬體知識圖譜。", faeDetail2: "結合圖檢索、BM25、向量嵌入、模糊比對與 BERT 實體連結，處理不完整或有雜訊的型號查詢。", faeDetail3: "達到 95% 型號辨識率與 97% Top-3 實體命中率，人工查找工作量降低約 70%。", faeProof1: "問答準確率", faeProof2: "查找時間", faeProof3: "Top-3 實體命中", otherWork: "其他專案", stockSummary: "從量化篩選一路產出具證據依據交易建議的自主股票研究流程。", stockDetail1: "交叉分析新聞、財報、技術圖表、DCF 估值、市場環境與投資組合曝險。", stockDetail2: "追蹤 18 個產業、60+ 項指標與 32 種技術訊號，保留研究歷史並透過 Telegram 即時通知。", alphaSummary: "將高價值技術內容轉換為具來源連結、可持續累積的結構化研究筆記。", alphaDetail1: "依序執行內容篩選、深度研究與跨來源整合，明確整理不同資料間的一致與衝突。", alphaDetail2: "監測 90+ 個技術來源，並以 Whisper 處理 Podcast 與 YouTube，寫入 Obsidian 知識庫。",
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
