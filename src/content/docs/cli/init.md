---
title: "ck init"
description: "Initialize or update ClaudeKit in existing projects with smart file merging and customization preservation"
section: cli
order: 4
---

# ck init

> Initialize or update ClaudeKit in existing projects with smart file merging and automatic customization preservation.

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

**Important**: Run `ck init` from your project's root directory.

## What Happens

The `ck init` command:

1. Detects existing ClaudeKit installation (local or global)
2. Prompts for kit and version selection
3. Downloads selected release
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
| `--refresh` | Force cache refresh for releases | `false` |
| `--global` / `-g` | Install to user directory (`~/.claude/`) | `false` (local) |
| `--yes` / `-y` | Non-interactive mode with defaults | `false` |
| `--fresh` | Remove existing `.claude/` before installing | `false` |
| `--exclude <pattern>` | Exclude files matching pattern (repeatable) | None |
| `--only <pattern>` | Only update specific directories (repeatable) | All |
| `--prefix` | Apply `/ck:` namespace to commands | `false` |
| `--install-skills` | Auto-install skill dependencies | `false` |
| `--skip-setup` | Skip API key setup wizard | `false` |
| `--force-overwrite-settings` | Completely overwrite settings.json | `false` |
| `--docs-dir <name>` | Custom docs directory name | `docs` |
| `--plans-dir <name>` | Custom plans directory name | `plans` |
| `--dry-run` | Preview changes without applying | `false` |
| `--force-overwrite` | Overwrite modified files (use with caution) | `false` |
| `--verbose` | Enable detailed logging | `false` |

## Examples

### Update Existing Project

Update your project to latest version:

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
- Custom commands, workflows, and configs
- Skill customizations

Protected files are still preserved:
- `.env`, `.env.local`
- `*.key`, `*.pem`, `*.p12`
- `settings.json`, `CLAUDE.md`

### Selective Update

Only update specific directories:

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

Preview what will change without applying:

```bash
ck init --dry-run
```

Shows:
- Files that will be added
- Files that will be updated
- Files that will be preserved
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

Install to `.claude/` in project directory:

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
- Collaborating with team (commit to git)

### Global Mode

Install to `~/.claude/` (user directory):

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
- Need globally available skills

**Note**: Local installations take precedence over global if both exist.

## Common Patterns

### Update to Latest Beta

Get latest prerelease features:

```bash
ck init --beta
```

### Specific Version

Pin to known stable version:

```bash
ck init --release v1.16.0
```

### Commands-Only Update

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

Automated update in CI pipelines:

```bash
ck init --yes --release v1.16.0 --skip-setup
```

## Customization Preservation

`ck init` intelligently preserves customizations across updates.

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

- **ck-owned**: Original ClaudeKit files, unmodified (can be updated)
- **ck-modified**: ClaudeKit files you've edited (preserved by default)
- **user-created**: Your custom files (always preserved)

### Skill Migration

Automatically migrates when directory structure changes:

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

Customizations in any skills are detected and preserved during migration.

## Troubleshooting

### "Directory does not exist"

**Issue:** Target directory not found.

**Solution:**

Use `ck new` to create new project:

```bash
ck new --kit engineer --dir ./my-project
```

Or create directory first:

```bash
mkdir my-project && cd my-project
ck init
```

### "Local .claude/settings.json detected" (Global Mode)

**Issue:** Local installation exists when trying to install globally.

**Solution:**

Choose one of the prompted options:

1. **Remove local** - Delete `.claude/` and use global
2. **Keep both** - Local installation will take precedence
3. **Cancel** - Abort installation

Or use flag to force:

```bash
# Remove local before global install
rm -rf .claude
ck init --global
```

## Next Steps

After initialization:

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
