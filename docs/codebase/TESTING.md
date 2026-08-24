# Testing

## Repository-defined verification
- No automated test runner, test directory, package manifest, lint command, typecheck command, or CI workflow is present.
- `README.md` documents manual preview with `python -m http.server 8000` and a browser.
- `AGENTS.md` requires manual verification at the project responsive ranges after HTML, CSS, JavaScript, or asset changes.

## Required manual checks
1. Serve the repository root over HTTP.
2. Inspect browser console for JavaScript errors.
3. Check local image, stylesheet, script, favicon, and font loading.
4. Exercise header/footer anchors and the hero CTA.
5. Exercise the beer carousel and Mash screenshot toggle.
6. Check purpose-card pointer behavior and reduced-motion behavior.
7. Tab through navigation, controls, team links, and footer links.
8. Check descriptive headings, accessible names, image alternative text, visible focus, contrast, and touch usability.
9. Check no horizontal overflow, overlap, clipping, or hidden content at 320/375/480/550/770/1025/1280/1536px and at the project breakpoint boundaries.
10. Capture baseline/current/final evidence with viewport, state, URL, and timestamp metadata.

## Current test status
- **Static source inspection:** completed; findings are traceable to `index.html`, `style.css`, `main.js`, README, and AGENTS.
- **Browser run:** [BLOCKED] The documented static server started successfully, but the installed Playwright Chromium executable was unavailable and the local-browser fallback rejected loopback URLs; no browser capture or console/network evidence was produced.
- **Automated checks:** unavailable because no project test tooling is configured.
- **Issue traceability:** [BLOCKED] Issue #13, #18, and #30–#34 contents were not supplied or available in the repository.

## Acceptance classification
Every requirement must be reported as `CURRENT`, `PLANNED`, `PROTOTYPE`, `REPLACED`, `REGRESSION`, or `BLOCKED`, with a source or capture. The current audit cannot classify issue-specific requirements beyond the repository evidence above.

## Evidence
- `README.md`
- `AGENTS.md`
- `index.html`
- `assets/css/style.css`
- `assets/script/main.js`
- `docs/codebase/.codebase-scan.txt`
