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

The hero no longer displays Plan / Execute / Verify or an automatic execution walkthrough. The guide presents three independent topic cards with plain-language outcomes and descriptive icons. Clicking a topic searches the local project descriptions and shows linked excerpts immediately. No artificial stage delays or auto-run on page load. Custom keyword search and source matching details use progressive disclosure. Selected topics expose aria-pressed; the hero guide link focuses the first topic. Terminal remains a secondary view with its existing commands.
