---
title: ck new
description: Create new ClaudeKit project by downloading the latest release from GitHub
category: cli
order: 2
published: true
---

# ck new

Create a new ClaudeKit project by downloading the latest or specific version from private GitHub releases.

## Synopsis

```bash
ck new [options]
```

## Description

The `ck new` command downloads a ClaudeKit starter kit from private GitHub releases and sets it up in your local directory. This command:

- Downloads the specified ClaudeKit release (latest by default)
- Extracts files to your target directory
- Preserves your existing files (if updating)
- Installs dependencies (npm install)
- Ready to use immediately

**Important:** You must purchase a ClaudeKit starter kit from [ClaudeKit.cc](https://claudekit.cc) to access the private repositories and use this command.

## Options

### --dir <directory>

Target directory for the new project.

```bash
ck new --dir my-project
```

**Default:** Current directory (`.`)

**Examples:**
```bash
ck new --dir ./my-app
ck new --dir ../projects/new-app
ck new --dir ~/projects/my-app
```

### --kit <kit-name>

Specify which ClaudeKit to download.

```bash
ck new --kit engineer
```

**Available kits:**
- `engineer` - ClaudeKit Engineer (14 specialized agents)
- `marketing` - ClaudeKit Marketing [Coming Soon]

**Default:** Interactive prompt if not specified

### --version <version>

Download a specific version instead of latest.

```bash
ck new --kit engineer --version v1.0.0
```

**Version format:** `v1.0.0` or `1.0.0`

**Examples:**
```bash
ck new --kit engineer --version v1.2.0
ck new --kit engineer --version 1.2.0  # Also works
```

To see available versions, run:
```bash
ck versions --kit engineer
```

### --verbose, -v

Enable verbose logging for debugging.

```bash
ck new --verbose
ck new -v
```

**Output includes:**
- HTTP request/response details (tokens sanitized)
- File operations (downloads, extractions, copies)
- Command execution steps and timing
- Error stack traces with full context
- Authentication flow details

### --log-file <file>

Write logs to a file for sharing or debugging.

```bash
ck new --verbose --log-file debug.log
```

**Note:** All sensitive data (tokens, credentials) is automatically sanitized in logs.

## Interactive Mode

When you run `ck new` without options, you'll be prompted:

```bash
ck new
```

**Prompts:**

```
? Select a ClaudeKit to download:
❯ engineer - ClaudeKit Engineer (14 specialized agents)
  marketing - ClaudeKit Marketing [Coming Soon]

? Enter target directory (default: current directory):
> my-project

? Select version:
❯ latest (v1.2.1)
  v1.2.0
  v1.1.9
  [... more versions]

Downloading ClaudeKit Engineer v1.2.1...
✓ Downloaded (5.2 MB)
✓ Extracted to my-project
✓ Installing dependencies...
✓ Complete!

Next steps:
  cd my-project
  claude  # Start Claude Code
```

## What Gets Downloaded

When you run `ck new`, the CLI downloads and extracts:

### ClaudeKit Configuration

```
.claude/
├── config.json           # Project configuration
├── commands/             # 38+ slash commands
│   ├── plan.md
│   ├── cook.md
│   ├── fix-fast.md
│   └── ... (35 more)
├── skills/              # Custom skills
└── workflows/           # Agent workflows
    ├── development-rules.md
    ├── documentation-management.md
    ├── orchestration-protocol.md
    └── primary-workflow.md
```

### Documentation Structure

```
docs/
├── project-overview-pdr.md
├── code-standards.md
├── codebase-summary.md
├── system-architecture.md
└── deployment-guide.md
```

### Plans Directory

```
plans/
└── README.md           # Planning documentation
```

### Project Files

```
.gitignore             # Sensible defaults
README.md              # Getting started guide
package.json           # (if applicable)
```

## Examples

### Create in Current Directory

```bash
ck new --kit engineer
```

Downloads ClaudeKit Engineer to current directory.

### Create in New Directory

```bash
ck new --dir my-app --kit engineer
```

Creates `my-app/` directory and downloads ClaudeKit Engineer.

### Download Specific Version

```bash
ck new --kit engineer --version v1.0.0
```

Downloads version 1.0.0 instead of latest.

### Check Available Versions First

```bash
# List all versions
ck versions --kit engineer

# Then download specific version
ck new --kit engineer --version v1.1.9
```

### Debug Download Issues

```bash
ck new --kit engineer --verbose --log-file debug.log
```

Creates detailed log file for troubleshooting.

## After Installation

Once the download completes:

### 1. Navigate to Project

```bash
cd my-project
```

### 2. Start Claude Code

```bash
claude
```

This starts Claude Code with full ClaudeKit capabilities.

### 3. Explore Commands

```bash
/help      # List all commands
/plan      # Plan a feature
/cook      # Implement code
/test      # Run tests
/docs:init # Generate documentation
```

### 4. Read Documentation

```bash
cat README.md
cat docs/project-overview-pdr.md
```

## Common Workflows

### Quick Start

```bash
# Download and start
ck new --kit engineer --dir my-app
cd my-app
claude

# Inside Claude Code
/docs:init  # Generate initial docs
/plan [your first feature]
/cook [implement feature]
```

### Specific Version

```bash
# Check available versions
ck versions --kit engineer

# Download specific version
ck new --kit engineer --version v1.1.0 --dir my-app
cd my-app
claude
```

### Debug Mode

```bash
# Download with verbose logging
ck new --kit engineer --verbose --log-file setup.log

# Check log if issues occur
cat setup.log
```

## File Conflicts

If the target directory already has files:

**Safe files (never overwritten):**
- `.env`, `.env.local`, `.env.*.local`
- `*.key`, `*.pem`, `*.p12`
- `node_modules/**`
- `.git/**`
- `dist/**`, `build/**`

**ClaudeKit files (updated):**
- `.claude/config.json`
- `.claude/commands/*.md` (standard commands)
- `.claude/workflows/*.md`

**Custom .claude files (preserved):**
- `.claude/commands/my-custom.md`
- Any custom commands or configurations you created

**Example:**
```
Before:
  .claude/
    ├── commands/plan.md       (v1.0.0)
    └── commands/my-custom.md  (yours)

After ck new:
  .claude/
    ├── commands/plan.md       (v1.2.1 - updated)
    └── commands/my-custom.md  (yours - preserved)
```

## Protected Files

These files are **never overwritten** during `ck new` or `ck update`:

**Environment & Secrets:**
- `.env`, `.env.local`, `.env.*.local`
- `*.key`, `*.pem`, `*.p12`
- `credentials.json`

**Dependencies:**
- `node_modules/**`
- `package-lock.json` (if you have custom dependencies)

**Version Control:**
- `.git/**`

**Build Outputs:**
- `dist/**`, `build/**`, `out/**`

## Troubleshooting

### Authentication Error

**Problem:**
```
Error: Authentication failed
Unable to access repository
```

**Solutions:**

1. Check GitHub authentication:
   ```bash
   gh auth status
   ```

2. Set environment variable:
   ```bash
   export GITHUB_TOKEN=ghp_your_token
   ```

3. Verify repository access (requires ClaudeKit purchase)

See [Authentication Guide](/docs/cli/installation#github-authentication)

### Directory Already Exists

**Problem:**
```
Error: Directory 'my-project' already exists
```

**Solutions:**

1. Use different directory:
   ```bash
   ck new --dir my-project-v2
   ```

2. Update existing project instead:
   ```bash
   cd my-project
   ck update
   ```

3. Remove and recreate (careful!):
   ```bash
   rm -rf my-project
   ck new --dir my-project
   ```

### Download Failed

**Problem:**
```
Error: Failed to download release
```

**Solutions:**

1. Check internet connection

2. Verify authentication:
   ```bash
   gh auth status
   ```

3. Try with verbose logging:
   ```bash
   ck new --kit engineer --verbose
   ```

4. Check GitHub status:
   - Visit [githubstatus.com](https://www.githubstatus.com)

### Version Not Found

**Problem:**
```
Error: Version 'v1.5.0' not found
```

**Solutions:**

1. List available versions:
   ```bash
   ck versions --kit engineer
   ```

2. Use latest version:
   ```bash
   ck new --kit engineer  # No --version flag
   ```

### Permission Denied

**Problem:**
```
Error: EACCES: permission denied
```

**Solutions:**

1. Create in home directory:
   ```bash
   cd ~
   ck new --dir my-app
   ```

2. Check directory permissions:
   ```bash
   ls -la
   # Use directory you own
   ```

## Best Practices

**Directory naming:**
- Use lowercase with hyphens: `my-project-name`
- Be descriptive: `task-manager-api` not `project1`
- Match repository name for clarity

**Version management:**
- Use `ck versions` to check available versions
- Specify version for reproducibility in teams
- Document which version you're using in README

**After download:**
- Review README.md
- Read docs/project-overview-pdr.md
- Explore .claude/commands/
- Run `/docs:init` for codebase docs

**Team setup:**
- Document version in package.json or README
- Share authentication setup instructions
- Use same version across team for consistency

## Related Commands

- [`ck update`](/docs/cli/) - Update existing project to latest version
- [`ck versions`](/docs/cli/) - List available ClaudeKit releases
- [`/docs:init`](/docs/commands/docs/init) - Generate project documentation

## Next Steps

After creating your project:

1. **Explore the kit** - Review `.claude/commands/` and workflows
2. **Generate docs** - Run `/docs:init` to document your codebase
3. **Plan a feature** - Use `/plan [description]` to create implementation plans
4. **Start coding** - Use `/cook [task]` to implement features

---

**Ready to create?** Run `ck new --kit engineer` to get started.
