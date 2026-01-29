---
title: Commands Overview
description: Documentation for index
section: engineer
kit: engineer
category: commands
order: 0
published: true
---

# Commands Overview

ClaudeKit provides a comprehensive set of slash commands to accelerate your development workflow. Each command is designed for specific tasks and automatically orchestrates the appropriate agents.

:::tip[Commands → Skills Migration]
**As of engineer@1.3.0+**, many commands have been migrated to **skills** invoked with `/` prefix.

**What changed:**
- Commands like `/code` → `/cook`, `/design` → `/frontend-design`, etc.
- Skills are invoked with `/` prefix just like commands
- Cleaner naming and better workflow organization
- Better token efficiency

**See:** [Migration Guide](/docs/getting-started/migration-from-commands-to-skills) for complete details and workflow comparisons.
:::

## Command Categories

### Core Development

- **[/ask](/docs/engineer/commands/core/ask)** - Ask questions about the codebase
- **[/bootstrap](/docs/engineer/commands/core/bootstrap)** - Initialize new projects with spec-driven development
- **[/ck-help](/docs/engineer/commands/core/ck-help)** - Get help about ClaudeKit commands
- **[/coding-level](/docs/engineer/commands/core/coding-level)** - Set coding complexity level
- **[/journal](/docs/engineer/commands/core/journal)** - Write development journal entries
- **[/kanban](/docs/engineer/commands/core/kanban)** - Manage project tasks in Kanban board
- **[/preview](/docs/engineer/commands/core/preview)** - Preview current work
- **[/test](/docs/engineer/commands/core/test)** - Run test suite and get results
- **[/use-mcp](/docs/engineer/commands/core/use-mcp)** - Use MCP server tools
- **[/watzup](/docs/engineer/commands/core/watzup)** - Get project status and recent changes
- **[/worktree](/docs/engineer/commands/core/worktree)** - Manage git worktrees
- **[/wt](/docs/engineer/commands/core/wt)** - Shorthand for /worktree

**Note:** `/cook` and `/debug` are now skills. See migration notice above.

### Planning

- **[/plan](/docs/engineer/commands/plan/plan)** - Create implementation plans
- **[/plan:fast](/docs/engineer/commands/plan/fast)** - Quick planning
- **[/plan:hard](/docs/engineer/commands/plan/hard)** - Detailed planning with research
- **[/plan:two](/docs/engineer/commands/plan/two)** - Create plan with 2 approaches
- **[/plan:parallel](/docs/engineer/commands/plan/parallel)** - Parallel planning with multiple researchers
- **[/plan:ci](/docs/engineer/commands/plan/ci)** - Analyze CI failures and create fix plan
- **[/plan:cro](/docs/engineer/commands/plan/cro)** - Create conversion optimization plan
- **[/plan:archive](/docs/engineer/commands/plan/archive)** - Archive completed plans
- **[/plan:validate](/docs/engineer/commands/plan/validate)** - Validate plan structure

### Documentation

- **[/docs](/docs/engineer/commands/docs/docs)** - Manage project documentation
- **[/docs:init](/docs/engineer/commands/docs/init)** - Initialize project documentation
- **[/docs:update](/docs/engineer/commands/docs/update)** - Update project documentation
- **[/docs:summarize](/docs/engineer/commands/docs/summarize)** - Summarize project documentation

### Review

- **[/review:codebase](/docs/engineer/commands/review/codebase)** - Review entire codebase
- **[/review:codebase:parallel](/docs/engineer/commands/review/codebase-parallel)** - Parallel codebase review

### Other

- **[/check-and-commit](/docs/engineer/commands/other/check-and-commit)** - Check code quality and commit

## Quick Command Reference

### Most Used Commands

```bash
# Project Setup
/bootstrap [description]         # Initialize new project
/coding-level [level]            # Set coding complexity level

# Feature Development
/plan [feature description]      # Plan the feature
/plan:hard [complex feature]     # Detailed planning with research
/plan:parallel [feature]         # Parallel planning
/cook [implement feature]        # Implement from plan

# Documentation
/docs:init                       # First-time setup
/docs:update                     # After making changes
/docs:summarize                  # Generate documentation summary

# Testing
/test                            # Run test suite
/test:ui                         # Run UI tests
/debug [issue description]       # Debug issues

# Git Workflow
/check-and-commit                # Check quality and commit
/worktree [feature-name]         # Create git worktree

# Project Status
/watzup                          # What's the current state?
/ask [question]                  # Ask about codebase
/kanban                          # View project dashboard
```

## Command Syntax

### Basic Syntax

```bash
/command [required-argument] [optional-argument]
```

### Examples

```bash
# No arguments
/test
/watzup
/docs:init

# Required argument
/plan [add user authentication]
/ask [how does routing work?]
/bootstrap [create REST API]

# Optional arguments
/git:pr                          # PR to default branch
/git:pr [develop]                # PR to develop
/git:pr [main] [feature-branch]  # PR from feature to main

# Multiple arguments
/plan:parallel [feature] [3]     # Parallel planning with 3 researchers
```

## Command Workflows

### Starting a New Project

```bash
1. /bootstrap [project description]
   # OR
   ck init --kit engineer

2. # Customize requirements through Q&A

3. # System automatically:
   - Researches best practices
   - Creates implementation plan
   - Implements features
   - Generates tests
   - Sets up documentation
```

### Developing a Feature

```bash
1. /plan [feature description]
   # Creates detailed implementation plan

2. # Review plan in plans/ directory

3. /cook "Implement the feature as planned"
   # Implements based on plan

4. /test
   # Validates implementation

5. /check-and-commit
   # Checks quality and commits
```

