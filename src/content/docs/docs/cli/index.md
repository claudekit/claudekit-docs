---
title: CLI Overview
description: "Documentation for CLI Overview
description:
section: docs
category: cli
order: 0
published: true"
section: docs
category: cli
order: 0
published: true
---

# ClaudeKit CLI Overview

Command-line tool for bootstrapping and updating ClaudeKit projects from private GitHub repository releases.

## What is ClaudeKit CLI?

**ClaudeKit CLI** (`ck`) is a command-line tool that downloads and manages ClaudeKit starter kits from private GitHub repositories. Built with Bun and TypeScript, it provides fast, secure project setup and updates.

**Important:** You need to purchase a ClaudeKit Starter Kit from [ClaudeKit.cc](https://claudekit.cc) to use this CLI. Without a purchased kit and repository access, the CLI cannot download project templates.

## Key Features

- **Multi-tier GitHub Authentication** - Secure authentication via gh CLI → env vars → keychain → prompt
- **Streaming Downloads** - Fast downloads with progress tracking
- **Smart File Merging** - Updates projects without breaking custom changes
- **Protected Files** - Automatic protection of sensitive files and custom configurations
- **Secure Credential Storage** - Uses OS keychain for token management
- **Beautiful CLI Interface** - Interactive prompts with progress indicators

## Core Commands

### ck init

Initialize or update ClaudeKit Engineer in your project:

**Note:** This command should be run from the root directory of your project.

```bash
# Interactive mode (recommended)
ck init

# With options
ck init --kit engineer

# Specific version
ck init --kit engineer --version v1.0.0

# With exclude patterns
ck init --exclude "local-config/**" --exclude "*.local"

# Global mode - use platform-specific user configuration
ck init --global
ck init -g --kit engineer
```

**What it does:**
- Downloads specified ClaudeKit release
- Intelligently merges files
- Preserves your custom changes
- Protects sensitive files
- Maintains custom `.claude/` files

**Options:**
- `--dir <dir>` - Target directory (default: current directory)
- `--kit <kit>` - Kit to use (`engineer` or `marketing`)
- `-r, --release <version>` - Specific version to download (default: latest)
- `--exclude <pattern>` - Exclude files/directories using glob patterns (can be used multiple times)
- `-g, --global` - Use platform-specific user configuration directory
- `--prefix` - Apply `/ck:` namespace to slash commands (see [Command Namespacing](#command-namespacing))
- `--sync` - Sync config files with interactive 3-way merge (see [Config Sync](#config-sync))
- `--use-git` - Use git clone instead of GitHub API download (see [Git Clone Mode](#git-clone-mode))
- `-f, --force-overwrite` - Override ownership protections and delete user-modified files
- `--force-overwrite-settings` - Fully replace settings.json instead of selective merge (see [Settings Merge Behavior](#settings-merge-behavior))
- `--fresh` - Completely remove .claude directory before downloading (requires confirmation)

**Global vs Local Configuration:**

By default, ClaudeKit uses local configuration (`~/.claudekit`).

For platform-specific **user-scoped settings**, use the `--global` flag:
- **macOS/Linux**: `~/.claude`
- **Windows**: `%LOCALAPPDATA%\.claude`

Global mode uses user-scoped directories (no sudo required), allowing separate configurations for different projects.

## Command Namespacing

Use `--prefix` to avoid conflicts with other Claude Code slash commands or custom commands.

### What It Does

When you run `ck init --prefix` or `ck new --prefix`, all ClaudeKit slash commands are moved to a `/ck:` namespace:

| Without --prefix | With --prefix |
|------------------|---------------|
| `/plan` | `/ck:plan` |
| `/code` | `/ck:code` |
| `/cook` | `/ck:cook` |
| `/debug` | `/ck:debug` |
| `/test` | `/ck:test` |

### When to Use

- **Multiple command sources**: When using other CLI tools that define their own slash commands
- **Custom commands**: When you have project-specific commands that might conflict
- **Team conventions**: When your team prefers namespaced commands for clarity

### Example

```bash
# Initialize with prefix namespace
ck init --prefix

# Commands are now namespaced
/ck:plan add user authentication
/ck:code plans/auth-plan.md
/ck:cook fix the login bug
```

### Technical Details

The `--prefix` flag moves command files to `.claude/commands/ck/` subdirectory. Claude Code automatically recognizes this structure and prefixes commands with `ck:`.

## Config Sync

Use `--sync` to sync config files from upstream with interactive hunk-by-hunk merge.

```bash
# Sync config files interactively
ck init --sync
```

**What it does:**
- Compares your local config files with upstream
- Shows diffs and lets you choose which changes to accept
- Preserves your customizations while pulling updates

**When to use:**
- When you want to review upstream changes before applying
- When you've customized settings and want to selectively merge updates

## Git Clone Method

Use `--use-git` to download releases via git clone instead of the GitHub API.

```bash
# Use git clone (requires --release)
ck init --use-git --release v2.1.0

# Non-interactive with git clone
ck init --use-git --release v2.1.0 --yes
```

**When to use:**
- When you don't have `gh` CLI installed
- When you prefer using SSH keys over GitHub tokens
- In CI/CD environments with git credentials already configured

**Requirements:**
- Must specify `--release <tag>` (cannot list versions without API)
- Git must be installed and configured with repository access

## Settings Merge Behavior

ClaudeKit intelligently merges `settings.json` to preserve your customizations.

### How It Works

1. **Hooks**: User hooks are preserved, CK hooks are added (deduplicated by command)
2. **MCP Servers**: User servers preserved, new CK servers added
3. **Custom Keys**: Your custom settings keys are never removed

### Respecting User Deletions

If you remove a hook or MCP server from `settings.json`, ClaudeKit remembers this and won't re-add it on future updates.

**Tracking file:** `.claude/.ck.json` stores what was installed:

```json
{
  "kits": {
    "ClaudeKit Engineer": {
      "installedSettings": {
        "hooks": ["node .claude/hooks/session-init.cjs", "..."],
        "mcpServers": ["server-name"]
      }
    }
  }
}
```

**Example:**
```bash
# Initial install adds privacy-block hook
ck init --yes

# You remove privacy-block from settings.json
# (edit manually or via Claude Code)

# Next update respects your deletion
ck init --yes
# Output: "Preserved user preferences: 1 hooks skipped"
```

### Force Overwrite Settings

To restore all CK defaults and clear deletion tracking:

```bash
# Full replace of settings.json
ck init --force-overwrite-settings
```

This:
- Completely replaces `settings.json` with CK defaults
- Clears the tracking in `.ck.json`
- Restores any previously removed hooks/servers

### ck update

Update the ClaudeKit CLI itself to the latest version:

```bash
# Update CLI to latest
ck update
```

**What it does:**
- Updates the `ck` command-line tool to the latest version
- Does NOT update ClaudeKit Engineer files (use `ck init` for that)

### ck versions

List available versions of ClaudeKit releases:

```bash
# Show all available versions
ck versions

# Filter by specific kit
ck versions --kit engineer
ck versions --kit marketing

# Show more versions (default: 30)
ck versions --limit 50

# Include prereleases and drafts
ck versions --all
```

**Options:**
- `--kit <kit>` - Filter by specific kit
- `--limit <limit>` - Number of releases to show (default: 30)
- `--all` - Show all releases including prereleases

## Global Options

All commands support these global options:

### --verbose, -v

Enable verbose logging for debugging:

```bash
ck init --verbose
ck init -v  # Short form
```

**Shows:**
- HTTP request/response details (tokens sanitized)
- File operations (downloads, extractions, copies)
- Command execution steps and timing
- Error stack traces with full context
- Authentication flow details

### --log-file

Write logs to file for sharing:

```bash
ck init --verbose --log-file debug.log
```

**Note:** All sensitive data (tokens, credentials) is automatically sanitized in logs.

## Available Kits

ClaudeKit offers premium starter kits (purchase required):

- **engineer**: ClaudeKit Engineer - Engineering toolkit with 14 specialized agents
- **marketing**: ClaudeKit Marketing - [Coming Soon]

Purchase at [ClaudeKit.cc](https://claudekit.cc) to get repository access.

## Authentication

The CLI supports multiple authentication methods for downloading releases from private repositories.

### Authentication Priority

When downloading via API (default), authentication is checked in this order:

1. **Environment Variables** (checked first): `GITHUB_TOKEN` or `GH_TOKEN`
2. **GitHub CLI**: Uses `gh auth token` if installed and authenticated
3. **OS Keychain**: Retrieves stored token
4. **Interactive Prompt**: Guides through setup when auth fails

**Alternative: Git Clone**

Use `--use-git` to bypass API authentication entirely:
```bash
ck init --use-git --release v2.1.0
```
This uses your existing git/SSH credentials instead of GitHub API tokens.

### Method 1: Environment Variables (Recommended for CI/CD)

```bash
export GITHUB_TOKEN=ghp_your_token_here
# or
export GH_TOKEN=ghp_your_token_here
```

**⚠️ Important:** Use **Classic PAT** with `repo` scope. Fine-grained PATs don't work for collaborator repos.

### Method 2: GitHub CLI

```bash
# Install GitHub CLI
brew install gh  # macOS
# or see: https://cli.github.com

# Authenticate
gh auth login
```

### Method 3: Git Clone Mode

Bypass API authentication entirely using native git credentials:

```bash
ck init --use-git
```

Uses your existing git setup:
- SSH keys (auto-detected from `~/.ssh/`)
- HTTPS with credential manager
- Git credential store

### Creating a Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → **Tokens (classic)**
2. Generate new token with `repo` scope
3. Copy the token

## Config Sync

Sync your local config files with upstream changes without losing customizations.

```bash
ck init --sync
```

### How It Works

1. **Version Check**: Compares local vs upstream config versions
2. **Download**: Fetches upstream config files
3. **3-Way Merge**: Shows side-by-side diff for each changed file
4. **Interactive Review**: Accept, reject, or edit each change
5. **Backup**: Preserves originals before applying changes

### Merge UI Controls

| Key | Action |
|-----|--------|
| `a` | Accept upstream change |
| `r` | Reject (keep local) |
| `e` | Edit manually |
| `s` | Skip file |
| `q` | Quit sync |

### When to Use

- After ClaudeKit releases new features
- When config files have diverged
- To selectively adopt upstream improvements

## Git Clone Mode

Alternative download method using native git instead of GitHub API.

```bash
ck init --use-git
```

### Benefits

- **No API token required** - Uses existing git credentials
- **SSH key support** - Works with existing SSH setup
- **HTTPS fallback** - Uses git credential manager
- **Corporate environments** - Works behind proxies that block API

### SSH Detection

The CLI auto-detects SSH keys in `~/.ssh/`:
- `id_rsa`
- `id_ed25519`
- `id_ecdsa`

If SSH fails, suggests HTTPS or provides setup instructions.

## Settings Merge Behavior

ClaudeKit intelligently merges `settings.json` to preserve your customizations.

### How It Works

1. **Hooks**: User hooks are preserved, CK hooks are added (deduplicated by command)
2. **MCP Servers**: User servers preserved, new CK servers added
3. **Custom Keys**: Your custom settings keys are never removed

### Respecting User Deletions

If you remove a hook or MCP server from `settings.json`, ClaudeKit remembers this and won't re-add it on future updates.

**Tracking file:** `.claude/.ck.json` stores what was installed:

```json
{
  "kits": {
    "ClaudeKit Engineer": {
      "installedSettings": {
        "hooks": ["node .claude/hooks/session-init.cjs", "..."],
        "mcpServers": ["server-name"]
      }
    }
  }
}
```

**Example:**
```bash
# Initial install adds privacy-block hook
ck init --yes

# You remove privacy-block from settings.json
# (edit manually or via Claude Code)

# Next update respects your deletion
ck init --yes
# Output: "Preserved user preferences: 1 hooks skipped"
```

### Force Overwrite Settings

To restore all CK defaults and clear deletion tracking:

```bash
# Full replace of settings.json
ck init --force-overwrite-settings
```

This:
- Completely replaces `settings.json` with CK defaults
- Clears the tracking in `.ck.json`
- Restores any previously removed hooks/servers

## Configuration

Configuration stored in `~/.claudekit/config.json`:

```json
{
  "github": {
    "token": "stored_in_keychain"
  },
  "defaults": {
    "kit": "engineer",
    "dir": "."
  }
}
```

## Protected Files

These files are **never overwritten** during updates:

- Environment files: `.env`, `.env.local`, `.env.*.local`
- Security files: `*.key`, `*.pem`, `*.p12`
- Dependencies: `node_modules/**`, `.git/**`
- Build outputs: `dist/**`, `build/**`

### Custom .claude Files

Your custom files in `.claude/` directory are automatically preserved:

**Example:**
```
Your project:
  .claude/
    ├── commands/standard.md  (from ClaudeKit)
    └── commands/my-custom.md (your custom command)

After update:
  .claude/
    ├── commands/standard.md  (updated from release)
    └── commands/my-custom.md (preserved automatically)
```

## Quick Start

```bash
# Install CLI
npm install -g claudekit-cli

# Verify installation
ck --version

# Authenticate with GitHub
gh auth login
# OR
export GITHUB_TOKEN=ghp_your_token

# Initialize project
ck init --kit engineer

# Navigate to project
cd my-project

# Start using ClaudeKit
claude  # Start Claude Code
```

## Common Workflows

### Initialize or Update ClaudeKit Engineer

```bash
# Interactive mode (recommended)
ck init

# Direct with options
ck init --dir my-app --kit engineer

# Specific version
ck init --dir my-app --kit engineer --version v1.0.0

# With exclusions
ck init --exclude "*.log" --exclude "temp/**"

# Update ClaudeKit Engineer to latest
ck init

# Update to specific version
ck init --version v1.2.0

# Update with exclusions
ck init --exclude "local-config/**" --exclude "*.local"

# Update with verbose output
ck init --verbose
```

### Update the CLI Itself

```bash
# Update ck CLI to latest version
ck update
```

### Check Available Versions

```bash
# List all versions
ck versions

# Filter by kit
ck versions --kit engineer

# Show more releases
ck versions --limit 50
```

## Troubleshooting

### Authentication Failed

**Problem:** "Authentication failed"

**Solutions:**
1. Check if GitHub CLI is authenticated: `gh auth status`
2. Or set environment variable: `export GITHUB_TOKEN=ghp_your_token`
3. Verify token has `repo` scope
4. Check repository access (requires purchased kit)

### Command Not Found

**Problem:** `ck: command not found`

**Solutions:**
```bash
# Reinstall globally
npm install -g claudekit-cli

# Check installation
npm list -g claudekit-cli

# Restart terminal
```

### Download Fails

**Problem:** "Failed to download release"

**Solutions:**
1. Check internet connection
2. Verify GitHub token is valid: `gh auth status`
3. Confirm you have repository access (purchased kit)
4. Try with verbose flag: `ck init --verbose`

## Version Information

Current version: **3.14.0**

Check version:
```bash
ck --version
```

View help:
```bash
ck --help
ck -h
```

## Next Steps

- [Installation Guide](/docs/docs/cli/installation) - Install ClaudeKit CLI
- [Getting Started](/docs/getting-started/installation) - Start using ClaudeKit

---

**Ready to start?** Purchase a kit at [ClaudeKit.cc](https://claudekit.cc), then run `ck init` to initialize your first project.
