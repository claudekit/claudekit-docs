---
title: Installation
description: "Documentation for Installation"
section: getting-started
category: getting-started
order: 2
published: true
---
# Installation

This guide will help you install ClaudeKit and set up your development environment. You can choose between manual installation or using the ClaudeKit CLI.

## Requirements

Before installing ClaudeKit, ensure you have:

- **Node.js** v18 or higher
- **npm** v10 or higher (or bun, pnpm, yarn)
- **Git** for version control
- **Claude Code CLI** installed (`claude`)
- **Google Gemini API Key** from [Google AI Studio](https://aistudio.google.com)

## Method 1: Manual Installation

This method gives you complete control over the installation process.

### Step 1: Clone or Download ClaudeKit Engineer

```bash
# Option A: Clone repo (requires GitHub access)
git clone https://github.com/claudekit/claudekit-engineer.git

# Option B: Download from GitHub Releases
# Visit: https://github.com/claudekit/claudekit-engineer/releases
```

### Step 2: Copy ClaudeKit Files

Copy the following directories and files from `claudekit-engineer` to your project root:

| Path | Description |
|-----------|-------|
| `.claude/` | Main configuration - hooks, skills, commands, workflows |
| `docs/` | Documentation templates |
| `plans/` | Planning templates |
| `CLAUDE.md` | Project instructions for Claude |

**Important hidden files in `.claude/`:**
- `.ck.json` - ClaudeKit configuration (plan naming, paths, language)
- `.ckignore` - Directories excluded from context (like `.gitignore` for LLM)

**Linux/macOS:**
```bash
cp -r claudekit-engineer/.claude your-project/
cp -r claudekit-engineer/docs your-project/
cp -r claudekit-engineer/plans your-project/
cp claudekit-engineer/CLAUDE.md your-project/

# Verify hidden files were copied
ls -la your-project/.claude/
# Should see: .ck.json, .ckignore, settings.json, etc.
```

**Windows (PowerShell):**
```powershell
Copy-Item -Recurse claudekit-engineer\.claude your-project\
Copy-Item -Recurse claudekit-engineer\docs your-project\
Copy-Item -Recurse claudekit-engineer\plans your-project\
Copy-Item claudekit-engineer\CLAUDE.md your-project\

# Verify hidden files were copied
Get-ChildItem -Force your-project\.claude\
# Should see: .ck.json, .ckignore, settings.json, etc.
```

> ⚠️ **Note:** File managers may hide dotfiles (`.ck.json`, `.ckignore`). Use terminal/PowerShell or enable "show hidden files".

### Step 3: Configure Gemini API Key (Optional)

**WHY?**
ClaudeKit previously used [Human MCP](https://www.npmjs.com/package/@goonnguyen/human-mcp) for image and video analysis because Gemini has better vision capabilities. However, Anthropic launched [**Agent Skills**](https://docs.claude.com/en/docs/engineer/agents-and-tools/agent-skills/overview) with better context engineering support, so all Human MCP tools have been converted to Agent Skills.

**Note:** Gemini API currently offers a generous free tier.

1. Go to [Google AI Studio](https://aistudio.google.com) and get your API Key
2. Copy `.claude/skills/.env.example` to `.claude/skills/.env` and paste your key into the `GEMINI_API_KEY` environment variable

You're ready to use it.

### Step 4: Start Claude Code

Launch Claude Code in your working project:

```bash
# Standard mode
claude

# Skip permissions (use cautiously)
claude --dangerously-skip-permissions
```

### Step 5: Initialize Documentation

Run the `/docs:init` command to scan and generate specs for your project:

```bash
/docs:init
```

This command creates markdown files in the `docs` directory:
- `codebase-summary.md`
- `code-standards.md`
- `system-architecture.md`
- And more...

Your project is now ready for development!

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

### Which Installation Mode Should I Choose?

| Use Case | Mode | Command |
|------------|--------|------|
| **First-time installation** | Global ⭐ | `ck init -g --kit engineer` |
| **Want to use ClaudeKit for ALL projects** | Global ⭐ | `ck init -g --kit engineer` |
| **Only for a specific project** | Local | `ck init --kit engineer` |
| **CI/CD environment** | Local | `ck init --kit engineer` |

---

### Option A: Global Installation ⭐ Recommended for Most Users

> **Use when:** You want ClaudeKit available for ALL projects without copying files to each project.
>
> **Run from:** Any directory (e.g., home folder, desktop, anywhere)

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

> **Use when:** You want ClaudeKit files ONLY in a specific project.
>
> **Run from:** Your project's root directory (e.g., `/projects/my-app/`)

```bash
# Move to project first!
cd /path/to/your/project

# Interactive mode
ck init

# With kit selection
ck init --kit engineer

# With exclude patterns
ck init --exclude "local-config/**" --exclude "*.local"
```

**Where files are installed:** In the current project directory (`./.claude/`)

> ⚠️ **Warning:** Running `ck init` (without `-g`) from **home directory** or **user directory** will install ClaudeKit there, which may cause hook path errors. If you want ClaudeKit available everywhere, use `ck init -g`.

---

### Updating CLI

To update the `ck` command-line tool to the latest version:

```bash
ck update
```

**Note:** This command only updates the CLI, not ClaudeKit Engineer files. Use `ck init` (local) or `ck init -g` (global) to update ClaudeKit Engineer files.

### Authentication

The CLI requires a **GitHub Personal Access Token (PAT)** to download releases from private repositories (`claudekit-engineer` and `claudekit-marketing`).

**Authentication Fallback Chain:**

1. **GitHub CLI**: Uses `gh auth token` if GitHub CLI is installed and authenticated
2. **Environment Variables**: Checks `GITHUB_TOKEN` or `GH_TOKEN`
3. **OS Keychain**: Retrieves saved token from system keychain
4. **User Prompt**: Prompts for token input and offers to save securely

**Creating a Personal Access Token:**

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Create new token with `repo` scope (for private repositories)
3. Copy the token

**Setting Token via Environment Variable:**

```bash
export GITHUB_TOKEN=ghp_your_token_here
```

## Verify Installation

After installation (either method), verify everything is set up correctly:

```bash
# Check Claude Code is available
claude --version

# Check .claude directory exists
ls -la .claude/
```

## Updating ClaudeKit

Keep ClaudeKit Engineer up to date:

```bash
# Update ClaudeKit Engineer to latest version
ck init

# Update to specific version
ck init --version v1.2.0
```

**Exclude specific files when updating:**

```bash
# Don't overwrite CLAUDE.md
ck init --exclude CLAUDE.md
```

**Update CLI:**

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

If the `claude` command is not found:

1. Install Claude Code CLI from [claude.ai/code](https://claude.ai/code)
2. Restart terminal
3. Verify with `claude --version`

### GitHub Authentication Failed

If CLI cannot authenticate:

1. Install GitHub CLI: `brew install gh` (macOS) or see [cli.github.com](https://cli.github.com)
2. Authenticate: `gh auth login`
3. Verify: `gh auth status`
4. Or set environment variable: `export GITHUB_TOKEN=your_token`

## Next Steps

Now that ClaudeKit is installed, continue with:

- [Quick Start Guide](/docs/getting-started/quick-start) - Build your first project
- [CLAUDE.md Explained](/docs/engineer/configuration/claude-md) - Understand the configuration file
- [Workflows](/docs/engineer/configuration/workflows) - Learn about development workflows
