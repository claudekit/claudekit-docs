---
title: "ck update"
description: "Update ClaudeKit CLI to the latest version with automatic package manager detection"
section: cli
order: 7
---

# ck update

> Update the ClaudeKit CLI package itself to the latest version using your package manager.

## Quick Start

```bash
# Check for updates
ck update --check

# Update to latest version
ck update

# Update to specific version
ck update --release 3.11.0

# Update to beta version
ck update --beta

# Non-interactive update
ck update --yes
```

**Note**: This command updates the ClaudeKit CLI tool itself, NOT your ClaudeKit project. To update your project, use [`ck init`](/docs/cli/init).

## What It Does

The `ck update` command:

1. Detects your package manager (npm, bun, pnpm, yarn)
2. Fetches latest version from npm registry
3. Compares current version with target version
4. Prompts for confirmation (unless `--yes`)
5. Executes package manager update command
6. Verifies installation

## Syntax

```bash
ck update [OPTIONS]
```

### Options

| Flag | Description | Default |
|------|-------------|---------|
| `--check` | Only check for updates, don't install | `false` |
| `--release <version>` | Update to specific version | Latest stable |
| `--beta` | Update to latest beta version | `false` |
| `--yes` / `-y` | Skip confirmation prompt | `false` |
| `--registry <url>` | Custom npm registry URL | https://registry.npmjs.org |
| `--verbose` | Enable verbose logging | `false` |

## Examples

### Check for Updates

See if a newer version is available without installing:

```bash
ck update --check
```

**Example output:**

```
[>] ClaudeKit CLI - Update

Current CLI version: 3.10.1
Latest version: 3.11.0

[^] upgrade: 3.10.1 -> 3.11.0

Update Check

Update available: 3.10.1 -> 3.11.0

Run 'ck update' to install

Check complete
```

### Update to Latest

Update to the newest stable version:

```bash
ck update
```

**Example output:**

```
[>] ClaudeKit CLI - Update

Current CLI version: 3.10.1
Using npm v10.2.4
Latest version: 3.11.0

[^] upgrade: 3.10.1 -> 3.11.0

Update CLI from 3.10.1 to 3.11.0? (y/n) y

Updating CLI...
✓ Update completed
✓ Installed version: 3.11.0

[+] Successfully updated ClaudeKit CLI to 3.11.0
```

### Update to Specific Version

Downgrade or install a specific version:

```bash
ck update --release 3.9.0
```

Useful for:
- Rolling back to a known stable version
- Testing specific version behavior
- Matching team's CLI version

### Update to Beta

Get the latest prerelease version:

```bash
ck update --beta
```

**Example output:**

```
Current CLI version: 3.10.1
Latest beta version: 3.11.0-beta.2

[^] upgrade: 3.10.1 -> 3.11.0-beta.2

Update CLI from 3.10.1 to 3.11.0-beta.2? (y/n)
```

If no beta version exists, falls back to latest stable.

### Non-Interactive Update

Skip confirmation prompt (useful for scripts):

```bash
ck update --yes
```

Or short form:

```bash
ck update -y
```

### Combine Flags

Update to latest beta without confirmation:

```bash
ck update --beta --yes
```

## Package Manager Detection

The CLI automatically detects which package manager you used for installation:

### Detected Managers

- **npm** - Default Node.js package manager
- **bun** - Fast all-in-one JavaScript runtime
- **pnpm** - Fast, disk space efficient
- **yarn** - Alternative to npm

### Detection Order

1. Checks for global installation path patterns
2. Verifies package manager is installed
3. Falls back to npm if detection fails

### Update Commands Used

The CLI uses the appropriate command for your package manager:

| Manager | Update Command |
|---------|----------------|
| npm | `npm update -g claudekit-cli` |
| bun | `bun update -g claudekit-cli` |
| pnpm | `pnpm update -g claudekit-cli` |
| yarn | `yarn global upgrade claudekit-cli` |

## Update Notifications

The CLI automatically checks for updates when you run:

```bash
ck --version
```

**Example with update available:**

```
CLI Version: 3.10.1
Local Kit Version: 1.16.0 (ClaudeKit Engineer)

⚠ Update available: 3.10.1 -> 3.11.0
  Run 'ck update' to install
```

### Notification Caching

Update checks are cached for 7 days to minimize API calls.

**Cache location:**

- **macOS/Linux**: `~/.claudekit/cache/version-check.json`
- **Windows**: `%USERPROFILE%\.claudekit\cache\version-check.json`

### Disable Notifications

Set environment variable to disable update notifications:

