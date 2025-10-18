---
title: CLI installation
description: Install and configure ClaudeKit CLI for your development environment
category: cli
order: 1
published: true
keywords: [cli, installation, setup, configuration, authentication]
lastUpdated: 2025-10-18
difficulty: beginner
estimatedTime: "5 minutes"
prerequisites: []
relatedPages:
  - /docs/getting-started/quick-start
  - /docs/cli/new
  - /docs/cli/configuration
---

# CLI installation

Install ClaudeKit CLI to manage projects, templates, and agent workflows from your terminal.

## System requirements

Before installing, verify your system meets these requirements:

**Operating Systems:**
- macOS 11 (Big Sur) or later
- Windows 10/11 with WSL2 or PowerShell 7+
- Linux (Ubuntu 20.04+, Debian 11+, or equivalent)

**Software:**
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher (comes with Node.js)
- Git 2.30.0 or higher
- GitHub CLI (`gh`) for authentication

Check your versions:

```bash
node --version    # Should be v18.0.0+
npm --version     # Should be 9.0.0+
git --version     # Should be 2.30.0+
```

If you need to install or update Node.js, visit [nodejs.org](https://nodejs.org).

## Install ClaudeKit CLI

### Using npm (recommended)

```bash
npm install -g claudekit-cli
```

**What this does:**
- Downloads ClaudeKit CLI from npm registry
- Installs globally (available in all directories)
- Adds `ck` command to your PATH
- Sets up shell completions

### Using pnpm

```bash
pnpm add -g claudekit-cli
```

### Using yarn

```bash
yarn global add claudekit-cli
```

## Verify installation

Confirm ClaudeKit CLI installed correctly:

```bash
ck --version
```

**Expected output:**

```
claudekit-cli v1.2.0
```

Run the help command to see available options:

```bash
ck --help
```

**Expected output:**

```
ClaudeKit CLI - AI-powered development toolkit

Usage:
  ck <command> [options]

Commands:
  new [name]           Create new project
  update              Update ClaudeKit configuration
  versions            Manage ClaudeKit versions
  init                Initialize ClaudeKit in existing project

Options:
  -v, --version       Show version
  -h, --help          Show help
  --verbose           Enable verbose logging
  --debug             Enable debug mode

Examples:
  ck new my-app                    Create new project
  ck new my-app --template react   Create React project
  ck update                        Update to latest version
  ck versions                      List available versions

For more help: https://docs.claudekit.cc
```

## Install GitHub CLI

ClaudeKit uses GitHub CLI for authentication. Install it if you haven't already:

### macOS

```bash
brew install gh
```

### Windows

**Using winget (Windows 10/11):**

```bash
winget install GitHub.cli
```

**Using Chocolatey:**

```bash
choco install gh
```

### Linux (Ubuntu/Debian)

```bash
# Add GitHub CLI repository
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null

# Install
sudo apt update
sudo apt install gh
```

### Linux (Fedora/RHEL/CentOS)

```bash
sudo dnf install gh
```

Verify GitHub CLI installation:

```bash
gh --version
```

**Expected output:**

```
gh version 2.40.0 (2024-10-15)
```

## Authenticate with GitHub

ClaudeKit requires GitHub authentication for:
- Accessing private repositories
- Creating and managing projects
- Pulling templates and configurations
- Version management

Authenticate using GitHub CLI:

```bash
gh auth login
```

Follow the interactive prompts:

**Step 1: Choose GitHub.com**

```
? What account do you want to log into?
❯ GitHub.com
  GitHub Enterprise Server
```

Select **GitHub.com** and press Enter.

**Step 2: Choose HTTPS**

```
? What is your preferred protocol for Git operations?
  SSH
❯ HTTPS
```

Select **HTTPS** and press Enter.

**Step 3: Authenticate**

```
? How would you like to authenticate GitHub CLI?
❯ Login with a web browser
  Paste an authentication token
```

Select **Login with a web browser** and press Enter.

**Step 4: Copy one-time code**

```
! First copy your one-time code: ABCD-1234
Press Enter to open github.com in your browser...
```

Copy the code, then press Enter. Your browser opens to GitHub.

**Step 5: Complete in browser**

1. Paste the one-time code
2. Click "Continue"
3. Review permissions
4. Click "Authorize github"
5. Return to terminal

**Success indicator:**

```
✓ Authentication complete.
✓ Logged in as your-username
```

Verify authentication status:

```bash
gh auth status
```

**Expected output:**

```
github.com
  ✓ Logged in to github.com as your-username (oauth_token)
  ✓ Git operations for github.com configured to use https protocol.
  ✓ Token: *******************
```

## Shell completions (optional)

Enable shell completions for faster command typing:

### Bash

```bash
# Add to ~/.bashrc
echo 'eval "$(ck completion bash)"' >> ~/.bashrc
source ~/.bashrc
```

### Zsh

```bash
# Add to ~/.zshrc
echo 'eval "$(ck completion zsh)"' >> ~/.zshrc
source ~/.zshrc
```

### Fish

```bash
# Add to ~/.config/fish/config.fish
ck completion fish > ~/.config/fish/completions/ck.fish
```

Test completions by typing `ck ` and pressing Tab.

## Update ClaudeKit CLI

Keep ClaudeKit CLI up to date for latest features and fixes:

```bash
npm update -g claudekit-cli
```

Check for updates:

```bash
ck update --check
```

**Output if update available:**

```
Update available: 1.2.0 → 1.3.0
Changelog: https://github.com/claudekit/claudekit-cli/releases/tag/v1.3.0

Run: npm update -g claudekit-cli
```

## Uninstall

Remove ClaudeKit CLI if needed:

```bash
npm uninstall -g claudekit-cli
```

Verify removal:

```bash
ck --version
# Expected: command not found: ck
```

## Configuration

ClaudeKit CLI stores configuration in:
- **Global config:** `~/.claudekit/config.json`
- **Project config:** `./.claude/config.json` (per project)

View current configuration:

```bash
ck config list
```

Set global configuration:

```bash
ck config set model claude-3-5-sonnet-20241022
ck config set temperature 0.7
ck config set maxTokens 4096
```

Reset to defaults:

```bash
ck config reset
```

## Troubleshooting

### Command not found: ck

**Cause:** CLI not in PATH or installation incomplete

**Solutions:**

1. **Restart terminal** - Often fixes PATH issues

2. **Check global install location:**
   ```bash
   npm list -g claudekit-cli
   ```

3. **Reinstall with verbose logging:**
   ```bash
   npm install -g claudekit-cli --verbose
   ```

4. **Check npm global bin path:**
   ```bash
   npm config get prefix
   ```

   Add to PATH if needed:
   ```bash
   export PATH="$PATH:$(npm config get prefix)/bin"
   ```

### Permission denied during installation

**Cause:** Insufficient permissions to write to global npm directory

**Solutions:**

**Option 1: Use npx (no install needed):**
```bash
npx claudekit-cli new my-app
```

**Option 2: Fix npm permissions (recommended):**
```bash
# Create directory for global installs
mkdir ~/.npm-global

# Configure npm to use new directory
npm config set prefix '~/.npm-global'

# Add to PATH in ~/.bashrc or ~/.zshrc
export PATH=~/.npm-global/bin:$PATH

# Reload shell config
source ~/.bashrc  # or source ~/.zshrc
```

**Option 3: Use sudo (not recommended):**
```bash
sudo npm install -g claudekit-cli
```

### GitHub authentication fails

**Cause:** Token expired or invalid permissions

**Solutions:**

1. **Re-authenticate:**
   ```bash
   gh auth logout
   gh auth login
   ```

2. **Check token permissions:**
   ```bash
   gh auth status
   ```

3. **Verify token has required scopes:**
   - `repo` (access repositories)
   - `read:org` (read organization data)
   - `workflow` (update GitHub Actions)

4. **Manually create token:**
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate new token with required scopes
   - Use token:
     ```bash
     gh auth login --with-token < token.txt
     ```

### Installation hangs or times out

**Cause:** Network issues or npm registry problems

**Solutions:**

1. **Check network connection:**
   ```bash
   ping registry.npmjs.org
   ```

2. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

3. **Use different registry:**
   ```bash
   npm install -g claudekit-cli --registry=https://registry.npmjs.org/
   ```

4. **Install with verbose logging:**
   ```bash
   npm install -g claudekit-cli --verbose
   ```

### Wrong Node.js version

**Cause:** Node.js version below 18.0.0

**Solutions:**

1. **Check current version:**
   ```bash
   node --version
   ```

2. **Update Node.js:**
   - Download from [nodejs.org](https://nodejs.org)
   - Or use version manager:
     ```bash
     # nvm (recommended)
     nvm install 18
     nvm use 18

     # Or n
     n 18
     ```

3. **Verify update:**
   ```bash
   node --version  # Should be v18.0.0+
   ```

## Next steps

Now that ClaudeKit CLI is installed:

1. **Create your first project** - [Quick start guide](/docs/getting-started/quick-start)
2. **Learn CLI commands** - [Command reference](/docs/cli/commands)
3. **Configure your environment** - [Configuration guide](/docs/cli/configuration)
4. **Explore templates** - [Available templates](/docs/cli/templates)

## Need help?

If installation issues persist:

1. **Check system requirements** - Verify Node.js, npm, and Git versions
2. **Search documentation** - Use search (⌘K) to find solutions
3. **Ask community** - [GitHub Discussions](https://github.com/claudekit/claudekit-cli/discussions)
4. **Report bugs** - [Issue tracker](https://github.com/claudekit/claudekit-cli/issues)
5. **Get support** - [Discord community](https://discord.gg/claudekit)

---

**Installation complete!** You're ready to create AI-powered applications with ClaudeKit.
