# Arthur Wang portfolio design system

Based on the UI UX Pro Max design-system search for a sophisticated AI engineer portfolio: exaggerated minimalism, strong typography, clear evidence, and a project-led reading path. Adapted to an editorial, warm-light portfolio. Palette direction A selected by the user, based on the Cursor DESIGN.md in VoltAgent/awesome-design-md.

- Canvas: #f7f7f4. Surface: #ffffff. Inset surface: #fafaf7. Primary text: #26251e. Body: #5a5852. Secondary text: #69665d.
- Decorative accent: #f54e00. Text accent: #b63b00. Primary action: #d04200 with #ffffff text (4.71:1); hover: #b63b00. Borders: #e6e5e0; emphasized borders: #cfcdc4. Avoid white small text on the brighter decorative orange.
- Warm-light surfaces apply to project discovery, project overview, companion, terminal, and expanded terminal dialog. Terminal accent variants remain selectable and use readable colors on light backgrounds.
- Palette source: https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/cursor/DESIGN.md (canvas, ink, accent, card, border, and active orange); secondary text and pale orange selection colors adapted for readable content.
- Typography: Outfit / Noto Sans TC for content; DM Mono for indices, technical labels, and terminal tools.
- Maximum content width: 1280px. Responsive gutters: 20px–80px. Section spacing: 64px mobile, 96px desktop.
- Large name and clear role lead into selected work. Secondary paths expose the résumé and local portfolio explorer.
- Outcome strip repeats supported résumé facts; project cards retain all original claims and evidence.
- Implementation details use native details/summary, available to keyboard users and expanded for print.
- One consistent accent, restrained borders, 16px readable body copy, 44px touch targets, visible focus, and reduced-motion support.
- Preserve English / Traditional Chinese translations, local agent search, source links, terminal commands, and modal keyboard behavior.

Implementation lives in design.css and design.js, layered after the original styles and functionality. No framework, build step, or additional runtime dependency.

## Project discovery revision

The hero no longer displays Plan / Execute / Verify or an automatic execution walkthrough. The guide presents three independent topic cards with plain-language outcomes and descriptive icons. Clicking a topic searches the local project descriptions and shows linked excerpts immediately. No artificial stage delays or auto-run on page load. Custom keyword search and source matching details use progressive disclosure. Selected topics expose aria-pressed; the hero guide link focuses the first topic. Terminal remains a secondary view for focused résumé exploration.

## Arthur CLI revision

