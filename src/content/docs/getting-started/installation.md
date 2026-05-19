---
title: Installation
description: "Install ClaudeKit via the CLI — global or project-local, engineer or marketing kit"
section: getting-started
category: getting-started
order: 2
published: true
---
# Installation

ClaudeKit is installed via the **ClaudeKit CLI** (`ck`). The CLI downloads the kit you select from AgentKit releases and copies skills, agents, and configuration into your Claude Code environment.

## Requirements

- **Node.js** v18 or higher
- **npm** v10 or higher (or bun, pnpm, yarn)
- **Claude Code CLI** installed and authenticated (`claude`)
- **GitHub Personal Access Token** with `repo` scope (for private repository access)

> **Note:** A Google Gemini API key is optional. It is only needed if you use the `ai-multimodal` skill for vision/document analysis.

## Step 1: Install the CLI

```bash
# npm (recommended)
npm install -g claudekit-cli

# bun
bun add -g claudekit-cli

# pnpm
pnpm add -g claudekit-cli

# Verify
ck --version
```

## Step 2: Choose Installation Scope

| Mode | Command | Skills installed to | Use when |
|------|---------|-------------------|----------|
| **Global** ⭐ | `ck init -g` | `~/.claude/skills/` | Available in every project |
| **Local** | `ck init` | `./.claude/skills/` | Only this project |

**Global is recommended for most users.** Run once, use ClaudeKit in any project.

## Step 3: Install Your Kit

### Engineer Kit (development workflows)

```bash
# Global — available in all projects
ck init -g --kit engineer

# Local — current project only
cd /path/to/your/project
ck init --kit engineer
```

**What gets installed:**
- 80+ skills (engineer kit includes core skills; 83 total installed)
- Agents (planner, tester, code-reviewer, debugger)
- Configuration files (`.ck.json`, `.ckignore`, `settings.json`)

### Marketing Kit (content & campaigns)

```bash
ck init -g --kit marketing
```

**What gets installed:**
- 60+ skills (social, email, brand, seo, video, campaign, and more)
- Marketing agents (copywriter, designer, campaign-manager)

### Both Kits

Run `ck init -g` once per kit. They install to the same `~/.claude/` directory without conflict:

```bash
ck init -g --kit engineer
ck init -g --kit marketing
```

## Step 4: Authenticate

The CLI needs a GitHub Personal Access Token to download kit releases.

**Automatic (recommended):** If you have the GitHub CLI installed and authenticated, the CLI picks up your token automatically:

```bash
gh auth login  # if not already done
ck init -g --kit engineer  # token detected automatically
```

**Manual:** Create a token at GitHub Settings → Developer settings → Personal access tokens → Tokens (classic). Select the `repo` scope. Then:

```bash
export GITHUB_TOKEN=ghp_your_token_here
ck init -g --kit engineer
```

The CLI also checks `GH_TOKEN` and your OS keychain — you only need to enter a token once.

## Step 5: Start Using ClaudeKit

Launch Claude Code in any project:

```bash
claude
```

Then invoke skills with `/ck:` prefix:

```bash
/ck:cook add user authentication
/ck:fix --auto
/ck:brainstorm should I use REST or GraphQL?
/ck:test
```

Initialize project documentation (optional but recommended):

```bash
/ck:docs init
```

This scans your project and generates `docs/codebase-summary.md`, `docs/code-standards.md`, and `docs/system-architecture.md`.

---

## Verify Installation

```bash
# Check skills are installed
ls ~/.claude/skills/    # Global
ls .claude/skills/      # Local

# Check Claude Code sees the config
claude --version
```

## Update ClaudeKit

Re-run `ck init` to pull the latest release:

```bash
# Update engineer kit globally
ck init -g --kit engineer

# Update to a specific version
ck init -g --kit engineer --release v3.1.0

# Update CLI itself
ck update
```

`ck init` is safe to re-run — it merges updates and preserves your customizations.

---

## Advanced: Manual Installation

> This method is not recommended for most users. Use `ck init` above.

If you cannot use the CLI (no internet on target machine, air-gapped environment):

1. Download the kit release archive from the GitHub Releases page
2. Extract to a local directory
3. Run `ck init --kit-path /path/to/extracted-kit`

Or install from a local directory:

```bash
ck init -g --kit engineer --kit-path ./my-downloaded-kit
```

---

## Troubleshooting

### Permission Errors (npm global install)

```bash
# Option A: Use npx (no global install needed)
npx claudekit-cli init -g --kit engineer

# Option B: Configure npm prefix
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
npm install -g claudekit-cli
```

### GitHub Authentication Failed

```bash
# Install GitHub CLI
brew install gh        # macOS
# or: https://cli.github.com

# Authenticate
gh auth login

# Verify
gh auth status
```

### Claude Code Not Found

Install Claude Code CLI from [claude.ai/code](https://claude.ai/code), then restart your terminal and verify with `claude --version`.

### Skills Not Activating

After global install, verify skills are present:
```bash
ls ~/.claude/skills/cook
# Should show: SKILL.md (and possibly references/ scripts/)
```

If empty, re-run `ck init -g --kit engineer`.

---

## Next Steps

- [AgentKit Architecture](/docs/getting-started/agentkit-overview) — Understand how kits, skills, and agents fit together
- [Quick Start](/docs/getting-started/quick-start) — Build your first feature
- [Skills Overview](/docs/engineer/skills) — Browse all available skills
