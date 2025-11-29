---
title: /docs:summarize
description: "Documentation for /docs:summarize
description:
section: docs
category: commands/docs-cmd
order: 62
published: true"
section: docs
category: commands/docs-cmd
order: 62
published: true
---

# /docs:summarize

Generate a comprehensive summary of your codebase by analyzing project structure, files, and architecture. Creates or updates `./docs/codebase-summary.md` with detailed project overview, file statistics, and token counts.

## Syntax

```bash
/docs:summarize
```

No arguments needed - the command analyzes your entire codebase automatically.

## How It Works

The `/docs:summarize` command uses the `docs-manager` agent:

### 1. Codebase Compaction

- Runs `repomix` to analyze entire project
- Generates `./repomix-output.xml` with complete codebase
- Calculates file counts and token statistics
- Identifies project structure and patterns
- Excludes build artifacts and dependencies

### 2. Summary Generation

- Parses compacted codebase data
- Identifies key components and modules
- Analyzes file organization patterns
- Documents architectural decisions
- Lists technology stack and dependencies

### 3. Documentation Creation

- Creates/updates `./docs/codebase-summary.md`
- Includes project structure tree
- Documents file organization
- Lists key files and their purposes
- Provides token count and statistics
- Adds timestamp and version information

### 4. Quality Assurance

- Ensures consistent formatting
- Validates file paths and references
- Checks for completeness
- Maintains documentation standards

## When to Use

### ✅ Perfect For

**New Team Members**
```bash
# Onboarding new developers
/docs:summarize
```

**Project Handoff**
```bash
# Preparing project for transfer
/docs:summarize
```

**Architecture Review**
```bash
# Before major refactoring
/docs:summarize
```

**AI Context Generation**
```bash
# Generate context for AI tools
/docs:summarize
```

**Regular Maintenance**
```bash
# Weekly/monthly codebase review
/docs:summarize
```

### ❌ Don't Use For

**Full Documentation Update**
```bash
❌ /docs:summarize  # Only updates summary
✅ /docs:update     # Updates all documentation
```

**Detailed API Docs**
```bash
❌ /docs:summarize  # High-level overview only
✅ /docs:update [focus on API documentation]
```

## Examples

### Basic Codebase Summary

```bash
/docs:summarize
```

**What happens:**
```
1. Analyzing codebase
   $ repomix
   - Scanning project files...
   - Processing: 245 files
   - Excluding: node_modules, dist, .git

2. Generating compaction
   ✓ Created: ./repomix-output.xml
   - Size: 1.2 MB
   - Tokens: 325,478
   - Lines of code: 45,234

3. Creating summary
   ✓ Updated: ./docs/codebase-summary.md

   Contents:
   - Project Overview
   - Technology Stack
   - Project Structure (directory tree)
   - Key Components
   - File Organization
   - Statistics and Metrics

✓ Codebase summary generated (1m 23s)
```

### Large Monorepo

```bash
/docs:summarize
```

**What happens:**
```
1. Analyzing monorepo structure
   $ repomix
   - Packages found: 8
   - Total files: 1,247
   - Shared components: 156

2. Processing packages
   ✓ packages/api (234 files, 78K tokens)
   ✓ packages/web (445 files, 125K tokens)
   ✓ packages/mobile (334 files, 89K tokens)
   ✓ packages/shared (156 files, 45K tokens)
   ✓ packages/database (45 files, 12K tokens)
   ✓ packages/auth (67 files, 23K tokens)
   ✓ packages/payment (89 files, 34K tokens)
   ✓ packages/analytics (78 files, 28K tokens)

3. Generating comprehensive summary
   ✓ Created: ./docs/codebase-summary.md

   Sections:
   - Monorepo Overview
   - Package Structure
   - Inter-package Dependencies
   - Shared Libraries
   - Build and Deployment
   - Development Workflow
   - Total Statistics

   Metrics:
   - Total tokens: 434,000
   - Total files: 1,247
   - Total lines: 156,789

✓ Monorepo summary complete (2m 45s)
```

