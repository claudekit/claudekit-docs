---
title: "ClaudeKit Cheatsheet"
description: "Quick reference for ClaudeKit commands - essential commands for AI-powered development workflow."
section: getting-started
category: "getting-started"
order: 5
published: true
lastUpdated: 2025-11-07
---
# ClaudeKit Cheatsheet

Quick reference guide for ClaudeKit CLI commands and workflows.

## Installation

```bash
# Install ClaudeKit globally
npm i -g claudekit-cli@latest

# Check version
ck --version
```

## Starting ClaudeKit

```bash
# Navigate to your project
cd /path/to/project

# Start Claude Code with ClaudeKit
claude
```

## Initial Setup

```bash
# For existing projects (brownfield)
/ck:docs init

# For new projects (greenfield)
ck init --kit engineer --dir /path/to/project

# Sync config files with upstream (interactive merge)
ck init --sync

# Use git clone instead of API (no token needed)
ck init --use-git
```

## Core Commands

### Development

```bash
# Initialize documentation and specs
/ck:docs init

# Implement new feature
/ck:cook <description>

# Explicit autonomous feature implementation
/ck:cook --auto <description>

# Fast implementation (skip research)
/ck:cook --fast <description>

# Create implementation plan only
/ck:plan <description>

# Execute existing plan (natural language recommended)
"Implement as planned"

# Bootstrap new project
/ck:bootstrap <idea-description>

# Explicit autonomous bootstrap
/ck:bootstrap --auto <idea-description>
```

### Bug Fixing

```bash
# Quick bug fix
/ck:fix --quick <description>

# Complex bug fix (auto-detects complexity)
/ck:fix <description>

# Auto-fetch logs and fix (auto-detected)
/ck:fix

# Run test suite and fix until passing (auto-detected)
/ck:fix

# Fix CI/CD pipeline issues (auto-detected)
/ck:fix <github-action-url>
```

### Testing

```bash
# Run test suite and report (no fixes)
/ck:test
```

### Documentation

```bash
# Initialize documentation
/ck:docs init

# Update documentation
/ck:docs update

# Summarize documentation
/ck:docs summarize
```

### Git Operations

```bash
# Create commit with meaningful message
/ck:git cm

# Commit and push changes
/ck:git cp

# Create pull request
/ck:git pr
```

### Planning & Research

```bash
# Brainstorm technical approaches
/ck:brainstorm <description>

# Create detailed implementation plan
/ck:plan <description>

# Plan CI/CD setup or fix CI/CD pipeline
/ck:plan

# Two-step implementation plan
/ck:plan --two
```

### Integration

```bash
# Integrate Polar API
/integrate:polar

# Integrate SePay payment
/integrate:sepay
```

### Skills Management

```bash
# Create new skill (use skill-creator skill)
"Create a new skill for [topic]"

# Fix skill errors (use skill-creator skill)
"Fix errors in skill logs"
```

## Command Comparison

### Feature Implementation Flow

```bash
# Approach 1: With plan review (recommended)
/ck:cook <feature-description>
# → CC asks questions
# → Review plan
# → Approve
# → Implementation starts

# Approach 2: Autonomous (explicit opt-in)
/ck:cook --auto <feature-description>
# → Full autonomous without plan review; use only when you want automation
```

### Bug Fixing Flow

```bash
# Simple bugs
/ck:fix --quick <bug-description>

# Complex bugs (auto-detects)
/ck:fix <bug-description>

# From logs (auto-detected)
/ck:fix

# From failing tests (auto-detected)
/ck:fix

# From CI/CD (auto-detected)
/ck:fix <action-url>
```

## Common Workflows

### Brownfield Project Setup

```bash
# 1. Install ClaudeKit
npm i -g claudekit-cli@latest

# 2. Go to project
cd /path/to/existing/project

# 3. Start Claude Code
claude

# 4. Initialize
/ck:docs init

# 5. Start working
/ck:cook <feature>
```

### Greenfield Project Setup

```bash
# 1. Install ClaudeKit
npm i -g claudekit-cli@latest

# 2. Initialize project
ck init --kit engineer --dir /path/to/project

# 3. Navigate to project
cd /path/to/project

# 4. Start Claude Code
claude

# 5. Bootstrap idea
/ck:bootstrap <idea-description>

# 6. Continue development
/ck:cook <next-feature>
```

### Feature Development

```bash
# 1. Plan feature
/ck:plan Add user profile with avatar upload

# 2. Review plan (markdown file generated)

# 3. Implement
"Implement profile feature as planned"

# 4. Test
/ck:test

# 5. Fix if needed
/ck:fix

# 6. Commit
/ck:git cm
```

### Bug Fix Workflow

```bash
# 1. Describe bug
/ck:fix Payment fails on Safari after form validation

# 2. CC analyzes and fixes (auto-detects complexity)

# 3. Test the fix
/ck:test

# 4. Commit
/ck:git cm
```

