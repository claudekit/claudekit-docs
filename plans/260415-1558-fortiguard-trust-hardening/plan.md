# FortiGuard Trust Hardening

Status: In Progress
Issue: `claudekit-docs#147`
Intake: `claudekit-engineer#639`

## Goal

Reduce repo-owned false-positive risk for `docs.claudekit.cc` by hardening public trust signals, metadata, crawlability, and security posture in the docs site itself.

## Phases

1. [Phase 01](./phase-01-site-trust-signals.md) - Add site-level trust and discovery signals
2. [Phase 02](./phase-02-validation-and-rollout.md) - Validate outputs and prepare rollout notes

## Expected Outcomes

- Root docs hostname presents as a neutral documentation site
- Canonical and social metadata are emitted consistently
- `robots.txt`, `security.txt`, and sitemap artifacts exist
- Ingress sends basic security headers
- Remaining infra-only follow-up is isolated from repo-owned work

## Dependencies

- Astro site config
- Base layout metadata
- Public static files
- Kubernetes ingress config

## Notes

- Do not post back to `claudekit-engineer#639` until the docs fix is merged to `dev`, promoted to `main`, and confirmed live.
- Repo-side hardening is necessary but may not fully clear FortiGuard without external reclassification.
