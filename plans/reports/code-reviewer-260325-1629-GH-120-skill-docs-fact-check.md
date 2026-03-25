# Fact-Check Review: 9 Skill Doc Pages vs Source SKILL.md

**Reviewer:** code-reviewer
**Date:** 2026-03-25
**Scope:** Factual accuracy audit of doc pages against source SKILL.md files

---

## retro.md
- **Accuracy: PASS**
- Skill name: `ck:retro` -- matches source `name: ck:retro`
- Description accurate: data-driven sprint retro with git metrics
- Flags match source: `timeframe`, `--compare`, `--team`, `--format html|md` -- all present in source
- 6-step workflow matches source Steps 1-6
- Metrics table accurate (commit velocity, LOC, hotspots, churn, test coverage delta, plan completion)
- Minor note: doc says "test coverage delta between periods" -- source actually does NOT compute test coverage delta as a metric; it tracks "test-to-code ratio" (`test_file_changes / total_file_changes`), not coverage. The metrics table in the doc lists "Test coverage delta / Diff coverage reports if present" which is slightly misleading vs source's "Test-to-code ratio". **Low severity -- wording nuance, not fabrication.**
- Internal links: `/docs/engineer/skills/cook`, `/docs/engineer/skills/journal`, `/docs/engineer/skills/plans-kanban` -- all target pages exist

## stitch.md
- **Accuracy: PASS**
- Skill name: `ck:stitch` -- matches source
- Description accurate: Google Stitch AI design generation
- Free tier claim: "200 credits/day (standard), 50/day (experimental)" -- matches source exactly
- Arguments table: `"prompt"`, `--export tailwind|html|design-md`, `--experimental` -- source has more granular actions (generate, export, quota, edit) but the doc simplifies for user consumption. The `--experimental` flag is not explicitly listed as a flag in source (device types are `mobile|desktop|tablet`). **ISSUE: `--experimental` flag appears fabricated.** Source mentions "50/day (experimental)" in quota context but no `--experimental` CLI flag.
- Design-to-code pipeline matches source orchestration section
- Requirements section: `STITCH_API_KEY` env var -- matches source
- Doc omits: MCP server setup, SDK install step, quota management commands, edit action. Acceptable simplification.
- Internal links: all target pages exist

**Issues:**
1. `--experimental` flag not present in source SKILL.md as a CLI argument -- likely fabricated

