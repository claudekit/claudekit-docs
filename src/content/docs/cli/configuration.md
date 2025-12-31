---
title: "Configuration"
description: "Complete configuration reference for ClaudeKit CLI including config files, environment variables, and customization options"
section: cli
order: 9
---

# Configuration

> Customize ClaudeKit CLI behavior with config files, environment variables, and project-specific settings.

## Configuration Files

ClaudeKit CLI uses multiple configuration files at different levels.

### Global CLI Config

**Location:** `~/.claudekit/config.json`

**Purpose:** Store CLI defaults and authentication

**Structure:**

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

**Auto-created:** Yes, on first run

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `github.token` | string | GitHub authentication token (stored in OS keychain) |
| `defaults.kit` | string | Default kit for `ck new` and `ck init` |
| `defaults.dir` | string | Default target directory |

### Project Config

**Location (Local):** `.claude/.ck.json`
**Location (Global):** `~/.claude/.ck.json`

**Purpose:** Store project-specific folder configuration

**Structure:**

```json
{
  "folders": {
    "docs": "documentation",
    "plans": "planning"
  }
}
```

**Auto-created:** When using custom folder names

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `folders.docs` | string | Custom name for docs directory |
| `folders.plans` | string | Custom name for plans directory |

### ClaudeKit Metadata

**Location (Local):** `.claude/metadata.json`
**Location (Global):** `~/.claude/metadata.json`

**Purpose:** Track installation version and ownership

**Structure (Single Kit):**

```json
{
  "name": "ClaudeKit Engineer",
  "version": "1.17.0",
  "installedAt": "2025-01-15T10:30:00.000Z",
  "mode": "local",
  "files": [
    {
      "path": "agents/planner/agent.json",
      "hash": "sha256-abc123...",
      "ownership": "ck",
      "installedVersion": "1.17.0"
    }
  ]
}
```

**Structure (Multi-Kit):**

```json
{
  "version": "1.17.0",
  "installedAt": "2025-01-15T10:30:00.000Z",
  "mode": "local",
  "kits": {
    "engineer": {
      "name": "ClaudeKit Engineer",
      "version": "1.17.0",
      "installedAt": "2025-01-15T10:30:00.000Z",
      "files": [ /* file tracking */ ]
    },
    "marketing": {
      "name": "ClaudeKit Marketing",
      "version": "1.5.0",
      "installedAt": "2025-01-16T14:20:00.000Z",
      "files": [ /* file tracking */ ]
    }
  }
}
```

**Auto-created:** Yes, by `ck new` or `ck init`

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Kit name (single-kit only) |
| `version` | string | Installed version |
| `installedAt` | string | ISO 8601 timestamp |
| `mode` | string | `"local"` or `"global"` |
| `files` | array | File ownership tracking (single-kit) |
| `kits` | object | Multi-kit installations (contains kit-specific data) |

## Environment Variables

Configure CLI behavior via environment variables.

### Authentication

#### GITHUB_TOKEN

**Purpose:** GitHub personal access token for API authentication

**Fallback order:**

1. GitHub CLI (`gh auth token`)
2. `GITHUB_TOKEN` environment variable
3. Config file (`~/.claudekit/config.json`)
4. OS keychain
5. User prompt

**Usage:**

```bash
export GITHUB_TOKEN=ghp_abc123...
ck new
```

**Note:** GitHub CLI (`gh auth login`) is recommended over PAT.

### Behavior

#### CI

**Purpose:** Detect CI/CD environment, enable non-interactive mode

**Values:** `"true"` or `"false"`

**Usage:**

```bash
CI=true ck init --release v1.16.0
```

**Effect:**
- Disables interactive prompts
- Requires explicit `--release` flag for version selection
- Skips confirmation prompts

#### NON_INTERACTIVE

**Purpose:** Force non-interactive mode

**Values:** `"true"` or `"false"`

**Usage:**

