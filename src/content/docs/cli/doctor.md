---
title: "ck doctor"
description: "Run comprehensive health checks and auto-fix common issues with ClaudeKit installations"
section: cli
order: 5
---

# ck doctor

> Run comprehensive health checks, diagnose issues, and auto-fix common problems with ClaudeKit installations.

## Quick Start

```bash
# Full health check (interactive)
ck doctor

# Auto-fix all fixable issues
ck doctor --fix

# Generate shareable diagnostic report
ck doctor --report

# CI mode (JSON output, exit code on failure)
ck doctor --check-only --json
```

## What It Does

The `ck doctor` command performs comprehensive health checks across:

1. **System**: Node.js, npm, Python, pip, git, gh CLI
2. **ClaudeKit**: Global/local installation, versions, metadata
3. **Auth**: GitHub CLI authentication, repository access
4. **Project**: package.json, node_modules, lock files
5. **Skills**: Dynamic skill dependency resolution

After running checks, it can:

- Display results with color-coded status
- Auto-fix fixable issues
- Generate shareable diagnostic reports
- Output machine-readable JSON for CI/CD

## Syntax

```bash
ck doctor [OPTIONS]
```

### Options

| Flag | Description | Default |
|------|-------------|---------|
| `--fix` | Auto-fix all fixable issues | `false` |
| `--report` | Generate shareable diagnostic report (prompts for gist upload) | `false` |
| `--check-only` | CI mode: no prompts, exit 1 on failures | `false` |
| `--json` | Output results as JSON | `false` |
| `--full` | Run extended checks (slower but more thorough) | `false` |
| `--verbose` | Enable verbose logging | `false` |

## Health Checks Performed

### System Checks

Verifies development environment dependencies:

- **Node.js**: Version 18.0.0+
- **npm**: Installed and working
- **Python**: Version 3.8+ (for skill dependencies)
- **pip**: Python package manager
- **git**: Version control
- **gh**: GitHub CLI for authentication
- **Claude CLI**: Claude Code CLI (if installed)

### ClaudeKit Checks

Validates ClaudeKit installation:

- **Global installation**: `~/.claude/` exists and valid
- **Local installation**: `./.claude/` exists and valid
- **Metadata**: Installation metadata is valid
- **Version**: Installed version is current
- **Skills**: Skills directory structure is correct

### Auth Checks

Validates GitHub authentication:

- **GitHub CLI auth**: `gh auth status` passes
- **Token validity**: Token has required scopes
- **Repository access**: Can access ClaudeKit repositories
- **Permissions**: Read access to releases

### Project Checks

Validates project configuration (if in project directory):

- **package.json**: Exists and valid
- **node_modules**: Installed and not corrupted
- **Lock files**: Present and consistent
- **Dependencies**: All required packages installed

### Module Checks

Dynamically resolves skill dependencies:

- **Python packages**: From `requirements.txt` in skills
- **System tools**: FFmpeg, ImageMagick, etc.
- **Node packages**: Skill-specific npm dependencies

## Examples

### Basic Health Check

Run all checks interactively:

```bash
ck doctor
```

**Example output:**

```
ClaudeKit Health Check

System Checks:
  ✓ Node.js (v20.11.0)
  ✓ npm (v10.2.4)
  ✓ Python (v3.11.5)
  ✓ pip (v23.3.1)
  ✓ git (v2.42.0)
  ✓ GitHub CLI (v2.40.1)
  ⚠ Claude CLI (not installed)

ClaudeKit Checks:
  ✓ Local installation (v1.16.0)
  ✓ Global installation (v1.16.0)
  ✓ Metadata valid

Auth Checks:
  ✓ GitHub CLI authenticated
  ✓ Repository access granted

Project Checks:
  ✓ package.json valid
  ✓ node_modules installed
  ✓ Lock file present

Module Checks:
  ✓ All skill dependencies installed

Summary: 17 passed, 1 warning, 0 failed

All checks passed!
```

### Auto-Fix Issues

Automatically fix all fixable issues:

```bash
ck doctor --fix
```

**What gets fixed:**

- Missing npm dependencies → `npm install`
- Missing gh auth → `gh auth login` prompt
- Corrupted node_modules → Reinstall
- Missing global install → `ck init --global` prompt
- Missing skill deps → Install in skill directory

**Example output:**

```
ClaudeKit Health Check

...checks run...

Auto-fixing issues...

✓ Installed missing dependencies (npm install)
✓ Fixed GitHub CLI authentication
✓ Installed skill dependencies (3 packages)

Healing Summary:
  3 issues fixed
  0 issues failed
  2 issues not fixable

All fixable issues resolved!
```

### Generate Diagnostic Report

Create a shareable text report for troubleshooting:

```bash
ck doctor --report
```

**What it does:**

1. Runs all checks
2. Generates detailed text report
3. Prompts to upload to GitHub Gist (public)
4. Prints gist URL for sharing

**Example output:**

```
ClaudeKit Health Check - Diagnostic Report

System Information:
  OS: macOS 14.2.1 (darwin)
  Node.js: v20.11.0
  npm: v10.2.4
  ...

Check Results:
  [PASS] Node.js version
  [FAIL] GitHub CLI authentication
  ...

Detailed Errors:
  1. GitHub CLI not authenticated
     Fix: Run 'gh auth login'
  ...

---
Upload report to GitHub Gist? (y/n)

Report uploaded: https://gist.github.com/abc123
```

