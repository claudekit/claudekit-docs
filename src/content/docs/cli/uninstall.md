---
title: "ck uninstall"
description: "Remove ClaudeKit installations with ownership-aware file management and customization preservation"
section: cli
order: 8
---

# ck uninstall

> Remove ClaudeKit installations from your system with intelligent customization preservation and ownership-aware file management.

## Quick Start

```bash
# Interactive mode (prompts for scope and confirmation)
ck uninstall

# Uninstall local installation only
ck uninstall --local

# Uninstall global installation only
ck uninstall --global

# Uninstall both without confirmation
ck uninstall --yes

# Preview what would be removed
ck uninstall --dry-run
```

## What It Does

The `ck uninstall` command:

1. Detects ClaudeKit installations (local `.claude/` and/or global `~/.claude/`)
2. Prompts you to choose scope (local, global, or both)
3. Analyzes files using ownership tracking
4. Shows preview of files to delete and preserve
5. Removes ClaudeKit-owned files
6. Preserves user customizations and configurations
7. Cleans up empty directories

## Syntax

```bash
ck uninstall [OPTIONS]
```

### Options

| Flag | Description | Default |
|------|-------------|---------|
| `--local` / `-l` | Uninstall only local installation (`.claude/`) | Prompt |
| `--global` / `-g` | Uninstall only global installation (`~/.claude/`) | Prompt |
| `--all` | Uninstall both local and global | Prompt |
| `--yes` / `-y` | Skip confirmation prompt | `false` |
| `--kit <name>` | Uninstall specific kit only (multi-kit installations) | All kits |
| `--dry-run` | Preview changes without removing files | `false` |
| `--force-overwrite` | Delete modified files (use with caution) | `false` |
| `--verbose` | Enable verbose logging | `false` |

## Installation Scopes

### Local Installation

Located in project's `.claude/` directory:

```
my-project/
└── .claude/
    ├── agents/
    ├── commands/
    ├── skills/
    └── ...
```

**When to uninstall:**
- Removing ClaudeKit from specific project
- Switching to global installation
- Project no longer needs ClaudeKit

### Global Installation

Located in user's home directory:

**macOS/Linux:** `~/.claude/`
**Windows:** `%USERPROFILE%\.claude\`

**When to uninstall:**
- No longer using ClaudeKit
- Switching to local-only installations
- Clean reinstall needed

### Multi-Kit Installations

If multiple kits are installed (Engineer + Marketing), you can:

- Uninstall specific kit: `ck uninstall --kit engineer`
- Uninstall all kits: `ck uninstall`

## Examples

### Interactive Uninstall

Let the CLI guide you through the process:

```bash
ck uninstall
```

**Example output:**

```
ClaudeKit Uninstaller

Detected ClaudeKit installations (both)
  Local : /Users/you/my-project/.claude
  Global: /Users/you/.claude

[!] This will permanently delete ClaudeKit files from the above paths.

Which installation(s) do you want to uninstall?
> Local only
  Global only
  Both

Local only selected

Continue with uninstalling local ClaudeKit installation? (y/n) y

Removing local ClaudeKit files...
✓ Removed 245 files, cleaned 15 empty directories, preserved 8 customizations

Preserved customizations:
  - .env (user-created)
  - commands/custom-cmd/ (user-created)
  - workflows/my-workflow.md (modified by user)
  ...

ClaudeKit uninstalled successfully!
```

### Local Installation Only

Remove ClaudeKit from current project:

```bash
ck uninstall --local
```

Equivalent short form:

```bash
ck uninstall -l
```

### Global Installation Only

Remove ClaudeKit from user directory:

```bash
ck uninstall --global
```

Equivalent short form:

```bash
ck uninstall -g
```

### Non-Interactive Uninstall

Skip all prompts (useful for scripts):

```bash
# Local only, no confirmation
ck uninstall --local --yes

# Global only, no confirmation
ck uninstall --global --yes

# Both, no confirmation
ck uninstall --yes
```

### Dry Run

Preview what would be removed without actually deleting:

```bash
ck uninstall --dry-run
```

**Example output:**

```
DRY RUN MODE - No files will be deleted

DRY RUN - Preview for local installation:

Files to DELETE (245):
  ✖ agents/planner/
  ✖ commands/plan/
  ✖ skills/ai-multimodal/
  ...
  ... and 235 more

Files to PRESERVE (8):
  ✓ .env (user-created)
  ✓ commands/custom-cmd/ (user-created)
  ✓ workflows/my-workflow.md (modified by user)
  ...

Dry-run complete. No changes were made.
```

### Uninstall Specific Kit

For multi-kit installations, remove one kit while keeping others:

```bash
ck uninstall --kit engineer
```

**Example output:**

```
Kit-scoped uninstall: engineer kit only

Removing local engineer kit files...
✓ Removed 150 files, marketing kit preserved

