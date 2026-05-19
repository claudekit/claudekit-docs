---
title: "Migrating to AgentKit"
description: "Upgrade from the old claudekit-engineer manual install to the AgentKit CLI-based workflow"
section: getting-started
category: getting-started
order: 8
published: true
---

# Migrating to AgentKit

If you set up ClaudeKit before early 2026 by manually cloning `claudekit-engineer` and copying `.claude/` files, this guide explains how to upgrade to the current AgentKit-based installation.

## What Changed

| Before (pre-AgentKit) | After (AgentKit) |
|----------------------|------------------|
| Clone `claudekit-engineer` repo | `ck init -g --kit engineer` |
| Copy `.claude/` manually | CLI installs skills automatically |
| Skills in `claudekit-engineer/.claude/skills/` | Skills sourced from `agentkit/kits/*/skills/` |
| Update by re-cloning | Update by re-running `ck init -g` |
| Single repo for all skills | Three kits: `engineer`, `marketing`, `core` |

The invocation syntax — `/ck:skill-name` — **did not change**. Your muscle memory is intact.

## Before You Start

Check what you currently have:

```bash
# Where are your skills installed?
ls ~/.claude/skills/       # global
ls .claude/skills/         # local (project-specific)

# What version is installed?
cat ~/.claude/.ck.json 2>/dev/null || echo "No .ck.json found"
```

## Migration Steps

### Step 1: Install the CLI

```bash
npm install -g claudekit-cli
ck --version
```

### Step 2: Back Up Any Customized Skills

If you have modified any skill files locally, back them up before upgrading:

```bash
# Back up only customized skills (ones you edited)
cp -r ~/.claude/skills/my-custom-skill ~/claude-skills-backup/
```

Standard ClaudeKit skill files (`SKILL.md`, `references/`) will be overwritten by `ck init`. **Custom skills you created** with `skill-creator` should also be backed up.

### Step 3: Run `ck init -g`

```bash
ck init -g --kit engineer
```

This will:
1. Detect your existing `~/.claude/` installation
2. Download the latest AgentKit engineer kit release
3. Install/update skills using smart merge (preserving customizations where possible)
4. Update agents and configuration files

If you also use the marketing kit:

```bash
ck init -g --kit marketing
```

### Step 4: Restore Custom Skills

If you backed up custom skills in Step 2, restore them:

```bash
cp -r ~/claude-skills-backup/my-custom-skill ~/.claude/skills/
```

### Step 5: Verify

```bash
# Skills present
ls ~/.claude/skills/ | head -20

# Launch Claude Code and test a skill
claude
# Then type: /ck:brainstorm test that skills are working
```

---

## Changed Skill Locations

Skills that moved or were renamed between old CK and AgentKit:

| Old name / location | New name | Kit |
|--------------------|----------|-----|
| `/ck:code` | `/ck:cook` | core |
| `/ck:plan --two` | `/ck:plan --two` (unchanged) | engineer |
| `/ck:plan --hard` | `/ck:plan --hard` (unchanged) | engineer |
| `.claude/commands/core/cook.md` | `~/.claude/skills/cook/SKILL.md` | core |
| `.claude/commands/fix/fast.md` | `~/.claude/skills/fix/SKILL.md` (use `--quick`) | core |

## Deprecated Skills

These skills existed in the old `claudekit-engineer` but were not carried forward to AgentKit kits. Their capabilities were merged into other skills or dropped:

| Deprecated skill | Alternative |
|-----------------|-------------|
| `cti-expert` | No direct replacement; use `/ck:brainstorm` for threat modeling |
| `/integrate:polar` | Use `payment-integration` skill |
| `/integrate:sepay` | Use `payment-integration` skill |

## FAQ

**Q: Do I need to delete my old `.claude/` files first?**  
No. `ck init -g` merges into your existing installation. Only delete manually if you want a completely clean slate.

**Q: Will my custom CLAUDE.md be overwritten?**  
No. `ck init` does not touch `CLAUDE.md`. It only updates files inside `.claude/`.

**Q: What about local (project-level) installations?**  
Run `ck init --kit engineer` (without `-g`) from your project root to update that project's `.claude/` directory.

**Q: The skills I use aren't in AgentKit — what happened?**  
A small number of skills from the old kit were archived or merged. See the "Deprecated Skills" table above. If a skill you relied on is missing, open a request on [Discord](https://claudekit.cc/discord).

---

## Related

- [Installation](/docs/getting-started/installation) — Full installation guide
- [AgentKit Architecture](/docs/getting-started/agentkit-overview) — How the kit system works
- [Skills Overview](/docs/engineer/skills) — Current skill catalog
