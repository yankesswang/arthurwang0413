/* Portfolio demo backend: answers the real FAE frontend's /api calls with public spec snapshots.
   No production service is contacted; answers are templated from the data below. */
(() => {
  const PRODUCTS = [
 {
  "name": "B550M AORUS PRO AX",
  "category": "motherboard",
  "aliases": [
   "b550m aorus pro ax",
   "b550m",
   "b550m pro ax"
  ],
  "revision": "1.0",
  "url": "https://www.gigabyte.com/Motherboard/B550M-AORUS-PRO-AX-rev-10/sp",
  "captured": "2026-11-17",
  "specs": {
   "Chipset": "AMD B550",
   "Memory": "DDR4",
   "Socket": "AM4",
   "Form Factor": "Micro ATX",
   "DIMM Slots": "4 (dual channel)"
  }
 },
 {
  "name": "X870E AORUS MASTER",
  "category": "motherboard",
  "aliases": [
   "x870e aorus master",
   "x870e master",
   "x870e"
  ],
  "revision": "",
  "url": "https://www.gigabyte.com/Motherboard/X870E-AORUS-MASTER/sp",
  "captured": "2026-11-17",
  "specs": {
   "Chipset": "AMD X870E",
   "Memory": "DDR5",
   "Socket": "AM5",
   "Form Factor": "E-ATX",
   "DIMM Slots": "4 (dual channel)"
  }
 },
 {
  "name": "Z790 AORUS ELITE AX",
  "category": "motherboard",
  "aliases": [
   "z790 aorus elite ax",
   "z790 elite ax",
   "z790"
  ],
  "revision": "1.0",
  "url": "https://www.gigabyte.com/Motherboard/Z790-AORUS-ELITE-AX-rev-10/sp",
  "captured": "2026-11-17",
  "specs": {
   "Chipset": "Intel Z790",
   "Memory": "DDR5",
   "Socket": "LGA1700",
   "Form Factor": "ATX",
   "DIMM Slots": "4 (dual channel)"
  }
 },
 {
  "name": "AORUS ELITE 16 BWH",
  "category": "laptop",
  "aliases": [
   "aorus elite 16 bwh",
   "aorus elite 16",
   "elite16"
  ],
  "revision": "",
  "url": "https://www.gigabyte.com/Laptop/AORUS-ELITE-16-AE6H",
  "captured": "2026-06-26",
  "specs": {
   "CPU": "Intel® Core™ Ultra 9 Processor 275HX (36MB cache, up to 5.4 GHz, 24 cores, 24 threads)",
   "System Memory": "Up to 64GB DDR5 5600MHz\n* 2x SO-DIMM sockets for expansion",
   "Display": "16\" 16:10\nIPS WQXGA (2560×1600) 165Hz, 3ms, sRGB 100%, 400nits (typical)\nNVIDIA® G-SYNC®\nNVIDIA® Advanced Optimus\nPantone® Validated\nTÜV Rheinland Low Blue Light\nDolby Vision®",
   "Video Graphics": "NVIDIA® GeForce RTX™ 5070 Laptop GPU\n8GB GDDR7\n115W Maximum Graphics Power with Dynamic Boost*\nAI Boost : 1625 MHz (1425 MHz Boost Clock + 200 MHz OC)*\n*May vary by scenario",
   "Battery": "Li-ion 99Wh",
   "Adapter": "240W AC Adapter"
  }
 },
 {
  "name": "AORUS MASTER 16 BXH",
  "category": "laptop",
  "aliases": [
   "aorus master 16 bxh",
   "aorus master 16",
   "master16"
  ],
  "revision": "",
  "url": "https://www.gigabyte.com/Laptop/AORUS-MASTER-16-AM6H",
  "captured": "2026-06-26",
  "specs": {
   "CPU": "Intel® Core™ Ultra 9 Processor 275HX (36MB cache, up to 5.4 GHz, 24 cores, 24 threads)",
   "System Memory": "Up to 64GB DDR5 5600MHz\n* 2x SO-DIMM sockets for expansion",
   "Display": "16\" 16:10\nOLED WQXGA (2560×1600) 240Hz, 1ms, DCI-P3 100%, 500nits (peak), 1,000,000:1\nNVIDIA® G-SYNC®\nNVIDIA® Advanced Optimus\nVESA DisplayHDR True Black 500\nVESA ClearMR 10000\nPantone® Validated\nTÜV Rheinland Low Blue Light\nDolby Vision®",
   "Video Graphics": "NVIDIA® GeForce RTX™ 5070 Ti Laptop GPU\n12GB GDDR7\n140W Maximum Graphics Power with Dynamic Boost*\nAI Boost : 1962 MHz (1762 MHz Boost Clock + 200 MHz OC)*\n*May vary by scenario",
   "Battery": "Li-ion 99Wh",
   "Adapter": "330W AC Adapter"
  }
 }
];
  const TOPICS = [
    [/memory|ram|ddr|dimm|記憶體/i, ["Memory", "System Memory", "DIMM Slots"]],
    [/chipset|晶片組/i, ["Chipset"]],
    [/socket|cpu|processor|處理器|腳位/i, ["Socket", "CPU", "Chipset"]],
    [/gpu|graphics|vga|顯卡|顯示卡/i, ["Video Graphics"]],
    [/adapter|power|watt|變壓器|電源/i, ["Adapter"]],
    [/battery|電池/i, ["Battery"]],
    [/display|screen|panel|螢幕/i, ["Display"]],
    [/form factor|size|尺寸/i, ["Form Factor"]],
  ];
  /* Product photos live in the portfolio (public product imagery, see assets/products/README.md). */
  const IMAGES = { "B550M AORUS PRO AX": "b550", "X870E AORUS MASTER": "x870", "Z790 AORUS ELITE AX": "z790", "AORUS ELITE 16 BWH": "elite", "AORUS MASTER 16 BXH": "master" };
  const imageFor = p => IMAGES[p.name] ? `../assets/products/${IMAGES[p.name]}.webp` : null;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const json = body => new Response(JSON.stringify(body), { status: 200, headers: { "Content-Type": "application/json" } });
  const findProducts = text => {
    const q = text.toLowerCase();
    const hits = PRODUCTS.filter(p => p.aliases.some(a => q.includes(a)));
    return hits.sort((a, b) => q.indexOf(a.aliases.find(x => q.includes(x))) - q.indexOf(b.aliases.find(x => q.includes(x))));
  };
  const fieldsFor = (text, p) => {
    const wanted = [];
    TOPICS.forEach(([re, keys]) => { if (re.test(text)) keys.forEach(k => { if (p.specs[k] && !wanted.includes(k)) wanted.push(k); }); });
    return wanted.length ? wanted : Object.keys(p.specs);
  };
  const oneLine = v => String(v).split("\n")[0].replace(/\s*\*$/, "");
  const label = p => p.name + (p.revision ? ` (rev. ${p.revision})` : "");
  const context = p => [`# Product: ${label(p)}`, `Category: ${p.category}`, `URL: ${p.url}`, `Snapshot: ${p.captured}`, "",
    ...Object.entries(p.specs).map(([k, v]) => `## ${k}: ${String(v).replace(/\n/g, "\n   ")}`)].join("\n");

  /* Agent trace: the pipeline steps the real system runs (language → product ID → graph routing →
     record retrieval → checks → answer), rendered as a step list. It describes what was looked up
     and which rule fired; it is not hidden model reasoning. */
  const isZh = q => /[\u3400-\u9fff]/.test(q);
  const chip = (p, via) => ({ name: p.name, image: imageFor(p), via });
  const howMatched = (q, p) => {
    const lq = q.toLowerCase(); const full = p.name.toLowerCase();
    if (lq.includes(full)) return "exact name";
    const a = p.aliases.find(x => lq.includes(x)); return a ? `alias “${a}”` : "hybrid match";
  };
  const T = (step, detail, extra = {}) => ({ step, detail, status: "ok", ...extra });
  const baseTrace = (q, ps, sections) => [
    T("Detect language", isZh(q) ? "zh-TW · answer in Traditional Chinese" : "en · answer in English"),
    T("Identify products", ps.length ? `${ps.length} matched with FlashText before hybrid search` : "no product name matched",
      { products: ps.map(p => chip(p, howMatched(q, p))), status: ps.length ? "ok" : "stop" }),
    ...(ps.length ? [
      T("Route to knowledge graph", [...new Set(ps.map(p => `${p.category}_kg`))].join(" · ") + ` · ${ps.length} product record${ps.length > 1 ? "s" : ""} kept separate`),
      T("Retrieve spec sections", sections.join(" · ")),
    ] : []),
  ];

  /* Authored showcase answers for the suggested questions. Every value comes from the public
     snapshots in PRODUCTS (plus socket / form factor), and each one demonstrates one behaviour
     of the real pipeline: platform reasoning, shorthand resolution, ambiguity, refusing to guess. */
  const byName = n => PRODUCTS.find(p => p.name === n);
  const pack = (text, names) => {
    const ps = names.map(byName);
    return {
      original: text,
      identified_models: ps.map(p => p.name),
      kg_contexts: ps.map(p => ({ product: p.name, category: p.category, graph: `${p.category}_kg`, product_url: p.url, image: imageFor(p), context: context(p) })),
      references: [], citations: ps.map(p => p.url)
    };
  };
  const SCENARIOS = [
    { test: q => /b550/i.test(q) && /x870/i.test(q) && /(ram|memory|cpu|keep|reuse|carry)/i.test(q),
      trace: q => [...baseTrace(q, [byName("B550M AORUS PRO AX"), byName("X870E AORUS MASTER")], ["Memory", "Socket", "Form Factor"]),
        T("Compare platforms", "DDR4 ≠ DDR5 · AM4 ≠ AM5 · Micro ATX → E-ATX", { status: "warn" }),
        T("Compose answer", "verdict first · what carries over · what to quote")],
      reply: () => pack(
"No on both counts. This is a platform change, not a board swap.\n\n" +
"• Memory: the B550M AORUS PRO AX takes DDR4; the X870E AORUS MASTER takes DDR5. The modules are keyed differently and will not seat.\n" +
"• CPU: socket AM4 → AM5. An AM4 Ryzen does not fit the new board.\n" +
"• Case: check it before quoting. The X870E AORUS MASTER is E-ATX, while the B550M AORUS PRO AX is Micro ATX, so a Micro ATX case will not take the new board.\n\n" +
"What carries over: storage and the graphics card.\n" +
"Quote for the customer: a DDR5 kit, an AM5 processor, and an E-ATX-capable case if their current one is Micro ATX.",
        ["B550M AORUS PRO AX", "X870E AORUS MASTER"]) },
    { test: q => /elite\s?16/i.test(q) && /master\s?16/i.test(q),
      trace: q => [...baseTrace(q, [byName("AORUS ELITE 16 BWH"), byName("AORUS MASTER 16 BXH")], ["Video Graphics", "Display", "Adapter", "CPU", "System Memory", "Battery"]),
        T("Diff the two records", "same: CPU · memory · battery — differs: GPU · display · adapter"),
        T("Apply use case", "4K editing → weight VRAM and colour gamut"),
        T("Compose answer", "differences, recommendation, SKU caveat (snapshot 2026-06-26)")],
      reply: () => pack(
"兩台的 CPU、記憶體上限與電池相同，差異集中在顯示卡與螢幕：\n\n" +
"• 顯示卡：ELITE 16 為 RTX 5070 Laptop GPU（8GB GDDR7、最高 115W）；MASTER 16 為 RTX 5070 Ti Laptop GPU（12GB GDDR7、最高 140W）。\n" +
"• 螢幕：ELITE 16 為 IPS 165Hz、sRGB 100%；MASTER 16 為 OLED 240Hz、DCI-P3 100%，並通過 VESA DisplayHDR True Black 500。\n" +
"• 變壓器：240W 對 330W。\n" +
"• 相同：Intel Core Ultra 9 275HX、最高 64GB DDR5 5600MHz（2 條 SO-DIMM）、99Wh 電池。\n\n" +
"建議：4K 剪輯吃顯示記憶體與色域，MASTER 16 的 12GB VRAM 與 DCI-P3 OLED 面板較合適；預算有限可選 ELITE 16，並把記憶體加到 64GB。\n" +
"規格取自 2026-06-26 公開規格快照，實際配置依 SKU 而定。",
        ["AORUS ELITE 16 BWH", "AORUS MASTER 16 BXH"]) },
    { test: q => /aorus master/i.test(q) && !/x870|master\s?16/i.test(q),
      trace: q => [
        T("Detect language", "en · answer in English"),
        T("Identify products", "“AORUS MASTER” is a partial name · 2 candidates in different categories",
          { status: "warn", products: [chip(byName("X870E AORUS MASTER"), "partial · motherboard"), chip(byName("AORUS MASTER 16 BXH"), "partial · laptop")] }),
        T("Ambiguity rule", "categories differ → do not merge specs; answer per product and ask which one", { status: "warn" }),
        T("Retrieve spec sections", "Memory (motherboard_kg) · System Memory (laptop_kg)"),
        T("Compose answer", "both DDR5 · DIMM vs SO-DIMM · clarifying question")],
      reply: () => pack(
"“AORUS MASTER” matches two products in different categories, so I'm answering each one separately instead of merging their specs:\n\n" +
"• X870E AORUS MASTER (motherboard): DDR5, 4 DIMM slots, dual channel.\n" +
"• AORUS MASTER 16 BXH (laptop): DDR5 5600MHz, 2 SO-DIMM sockets, up to 64GB.\n\n" +
"Both support DDR5, but the module form differs: desktop DIMM versus laptop SO-DIMM, and they are not interchangeable.\n" +
"Which one does the customer have?",
        ["X870E AORUS MASTER", "AORUS MASTER 16 BXH"]) },
    { test: q => /z890/i.test(q),
      trace: q => [
        T("Detect language", "en · answer in English"),
        T("Identify products", "“Z890 AORUS ELITE WIFI7” · no exact or alias match · hybrid search below threshold", { status: "stop" }),
        T("Nearest indexed record", "Z790 AORUS ELITE AX — LGA1700, not the Z890's LGA1851", { status: "warn", products: [chip(byName("Z790 AORUS ELITE AX"), "nearest neighbour, rejected")] }),
        T("Grounding rule", "no record for the asked product → refuse to guess, suggest next step", { status: "stop" })],
      reply: () => ({
        original:
"Z890 AORUS ELITE WIFI7 is not in the knowledge base, so I won't guess its memory limit.\n\n" +
"The closest indexed board is the Z790 AORUS ELITE AX (Intel Z790, LGA1700, DDR5). It is a different platform, though: Z890 uses socket LGA1851, so the Z790 values should not be quoted for it.\n\n" +
"Next step: check the Z890 product page, or ask for the model to be added to the index.",
        identified_models: [], kg_contexts: [], references: [], citations: [] }) },
  ];
  function answer(text) {
    const hit = SCENARIOS.find(s => s.test(text));
    if (hit) return { ...hit.reply(), trace: hit.trace(text) };
    const res = genericAnswer(text);
    const ps = findProducts(text);
    const sections = ps.length ? [...new Set(ps.flatMap(p => fieldsFor(text, p)))] : [];
    res.trace = ps.length
      ? [...baseTrace(text, ps, sections), T("Compose answer", `grounded in ${ps.length} record${ps.length > 1 ? "s" : ""} · values quoted from the snapshot`)]
      : [...baseTrace(text, [], []), T("Grounding rule", "no product identified → ask for the model name instead of answering", { status: "stop" })];
    return res;
  }
  function genericAnswer(text) {
    const found = findProducts(text);
    if (!found.length) return {
      original: "I couldn't identify a product model in your question. Please include the full model name, for example \"X870E AORUS MASTER\" or \"AORUS ELITE 16 BWH\".",
      identified_models: [], kg_contexts: [], references: [], citations: []
    };
    const lines = found.map(p => `• ${label(p)} — ` + fieldsFor(text, p).map(k => `${k}: ${oneLine(p.specs[k])}`).join("; ") + ".");
    let lead = found.length > 1 ? "Here is how the products compare:" : `Here is what the specification data says for ${found[0].name}:`;
    let tail = "";
    const mem = found.map(p => (p.specs.Memory || p.specs["System Memory"] || "").match(/DDR\d/)?.[0]).filter(Boolean);
    if (found.length > 1 && /reuse|compatible|相容|沿用/i.test(text) && new Set(mem).size > 1)
      tail = `\n\n${mem[0]} modules from the ${found[0].name} cannot be reused on the ${found[1].name}; the boards use different memory generations.`;
    else if (found.some(p => p.category === "laptop"))
      tail = "\n\nLaptop values come from the public specification snapshot dated " + found.find(p => p.category === "laptop").captured + "; configurations can vary by SKU.";
    return {
      original: `${lead}\n\n${lines.join("\n")}${tail}`,
      identified_models: found.map(p => p.name),
      kg_contexts: found.map(p => ({ product: p.name, category: p.category, graph: `${p.category}_kg`, product_url: p.url, image: imageFor(p), context: context(p) })),
      references: [], citations: found.map(p => p.url)
    };
  }
  function specs(name) {
    const p = findProducts(String(name || ""))[0] || PRODUCTS.find(x => x.name.toLowerCase() === String(name || "").toLowerCase());
    if (!p) return null;
    return { product: { name: label(p), model: p.name, category: p.category, source: p.url, snapshot_date: p.captured, image: imageFor(p) }, specifications: p.specs };
  }
  const realFetch = window.fetch.bind(window);
  window.fetch = async (input, init = {}) => {
    const url = typeof input === "string" ? input : input.url;
    const m = url.match(/\/api\/([^?]+)/);
    if (!m) return realFetch(input, init);
    const body = init.body ? JSON.parse(init.body) : {};
    switch (m[1]) {
      case "start_chat": await sleep(150); return json({ session_id: Math.random().toString(16).slice(2, 10) });
      case "terminate_session": return json({ status: "terminated" });
      case "input": await sleep(2300); return json(answer(body.user_input || ""));
      case "langid": return json({ language: "en" });
      case "translate": return json({ translated: body.text });
      case "autocomplete": {
        const q = String(body.query || "").toLowerCase();
        return json(PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.aliases.some(a => a.includes(q))).map(p => p.name));
      }
      case "specs": { await sleep(300); const s = specs(body.name); return s ? json(s) : new Response("not found", { status: 404 }); }
      case "FAE_QA": return json({ items: [], total: 0 });
      default: return json({});
    }
  };
})();

/* Portfolio embed: keep auto-scroll inside the app's own scroll containers so the host page never jumps. */
Element.prototype.scrollIntoView = function () {
  if (!document.querySelector(".user-message")) return; // leave the welcome screen at the top
  for (let el = this.parentElement; el; el = el.parentElement) {
    const oy = getComputedStyle(el).overflowY;
    if ((oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      return;
    }
  }
};
