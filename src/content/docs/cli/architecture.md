---
title: "System Architecture"
description: "ClaudeKit CLI modular domain-driven architecture: layers, patterns, security model, and performance characteristics."
section: cli
order: 12
---

# System Architecture

> ClaudeKit CLI uses modular domain-driven design with facade patterns. Concerns are separated into CLI infrastructure, phase-handler commands, domain business logic, cross-domain services, and pure utilities.

## Layer Overview

```
┌────────────────────────────────────┐
│    User Interface (CLI/Terminal)   │
└───────────────┬────────────────────┘
                │
┌───────────────▼────────────────────┐
│   CLI Layer (config, registry)     │
└───────────────┬────────────────────┘
                │
┌───────────────▼────────────────────┐
│ Commands (init, new, skills, etc.) │
│ + 3–8 phase handlers per command   │
└───────────────┬────────────────────┘
                │
┌───────────────▼────────────────────┐
│  Domains (config, github, skills,  │
│  health-checks, installation, ui,  │
│  versioning, help)                 │
└───────────────┬────────────────────┘
                │
┌───────────────▼────────────────────┐
│ Services (file-ops, pkg-installer, │
│ transformers, manifest operations) │
└───────────────┬────────────────────┘
                │
┌───────────────▼────────────────────┐
│ Shared Utils (logger, path-        │
│ resolver, safe-prompts, terminal)  │
└────────────────────────────────────┘
```

## Architectural Patterns

### Facade Pattern

Each domain exposes a single facade file that re-exports its public API, hides internal submodules, and provides a backward-compatible interface as the domain grows.

### Phase Handler Pattern

Complex commands use an orchestrator coordinating discrete phase handlers. Each handler owns one responsibility (~50–100 LOC) and is independently testable.

- **`init`** — 8 phases: options-resolver, selection-handler, download-handler, migration-handler, merge-handler, conflict-handler, transform-handler, post-install-handler
- **`new`** — 3 phases: directory-setup, project-creation, post-setup

### Context-Driven Flow

Each command maintains a context object threaded through all phases. Shared state enables atomic operations and rollback on failure.

## Domains

| Domain | Responsibility |
|--------|---------------|
| `config/` | Config generator, manager, validator; settings merger with conflict resolution |
| `github/` | Octokit wrapper for releases and auth (GitHub CLI only); asset selection with fallback |
| `health-checks/` | Parallel checkers for system, auth, GitHub API, ClaudeKit, platform, network; auto-healer |
| `installation/` | Streaming downloader; ZIP/TAR extraction with path-traversal and 500MB bomb protection; selective merger |
| `skills/` | Detection, customization scanning, migration with backup and rollback |
| `ui/` | Prompts for kit/version selection; ownership display for multi-kit installs |
| `versioning/` | Version checker with 7-day cache; kit version UI with beta filtering |
| `help/` | Custom renderer with theme support and `NO_COLOR` compliance |

## Services

| Service | Responsibility |
|---------|---------------|
| `file-operations/` | Manifest reader/writer with multi-kit support; file ownership tracker |
| `package-installer/` | Node, Python, and system dependency installation; Gemini MCP linker |
| `transformers/` | `/ck:` command prefix applier; folder path transformer for directory renaming |

## Idempotent Migration (`ck migrate`)

Migration follows a 3-phase reconciliation pipeline safe for repeated execution:

1. **RECONCILE** — Pure function (`reconciler.ts`), zero I/O. Produces a `ReconcilePlan` from source items + registry + target state + manifest. 8-case decision matrix: install, update, skip, conflict, delete, rename, path-migration, shared-skip.
2. **EXECUTE** — Applies plan actions. Interactive conflict resolution with diff preview. Updates Registry v3.0 with new SHA-256 checksums.
3. **REPORT** — Terraform-style plan display. Dashboard summary via API.

**Key invariants:** Reconciler is pure — all I/O stays in callers. Registry tracks both source and target checksums. Skills are directory-based and excluded from file-level orphan detection. Manifest paths validated via `safeRelativePath` (no traversal, no empty strings). Migration lock (30s timeout) prevents concurrent registry corruption.

## Security Model

### Path Traversal Prevention
- Canonical path resolution on all archive extraction
- Reject paths containing `..`
- Verify resolved target is within expected base directory

### Archive Bomb Prevention
- Maximum extraction size: 500MB
- Path validation during streaming extraction
- Size checked incrementally, not post-extract

### Authentication
- GitHub CLI only — no raw token prompts
- OS keychain integration for secure storage
- Token sanitization in all log output
- Format validation (`ghp_*`, `github_pat_*`)

### Protected Files (always skipped)
`.env`, `.env.local`, `*.key`, `*.pem`, `node_modules/`, `.git/`, `dist/`, `build/`, `CLAUDE.md`, `.mcp.json`

## Multi-Kit Architecture

The installer supports side-by-side Engineer + Marketing kit installs:

- **Selective Merger** — Hybrid size+checksum comparison. Detects shared files, prevents overwriting newer cross-kit versions.
- **Copy Executor** — Tracks shared files across kits via `setMultiKitContext()`.
- **Manifest Reader** — `findFileInInstalledKits()` locates any file across all installed kits; `getUninstallManifest()` handles kit-scoped removal with shared-file detection.

## Shared Utilities

| Module | Purpose |
|--------|---------|
| `logger.ts` | Structured logging with automatic token sanitization |
| `environment.ts` | Platform detection and concurrency tuning |
| `path-resolver.ts` | XDG-compliant cross-platform path resolution |
| `process-lock.ts` | PID locking with 1-min stale timeout and global exit handler |
| `safe-prompts.ts` | CI-safe prompt wrappers (non-TTY detection) |
| `safe-spinner.ts` | Non-TTY safe spinner output |

## Performance

- **Streaming downloads** — no full-file memory buffering
- **Parallel release fetching** and version checks
- **In-memory token caching** across requests
- **SHA-256 hashing** for change detection without full file reads
- **Release cache** — 1hr TTL (configurable via `CK_CACHE_TTL`)
- **Version check cache** — 7-day TTL
- **Max extraction** — 500MB enforced during streaming

## Error Handling

Structured error classes with user-friendly messages and stack traces in `--verbose` mode. Recovery mechanisms:

- Asset download failure → fallback to tarball
- Migration failure → restore from backup
- Temp directory cleaned on any error path
- Non-TTY detection prevents hanging prompts

## Integration Points

- **GitHub API** (Octokit) — releases and repositories
- **GitHub CLI** (`gh`) — authentication
- **OS Keychain** — secure token storage
- **npm Registry** — package distribution

**File system paths:**
- Local config: `~/.claudekit/config.json`
- Global kits: `~/.claude/`
- Skills manifest: `.claude/skills/.skills-manifest.json`
- Skills backups: `.claude/backups/skills/`

## Related

- [Installation](/docs/cli/installation) — Setup guide
- [Configuration](/docs/cli/configuration) — Config reference
- [Content Automation](/docs/cli/content-automation) — Content daemon architecture
- [Watch - Issue Auto-Responder](/docs/cli/watch) — Watch daemon architecture