```bash
# Temporary (current session)
NO_UPDATE_NOTIFIER=1 ck --version

# Permanent (add to ~/.bashrc or ~/.zshrc)
export NO_UPDATE_NOTIFIER=1
```

**Windows (PowerShell):**

```powershell
[System.Environment]::SetEnvironmentVariable("NO_UPDATE_NOTIFIER", "1", [System.EnvironmentVariableTarget]::User)
```

## Common Patterns

### Regular Update Routine

Keep CLI up to date:

```bash
# Weekly check
ck update --check

# If update available, install it
ck update
```

### Team Version Sync

Ensure team uses same CLI version:

```bash
# In team docs, specify version
ck update --release 3.10.1
```

### Beta Testing

Test upcoming features:

```bash
# Install beta
ck update --beta

# Try new features
ck new --help

# Roll back to stable if issues
ck update --release 3.10.1
```

### Automated Updates

Add to cron job or scheduled task:

```bash
# Auto-update weekly (add to crontab)
0 9 * * 1 ck update --yes
```

**Windows Task Scheduler:**

```powershell
schtasks /create /tn "ClaudeKit Update" /tr "ck update --yes" /sc weekly /d MON /st 09:00
```

## Troubleshooting

### "Permission denied" Error

**Symptoms:**

```
EACCES: permission denied
```

**Cause:** Insufficient permissions for global package directory.

**Solutions:**

**Option 1: Use sudo (Linux/macOS)**

```bash
sudo ck update
```

Or manually:

```bash
sudo npm update -g claudekit-cli
```

**Option 2: Fix npm Permissions (Recommended)**

Follow [npm's guide to fix permissions](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

**Option 3: Use a Node Version Manager**

- **nvm** (Linux/macOS): [nvm installation](https://github.com/nvm-sh/nvm)
- **nvm-windows** (Windows): [nvm-windows](https://github.com/coreybutler/nvm-windows)

### "Version X does not exist"

**Symptoms:**

```
Version 3.99.0 does not exist on npm registry
```

**Cause:** Specified version not published or typo.

**Solutions:**

```bash
# Check available versions
npm view claudekit-cli versions

# Or use CLI versions command (won't work for CLI itself, but shows pattern)
# Then install correct version
ck update --release 3.11.0
```

### "Already on the latest version"

**Symptoms:**

```
[+] Already on the latest version (3.11.0)
```

**Meaning:** You're up to date. No action needed.

**To force reinstall:**

```bash
npm uninstall -g claudekit-cli
npm install -g claudekit-cli
```

### Update Fails Silently

**Symptoms:** No error, but version doesn't change.

**Cause:** Package manager cache issue.

**Solutions:**

```bash
# Clear npm cache
npm cache clean --force

# Retry update
ck update

# Or reinstall
npm uninstall -g claudekit-cli
npm install -g claudekit-cli@latest
```

### "Please restart your terminal"

**Symptoms:** Update succeeds but `ck --version` shows old version.

**Cause:** Shell hasn't reloaded PATH.

**Solutions:**

**Option 1: Restart terminal** (easiest)

**Option 2: Reload shell config**

```bash
source ~/.bashrc  # or ~/.zshrc
```

**Option 3: Use full path**

```bash
$(npm config get prefix)/bin/ck --version
```

## Platform-Specific Notes

### Windows

- Use PowerShell or Windows Terminal
- May require administrator privileges
- Antivirus may interfere with update

### macOS

- Homebrew users: If installed via Homebrew, use `brew upgrade`
- System Integrity Protection may require sudo

### Linux

- Package manager varies by distro
- WSL fully supported
- May need sudo for global installs

## Version Verification

After updating, verify the new version:

```bash
ck --version
```

Expected output:

```
CLI Version: 3.11.0
```

If old version still shows, restart terminal or reload shell config.

## Rollback

To rollback to a previous version:

```bash
# Install specific older version
ck update --release 3.10.0

# Verify
ck --version
```

## Next Steps

After updating the CLI:

1. **Update your projects** to latest kit versions:

```bash
cd my-project
ck init
```

2. **Check for breaking changes** in release notes
3. **Test commands** to ensure compatibility
4. **Run health check:**

```bash
ck doctor
```

## Related Commands

- [`ck --version`](/docs/cli#verify-installation) - Check current version
- [`ck init`](/docs/cli/init) - Update ClaudeKit project (not CLI)
- [`ck doctor`](/docs/cli/doctor) - Diagnose CLI issues
- [`ck versions`](/docs/cli/versions) - List kit versions (not CLI versions)
- [Installation](/docs/cli/installation) - Initial setup
