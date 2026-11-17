# Interactive project concepts

Four local, bilingual frontend concepts illustrate the portfolio projects. Their fictional records, scores, companies, and task outputs are interface fixtures, not customer data or production integrations. Each surface labels its sample-data scope and includes a system map.

| Project | Interface | Interactive behavior |
| --- | --- | --- |
| GiMATE | Agent workspace | Choose a task, inspect its plan, approve the demonstration, inspect output and checkpoint, reset or demonstrate recovery. |
| Enterprise Knowledge Assistant | Knowledge console | Choose a question, retrieve sample evidence, compare fixed retrieval orderings, inspect citations and source records. |
| Laptop Specification Assistant | SpecLab | Switch fictional SKUs and question types; compare structured facts and retrieval context; evaluate memory answers using explicit strict/lenient rules. |
| StockRadar | Research desk | Switch fictional companies, compare sample scenarios, inspect a synthetic operating-index chart and research checks. |

## Implementation

`system-demos.js` contains small, independent state objects, fictional fixtures, localized renderers, and delegated input handlers. No framework, new runtime dependencies, model calls, shell commands, messages, or external-service operations are used. Retrieval rankings and outputs are illustrative fixed records. SpecLab grades with transparent local rules rather than an LLM judge. Scenario curves are synthetic, not price forecasts.

`system-demos.css` scopes dark product surfaces within the warm portfolio. Every concept expands into a native dialog while retaining state and returns focus when closed. Controls support keyboard input, visible focus, mobile layouts, and reduced-motion preferences. The GiMATE reset cancels pending sample steps.

## Verification

Chromium smoke tests exercised task approval/recovery/reset, retrieval/source switching, SKU/routing/evaluation, company/scenario/review changes, dialog Escape/focus restoration, both languages, and widths from 320 to 1440px. Rendered desktop and phone captures were visually reviewed. Computed text contrast and the two-column layout DOM structure were checked separately.
