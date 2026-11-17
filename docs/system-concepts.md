# Interactive project concepts

Four local, bilingual frontend concepts illustrate the portfolio projects. Support records, evaluation verdicts, scores, companies, and task outputs are authored preview fixtures. Notebook answers use a narrowly selected, dated public-product snapshot. Each surface labels its scope; none connects to production services.

| Project | Interface | Interactive behavior |
| --- | --- | --- |
| GiMATE | Agent workspace | Choose a task, inspect its plan, approve the demonstration, inspect output and checkpoint, reset or demonstrate recovery. |
| Enterprise Knowledge Assistant | E-Support workspace | Ask support questions, inspect references, edit a local FAE correction, browse FAE/FAQ tables, filter by model/date/keyword, and inspect specification checklists. |
| Laptop Specification Assistant | NB Spec workspace | Ask questions against two dated public product snapshots, inspect retrieved source text and query traces, filter sample evaluation verdicts, and export CSV. |
| StockRadar | Research desk | Switch fictional companies, compare sample scenarios, inspect a synthetic operating-index chart and research checks. |

## Implementation

`system-demos.js` manages the agent/research concepts and shared native dialogs. `project-workspaces.js` owns the E-Support and NB Spec product interfaces. No framework, new runtime dependencies, model calls, shell commands, messages, or external-service operations are used. Support records and evaluation verdicts are authored fixtures. Notebook answers retain dated source text rather than inventing model responses. Scenario curves are synthetic, not price forecasts.

`system-demos.css` scopes the agent/research surfaces; `project-workspaces.css` provides a light technical support desk and a light notebook chat with a graphite diagnostic panel. Every concept expands into a native dialog while retaining state and returns focus when closed. Controls support keyboard input, visible focus, mobile layouts, and reduced-motion preferences. The GiMATE reset cancels pending sample steps.

## Verification

Initial Chromium smoke tests covered the agent/research concepts. The revised E-Support/NB Spec workspaces were exercised through the in-app browser: question submission and unknown questions, source selection, empty/filled FAE review, keyword/date/model filtering, invalid date ranges, FAQ/specification views, model-scoped answers, query inspection, evaluation language/category/verdict/inclusion filtering, empty results, CSV export, English/Traditional Chinese switching, and modal Escape/focus restoration. Layout checks cover 320/375/768/1024/1440px; tables scroll within their own region on small screens. See `project-workspace-sources.md` for source mapping and preview-data boundaries.