- Reference interaction patterns: Claude Code interactive mode (https://code.claude.com/docs/en/interactive-mode) and Codex CLI (https://learn.chatgpt.com/docs/codex/cli). Adapt the welcome, transcript, prompt, slash-command discovery, project mentions, and keyboard navigation to this portfolio.
- Keep the selected warm-white/orange theme. Use a quiet monospace session header, compact scope line, flat transcript, and anchored composer.
- Start with three useful résumé questions rather than a command catalog. Support plain-language keyword/intent matching and eight focused slash commands. Project mentions narrow scope; every project result links to its actual résumé section.
- All replies are extracts or deterministic views of the published résumé. Label the scope as local résumé search with no connected model. Show actual source reads in collapsed details; do not fabricate shell execution, tokens, model names, or staged progress.
- Retain session history until reset/reload, Arrow Up/Down recall, Shift+Enter newlines, slash/mention autocomplete with Tab or Enter, Escape dismissal, and modal focus restoration. Use textContent for visitor input and response data.
- Implementation is isolated in terminal.js and terminal.css; it replaces the original 21-command console and decorative Matrix mode. No runtime dependency or API integration.

## Interactive project concepts

The portfolio canvas retains the selected warm-white palette. GiMATE and StockRadar use charcoal surfaces (#171a1e / #121519), near-white text (#f0f1f2), readable secondary text (#a7afb9), and peach highlights (#ffb38c).

E-Support is a product workspace based on the original application: a pale navigation rail, white conversational surface, teal actions (#235d72), and a source/review inspector. FAE/FAQ/specification views use real table structures and filter bars. NB Spec pairs a white model-scoped chat with a graphite diagnostic inspector (#1a2433), then switches to a dense evaluation report with derived metrics and verdict details. Prefer operational headings, useful forms, and restrained status treatment over explanatory slogan cards. Preserve a subtle preview-data boundary in the chrome/footer.

GiMATE and StockRadar retain native expanded dialogs. E-Support and NB Spec now open dedicated full-page workspaces from their portfolio previews. Inputs and touch controls are at least 44px tall; mobile tables scroll inside a labeled region. Implementation lives in system-demos.js/css, project-workspaces.js/css, workspace-polish.css and workspace-page.js; source mappings are documented in docs/project-workspace-sources.md.

## Enterprise product refinement

User-selected direction: the restrained product clarity associated with Linear/Intercom. Use a consistent cool neutral family (#202735 / #485261 / #667180), white operational surfaces, pale navigation (#f7f8fa), and ink-colored actions (#29374a). E-Support and NB Spec share this system; NB Spec's diagnostic panel is a purposeful graphite inspector rather than a separate theme.

Raise body type to 14–17px, operational titles to 26–30px, and report numerals to 40px. Use 500/600 weights to establish hierarchy and reserve monospace for IDs/data. Reduce repeated sample badges and implementation labels; scope stays visible in the footer and in the authored evaluation report. The dedicated workspace removes the nested portfolio/modal chrome and gives the chat composer a stable lower position. Product controls and local fixture behavior remain shared between embedded and dedicated views.

## Product imagery

Use authentic product photography as context, paired with model names and useful explanatory copy. Preserve complete silhouettes with object-fit:contain; retain manufacturer links and label family-level imagery. Product photos change with the selected model. Pair notebook imagery with a compact snapshot summary and use restrained vector diagrams to explain support checks/evidence relationships. Keep the enterprise neutral palette; the photographs supply visual character without decorative stock backgrounds. Explicit image dimensions reserve space, portfolio previews lazy-load images, and local WebP assets avoid hotlink dependency.

## E-Support input-first workflow

Opening state: one natural-language/model input, no default model, no product dropdown and no prefilled answer. Identify product/category after submission; clarify only when ambiguous. Show separate specification and FAE answers with linked reference IDs. The right inspector keeps raw reference data, processing/decision summary and FAE correction in separate tabs while retaining the answer. Never imply a live model's private reasoning or runtime retrieval scores: processing summaries describe actual local matches, category scopes, records read and missing-evidence decisions. Product photos appear with resolved products. Preserve SKU/revision boundaries and show unknown/missing-field states explicitly.

## Wayfinding and audit pass

- The Selected projects section is the longest part of the page. A project index (01–04 + StockRadar) sits under its heading and becomes a sticky, blurred bar below the site header on desktop (≥851px); on phones it wraps inline and does not stick, so it doesn't take up viewport height. The project in view gets `aria-current` (filled ink pill). The bar unsticks after the work section, and its sticky offset follows the measured header height.
- Embedded demo rails and inspectors are plain containers rather than nested `<aside>` landmarks; portfolio-level asides are sections. Product headings inside demos use `aria-level` so the heading order stays sequential.
- Secondary text links (product source, photo credit, footer email) keep a 44px hit area. Long composer placeholders end with an ellipsis on phones. On phones, the impact strip uses three equal columns.
- Implementation lives in portfolio-polish.css and portfolio-polish.js, loaded last. Verified with axe-core (WCAG 2 A/AA + best practice): 0 violations on index and workspace pages at 1440px and 390px.

## Arthur CLI — refined warm-light terminal

User-selected direction: keep the warm-white/orange palette, but make the CLI read as a professionally designed terminal window rather than a styled form.

- Structure: tab bar (active `arthur-cli ~/portfolio` tab with a 2px orange top edge, ghost actions) → transcript → composer → status bar. The expanded dialog adds window controls and centers the transcript at a 46rem reading measure.
- Type split: mono (DM Mono) for the machine voice: prompts, paths, tool calls, commands and status. Sans (Outfit) for the answers. No text below 11px.
- Welcome card: title, one sentence, and a `cwd / scope / model` key-value block stating "none · local résumé index", so the visitor sees there is no live model. Examples are numbered rows that reveal ↵ on hover/focus.
- Turns: `~/portfolio ❯ question` prompt lines, then answers on a left rail with a green status node. Tool calls render as a collapsible `Source activity · n · ✓ done` chip listing every section read. Architecture flows render as step chips. Source links are pills.
- Composer: an auto-growing single-line input (44–160px) with an orange caret and a 3px focus ring. Keycap hints for ↵ / ⇧↵ / ↑ / and a command palette with a section label, a ↵ marker on the selected row and a navigation hint footer.
- Status bar: a Ready (green) / busy (orange, pulsing) dot, then scope segments. The no-model note appears in the expanded window. On phones, cwd metadata, the path prefix and secondary segments hide, and the placeholder shortens.
- Motion: 160–220ms ease-out for turn entry, palette pop and the window, all disabled under reduced motion. Verified: palette keyboard flow, @mentions, history, Shift+Enter, reset, EN/中文, Ctrl+K, dialog open/close; axe 0 violations with the terminal open at 1440px and 390px.

## Arthur CLI — purpose revision (review tools)

The keyword-search CLI repeated what the page and the Explore tab already show. The CLI is now a set of review tools for recruiters and hiring managers that compute views the page can't show:

- `/fit <job description>`: a 28-skill taxonomy (EN/中文 patterns) extracts requirements from pasted text. Each requirement gets up to two evidence quotes from this page with source links, or "Not mentioned in this résumé". It shows a segmented meter and "n of N requirements have evidence". A fixed footnote: keyword match, not an assessment; a gap means "not on this page". Long pasted text or JD phrasing routes here automatically. Two sample roles demonstrate a gap.
- `/impact`: every published metric (project proofs + impact strip, de-duplicated) as tiles linked to their source, plus experience bullets containing numbers.
- `/stack <tool>`: where a tool or technique appears across projects, roles, research and skills; "where did he use X?" routes here. A tag-only mention shows the tag and the project summary.
- `/contact`: email with Copy, LinkedIn, PDF.
- Evidence rules: read real page text only. Skip interactive demos (sample/fictional data), figure viewers, meta/date lines and role lines. Prefer list items and sentences ≥40 characters, and rank sources by match count. Highlight whole words.
- Home: four numbered action cards (fit, impact, stack, contact) and the scope line "Reads only this page · no AI model". /projects, /research, /resume, /help and /clear remain. /about and /skills still work but are hidden from the palette.

## Arthur CLI 2 — on-device retrieval engine (supersedes the review-tools revision)

The user rejected the recruiter tools as unremarkable. The terminal now demonstrates the work itself: a real retrieval engine running in the visitor's browser, mirroring Arthur's on-device and hybrid-retrieval projects.

- Boot (first time the terminal is shown): the page is chunked into about 68 passages (authored project sentences, workflow steps, experience bullets, research, skills; interactive demos and sample data excluded) and indexed with Okapi BM25 in about 2 ms. `Xenova/all-MiniLM-L6-v2` (int8 ONNX, 22.6 MB, WASM) loads via transformers.js 3.0.2 from jsDelivr / the Hugging Face CDN, then embeds the passages (384-d, about 1.3 s). A dark boot log shows real progress, sizes and timings. Save-Data or 2G/3G connections get a "Load model (23 MB)" button instead of an automatic download. If the model is unavailable, the CLI falls back to BM25.
- Query: tokenize → BM25 → query embedding → cosine k-NN → weighted fusion (score = 0.4·BM25/max + 0.6·cosine; generated stack/results summary rows ×0.85). A dark pipeline card shows each stage's measured detail and time, plus a score sparkline. The top passage types out (reduced motion: instant), then two more passages. Each passage carries its BM25 rank, cosine, fused score, highlighted query terms and a link to its résumé section. `@project` scopes retrieval.
- `/bench` measures this device (BM25 µs per query via batch timing, embedding median, end-to-end hybrid median and queries per second). `/engine` prints the real spec. Plus /projects, /contact (copy email), /resume, /help, /clear.
- Honesty: extractive only; "no generative model" is stated under answers and in /engine. Questions never leave the browser; only model weights are downloaded. Semantic search is EN-only (MiniLM); 中文 uses BM25 with CJK bigrams, and the boot log says so.
- Animations play once per state (boot rows, turn entry, stage stagger, sparkline growth, typing caret) and are disabled under reduced motion. axe: 0 violations at 1440px and 390px with the engine loaded.

## Arthur CLI — illustrative demo (supersedes the on-device engine)

User decision: the terminal should only illustrate the concept, not run real retrieval. No model download, no index, and /bench and /engine are removed.

- Same visual system: the dark boot card (corpus / retrieve / rerank / ground, as descriptive lines with no measured numbers) and three sample questions.
- Asking lights five pipeline stages in sequence (parse → retrieve → rerank → ground → answer, about 220ms each; instant under reduced motion). The answer then types out, followed by two supporting passages, each linking to its résumé section.
- Answers come from three scripts (GRACE-Mem evidence, on-device / 4 GB VRAM, FAE lookup). Free text is keyword-routed to a script; anything else gets the sample questions. Every passage is a résumé translation key, so EN/中文 stay in sync with the page.
- Labeled as a demo in the tab chip, the pipeline card, the footnote under answers and the status bar. No fabricated timings or scores.
- Commands: /projects, /contact (copy email), /resume, /help, /clear.

## Hero portrait and StockRadar real interface

- Hero: giant name and copy on the left, a large portrait card on the right. `assets/portrait.webp` is a 568×874 crop of picture.png: the person is in the right third and the car's licence plate is cropped out. Height is min(78vh, 46rem), with rounded corners, a soft shadow and the name/role overlaid on a bottom gradient. On phones the portrait comes first, at 4:5 (max 62vh). The small 44px signature avatar was removed because the caption carries the role.
- The portfolio guide panel (Explore / All projects / Terminal) moved out of the hero into an "Explore the work your way." section right after it: a sticky intro on the left and the panel on the right (stacked on phones).
- StockRadar: the fictional dark "Research Desk" concept is replaced by the product's real interface. Six screenshots from the Stock-Radar repo (docs/assets) were converted to WebP in assets/stockradar/ (29–42 KB each). They are shown in a light browser frame (URL path per screen, "Real interface" badge) with ARIA tabs: Signal Radar, Research, DCF, Financials, Sector RS, Earnings. Arrow/Home/End keys work, the next screen is preloaded, captions in EN/中文 come from the repo README, and clicking opens a lightbox. The repo's own note says the data is illustrative and time-sensitive. The StockRadar palette (#2563eb blue, slate text) applies only inside this frame. Implementation: portfolio-polish.css/js.

## Interviewer-first redesign

Problem (measured): proof first appeared at 1,873px, experience started at 12,784px and the work section ran to 10,253px (4,300px of it inline demos). Following the UI UX Pro Max "Trust & Authority" pattern (credibility → proof → solution → clear CTA), the page is reordered for a 30-second scan.

- First screen (1440×900): name on one line, role "@ GIGABYTE · since 2024", the lead, three proof points (86.9% LoCoMo · first-author EMNLP 2026 AKBC Runner-Up; <30s FAE lookup, down from 5–10 min; 6+ AI products led), View work / Download résumé / Email me, the portrait, and an at-a-glance bar (Now, Focus, Research, Education), each linking to its section. On phones the portrait still leads.
- Order: hero → glance → work → experience → research → core expertise → skills → interactive lab (the former portfolio-guide panel and terminal, renamed "Prefer to explore? Try the lab.", with a Lab nav item) → contact. The separate impact strip was merged into the hero.
- Project cards show only the scan layer: type/date, title, subtitle, one-sentence summary, role, results column, tags and paper links. Architecture, implementation bullets, figures, workflows, design notes and interactive demos fold into one "Full case study · architecture, implementation, demo" disclosure per project. StockRadar's real interface folds under "Real interface · 6 screens". Deep links and printing open the folded case study.
- Result: page height 15,494 → 7,750px on desktop (experience at 3,586px) and 21,016 → about 11,300px on phones; axe 0 violations.

## Keyword emphasis

- Outcomes and core claims are bold; method names are italic. Applied by portfolio-polish.js after every language switch (setLanguage rewrites textContent), by wrapping text nodes, never innerHTML.
- Metrics (percentages, points, time savings, 1,000+ documents, 6+, 4GB VRAM) get `strong.kw-metric`: bold with a pale orange marker underline for scanning. Core claims (e.g. "evidence-first memory system", "company-wide internal chatbot", "agent reliability") get `strong.kw`. Method names (Plan-and-Execute, hybrid retrieval, provenance-linked…) get `em.kw`. 中文 uses a thin underline instead of synthetic CJK italics.
- Budget: at most 3 bold and 1 italic per paragraph, metrics first. Scope: hero lead, project summaries and implementation bullets, StockRadar notes, experience bullets, core expertise, paper authors. EN/中文 phrase lists live in the same script.

## GiMATE Agent interface concept (leak-safe)

The product is unreleased, so the case study shows a concept recreation of its interaction model rather than the real UI. The internal QA manual was used only to understand the layout; nothing from it is copied.
- Structure mirrors the pattern: a task sidebar, a conversation with execution-step cards, and a workbench (Overview: execution units + artifacts; artifacts open in a preview tab), plus a composer with attach / apps / local-model chip and a permission-mode line.
- Leak-safe rules: no screenshots, logo or illustrations; portfolio palette (warm charcoal + orange) instead of the product's colors; no unreleased app/feature names, model names, internal projects, versions or commits; only capabilities already public in the résumé (Plan-and-Execute steps, approval gates, local inference, artifacts). Four fictional tasks (summarize, spreadsheet, plan day, draft reply); every file and result is sample content.
- Interaction: picking a starter runs plan → steps; a side-effecting step stops at an approval gate (Approve / Deny). Deny marks it "Skipped by you" and the reply says nothing changed outside the draft. Labeled "Illustrative · sample data", with a footer saying it is not the shipping interface. EN/中文, reduced motion respected, axe 0 violations.
- Implementation: gimate-concept.js/css (replaces the earlier system-demos GiMATE concept; mounted at #system-gimate).
- Fancy pass: starter cards have a cursor-following glow and floating orbs. The prompt types into the composer and the send button presses, then a shimmer "Planning…" line, step cards with progress bars, streaming log lines and per-step durations, and an approval gate with a risk tag and a diff-style list of the files or recipient. The workbench shows a progress ring, an elapsed timer and "local · 0 external calls", then skeleton → outputs, a streamed reply and an "Outputs ready" card with thumbnails. The primary output auto-opens in a widened workbench.
- Outputs (all fictional): a planning brief (TL;DR, decision table with owners and status tags, timeline) and a 3-slide deck; a sales dashboard (4 KPIs, area/trend chart that draws itself, ringed outliers, anomaly table) and findings with confidence bars; a time-blocked day schedule; an email draft whose status follows the approval decision. Entrance animations run once per element (`is-new`), and reduced motion shows the final state instantly.
- Working controls: the breadcrumb, the "New task" button and a narrow-screen shortcut bar (New task / History / Approvals / Skills) always return to start. Finished runs offer "Try another example". The home composer is a real input: Enter maps free text to the closest sample by keyword, shows the visitor's own words and labels the mapping. Sidebar pages work: History (session runs, run again; recent items in the sidebar), Approvals (Standard vs Ask-every-time mode, where Ask also gates read steps, plus a session decision log), Skills (real toggles; an example needing a disabled skill redirects there and focuses the switch) and Local models (generic cards, no names). Leaving a run mid-way cancels it cleanly.

## Typography: Geist + Geist Mono

User-selected after a live side-by-side preview against Inter and IBM Plex. Supersedes Outfit / DM Mono.
- `--sans: "Geist", "Noto Sans TC"`; `--mono: "Geist Mono"`. The Google Fonts request loads Geist 400–700, Geist Mono 400/500 and Noto Sans TC (index.html and workspace.html). Hardcoded fallbacks in workspace-polish, terminal and portfolio-polish were updated.
- Geist is wider than Outfit, so tracking is relaxed: hero h1 −.055em at 600 weight, section h2 −.045em, project titles −.035em, footer h2 −.05em; Chinese headings −.02em. Proof numbers use tabular figures.
