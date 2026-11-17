# Product workspace reference map

These are newly designed portfolio frontends, informed by the actual local projects. They are not screenshots of production systems and do not connect to the original services. Source repositories were read without modifying them or running their pipelines.

The current visual direction follows the user's preference for a mature enterprise product: restrained neutral surfaces, readable typography, clearer operational hierarchy, and dedicated full-page workspaces. `workspace.html` hosts the same logic used in the portfolio preview; `workspace-page.js` selects the app and handles page-level language/title/accessibility setup. Embedded workspace entrances use ordinary links, so visitors can open them in a new tab. The standalone page includes an explicit route back to the relevant portfolio project.

## Illustrated product context

`workspace-media.js` adds product photography and localized explanatory graphics to both embedded and standalone interfaces. E-Support's selected motherboard updates its photograph, model name and manufacturer source link together. Topic changes update the support-check diagram. NB Spec updates its notebook-family photograph, model and memory/adapter/battery snapshot summary together. The evidence-path diagram explains the source-to-attribute relationship.

Photographs were retrieved from public GIGABYTE pages/CDN on 2026-11-17. The five local WebP display files preserve the full photographs and transparency, with source/size/checksum metadata under `assets/products/sources.json`. Every visible photograph links to the manufacturer page; family imagery is labeled separately from SKU configuration. SVG diagrams are original illustrations. No private source-project pictures or customer data are used.

## E-Support

Reference checkout: `e-support`, commit `d659de9bdf1edc0a0452a42af443e3a21fb844a8`.

| Original source | Observed behavior | Portfolio adaptation |
| --- | --- | --- |
| `webui/chatbot_tabs/dist/assets/index-Dxzpv0PV.js` | Chat sessions, FAE answer correction, FAE/FAQ/Specification tabs, model search, date filters, tables and paging | Sidebar workspace navigation, a real question composer, linked-reference inspector, correction form, filtered data views and paging controls |
| `webui/chatbot_tabs/server/fae_server.py`: `FAE_spec`, `FAE_QA_data`, `FAQ_QA_data` | Product matching, `mb_name`, `start_date`, `end_date`, `page`, `page_size`; specification records use `ItemTitle`/`ItemContent` | Three selectable product names, date and keyword filters, matching table structure, explicit empty and invalid-date states |
| Same server: `FAE_Save` and frontend FAE form | Store the question, generated reply, FAE correction and conversation context | Local review editor with explicit session-only save feedback |

The README is a GitLab scaffold, so behavior was derived from application code. All support questions, answers, dates, IDs and creator names in the portfolio are newly authored demo records. No customer cases, employee identities, credentials, logs, private endpoints or authentication implementation are copied. Model names are drawn from public product naming; the specification view is a verification checklist, not a certified hardware specification.

## Notebook specification pipeline

Reference checkout: `nb_spec_data_pipeline`, commit `06cd1bead6a247dafb8c5a0e7bf7045c77b57bf4`.

| Original source | Observed behavior | Portfolio adaptation |
| --- | --- | --- |
| `Hwctl/electron-chat/src/App.jsx` | NB Spec Chat, model-scoped replies, retrieved-document metadata, query normalization, memory/debug data | Chat + diagnostic inspector, model switcher, source text, query/attribute trace and evidence links |
| Root `README.md`, `Hwctl/README.md` | Bilingual dataset and inference workflow, categories `general`/`specs`/`gimate`, inclusion filtering | Evaluation workspace with dataset language, category and `spec_included` controls |
| `judge/README.md`, `judge/models.py` | `question`, `ground_truth`, `generated_answer`, `judge_response`, `judge_level`; STRICT then LENIENT fallback | Filterable verdict table, selected-result inspector, derived subset counts/accuracy and a matching CSV export schema |
| `Hwctl/data/gigabyte_full_specs.clean.json` | Public-product crawler snapshot | Two product records: AORUS ELITE 16 BWH and AORUS MASTER 16 BXH; only name, public source URL, captured date and selected public specification fields |

The notebook snapshot was captured on **2026-06-26**. Answers reproduce its specification text, and source links lead to the product-family pages. These are dated snapshots, not a claim that the hardware data is current. A maximum supported capacity is distinguished from installed capacity.

The evaluation questions, generated answers and verdicts are authored demonstrations. The original project uses an LLM judge; the portfolio does not run it, and labels the report accordingly. Counts and percentages are computed from the visible sample subset. No private experiment output, NocoDB dataset, token, local model service or hardware-monitoring output is imported.

## Verification notes

- Support input remains literal text, including HTML-shaped input. Unknown questions show an explicit no-match response.
- FAE correction rejects an empty save and confirms session-only saving. Date ranges reject a start after the end.
- Source and model selection update the relevant answer/inspector together.
- Notebook model selection changes adapter source text from 240W to 330W for the two snapshots.
- Evaluation filters update rows, selected verdict and aggregate metrics together. Empty subsets have an explicit state.
- A downloaded sample CSV was inspected for its expected header, selected language/category and row contents.
- Browser checks cover keyboard submission, dialog Escape/focus restoration, both UI languages, mobile touch heights, and document/component overflow across five widths.
- The full-page refinement was checked separately: support query/review/library/filter behavior, page-level language switching, notebook model/source changes, evaluation verdict/inclusion filtering, and component/document overflow at 320/375/768/1024/1440px. Native dialogs remain only for the agent/research concepts.
