---
title: "Git"
description: "Git operations with conventional commits, auto-split logic, and secret detection"
section: engineer
kit: engineer
category: skills
order: 28
---

Execute git workflows with conventional commit format, intelligent commit splitting, and security scanning for secrets.

## What This Skill Does

The Git skill handles all git operations with conventional commit standards, automatic commit splitting by type/scope, and security scanning for accidentally committed secrets.

Think of it as your git guardian—ensuring clean commit history, preventing security leaks, and handling complex workflows like PRs and merges with proper GitHub CLI integration.

## Core Capabilities

- Stage files and create conventional commits
- Auto-split commits by type/scope for clean history
- Security scanning for API keys, tokens, passwords
- Push with error handling and conflict resolution
- Create Pull Requests with remote diff analysis
- Merge branches with safety checks
- GitHub CLI integration for issues and PRs

## Arguments

- `cm`: Stage files & create commits
- `cp`: Stage files, create commits, and push
- `pr`: Create Pull Request [to-branch] [from-branch]
- `merge`: Merge [to-branch] [from-branch]

## Core Workflow

### 1. Stage + Analyze
```bash
git add -A && git diff --cached --stat && git diff --cached --name-only
```

### 2. Security Check
Scan for secrets before commit:
```bash
git diff --cached | grep -iE "(api[_-]?key|token|password|secret|credential)"
```
**If secrets found**: STOP, warn user, suggest `.gitignore`.

### 3. Split Decision

**Split commits if:**
- Different types mixed (feat + fix, code + docs)
- Multiple scopes (auth + payments)
- Config/deps + code mixed
- FILES > 10 unrelated

**Single commit if:**
- Same type/scope, FILES ≤ 3, LINES ≤ 50

### 4. Commit
```bash
git commit -m "type(scope): description"
```

## Usage

Activate by typing `/git` followed by arguments or mentioning git operations.

## Example Prompts

- "/git cm" - Create commits
- "/git cp" - Create commits and push
- "/git pr main dev" - Create PR from dev to main
- "/git merge dev feature-branch" - Merge feature into dev

## Conventional Commit Format

```
type(scope): description

[optional body]

[optional footer]
```

**Types**: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `style`

**Note**: Only use `feat`, `fix`, or `perf` for `.claude` directory files (not `docs`).

## Output Format

```
✓ staged: N files (+X/-Y lines)
✓ security: passed
✓ commit: HASH type(scope): description
✓ pushed: yes/no
```

## Error Handling

| Error | Action |
|-------|--------|
| Secrets detected | Block commit, show files |
| No changes | Exit cleanly |
| Push rejected | Suggest `git pull --rebase` |
| Merge conflicts | Suggest manual resolution |

## What Makes This Different

Git skill doesn't just execute commands—it enforces best practices, prevents security leaks, and maintains clean commit history automatically. The intelligent commit splitting ensures your git log tells a clear story.

## Related Skills

- [Cook](/docs/engineer/skills/cook) - For implementing features that need commits
- [Fix](/docs/engineer/skills/fix) - For bug fixes that need commits
