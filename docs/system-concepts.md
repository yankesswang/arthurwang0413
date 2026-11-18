# Interactive project concepts

Four local, bilingual frontend concepts illustrate the portfolio projects. Support records, evaluation verdicts, scores, companies, and task outputs are authored preview fixtures. Notebook answers use a narrowly selected, dated public-product snapshot. Each surface labels its scope; none connects to production services.

| Project | Interface | Interactive behavior |
| --- | --- | --- |
| GiMATE | Agent workspace | Choose a task, inspect its plan, approve the demonstration, inspect output and checkpoint, reset or demonstrate recovery. |
| Enterprise Knowledge Assistant | E-Support workspace | Type a model or natural-language question directly; identify category, inspect scoped specification/FAE answers, raw references and a processing summary; clarify ambiguous products and save local FAE corrections. |
| Laptop Specification Assistant | NB Spec workspace | Ask questions against two dated public product snapshots, inspect retrieved source text and query traces, filter sample evaluation verdicts, and export CSV. |
| StockRadar | Research desk | Switch fictional companies, compare sample scenarios, inspect a synthetic operating-index chart and research checks. |

## Implementation

`system-demos.js` manages the agent/research concepts and shared native dialogs. `project-workspaces.js` owns the E-Support and NB Spec product interfaces. No framework, new runtime dependencies, model calls, shell commands, messages, or external-service operations are used. Support records and evaluation verdicts are authored fixtures. Notebook answers retain dated source text rather than inventing model responses. Scenario curves are synthetic, not price forecasts.

`system-demos.css` scopes the agent/research surfaces; `project-workspaces.css` and `workspace-polish.css` provide the enterprise product presentation. GiMATE/StockRadar expand into native dialogs. E-Support/NB Spec open full-page workspaces at `workspace.html?app=knowledge` and `workspace.html?app=laptop`, with portfolio return links and a language switch. Both embedded and dedicated screens share the same renderers and interaction handlers. Controls support keyboard input, visible focus, mobile layouts, and reduced-motion preferences. The GiMATE reset cancels pending sample steps.

## Verification

Initial Chromium smoke tests covered the agent/research concepts. The revised E-Support/NB Spec workspaces were exercised through the in-app browser: question submission and unknown questions, source selection, empty/filled FAE review, keyword/date/model filtering, invalid date ranges, FAQ/specification views, model-scoped answers, query inspection, evaluation language/category/verdict/inclusion filtering, empty results, CSV export, English/Traditional Chinese switching, and modal Escape/focus restoration. Layout checks cover 320/375/768/1024/1440px; tables scroll within their own region on small screens. See `project-workspace-sources.md` for source mapping and preview-data boundaries.

## E-Support input-first revision

E-Support no longer opens with a model picker or default product answer. `support-workspace.js` and `support-catalog.js` implement the direct-input flow and evidence inspector; the original project note and integration branch establish the architecture boundaries. The processing tab distinguishes the preview's actual local matching/snapshot operations from the original system's FlashText + Hybrid / RRF architecture. See `project-workspace-sources.md` for the updated source map.
