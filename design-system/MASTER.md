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