Remaining kits after uninstall: marketing
```

### Force Overwrite Modified Files

Delete even files you've modified (use with caution):

```bash
ck uninstall --force-overwrite --yes
```

**Warning:** This permanently deletes your customizations. Use only when:
- You want a completely clean slate
- Customizations are backed up elsewhere
- Starting fresh installation

## File Ownership and Preservation

The CLI uses ownership tracking to intelligently preserve your work.

### Ownership Categories

| Ownership | Description | Default Action |
|-----------|-------------|----------------|
| **ck-owned** | Original ClaudeKit files, unmodified | DELETE |
| **ck-modified** | ClaudeKit files you've edited | PRESERVE |
| **user-created** | Files you created | PRESERVE |

### Always Preserved

Regardless of ownership:

- `.env`, `.env.local`, `.env.*.local`
- `*.key`, `*.pem`, `*.p12`, `*.pfx`
- `settings.json`, `settings.local.json`
- `CLAUDE.md` (in global mode)
- Files in `node_modules/`, `.git/`, `dist/`, `build/`

### Customization Detection

The CLI detects customizations via:

1. **Manifest comparison** - Files not in release manifest are user-created
2. **Checksum verification** - Modified files detected via SHA-256 hash
3. **Pattern matching** - Known user config files preserved

## Common Patterns

### Clean Project Uninstall

Remove ClaudeKit from project while keeping configs:

```bash
cd my-project
ck uninstall --local
```

Preserves:
- `.env` files
- Custom commands
- Modified workflows

### Complete Removal

Remove all ClaudeKit installations system-wide:

```bash
ck uninstall --yes
```

When prompted, select "Both" to remove local and global.

### Safe Uninstall with Preview

Check what will be removed before confirming:

```bash
ck uninstall --dry-run
ck uninstall  # Proceed if satisfied
```

### Switch from Local to Global

```bash
# Remove local installation
cd my-project
ck uninstall --local --yes

# Install globally
ck init --global
```

### Switch from Global to Local

```bash
# Remove global installation
ck uninstall --global --yes

# Install locally
cd my-project
ck init
```

## Troubleshooting

### "No ClaudeKit installations found"

**Cause:** No valid ClaudeKit installations detected.

**Explanation:**

The CLI only uninstalls directories that:
- Contain `metadata.json` (ClaudeKit installation marker)
- Are valid ClaudeKit installations

Regular `.claude` directories from Claude Desktop are NOT affected.

**Solution:**

If you believe ClaudeKit is installed:

```bash
# Check for metadata
cat .claude/metadata.json
cat ~/.claude/metadata.json

# Run doctor to diagnose
ck doctor
```

### "Kit engineer is not installed"

**Cause:** Specified kit not found in installation.

**Solution:**

```bash
# Check installed kits
ck doctor

# Uninstall all kits
ck uninstall  # Don't use --kit flag
```

### Files Still Exist After Uninstall

**Expected:** User customizations are intentionally preserved.

**To view what was preserved:**

```bash
ck uninstall --dry-run
```

**To force complete deletion:**

```bash
# WARNING: Deletes ALL customizations
ck uninstall --force-overwrite --yes
```

Or manually:

```bash
rm -rf .claude/  # Local
rm -rf ~/.claude/  # Global
```

### Permission Denied

**Symptoms:**

```
Failed to remove files from /path: EACCES: permission denied
```

**Solutions:**

**Linux/macOS:**

```bash
sudo ck uninstall
```

**Windows:**

Run PowerShell as Administrator, then:

```powershell
ck uninstall
```

## What Gets Removed

After uninstalling, ClaudeKit-owned files are deleted:

### Deleted

- `agents/` directory (ClaudeKit-owned agents)
- `commands/` directory (ClaudeKit-owned commands)
- `skills/` directory (ClaudeKit-owned skills)
- `workflows/` directory (ClaudeKit-owned workflows)
- `hooks/` directory
- `metadata.json`
- Empty parent directories

### Preserved

- `.env` files
- Custom commands (not in manifest)
- Modified workflows
- User-created skills
- `settings.json`, `CLAUDE.md`

## Reinstallation

To reinstall ClaudeKit after uninstalling:

### Fresh Install

```bash
ck init --fresh
```

Or for new projects:

```bash
ck new --kit engineer
```

### With Preserved Customizations

After uninstall (which preserves customizations), simply:

```bash
ck init
```

Your preserved files will be merged with new installation.

## Platform-Specific Notes

### Windows

- Global path: `%USERPROFILE%\.claude\`
- Use PowerShell or Windows Terminal
- May require administrator privileges

### macOS

- Global path: `~/.claude/`
- Preserved files shown in Finder
- Uses native file operations

### Linux

- Global path: `~/.claude/`
- WSL fully supported
- May need sudo for system directories

## Alternative: Manual Removal

If CLI uninstall fails, manually remove:

### Local Installation

```bash
rm -rf .claude/
```

### Global Installation

```bash
# macOS/Linux
rm -rf ~/.claude/

# Windows (PowerShell)
Remove-Item -Recurse -Force $env:USERPROFILE\.claude
```

**Warning:** Manual removal bypasses ownership tracking and deletes everything, including customizations.

## Next Steps

After uninstalling:

1. **Reinstall if needed:**

```bash
ck init
```

2. **Install different kit:**

```bash
ck new --kit marketing
```

3. **Uninstall CLI itself:**

```bash
npm uninstall -g claudekit-cli
```

## Related Commands

- [`ck init`](/docs/cli/init) - Reinstall ClaudeKit
- [`ck new`](/docs/cli/new) - Create fresh project
- [`ck doctor`](/docs/cli/doctor) - Diagnose installation
- [Installation](/docs/cli/installation) - Setup guide
