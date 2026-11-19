# Product workspace reference map

These are newly designed portfolio frontends, informed by the actual local projects. They are not screenshots of production systems and do not connect to the original services. Source repositories were read without modifying them or running their pipelines.

The current visual direction follows the user's preference for a mature enterprise product: restrained neutral surfaces, readable typography, clearer operational hierarchy, and dedicated full-page workspaces. `workspace.html` hosts the same logic used in the portfolio preview; `workspace-page.js` selects the app and handles page-level language/title/accessibility setup. Embedded workspace entrances use ordinary links, so visitors can open them in a new tab. The standalone page includes an explicit route back to the relevant portfolio project.

## Illustrated product context

`workspace-media.js` adds product photography and localized explanatory graphics to both embedded and standalone interfaces. E-Support shows product photography only after a product match; its opening illustration is explicitly decorative and does not preselect a product. Matched product answers retain their own image and reference metadata. NB Spec updates its notebook-family photograph, model and memory/adapter/battery snapshot summary together. The evidence-path diagram explains the source-to-attribute relationship.

Photographs were retrieved from public GIGABYTE pages/CDN on 2026-11-17. The five local WebP display files preserve the full photographs and transparency, with source/size/checksum metadata under `assets/products/sources.json`. Every visible photograph links to the manufacturer page; family imagery is labeled separately from SKU configuration. SVG diagrams are original illustrations. No private source-project pictures or customer data are used.

## E-Support — query-first product identification

Primary workflow reference: the user's `02_e-support.md` project note (2026-11-16). The latest user instruction explicitly replaces the early model-picker workflow with direct model/name input, category-scoped specifications and FAE answers, reference data and an inspectable processing summary.

Reference checkouts:
- main: `d659de9bdf1edc0a0452a42af443e3a21fb844a8`.
- local `origin/integration`: `c3b3f9e112f0d3f3058d4190a85aab13438f97c9`.

| Reference | What it establishes | Current frontend |
| --- | --- | --- |
| User project note; integration `algo.md` | Natural-language input precedes product identification and category routing | Empty opening state with an input and optional example questions; no preselected model or model dropdown |
| `modules/search/flashtext_search.py`, `modules/search/hybrid_search.py`, `algo.md` | FlashText full-name/keyword candidates come first; Hybrid adds candidates; BM25/Dense RRF occurs inside Hybrid | Runtime preview uses transparent local normalized name/alias matching and conservative candidate confirmation; it does not claim FlashText/Hybrid/RRF execution |
| `modules/rag/simple_rag.py`, `RetrievalResult`, `GenerationResult` | Product/category-scoped data, specification chunks, `reference` / `references` response fields | Separate specification and FAE reference records with product/category/source-type metadata, source text, manufacturer link and raw JSON |
| User note; `simple_rag.py` category map | Product category determines the specification data scope; multiple products retain their own context | Five-product preview catalog spanning Motherboard and Laptop; per-product answers/references are kept separate |
| User note on version/feature boundaries | Integration's inspected path favors specifications; activation of QA/FAQ/rerank depends on the entry | FAE records are explicitly authored preview fixtures; the architecture disclosure explains deployment-dependent activation |

The inspector's processing summary reports input, actual local matching method, resolved category, selected reference IDs and evidence constraints. It is an auditable decision summary, not hidden model reasoning or a fabricated model execution trace. Unknown products, ambiguous names, unlisted notebook SKU suffixes, missing fields and revision mismatches have distinct states. Context-only follow-ups reuse the last confirmed products; a recognizable unknown product request does not inherit unrelated prior records.

`support-catalog.js` contains public product names and specification snapshots. Notebook fields retain the original dated source described below. The small motherboard snapshots retain only chipset/memory type, with manufacturer specification links and capture date. `support-workspace.js` owns matching, reference selection, local answer assembly and FAE review. No private database, customer cases, credentials, model endpoints or employee data are copied.

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

## Query-first acceptance checks

Browser checks covered: zero opening selects/references, model-only input, motherboard/laptop category routing, explicit specification questions, follow-up context, unknown products after another product, ambiguous names, unmatched SKU suffixes, explicit revision mismatch, missing specification fields, two-product comparison, raw reference JSON, FAE review validation and session-only save, processing-summary inspection, language switching and responsive layouts. The frontend remains a local demonstration; production FlashText, embedding/Hybrid retrieval, MongoDB and LLM services are not connected.

## E-Support — embedded production frontend (2026-11-19)

The E-Support case study now embeds the deployed system's own React frontend (`esupport-demo/`) instead of the redesigned workspace.

