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
