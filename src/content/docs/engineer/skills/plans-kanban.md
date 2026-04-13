---
title: "ck:plans-kanban"
description: Open the ClaudeKit plans dashboard inside the CLI config UI for plan tracking, timelines, reader navigation, and quick phase actions
section: engineer
kit: engineer
category: skills
order: 50
published: true
---

# Plans Dashboard

> Open the integrated plans dashboard inside `ck config ui`.

## What This Skill Does

`ck:plans-kanban` is now a thin launcher, not a standalone server.

It opens the ClaudeKit CLI dashboard plans route and gives you:

- multi-plan grid and kanban views
- single-plan detail pages with progress summaries
- timeline and activity heatmap views
- markdown reader navigation for `plan.md` and phase files
- quick phase actions such as start, complete, reset, validate, and start-next

## How It Works

When invoked, the launcher:

1. checks whether the CLI dashboard is already running
2. starts `ck config ui --port 3456 --no-open` if needed
3. opens the plans route in your browser

Default URL:

```text
http://localhost:3456/plans
```

If port `3456` is busy, the CLI may auto-fallback to `3457-3460`, and the launcher follows that running port.

## Usage

```bash
/ck:plans-kanban
```

Direct launcher:

```bash
node .claude/skills/plans-kanban/scripts/open-dashboard.cjs
```

Run the dashboard manually:

```bash
ck config ui
```

## Deprecated Compatibility

Old standalone-server flags are still accepted with warnings so existing habits do not break abruptly.

| Legacy input | Current behavior |
| --- | --- |
| `--dir <path>` / positional path | Warns and ignores. The dashboard now discovers plans through the CLI UI route. |
| `--plans <path>` | Warns and ignores. |
| `--port <n>` | Warns and ignores. The launcher targets the CLI dashboard starting at `3456`. |
| `--host <addr>` | Warns and ignores. Use `ck config ui --host ...` directly if needed. |
| `--background` / `--foreground` | Warns and ignores. The standalone server flow no longer exists. |
| `--stop` | Stops the launcher-managed dashboard process if present; otherwise prints manual shutdown guidance. |
| `--open` | Accepted. Opening is now the default behavior. |

## Related CLI Commands

```bash
ck config ui
ck plan status /absolute/path/to/plan.md
cd /absolute/path/to/plan-dir && ck plan check 1 --start
cd /absolute/path/to/plan-dir && ck plan check 1
cd /absolute/path/to/plan-dir && ck plan uncheck 1
```

## What Changed

Before this migration, `plans-kanban` owned:

- its own localhost server
- its own renderer and static assets
- its own background server lifecycle

After the migration, those responsibilities moved into `claudekit-cli` and `ck config ui`.

That means:

- there is no separate `localhost:3500` dashboard anymore
- the canonical visual experience lives under the CLI dashboard
- the skill exists to open the right place quickly, not to run a separate app stack

## Troubleshooting

**`ck` not found**

Install the ClaudeKit CLI and confirm `ck --version` works.

**Dashboard did not open**

Start it manually with:

```bash
ck config ui --port 3456
```

Then open `/plans` on the port the CLI reports.

**Need a custom host or port**

Run `ck config ui` directly with the flags you need. The skill intentionally stays thin and opinionated.

**Need to stop a launcher-started dashboard**

Run the launcher again with `--stop`. If you started the dashboard manually, stop the terminal running `ck config ui`.

## Related Skills

- [ck:kanban](/docs/engineer/skills/kanban) - alias launcher for the same plans dashboard
- [ck:plan](/docs/engineer/skills/ck-plan) - plan creation and state management
- [markdown-novel-viewer](/docs/engineer/skills/markdown-novel-viewer) - long-form markdown reading
