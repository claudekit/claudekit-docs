# Codebase Summary

**Last Updated**: 2025-10-26
**Version**: 1.8.0
**Repository**: [claudekit/claudekit-engineer](https://github.com/claudekit/claudekit-engineer)

## Overview

ClaudeKit Engineer is a comprehensive boilerplate template for building professional software projects with CLI Coding Agents (Claude Code and Open Code). It provides a complete development environment with AI-powered agent orchestration, automated workflows, and intelligent project management.

## Project Structure

```
claudekit-engineer/
├── .claude/               # Claude Code configuration
│   ├── agents/           # Specialized agent definitions (14 agents)
│   ├── commands/         # Slash command implementations (50+ commands)
│   ├── hooks/            # Git hooks and scripts
│   ├── skills/           # Specialized skills library (20+ skills)
│   └── workflows/        # Development workflow definitions
├── .opencode/            # Open Code CLI configuration
│   ├── agent/           # Agent definitions for OpenCode (13 agents)
│   └── command/         # Command definitions for OpenCode
├── .github/             # GitHub Actions workflows
│   └── workflows/       # CI/CD automation
├── docs/                # Project documentation
│   └── research/        # Research reports directory
├── guide/               # User guides and references
├── plans/               # Implementation plans and reports
│   ├── reports/         # Agent-to-agent communication
│   └── templates/       # Plan templates
├── CLAUDE.md           # Project-specific Claude instructions
├── README.md           # Project overview
├── package.json        # Node.js dependencies
└── repomix-output.xml  # Codebase compaction file
```

## Core Technologies

### Runtime & Dependencies
- **Node.js**: >=18.0.0
- **Package Manager**: npm
- **License**: MIT

### Development Tools
- **Semantic Release**: Automated versioning and changelog
- **Commitlint**: Conventional commit enforcement
- **Husky**: Git hooks automation
- **Repomix**: Codebase compaction for AI consumption

### CI/CD
- **GitHub Actions**: Automated release workflow
- **Semantic Versioning**: Automated version management
- **Conventional Commits**: Structured commit messages

## Key Components

### 1. Agent Orchestration System

**Claude Code Agents** (`.claude/agents/`):
- `planner.md` - Technical planning and architecture
- `researcher.md` - Research and analysis
- `tester.md` - Testing and validation
- `debugger.md` - Issue analysis and debugging
- `code-reviewer.md` - Code quality assessment
- `docs-manager.md` - Documentation management
- `git-manager.md` - Version control operations
- `project-manager.md` - Project tracking and oversight
- `database-admin.md` - Database operations
- `ui-ux-designer.md` - UI/UX design
- `copywriter.md` - Content creation
- `scout.md` - Codebase exploration
- `journal-writer.md` - Development journaling
- `brainstormer.md` - Solution ideation

**OpenCode Agents** (`.opencode/agent/`):
- Similar agent definitions optimized for OpenCode CLI
- `planner-researcher.md` - Combined planning and research
- `solution-brainstormer.md` - Advanced brainstorming
- `system-architecture.md` - Architecture documentation

### 2. Slash Commands System

**Categories**:
- **Core Development**: `/plan`, `/cook`, `/ask`, `/bootstrap`, `/brainstorm`, `/test`
- **Debugging**: `/debug`, `/fix:fast`, `/fix:hard`, `/fix:ci`, `/fix:logs`, `/fix:test`, `/fix:types`, `/fix:ui`
- **Design**: `/design:fast`, `/design:good`, `/design:3d`, `/design:screenshot`, `/design:video`
- **Documentation**: `/docs:init`, `/docs:update`, `/docs:summarize`
- **Git Operations**: `/git:cm`, `/git:cp`, `/git:pr`
- **Planning**: `/plan:two`, `/plan:ci`, `/plan:cro`
- **Content**: `/content:fast`, `/content:good`, `/content:enhance`, `/content:cro`
- **Integration**: `/integrate:polar`, `/integrate:sepay`
- **Utility**: `/watzup`, `/journal`, `/scout`

### 3. Skills Library

**Skill Categories** (`.claude/skills/`):
- **Authentication**: `better-auth/`
- **Cloud Platforms**: `cloudflare/`, `gcloud/`, `cloudflare-workers/`, `cloudflare-r2/`
- **Databases**: `mongodb/`, `postgresql-psql/`
- **Design**: `canvas-design/`
- **Debugging**: `systematic-debugging/`, `root-cause-tracing/`, `defense-in-depth/`
- **Documentation**: `docs-seeker/`, `repomix/`
- **Document Processing**: `document-skills/` (docx, pdf, pptx, xlsx)
- **Frameworks**: `nextjs/`, `shadcn-ui/`, `tailwindcss/`, `turborepo/`
- **Media**: `ffmpeg/`, `imagemagick/`
- **MCP**: `mcp-builder/`
- **Problem Solving**: `collision-zone-thinking/`, `meta-pattern-recognition/`, `scale-game/`
- **Ecommerce**: `shopify/`
- **Infrastructure**: `docker/`
- **Icons**: `remix-icon/`
- **Development**: `claude-code/`, `skill-creator/`

### 4. Workflows

**Primary Workflows** (`.claude/workflows/`):
1. **primary-workflow.md**: Core development cycle
   - Code implementation
   - Testing
   - Code quality
   - Integration
   - Debugging

2. **orchestration-protocol.md**: Agent coordination patterns
   - Sequential chaining
   - Parallel execution

3. **development-rules.md**: Development standards
   - File size management (<500 lines)
   - YANGI, KISS, DRY principles
   - Code quality guidelines
   - Pre-commit/push rules

4. **documentation-management.md**: Doc maintenance
   - Roadmap and changelog updates
   - Automatic update triggers
   - Documentation protocols

## Entry Points

### For Users
- **README.md**: Project overview and quick start
- **guide/COMMANDS.md**: Comprehensive command reference (7,073 tokens)
- **CLAUDE.md**: Development instructions and workflows

### For Developers
- **package.json**: Dependencies and scripts
- **.releaserc.json**: Semantic release configuration
- **.commitlintrc.json**: Commit message linting rules
- **.gitignore**: Version control exclusions

### For Agents
- **CLAUDE.md**: Primary agent instructions
- **.claude/workflows/**: Workflow definitions
- **plans/templates/**: Implementation plan templates

## Development Principles

### YANGI (You Aren't Gonna Need It)
Avoid over-engineering and unnecessary features

### KISS (Keep It Simple, Stupid)
Prefer simple, straightforward solutions

### DRY (Don't Repeat Yourself)
Eliminate code duplication

### File Size Management
- Keep files under 500 lines
- Split large files into focused components
- Extract utilities into separate modules

### Security First
- Try-catch error handling
- Security standards coverage
- No secrets in commits
- Confidential info protection

## Agent Communication Protocol

**Report Format**: Markdown files in `./plans/reports/`
**Naming Convention**: `YYMMDD-from-[agent]-to-[agent]-[task]-report.md`

**Communication Patterns**:
- Sequential: Task dependencies require ordered execution
- Parallel: Independent tasks run simultaneously
- Query Fan-Out: Multiple researchers explore different approaches

## Git Workflow

**Commit Message Format**: Conventional Commits
```
type(scope): description

Types:
- feat: Features (minor bump)
- fix: Bug fixes (patch bump)
- docs: Documentation (patch bump)
- refactor: Code refactoring (patch bump)
- test: Tests (patch bump)
- ci: CI changes (patch bump)
- BREAKING CHANGE: Major version bump
```

**Automated Release**:
- Every push to `main` triggers release check
- Semantic versioning (MAJOR.MINOR.PATCH)
- Automated changelog generation
- GitHub releases with generated notes

## Testing Strategy

- Comprehensive unit tests required
- High code coverage mandatory
- Error scenario testing
- Performance validation
- Tests must pass before push
- No ignoring failed tests

## Documentation Standards

**Required Docs** (`./docs/`):
- `project-overview-pdr.md` - Project overview and PDR
- `code-standards.md` - Coding standards and structure
- `codebase-summary.md` - This file
- `system-architecture.md` - Architecture documentation
- `project-roadmap.md` - Development roadmap
- `project-changelog.md` - Detailed changelog

**Documentation Triggers**:
- Feature implementation completion
- Major milestone achievements
- Bug fixes
- Security updates
- Weekly reviews

## Dependencies Overview

### Production Dependencies
None (template project)

### Development Dependencies
- **@commitlint/cli**: ^18.4.3
- **@commitlint/config-conventional**: ^18.4.3
- **@semantic-release/changelog**: ^6.0.3
- **@semantic-release/commit-analyzer**: ^11.1.0
- **@semantic-release/git**: ^10.0.1
- **@semantic-release/github**: ^9.2.6
- **@semantic-release/npm**: ^11.0.2
- **@semantic-release/release-notes-generator**: ^12.1.0
- **conventional-changelog-conventionalcommits**: ^7.0.2
- **husky**: ^8.0.3
- **semantic-release**: ^22.0.12

## File Statistics

**Total Files**: 48 files (in repomix output)
**Total Tokens**: 38,868 tokens
**Total Characters**: 173,077 chars

**Top 5 Files by Token Count**:
1. `guide/COMMANDS.md` - 7,073 tokens (18.2%)
2. `CHANGELOG.md` - 4,836 tokens (12.4%)
3. `README.md` - 3,261 tokens (8.4%)
4. `.opencode/agent/ui-ux-designer.md` - 2,521 tokens (6.5%)
5. `.opencode/agent/system-architecture.md` - 1,714 tokens (4.4%)

## Integration Capabilities

### Discord Notifications
Script: `.claude/hooks/send-discord.sh`
Purpose: Send project updates to Discord channels

### GitHub Actions
Workflow: `.github/workflows/release.yml`
Features: Automated releases, changelog generation

### MCP Tools
- **context7**: Documentation reading
- **sequential-thinking**: Structured problem solving
- **SearchAPI**: Google and YouTube search
- **review-website**: Web content extraction
- **VidCap**: Video transcript extraction

## Critical Files

### Configuration
- `/mnt/d/www/claudekit/claudekit-engineer/package.json` - Node.js config
- `/mnt/d/www/claudekit/claudekit-engineer/.releaserc.json` - Release config
- `/mnt/d/www/claudekit/claudekit-engineer/.commitlintrc.json` - Commit linting
- `/mnt/d/www/claudekit/claudekit-engineer/.gitignore` - Git exclusions
- `/mnt/d/www/claudekit/claudekit-engineer/.repomixignore` - Repomix exclusions

### Documentation
- `/mnt/d/www/claudekit/claudekit-engineer/README.md` - Main project docs
- `/mnt/d/www/claudekit/claudekit-engineer/CLAUDE.md` - Agent instructions
- `/mnt/d/www/claudekit/claudekit-engineer/CHANGELOG.md` - Version history
- `/mnt/d/www/claudekit/claudekit-engineer/guide/COMMANDS.md` - Command reference

### Workflows
- `/mnt/d/www/claudekit/claudekit-engineer/.claude/workflows/primary-workflow.md`
- `/mnt/d/www/claudekit/claudekit-engineer/.claude/workflows/development-rules.md`
- `/mnt/d/www/claudekit/claudekit-engineer/.claude/workflows/orchestration-protocol.md`
- `/mnt/d/www/claudekit/claudekit-engineer/.claude/workflows/documentation-management.md`

## Related Projects

- **claudekit** - ClaudeKit website (`../claudekit`)
- **claudekit-marketing** - Marketing Kit (`../claudekit-marketing`)
- **claudekit-cli** - CLI setup tool (`../claudekit-cli`)
- **claudekit-docs** - Public docs (`../claudekit-docs`)

## Version History

**Current**: v1.8.0
**License**: MIT
**Author**: Duy Nguyen
**Repository**: https://github.com/claudekit/claudekit-engineer

## Unresolved Questions

None identified. All core components are well-documented and functional.
