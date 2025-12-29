---
title: "Installation"
description: "Complete installation guide for ClaudeKit CLI with package managers, prerequisites, and authentication setup"
section: cli
order: 2
---

# Installation

> Install ClaudeKit CLI globally and set up GitHub authentication to start creating projects.

## Prerequisites

Before installing ClaudeKit CLI, ensure you have:

### 1. Node.js

ClaudeKit CLI requires Node.js 18.0.0 or higher.

**Check your version:**

```bash
node --version
```

**Install Node.js:**

- **Windows**: [Download from nodejs.org](https://nodejs.org/)
- **macOS**: `brew install node`
- **Linux**: `sudo apt install nodejs npm` (Ubuntu/Debian) or check your distro's package manager

### 2. Git

Required for repository operations.

**Check your version:**

```bash
git --version
```

**Install Git:**

- **Windows**: [Download from git-scm.com](https://git-scm.com/)
- **macOS**: `brew install git` (or use Xcode Command Line Tools)
- **Linux**: `sudo apt install git` (Ubuntu/Debian)

### 3. Purchase ClaudeKit

You must purchase a ClaudeKit Starter Kit from [ClaudeKit.cc](https://claudekit.cc) to access the private GitHub repository containing kit templates.

After purchase, you'll receive:

- Access to the private GitHub repository
- License key (if applicable)
- Setup instructions

## Install ClaudeKit CLI

Install the CLI globally using your preferred package manager:

### npm (Recommended)

```bash
npm install -g claudekit-cli
```

### Bun

```bash
bun add -g claudekit-cli
```

### pnpm

```bash
pnpm add -g claudekit-cli
```

### Yarn

```bash
yarn global add claudekit-cli
```

## Verify Installation

After installation, verify the CLI is working:

```bash
ck --version
```

Expected output:

```
CLI Version: 3.10.1
```

If you see a "command not found" error, ensure your package manager's global bin directory is in your PATH:

- **npm**: `npm config get prefix` (should be in PATH)
- **bun**: `~/.bun/bin` (add to PATH if needed)
- **pnpm**: `pnpm config get global-bin-dir` (add to PATH if needed)
- **yarn**: `yarn global bin` (add to PATH if needed)

## Authentication Setup {#authentication}

ClaudeKit CLI requires GitHub authentication to download releases from private repositories.

### Install GitHub CLI

**Step 1: Install GitHub CLI**

- **Windows**: `winget install GitHub.cli`
- **macOS**: `brew install gh`
- **Linux**: `sudo apt install gh` (Ubuntu/Debian)

For other Linux distributions, see [GitHub CLI installation guide](https://github.com/cli/cli#installation).

**Step 2: Verify installation**

```bash
gh --version
```

### Authenticate with GitHub CLI

**Run the authentication command:**

```bash
gh auth login
```

**Follow the prompts:**

1. Select **GitHub.com**
2. Select **HTTPS** (or SSH if you prefer)
3. Authenticate Git? → **Yes**
4. Select **Login with a web browser** (recommended)
5. Copy the one-time code shown
6. Press Enter to open browser
7. Paste the code in the browser
8. Authorize GitHub CLI

**Important**: Use "Login with a web browser" option. Do NOT use "Paste an authentication token" as PAT authentication is no longer supported for accessing private repositories.

### Verify Authentication

Check your authentication status:

```bash
gh auth status
```

Expected output:

```
github.com
  ✓ Logged in to github.com as your-username (oauth_token)
  ✓ Git operations for github.com configured to use https protocol.
  ✓ Token: *******************
```

### Accept Repository Invitation

After purchasing ClaudeKit, you'll receive an email invitation to access the private GitHub repository.

1. **Check your email** for the GitHub invitation
2. **Accept the invitation** by clicking the link
3. **Wait 2-5 minutes** for permissions to propagate

Without accepting the invitation, you'll get "Access denied" errors when running `ck new` or `ck init`.

## Troubleshooting

### "Access denied" Error

**Symptoms:**

```
Access denied to repository
```

**Solutions:**

1. Run `ck doctor` to diagnose issues
2. Ensure you've accepted the GitHub repository invitation
3. Re-run `gh auth login` and select "Login with a web browser"
4. Wait 2-5 minutes after accepting invitation for permissions to propagate

### "GitHub CLI not authenticated" Error

**Symptoms:**

```
GitHub CLI not authenticated
```

**Solutions:**

```bash
# Re-authenticate with web browser method
gh auth login
```

Select "Login with a web browser" (NOT "Paste token").

### Permission Denied During Installation

**Symptoms:**

```
EACCES: permission denied
```

**Solutions:**

**Option 1: Use sudo (Linux/macOS)**

```bash
sudo npm install -g claudekit-cli
```

**Option 2: Fix npm permissions (Recommended)**

Follow [npm's guide to fix permissions](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

### Command Not Found

**Symptoms:**

```bash
ck: command not found
```

**Solutions:**

Add your package manager's global bin directory to PATH:

**npm:**

```bash
# Find npm prefix
npm config get prefix

# Add to PATH (add to ~/.bashrc or ~/.zshrc)
export PATH="$(npm config get prefix)/bin:$PATH"
```

**Bun:**

```bash
# Add to ~/.bashrc or ~/.zshrc
export PATH="$HOME/.bun/bin:$PATH"
```

**pnpm:**

```bash
# Add to ~/.bashrc or ~/.zshrc
export PATH="$(pnpm config get global-bin-dir):$PATH"
```

After editing shell config, restart your terminal or run:

```bash
source ~/.bashrc  # or ~/.zshrc
```

## Platform-Specific Notes

### Windows

- Use PowerShell or Windows Terminal (not Command Prompt)
- Path separators use backslash (`\`) but CLI handles this automatically
- Some commands may require administrator privileges

### macOS

- GitHub CLI can be installed via Homebrew
- Global npm packages install to `/usr/local/bin` by default
- Requires Xcode Command Line Tools for Git (install via `xcode-select --install`)

### Linux

- Package names vary by distribution (use your distro's package manager)
- Global npm packages may require sudo or npm permission fixes
- WSL (Windows Subsystem for Linux) fully supported

## Next Steps

Now that ClaudeKit CLI is installed and authenticated:

1. **Create a new project**: [`ck new`](/docs/cli/new)
2. **Run health check**: [`ck doctor`](/docs/cli/doctor)
3. **Browse available versions**: [`ck versions`](/docs/cli/versions)
4. **Configure defaults**: [Configuration](/docs/cli/configuration)

## Related Commands

- [`ck doctor`](/docs/cli/doctor) - Diagnose installation issues
- [`ck update`](/docs/cli/update) - Update CLI to latest version
- [`ck uninstall`](/docs/cli/uninstall) - Remove ClaudeKit
