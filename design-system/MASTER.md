# Arthur Wang portfolio design system

Based on the UI UX Pro Max design-system search for a sophisticated AI engineer portfolio: exaggerated minimalism, strong typography, clear evidence, and a project-led reading path. Adapted to the existing interactive dark portfolio.

- Canvas: #101311. Surface: #191e1a. Primary text: #f1f0e8. Body: #c3c9c1. Secondary text: #a0aaa1.
- Accent and primary action: #c3e8a1 with #172012 text. Borders: #303a32; emphasized borders: #546257.
- Typography: Outfit / Noto Sans TC for content; DM Mono for indices, technical labels, and terminal tools.
- Maximum content width: 1280px. Responsive gutters: 20px–80px. Section spacing: 64px mobile, 96px desktop.
- Large name and clear role lead into selected work. Secondary paths expose the résumé and local portfolio explorer.
- Outcome strip repeats supported résumé facts; project cards retain all original claims and evidence.
- Implementation details use native details/summary, available to keyboard users and expanded for print.
- One consistent accent, restrained borders, 16px readable body copy, 44px touch targets, visible focus, and reduced-motion support.
- Preserve English / Traditional Chinese translations, local agent search, source links, terminal commands, and modal keyboard behavior.

Implementation lives in design.css and design.js, layered after the original styles and functionality. No framework, build step, or additional runtime dependency.
