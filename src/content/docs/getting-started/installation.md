---
title: Installation
description: Install ClaudeKit CLI and set up your development environment
category: getting-started
order: 2
published: true
---

# Installation

This guide will help you install ClaudeKit and set up your development environment.

## Prerequisites

Before installing ClaudeKit, ensure you have:

- **Node.js** v20 or higher
- **npm** v10 or higher (or pnpm, yarn)
- **Git** for version control
- **Anthropic API Key** from [console.anthropic.com](https://console.anthropic.com)

## Installation Methods

### npm (Recommended)

Install ClaudeKit globally using npm:

```bash
npm install -g claudekit
```

Verify the installation:

```bash
claudekit --version
```

### pnpm

```bash
pnpm add -g claudekit
```

### yarn

```bash
yarn global add claudekit
```

## Configuration

After installation, configure ClaudeKit with your Anthropic API key:

```bash
claudekit config set apiKey YOUR_ANTHROPIC_API_KEY
```

Alternatively, set the environment variable:

```bash
export ANTHROPIC_API_KEY=your_api_key_here
```

## Verify Installation

Run the setup check:

```bash
claudekit doctor
```

This command checks:

- ✓ Node.js version compatibility
- ✓ API key configuration
- ✓ Network connectivity to Anthropic API
- ✓ Required dependencies

## Update ClaudeKit

Keep ClaudeKit up to date:

```bash
npm update -g claudekit
```

## Uninstallation

To remove ClaudeKit:

```bash
npm uninstall -g claudekit
```

## Troubleshooting

### Permission Errors

On macOS/Linux, you may need sudo:

```bash
sudo npm install -g claudekit
```

Or configure npm to use a different directory:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### API Key Issues

If you encounter API key errors:

1. Verify your key at [console.anthropic.com](https://console.anthropic.com)
2. Check the key is set correctly: `claudekit config get apiKey`
3. Ensure no trailing spaces or quotes in the key

### Network Issues

If you're behind a corporate proxy:

```bash
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
```

## Next Steps

Now that ClaudeKit is installed, proceed to:

- [Quick Start Guide](/docs/getting-started/quick-start) - Build your first project
- [Configuration](/docs/core-concepts/configuration) - Customize ClaudeKit settings
