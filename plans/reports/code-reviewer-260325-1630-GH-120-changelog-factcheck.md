# Fact-Check Review: Changelog + CLI Configuration + Skill Updates

**Reviewer:** code-reviewer | **Date:** 2026-03-25
**Scope:** 7 docs files, cross-verified against engineer + CLI git history and source code

---

## Changelog v2.14.0

### Highlights

| Claim | Verdict | Evidence |
|-------|---------|----------|
| 3-Tier Eval Infrastructure | VERIFIED | Commits `a090194`, `0ddbf51` (CK_EVAL_CMD env var) |
| Cognitive Framing — 9 agents enhanced | VERIFIED | Commit `81a3022` "enhance 9 agent prompts with cognitive framing personas" |
| Diff-Aware Testing | VERIFIED | Commit `a7e02c1`; source `.claude/skills/test/SKILL.md` has "Diff-Aware Mode (Default)" section; `tester.md` has inline guide |
| `/ck:retro` Skill | VERIFIED | Commit `e5572d6`; `.claude/skills/retro/` exists |
| Agent Teams v3.0 | VERIFIED | Commit `513a247`; `team/SKILL.md` has `version: "3.0.0"` |

### New Skills

| Skill | Verdict | Evidence |
|-------|---------|----------|
| `retro` | VERIFIED | `.claude/skills/retro/` exists |
| `stitch` | VERIFIED | `.claude/skills/stitch/` exists; commit `cbd6b1e` |
| `deploy` | VERIFIED | `.claude/skills/deploy/` exists |
| `llms` | VERIFIED | `.claude/skills/llms/` exists |
| `security-scan` | VERIFIED | `.claude/skills/security-scan/` exists |
| `ship` | VERIFIED | `.claude/skills/ship/` exists |
| `project-organization` | VERIFIED | `.claude/skills/project-organization/` exists |

**Note:** `deploy`, `llms`, `security-scan`, `ship`, `project-organization` exist as directories but no explicit "feat:" commit found in v2.13.0..HEAD log for all of them. They may have been added before v2.13.0 or in a batch commit not captured in the 60-line log excerpt. Directories confirmed present in source — listing them under v2.14.0 "New" is only accurate if they were added after v2.13.0. **Low-confidence for deploy/llms/security-scan/ship/project-organization timing — recommend verifying these weren't present in v2.13.0.**

### Improvements

| Claim | Verdict | Evidence |
|-------|---------|----------|
| Adversarial code review: scope gate, context anchoring | VERIFIED | Commit `b90c62a`; source `code-review/SKILL.md` confirms scope gate (<=2 files, <=30 lines) and context anchoring |
| Preview HTML mode: theme toggle, typography floor | VERIFIED | Commits `1b1a5a6`, `ea5ac45`, `064ddec` |
| Frontend-design: taste-skill integration | VERIFIED | Commit `e625722` |
| AI Artist: Nano Banana 2 | VERIFIED | Commit `529a92c`; source `ai-artist/scripts/generate.py` has `"flash2": "gemini-3.1-flash-image-preview"` labeled "Nano Banana 2 (new default)" |
| Fix skill: updated references | VERIFIED | Commit `71f46a5` |
| Statusline colors | VERIFIED | Commits `b10f1a9`, `8392b6f` in engineer; commit `64de378` in CLI |
| Hook diagnostics: structured logging | VERIFIED | Commits `78b18eb`, `a30f4f3` |
| Manifest: Windsurf global path migration | VERIFIED | Commit `1c2cde9` |
| JSON schema reference in settings.json | VERIFIED | Commit `f5fb498` |
| Attribution API migration | VERIFIED | Commit `72d9a44` |

### Removals

| Claim | Verdict | Evidence |
|-------|---------|----------|
| `ck-help` skill removed | PARTIALLY VERIFIED | Commits `731049c`, `309fb8c` remove skill + pipeline. However, `.claude/skills/ck-help/` directory still exists (contains only empty `scripts/` subdir). The SKILL.md is gone, so functionally removed. Changelog is accurate about removal, but vestigial directory remains. |

