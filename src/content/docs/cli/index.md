---
title: "ClaudeKit CLI"
description: "CLI for creating and managing ClaudeKit projects"
section: cli
order: 1
---

# ClaudeKit CLI

> Fast, secure command-line tool for bootstrapping and managing ClaudeKit-powered projects from private GitHub releases.

ClaudeKit CLI (`ck`) helps you create and manage ClaudeKit-powered projects. Built with Bun and TypeScript, it provides a beautiful interface for project setup, updates, and maintenance.

## Key Features

- Multi-tier GitHub authentication with secure credential storage
- Streaming downloads with progress tracking and platform optimization
- Smart file merging with conflict detection
- Automatic skill directory migration with parallel processing
- Automatic system dependency installation
- Smart update notifications with 7-day cache
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

You'll see output like:

```
CLI Version: 3.10.1
Local Kit Version: 1.16.0 (ClaudeKit Engineer)
```

## Available Commands

| Command | Description |
|---------|-------------|
| [`ck new`](/docs/cli/new) | Create a new ClaudeKit project |
| [`ck init`](/docs/cli/init) | Initialize or update ClaudeKit in existing project |
| [`ck doctor`](/docs/cli/doctor) | Run health checks and diagnostics |
| [`ck versions`](/docs/cli/versions) | List available kit versions |
| [`ck update`](/docs/cli/update) | Update CLI to latest version |
| [`ck uninstall`](/docs/cli/uninstall) | Remove ClaudeKit installation |

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
2. **Get Repository Access** - You will receive access to private GitHub repositories after purchase
3. **Install GitHub CLI** and authenticate with `gh auth login`

Without a purchased kit and repository access, the CLI cannot download project templates.

## Authentication

ClaudeKit CLI uses a multi-tier authentication system:

1. GitHub CLI (`gh auth token`)
2. Environment Variables (`GITHUB_TOKEN`)
3. Config File (`~/.claudekit/config.json`)
4. OS Keychain (secure storage)
5. User Prompt (with save option)

For setup instructions, see [Installation - Authentication](/docs/cli/installation#authentication).

## Kit Selection

When creating a new project, choose from available kits:

| Kit | Best For | Status |
|-----|----------|--------|
| **Engineer** | Software development, automation, testing | Available |
| **Marketing** | Content creation, campaigns, analytics | Coming Soon |

## Global vs Local Installation

ClaudeKit supports two installation modes:

- **Local** (default): Install to `.claude/` in your project directory
- **Global**: Install to `~/.claude/` for user-level configuration

Use `ck init --global` for global installation, or `ck init` for local (project-specific) installation.

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

For full configuration reference, see [Configuration](/docs/cli/configuration).

## Next Steps

- [Installation](/docs/cli/installation) - Detailed setup guide
- [ck new](/docs/cli/new) - Create your first project
- [ck init](/docs/cli/init) - Add to existing project
- [ck doctor](/docs/cli/doctor) - Troubleshooting
- [Configuration](/docs/cli/configuration) - Customize your settings
