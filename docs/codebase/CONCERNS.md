# Concerns

## Confirmed defects or risks
- `index.html` references a favicon path that does not exist in the repository.
- Contact and social links use `href="#"`, so they do not navigate to real destinations.
- Social icon images use empty `alt` values while their links have no independent accessible names.
- Team information is revealed through hover opacity, which is unreliable for touch and keyboard users.
- The beer carousel is automatic and has no pause, previous/next, indicator, or keyboard controls.
- `main.js` directly assumes carousel, buttons, and image-container selectors exist.
- Mash navigation intentionally points to the artisanal-beer context section; this is confirmed product/navigation intent, not a defect.
- Mash screenshots have generic or misleading alternative text and no current/prototype captions.
- Fixed section heights and absolute-positioned Mash imagery may cause overflow, overlap, or excessive whitespace under zoom, text growth, or content changes.
- `style.css` contains an ineffective `@import url('https://googleapis.com')` in addition to the HTML font link.
- Reduced-motion rules are duplicated near the end of the stylesheet.
- The team roles in `README.md` conflict with the roles shown in `index.html`.

## Scope and evidence risks
- The main Mash application is not present in this landing-page repository. The system is confirmed as current, but claims beyond the approved functionality require evidence from the responsible teams.
- Approved functionality for communication is temperature CRUD, iodine CRUD, login, user CRUD, and photo handling. Issue #13, #18, and #30–#34 details are intentionally unavailable while backend and other responsible teams implement them, so issue-to-code traceability remains blocked here.
- No real screenshots from the main Mash system, approved prototype references, before/after captures, or asset manifest have been supplied.
- The required recipe, batch, settings, image-upload, result, benefits, status/planning, and traceability presentation is not identifiable as a complete current flow.

## Maintenance risk
- `index.html` and `assets/css/style.css` have high recent churn according to repository history, so changes there deserve focused regression checks.
- Large interface images under `assets/img/telas/` increase page weight; no performance budget or optimization policy is configured.
- There is no automated regression safety net.

## Security and privacy
- No backend or data submission is present in the inspected code.
- External Google Fonts loading is a network/privacy dependency and should be reviewed against deployment policy.
- [TODO] Verify production security headers and content-security policy; none are committed.

## Recommended order of resolution
1. Obtain issue contents and approved product/source evidence.
2. Resolve CTA, navigation, contact URLs, team roles, and Mash feature status.
3. Correct broken asset paths and accessible names/alt text.
4. Replace hover-only team disclosure and define accessible carousel behavior.
5. Rework brittle fixed-height/absolute layouts only after approved content and screenshots are available.
6. Run the complete browser evidence matrix and record remaining limitations.

## Evidence
- `index.html`
- `assets/css/style.css`
- `assets/script/main.js`
- `README.md`
- `AGENTS.md`
- `git log --stat --oneline -12`
- `docs/codebase/.codebase-scan.txt`