- Source: `gitlab/e-support/webui/react-chatbot` at `e8f73d5`, built from a scratch copy with `vite build --base ./`; the source repository was not modified.
- Changes to the copy only: brand strings neutralised (`GIGABYTE` → `Product Support`, footer badge → `Portfolio demo · sample responses`), the specs endpoint path renamed to `/api/specs`, suggested questions replaced with questions about the five public catalog products.
- `esupport-demo/mock-api.js` answers the frontend's `/api/*` calls in the browser (start/terminate session, input, langid, translate, autocomplete, specs) using the public snapshots from `support-catalog.js` plus socket / form factor / DIMM count for the three motherboards. Replies are templated, not model output; no company service is contacted.
- Embed adapter (also in the copy): a small inline style makes the app fill the iframe and scroll inside its panels, and `scrollIntoView` is limited to the app's own scroll container so the host page never jumps.
- The previous redesigned workspace (`support-workspace.js`) is still used by `workspace.html` but is no longer mounted on the main page.

### Console re-skin (Hallmark redesign, 2026-11-19)

The embedded frontend was re-skinned so it reads as an internal tool rather than a generated chat UI. Structure and behaviour are unchanged; only the visual layer and a few strings moved.

- `src/console-theme.css` (kept here as `docs/esupport-console-theme.css`) is imported last from `main.jsx` and maps the app's own CSS variables onto one token set: cool near-white paper, one cobalt accent (send button, links, focus), Inter for UI and JetBrains Mono for model names, graph names and context.
- Removed: radial background glows, every teal→blue gradient, Fraunces display serif, tracked-uppercase labels, the floating rounded chat card, pill suggestion chips, colour-coded context cards and the model-tag flash animation.
- JSX edits in the copy: Sparkles / Bot icons replaced by a mono `FAE` mark; welcome tile removed; header and welcome copy made specific ("Product Q&A", "Ask about a product").
- `mock-api.js` now fills `citations` with the product URLs so the real "Sources (n)" counter shows the number of products used.
- The portfolio frame lost its drawn traffic-light dots; it is a plain caption bar above the iframe.

### Showcase questions (2026-11-19)

The four suggested questions now each demonstrate one behaviour of the pipeline, with authored answers in `mock-api.js` (`SCENARIOS`) built only from the catalog snapshots plus socket / form factor:

1. B550M → X870E upgrade: platform reasoning (DDR4→DDR5, AM4→AM5, Micro ATX→E-ATX case check).
2. `elite16 跟 master16`: shorthand resolution, a Chinese answer, and a use-case recommendation with the SKU caveat.
3. "AORUS MASTER": ambiguity across categories, answered per product and followed by a clarifying question.
4. Z890 AORUS ELITE WIFI7: not indexed, so the answer refuses to guess and explains why the Z790 values do not transfer (LGA1851 vs LGA1700).

Free-typed questions still fall through to the templated per-product answer.

### Enterprise polish layer (2026-11-19)

Second pass on the embedded console, so it is no longer "the deployed frontend unchanged": the portfolio caption now says it is redesigned on top of the deployed React frontend (same components and data contract, new visual layer).

- Night sidebar with a "Spec index · 5 products" status line; the active chat carries a cobalt inset rule.
- Welcome: the four showcase questions are cards labelled with the behaviour they demonstrate (Upgrade check, Compare · 中文, Ambiguous name, Not in the index) and send on click; a strip below states the index size.
- Answers render through a small `RichText` component in `Message.jsx`: blank-line blocks become paragraphs, `• ` lines become a ruled list with bold labels, and the first block of a multi-block answer is the lead.
- Sources: `mock-api.js` adds an `image` field to each KG context (`../assets/products/*.webp`, the public product photos already in the portfolio), shown as a thumbnail beside the model name.
- Loading row states what is happening ("Identifying products, then reading their spec records…").

### Agent trace and full-resolution laptop photos (2026-11-19)

- Each answer now carries a `trace` array from `mock-api.js`, rendered above the answer as an open "Agent trace" panel: detect language → identify products (with how each matched: exact name / alias / partial, plus the product photo) → route to the category graph → retrieve spec sections → scenario checks (platform diff, ambiguity rule, grounding rule) → compose. Steps are marked ok / warn / stop. The trace lists pipeline steps and rules that the real system implements; it is authored for the demo and is not hidden model reasoning.
- While a request is pending, the five pipeline stages tick through in place of the typing dots; the demo response delay is 2.3 s so the stages are readable.
- Laptop photos re-fetched from the same GIGABYTE CDN entries at 1000 px (previously the 300 px variant), trimmed and saved at 800 px; `assets/products/sources.json` and its README record the new URLs, sizes and checksums. Motherboard photos were already full resolution.

### Spec drawer (2026-11-19)

- "Identified models" chips and the product names in the KG source rows are buttons; they open `SpecDrawer` (new component, kept here as `docs/esupport-SpecDrawer.jsx` / `.css`), a right-hand slide-over inside the console.
- Product view: the photo on a soft stage, model name, category, snapshot date and product-page link, four highlight tiles per category (motherboard: Chipset / Socket / Memory / Form Factor; laptop: Video Graphics / Display / CPU / Battery), then every field with multi-line values split into lines.
- Compare tab (two or more identified products): photos side by side, a "N fields differ · M identical" summary, differing rows first with a cobalt rule, identical rows muted.
- Data comes from the same `/api/specs` call the Specifications tab uses; `mock-api.js` now also returns the product photo and model name there. Esc or the scrim closes the drawer.
