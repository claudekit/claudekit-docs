---
title: "ck backups"
description: "List, restore, and prune ClaudeKit recovery backups created by destructive operations"
section: cli
order: 9
---

# ck backups

> Manage the scoped recovery backups ClaudeKit creates before destructive operations such as `ck init --fresh` and `ck uninstall`.

## Quick Start

```bash
# List newest backups
ck backups list

# Restore a specific backup
ck backups restore 2026-04-06T21-53-01-706-byrf

# Keep only the newest 10 backups
ck backups prune --keep 10
```

## What Gets Backed Up

ClaudeKit does **not** back up the full `~/.claude/` directory.

Each destructive-operation backup contains only the files ClaudeKit is about to:

- delete
- rewrite

Typical contents include:

- CK-owned tracked command/agent/skill/rule files
- CK-modified tracked files when a destructive flow will replace them
- `metadata.json` when the operation deletes or mutates it

User-owned files that ClaudeKit preserves are not copied into these backups.

## Storage Location

Backups live under:

```text
~/.claudekit/backups/<backup-id>/
```

Each backup directory contains:

```text
manifest.json
snapshot/<relative-paths...>
```

- `manifest.json` describes the operation, source root, and backed-up items
- `snapshot/` stores only the scoped payload for that operation

The backup directory name is also the backup ID used by `ck backups restore` and `ck backups prune`.

## Automatic Retention

ClaudeKit automatically prunes old destructive-operation backups after a new backup is written successfully.

- Default policy: keep the newest `10` backups
- Manual cleanup: `ck backups prune --keep <n>`
- Delete everything: `ck backups prune --all`

## Commands

### List Backups

```bash
ck backups list
ck backups list --limit 5
ck backups list --json
```

This shows backup IDs, operation type, creation time, item count, size, and whether the manifest is valid.

### Restore A Backup

```bash
ck backups restore <backup-id>
ck backups restore <backup-id> --yes
ck backups restore <backup-id> --json
```

Restore writes the backup back to the original `sourceRoot` recorded in the manifest.

Safety behavior:

- requires confirmation unless `--yes` is used
- validates that the backup manifest is well-formed
- validates that restore targets stay inside the original installation root
- blocks restore through symlinked parent directories
- serializes restore against install/uninstall using the same installation lock

### Prune Backups

```bash
ck backups prune --keep 10
ck backups prune <backup-id> --yes
ck backups prune --all --yes
ck backups prune --json
```

Prune can:

- delete one backup by ID
- delete all backups
- keep the newest `N` and delete the rest

## Related Commands

- [`ck init`](/docs/cli/init) — destructive `--fresh` flow creates recovery backups
- [`ck uninstall`](/docs/cli/uninstall) — uninstall creates recovery backups before deleting files