### Microservices Architecture

```bash
/docs:summarize
```

**What happens:**
```
1. Analyzing microservices
   $ repomix
   - Services detected: 7
   - Shared libraries: 3
   - Configuration files: 23

2. Service breakdown
   ✓ services/api-gateway (45 files, 15K tokens)
   ✓ services/auth (67 files, 23K tokens)
   ✓ services/users (89 files, 31K tokens)
   ✓ services/payments (78 files, 28K tokens)
   ✓ services/notifications (56 files, 19K tokens)
   ✓ services/analytics (67 files, 24K tokens)
   ✓ services/background-jobs (45 files, 16K tokens)

3. Creating summary
   ✓ Updated: ./docs/codebase-summary.md

   Structure:
   - Microservices Architecture Overview
   - Service Descriptions
   - Communication Patterns
   - Shared Infrastructure
   - Data Flow Diagrams
   - Deployment Configuration

   Statistics:
   - Total services: 7
   - Total tokens: 156,000
   - Average service size: 22,000 tokens

✓ Microservices summary generated (1m 56s)
```

### TypeScript Monorepo

```bash
/docs:summarize
```

**What happens:**
```
1. Scanning TypeScript project
   $ repomix
   - TypeScript files: 456
   - Type definitions: 67
   - Test files: 234
   - Configuration: 12

2. Analyzing structure
   ✓ Core modules identified
   ✓ Type hierarchies mapped
   ✓ Test coverage calculated
   ✓ Dependencies analyzed

3. Summary created
   ✓ ./docs/codebase-summary.md

   Includes:
   - TypeScript Configuration
   - Module Structure
   - Type System Overview
   - Key Interfaces and Types
   - Test Organization
   - Build Configuration

   Metrics:
   - TypeScript version: 5.3.3
   - Total tokens: 289,456
   - Type files: 67
   - Test coverage: 87%

✓ TypeScript summary complete (1m 34s)
```

## Generated Summary Structure

The `./docs/codebase-summary.md` file includes:

### Project Overview
- Project name and description
- Technology stack
- Key features
- Development status

### Technology Stack
- Programming languages
- Frameworks and libraries
- Build tools
- Testing frameworks
- Infrastructure tools

### Project Structure
```
project-root/
├── src/
│   ├── api/
│   ├── services/
│   ├── models/
│   └── utils/
├── tests/
├── docs/
└── config/
```

### Key Components
- Main application entry points
- Core business logic modules
- API endpoints and routes
- Database models and schemas
- Utility libraries

### File Organization
- Naming conventions
- Directory structure patterns
- Module organization
- Configuration files

### Statistics and Metrics
- Total files: 245
- Total lines of code: 45,234
- Total tokens: 325,478
- Test coverage: 87%
- Last updated: 2025-10-29

## Repomix Integration

### What is Repomix?

Repomix is a tool that packs entire repositories into single, AI-friendly files:
- Generates comprehensive codebase snapshot
- Calculates token counts for LLM context
- Preserves project structure
- Excludes unnecessary files

### Generated Files

**./repomix-output.xml**
- Complete codebase compaction
- XML format optimized for AI parsing
- Includes all source files
- Metadata and statistics

### Repomix Configuration

Default exclusions (via `.gitignore` and `.repomixignore`):
```
node_modules/
dist/
build/
.git/
*.log
coverage/
.env
```

## Agent Invoked

The command uses the **docs-manager agent** with these capabilities:

- **Codebase Analysis**: Comprehensive project scanning
- **Structure Identification**: Pattern recognition in file organization
- **Statistics Generation**: File counts, token counts, metrics
- **Documentation Creation**: Formatted markdown generation
- **Quality Assurance**: Consistency and completeness validation

## Best Practices

### Regular Updates

✅ **Periodic summaries:**
```bash
# Weekly or after major changes
/docs:summarize
```

❌ **Too frequent:**
```bash
# After every tiny change
/fix:fast [typo]
/docs:summarize  # Wasteful
```

