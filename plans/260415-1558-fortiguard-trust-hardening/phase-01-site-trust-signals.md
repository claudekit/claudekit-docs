# Phase 01 - Site Trust Signals

## Context Links

- Issue: `claudekit-docs#147`
- Intake issue: `claudekit-engineer#639`
- Files:
  - `src/pages/index.astro`
  - `src/layouts/BaseLayout.astro`
  - `astro.config.mjs`
  - `k8s/ingress.yaml`
  - `public/*`

## Overview

Priority: High
Status: In Progress
Brief: Strengthen the docs host's public identity so it looks like a documentation property instead of a low-context landing page with weak crawl and trust signals.

## Key Insights

- FortiGuard is blocking `docs.claudekit.cc` as `Spam URLs`.
- The docs site is healthy, but public trust/discovery signals are incomplete.
- Repo-owned fixes should focus on crawlability, metadata quality, and a more neutral docs-first entrypoint.

## Requirements

- Add a deployed `site` URL and sitemap generation.
- Add canonical and social metadata in the base layout.
- Add `robots.txt` and `security.txt`.
- Make the root page more obviously documentation-first.
- Add baseline security headers at ingress level.

## Architecture

- `BaseLayout` owns document metadata.
- `index.astro` owns the root page posture.
- `astro.config.mjs` owns site URL and build integrations.
- `public/` owns static trust files.
- `k8s/ingress.yaml` owns response header policy at the edge ingress layer.

## Related Code Files

Modify:
- `src/pages/index.astro`
- `src/layouts/BaseLayout.astro`
- `astro.config.mjs`
- `package.json`
- `bun.lock`
- `k8s/ingress.yaml`

Create:
- `public/robots.txt`
- `public/security.txt`

## Implementation Steps

1. Add `@astrojs/sitemap` and configure `site`.
2. Emit canonical, Open Graph, and Twitter metadata from `BaseLayout`.
3. Add crawl and contact trust files in `public/`.
4. Rework the root page copy and structure toward documentation-first framing.
5. Add ingress annotations for baseline security headers.

## Todo List

- [ ] Configure sitemap generation
- [ ] Add metadata hardening
- [ ] Add static trust files
- [ ] Rework root docs page
- [ ] Add ingress security headers

## Success Criteria

- Build emits sitemap artifacts.
- Generated HTML contains canonical and social metadata.
- `robots.txt` and `security.txt` resolve successfully.
- Root page copy reads as documentation-first.
- Ingress config is valid YAML and includes header hardening.

## Risk Assessment

- Root page copy changes may affect existing positioning.
- New headers must not break embedded assets or third-party integrations.

## Security Considerations

- Prefer restrictive but low-risk headers.
- Avoid CSP changes without full asset audit.

## Next Steps

- Run build validation and inspect generated artifacts.
- Capture rollout notes for post-merge reclassification follow-up.
