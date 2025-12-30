---
title: "ck init"
description: "Initialize or update ClaudeKit in existing projects with smart file merging and customization preservation"
section: cli
order: 4
---

# ck init

> Initialize or update ClaudeKit in an existing project with smart file merging and automatic customization preservation.

## Quick Start

```bash
# Interactive mode (recommended)
ck init

# Non-interactive with sensible defaults
ck init --yes

# Global installation (user-level config)
ck init --global

# Fresh installation (removes all customizations)
ck init --fresh
```

**Important**: Run `ck init` from your project root directory.

## What It Does

The `ck init` command:

1. Detects existing ClaudeKit installation (local or global)
2. Prompts for kit selection and version
3. Downloads the selected release
4. Merges new files while preserving your customizations
5. Migrates skills directory if structure changed
6. Updates installation metadata
7. Optionally installs skill dependencies

## Syntax

```bash
ck init [OPTIONS]
```

### Options

| Flag | Description | Default |
|------|-------------|---------|
| `--kit <name>` | Kit to install (`engineer` or `marketing`) | Interactive prompt |
| `--dir <path>` | Target directory | Current directory |
| `--release <tag>` | Specific release version | Latest stable |
| `--beta` | Include beta versions in selection | `false` |
| `--refresh` | Force refresh release cache | `false` |
| `--global` / `-g` | Install to user directory (`~/.claude/`) | `false` (local) |
| `--yes` / `-y` | Non-interactive mode with defaults | `false` |
| `--fresh` | Remove existing `.claude/` before installing | `false` |
| `--exclude <pattern>` | Exclude files matching pattern (repeatable) | None |
| `--only <pattern>` | Update only specific directories (repeatable) | All |
| `--prefix` | Apply `/ck:` namespace to commands | `false` |
| `--sync` | Sync config files with interactive 3-way merge | `false` |
| `--use-git` | Use git clone instead of GitHub API | `false` |
| `--install-skills` | Auto-install skill dependencies | `false` |
| `--skip-setup` | Skip API key setup wizard | `false` |
| `--force-overwrite-settings` | Overwrite settings.json completely | `false` |
| `--docs-dir <name>` | Custom docs folder name | `docs` |
| `--plans-dir <name>` | Custom plans folder name | `plans` |
| `--dry-run` | Preview changes without applying | `false` |
| `--force-overwrite` | Overwrite modified files (use with caution) | `false` |
| `--verbose` | Enable verbose logging | `false` |

## Examples

### Update Existing Project

Update your project to the latest version:

```bash
cd my-project
ck init
```

**Expected output:**

```
🔧 ClaudeKit - Initialize/Update Project

Selected kit: ClaudeKit Engineer
Target directory: /Users/you/my-project
✓ Repository access verified
✓ Found: v1.17.0

Downloading
████████████████████████████████████████ 100% | 2.5 MB

Scanning for custom .claude files...
✓ Protected 3 custom .claude file(s)

Installing
✓ Files merged successfully
✓ Tracked 245 files

✨ Project initialized successfully
```

### Non-Interactive Mode

Update with defaults (use latest version, skip all prompts):

```bash
ck init --yes
```

**Default behavior with `--yes`:**

| Prompt | Default Value |
|--------|---------------|
| Kit selection | `engineer` (first available) |
| Target directory | `.` (current directory) |
| Version | Latest stable release |
| Gemini setup | Skip |
| Optional features | Skip |

### Global Installation

Install ClaudeKit at user level (`~/.claude/`):

```bash
ck init --global
```

**Platform-specific paths:**

- **macOS/Linux**: `~/.claude/`
- **Windows**: `%USERPROFILE%\.claude\`

Global mode is useful for:
- Sharing configuration across projects
- Using ClaudeKit commands everywhere
- Centralized skill management

### Fresh Installation

Remove all existing ClaudeKit files and reinstall:

```bash
ck init --fresh
```

**Warning**: This permanently deletes:
- `.claude/` directory and all contents
- Custom commands, workflows, and configurations
- Skill customizations

Protected files are still preserved:
- `.env`, `.env.local`
- `*.key`, `*.pem`, `*.p12`
- `settings.json`, `CLAUDE.md`

### Selective Update

Update only specific directories:

```bash
ck init --only commands --only workflows
```

Available directories:
- `commands`
- `agents`
- `skills`
- `workflows`
- `hooks`

### Dry Run

Preview what would be changed without applying:

```bash
ck init --dry-run
```

Shows:
- Files to be added
- Files to be updated
- Files to be preserved
- Ownership status of each file

### Combined Flags

Common combinations:

```bash
# Global + non-interactive
ck init -g -y

# Beta version + skill installation
ck init --beta --install-skills

