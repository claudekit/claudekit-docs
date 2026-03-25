---
title: "Changelog"
description: "Release notes and version history for ClaudeKit Engineer Kit"
section: changelog
order: 0
published: true
---

# Changelog

Track all releases and changes for the ClaudeKit Engineer Kit.

---

## v2.14.0 (Upcoming)

### Highlights

- **3-Tier Eval Infrastructure** — Static validation ($0, <5s), E2E via AI CLI (~$3.85/run), LLM judge scoring (~$0.15/run). Run with `bun scripts/eval/run.ts [1|2|3|all]`. Configurable via `CK_EVAL_CMD` env var.
- **Cognitive Framing** — All 9 agents enhanced with expert personas (QA Lead, Staff Engineer, Senior SRE, Tech Lead, etc.) for measurably better output.
- **Diff-Aware Testing** — Tester agent analyzes git diff, runs only affected tests via 5 mapping strategies.
- **`/ck:retro` Skill** — Data-driven sprint retrospectives with git metrics, health indicators, and comparison mode.
- **Agent Teams v3.0** — Updated to current Claude Code Agent API.

### New Skills

| Skill | Description |
|-------|-------------|
| `retro` | Data-driven sprint retrospectives |
| `stitch` | Google Stitch AI design generation |
| `deploy` | Multi-platform deployment with auto-detection |
| `llms` | llms.txt generator (llmstxt.org spec) |
| `security-scan` | Security vulnerability scanner |
| `ship` | Unified ship pipeline (branch → PR) |
| `project-organization` | File/directory structure standardizer |

### Improvements

- Adversarial code review: scope gate (skip if ≤2 files / ≤30 lines), context anchoring, expanded attack categories
- Preview HTML mode: theme toggle, typography floor, improved palette
- Frontend-design: taste-skill design intelligence integration
- AI Artist: upgraded to Nano Banana 2 as default image generation model
- Fix skill: updated references and parallel exploration patterns
- Statusline colors: configurable ANSI color control via `.ck.json`
- Hook diagnostics: structured logging for hook execution
- Manifest: Windsurf global path migration, skills consolidation paths
- JSON schema reference in `settings.json`
- Attribution API migrated from deprecated `includeCoAuthoredBy`

### Removals

- `ck-help` skill removed (replaced by ClaudeKit Assistant Discord bot)

### Bug Fixes

- Eval: type safety fix in `testSkill()` return type, reference validation logic fix
- Retro: sentinel file creation, Python test file pattern, `gh issue list` flag
- Docs-manager: heading consistency normalization
- Project-manager: duplicate role framing removed

---

### CLI v3.36.0 (Upcoming)

- **Hook Diagnostics Dashboard** — `ck config` shows hook execution logs, timing, and errors
- **Quality Gate Hooks** — Git pre-commit/pre-push hooks enforce lint + test locally
- **`ck migrate` UX Overhaul** — Source transparency, unified discovery, path previews
- **StatuslineColors Config** — Toggle ANSI color rendering in status line
- Migration hardening: TOCTOU race fix, file locks, stale codex config cleanup, Windows compat

---

## v2.13.0 (2026-02-25)

### Highlights

- **`ck:` namespace prefix** — All skill names prefixed with `ck:` to avoid collisions with Claude Code built-ins
- **`argument-hint` field** — Added to all skills for improved discoverability
- **`ck-debug` / `ck-plan` renames** — Skill directories renamed to avoid built-in `/debug` and `/plan` collisions
- Various namespace cleanup and cross-reference fixes
- `chrome-devtools` evaluate fix

---

## v2.12.0 (2026-02-05)

### Highlights

- **Agent Teams v2.1.0** — Complete rewrite as CK-native imperative execution engine. Templates auto-execute. Event-driven hooks (TaskCompleted, TeammateIdle) for monitoring. Agent memory persistence.
- **Portable manifest** — Codex AGENTS.md to `.codex/agents/` path migration support
- **`/ck:plan red-team`** — Adversarial plan review command with hostile reviewer lenses
- **Command-to-Skill migrations** — `bootstrap`, `plan` modes consolidated into skills