```bash
NON_INTERACTIVE=true ck new --kit engineer --dir ./project
```

**Effect:** Same as `CI=true`

#### NO_UPDATE_NOTIFIER

**Purpose:** Disable update notifications

**Values:** `"1"` or any truthy value

**Usage:**

```bash
export NO_UPDATE_NOTIFIER=1
ck --version  # No update notification shown
```

**Permanent:**

```bash
# Add to ~/.bashrc or ~/.zshrc
echo 'export NO_UPDATE_NOTIFIER=1' >> ~/.bashrc
```

#### CLAUDEKIT_VERBOSE

**Purpose:** Enable verbose logging globally

**Values:** `"1"` or `"true"`

**Usage:**

```bash
CLAUDEKIT_VERBOSE=1 ck new
```

**Effect:** Same as `--verbose` flag on all commands

### Caching

#### CK_CACHE_TTL

**Purpose:** Set cache time-to-live in seconds

**Default:** `3600` (1 hour)

**Usage:**

```bash
# Cache for 2 hours
CK_CACHE_TTL=7200 ck versions

# Disable caching (always fetch fresh)
CK_CACHE_TTL=0 ck versions

# Cache for 30 minutes (permanent)
export CK_CACHE_TTL=1800
```

**What's cached:**
- GitHub release data
- Version check results

**Cache locations:**

- **Releases:** `~/.claudekit/cache/releases/`
- **Version checks:** `~/.claudekit/cache/version-check.json`

## Command-Line Defaults

Set defaults to avoid repetitive flags.

### Kit Default

Set default kit for `ck new` and `ck init`:

**Via config file:**

Edit `~/.claudekit/config.json`:

```json
{
  "defaults": {
    "kit": "engineer"
  }
}
```

**Via command:**

```bash
# First run with --kit flag
ck new --kit engineer

# Saves to config, future runs use it
ck new  # Uses engineer by default
```

### Directory Default

Set default target directory:

**Via config file:**

```json
{
  "defaults": {
    "dir": "~/projects"
  }
}
```

**Effect:**

```bash
ck new  # Creates project in ~/projects instead of current dir
```

## Custom Folder Names

Use custom names for `docs/` and `plans/` directories.

### Per-Project Configuration

**Set during creation:**

```bash
ck new --docs-dir documentation --plans-dir planning
```

**Set during update:**

```bash
ck init --docs-dir documentation --plans-dir planning
```

**What happens:**

1. Folder names changed in file system
2. All references updated in workflow files
3. Configuration saved to `.claude/.ck.json`
4. Future updates preserve custom names

### Configuration File

**Location:** `.claude/.ck.json`

**Structure:**

```json
{
  "folders": {
    "docs": "documentation",
    "plans": "planning"
  }
}
```

**Read by:** `ck init` during updates

## Protected File Patterns

Files matching these patterns are never overwritten during updates.

### Environment Files

- `.env`
- `.env.local`
- `.env.*.local` (e.g., `.env.production.local`)

### Credential Files

- `*.key` (private keys)
- `*.pem` (certificates)
- `*.p12`, `*.pfx` (PKCS12 files)

### User Configuration

- `settings.json`
- `settings.local.json`
- `CLAUDE.md` (global mode only)

### Build Artifacts

- `node_modules/**`
- `.git/**`
- `dist/**`
- `build/**`

### Custom Exclude Patterns

Add your own patterns:

```bash
ck new --exclude "*.log" --exclude "temp/**"
ck init --exclude "secrets/**"
```

## Platform-Specific Paths

Configuration locations vary by platform.

### macOS/Linux

| Type | Path |
|------|------|
| CLI Config | `~/.claudekit/config.json` |
| Release Cache | `~/.claudekit/cache/releases/` |
| Version Cache | `~/.claudekit/cache/version-check.json` |
| Global Kit | `~/.claude/` |
| Local Kit | `./.claude/` |

### Windows