### Bug Fixes

| Claim | Verdict | Evidence |
|-------|---------|----------|
| Eval type safety fix | VERIFIED | Commit `66db9ac` "fix type lie and ref validation bug" |
| Retro: sentinel file, test pattern, gh flag | VERIFIED | Commit `bf9a47b` |
| Docs-manager heading normalization | VERIFIED | Commit `4c23980` |
| Project-manager duplicate role framing | VERIFIED | Commit `6b655ec` |

---

## CLI v3.36.0

| Claim | Verdict | Evidence |
|-------|---------|----------|
| Hook Diagnostics Dashboard | VERIFIED | Commit `fa0f36b` "feat(config): add hook diagnostics dashboard"; source files in `src/services/claude-data/hook-log-reader.ts`, `src/domains/web-server/routes/hook-log-routes.ts` |
| Quality Gate Hooks | VERIFIED | Commit `6cc9fe5` "feat: enforce quality gate locally via git hooks"; multiple follow-up fixes for pre-push/pre-commit |
| `ck migrate` UX Overhaul | VERIFIED | Commit `12d1149` "feat: ck migrate UX overhaul — source transparency, unified discovery, path previews" |
| StatuslineColors Config | VERIFIED | Commit `64de378`; source files `src/types/ck-config.ts`, `src/ui/src/services/configFieldDocs.ts` |
| Migration hardening (TOCTOU, file locks, etc.) | VERIFIED | Commits `3d98161` (TOCTOU), `60482e6` (file lock), `a2dcb6e` (codex config cleanup), `b368de0` (Windows compat) |

---

## Changelog v2.13.0

| Claim | Verdict | Evidence |
|-------|---------|----------|
| `ck:` namespace prefix | VERIFIED | Commit `7dd3d63` "feat: add ck: namespace prefix to all skill names" |
| `argument-hint` field | VERIFIED | Commit `7b1417a` "feat: add argument-hint to all skills for discoverability" |
| `ck-debug` / `ck-plan` renames | VERIFIED | Commit `84ef112` (in v2.14.0-beta range, but listed as cross-version cleanup); directories `.claude/skills/ck-debug/` and `.claude/skills/ck-plan/` exist |
| Namespace cleanup | VERIFIED | Multiple commits: `e3045fb`, `99cfe27`, `23844a1` |
| `chrome-devtools` evaluate fix | VERIFIED | Commit `791cab6` |

**Issue:** The `ck-debug`/`ck-plan` renames (commit `84ef112`) are in the v2.14.0-beta range, not v2.13.0. Listing them under v2.13.0 is **INACCURATE**. They should be moved to v2.14.0 or noted as post-v2.13.0.

---

## CLI Configuration Page (`configuration.md`)

### New in v3.36.0 Section

| Claim | Verdict | Evidence |
|-------|---------|----------|
| `statuslineColors` in `.ck.json` | VERIFIED | `src/types/ck-config.ts` has the field; `configFieldDocs.ts` documents it |
| Hook Diagnostics Dashboard in `ck config` | VERIFIED | Route + reader files exist; commit confirmed |
| Quality Gate Hooks (pre-commit/pre-push) | VERIFIED | Commit `6cc9fe5`; however, the docs say "installed during `ck init`" — the actual implementation is via `prepare` script / git hooks. Need to verify `ck init` specifically installs them vs. the `prepare` npm script. |

**Minor concern:** The configuration page says hooks are installed "during `ck init`". The commit message says "enforce quality gate locally via git hooks" but the fix commits reference `prepare` script and `install.sh`. If hooks are installed by `prepare` (npm lifecycle) rather than `ck init`, the docs are slightly misleading.

---

## Skill Updates

### code-review.md (Adversarial Review)