### New Skills

| Skill | Description |
|-------|-------------|
| `team` | Agent Teams orchestration (v2.1.0) |
| `plan` | Consolidated planning skill (replaces `/ck:plan --fast`, `/ck:plan --hard`, `/ck:plan --parallel`, `/ck:plan --two`) |
| `bootstrap` | Project scaffolding skill (was command) |
| `test` | Comprehensive testing skill |
| `project-management` | Task tracking and session bridging |
| `mintlify` | Mintlify docs site builder (v2.0.0) |

### New Commands

- `/ck:plan red-team` — Adversarial plan review with 4 hostile lenses

### New Agents

- **Code Simplifier** — Autonomous code refinement agent

### Improvements

- Enhanced `skill-creator` with Skillmark benchmark support
- Native Task orchestration for `/ck:fix`, `/ck:code-review`, `/ck:scout`, `/ck:debug` skills
- `/ck:preview` contextual path resolution and responsive Mermaid scaling
- Chrome DevTools OS-based headless detection and interactive OAuth login
- Team coordination rules decoupled from default orchestration

---

## v2.11.0 — v2.11.3 (2026-02-20 — 2026-02-21)

### v2.11.3 (Hotfixes)

- Discord 25-field embed limit guard
- Double-emoji fix in release notification headers
- Empty-changelog guard for Discord notifications
- Double error log timeout prevention

### v2.11.2 (Hotfixes)

- Scout-block: broad glob pattern detection (`**/*.ext`)
- Scout-block: context-aware path extraction with heredoc detection
- Scout-block: compound command and allowlist edge cases
- Scout-block: absolute/relative path normalization
- Hooks: absolute paths in `buildRulesSection` (prevents wrong `plans/` directory)
- Windows: reduced terminal freeze from excessive process spawning
- Session-init: reduced command failures

### v2.11.1

- Added `hotfix:` commit type for distinct release note visibility in CHANGELOG and GitHub releases

### v2.11.0

- **Always-on diagnostics logging** — Crash wrappers on all hooks for automatic error capture

---

## v2.10.0 (2026-02-05)

### Features

- **Focused Reader 2.0** — Redesigned markdown-novel-viewer
- **Plan validation propagation** — Auto-propagate validation decisions to phase files
- **Visual generation modes** — `/ck:preview --explain`, `--slides`, `--diagram`, `--ascii`

### Improvements

- `cook-after-plan-reminder` hook for plan-to-implementation flow
- `code-review` skill with edge case scouting and token efficiency
- `skill-creator` skill with rules and subagent awareness
- Language-aware file naming guidance hook
- Monorepo-aware worktree paths (`internal worktrees/`)

### Bug Fixes

- `/ck:docs init` stall after Phase 1
- Empty local hooks config inheritance
- Preview ASCII diagram alignment and unicode handling

---

## Earlier Releases

For release notes prior to v2.10.0, see the [GitHub Releases page](https://github.com/claudekit/claudekit-engineer/releases).

---

## Release Channels

| Channel | Branch | npm Tag | Description |
|---------|--------|---------|-------------|
| **Stable** | `main` | `latest` | Production-ready, fully tested |
| **Beta** | `dev` | `beta` | Pre-release features, may have rough edges |

```bash
# Stable (default)
ck update

# Beta
ck update --beta
```

---

## Versioning

ClaudeKit Engineer follows [Semantic Versioning](https://semver.org/):

- **Major** (X.0.0): Breaking changes requiring migration
- **Minor** (0.X.0): New features, backward-compatible
- **Patch** (0.0.X): Bug fixes and hotfixes

Releases are automated via semantic-release on merge to `main`.
