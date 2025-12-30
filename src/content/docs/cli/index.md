---
title: "ClaudeKit CLI"
description: "Command-line interface for creating and managing ClaudeKit projects"
section: cli
order: 1
---

# ClaudeKit CLI

> Fast, secure command-line tool for bootstrapping and managing ClaudeKit projects from private GitHub releases.

The ClaudeKit CLI (`ck`) helps you create and manage ClaudeKit-powered projects. Built with Bun and TypeScript, it provides a beautiful interface for project setup, updates, and maintenance.

## Key Features

- Multi-tier GitHub authentication with secure credential storage
- Streaming downloads with progress tracking and platform optimizations
- Smart file merging with conflict detection
- Automatic skills directory migration with parallel processing
- System dependency auto-installation
- Intelligent update notifications with 7-day cache
- Beautiful CLI interface with interactive prompts

## Quick Install

Install the CLI globally using your preferred package manager:

```bash
# npm (recommended)
npm install -g claudekit-cli

# bun
bun add -g claudekit-cli

# pnpm
pnpm add -g claudekit-cli

# yarn
yarn global add claudekit-cli
```

For detailed installation instructions including prerequisites and verification steps, see [Installation](/docs/cli/installation).

## Verify Installation

```bash
ck --version
```

You should see output like:

```
CLI Version: 3.16.0
Local Kit Version: 1.17.0 (ClaudeKit Engineer)
```

## Available Commands

| Command | Description |
|---------|-------------|
| [`ck new`](/docs/cli/new) | Create a new ClaudeKit project |
| [`ck init`](/docs/cli/init) | Initialize or update ClaudeKit in existing project |
| [`ck doctor`](/docs/cli/doctor) | Run health checks and diagnostics |
| [`ck versions`](/docs/cli/versions) | List available kit versions |
| [`ck update`](/docs/cli/update) | Update the CLI to the latest version |
| [`ck uninstall`](/docs/cli/uninstall) | Remove ClaudeKit installations |

## Quick Start

### Create a New Project

```bash
# Interactive mode (recommended)
ck new

# With options
ck new --kit engineer --dir my-project

# Include beta versions in selection
ck new --beta

# Auto-install skill dependencies
ck new --install-skills
```

[Full documentation](/docs/cli/new)

### Initialize Existing Project

```bash
# Add ClaudeKit to your existing project
cd my-existing-project
ck init

# Non-interactive mode with defaults
ck init --yes

# Global installation (user-level config)
ck init --global
```

[Full documentation](/docs/cli/init)

### Health Check

```bash
# Run diagnostics
ck doctor

# Auto-fix issues
ck doctor --fix

# Generate shareable report
ck doctor --report
```

[Full documentation](/docs/cli/doctor)

## Prerequisites

Before using ClaudeKit CLI, you need:

1. **Purchase a ClaudeKit Starter Kit** from [ClaudeKit.cc](https://claudekit.cc)
2. **Get Repository Access** - You'll receive access to the private GitHub repository after purchase
3. **Install GitHub CLI** and authenticate with `gh auth login`

Without a purchased kit and repository access, the CLI cannot download project templates.

## Authentication

ClaudeKit CLI supports multiple authentication methods for downloading releases from private repositories.

### Authentication Priority

1. **Environment Variables** (checked first): `GITHUB_TOKEN` or `GH_TOKEN`
2. **GitHub CLI**: Uses `gh auth token` if installed and authenticated
3. **Interactive Prompt**: Guides through setup when auth fails

### Method 1: Environment Variables (Recommended for CI/CD)

```bash
export GITHUB_TOKEN=ghp_your_token_here
# or
export GH_TOKEN=ghp_your_token_here
```

**Important**: Use **Classic PAT** with `repo` scope. Fine-grained PATs don't work for collaborator repos.

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

For detailed setup instructions, see [Installation - Authentication](/docs/cli/installation#authentication).

## Kit Selection

When creating a new project, choose between available kits:

| Kit | Best For | Status |
|-----|----------|--------|
| **Engineer** | Software development, automation, testing | Available |
| **Marketing** | Content creation, campaigns, analytics | Coming Soon |

## Global vs Local Installation

ClaudeKit supports two installation modes:

- **Local** (default): Installs to `.claude/` in your project directory
- **Global**: Installs to `~/.claude/` for user-level configuration

Use `ck init --global` for global installation, or `ck init` for local (project-specific) installation.

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

See [ck init - Config Sync](/docs/cli/init#config-sync) for detailed examples.

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

See [ck init - Git Clone Mode](/docs/cli/init#git-clone-mode) for detailed examples.

## Configuration

Configuration is stored in `~/.claudekit/config.json`:

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

For complete configuration reference, see [Configuration](/docs/cli/configuration).

## Next Steps

- [Installation](/docs/cli/installation) - Detailed setup guide
- [ck new](/docs/cli/new) - Create your first project
- [ck init](/docs/cli/init) - Add to existing projects
- [ck doctor](/docs/cli/doctor) - Troubleshoot issues
- [Configuration](/docs/cli/configuration) - Customize your setup
