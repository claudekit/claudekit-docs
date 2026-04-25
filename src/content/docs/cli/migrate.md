---
title: "ck migrate"
description: "Migrate agents, commands, skills, config, rules, and hooks to other AI coding providers with smart reconciliation"
section: cli
order: 9
---

# ck migrate

> One-shot migration of all ClaudeKit portable content (agents, commands, skills, config, rules, hooks) to other AI coding providers with intelligent reconciliation and conflict resolution.

## Quick Start

```bash
# Interactive mode (auto-detects installed providers)
ck migrate

# Migrate to specific providers
ck migrate --agent cursor --agent codex

# Migrate to all supported providers globally
ck migrate --all --global

# Preview migration plan without writing files
ck migrate --dry-run

# Force ASCII borders for legacy terminals
CK_FORCE_ASCII=1 ck migrate --agent codex --dry-run

# Non-interactive with sensible defaults
ck migrate --yes
```

## Terminal Flow

The current CLI flow is optimized to answer the two questions users actually ask during migration:

1. **Where will the files go?**
2. **What changed?**

Before any write happens, `ck migrate` now renders:

- A **source/destination intro panel** showing discovered Claude Code content and the target provider paths
- A **pre-flight summary** with one row per portable type (`Agents`, `Skills`, `Commands`, `Config`, `Rules`, `Hooks`)
- Inline scope notes such as `Codex: global-only` or `merge` when a provider does not map 1:1

After execution, the command ends with a boxed footer:

- **WHERE** — destination paths that were actually touched
- **WHAT** — item counts by type
- **NEXT** — follow-up commands such as `ck doctor` or provider-specific inspection commands

`--dry-run` uses the same structure, but reports what **would** change instead of writing files.

## Scope Behavior

- **Default scope**: project-level
- **Global scope**: pass `-g` or `--global`
- **Provider quirks still apply**: for example, Codex commands remain global-only, so the command will clearly tell you when global output is forced for that provider/type

If you are migrating in older Windows terminals, set `CK_FORCE_ASCII=1` to force the ASCII fallback border set.

## What Happens

The `ck migrate` command:

1. **Discovers** all portable items from your `.claude/` directory (agents, commands, skills, config, rules, hooks)
2. **Detects** installed AI coding providers on your system
3. **Computes** a reconciliation plan comparing source vs target states
4. **Resolves** conflicts interactively (or auto-resolves with `--yes`)
5. **Installs** converted content to each target provider's format
6. **Merges** hook settings into provider-specific `settings.json`
7. **Cleans up** stale registry entries and deprecated paths

## Supported Providers

Each column indicates how well `ck migrate` can transfer that content type to the target provider:

- **Yes** — Provider has a native equivalent. Content migrates 1:1 with full functionality.
- **Partial** — Content is copied/converted, but the provider has no native equivalent for this concept. It may work as context or rules, but not as a first-class feature (e.g., agents merged into a flat context file).
- **-** — Not supported. Content is not migrated to this provider.

| Provider | Agents | Commands | Skills | Config | Rules | Hooks |
|----------|--------|----------|--------|--------|-------|-------|
| Claude Code | Yes | Yes | Yes | Yes | Yes | Yes |
| OpenCode | Yes | Yes | Yes | Yes | Yes | - |
| GitHub Copilot | Yes | - | Yes | Yes | Yes | - |
| Codex | Yes | Yes | Yes | Yes | Yes | Yes |
| Droid | Yes | Yes | Yes | Yes | Yes | Yes |
| Cursor | Partial | - | Yes | Yes | Yes | - |
| Roo Code | Yes | - | Yes | Yes | Yes | - |
| Kilo Code | Yes | - | Yes | Yes | Yes | - |
| Windsurf | Partial | Yes | Yes | Yes | Yes | - |
| Goose | Partial | - | Yes | Yes | Yes | - |
| Gemini CLI | Partial | Yes | Yes | Yes | Yes | - |
| Amp | Partial | - | Yes | Yes | Yes | - |
| Antigravity | - | Yes | Yes | Yes | Yes | - |
| Cline | Partial | - | Yes | Yes | Yes | - |
| OpenHands | Partial | - | Yes | Yes | Yes | - |