### Investigating Issues

```bash
# Debug issues
/debug "Debug the login issue - users can't authenticate"
# - Analyzes logs and code
# - Identifies root cause
# - Suggests solutions

# Run tests
/test
# - Runs full test suite
# - Shows coverage report

# UI testing
/test:ui
# - Runs UI/E2E tests
# - Visual regression testing
```

### Updating Documentation

```bash
# After implementing features
/docs:update

# When onboarding new team members
/docs:summarize

# When starting with existing codebase
/docs:init
```

## Command Best Practices

### Use the Right Command for the Task

✅ **Correct Usage**
```bash
# Simple questions
/ask [how does routing work?]

# Planning with research
/plan:hard [add OAuth2 authentication]

# Quick planning
/plan:fast [update button styling]

# Parallel planning for complex features
/plan:parallel [rebuild authentication system]
```

❌ **Incorrect Usage**
```bash
# Don't use fast for complex features
/plan:fast [rebuild entire authentication system]

# Don't skip planning for major features
# (implement without /plan first)
```

### Provide Clear Descriptions

✅ **Clear**
```bash
/plan [add OAuth2 authentication with Google and GitHub providers]
"Debug API issue - returns 500 error when creating user with empty email"
/ask [how is user authentication currently implemented?]
```

❌ **Vague**
```bash
/plan [add auth]
"Something's broken, please fix"
/ask [how does this work?]
```

### Review Before Committing

```bash
# 1. Implement feature

# 2. Test
/test

# 3. Review changes
git diff

# 4. Quality check and commit
/check-and-commit
```

### Use Sequential Commands for Complex Tasks

```bash
# 1. Understand codebase
/ask [how is authentication currently implemented?]

# 2. Plan changes with research
/plan:hard [migrate from session-based to JWT authentication]

# 3. Review plan
/preview plans/latest-plan.md

# 4. Implement based on plan
/cook "Implement JWT authentication migration as planned"

# 5. Test
/test

# 6. Debug if needed
/debug "Debug the JWT token validation issue"

# 7. Quality check and commit
/check-and-commit
```

## Command Flags and Options

Some commands support flags:

### /plan

```bash
/plan [feature]              # Intelligent planning
/plan:fast [feature]         # Quick planning without research
/plan:hard [feature]         # Detailed planning with research
/plan:two [feature]          # Two different approaches
/plan:parallel [feature]     # Parallel planning with researchers
/plan:ci [CI-URL]            # Analyze CI failures
/plan:cro [content]          # Conversion optimization
```

## Understanding Command Output

Commands provide structured output:

### Planning Commands

```
planner Agent: Analyzing codebase...

Research Results:
- OAuth2 best practices reviewed
- Existing auth patterns identified
- Security considerations documented

Implementation Plan Created:
📄 plans/oauth-implementation.md

Plan Summary:
1. Install dependencies (passport, passport-google-oauth20)
2. Configure OAuth2 providers
3. Implement callback routes
4. Add session management
5. Generate tests
6. Update documentation

Estimated time: 2-3 hours
Files to create: 5
Files to modify: 3

Next: Review plan, then implement
```

### Implementation Output

```
fullstack-developer Agent: Implementing from plan...

Dependencies Installed:
✓ passport (0.6.0)
✓ passport-google-oauth20 (2.0.0)

Files Created:
✓ src/auth/oauth-config.js
✓ src/auth/google-strategy.js
✓ src/routes/auth-callback.js

Tests Generated:
✓ tests/auth/oauth.test.js (15 tests)

Documentation Updated:
✓ docs/api/authentication.md

Implementation complete!

Next: Run /test to validate
```

### Test Commands

```
tester Agent: Running test suite...

Test Results:
✓ Unit tests: 45 passed
✓ Integration tests: 12 passed
✓ E2E tests: 8 passed

Coverage: 87.3%

All tests passed!

Next: Review changes, then /git:cm
```

## Troubleshooting Commands

### Command Not Found

**Problem**: `/command` not recognized

**Solutions:**
1. Verify you're in a ClaudeKit project (`ls .claude/`)
2. Check command exists (`ls .claude/commands/`)
3. Run `ck init` to get latest commands
4. Restart Claude Code

### Command Fails

**Problem**: Command errors during execution

**Solutions:**
1. Check error message for specific issue
2. Verify prerequisites (API keys, dependencies)
3. Review agent logs
4. Try command with simpler input
5. Use `/debug` to investigate

### Unexpected Results

**Problem**: Command doesn't do what expected

**Solutions:**
1. Review command documentation
2. Check if using correct command for task
3. Provide more specific description
4. Review generated plans before implementing
5. Use feedback to refine

## Next Steps

Explore specific command categories:

- [Core Commands](/docs/engineer/commands/core/) - Development essentials
- [Planning Commands](/docs/engineer/commands/plan/) - Implementation planning
- [Documentation Commands](/docs/engineer/commands/docs/) - Documentation management
- [Review Commands](/docs/engineer/commands/review/) - Code review and analysis

Or learn about:

- [Agents](/docs/engineer/agents/) - How commands invoke agents
- [Skills](/docs/engineer/skills/) - Specialized capabilities
- [Quick Start](/docs/getting-started/quick-start) - Hands-on tutorial

---

**Key Takeaway**: ClaudeKit commands provide a natural, intuitive interface to powerful agent orchestration, making complex development tasks simple and repeatable.
