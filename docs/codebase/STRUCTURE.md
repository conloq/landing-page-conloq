# Structure

## Repository layout
```text
.
├── index.html
├── README.md
├── LICENSE
├── AGENTS.md
├── assets/
│   ├── css/style.css
│   ├── script/main.js
│   └── img/
│       ├── carrossel/
│       ├── equipe/
│       ├── icons/
│       ├── logos/
│       └── telas/
└── docs/codebase/
```

## Entry points
- Browser entry point: `index.html`.
- Stylesheet entry point: `assets/css/style.css`, linked by the HTML page.
- Behavior entry point: `assets/script/main.js`, loaded at the end of `<body>`.

## Page sections
The document contains a fixed header, hero, Conloq description, team, artisanal-beer context, Mash system section, decorative waves, and footer. Header/footer anchor IDs are documented in `AGENTS.md` and implemented in `index.html`.

## Asset organization
- Logos: `assets/img/logos/`.
- Team photographs: `assets/img/equipe/`.
- Beer carousel images: `assets/img/carrossel/`.
- Interface screenshots: `assets/img/telas/`.
- Purpose, social, and footer icons: `assets/img/icons/`.

## Ownership boundaries
- Content and markup: `index.html`.
- Responsive presentation and animations: `assets/css/style.css`.
- Interaction logic: `assets/script/main.js`.
- Product documentation and local preview instructions: `README.md`.

## Unknowns
- [TODO] Confirm whether `docs/codebase/` is intended to be committed as repository documentation.
- [ASK USER] Confirm whether the external Mash application belongs in this repository or remains a separate system.

## Evidence
- `index.html`
- `assets/css/style.css`
- `assets/script/main.js`
- `AGENTS.md`
- `README.md`
