---
date: 260325-1633
slug: fix-skill-doc-inaccuracies
status: completed
---

## Phase Implementation Report

### Executed Phase
- Phase: fix-skill-doc-inaccuracies
- Plan: GH-120 comprehensive sync
- Status: completed

### Files Modified

1. `src/content/docs/engineer/skills/ship.md` — fixed auto-detection table (branch patterns inverted)
2. `src/content/docs/engineer/skills/deploy.md` — fixed config file entries for Coolify/Dokploy/DigitalOcean; removed fabricated arguments table
3. `src/content/docs/engineer/skills/security-scan.md` — fixed tool names (bun audit→npm audit, safety check→pip audit, removed govulncheck/cargo audit)
4. `src/content/docs/engineer/skills/stitch.md` — removed fabricated `--experimental` flag
5. `src/content/docs/engineer/skills/project-organization.md` — removed fabricated `--execute` and `--dry-run` flags
6. `src/content/docs/engineer/skills/ck-debug.md` — added "Additional Capabilities" section with 6 missing techniques
7. `src/content/docs/engineer/skills/ck-plan.md` — added "Subcommands" section (archive, red-team, validate)
8. `src/content/docs/workflows/optimizing-performance.md` — fixed malformed frontmatter (description field had nested yaml)
9. `src/content/docs/engineer/skills/index.md` — fixed "65 skills" → "70+" to match frontmatter/title

### Tasks Completed

- [x] ship.md: branch detection patterns corrected (`feature/* hotfix/* bugfix/*` → official, `dev/* beta/* experiment/*` → beta)
- [x] deploy.md: Coolify `coolify.yaml` → `docker-compose.yml + coolify ref`; Dokploy `dokploy.yaml` → `dokploy.yml`; DigitalOcean `do-app.yaml` → `.do/app.yaml`; removed fabricated args table
- [x] security-scan.md: `bun audit` → `npm audit`, `safety check` → `pip audit`, Go/Rust use generic "language-specific audit tools"
- [x] stitch.md: removed `--experimental` flag (not in source SKILL.md)
- [x] project-organization.md: removed `--execute` and `--dry-run` flags; kept `--organize` with note about confirm-before-execute behavior
- [x] ck-debug.md: added "Additional Capabilities" section listing all 6 missing techniques
- [x] ck-plan.md: added "Subcommands" section with archive, red-team, validate
- [x] optimizing-performance.md: fixed frontmatter — description had unquoted multiline value that included duplicate frontmatter fields
- [x] skills/index.md: "65 skills" → "70+" (matches frontmatter description)

### Tests Status
- Type check: N/A (markdown only)
- Build: pass — 552 pages built in 7.75s, no errors

### Issues Encountered

None. All changes were straightforward doc corrections against verified source SKILL.md files.

### Next Steps

None — all 9 fixes complete, build passes.
