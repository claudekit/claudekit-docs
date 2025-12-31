---
title: "ck versions"
description: "List available ClaudeKit release versions with filtering and detailed information"
section: cli
order: 6
---

# ck versions

> List all available ClaudeKit release versions from GitHub with filtering by kit, limit, and prerelease status.

## Quick Start

```bash
# Show all available versions for all kits
ck versions

# Filter by specific kit
ck versions --kit engineer

# Show more versions
ck versions --limit 50

# Include prereleases and drafts
ck versions --all
```

## What It Does

The `ck versions` command:

1. Fetches release information from GitHub
2. Filters by kit, prerelease status, and limit
3. Displays versions in a formatted table with:
   - Version tag
   - Release name
   - Published date (relative time)
   - Asset count
   - Prerelease/draft badges

## Syntax

```bash
ck versions [OPTIONS]
```

### Options

| Flag | Description | Default |
|------|-------------|---------|
| `--kit <name>` | Filter by specific kit (`engineer` or `marketing`) | All kits |
| `--limit <number>` | Maximum number of versions to show | 30 |
| `--all` | Include prereleases and drafts | `false` (stable only) |
| `--verbose` | Enable verbose logging | `false` |

## Examples

### List All Versions

Show latest 30 stable versions for all kits:

```bash
ck versions
```

**Example output:**

```
📦 ClaudeKit - Available Versions

ClaudeKit Engineer - Available Versions:

  v1.17.0              Add multi-kit support and ownership     2 days ago            (1 asset)
  v1.16.0              Skills migration improvements           1 week ago            (1 asset)
  v1.15.0              Global installation support             2 weeks ago           (1 asset)
  v1.14.2              Fix file merging edge cases             3 weeks ago           (1 asset)
  ...

Showing 30 releases

✨ Done
```

### Filter by Kit

Show versions for a specific kit:

```bash
ck versions --kit engineer
```

Only displays releases for ClaudeKit Engineer.

### Show More Versions

Increase the default limit:

```bash
ck versions --limit 50
```

Shows up to 50 versions instead of the default 30.

### Include Prereleases

Display beta versions and drafts:

```bash
ck versions --all
```

**Example output:**

```
ClaudeKit Engineer - Available Versions:

  v1.18.0-beta.1       New feature testing                      1 day ago            (1 asset) [prerelease]
  v1.17.0              Add multi-kit support                    2 days ago           (1 asset)
  v1.17.0-rc.2         Release candidate                        4 days ago           (1 asset) [prerelease]
  v1.16.0              Skills migration                         1 week ago           (1 asset)
  ...
```

Prereleases are marked with `[prerelease]` badge, drafts with `[draft]` badge.

### Combine Filters

Show 100 engineer releases including prereleases:

```bash
ck versions --kit engineer --limit 100 --all
```

## Output Format

Each version entry shows:

```
v1.17.0              Release name                              2 days ago           (1 asset)
^^^^^^^              ^^^^^^^^^^^^                              ^^^^^^^^^^           ^^^^^^^^^^
Version tag          Release title                             Relative time        Asset count
```

### Badges

- `[prerelease]` - Beta or prerelease version (yellow)
- `[draft]` - Draft release, not published (gray)

### Relative Time

Human-readable time since release:

- `Today` - Released today
- `Yesterday` - Released yesterday
- `N days ago` - Within last week
- `N weeks ago` - Within last month
- `N months ago` - Within last year
- `N years ago` - Over a year old

## Common Patterns

### Check Latest Version

See what's new:

```bash
ck versions --limit 1
```

Shows only the most recent stable release.

### Find Beta Versions

Look for upcoming features:

```bash
ck versions --all --limit 10
```

Shows latest 10 versions including betas.

### Compare Kits

See versions across both kits:

```bash
ck versions --limit 5
```

Displays latest 5 versions for each available kit.

### Full Version History

Get complete release timeline:

```bash
ck versions --all --limit 999
```

Shows all releases ever published (up to API limit).

## Use Cases

### Before Installing

Check available versions before creating a project:

```bash
# Browse versions
ck versions --kit engineer

# Install specific version
ck new --kit engineer --release v1.16.0
```

### Version Pinning

Find a stable version for production:

```bash
ck versions --kit engineer --limit 10
```

Avoid prereleases by not using `--all` flag.

### Beta Testing

Find latest beta for testing:

```bash
ck versions --all --limit 5
```

Look for `[prerelease]` badge, then:

```bash
ck new --kit engineer --release v1.18.0-beta.1
```

### Release Notes Research

Identify version with specific features:

```bash
ck versions --limit 50
```

Check release names/titles for feature mentions.

## Troubleshooting

### "No releases found"

**Causes:**

1. Repository access denied
2. Kit has no releases yet
3. Network connection issue

**Solution:**

```bash
# Check authentication
ck doctor

# Re-authenticate
gh auth login

# Verify repository access
ck versions --verbose
```

### "Error fetching releases"

**Causes:**

1. GitHub API rate limit exceeded
2. Network timeout
3. Invalid authentication

**Solution:**

```bash
# Wait and retry (rate limit resets hourly)
sleep 60
ck versions

# Check auth status
gh auth status

# Use verbose mode for details
ck versions --verbose
```

### Empty Output

**Causes:**

1. All releases filtered out (using `--kit` with wrong kit)
2. No stable releases (need `--all` flag)

**Solution:**

```bash
# Include prereleases
ck versions --all

# Try different kit
ck versions --kit marketing

# Check all kits
ck versions
```

## Version Naming Convention

ClaudeKit versions follow [Semantic Versioning](https://semver.org/):

```
v1.17.0
^ ^  ^ ^
│ │  │ └─ Patch (bug fixes)
│ │  └─── Minor (new features, backward compatible)
│ └────── Major (breaking changes)
└──────── Prefix 'v'
```

### Prerelease Tags

- `v1.18.0-alpha.1` - Alpha (early testing)
- `v1.18.0-beta.1` - Beta (feature complete, testing)
- `v1.18.0-rc.1` - Release Candidate (final testing)

## Caching

Release data is cached locally to improve performance.

### Cache Location

`~/.claudekit/cache/releases/`

### Cache TTL

Default: 1 hour (3600 seconds)

### Configure Cache

Set custom TTL via environment variable:

```bash
# Cache for 2 hours
CK_CACHE_TTL=7200 ck versions

# Disable caching (always fetch fresh)
CK_CACHE_TTL=0 ck versions

# Permanent configuration (add to ~/.bashrc or ~/.zshrc)
export CK_CACHE_TTL=1800  # 30 minutes
```

## Platform-Specific Notes

### Windows

- Output encoding: UTF-8 (colors and badges display correctly)
- Cache location: `%USERPROFILE%\.claudekit\cache\`

### macOS

- Colors and badges display correctly in Terminal.app
- Cache location: `~/.claudekit/cache/`

### Linux

- Fully supported on all major distributions
- Cache location: `~/.claudekit/cache/`
- WSL supported

## Next Steps

After browsing versions:

1. **Install specific version:**

```bash
ck new --release v1.16.0
```

2. **Update to specific version:**

```bash
ck init --release v1.17.0
```

3. **Try beta version:**

```bash
ck new --release v1.18.0-beta.1
```

4. **Check for CLI updates:**

```bash
ck update --check
```

## Related Commands

- [`ck new`](/docs/cli/new) - Create project with specific version
- [`ck init`](/docs/cli/init) - Update to specific version
- [`ck update`](/docs/cli/update) - Update CLI itself
- [`ck doctor`](/docs/cli/doctor) - Diagnose version issues