## Options

### Target Options

| Flag | Description |
|------|-------------|
| `-a, --agent <provider>` | Target provider(s), can be specified multiple times |
| `--all` | Migrate to all supported providers |
| `-g, --global` | Install globally instead of project-level |
| `-y, --yes` | Skip confirmation prompts |
| `-f, --force` | Force reinstall deleted/edited items |
| `--dry-run` | Preview migration plan without writing files |

### Content Selection

| Flag | Description |
|------|-------------|
| `--config` | Migrate CLAUDE.md config only |
| `--rules` | Migrate `.claude/rules/` only |
| `--hooks` | Migrate `.claude/hooks/` only |
| `--skip-config` | Skip config migration |
| `--skip-rules` | Skip rules migration |
| `--skip-hooks` | Skip hooks migration |
| `--source <path>` | Custom CLAUDE.md source path |

## Content Selection Logic

The content selection flags follow a precise truth table:

**"Only" mode** — when any of `--config`, `--rules`, `--hooks` are specified:
- `--config` — only config (no agents/commands/skills/rules/hooks)
- `--rules` — only rules
- `--hooks` — only hooks
- `--config --rules` — only config AND rules
- `--config --hooks` — only config AND hooks
- `--config --rules --hooks` — only config, rules, AND hooks

**"Skip" mode** — when any of `--skip-*` flags are used:
- `--skip-config` — everything except config
- `--skip-rules` — everything except rules
- `--skip-hooks` — everything except hooks

**Default** (no flags) — migrates everything.

## Reconciliation Engine

The migrate command uses a sophisticated reconciliation engine that:

1. **Computes checksums** for both source items and target files
2. **Compares states** against the portable registry to detect:
   - New items to install
   - Updated items needing refresh
   - Unchanged items to skip
   - Deleted items to clean up
   - Conflicts requiring resolution
3. **Generates a plan** showing all actions before execution

### Conflict Resolution

When a target file has been modified externally, the command offers:
- **Overwrite** — replace with source content
- **Smart merge** — attempt to merge changes
- **Skip** — keep existing content
- **View diff** — see the differences before deciding

## Examples

### Migrate everything to Cursor

```bash
ck migrate --agent cursor
```

### Migrate config and rules to all providers

```bash
ck migrate --all --config --rules
```

### Force re-migrate hooks globally

```bash
ck migrate --all --global --hooks --force
```

### Preview what would change

```bash
ck migrate --dry-run
```

### Migrate to multiple specific providers

```bash
ck migrate --agent droid --agent codex --agent cursor
```

### Skip hooks during migration

```bash
ck migrate --all --skip-hooks
```

### Use custom CLAUDE.md source

```bash
ck migrate --agent cursor --source ./custom/CLAUDE.md
```

## Migration Phases

### Phase 1: Discovery
Scans `.claude/agents/`, `.claude/commands/`, `.claude/skills/`, `.claude/rules/`, `.claude/hooks/`, and `CLAUDE.md` for portable content.

### Phase 2: Provider Selection
Auto-detects installed providers or prompts for selection. Use `--agent` or `--all` to skip detection.

### Phase 3: Scope Selection
Choose between project-level (`.claude/` in CWD, the default) or global (`~/.claude/`) installation.

### Phase 4: Reconciliation
Computes a migration plan using checksums and registry state. Displays actions (install, update, skip, delete, conflict).

### Phase 5: Execution
Installs items, merges hook settings, processes metadata deletions, and cleans up stale entries.

### Phase 6: Summary
Displays a destination-aware `WHERE / WHAT / NEXT` footer and offers rollback on partial failures.

## Rollback on Failure

If some items fail while others succeed, the command offers a rollback option:
- **New writes** are removed
- **Overwritten files** are preserved (cannot be rolled back)
- Registry entries are cleaned up

## Related Commands

- [ck init](/docs/cli/init) — Initialize or update ClaudeKit
- [ck uninstall](/docs/cli/uninstall) — Remove ClaudeKit installations
- [ck doctor](/docs/cli/doctor) — Diagnose installation issues