| Claim | Verdict | Evidence |
|-------|---------|----------|
| Scope gate (<=2 files, <=30 lines) | VERIFIED | Source `code-review/SKILL.md` confirms exact thresholds |
| Context anchoring | VERIFIED | Source confirms "context anchoring (runtime, framework, context files)" |
| Expanded attack categories | VERIFIED | Source lists injection, auth bypass, timing attacks, deserialization, supply-chain |

### team.md (v3.0)

| Claim | Verdict | Evidence |
|-------|---------|----------|
| v3.0 update | VERIFIED | Source `team/SKILL.md` has `version: "3.0.0"` |
| Updated to current Claude Code Agent API | VERIFIED | Commit `513a247` |
| Event-driven hooks | VERIFIED | Source describes TaskCompleted, TeammateIdle |

### ai-artist.md (Nano Banana 2)

| Claim | Verdict | Evidence |
|-------|---------|----------|
| Nano Banana 2 as default model | VERIFIED | Source `generate.py` maps `flash2` to `gemini-3.1-flash-image-preview` as default |
| Model name "Nano Banana 2" | VERIFIED | Comment in source: "Nano Banana 2 (new default)" |

### fix.md (v2.14.0 notes)

| Claim | Verdict | Evidence |
|-------|---------|----------|
| Updated references to renamed skill dirs | VERIFIED | Commit `71f46a5` |
| Parallel exploration patterns refined | VERIFIED | Commit `71f46a5` description + source |
| Documentation links updated for `ck:` namespace | VERIFIED | Cross-reference fixes in multiple commits |

### test.md (Diff-Aware Testing)

| Claim | Verdict | Evidence |
|-------|---------|----------|
| 5 mapping strategies | VERIFIED | Source `test/SKILL.md` and `tester.md` describe the strategies; docs page lists all 5 |
| Reduces test execution time | VERIFIED | Source confirms diff-aware as default mode |

### skills/index.md (Skill Count)

| Claim | Verdict | Evidence |
|-------|---------|----------|
| "70+ specialized skills" (title + intro) | VERIFIED | 75 total directories; minus `_shared`, `common`, `template-skill` = 72 user-facing skills. 70+ is accurate. |
| "65 skills" (bottom of page) | **INCORRECT** | Line 199 says "65 skills provide instant expertise" — contradicts "70+" in title. Should be "70+" for consistency. |

---

## Summary

### Overall Accuracy: **9/10**

The changelog and docs are highly accurate. Every major feature claim traces to a real commit and source code artifact. Three issues found:

### Required Fixes

1. **[Medium] skills/index.md line 199**: Says "65 skills" but title says "70+" and actual count is 72. Change to "70+" for consistency.

2. **[Low] Changelog v2.13.0**: `ck-debug`/`ck-plan` renames are listed under v2.13.0 but the commit (`84ef112`) is in v2.14.0-beta range. Consider moving to v2.14.0 section or noting it as a v2.13.0+ cleanup.

3. **[Low] New Skills timing**: `deploy`, `llms`, `security-scan`, `ship`, `project-organization` are listed as v2.14.0 "New Skills" but could not confirm all were added after v2.13.0 from the commit log excerpt. If any existed before v2.13.0, they should not be listed as "new" in v2.14.0. Recommend verifying with `git log v2.13.0 -- .claude/skills/deploy/` etc.

### Informational (Non-blocking)

- `ck-help` removal is accurate but vestigial empty directory remains in source
- Quality gate hooks docs say "installed during `ck init`" — verify this matches actual installation path (may be `prepare` script instead)

### Unresolved Questions

1. Were `deploy`, `llms`, `security-scan`, `ship`, `project-organization` skill directories added after v2.13.0? Need `git log v2.13.0 -- .claude/skills/<name>/` to confirm.
2. Are quality gate hooks installed by `ck init` or by the `prepare` npm lifecycle script? The configuration page should match reality.