| Type | Path |
|------|------|
| CLI Config | `%USERPROFILE%\.claudekit\config.json` |
| Release Cache | `%USERPROFILE%\.claudekit\cache\releases\` |
| Version Cache | `%USERPROFILE%\.claudekit\cache\version-check.json` |
| Global Kit | `%USERPROFILE%\.claude\` |
| Local Kit | `.\.claude\` |

## Configuration Examples

### Minimal Setup

Basic configuration for quick start:

```json
{
  "defaults": {
    "kit": "engineer"
  }
}
```

### Team Configuration

Shared settings for team projects:

```json
{
  "defaults": {
    "kit": "engineer",
    "dir": "."
  }
}
```

**Team workflow:**

1. Team lead sets defaults
2. Team members use same config
3. Consistent project structure

### CI/CD Configuration

Optimized for automation:

```bash
# .github/workflows/setup.yml
env:
  CI: true
  NO_UPDATE_NOTIFIER: 1
  CK_CACHE_TTL: 0

steps:
  - name: Install ClaudeKit
    run: ck init --yes --release v1.16.0 --skip-setup
```

### Development vs Production

**Development:**

```bash
# Use beta versions
ck new --beta --install-skills
```

**Production:**

```bash
# Pin stable version
ck new --release v1.16.0
```

## Debugging Configuration

### View Current Config

```bash
# View global config
cat ~/.claudekit/config.json

# View project config
cat .claude/.ck.json

# View metadata
cat .claude/metadata.json
```

### Validate Configuration

```bash
# Run health check
ck doctor

# Verbose mode for details
ck doctor --verbose
```

### Reset Configuration

**Reset CLI config:**

```bash
rm ~/.claudekit/config.json
ck new  # Will recreate with prompts
```

**Reset project config:**

```bash
rm .claude/.ck.json
ck init  # Will use defaults
```

## Best Practices

### Version Pinning

For production projects:

```bash
# Pin to specific stable version
ck new --release v1.16.0

# Document in README
echo "ClaudeKit Version: 1.16.0" >> README.md
```

### Team Synchronization

Keep team on same CLI version:

```bash
# In team docs
npm install -g claudekit-cli@3.10.1

# Or package.json (local install)
{
  "devDependencies": {
    "claudekit-cli": "3.10.1"
  }
}
```

### Credentials Security

Never commit credentials:

```bash
# Add to .gitignore
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
echo "*.key" >> .gitignore

# Use environment variables in CI
# Set GITHUB_TOKEN in CI secrets
```

### Cache Management

Clear cache periodically:

```bash
# Clear release cache
rm -rf ~/.claudekit/cache/releases/

# Clear version check cache
rm -rf ~/.claudekit/cache/version-check.json

# Or set lower TTL
export CK_CACHE_TTL=1800  # 30 minutes
```

## Troubleshooting Configuration

### "Config file not found"

**Normal behavior** - Config is created on first run.

**To pre-create:**

```bash
mkdir -p ~/.claudekit
echo '{"defaults":{"kit":"engineer"}}' > ~/.claudekit/config.json
```

### "Invalid JSON in config file"

**Fix:**

```bash
# Validate JSON
cat ~/.claudekit/config.json | jq .

# If invalid, recreate
rm ~/.claudekit/config.json
ck new  # Recreates with valid JSON
```

### "Permission denied" on config file

**Linux/macOS:**

```bash
chmod 600 ~/.claudekit/config.json
```

**Windows:**

Run as administrator or check file permissions in Properties.

## Next Steps

After configuring:

1. **Test configuration:**

```bash
ck doctor
```

2. **Create a project:**

```bash
ck new
```

3. **Verify settings:**

```bash
cat .claude/metadata.json
```

## Related Commands

- [`ck doctor`](/docs/cli/doctor) - Validate configuration
- [`ck new`](/docs/cli/new) - Create project with config
- [`ck init`](/docs/cli/init) - Update project preserving config
- [Installation](/docs/cli/installation) - Initial setup
