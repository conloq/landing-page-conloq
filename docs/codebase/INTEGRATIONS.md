# Integrations

## External resources
- Google Fonts Poppins is requested from `fonts.googleapis.com` by `index.html`.
- No API endpoint, database, authentication provider, analytics service, monitoring service, or external application URL is configured in the repository.

## Local resource dependencies
- HTML references local CSS, JavaScript, SVG, JPEG, PNG, and JPEG team-image assets under `assets/`.
- The favicon reference in `index.html` points to `img/Logo-Icon.svg`, but the repository evidence identifies no matching path; this is a broken asset reference until corrected.

## Navigation integration
- Header and hero navigation use same-page anchors.
- Team and footer contact/social links currently use `href="#"`; they are placeholders, not verified integrations.
- The hero CTA scrolls to the local Mash section rather than an external product, demo, or contact destination.

## Operational assumptions
- Relative paths are expected to work when served from the repository root over HTTP.
- No environment variables or secret configuration files are present.

## Security and privacy
- No personal-data submission flow, backend request, cookie configuration, or third-party tracking code is defined in the inspected source.
- External font loading is the only observed third-party network dependency.

## Unknowns and blocked integrations
- No external destinations are available yet for team profiles, contact, WhatsApp, email, GitHub, LinkedIn, or Instagram; the placeholder links should remain identified as unresolved.
- The CTA is intentionally an internal anchor and should continue pointing to the local section.
- The page represents the current Mash system, but no external Mash URL or API integration is required for this landing page at present.
- [TODO] Verify production CSP, referrer policy, and external-resource policy; no deployment configuration is present.

## Evidence
- `index.html`
- `assets/img/`
- `README.md`
- `docs/codebase/.codebase-scan.txt`