### CI/CD Fix Workflow

```bash
# 1. Get failing action URL
# https://github.com/user/repo/actions/runs/12345

# 2. Fix CI
/ck:fix https://github.com/user/repo/actions/runs/12345

# 3. CC fetches logs, analyzes, fixes (auto-detects CI context)

# 4. Push fix
/ck:git cp
```

## Quick Examples

### Add Authentication

```bash
/ck:cook Add JWT authentication with login, register, and password reset
```

### Fix Performance Issue

```bash
/ck:fix Dashboard loads slowly with 1000+ items
```

### Plan Database Migration

```bash
/ck:plan Migrate from MongoDB to PostgreSQL with zero downtime
```

### Integrate Payment

```bash
/integrate stripe
# or
/ck:cook Add Stripe payment integration with subscription billing
```

### Bootstrap New API

```bash
/ck:bootstrap REST API for task management with teams, projects, tasks, and time tracking
```

## Command Categories

### 🚀 Core Development
- `/ck:cook` - Feature implementation
- `/ck:plan` - Create plans
- `/ck:bootstrap` - New projects

### 🐛 Debugging & Fixing
- `/ck:fix --quick` - Quick fixes (lint, type errors)
- `/ck:fix <issue>` - Auto-detect complexity, logs, tests, CI
- `/ck:fix --parallel` - Parallel fix for multiple issues
- `/ck:debug` - Root cause analysis

### 🧪 Testing
- `/ck:test` - Run tests

### 📚 Documentation
- `/ck:docs init` - Initialize
- `/ck:docs update` - Update
- `/ck:docs summarize` - Summarize

### 🔧 Git Operations
- `/ck:git cm` - Commit changes
- `/ck:git cp` - Commit and push
- `/ck:git pr` - Create PR

### 💡 Planning
- `/ck:plan` - Detailed planning
- `/ck:brainstorm` - Explore ideas

### 🔌 Integrations
- `/integrate <service>` - Add integrations

### ⚙️ Skills
- Use `skill-creator` skill - Create/fix/optimize skills

## Tips & Best Practices

### 1. Always Review Plans
**IMPORTANT:** Review implementation plans carefully before approving. Plans exist for a reason.

### 2. Provide Context
More detailed descriptions = better results
```bash
# ❌ Bad
/ck:cook Add search

# ✅ Good
/ck:cook Add full-text search for blog posts with filters by category, tag, and date range
```

### 3. Use Right Command

```bash
# Quick bugs
/ck:fix --quick <simple-issue>

# Complex bugs (auto-detects)
/ck:fix <complex-issue>

# Small features
/ck:cook <feature>

# Large features
/ck:plan <feature> → review → "Implement as planned"
```

### 4. Test Frequently

```bash
# After each feature
/ck:test

# Or auto-fix tests
/ck:fix
```

### 5. Document Changes

```bash
# Keep docs updated
/ck:docs update
```

## Troubleshooting

### Command Not Working

```bash
# Check ClaudeKit version
ck --version

# Restart Claude Code
# Exit and run: claude
```

### Need Fresh Start

```bash
# Reinitialize docs
/ck:docs init
```

### Need More Help

```bash
# Brainstorm approach
/ck:brainstorm How to implement <complex-feature>

# Get detailed plan
/ck:plan <what-you-want-to-do>
```

## Quick Command Reference

```bash
# Initialize existing project
/ck:docs init

# New feature (needs plan review)
/ck:cook <feature-description>

# New feature (autonomous, explicit opt-in)
/ck:cook --auto <description>

# Only plan, no implementation
/ck:plan <description>

# Code from existing plan
"Implement plan"

# Quick bug fix
/ck:fix --quick <bug-description>

# Bug fix (auto-detects complexity)
/ck:fix <bug-description>

# Auto-fetch logs and fix (auto-detected)
/ck:fix

# Run tests and fix till passing (auto-detected)
/ck:fix

# Fetch GitHub Actions logs and fix (auto-detected)
/ck:fix <github-action-url>

# Create new project (needs plan review)
/ck:bootstrap <idea-description>

# Create new project (autonomous, explicit opt-in)
/ck:bootstrap --auto <idea>

# Run test suite and report (no fixes)
/ck:test
```

## Resources

- [Full Documentation](https://docs.claudekit.cc)
- [All Skills](/docs/engineer/skills/)
- [AI Agents](/docs/engineer/agents/)
- [Workflows](/docs/engineer/configuration/workflows)
- [Troubleshooting](/docs/support/troubleshooting/)
- [GitHub Discussions](https://github.com/mrgoonie/claudekit-cli/discussions)

---

**Print this page** or keep it open while working with ClaudeKit for quick command reference!
