const translations = {
  "en": {
    "skip": "Skip to content",
    "heroLabel": "Making models run reliably on constrained devices.",
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
    "portraitRole": "AI Algorithm Section Manager / Technical Lead",
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
    "gigabyteRole": "AI Algorithm Section Manager / Technical Lead",
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
    "gimateSummary": "An on-device Windows assistant that turns one sentence into finished work — checking why the laptop is slow, analyzing a spreadsheet, building a deck, or setting a reminder — across 18 built-in skills.",
    "gimateRole": "Technical lead and project PM · Product planning, agent architecture, and deployment",
    "gimateFeat1": "Laptop care",
    "gimateFeat1a": "Check specs, temperatures, and battery health",
    "gimateFeat1b": "Find resource-hungry apps and close them on approval",
    "gimateFeat1c": "Adjust brightness, volume, fans, RGB, and power mode",
    "gimateFeat2": "Files and content",
    "gimateFeat2a": "Summarize files and turn spreadsheets into charts",
    "gimateFeat2b": "Build editable PowerPoint decks from a topic",
    "gimateFeat2c": "Write code and generate images with local models",
    "gimateFeat3": "Everyday tasks",
    "gimateFeat3a": "Set reminders and recurring tasks in plain language",
    "gimateFeat3b": "Weather, web search, and stock analysis",
    "gimateFeat3c": "Sort and summarize Windows notifications",
    "gimateFeat4": "Integrations",
    "gimateFeat4a": "Search and summarize Gmail",
    "gimateFeat4b": "Look up Notion pages",
    "gimateFeat4c": "Find places and routes on Google Maps",
    "gimateFeat5": "Memory",
    "gimateFeat5a": "Remembers your profile and past conversations",
    "gimateFeat5b": "Brings relevant history into new tasks",
    "gimateFeat5c": "Lets you view and correct what it remembers",
    "gimateFeat6": "One agent, three channels",
    "gimateFeat6a": "Desktop app: full interface with task cards and approvals",
    "gimateFeat6b": "Talking avatar: voice replies, daily greetings, break reminders",
    "gimateFeat6c": "Telegram bot: remote requests; risky actions are refused",
    "gimateNote1": "Live step-by-step task cards",
    "gimateNote2": "Approval before risky actions",
    "gimateNote3": "Resumable tasks",
    "gimateNote4": "Qwen3.5-4B on-device",
    "gimateNote5": "Electron + FastAPI",
    "gimateProof1": "Skills",
    "gimateProof2": "MCP servers · Coder, Creator, HWCTL",
    "graceType": "Long-term memory · Oct. 2025—Jul. 2026",
    "graceSummary": "A long-term memory system that lets an assistant answer from conversations far beyond its context window, backing every answer with the original dialogue. First-author paper, EMNLP 2026 AKBC Runner-Up Award.",
    "graceRole": "First author · System design, retrieval, and evaluation",
    "graceFeat1": "The problem",
    "graceFeat1a": "Conversations outgrow the model's context window",
    "graceFeat1b": "Summaries drop speakers, dates, and conditions",
    "graceFeat1c": "Similarity search favors related records over the turn that holds the answer",
    "graceFeat2": "Three layers, three jobs",
    "graceFeat2a": "Memory graph finds candidates via entities, relations, and 2-hop expansion",
    "graceFeat2b": "Compressed records rerank the candidates in two stages",
    "graceFeat2c": "Only raw dialogue, traced by provenance IDs, becomes final evidence",
    "graceFeat3": "Evidence Curation Agent",
    "graceFeat3a": "Searches the raw dialogue with GREP, READ, and VEC tools",
    "graceFeat3b": "Drops irrelevant candidates and recovers missing evidence",
    "graceFeat3c": "Capped at 10 calls; keeps the original context if it fails",
    "graceFeat4": "Results",
    "graceFeat4a": "86.9% on LoCoMo and 80.2% on LongMemEval (OSS-120B)",
    "graceFeat4b": "Beats the prior best method, AMA (77.4% / 69.8%)",
    "graceFeat4c": "A memory-specific rerank instruction lifts evidence recall from 34.5% to 63.4%",
    "faeType": "Enterprise RAG · Jan. 2026—Present",
    "faeSummary": "Built a company-wide internal chatbot giving product, engineering, FAE, and customer-service teams access to product specifications and technical support knowledge.",
    "faeRole": "System architect · Knowledge graph and retrieval",
    "faeFeat1": "Who uses it",
    "faeFeat1a": "Product, engineering, FAE, and customer-service teams",
    "faeFeat1b": "One chat interface for specs and support knowledge",
    "faeFeat1c": "Spec and compatibility lookups drop from 5–10 min to under 30 s",
    "faeFeat2": "Knowledge base",
    "faeFeat2a": "1,000+ product documents unified into one structured base",
    "faeFeat2b": "Standardized models, categories, and spec fields",
    "faeFeat2c": "Specs in MongoDB, product relations in a knowledge graph",
    "faeFeat3": "Identify the product first",
    "faeFeat3a": "Exact model-name and keyword matching comes first",
    "faeFeat3b": "Hybrid BM25 + vector search fills gaps and fixes typos",
    "faeFeat3c": "Answers use only the confirmed product's data, so specs never mix",
    "faeFeat4": "Results",
    "faeFeat4a": "~95% product model identification",
    "faeFeat4b": "97% Top-3 entity-linking hit rate",
    "faeFeat4c": "92% Q&A accuracy on internal test sets",
    "faeProof1": "Q&A accuracy",
    "faeProof2": "lookup time",
    "faeProof3": "Top-3 entity hit",
    "esupportTitle": "FAE Smart Assistant · interactive demo",
    "esupportOpen": "Open in new tab ↗",
    "esupportNote": "Redesigned on top of the deployed system's React frontend: same components and data contract, new visual layer. Replies come from public spec snapshots in the browser; no company backend is connected.",
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
    "laptopFeat1": "Bilingual test data",
    "laptopFeat1a": "Crawls laptop spec pages into structured product data",
    "laptopFeat1b": "Generates EN/ZH Q&A grounded in each model's spec",
    "laptopFeat1c": "An LLM judge validates every Q&A before it joins the golden set",
    "laptopFeat2": "Facts vs. explanations",
    "laptopFeat2a": "Exact hardware values come from a structured fact query",
    "laptopFeat2b": "SKU options are listed from data, never guessed",
    "laptopFeat2c": "Only explanatory questions go to RAG",
    "laptopFeat3": "Hybrid retrieval",
    "laptopFeat3a": "Dense + BM25 search fused with weighted RRF",
    "laptopFeat3b": "Filtered by laptop model and question category",
    "laptopFeat3c": "Qwen3.5-4B generates answers locally in batches",
    "laptopFeat4": "Evaluation",
    "laptopFeat4a": "LLM-as-a-Judge: strict first, lenient only on failure",
    "laptopFeat4b": "Per-question reports, summary CSV, and error analysis",
    "laptopFeat4c": "Ablations switch off the router or RAG on the same golden set",
    "designLabel": "Key design decision",
    "laptopDecision": "Exact hardware values come from structured facts; explanations use retrieved context."
  },
  "zh-TW": {
    "heroLabel": "讓模型在資源有限的裝置上可靠地執行。",
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
    "heroLead": "設計並交付 Edge 代理、長期記憶系統與正式環境中的檢索基礎設施。",
    "downloadResume": "下載履歷",
    "emailMe": "寄信給我 ↗",
    "portraitAlt": "Arthur Wang 在戶外的個人照片",
    "portraitRole": "AI 演算法課長／技術負責人",
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
    "gigabyteRole": "AI 演算法課長／技術負責人",
    "gigabyte1": "帶領 6 項以上 Edge 與企業 AI 產品，涵蓋本地代理、硬體問答、翻譯與會議智慧。",
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
    "gimateType": "Edge 代理 · 2026.02—至今",
    "gimateSummary": "在 Windows 筆電本機執行的 AI 助理：用一句話交代工作，例如查電腦為什麼變慢、分析表格、做簡報或設定提醒，由 18 項內建技能接手完成。",
    "gimateRole": "技術負責人暨專案 PM · 產品規劃、Agent 架構與部署",
    "gimateFeat1": "電腦管家",
    "gimateFeat1a": "查規格、溫度與電池健康",
    "gimateFeat1b": "找出吃資源的程式，確認後關閉",
    "gimateFeat1c": "調整亮度、音量、風扇、RGB 與效能模式",
    "gimateFeat2": "檔案與內容",
    "gimateFeat2a": "摘要檔案、把表格算成圖表",
    "gimateFeat2b": "依主題產出可編輯的 PowerPoint",
    "gimateFeat2c": "以本機模型寫程式與生圖",
    "gimateFeat3": "日常助理",
    "gimateFeat3a": "一句話設定提醒與定期任務",
    "gimateFeat3b": "查天氣、上網搜尋、分析股票",
    "gimateFeat3c": "整理 Windows 通知",
    "gimateFeat4": "外部整合",
    "gimateFeat4a": "搜尋與摘要 Gmail",
    "gimateFeat4b": "查詢 Notion 筆記",
    "gimateFeat4c": "用 Google Maps 找地點與路線",
    "gimateFeat5": "記憶",
    "gimateFeat5a": "記得個人資料與過去對話",
    "gimateFeat5b": "新任務自動帶入相關內容",
    "gimateFeat5c": "記錯了可以直接查看與修正",
    "gimateFeat6": "一個助理，三種通道",
    "gimateFeat6a": "桌面 App：完整介面，任務卡即時進度與操作確認",
    "gimateFeat6b": "Avatar：語音回覆，每日問候與休息提醒",
    "gimateFeat6c": "Telegram：手機遠端下指令，風險操作自動拒絕",
    "gimateNote1": "任務步驟即時顯示",
    "gimateNote2": "風險操作先確認",
    "gimateNote3": "中斷可恢復",
    "gimateNote4": "Qwen3.5-4B 本機執行",
    "gimateNote5": "Electron + FastAPI",
    "gimateProof1": "Skills",
    "gimateProof2": "MCP 服務 · Coder、Creator、HWCTL",
    "graceType": "長期記憶 · 2025.10—2026.07",
    "graceSummary": "讓 AI 助理能回答遠超出上下文長度的長期對話，並以原始對話作為每個回答的證據。第一作者論文，獲 EMNLP 2026 AKBC Runner-Up Award。",
    "graceRole": "第一作者 · 系統設計、檢索與評估",
    "graceFeat1": "要解決的問題",
    "graceFeat1a": "長期對話遠超過模型的上下文長度",
    "graceFeat1b": "摘要會漏掉說話者、時間與條件等細節",
    "graceFeat1c": "相似度檢索常抓到相關、卻不含答案的紀錄",
    "graceFeat2": "三層資料各司其職",
    "graceFeat2a": "記憶圖譜找候選：實體、關係與兩跳擴展",
    "graceFeat2b": "壓縮紀錄負責兩階段重排序",
    "graceFeat2c": "只有可追溯來源的原始對話才當最終證據",
    "graceFeat3": "證據策展 Agent",
    "graceFeat3a": "用 GREP、READ、VEC 回頭搜尋原始對話",
    "graceFeat3b": "移除無關候選，補回漏掉的證據",
    "graceFeat3c": "最多 10 次呼叫，失敗時保留原本的上下文",
    "graceFeat4": "成果",
    "graceFeat4a": "LoCoMo 86.9%、LongMemEval 80.2%（OSS-120B）",
    "graceFeat4b": "超越先前最佳方法 AMA（77.4%／69.8%）",
    "graceFeat4c": "記憶專用的重排序指令，讓證據召回率從 34.5% 提升到 63.4%",
    "faeType": "企業 RAG · 2026.01—至今",
    "faeSummary": "建立全公司內部聊天助理，讓產品、工程、FAE 與客服團隊透過統一介面查詢產品規格與技術支援知識。",
    "faeRole": "系統架構師 · 知識圖譜與檢索",
    "faeFeat1": "誰在用",
    "faeFeat1a": "產品、工程、FAE 與客服團隊",
    "faeFeat1b": "同一個介面查規格與技術支援知識",
    "faeFeat1c": "規格與相容性查找從 5–10 分鐘縮短到 30 秒內",
    "faeFeat2": "知識庫",
    "faeFeat2a": "整合 1,000 份以上產品文件，建成結構化知識庫",
    "faeFeat2b": "標準化產品型號、類別與規格欄位",
    "faeFeat2c": "規格存 MongoDB，產品關係存知識圖譜",
    "faeFeat3": "先辨識產品",
    "faeFeat3a": "先用型號與關鍵字精確比對",
    "faeFeat3b": "BM25＋向量混合搜尋補足，並修正拼錯",
    "faeFeat3c": "只用確認後產品的資料回答，比較時不混用規格",
    "faeFeat4": "成果",
    "faeFeat4a": "型號辨識約 95%",
    "faeFeat4b": "Top-3 實體命中 97%",
    "faeFeat4c": "內部測試集問答準確率 92%",
    "faeProof1": "問答準確率",
    "faeProof2": "查找時間",
    "faeProof3": "Top-3 實體命中",
    "esupportTitle": "FAE Smart Assistant · 互動示範",
    "esupportOpen": "新分頁開啟 ↗",
    "esupportNote": "以上線系統的 React 前端為基礎重新設計：元件與資料格式相同，視覺層重做。回覆由瀏覽器內的公開規格範例產生，未連接公司後端。",
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
    "laptopFeat1": "雙語測試資料",
    "laptopFeat1a": "爬取筆電規格頁，轉成結構化產品資料",
    "laptopFeat1b": "依各機型規格生成中英雙語問答",
    "laptopFeat1c": "LLM 評審逐題驗證後，才納入黃金資料集",
    "laptopFeat2": "數值與解釋分流",
    "laptopFeat2a": "精確硬體數值走結構化事實查詢",
    "laptopFeat2b": "SKU 配置選項直接從資料列出，不靠模型猜",
    "laptopFeat2c": "只有解釋性問題才交給 RAG",
    "laptopFeat3": "混合檢索",
    "laptopFeat3a": "向量＋BM25 搜尋，以加權 RRF 融合",
    "laptopFeat3b": "依機型與問題類別篩選",
    "laptopFeat3c": "Qwen3.5-4B 在本機批次產生回答",
    "laptopFeat4": "評估",
    "laptopFeat4a": "LLM-as-a-Judge：先嚴格評分，失敗才寬鬆評分",
    "laptopFeat4b": "逐題報告、摘要 CSV 與錯誤分析",
    "laptopFeat4c": "消融實驗：同一份黃金資料集上關閉路由或 RAG 比較",
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
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const value = translations[next][element.dataset.i18nTitle];
    if (value) element.setAttribute("title", value);
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
    heroEyebrow: "Agents · Retrieval & memory · LLM evaluation",
    heroLead: "I work on on-device agents and long-term memory: a plan-and-execute architecture that runs on a 4B model, and GRACE-Mem, a memory retrieval system that treats the original dialogue as evidence (EMNLP 2026 AKBC Runner-Up).",
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
    heroEyebrow: "Agent · 檢索與記憶 · LLM 評估",
    heroLead: "專注於 Edge Agent 與長期記憶。設計過 4B 模型可跑的規劃／執行架構，以及以原始對話為證據的記憶檢索系統（GRACE-Mem，EMNLP 2026 AKBC Runner-Up）。",
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
    "paperRead": "Read full paper ↗",
    "paperCode": "GitHub repository ↗",
    "paperFileInfo": "Original manuscript · PDF · 22 pages · 1.3 MB",
    "paperPreview": "Read the paper on this page",
    "paperReaderHint": "You can also open the PDF in a new tab using the link above.",
    "paperFrameTitle": "GRACE-Mem original research manuscript",
    "labMapMemory": "Hybrid graph search → Two-stage reranking → Evidence curation → Raw dialogue context",
    "figuresTitle": "Inside the research",
    "figuresIntro": "Original figures from the manuscript. Open a figure to inspect the details.",
    "figure1Title": "Figure 1 · System architecture",
    "figure1Text": "The full path from dialogue ingestion and graph/vector memory to hybrid retrieval, reranking, evidence curation, and answering.",
    "figure2Title": "Figure 2 · Evidence Curation Agent",
    "figure2Text": "A worked example of GREP / READ / VEC search, provenance validation, and reconstruction of the final raw-evidence context.",
    "figure3Title": "Figure 3 · LongMemEval results",
    "figure3Text": "All three primary answer backbones improve across the plotted evidence-layer configurations; OSS-120B rises from 76.0% to 80.2%.",
    "figure4Title": "Figure 4 · LoCoMo results",
    "figure4Text": "The effect depends on the backbone: OSS-120B’s 87.3% baseline exceeds its 86.9% curated configuration. Curation is not uniformly beneficial.",
    "figure1Alt": "GRACE-Mem architecture: dialogue ingestion, compressed/entity/relation indexes, graph expansion, two-stage reranking, evidence curation, and answer generation.",
    "figure2Alt": "Evidence Curation Agent example tracing GREP, READ, VEC and FINAL, coverage validation, selected source turns, and a grounded age calculation.",
    "figure3Alt": "LongMemEval accuracy, baseline/filter-fetch/validation: OSS-20B 76.2/77.2/77.6; OSS-120B 76.0/79.0/80.2; GPT-4o-mini 69.2/71.8/73.2 percent.",
    "figure4Alt": "LoCoMo accuracy, baseline/filter-fetch/validation: OSS-20B 84.0/82.3/84.6; OSS-120B 87.3/86.1/86.9; GPT-4o-mini 84.2/83.6/85.3 percent.",
    "figureOpen": "View larger ↗",
    "figurePdf": "View original PDF page ↗",
    "figureResults": "Compare the evaluation figures",
    "figureClose": "Close ✕",
    "figureZoom": "Original size",
    "figureFit": "Fit to window",
    "figurePrev": "← Previous",
    "figureNext": "Next →",
    "figureViewer": "Research figure viewer"
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
    "paperRead": "閱讀論文原文 ↗",
    "paperCode": "GitHub 原始碼 ↗",
    "paperFileInfo": "原始研究稿 · PDF · 22 頁 · 1.3 MB",
    "paperPreview": "在頁面閱讀論文",
    "paperReaderHint": "也可以點選上方連結，在新分頁開啟 PDF 原文。",
    "paperFrameTitle": "GRACE-Mem 論文原文",
    "labMapMemory": "混合圖檢索 → 兩階段重排序 → 證據策展 → 原始對話上下文",
    "figuresTitle": "論文中的關鍵圖表",
    "figuresIntro": "直接擷取論文原圖，點選圖片可放大查看細節。",
    "figure1Title": "圖 1 · 系統整體架構",
    "figure1Text": "從對話寫入、圖與向量記憶，到混合檢索、重排序、證據策展與回答生成的完整路徑。",
    "figure2Title": "圖 2 · Evidence Curation Agent",
    "figure2Text": "以實際範例呈現 GREP／READ／VEC 搜尋、來源驗證，以及最終原始證據上下文的重建。",
    "figure3Title": "圖 3 · LongMemEval 結果",
    "figure3Text": "圖中的三個主要回答模型，隨證據處理配置逐步改善；OSS-120B 從 76.0% 提升至 80.2%。",
    "figure4Title": "圖 4 · LoCoMo 結果",
    "figure4Text": "效果依模型而異：OSS-120B 的 baseline 為 87.3%，高於策展配置的 86.9%，顯示策展並非在所有條件下都更好。",
    "figure1Alt": "GRACE-Mem 整體架構：對話寫入、壓縮紀錄／實體／關係索引、圖擴展、兩階段重排序、證據策展與回答生成。",
    "figure2Alt": "Evidence Curation Agent 範例：追蹤 GREP、READ、VEC 與 FINAL，驗證覆蓋範圍、選取原始對話，並據此計算年齡。",
    "figure3Alt": "LongMemEval 準確率，依 baseline／filter-fetch／validation：OSS-20B 76.2／77.2／77.6；OSS-120B 76.0／79.0／80.2；GPT-4o-mini 69.2／71.8／73.2%。",
    "figure4Alt": "LoCoMo 準確率，依 baseline／filter-fetch／validation：OSS-20B 84.0／82.3／84.6；OSS-120B 87.3／86.1／86.9；GPT-4o-mini 84.2／83.6／85.3%。",
    "figureOpen": "點擊放大 ↗",
    "figurePdf": "查看 PDF 原始頁面 ↗",
    "figureResults": "比較實驗結果圖",
    "figureClose": "關閉 ✕",
    "figureZoom": "原始尺寸",
    "figureFit": "適合視窗",
    "figurePrev": "← 上一張",
    "figureNext": "下一張 →",
    "figureViewer": "論文圖表檢視器"
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
document.querySelector('a[href="#portfolio-agent-session"]')?.addEventListener("click", () => {
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
