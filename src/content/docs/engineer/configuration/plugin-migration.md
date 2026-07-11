---
title: "Engineer Kit Install Modes"
description: "Choose Normal copied skills or explicitly opt in to Claude and Codex plugins"
section: engineer
kit: engineer
category: configuration
order: 5
published: true
---

# Engineer Kit Install Modes

Global Engineer installs support two modes. **Normal skills are recommended and selected by default.** Plugin mode is an advanced option that requires explicit consent.

## Normal Skills (Recommended)

Normal mode copies ClaudeKit skills to `~/.claude/skills/`, where Claude Code discovers them directly:

```bash
ck init -g --kit engineer
```

Fresh interactive installs show Normal skills first and explain both choices. Non-interactive installs, including `--yes`, select Normal skills unless `--install-mode plugin` is supplied.

Normal and plugin mode expose the same `ck:<skill>` names. Normal mode projects the `ck:` namespace exactly once onto copied skill metadata; plugin payloads remain canonical so each supported runtime can apply its own namespace without duplication.

The compatibility inputs `auto` and `legacy` also select Normal skills:

```bash
ck init -g --kit engineer --install-mode auto
ck init -g --kit engineer --install-mode legacy
```

Normal mode does not install a Codex plugin. Sync the skills to Codex's native directory separately:

```bash
ck migrate --agent codex
```

## Plugin Mode (Advanced Opt-In)

Choose plugin mode explicitly when you want ClaudeKit to register supported Claude Code and Codex plugins:

```bash
ck init -g --kit engineer --install-mode plugin
```

The CLI persists this explicit choice. Later `ck init` and `ck update` runs preserve plugin mode only while the saved preference is `plugin`. Missing, malformed, `auto`, and `legacy` preferences converge to Normal skills rather than inferring consent.

Plugin activation is transactional. ClaudeKit validates a staged replacement before switching the stable plugin source, and restores the previous stage and provider registrations if preparation fails. CK-owned copied skills are removed only after the required Claude plugin and any supported Codex plugin are prepared successfully.

## Return To Normal Skills

To leave plugin mode, run:

```bash
ck init -g --kit engineer --install-mode legacy
```

ClaudeKit installs the copied replacement, then removes CK-owned Claude and Codex plugin registration/cache state. Cleanup is limited to tracked ClaudeKit files; user-created and modified files are preserved.

Restart Claude Code after changing modes so its skill and plugin discovery state reloads.

## Diagnose Mixed State

If copied skills and `ck@claudekit` both appear active, run:

```bash
ck doctor
ck init -g --kit engineer --install-mode legacy
```

Use explicit plugin mode instead only when that remains your intended choice:

```bash
ck init -g --kit engineer --install-mode plugin
```

## FAQ

### Does This Affect Project-Local Installs?

No. This choice applies to global Engineer installs. Project-local installs continue to place kit content inside the project's `.claude/` directory.

### Do I Need To Delete Old Files Manually?

No. Let `ck init` perform the transition. It knows which CK-owned paths are safe to remove and preserves unknown or modified files.

### Why Does Metadata Say `legacy`?

`legacy` is the stored compatibility value for the user-facing Normal skills choice. It does not mean the installation is unsupported or deprecated.
