---
title: Installation
description: "Documentation for Installation
description:
section: getting-started
category: getting-started
order: 2
published: true"
section: getting-started
category: getting-started
order: 2
published: true
---

# Installation

This guide will help you install ClaudeKit and set up your development environment. You can choose between manual setup or using the ClaudeKit CLI.

## Video Guide

Prefer video? Watch the complete installation walkthrough:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 0.75rem; border: 1px solid var(--color-border); margin-bottom: 1rem;">
  <iframe
    src="https://www.youtube.com/embed/F_E0GIi_kVY"
    title="ClaudeKit Installation Walkthrough"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

*More tutorials: [@goonnguyen](https://www.youtube.com/@goonnguyen) | X: [@goon_nguyen](https://x.com/goon_nguyen)*

## Prerequisites

Before installing ClaudeKit, ensure you have:

- **Node.js** v18 or higher
- **npm** v10 or higher (or bun, pnpm, yarn)
- **Git** for version control
- **Claude Code CLI** installed (`claude`)
- **Google Gemini API Key** from [Google AI Studio](https://aistudio.google.com)

## Method 1: Manual Setup

This method gives you full control over the installation process.

### Step 1: Clone or Download ClaudeKit Engineer

```bash
# Option A: Clone the repo (requires GitHub access)
git clone https://github.com/claudekit/claudekit-engineer.git

# Option B: Download from GitHub Releases
# Go to: https://github.com/claudekit/claudekit-engineer/releases
```

### Step 2: Copy ClaudeKit Files

Copy these directories and files from `claudekit-engineer` to your project root:

| Path | Description |
|------|-------------|
| `.claude/` | Core config - hooks, skills, commands, workflows |
| `docs/` | Documentation templates |
| `plans/` | Planning templates |
| `CLAUDE.md` | Project instructions for Claude |

**Important hidden files inside `.claude/`:**
- `.ck.json` - ClaudeKit configuration (plan naming, paths, locale)
- `.ckignore` - Directories to exclude from context (like `.gitignore` for LLM)

**Linux/macOS:**
```bash
cp -r claudekit-engineer/.claude your-project/
cp -r claudekit-engineer/docs your-project/
cp -r claudekit-engineer/plans your-project/
cp claudekit-engineer/CLAUDE.md your-project/

# Verify hidden files were copied
ls -la your-project/.claude/
# Should show: .ck.json, .ckignore, settings.json, etc.
```

**Windows (PowerShell):**
```powershell
Copy-Item -Recurse claudekit-engineer\.claude your-project\
Copy-Item -Recurse claudekit-engineer\docs your-project\
Copy-Item -Recurse claudekit-engineer\plans your-project\
Copy-Item claudekit-engineer\CLAUDE.md your-project\

# Verify hidden files were copied
Get-ChildItem -Force your-project\.claude\
# Should show: .ck.json, .ckignore, settings.json, etc.
```

> ⚠️ **Note:** File managers may hide dotfiles (`.ck.json`, `.ckignore`). Use terminal/PowerShell or enable "show hidden files".

### Step 3: Configure Gemini API Key (Optional)

**WHY?**
ClaudeKit utilized [Human MCP](https://www.npmjs.com/package/@goonnguyen/human-mcp) to analyze images and videos since Gemini models have better vision capabilities. But Anthropic already released [**Agent Skills**](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) which is much better for context engineering, so we already converted all tools of Human MCP to Agent Skills.

**Notes:** Gemini API have a pretty generous free requests limit at the moment.

1. Go to [Google AI Studio](https://aistudio.google.com) and grab your API Key
2. Copy `.claude/skills/.env.example` to `.claude/skills/.env` and paste the key into the `GEMINI_API_KEY` environment variable

Now you're good to go.

### Step 4: Start Claude Code

Start Claude Code in your working project:

```bash
# Standard mode
claude

# Skip permissions (use with caution)
claude --dangerously-skip-permissions
```

### Step 5: Initialize Documentation

Run the `/docs:init` command to scan and create specs for your project:

```bash
/docs:init
```

This generates markdown files in the `docs` directory:
- `codebase-summary.md`
- `code-standards.md`
- `system-architecture.md`
- And more...

Now your project is ready for development!

## Method 2: ClaudeKit CLI

The CLI provides an automated way to set up ClaudeKit projects.

### Installation

Install ClaudeKit CLI globally:

```bash
# npm
npm install -g claudekit-cli

# bun
bun add -g claudekit-cli

# Verify installation
ck --version
```

### Which Installation Mode Should I Use?

| Scenario | Mode | Command |
|----------|------|---------|
| **First-time setup** | Global ⭐ | `ck init -g --kit engineer` |
| **Want ClaudeKit in ALL projects** | Global ⭐ | `ck init -g --kit engineer` |
| **Single project only** | Local | `ck init --kit engineer` |
| **CI/CD environment** | Local | `ck init --kit engineer` |

---

### Option A: Global Installation ⭐ Recommended for Most Users

> **Use this when:** You want ClaudeKit available for ALL your projects without copying files to each one.
>
> **Run from:** Any directory (e.g., your home folder, desktop, anywhere)

```bash
# Interactive mode
ck init -g

# With kit selection
ck init -g --kit engineer

# Specific version
ck init -g --kit engineer --version v1.0.0
```

**Where files are installed:**
- **macOS/Linux**: `~/.claude/`
- **Windows**: `%LOCALAPPDATA%\.claude\`

> ✅ **Tip:** Global mode is ideal for personal development. Install once, use everywhere.

---

### Option B: Local Installation (Project-Specific)

> **Use this when:** You want ClaudeKit files ONLY in a specific project.
>
> **Run from:** Your project's root directory (e.g., `/projects/my-app/`)

```bash
# Navigate to your project first!
cd /path/to/your/project

# Interactive mode
ck init

# With kit selection
ck init --kit engineer

# With exclude patterns
ck init --exclude "local-config/**" --exclude "*.local"
```

**Where files are installed:** Inside your current project directory (`./.claude/`)

> ⚠️ **Warning:** Running `ck init` (without `-g`) from your **home directory** or **user folder** will install ClaudeKit locally there, which may cause hook path errors. If you want ClaudeKit available everywhere, use `ck init -g` instead.

---

### Update the CLI Itself

To update the `ck` command-line tool to the latest version:

```bash
ck update
```

**Note:** This updates the CLI tool only, not ClaudeKit Engineer files. Use `ck init` (local) or `ck init -g` (global) to update ClaudeKit Engineer files.

### Authentication

The CLI supports multiple authentication methods for downloading releases from private repositories.

**Authentication Priority:**

1. **Environment Variables** (checked first): `GITHUB_TOKEN` or `GH_TOKEN`
2. **GitHub CLI**: Uses `gh auth token` if installed
3. **Interactive Prompt**: Guides through setup when auth fails

**Option 1: Environment Variables** (Recommended for CI/CD)

```bash
export GITHUB_TOKEN=ghp_your_token_here
```

**Option 2: GitHub CLI**

```bash
brew install gh  # macOS
gh auth login
```

**Option 3: Git Clone Mode** (No token required)

```bash
ck init --use-git
```

Uses native git credentials (SSH keys or credential manager).

**Creating a Personal Access Token:**

1. Go to GitHub Settings → Developer settings → Personal access tokens → **Tokens (classic)**
2. Generate new token with `repo` scope
3. Copy the token

> ⚠️ **Important:** Use Classic PAT, not fine-grained. Fine-grained PATs don't work for collaborator repos.

## Verify Installation

After installation (either method), verify everything is set up correctly:

```bash
# Check if Claude Code is available
claude --version

# Check if .claude directory exists
ls -la .claude/
```

## Update ClaudeKit

Keep ClaudeKit Engineer up to date:

```bash
# Update ClaudeKit Engineer to latest version
ck init

# Update to specific version
ck init --version v1.2.0
```

**Exclude specific files during update:**

```bash
# Don't overwrite CLAUDE.md
ck init --exclude CLAUDE.md
```

**Update the CLI itself:**

```bash
# Update ck command-line tool
ck update
```

## Troubleshooting

### Permission Errors

On macOS/Linux, you may need sudo:

```bash
sudo npm install -g claudekit-cli
```

Or configure npm to use a different directory:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### Claude Code Not Found

If `claude` command is not found:

1. Install Claude Code CLI from [claude.ai/code](https://claude.ai/code)
2. Restart your terminal
3. Verify with `claude --version`

### GitHub Authentication Failed

If CLI can't authenticate:

1. **Try environment variable first:**
   ```bash
   export GITHUB_TOKEN=ghp_your_token
   ```

2. **Or use git clone mode (no token needed):**
   ```bash
   ck init --use-git
   ```

3. **Or install GitHub CLI:**
   ```bash
   brew install gh  # macOS
   gh auth login
   ```

4. **Verify authentication:**
   ```bash
   gh auth status
   ```

## Optional Tools

### CCS - Claude Code Switch (Recommended for Heavy Users)

If you're a heavy ClaudeKit user or frequently hit Claude's rate limits, consider installing **CCS**:

```bash
npm install -g @kaitranntt/ccs
```

**Benefits:**
- Switch between multiple Claude accounts instantly
- Delegate simple tasks to cheaper models (81% cost savings)
- Keep working without interruption when hitting limits
- Optimize costs for high-volume usage

[**Learn more about CCS →**](/docs/tools/ccs)

## Next Steps

Now that ClaudeKit is installed, proceed to:

- [Quick Start Guide](/docs/getting-started/quick-start) - Build your first project
- [CLAUDE.md Explained](/docs/docs/engineer/configuration/claude-md) - Understand the configuration file
- [Workflows](/docs/docs/engineer/configuration/workflows) - Learn about development workflows
