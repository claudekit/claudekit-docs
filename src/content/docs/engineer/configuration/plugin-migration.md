---
title: "Engineer Kit Plugin Migration"
description: "Move Engineer Kit installs from legacy copied skills to the Claude Code plugin format"
section: engineer
kit: engineer
category: configuration
order: 5
published: true
---

# Engineer Kit Plugin Migration

ClaudeKit Engineer now ships as a Claude Code plugin. This keeps `/ck:*` skills grouped under the `ck@claudekit` plugin, restores slash-menu descriptions, and gives the CLI one owned install surface to update.

## What You Need To Do

Run:

```bash
ck update
```

For normal global Engineer installs, that is enough. The CLI updates itself, then offers or runs the matching `ck init` follow-up needed to migrate or self-heal the installed kit content.

## How To Verify

Open Claude Code and type:

```text
/ck:plan
```

The slash menu should show the `ck:plan` skill with its description. You can also check the plugin registration:

```bash
claude plugin list
```

Look for `ck@claudekit` in the installed plugin list.

## What Changed

Older global installs copied ClaudeKit-managed skills directly into `~/.claude/skills/`. Current global Engineer installs use a Claude Code plugin registration instead. The CLI still preserves your preferences and custom files; the migration only changes how ClaudeKit-owned kit content is installed and updated.

Local project installs continue to work through the project `.claude/` directory.

## Troubleshooting

### Slash Menu Still Shows No Hint

Run the kit self-heal path:

```bash
ck init -g --kit engineer --install-mode auto
```

Then restart Claude Code and try `/ck:plan` again.

### Doctor Reports Mixed State

Mixed state means copied ClaudeKit skills and the `ck@claudekit` plugin are both visible. Run:

```bash
ck doctor
ck init -g --kit engineer --install-mode auto
```

`ck init` prunes stale ClaudeKit-owned files and keeps user-owned custom skills intact.

### Plugin Disabled Or Missing

Run:

```bash
ck doctor --fix
```

If the plugin is still missing after the fix pass, rerun:

```bash
ck init -g --kit engineer --install-mode plugin
```

### Need A Temporary Rollback

Use legacy mode only when you intentionally need copied skills:

```bash
ck init -g --kit engineer --install-mode legacy
```

Return to the plugin path with:

```bash
ck init -g --kit engineer --install-mode auto
```

## FAQ

### Can I Still Use `~/.claude/skills/`?

Yes. Your own skills can still live there. ClaudeKit-managed `ck:*` skills are managed by the plugin in the default global install mode so updates can remove stale files cleanly.

### Does This Affect Project-Local Installs?

Project-local installs still place kit content inside that project's `.claude/` directory. The plugin migration mainly affects global Engineer installs.

### Do I Need To Delete Old Files Manually?

No. Use `ck update` or `ck init -g --kit engineer --install-mode auto`. The CLI knows which ClaudeKit-owned legacy paths can be removed.

### What If I Pinned Legacy Mode?

Legacy mode remains available for compatibility. If you previously chose `legacy`, the CLI preserves that preference until you opt into `auto` or `plugin`.