Share the gist URL when asking for support.

### CI/CD Mode

Run in CI pipeline with JSON output and exit codes:

```bash
ck doctor --check-only --json
```

**Exit codes:**

- `0`: All checks pass
- `1`: One or more checks failed

**JSON output example:**

```json
{
  "summary": {
    "passed": 15,
    "failed": 2,
    "warnings": 1
  },
  "checks": [
    {
      "category": "System",
      "name": "Node.js",
      "status": "pass",
      "message": "v20.11.0"
    },
    {
      "category": "Auth",
      "name": "GitHub CLI",
      "status": "fail",
      "message": "Not authenticated",
      "autoFixable": true,
      "fix": "gh auth login"
    }
  ]
}
```

### Full Extended Checks

Run thorough checks (slower):

```bash
ck doctor --full
```

Includes:
- Network connectivity tests
- Deeper dependency verification
- Extended permission checks
- Performance benchmarks

## Auto-Fix Capabilities

Issues that can be automatically fixed:

| Issue | Fix Action |
|-------|------------|
| Missing npm dependencies | `npm install` |
| Missing gh authentication | Prompt `gh auth login` |
| Corrupted node_modules | `rm -rf node_modules && npm install` |
| Missing global install | Prompt `ck init --global` |
| Missing skill dependencies | Install packages in skill directories |
| Invalid cache | Clear cache and refresh |

Issues that require manual intervention:

| Issue | Manual Fix |
|-------|------------|
| Node.js version too old | Update Node.js from nodejs.org |
| Python not installed | Install Python from python.org |
| Repository access denied | Accept GitHub invitation email |
| Incompatible OS | Use supported OS (Windows/macOS/Linux) |

## Interpreting Results

### Status Icons

- `✓` Green checkmark: Passed
- `⚠` Yellow warning: Warning (non-critical)
- `✗` Red X: Failed (critical)

### Common Issues

#### "GitHub CLI not authenticated"

**Status:** `✗ Failed`

**Fix:**

```bash
gh auth login
```

Select "Login with a web browser" option.

#### "Repository access denied"

**Status:** `✗ Failed`

**Causes:**

1. Haven't accepted GitHub invitation
2. Permissions haven't propagated (wait 2-5 minutes)
3. Token expired (re-run `gh auth login`)

**Fix:**

1. Check email for GitHub invitation
2. Accept invitation
3. Wait 2-5 minutes
4. Re-run `ck doctor`

#### "Node.js version too old"

**Status:** `✗ Failed`

**Fix:**

Update Node.js to 18.0.0 or higher:

- **Windows**: Download from [nodejs.org](https://nodejs.org/)
- **macOS**: `brew install node`
- **Linux**: Use your package manager or [nvm](https://github.com/nvm-sh/nvm)

#### "Claude CLI not installed"

**Status:** `⚠ Warning`

**Fix (optional):**

```bash
npm install -g @claude/cli
```

Not required for ClaudeKit, but useful for Claude Code integration.

## Common Patterns

### Troubleshooting Workflow

Step-by-step debugging:

```bash
# 1. Run diagnostics
ck doctor

# 2. Auto-fix what we can
ck doctor --fix

# 3. Re-check
ck doctor

# 4. If still failing, generate report
ck doctor --report
```

### Pre-Installation Check

Before installing ClaudeKit:

```bash
ck doctor --full
```

Ensures your system is ready.

### CI Pipeline Integration

Add to your CI workflow:

```yaml
# .github/workflows/test.yml
- name: Health Check
  run: ck doctor --check-only --json > health-report.json
  continue-on-error: true

- name: Upload Report
  uses: actions/upload-artifact@v3
  with:
    name: health-report
    path: health-report.json
```

### Regular Maintenance

Periodic health checks:

```bash
# Weekly cron job
0 9 * * 1 ck doctor --fix --json > ~/claudekit-health.log
```

## Platform-Specific Notes

### Windows

- Use PowerShell or Windows Terminal
- Some checks may require administrator privileges
- Path separators handled automatically

### macOS

- Requires Xcode Command Line Tools for git
- Homebrew recommended for installing dependencies
- Native unzip used for performance

### Linux

- Package manager varies by distro (apt, yum, pacman)
- WSL fully supported
- May need sudo for system dependencies

## Output Formats

### Interactive (Default)

Color-coded terminal output with checkmarks and details.

### JSON (`--json`)

Machine-readable structured output:

```json
{
  "summary": { ... },
  "checks": [ ... ],
  "timestamp": "2025-01-15T10:30:00Z"
}
```

### Report (`--report`)

Detailed text report with:
- System information
- Check results
- Error details
- Recommended fixes
- Optional gist upload

## Next Steps

After running `ck doctor`:

1. **Fix any failed checks** using provided solutions
2. **Update ClaudeKit** if version is outdated:

```bash
ck init
```

3. **Install missing dependencies:**

```bash
ck init --install-skills
```

4. **Test your setup:**

```bash
ck new --dir test-project
```

## Related Commands

- [`ck new`](/docs/cli/new) - Create new project
- [`ck init`](/docs/cli/init) - Update installation
- [`ck update`](/docs/cli/update) - Update CLI itself
- [Installation](/docs/cli/installation) - Setup guide
- [Configuration](/docs/cli/configuration) - Configure defaults
