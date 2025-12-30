---
title: "ck new"
description: "Create a new ClaudeKit project with interactive prompts and customizable options"
section: cli
order: 3
---

# ck new

> Create a new ClaudeKit project from scratch with interactive prompts and automatic setup.

## Quick Start

```bash
# Interactive mode (recommended for beginners)
ck new

# Specify kit and directory
ck new --kit engineer --dir my-project

# With beta versions and skill dependencies
ck new --beta --install-skills
```

## What It Does

The `ck new` command:

1. Prompts you to select a ClaudeKit kit (Engineer or Marketing)
2. Let you choose a target directory for the project
3. Fetches the latest (or selected) release from GitHub
4. Downloads and extracts project files
5. Optionally installs skill dependencies
6. Creates a ready-to-use ClaudeKit project

## Syntax

```bash
ck new [OPTIONS]
```

### Options

| Flag | Description | Default |
|------|-------------|---------|
| `--kit <name>` | Kit to install (`engineer` or `marketing`) | Interactive prompt |
| `--dir <path>` | Target directory for project | Interactive prompt |
| `--release <tag>` | Specific release version to install | Latest stable |
| `--beta` | Include beta/prerelease versions in selection | `false` |
| `--refresh` | Force refresh release cache | `false` |
| `--force` | Overwrite files in non-empty directory | `false` |
| `--exclude <pattern>` | Exclude files matching glob pattern (repeatable) | None |
| `--prefix` | Move commands to `/ck:` namespace | `false` |
| `--opencode` | Install OpenCode package globally | `false` |
| `--gemini` | Install Gemini CLI and set up MCP integration | `false` |
| `--install-skills` | Auto-install skill dependencies | `false` |
| `--docs-dir <name>` | Custom name for docs folder | `docs` |
| `--plans-dir <name>` | Custom name for plans folder | `plans` |
| `--verbose` | Enable verbose logging | `false` |
| `--log-file <path>` | Save logs to file | None |

## Examples

### Basic Project Creation

Create a new Engineer kit project in the current directory:

```bash
ck new --kit engineer
```

**Expected output:**

```
🚀 ClaudeKit - Create New Project

Selected kit: ClaudeKit Engineer
Target directory: /Users/you/my-project
✓ Repository access verified
✓ Found: v1.16.0

Downloading
████████████████████████████████████████ 100% | 2.5 MB

Installing
✓ Files merged successfully

✨ Project created successfully at /Users/you/my-project
```

### Specific Directory

Create project in a custom directory:

```bash
ck new --kit engineer --dir ~/projects/my-awesome-app
```

### Include Beta Versions

Show and select from beta/prerelease versions:

```bash
ck new --beta
```

This includes versions tagged as prereleases in the version selection menu.

### Install with Dependencies

Create project and auto-install all skill dependencies:

```bash
ck new --kit engineer --install-skills
```

This installs:
- Python packages (defined in skill requirements.txt files)
- System tools (FFmpeg, ImageMagick via package managers)
- Node.js packages (skill dependencies)

### Non-Interactive Mode

For CI/CD or scripting (requires all necessary flags):

```bash
ck new --kit engineer --dir ./my-project --release v1.16.0 --force
```

**Note**: Without `--release`, non-interactive mode will fail. Interactive version selection requires a TTY.

### Exclude Files

Skip specific files or patterns during installation:

```bash
ck new --exclude "*.log" --exclude "temp/**" --exclude "node_modules/**"
```

**Glob patterns supported:**
- `*` - Any characters
- `**` - Recursive directories
- `?` - Single character
- `[abc]` - Character set
- `{a,b}` - Alternatives

### Command Prefix

Move ClaudeKit commands to `/ck:` namespace to avoid conflicts:

```bash
ck new --prefix
```

This transforms:
- `/plan` → `/ck:plan`
- `/review` → `/ck:review`
- `/debug` → `/ck:debug`

Useful when you have custom commands that conflict with ClaudeKit defaults.

### Custom Folder Names

Use custom names for docs and plans directories:

```bash
ck new --docs-dir documentation --plans-dir planning
```

This creates:
- `documentation/` instead of `docs/`
- `planning/` instead of `plans/`

And updates all references in workflow files automatically.

## Common Patterns

### Full-Featured Setup

Create a complete project with all features:

```bash
ck new \
  --kit engineer \
  --dir ~/projects/new-app \
  --install-skills \
  --gemini \
  --prefix
```

### Beta Testing

Try the latest prerelease features:

```bash
ck new --beta --kit engineer
```

### Quick Prototype

Minimal setup for quick testing:

```bash
ck new --kit engineer --dir ./test-project
```

### Production Setup

Stable version with skill dependencies for production:

```bash
ck new \
  --kit engineer \
  --release v1.16.0 \
  --install-skills \
  --dir ~/production-app
```

## Troubleshooting

### "Directory is not empty"

**Problem:** Target directory contains files.

**Solution:**

Use `--force` to overwrite (interactive mode will prompt):

```bash
ck new --force --dir ./existing-project
```

Or choose a different directory:

```bash
ck new --dir ./new-project
```

### "Access denied to repository"

**Problem:** GitHub authentication failed or repository access not granted.

**Solution:**

1. Run health check:

```bash
ck doctor
```

2. Re-authenticate:

```bash
gh auth login
```

Select "Login with a web browser" option.

3. Accept repository invitation (check email)
4. Wait 2-5 minutes for permissions to propagate

### "Interactive version selection unavailable in non-interactive mode"

**Problem:** Running in CI/CD without TTY and no `--release` flag.

**Solution:**

Specify version explicitly:

```bash
ck new --kit engineer --release v1.16.0
```

Or set `CI=false` to enable interactive mode (if TTY available).

### Platform-Specific Issues

**Windows:**

- Use PowerShell or Windows Terminal
- Paths with spaces: Use quotes `--dir "C:\My Projects\app"`
- Some antivirus software may flag downloads (whitelist `ck` command)

**macOS:**

- Requires Xcode Command Line Tools for git
- Use Homebrew for system dependencies: `brew install gh`

**Linux:**

- Package manager varies by distro (apt, yum, pacman)
- May need sudo for global npm installs
- WSL fully supported

## What Gets Created

After `ck new` completes successfully, your project structure looks like:

```
my-project/
├── .claude/
│   ├── agents/           # AI agent definitions
│   ├── commands/         # Slash commands
│   ├── skills/           # Reusable skills
│   ├── workflows/        # Workflow definitions
│   ├── hooks/            # Lifecycle hooks
│   ├── settings.json     # Project settings
│   └── metadata.json     # Installation metadata
├── docs/                 # Documentation
├── plans/                # Planning directory
├── CLAUDE.md             # Claude Code instructions
├── .env.example          # Environment variables template
└── README.md             # Project readme
```

## Next Steps

After creating a project:

1. **Navigate to project:**

```bash
cd my-project
```

2. **Review configuration:**

```bash
cat .claude/settings.json
```

3. **Set up environment variables:**

```bash
cp .env.example .env
# Edit .env with your API keys
```

4. **Start coding with Claude Code** - Open project in Claude Code and start using commands

5. **Update later:**

```bash
ck init  # Update to latest version
```

## Related Commands

- [`ck init`](/docs/cli/init) - Update existing project
- [`ck versions`](/docs/cli/versions) - Browse available versions
- [`ck doctor`](/docs/cli/doctor) - Troubleshoot issues
- [Configuration](/docs/cli/configuration) - Customize defaults