### Before Major Work

✅ **Establish baseline:**
```bash
# Before refactoring
/docs:summarize
# Perform refactoring
/docs:summarize  # Compare changes
```

### For Onboarding

✅ **Prepare for new developers:**
```bash
# Update documentation
/docs:summarize
/docs:update

# New team member gets complete picture
```

## Workflow

### Onboarding New Developers

```bash
# 1. Generate summary
/docs:summarize

# 2. Update full documentation
/docs:update

# 3. Share documentation
# Point new developers to ./docs/codebase-summary.md
```

### Architecture Review

```bash
# 1. Generate current state
/docs:summarize

# 2. Review summary
cat docs/codebase-summary.md

# 3. Plan refactoring based on insights
/plan [refactor based on architecture review]
```

### Project Handoff

```bash
# 1. Generate comprehensive summary
/docs:summarize

# 2. Update all documentation
/docs:update

# 3. Commit documentation
/git:cm

# 4. Share with receiving team
```

### Regular Maintenance

```bash
# Weekly/monthly task
/docs:summarize

# Review changes
git diff docs/codebase-summary.md

# Commit if significant changes
/git:cm
```

## Troubleshooting

### Repomix Not Found

**Problem:** `repomix` command not available

**Solution:**
```bash
# Install repomix
npm install -g repomix

# Then run command
/docs:summarize
```

### Large Codebase Timeout

**Problem:** Timeout on very large projects

**Solution:**
```bash
# Configure repomix to exclude more
echo "target/" >> .repomixignore
echo "*.min.js" >> .repomixignore

# Then retry
/docs:summarize
```

### Missing Files in Summary

**Problem:** Some files not included

**Solution:**
```bash
# Check .gitignore and .repomixignore
# Remove exclusions if needed
# Then regenerate
/docs:summarize
```

## Token Count Usage

### Why Token Counts Matter

Token counts help:
- **AI Context Planning**: Know if codebase fits in LLM context window
- **Documentation Scope**: Understand documentation requirements
- **Code Review**: Estimate review effort
- **Refactoring Planning**: Assess complexity

### Example Token Breakdown

```
Total tokens: 325,478

Breakdown:
- API layer: 89,234 tokens (27%)
- Services: 123,456 tokens (38%)
- Models: 45,678 tokens (14%)
- Utils: 34,567 tokens (11%)
- Tests: 32,543 tokens (10%)
```

### Context Window Planning

```
Claude 3.5 Sonnet: 200K tokens
Project size: 325K tokens

Strategy:
- Analyze by module (< 200K each)
- Use codebase summary for high-level decisions
- Deep dive into specific modules as needed
```

## Related Commands

### Full Documentation Update

```bash
# Summary only
/docs:summarize

# All documentation
/docs:update
```

### Initialize Documentation

```bash
# First-time setup
/docs:init

# Regular updates
/docs:summarize
```

### Review Changes

```bash
# Generate summary
/docs:summarize

# Review recent work
/watzup
```

## Output Files

After running `/docs:summarize`:

```
./
├── docs/
│   └── codebase-summary.md (created/updated)
└── repomix-output.xml (generated)
```

## Metrics

Typical `/docs:summarize` performance:

- **Time**: 1-3 minutes (depending on codebase size)
- **Files analyzed**: All source files (excluding node_modules, build artifacts)
- **Output size**: 5-50 KB markdown file
- **Token accuracy**: 99%+ accurate counting
- **Update frequency**: Recommended weekly or after major changes

## Next Steps

After using `/docs:summarize`:

- [/docs:update](/docs/commands/docs/update) - Update all documentation
- [/docs:init](/docs/commands/docs/init) - Initialize full documentation
- [/watzup](/docs/commands/core/watzup) - Review recent changes
- [/git:cm](/docs/commands/git/commit) - Commit documentation

---

**Key Takeaway**: `/docs:summarize` provides a quick, comprehensive overview of your codebase structure, helping developers understand project organization and serving as valuable context for AI-assisted development.
