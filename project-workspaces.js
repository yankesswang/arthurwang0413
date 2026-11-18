/* Product workspaces derived from the local e-support and nb_spec_data_pipeline code.
 * All support conversations and evaluation results are authored preview fixtures.
 * Notebook specification text is a dated, public-product snapshot; no service is called.
 */
(() => {
  const T = (en, zh) => document.documentElement.lang === "zh-Hant" ? zh : en;
  const E = value => String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const icons = {
    chat:'<path d="M21 11a8 8 0 0 1-8 8H5l-4 3 2-7a8 8 0 1 1 18-4Z"/><path d="M7 9h8M7 13h5"/>',
    book:'<path d="M12 5C8 2 4 3 2 4v15c3-2 7-2 10 0 3-2 7-2 10 0V4c-3-2-7-2-10 1Zm0 0v14"/>',
    grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    chip:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v5m6-5v5M9 18v5m6-5v5M1 9h5m-5 6h5m12-6h5m-5 6h5M10 10h4v4h-4Z"/>',
    send:'<path d="m3 3 19 9-19 9 4-9Zm4 9h15"/>',
    arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',
    check:'<path d="m5 12 4 4L20 5"/>',
    file:'<path d="M14 3H5v18h14V8Zm0 0v5h5M8 12h8m-8 4h6"/>',
    search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',
    chart:'<path d="M4 3v17h17M8 15l4-5 4 2 5-7"/>',
    download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
    plus:'<path d="M12 5v14M5 12h14"/>'
  };
  const I = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.file}</svg>`;
  const B = (action, label, style="", extra="") => `<button type="button" class="ws-button ${style}" data-ws-action="${action}" ${extra}>${label}</button>`;
  const tag = (text,tone="") => `<span class="ws-tag ${tone}">${E(text)}</span>`;
  const opts = (entries, selected) => entries.map(([key,label])=>`<option value="${E(key)}" ${key===selected?"selected":""}>${E(label)}</option>`).join("");
  const select = (key, label, entries, value) => `<label class="ws-field"><span>${E(label)}</span><select data-ws-field="${key}" aria-label="${E(label)}">${opts(entries,value)}</select></label>`;
  const field = (key,label,value,type="text") => `<label class="ws-field"><span>${E(label)}</span><input data-ws-field="${key}" type="${type}" value="${E(value)}" ${type==="text"?'maxlength="240"':""}></label>`;
  const standalone = document.body.classList.contains("workspace-page");
  const topbar = (brand,sub,mark) => {
    const key=mark==="e"?"knowledge":"laptop", heading=standalone?"h1":"h4";
    return `<header class="ws-topbar"><div class="ws-brand"><span class="ws-brand-mark">${mark}</span><${heading}>${brand}</${heading}><span class="ws-top-divider"></span><span>${sub}</span></div><div class="ws-top-actions">${standalone?`<a class="ws-back" href="index.html#system-${key}">${T("← Portfolio","← 返回作品集")}</a>${B("language",T("中文","English"),"ws-language")}`:`${tag(T("Product preview","產品預覽"))}<a class="ws-expand" href="workspace.html?app=${key}">${T("Open workspace ↗","進入完整工作台 ↗")}</a>`}</div></header>`;
  };
  const foot = repo => `<footer class="ws-footer"><span><i></i>${T("Portfolio preview · sample data · no backend connected","作品預覽 · 範例資料 · 未連接後端")}</span><span>${repo==="e-support"?"E-Support":"NB Spec"}</span></footer>`;
  function knowledge(){return window.SupportWorkspace.render({topbar,foot});}

  // NOTEBOOK_MODELS is inserted from a narrowly selected public specification snapshot.
  const notebookModels = {
  "elite": {
    "name": "AORUS ELITE 16 BWH",
    "source": "https://www.gigabyte.com/Laptop/AORUS-ELITE-16-AE6H",
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
  "master": {
    "name": "AORUS MASTER 16 BXH",
    "source": "https://www.gigabyte.com/Laptop/AORUS-MASTER-16-AM6H",
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
};
  const ns={view:"chat",model:"elite",topic:"memory",draft:"",custom:"",unmatched:false,debug:"retrieval",language:"ch",category:"specs",verdict:"all",selected:"memory",notice:"",included:true};
  const nbTopics={memory:{field:"System Memory",q:()=>T("What is the maximum memory capacity?","記憶體最大支援容量是多少？")},display:{field:"Display",q:()=>T("What display does this model use?","這台筆電使用什麼螢幕？")},gpu:{field:"Video Graphics",q:()=>T("Which graphics card does it have?","這台筆電配備哪一款顯示卡？")},adapter:{field:"Adapter",q:()=>T("What power adapter does it use?","這台筆電使用幾瓦的變壓器？")}};
  function nbAnswer(){const m=notebookModels[ns.model];return m.specs[nbTopics[ns.topic].field];}
  function nbInspector(){const m=notebookModels[ns.model];return `<aside class="nb-debug"><div class="nb-debug-heading"><span>${I("grid")} ${T("Pipeline inspector","檢索檢視")}</span>${tag(T("Snapshot","快照"))}</div><div class="ws-inspector-tabs" role="group" aria-label="${T("Notebook inspector","筆電問答檢視")}">${B("debug:retrieval",T("Retrieved docs","檢索文件"),ns.debug==="retrieval"?"active":"",`aria-pressed="${ns.debug==="retrieval"}"`)}${B("debug:query",T("Query & memory","查詢與記憶"),ns.debug==="query"?"active":"",`aria-pressed="${ns.debug==="query"}"`)}</div><div class="nb-debug-body">${ns.debug==="retrieval"?`<span class="ws-eyebrow">${T("SELECTED EVIDENCE","已選證據")}</span><div class="nb-evidence"><span>${I("file")} golden_spec</span><h6>${m.name}</h6><div class="nb-debug-tags">${tag("specs")}${tag(nbTopics[ns.topic].field)}</div><pre>${E(ns.unmatched?T("No matching preview record","沒有符合的範例紀錄"):nbAnswer())}</pre></div><div class="nb-debug-kv"><span>spec_name</span><strong>${m.name}</strong><span>category</span><strong>specs</strong><span>feature</span><strong>${nbTopics[ns.topic].field}</strong><span>captured</span><strong>${m.captured}</strong></div><a href="${m.source}" target="_blank" rel="noopener noreferrer" class="nb-product-link">${T("Product source page ↗","產品資料來源 ↗")}</a>`:`<span class="ws-eyebrow">QUERY TRACE / PREVIEW</span><div class="nb-debug-kv"><span>Language</span><strong>${T("en","ch")}</strong><span>Router intent</span><strong>${ns.unmatched?"unmatched":"spec_fact"}</strong><span>Model filter</span><strong>${m.name}</strong><span>Attribute</span><strong>${nbTopics[ns.topic].field}</strong></div><details class="nb-query-detail" open><summary>${T("Raw → normalized","原始 → 正規化")}</summary><pre>${E(ns.custom||nbTopics[ns.topic].q())}\n↓\nmodel=${m.name}\nfeature=${nbTopics[ns.topic].field}</pre></details><p>${T("The original debug UI also exposes topic memory, query rewrites, and stage timings. This preview shows a fixed query trace; it does not report measured inference latency.","原始除錯介面另有主題記憶、查詢重寫與階段耗時；此處展示固定查詢軌跡，未呈現實測推論時間。")}</p>`}</div></aside>`;}
  function nbChat(){const m=notebookModels[ns.model];return `<div class="nb-chat-layout"><div class="ws-chat-column">${window.WorkspaceMedia.notebook(ns.model,m)}<div class="ws-chat-scroll"><div class="ws-user-message"><span>${T("You","你")}</span><p>${E(ns.custom||nbTopics[ns.topic].q())}</p></div><div class="ws-assistant-message"><span class="ws-assistant-avatar">N</span><div><div class="ws-message-meta"><strong>NB Spec</strong><span>${T("Specification assistant","規格問答助理")}</span></div><p>${ns.unmatched?T("This preview has no matching record. Try memory, display, GPU, or adapter questions.","此預覽沒有對應紀錄。可嘗試記憶體、螢幕、顯示卡或變壓器問題。"):T(`For ${m.name}, the specification snapshot lists:`,`${m.name} 的規格快照記載：`)}</p>${!ns.unmatched?`${window.WorkspaceMedia.diagram(ns.topic,true)}<div class="nb-fact-answer"><span>${nbTopics[ns.topic].field}</span><p>${E(nbAnswer())}</p></div><p class="nb-answer-scope">${T("A specification limit is not the installed configuration. Regional and SKU configurations may differ.","規格上限不等於目前安裝容量；不同區域與 SKU 配置可能不同。")}</p>${B("debug:retrieval",`${I("file")}${T("View evidence","查看依據")}`,"ws-citation")}`:""}</div></div></div><div class="ws-compose-wrap"><div class="ws-suggestions">${Object.entries(nbTopics).filter(([key])=>key!==ns.topic).map(([key,v])=>B(`ask:${key}`,E(v.q()),"ws-suggestion")).join("")}</div><form class="ws-composer" data-ws-form="send"><label class="ws-sr-only" for="notebook-message">${T("Notebook question","筆電規格問題")}</label><input id="notebook-message" data-ws-field="draft" maxlength="600" value="${E(ns.draft)}" placeholder="${T("Ask about this notebook…","詢問這台筆電的規格…")}" autocomplete="off"><button type="submit" class="ws-send" aria-label="${T("Send notebook question","送出筆電規格問題")}">${I("send")}</button></form><span class="ws-compose-note">${T("Enter to send · Answers reference the selected product snapshot","Enter 送出 · 回答依據所選產品的規格快照")}</span></div></div>${nbInspector()}</div>`;}
  function evaluationRows(){const m=notebookModels[ns.model],zh=ns.language==="ch";return [
    {id:"memory",category:"specs",included:true,q:zh?"記憶體最高可擴充到多少？":"What is the maximum supported memory?",gt:"Up to 64GB DDR5 5600MHz",answer:"Up to 64GB DDR5 5600MHz",pass:true,level:"STRICT",reason:()=>T("The expected limit and memory type are retained.","保留預期的容量上限與記憶體類型。")},
    {id:"adapter",category:"specs",included:true,q:zh?"原廠變壓器的功率是多少？":"What is the adapter wattage?",gt:m.specs.Adapter,answer:ns.model==="elite"?"It uses a 240-watt power adapter.":"It uses a 330-watt power adapter.",pass:true,level:"LENIENT",reason:()=>T("Equivalent wording retains the expected wattage.","不同表述仍保留預期的瓦數。")},
    {id:"display",category:"specs",included:true,q:zh?"螢幕的更新率是多少？":"What is the display refresh rate?",gt:ns.model==="elite"?"165 Hz":"240 Hz",answer:"144 Hz",pass:false,level:"LENIENT",reason:()=>T("The generated refresh rate differs from the reference.","生成的更新率與參考答案不符。")},
    {id:"installed",category:"specs",included:false,q:zh?"這台目前安裝了多少記憶體？":"How much memory is installed right now?",gt:zh?"需查詢實際裝置配置":"Requires the installed device configuration",answer:"64 GB",pass:false,level:"LENIENT",reason:()=>T("A maximum supported capacity cannot establish installed memory.","不能用最大支援容量推論實際安裝容量。")},
    {id:"general",category:"general",included:true,q:zh?"如何確認完整筆電型號？":"How can I identify the full notebook model?",gt:zh?"查閱裝置標籤或系統資訊":"Check the device label or system information",answer:zh?"可查閱裝置標籤或系統資訊。":"Check the device label or system information.",pass:true,level:"STRICT",reason:()=>T("The answer preserves both identification methods.","回答保留兩種型號確認方式。")},
    {id:"gimate",category:"gimate",included:true,q:zh?"可以直接把規格上限當成已安裝容量嗎？":"Can a supported limit be treated as installed capacity?",gt:zh?"不可以，需確認裝置配置":"No; verify the device configuration",answer:zh?"需先確認裝置的實際配置。":"Verify the actual device configuration first.",pass:true,level:"LENIENT",reason:()=>T("The required configuration check is retained.","保留確認實際裝置配置的前提。")}
  ];}
  function filteredEval(){return evaluationRows().filter(r=>(ns.category==="all"||r.category===ns.category)&&(!ns.included||r.category!=="specs"||r.included)&&(ns.verdict==="all"||(ns.verdict==="pass"?r.pass:!r.pass)));}
  function nbEvaluation(){
    const rows=filteredEval(),correct=rows.filter(r=>r.pass).length;const selected=rows.find(r=>r.id===ns.selected)||rows[0];if(selected)ns.selected=selected.id;
    return `<div class="nb-evaluation"><div class="nb-report-heading"><div><span class="ws-eyebrow">EXPERIMENT / PORTFOLIO_PREVIEW</span><h5>${T("Answer quality","回答品質")}</h5><p>${T("Inspect verdicts across questions, languages, and categories.","依問題、語言與資料類別檢視評估結果。")}</p></div>${B("export",`${I("download")} CSV`,"ws-button-outline")}</div><div class="nb-report-scope">${I("file")}<span>${T("Authored sample report · verdicts illustrate STRICT → LENIENT fallback; no LLM judge was run.","編寫的範例報表 · 呈現 STRICT → LENIENT 回退結果，未實際執行 LLM Judge。")}</span></div><div class="nb-eval-filters">${select("language",T("Dataset language","資料語言"),[["ch","中文 / CH"],["en","English / EN"]],ns.language)}${select("category",T("Category","類別"),[["specs","specs"],["general","general"],["gimate","gimate"],["all",T("All categories","所有類別")]],ns.category)}${select("verdict",T("Verdict","判定"),[["all",T("All results","所有結果")],["pass","PASS"],["fail","FAIL"]],ns.verdict)}<label class="nb-checkbox"><input type="checkbox" data-ws-field="included" ${ns.included?"checked":""}>spec_included = 1</label></div><div class="nb-report-metrics"><div><span>${T("Questions","題數")}</span><strong>${rows.length.toString().padStart(2,"0")}</strong></div><div><span>${T("Correct","正確")}</span><strong>${correct.toString().padStart(2,"0")}<small> / ${rows.length}</small></strong></div><div><span>${T("Accuracy · sample subset","正確率 · 範例子集")}</span><strong>${rows.length?Math.round(correct/rows.length*100):0}<small>%</small></strong><div class="nb-mini-bar"><i style="width:${rows.length?correct/rows.length*100:0}%"></i></div></div></div><div class="nb-report-grid"><div class="ws-table-wrap" tabindex="0" role="region" aria-label="${T("Evaluation results table","評估結果資料表")}"><table><thead><tr>${[T("Question","問題"),T("Ground truth","參考答案"),T("Generated answer","生成回答"),T("Verdict","判定")].map(x=>`<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr class="${r.id===ns.selected?"ws-selected-row":""}"><td>${B(`row:${r.id}`,E(r.q),"ws-table-link")}</td><td>${E(r.gt)}</td><td>${E(r.answer)}</td><td>${tag(r.pass?"PASS":"FAIL",r.pass?"ws-green":"ws-red")}<small class="nb-judge-level">${r.level}</small></td></tr>`).join("")||`<tr><td colspan="4" class="ws-empty">${T("No results match. Choose all results or another category.","沒有符合的結果，請切換判定或資料類別。")}</td></tr>`}</tbody></table></div><aside class="nb-verdict-inspector"><span class="ws-eyebrow">VERDICT DETAILS</span>${selected?`<h6>${E(selected.q)}</h6>${tag(selected.pass?"PASS":"FAIL",selected.pass?"ws-green":"ws-red")}<dl><dt>judge_level</dt><dd>${selected.level}</dd><dt>judge_response</dt><dd>${selected.pass?"True":"False"}</dd><dt>language</dt><dd>${ns.language}</dd><dt>data_type</dt><dd>${selected.category}</dd></dl><p>${selected.reason()}</p>`:`<p>${T("Select another filter to inspect a result.","請切換篩選條件以查看結果。")}</p>`}</aside></div><div class="nb-report-bottom"><span>qwen3-4b-2507 <b>→</b> gpt-oss-20b <small>${T("reference pipeline","原專案流程")}</small></span><span role="status">${E(ns.notice)}</span></div></div>`;
  }
  function laptop(){return `<div class="product-workspace notebook-workspace">${topbar("NB SPEC",T("Assistant & evaluation","問答與評估"),"N")}<div class="nb-workspace-bar"><div class="nb-view-switch" role="group" aria-label="${T("Notebook workspace view","筆電工作台檢視")}">${B("view:chat",`${I("chat")}${T("Assistant","問答助理")}`,ns.view==="chat"?"active":"",`aria-pressed="${ns.view==="chat"}"`)}${B("view:evaluation",`${I("chart")}${T("Evaluation","評估報表")}`,ns.view==="evaluation"?"active":"",`aria-pressed="${ns.view==="evaluation"}"`)}</div>${select("model",T("Notebook model","筆電型號"),Object.entries(notebookModels).map(([key,v])=>[key,v.name]),ns.model)}</div>${ns.view==="chat"?nbChat():nbEvaluation()}${foot("nb_spec_data_pipeline")}</div>`;}
  const classify = (text, notebook) => {
    const patterns=notebook?[["memory",/記憶|memory|ram\b|ddr/i],["display",/螢幕|display|screen|refresh|更新率/i],["gpu",/顯示卡|graphics|gpu|rtx/i],["adapter",/變壓|adapter|watt|電源/i]]:[["bios",/bios|韌體|firmware/i],["memory",/記憶|memory|ram\b|相容/i],["display",/畫面|display|boot|screen|開機/i]];
    return patterns.find(([,pattern])=>pattern.test(text))?.[0];
  };
  function mount(root, render){
    const key=root.dataset.systemDemo;
    if(key==="knowledge"){window.SupportWorkspace.mount(root,render);return;}
    const s=ns;
    const refresh = selector => {render();if(selector)root.querySelector(selector)?.focus({preventScroll:true});};
    function ask(topic,custom=""){s.topic=topic||s.topic;s.custom=custom;s.unmatched=!topic;s.draft="";refresh('[data-ws-field="draft"]');}
    root.addEventListener("input",event=>{
      const name=event.target.dataset.wsField;if(!name)return;s[name]=event.target.value;
      if(name==="review"){s.saved=false;s.reviewError=false;const feedback=root.querySelector(".ws-feedback");if(feedback)feedback.textContent=T("Unsaved changes in this preview.","本次預覽中有尚未儲存的修訂。");}
    });
    root.addEventListener("change",event=>{
      const name=event.target.dataset.wsField;if(!name)return;
      s[name]=event.target.type==="checkbox"?event.target.checked:event.target.value;
      if(event.target.tagName==="SELECT"||event.target.type==="checkbox"){if(key==="laptop"){s.notice="";s.custom="";s.unmatched=false;}refresh(`[data-ws-field="${name}"]`);}
    });
    root.addEventListener("submit",event=>{
      const form=event.target.dataset.wsForm;if(!form)return;event.preventDefault();
      if(form==="send"){const text=s.draft.trim();if(!text)return;ask(classify(text,key==="laptop"),text);}
    });
    root.addEventListener("click",event=>{
      const button=event.target.closest("[data-ws-action]");if(!button)return;const [action,value,model]=button.dataset.wsAction.split(":");
      if(action==="language"){document.documentElement.lang=T("zh-Hant","en");try{localStorage.setItem("resume-language",document.documentElement.lang==="en"?"en":"zh-TW");}catch{}refresh('[data-ws-action="language"]');return;}
      if(action==="ask"){ask(value);return;}
      if(action==="view")s.view=value;
      if(action==="debug")ns.debug=value;
      if(action==="row")ns.selected=value;
      if(action==="export"){
        const rows=filteredEval(),csvCell=v=>'"'+String(v).replace(/"/g,'""')+'"';
        const csv=[['question','ground_truth','generated_answer','judge_response','judge_level','language','data_type'],...rows.map(r=>[r.q,r.gt,r.answer,r.pass,r.level,ns.language,r.category])].map(row=>row.map(csvCell).join(",")).join("\r\n");
        const url=URL.createObjectURL(new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8;"}));const a=document.createElement("a");a.href=url;a.download=`nb-spec-preview-${ns.language}-${ns.category}.csv`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);ns.notice=T("Sample CSV exported.","已匯出範例 CSV。");
      }
      refresh(`[data-ws-action="${button.dataset.wsAction}"]`);
    });
  }
  window.PortfolioWorkspaces={render:key=>key==="knowledge"?knowledge():laptop(),mount};
})();
