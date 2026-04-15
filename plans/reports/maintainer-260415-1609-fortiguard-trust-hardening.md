# Maintainer Report - FortiGuard Trust Hardening

Date: 2026-04-15
Repo: `claudekit-docs`
Issue: `#147`
Intake: `claudekit-engineer#639`

## Diagnosis

- FortiGuard blocks `https://docs.claudekit.cc/` as `Spam URLs`.
- The site is live and returns valid HTML with a valid TLS certificate.
- Repo-owned gaps were trust and discovery signals, not application availability.

## Repo-Owned Fix Scope

- Reworked `/` into a documentation-first homepage.
- Added canonical, Open Graph, Twitter, robots, author, and theme metadata.
- Added `@astrojs/sitemap` with explicit `site` config.
- Added `robots.txt`, `security.txt`, and `/.well-known/security.txt`.
- Added baseline ingress security headers.
- Disabled the AI assistant launcher on the root homepage to reduce visual clutter.

## Validation

- `bun run build` passed after changes.
- Verified generated outputs:
  - `dist/sitemap-index.xml`
  - `dist/robots.txt`
  - `dist/security.txt`
  - `dist/.well-known/security.txt`
- Verified built root HTML contains canonical and social metadata.
- Captured local UI sanity screenshot of the cleaned root page.

## Remaining Non-Repo Work

- Deploy the docs repo fix to `dev`.
- Promote `dev` to `main`.
- Re-submit or escalate FortiGuard reclassification once production reflects the changes.
- Post one final status update back to `claudekit-engineer#639` only after the rollout is complete.