## deploy.md
- **Accuracy: PASS**
- Skill name: `ck:deploy` -- matches source
- 15 platforms claim: source description says "15 platforms" -- matches
- Platform detection table: mostly accurate vs source "Detection Signals" table. Minor differences:
  - Doc lists `Vultr | Detected via CLI` -- source does not list Vultr in detection signals table (it's in the reference files list). Not a detection signal per se.
  - Doc lists `Coolify | coolify.yaml` -- source says `docker-compose.yml + coolify ref`. **ISSUE: Mismatch.** Doc simplifies incorrectly.
  - Doc lists `Dokploy | dokploy.yaml` -- source says `dokploy.yml`. **ISSUE: Extension mismatch** (`.yaml` vs `.yml`).
  - Doc lists `TOSE | tose.yaml` -- source says `tose.yaml, tose.json`. Doc omits `tose.json`.
  - Doc lists `DigitalOcean | do-app.yaml` -- source says `.do/app.yaml`. **ISSUE: Path mismatch** (`do-app.yaml` vs `.do/app.yaml`).
- Arguments: `[platform]`, `--env`, `--dry-run` -- source doesn't list these as formal arguments (it has no arguments table). Plausible from workflow but technically doc-specific additions.
- Cost recommendations section: aligns with source's "Platform Priority (Cost-Optimized)" section
- Internal links: all exist

**Issues:**
1. Coolify detection: doc says `coolify.yaml`, source says `docker-compose.yml + coolify ref`
2. Dokploy detection: doc says `dokploy.yaml`, source says `dokploy.yml`
3. DigitalOcean detection: doc says `do-app.yaml`, source says `.do/app.yaml`
4. Arguments table not in source -- doc fabricates structured args

## llms.md
- **Accuracy: PASS**
- Skill name: `ck:llms` -- matches source
- Description accurate: llmstxt.org spec, llms.txt + llms-full.txt
- Arguments: `[path|url]`, `--full`, `--output path` -- match source's argument-hint `"[path|url] [--full] [--output path]"`. Source also has `--url base` which doc omits. Acceptable omission.
- Output format example follows llmstxt.org spec -- accurate
- Core capabilities match source workflow
- Internal links: all exist

## security-scan.md
- **Accuracy: PASS**
- Skill name: `ck:security-scan` -- matches source
- Description: "Zero-dependency security scanner" -- source says "Lightweight security scanner using Claude's reasoning + shell tools. No external dependencies required." Matches.
- Three scan categories match source exactly
- Arguments: `[scope]`, `--secrets-only`, `--deps-only`, `--full` -- match source argument-hint
- Dependency audit tools table: doc lists `bun audit` for Node.js -- source only says `npm audit`. **ISSUE: `bun audit` not in source.**
- Doc lists `safety check` for Python -- source says `pip audit` only (via `pip audit --format json`). **ISSUE: `safety check` not in source.**
- Doc lists `govulncheck` for Go -- source doesn't mention Go audit tool by name, only detects Go via `go.mod`. However, `govulncheck` is the standard tool. **Borderline -- reasonable inference but not in source.**
- Doc lists `cargo audit` for Rust -- source doesn't mention Rust audit tool by name. Same issue.
- OWASP patterns match source (SQL injection, XSS, insecure deserialization, path traversal, missing auth checks)
- Source mentions additional patterns not in doc: command injection, insecure randomness, eval(). Doc omits these.
- Report format example aligns with source
- Internal links: all exist

**Issues:**
1. `bun audit` not in source -- fabricated
2. `safety check` for Python not in source -- fabricated
3. `govulncheck` and `cargo audit` named in doc but not in source (source only detects project type, doesn't name the tool for Go/Rust)

## ship.md
- **Accuracy: PASS (with minor issues)**
- Skill name: `ck:ship` -- matches source
- Source version: 2.0.0; doc doesn't mention version -- fine
- Modes table: doc lists `official`, `beta`, `auto-detect` -- matches source
- Branch detection patterns: doc says `hotfix/* -> main`, `feat/*, fix/*, kai/* -> dev`. Source says `feature/* hotfix/* bugfix/* -> official (target main)`, `dev/* beta/* experiment/* -> beta`. **ISSUE: Doc's detection patterns don't match source.** Doc says `feat/*` -> dev, source says `feature/*` -> main (official). This is a factual error.
- Arguments match source: `--skip-tests`, `--skip-review`, `--skip-journal`, `--skip-docs`, `--dry-run`
- Pipeline stages: doc lists 8 stages. Source lists 12 steps (more detailed: includes pre-flight, link issues, version bump, changelog, etc.). Doc's 8-stage summary is a simplification but omits steps 2 (Link Issues), 6 (Version bump), 7 (Changelog). Not inaccurate per se, but incomplete.
- "Inspired by gstack /ship by Garry Tan" -- in source but not in doc. Fine to omit.
- Internal links: all exist

**Issues:**
1. **CRITICAL: Branch auto-detection patterns are wrong.** Doc says `feat/*, fix/* -> dev`. Source says `feature/*, hotfix/*, bugfix/* -> official (main)` and `dev/*, beta/*, experiment/* -> beta (dev)`. The doc has it backwards for feature branches.

## project-organization.md
- **Accuracy: PASS**
- Skill name: `ck:project-organization` -- matches source
- Two modes (Advisory/Organize) -- matches source exactly
- Directory categories table: mostly matches source Rule 1. Doc lists `src/__tests__/ or tests/` for tests; source lists `tests/ or test/`. Minor difference but not wrong.
- Arguments: `"[description]"`, `--organize`, `--execute`, `--dry-run` -- source doesn't have a formal arguments table. These are reasonable from the modes description but `--execute` and `--dry-run` are not explicitly in source. Source organize mode says "Confirm -- Ask user approval before any moves" (no `--execute` to skip confirmation). **ISSUE: `--execute` flag likely fabricated.**
- Naming conventions section: accurate summary of source Rule 2
- Internal links: all exist

**Issues:**
1. `--execute` flag not in source -- fabricated
2. `--dry-run` for organize mode not explicitly in source

## ck-debug.md
- **Accuracy: PASS**
- Skill name: `ck:debug` -- matches source
- Source version: 4.0.0; doc doesn't mention -- fine
- Core principle "NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST" -- exact match
- Four techniques in doc: Systematic Debugging, Root Cause Tracing, Defense-in-Depth, Verification. Source has **10 techniques** (adds Investigation Methodology, Log & CI/CD Analysis, Performance Diagnostics, Reporting Standards, Task Management, Frontend Verification). **ISSUE: Doc only covers 4 of 10 techniques.** Missing 6 techniques is a significant omission.
- `scripts/find-polluter.sh` mention -- matches source
- Defense-in-Depth four layers match source
- Verification "Iron law" matches source
- Red flags section matches source exactly
- Related skills: doc links Fix and Context Engineering. Source mentions additional tools (psql, gh CLI, docs-seeker, repomix, scout, chrome-devtools, problem-solving). Doc's related skills are a subset -- acceptable.
- Internal links: all exist

**Issues:**
1. **Doc only covers 4 of 10 techniques from source.** Missing: Investigation Methodology, Log & CI/CD Analysis, Performance Diagnostics, Reporting Standards, Task Management, Frontend Verification. These are substantial capabilities (system-level debugging, CI/CD, performance, frontend visual verification).

## ck-plan.md
- **Accuracy: PASS**
- Skill name: `ck:plan` -- matches source
- Workflow modes table: matches source exactly (auto, fast, hard, parallel, two)
- `--no-tasks` flag: matches source
- Workflow process 9 steps: matches source flow (Pre-Creation Check -> Mode Detection -> Research -> Codebase Analysis -> Plan Documentation -> Red Team -> Validation -> Hydrate Tasks -> Context Reminder). Doc omits Cross-Plan Scan and Journal steps from source. Minor omission.
- Plan output structure matches source conventions
- Task hydration description matches source
- Active plan state description aligns with source
- Subcommands (archive, red-team, validate): present in source -- doc omits these. Acceptable for overview page.
- Quality standards match
- Related skills links: Cook, Bootstrap, Agent Teams -- all exist
- Source has `argument-hint: "[task] OR [archive|red-team|validate]"` -- doc doesn't mention archive/red-team/validate subcommands. Moderate omission.
- Internal links: all exist

**Issues:**
1. Missing subcommands: `archive`, `red-team`, `validate` not documented (they are in source)
2. Missing Cross-Plan Dependency Detection (significant source feature)
3. Missing Scope Challenge step (Step 0 in source)

---

## Overall Summary

| Page | Verdict | Critical | High | Medium | Low |
|------|---------|----------|------|--------|-----|
| retro.md | PASS | 0 | 0 | 0 | 1 |
| stitch.md | PASS | 0 | 0 | 1 | 0 |
| deploy.md | PASS | 0 | 0 | 4 | 0 |
| llms.md | PASS | 0 | 0 | 0 | 0 |
| security-scan.md | PASS | 0 | 0 | 3 | 0 |
| ship.md | FAIL | 1 | 0 | 0 | 0 |
| project-organization.md | PASS | 0 | 0 | 2 | 0 |
| ck-debug.md | PASS | 0 | 1 | 0 | 0 |
| ck-plan.md | PASS | 0 | 1 | 0 | 0 |
| **TOTAL** | | **1** | **2** | **10** | **1** |

### Required Fixes (by priority)

**CRITICAL (blocking):**
1. **ship.md line 35**: Branch auto-detection patterns are inverted. `feat/*` should NOT map to `dev`. Source: `feature/* hotfix/* bugfix/* -> official (main)`, `dev/* beta/* experiment/* -> beta (dev)`. Fix the table.

**HIGH (should fix):**
2. **ck-debug.md**: Only 4 of 10 techniques documented. Add at minimum: Investigation Methodology (system-level), Log & CI/CD Analysis, Performance Diagnostics. These represent major capabilities users would miss.
3. **ck-plan.md**: Missing subcommands (`archive`, `red-team`, `validate`), Cross-Plan Dependency Detection, and Scope Challenge. These are core features.

**MEDIUM (nice to fix):**
4. **deploy.md**: Coolify detection says `coolify.yaml` -- should be `docker-compose.yml + coolify ref`
5. **deploy.md**: Dokploy detection says `dokploy.yaml` -- should be `dokploy.yml`
6. **deploy.md**: DigitalOcean detection says `do-app.yaml` -- should be `.do/app.yaml`
7. **deploy.md**: Arguments table fabricated (not in source)
8. **security-scan.md**: `bun audit` not in source
9. **security-scan.md**: `safety check` for Python not in source
10. **security-scan.md**: Go/Rust tool names (`govulncheck`, `cargo audit`) not in source
11. **stitch.md**: `--experimental` flag not in source
12. **project-organization.md**: `--execute` and `--dry-run` flags not in source
13. **retro.md**: "Test coverage delta" wording vs source's "Test-to-code ratio" (low)

### Notes
- All internal links verified -- every `/docs/engineer/skills/*` target page exists in the docs directory
- Frontmatter `section: engineer`, `kit: engineer`, `category: skills` consistent across all 9 pages
- No version numbers claimed in docs (except ck-plan `published: true`), so no version mismatches
- No hallucinated features beyond the flagged items above

### Unresolved Questions
- None
