---
title: "Git Manager Agent"
description: "Stage, commit, and push code changes with clean conventional commits and intelligent splitting."
section: marketing
category: agents
order: 4
---
# Git Manager Agent

> **Your version control specialist** - Clean commits, clear history, zero hassle

## What This Agent Does

You've made changes across 15 files—some docs, some deps, some features, some fixes. You type `git add .` and `git commit -m "updates"`. Six months later, someone asks "Why did we change this?" Your commit message: "updates." Not helpful.

**The Problem**: Bad commit messages create unusable git history. Mixing unrelated changes in one commit makes it impossible to understand what changed or why. Manually crafting good commits for every change is tedious and error-prone.

**The Solution**: The Git Manager Agent intelligently stages, splits, and commits your changes with descriptive conventional commit messages. It detects secrets before committing, splits mixed changes into logical commits, and maintains clean git history that actually helps future developers.

## Quick Start

Commit your work with one command:

```bash
# Analyzes changes, creates commit(s), optionally pushes
/commit "and push"
```

The agent stages files, checks for secrets, splits unrelated changes, generates descriptive commit messages, and handles everything automatically.

## Capabilities

### Intelligent Change Analysis
Scans and categorizes your changes:
- Detects file types (code, tests, docs, config, deps)
- Identifies multiple scopes (auth, payments, etc.)
- Counts lines changed and files modified
- Categorizes by change type (feat, fix, chore, docs)
- Determines if changes should be split

### Secret Detection
Prevents accidental credential commits:
- Scans for API keys, tokens, passwords
- Detects patterns like `secret`, `private_key`, `credential`
- Blocks commits containing sensitive data
- Shows matched patterns with context
- Suggests adding files to `.gitignore`

### Automatic Commit Splitting
Creates logical, focused commits:
- Splits mixed types (feat + docs + deps)
- Separates different scopes (frontend + backend)
- Groups related changes together
- Maintains single commits for small, focused changes
- Never mixes config with features or deps with code

### Conventional Commit Messages
Generates standardized, descriptive messages:
- Follows conventional commit format: `type(scope): description`
- Uses Gemini AI for complex changes
- Falls back to pattern-based generation
- Keeps messages under 72 characters
- Focuses on WHAT changed, not HOW
- Never includes AI attribution

### Pull Request Creation
Creates PRs with comprehensive context:
- Uses remote branch diff (not local uncommitted changes)
- Generates PR title from commit messages
- Creates structured PR body with summary and test plan
- Pushes branch and creates PR in one flow
- Handles branch syncing and conflict detection

## When to Use

Use the Git Manager Agent when you need to:
- Commit changes with descriptive messages
- Push to remote repository
- Create pull requests
- Split mixed changes into logical commits
- Verify no secrets are being committed
- Maintain clean git history

## Example Workflows

### Simple Commit and Push

```bash
# After finishing a feature
/commit "and push"
```

**The agent will**:
1. Stage all changes
2. Check for secrets (block if found)
3. Analyze change complexity
4. Generate appropriate commit message
5. Create commit
6. Push to remote

### Smart Commit Splitting

```bash
# You changed: package.json, API docs, auth feature
/commit
```

**The agent will**:
1. Detect mixed changes (deps + docs + code)
2. Split into 3 logical commits:
   - `chore(deps): update axios to 1.6.0`
   - `docs: update API authentication guide`
   - `feat(auth): add JWT token refresh`
3. Commit each separately
4. Keep git history clean and logical

### Pull Request Creation

```bash
# After pushing feature branch
/pr "to main"
```

**The agent will**:
1. Fetch latest remote state
2. Push branch if needed
3. Analyze commits in branch (vs main)
4. Generate PR title and body
5. Create PR with `gh pr create`
6. Return PR URL

## Commit Message Standards

### Format
```
type(scope): description

Types:
- feat: New feature or capability
- fix: Bug fix
- docs: Documentation changes only
- style: Code style/formatting
- refactor: Code restructure without behavior change
- test: Adding or updating tests
- chore: Maintenance, deps, config
- perf: Performance improvements
- build: Build system changes
- ci: CI/CD pipeline changes
```

### Rules
- Under 72 characters
- Present tense, imperative mood ("add feature" not "added")
- No period at end
- Focus on WHAT, not HOW
- Be concise but descriptive

### Good Examples
- `feat(webhooks): add signature verification`
- `fix(api): resolve timeout in campaign queries`
- `docs(readme): update deployment instructions`
- `refactor(email): simplify template rendering`

### Bad Examples
- `Updated some files` (not descriptive)
- `feat: added user login using bcrypt with 10 salt rounds` (too long, describes HOW)
- `Fix bug` (not specific)

## Secret Detection Patterns

The agent blocks commits containing:
- `api_key`, `api-key`, `apiKey`
- `token`, `access_token`
- `password`, `passwd`
- `secret`, `client_secret`
- `private_key`, `privateKey`
- `credential`, `credentials`

If detected, you'll see:
```
❌ Secrets found in: src/config/keys.ts
Line 12:   const API_KEY = "sk_live_abc123def..."
Action: Add keys.ts to .gitignore
```

## Pull Request Best Practices

**Remote Diff, Not Local**: PRs compare remote branches, so the agent uses:
```bash
# Correct (remote comparison)
git diff origin/main...origin/feature

# Wrong (includes uncommitted changes)
git diff main...HEAD
```

**Pre-PR Checklist**:
1. Fetch latest: `git fetch origin`
2. Push branch: `git push -u origin HEAD`
3. Sync with base: `git merge origin/main`
4. Verify diff matches expected changes

## Performance

Token-optimized workflow:
- 2-3 tool calls for simple commits
- 3-4 tool calls for split commits
- 81% cost reduction vs naive approach
- 10-15 seconds for single commit
- 15-25 seconds for multi-commit

## Related Agents

- [Docs Manager](/docs/marketing/agents/docs-manager) - Commits documentation changes
- [Project Manager](/docs/marketing/agents/project-manager) - Tracks committed changes
- [Tester](/docs/marketing/agents/tester) - Runs tests before commits

## Related Commands

- [`/commit`](/docs/marketing/commands) - Create and push commits
- [`/pr`](/docs/marketing/commands) - Create pull request

## Tips

**Commit Early, Commit Often**: Small, focused commits are easier to review and revert if needed. Don't batch days of work into one commit.

**Trust the Splitting**: If the agent suggests splitting your changes, it's because they're logically separate. This makes git history more useful.

**Review Before Pushing**: The agent shows what it staged and will commit. Glance at the diff to catch anything unexpected.

**Use Conventional Commits**: The format isn't just pedantic—it enables automated changelog generation, semantic versioning, and better git log filtering.

## Why This Matters

Git history isn't just a record—it's documentation:
- Future developers use `git log` to understand evolution
- Clean commits make debugging easier (`git bisect`)
- Good messages help with code review
- Professional projects have professional history

The Git Manager makes maintaining high-quality git history effortless.
