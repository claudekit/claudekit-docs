---
title: CLI Installation
description: "Documentation for CLI Installation
description:
section: docs
category: cli
order: 1
published: true"
section: docs
category: cli
order: 1
published: true
---

# CLI Installation

Install ClaudeKit CLI (`ck`) to download and manage ClaudeKit starter kits from private GitHub repository releases.

## Prerequisites

Before installing, ensure you have:

- **Node.js 18+** - [Download from nodejs.org](https://nodejs.org)
- **npm 9+** - Comes with Node.js
- **Git** - For repository access
- **ClaudeKit purchase** - Required for repository access from [ClaudeKit.cc](https://claudekit.cc)

Verify installations:

```bash
node --version  # Should be v18.0.0+
npm --version   # Should be 9.0.0+
git --version   # Any recent version
```

## Install CLI

### Global Installation (Recommended)

```bash
npm install -g claudekit-cli
```

This installs the `ck` command globally, available from any directory.

### Verify Installation

```bash
ck --version
```

**Expected output:**
```
1.2.1
```

View help:
```bash
ck --help
```

**Output:**
```
ClaudeKit CLI v1.2.1

Usage:
  ck <command> [options]

Commands:
  init      Initialize or update project from ClaudeKit release
  new       Bootstrap new project from ClaudeKit release
  update    (deprecated) Use 'init' instead
  versions  List available ClaudeKit releases

Options:
  --version, -v   Show version number
  --help, -h      Show help
  --prefix        Apply /ck: namespace to slash commands

Examples:
  ck init --kit engineer
  ck init --global
  ck init --prefix
  ck versions --kit engineer

For more info: https://docs.claudekit.cc
```

## GitHub Authentication

ClaudeKit CLI requires GitHub authentication to download from private repositories.

### Authentication Methods

The CLI uses **multi-tier authentication** with automatic fallback:

1. **GitHub CLI** - `gh auth token` (if authenticated)
2. **OS Keychain** - Stored token
3. **User Prompt** - Interactive prompt (with secure storage option)

### Option 1: GitHub CLI (Recommended)

Install and authenticate with GitHub CLI:

**macOS:**
```bash
brew install gh
```

**Windows:**
```bash
winget install GitHub.cli
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```

**Authenticate:**
```bash
gh auth login
```

Follow prompts:
1. Select "GitHub.com"
2. Select "HTTPS"
3. Choose "Login with web browser"
4. Copy one-time code
5. Complete authentication in browser

**Verify:**
```bash
gh auth status
```

### Option 2: Interactive Prompt

If no authentication is found, the CLI will prompt you:

```
GitHub authentication required.

Please enter your GitHub Personal Access Token (PAT):
> ghp_your_token_here

Would you like to store this token securely in your OS keychain? (y/n)
> y

✓ Token stored securely
```

The token is encrypted and stored in your OS keychain:
- **macOS**: Keychain Access
- **Windows**: Windows Credential Manager
- **Linux**: libsecret

## Verify Access

After authentication, verify you can access ClaudeKit repositories:

```bash
# List available versions
ck versions --kit engineer
```

If authentication is successful, you'll see available releases. If not, you'll see an error about repository access.

## Repository Access

**Important:** You must purchase a ClaudeKit starter kit from [ClaudeKit.cc](https://claudekit.cc) to access the private repositories.

After purchase:
1. You'll be added to the GitHub repository
2. Your GitHub account gets access to releases
3. The CLI can download using your authenticated account

Without purchase, you'll see:
```
Error: Repository not found or access denied
Please purchase a ClaudeKit kit at https://claudekit.cc
```

## Configuration

ClaudeKit CLI stores configuration in `~/.claudekit/config.json`:

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

**Note:** The actual token is stored in your OS keychain, not in the config file.

## Update CLI

Keep the CLI updated for latest features:

```bash
npm update -g claudekit-cli
```

Check installed version:
```bash
ck --version
```

## Uninstall

Remove ClaudeKit CLI:

```bash
npm uninstall -g claudekit-cli
```

Remove configuration (optional):
```bash
rm -rf ~/.claudekit
```

## Troubleshooting

### Command not found: ck

**Problem:** Terminal doesn't recognize `ck` command

**Solutions:**

1. **Restart terminal** - Sometimes PATH needs refresh

2. **Check installation:**
   ```bash
   npm list -g claudekit-cli
   ```

3. **Verify npm global bin in PATH:**
   ```bash
   npm config get prefix
   ```

   Add to PATH if needed:
   ```bash
   export PATH="$PATH:$(npm config get prefix)/bin"
   ```

4. **Reinstall:**
   ```bash
   npm uninstall -g claudekit-cli
   npm install -g claudekit-cli
   ```

### Authentication failed

**Problem:** "Authentication failed" or "Repository not found"

**Solutions:**

1. **Check GitHub authentication:**
   ```bash
   gh auth status
   ```

   If not authenticated:
   ```bash
   gh auth login
   ```

2. **Verify repository access:**
   - Ensure you purchased a ClaudeKit kit
   - Check you can access the repository on GitHub

### Permission denied

**Problem:** Cannot install globally

**Solutions:**

1. **Use npx (no installation needed):**
   ```bash
   npx claudekit-cli new --kit engineer
   ```

2. **Fix npm permissions:**
   ```bash
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   export PATH=~/.npm-global/bin:$PATH
   npm install -g claudekit-cli
   ```

3. **Use sudo (not recommended):**
   ```bash
   sudo npm install -g claudekit-cli
   ```

### Download fails

**Problem:** "Failed to download release"

**Solutions:**

1. **Check internet connection**

2. **Verify authentication:**
   ```bash
   gh auth status
   ```

3. **Try with verbose logging:**
   ```bash
   ck init --kit engineer --verbose
   ```

4. **Check GitHub status:**
   - Visit [githubstatus.com](https://www.githubstatus.com)

## Next Steps

Now that the CLI is installed:

1. **Initialize a project** - Run `ck init --kit engineer`
2. **Browse available versions** - Run `ck versions`
3. **Start developing** - Follow [Getting Started](/docs/getting-started/installation)

## Need Help?

- **Documentation**: [docs.claudekit.cc](https://docs.claudekit.cc)
- **GitHub Issues**: [github.com/mrgoonie/claudekit-cli/issues](https://github.com/mrgoonie/claudekit-cli/issues)
- **Purchase Support**: [claudekit.cc](https://claudekit.cc)

---

**Ready to start?** Run `ck init --kit engineer` to initialize your first project.
