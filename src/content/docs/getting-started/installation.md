---
title: Installation
description: Install ClaudeKit and set up your development environment using manual setup or CLI
category: getting-started
order: 2
published: true
---

# Installation

This guide will help you install ClaudeKit and set up your development environment. You can choose between manual setup or using the ClaudeKit CLI.

## Prerequisites

Before installing ClaudeKit, ensure you have:

- **Node.js** v18 or higher
- **npm** v10 or higher (or bun, pnpm, yarn)
- **Git** for version control
- **Claude Code CLI** installed (`claude`)
- **Google Gemini API Key** from [Google AI Studio](https://aistudio.google.com)

## Method 1: Manual Setup

This method gives you full control over the installation process.

### Step 1: Copy ClaudeKit Files

Copy all directories and files from the `claudekit-engineer` repo to your project:

```bash
# Copy these files and directories:
.claude/*
docs/*
plans/*
CLAUDE.md
.mcp.json
```

### Step 2: Configure MCP (Human MCP)

1. Go to [Google AI Studio](https://aistudio.google.com) and grab your API Key
2. Open `.mcp.json` and paste the key into the "human-mcp" environment variable

**Recommended: Install Human MCP globally**

Install with `user` scope to use it across all projects without re-installing:

```bash
claude mcp add-json human -s user '{
  "command": "npx",
  "args": ["@goonnguyen/human-mcp@latest", "-e", "GOOGLE_GEMINI_API_KEY"],
  "env": {
    "GOOGLE_GEMINI_API_KEY": "your_api_key_here"
  }
}'
```

### Step 3: Start Claude Code

Start Claude Code in your working project:

```bash
# Standard mode
claude

# Skip permissions (use with caution)
claude --dangerously-skip-permissions
```

### Step 4: Initialize Documentation

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

### Create a New Project

```bash
# Interactive mode
ck new

# With options
ck new --dir my-project --kit engineer

# Specific version
ck new --kit engineer --version v1.0.0
```

### Update Existing Project

```bash
# Interactive mode
ck update

# With options
ck update --kit engineer

# Specific version
ck update --kit engineer --version v1.0.0
```

### Authentication

The CLI requires a **GitHub Personal Access Token (PAT)** to download releases from private repositories (`claudekit-engineer` and `claudekit-marketing`).

**Authentication Fallback Chain:**

1. **GitHub CLI**: Uses `gh auth token` if GitHub CLI is installed and authenticated
2. **Environment Variables**: Checks `GITHUB_TOKEN` or `GH_TOKEN`
3. **OS Keychain**: Retrieves stored token from system keychain
4. **User Prompt**: Prompts for token input and offers to save it securely

**Creating a Personal Access Token:**

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope (for private repositories)
3. Copy the token

**Setting Token via Environment Variable:**

```bash
export GITHUB_TOKEN=ghp_your_token_here
```

## Verify Installation

After installation (either method), verify everything is set up correctly:

```bash
# Check if Claude Code is available
claude --version

# Check if .claude directory exists
ls -la .claude/

# Check if Human MCP is configured
cat .mcp.json
```

## Update ClaudeKit

Keep ClaudeKit up to date:

```bash
# Using CLI
ck update

# Or manually pull latest changes from claudekit-engineer repo
```

**Exclude specific files during update:**

```bash
# Don't overwrite CLAUDE.md
ck update --exclude CLAUDE.md
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

### MCP Configuration Issues

If Human MCP is not working:

1. Verify API key is correct in `.mcp.json`
2. Check no trailing spaces or quotes in the key
3. Test with: `claude` and try using vision features

### GitHub Authentication Failed

If CLI can't authenticate:

1. Install GitHub CLI: `brew install gh` (macOS) or see [cli.github.com](https://cli.github.com)
2. Authenticate: `gh auth login`
3. Verify: `gh auth status`
4. Or set environment variable: `export GITHUB_TOKEN=your_token`

## Next Steps

Now that ClaudeKit is installed, proceed to:

- [Quick Start Guide](/docs/getting-started/quick-start) - Build your first project
- [CLAUDE.md Explained](/docs/core-concepts/claude-md) - Understand the configuration file
- [Workflows](/docs/core-concepts/workflows) - Learn about development workflows