# Fresh install + specific version
ck init --fresh --release v1.16.0 --yes
```

## Local vs Global Mode

### Local Mode (Default)

Installs to `.claude/` in project directory:

```bash
cd my-project
ck init
```

**Structure:**

```
my-project/
├── .claude/
│   ├── agents/
│   ├── commands/
│   ├── skills/
│   └── ...
└── ...
```

**Use when:**
- Working on a single project
- Need project-specific configuration
- Collaborating with team (committed to git)

### Global Mode

Installs to `~/.claude/` (user directory):

```bash
ck init --global
```

**Structure:**

```
~/.claude/
├── agents/
├── commands/
├── skills/
└── ...
```

**Use when:**
- Using ClaudeKit across multiple projects
- Want centralized configuration
- Need skills available globally

**Note**: Local settings take precedence over global if both exist.

## Common Patterns

### Update to Latest Beta

Get the newest prerelease features:

```bash
ck init --beta
```

### Specific Version

Pin to a known stable version:

```bash
ck init --release v1.16.0
```

### Update Only Commands

Refresh commands while keeping other customizations:

```bash
ck init --only commands
```

### Full Reinstall

Nuclear option - start fresh:

```bash
ck init --fresh --yes --install-skills
```

### CI/CD Update

Automated update in CI pipeline:

```bash
ck init --yes --release v1.16.0 --skip-setup
```

## Customization Preservation

`ck init` intelligently preserves your customizations during updates.

### Protected by Default

Always preserved during updates:

- `.env`, `.env.local`, `.env.*.local`
- `*.key`, `*.pem`, `*.p12`, `*.pfx`
- `settings.json`, `settings.local.json`
- `CLAUDE.md` (in global mode)
- Files in `node_modules/`, `.git/`, `dist/`, `build/`

### Custom File Detection

Automatically detected and preserved:

- Custom slash commands (not in release manifest)
- Personal workflows
- User-created skills
- Modified ClaudeKit files (checksum-based detection)

### Ownership Tracking

Files are tracked with ownership:

- **ck-owned**: Original ClaudeKit files (can be updated)
- **ck-modified**: ClaudeKit files you've edited (preserved by default)
- **user-created**: Your custom files (always preserved)

### Skills Migration

Automatic migration when directory structure changes:

**Example:**

```
Before (flat):
.claude/skills/
  ├── gemini-vision/
  ├── postgresql-psql/
  └── cloudflare-dns/

After (categorized):
.claude/skills/
  ├── ai-multimodal/
  │   └── gemini-vision/
  ├── databases/
  │   └── postgresql-psql/
  └── devops/
      └── cloudflare-dns/
```

Customizations in any skill are detected and preserved during migration.

## Troubleshooting

### "Directory does not exist"

**Problem:** Target directory not found.

**Solution:**

Use `ck new` to create a new project:

```bash
ck new --kit engineer --dir ./my-project
```

Or create directory first:

```bash
mkdir my-project && cd my-project
ck init
```

### "Local .claude/settings.json detected" (Global Mode)

**Problem:** Local installation exists while attempting global install.

**Solution:**

Choose one of the prompted options:

1. **Remove local** - Delete `.claude/` and use global
2. **Keep both** - Local settings will take precedence
3. **Cancel** - Abort installation

Or use flag to force:

```bash
# Remove local before global install
rm -rf .claude
ck init --global
```

### "Merge cancelled by user"

**Problem:** You cancelled the file merge prompt.

**Solution:**

Review changes and re-run:

```bash
ck init --dry-run  # Preview changes
ck init            # Apply if satisfied
```

### "Non-interactive mode requires --release or --yes"

**Problem:** Running in CI/CD without specifying version.

**Solution:**

Use `--yes` for latest version:

```bash
ck init --yes
```

Or specify version explicitly:

```bash
ck init --release v1.16.0
```

## Platform-Specific Notes

### Windows

- Use PowerShell or Windows Terminal
- Global path: `%USERPROFILE%\.claude\`
- Some commands may require admin privileges

### macOS

- Global path: `~/.claude/`
- Uses native `unzip` for better performance
- Requires Xcode Command Line Tools

### Linux

- Global path: `~/.claude/`
- WSL fully supported
- May need sudo for system dependencies

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

### Example

```bash
# Sync with interactive merge
ck init --sync

# Sync specific version
ck init --sync --release v1.17.0

# Sync in global mode
ck init --sync --global
```

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

### When to Use

- GitHub API token issues or rate limits
- Corporate proxy/firewall restrictions
- Prefer SSH authentication
- Working in air-gapped environments

### Example

```bash
# Use git clone with SSH (auto-detected)
ck init --use-git

# Use git clone with specific version
ck init --use-git --release v1.17.0

# Force HTTPS if SSH fails
ck init --use-git
# (CLI will prompt for HTTPS if SSH unavailable)
```

## Settings Merge Behavior

When updating ClaudeKit, the CLI respects your customizations in `.claude/settings.json`.

### User Deletions Respected

If you've deleted a setting key, the CLI won't re-add it during updates unless you use `--force-overwrite-settings`.

**Example:**

If you deleted `model` from settings:

```json
{
  "autoUpdate": true
  // "model" was deleted by user
}
```

After `ck init`, your deletion is preserved:

```json
{
  "autoUpdate": true,
  "newFeature": true
  // "model" still deleted
}
```

### Force Overwrite

To completely replace settings with upstream defaults:

```bash
ck init --force-overwrite-settings
```

**Warning**: This discards all your customizations in `settings.json`.

## Next Steps

After initializing:

1. **Verify installation:**

```bash
ck --version
```

2. **Run health check:**

```bash
ck doctor
```

3. **Review updated files:**

```bash
ls -la .claude/
```

4. **Test a command:**

Open your project in Claude Code and try a slash command like `/plan`.

5. **Install skill dependencies (if not done):**

```bash
ck init --install-skills
```

## Related Commands

- [`ck new`](/docs/cli/new) - Create new project
- [`ck doctor`](/docs/cli/doctor) - Diagnose issues
- [`ck versions`](/docs/cli/versions) - Browse versions
- [`ck uninstall`](/docs/cli/uninstall) - Remove installation
- [Configuration](/docs/cli/configuration) - Configure defaults
