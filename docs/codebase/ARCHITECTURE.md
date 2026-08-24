# Architecture

## Observed architecture
This is a single-page static website with three practical layers:

1. **Markup/content** — `index.html` defines the document structure, section IDs, text, image references, navigation, and controls.
2. **Presentation** — `assets/css/style.css` defines global styles, fixed-header layout, section layout, responsive media-query ranges, hover/focus states, CSS animations, and screenshot swapping styles.
3. **Behavior** — `assets/script/main.js` adds smooth interaction behavior for purpose cards, the automatic beer carousel, and the Mash screenshot toggle.

There is no repository-local API, database, authentication layer, state store, router, or build pipeline.

## Runtime data flow
- The browser loads `index.html`.
- The HTML requests the local stylesheet, local images, local JavaScript, and Poppins from Google Fonts.
- JavaScript queries existing DOM selectors and mutates classes or carousel markup.
- CSS responds to those classes and viewport media queries.
- No data is persisted or sent to a repository-defined service.

## Interaction state
- Purpose cards derive tilt transforms from pointer coordinates.
- The beer carousel duplicates its inner HTML and runs a continuous CSS animation.
- Mash screenshot buttons toggle active state and a `.swap` class on the image container.
- Reduced-motion CSS rules disable or reduce motion.

## Architectural constraints
- Preserve relative asset paths and case.
- Keep section IDs synchronized with header/footer links.
- Keep behavior centralized in `assets/script/main.js`.
- Keep responsive changes in the existing media-query structure.

## Intent versus reality
- The page copy describes Mash capabilities including computer vision, laboratory analysis, and temperature monitoring, but this repository contains no Mash application implementation or validation evidence. These claims are **BLOCKED** until verified against the main system or issue evidence.
- The required landing-page flow is not represented as a distinct implemented flow in the current markup. The confirmed system capabilities available for communication are temperature CRUD, iodine CRUD, login, user CRUD, and photo handling; recipe, batch, settings, analysis result, status/planning, and traceability presentation remain **PLANNED/BLOCKED** until approved by the responsible teams.
- The header item labelled Mash intentionally targets `#Section-Cerveja`, the artisanal-beer section, while the Mash system content is under `#sobre-sistema`; this is **CURRENT/CONFIRMED**, not a defect.

## Evidence
- `index.html`
- `assets/css/style.css`
- `assets/script/main.js`
- `README.md`
- `AGENTS.md`
