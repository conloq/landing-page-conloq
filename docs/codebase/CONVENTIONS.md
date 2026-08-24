# Conventions

## HTML and content
- The page uses Portuguese text and `lang="pt-br"`.
- Section IDs use the existing names `sobre-conloq`, `Section-Equipe`, `Section-Cerveja`, `sobre-sistema`, and `Footer`.
- Local assets use relative paths rooted at `assets/img/`.
- The existing page uses semantic headings, links, buttons for screenshot controls, and images, but accessible naming and alternative text are inconsistent.

## CSS
- Styles are concentrated in `assets/css/style.css`.
- Responsive behavior is organized into the ranges documented by `AGENTS.md`: up to 480px, 481–549px, 550–769px, 770–1024px, 1025–1280px, and 1281–1536px.
- Existing interaction styling uses CSS transitions, transforms, opacity, and keyframe animation.
- Focus styles exist for some controls; any new control should retain a visible focus state.

## JavaScript
- Behavior is in `assets/script/main.js` and executes against selectors already present in the page.
- Existing code uses direct DOM queries and event listeners without a framework or module system.
- Existing code assumes required elements exist; changes should avoid introducing new assumptions without guards.

## Accessibility conventions to preserve or improve
- Informative images need descriptive `alt` text; decorative images should remain ignored by assistive technology.
- Links need real destinations and accessible names; `href="#"` is currently used as a placeholder and should not be treated as a valid destination.
- Motion must respect the existing reduced-motion behavior.
- Hover-only disclosure is not sufficient for touch or keyboard users.

## Content approval rules
- Do not present unverified Mash functionality as implemented.
- Mark prototype/planned material explicitly once its source is confirmed.
- Do not invent issue requirements, URLs, team roles, screenshots, or product status.

## Unknowns
- The README is authoritative for team roles: João — Backend; Jocieli — Artigo e documentação; Kevin — Design; Haimon — Frontend.
- Mash is the current system, and approved functionality for landing-page communication is limited to temperature CRUD, iodine CRUD, login, user CRUD, and photo handling. Other functionality requires confirmation before publication.
- Issue #13, #18, and #30–#34 details are intentionally unavailable because they are being handled by backend and other responsible teams.
- [TODO] Establish a formatter/linting policy if one is desired; none is configured.

## Evidence
- `index.html`
- `assets/css/style.css`
- `assets/script/main.js`
- `README.md`
- `AGENTS.md`
