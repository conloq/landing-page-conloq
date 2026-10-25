# Repository Guide

## Project shape

- This is a dependency-free static landing page; the runtime entrypoint is `index.html`, with styles in `assets/css/style.css`, behavior in `assets/script/main.js`, and all local media under `assets/img/`.
- There is no `package.json`, lockfile, build tool, test runner, CI workflow, or repository-defined lint/format/typecheck command. Do not invent an install or build step.
- The page is Portuguese (`lang="pt-br"`) and uses the externally hosted Poppins font from Google Fonts.

## Product presentation versus implementation

- This landing page presents the complete institutional/commercial product vision. Its content may describe features that are simulated, planned, or not implemented in the current Mash runtime.
- The landing page is not an implementation authority. Do not infer a working feature from marketing copy; inspect the target SHA in `frontend`/`Back-End`, relevant technical documentation, and live GitHub state.
- Do not remove, downgrade, or label a presented feature as future/simulated solely because it is not currently implemented. Keep this distinction in the global context and technical documentation, not by rewriting product presentation.

Global context: [conloq/.github/PROJECT_CONTEXT.md](https://github.com/conloq/.github/blob/main/PROJECT_CONTEXT.md).

## Development

- Preview from the repository root with a static HTTP server, for example `python -m http.server 8000`, then open `http://localhost:8000/`. Serving over HTTP avoids confusing relative-asset behavior with direct `file://` loading.
- After HTML, CSS, JavaScript, or asset changes, manually verify the page in a browser at the responsive ranges encoded in `assets/css/style.css`: up to 480px, 481–549px, 550–769px, 770–1024px, 1025–1280px, and 1281–1536px.
- With no automated checks, the focused verification path is browser console inspection plus checking navigation anchors, image/font loading, the beer carousel, purpose-card pointer tilt, and Mash image toggle behavior.

## Implementation boundaries

- Preserve the existing relative paths and case of asset filenames; `index.html` is the only page entrypoint and loads `assets/script/main.js` at the end of `<body>`.
- Interactive behavior is centralized in `assets/script/main.js`: it duplicates the beer carousel DOM for looping, applies pointer tilt to `.td-block-sobre-conloq`, and toggles the Mash image state through `.bolinhas-container button` and `.Div-Img-Sobre-mash`.
- Responsive behavior is implemented as CSS media-query blocks in `assets/css/style.css`; change the relevant breakpoint block rather than adding a second styling system.
- Keep content and section IDs in `index.html` synchronized with the header/footer anchor links (`#sobre-conloq`, `#Section-Equipe`, `#Section-Cerveja`, `#sobre-sistema`, and `#Footer`).

## Pull requests

- Before `gh pr create` or editing a PR body, read the effective PR template from the base branch: the repository's own `.github/pull_request_template.md` first; only when it does not exist, the organization one in `conloq/.github` (`gh api repos/conloq/.github/contents/.github/pull_request_template.md -q .content | base64 -d`). Never open a PR with a free-form `--body`.
- Keep every section and DoD item verbatim, written in pt-BR. Tick only the items that apply; leave N/A items unticked with a short note. Use `Closes conloq/mash#N` (or `Fixes` for a bug), or "Relacionada a" for a partial delivery.
- No `Co-Authored-By` and no "Generated with" line in commits or PR bodies. `gh pr edit` fails on this account (Projects classic GraphQL error): edit the body with `gh api -X PATCH repos/<owner>/<repo>/pulls/<n> -F body=@file`.
- Full procedure: skill `coordenacao-commit-seguro` (coordination repo).
