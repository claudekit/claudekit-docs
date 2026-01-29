---
title: "Fix"
description: "Unified bug fixing with intelligent complexity routing and autonomous or human-in-the-loop modes"
section: engineer
kit: engineer
category: skills
order: 27
---

Complete bug fixing workflow with intelligent routing based on issue complexity. Automatically activates before fixing ANY bug, error, test failure, or code problem.

## What This Skill Does

Fix orchestrates the entire debugging and repair process from investigation to verified solution. It assesses complexity, routes to the appropriate workflow, and ensures fixes don't break other parts of the codebase.

Think of it as your bug triage system—analyzing the problem, selecting the right strategy (quick, standard, or deep), and coordinating parallel verification to prevent regressions.

## Core Capabilities

- Complexity assessment and intelligent workflow routing
- Parallel root cause hypothesis exploration
- Simple/Moderate/Complex/Parallel issue handling
- Autonomous or human-in-the-loop review modes
- Comprehensive verification to prevent new issues
- Automatic docs updates and commit management

## Workflow Modes

| Mode | Recommend When | Behavior |
|------|----------------|----------|
| **Autonomous** (default) | Simple/moderate issues | Auto-approve if score ≥9.5 & 0 critical |
| **Human-in-the-loop Review** | Critical/production code | Pause for approval at each step |
| **Quick** | Type errors, lint, trivial bugs | Fast debug → fix → review cycle |

## The Process

### Step 1: Mode Selection

First action (unless "auto" in request): Ask user to choose workflow mode

### Step 2: Debug

- Activate `debug` skill
- Guess all possible root causes
- Explores the codebase in parallel to verify each hypothesis
- Create report with findings

### Step 3: Complexity Assessment & Fix

Classify before routing:

| Level | Indicators | Workflow |
|-------|------------|----------|
| **Simple** | Single file, clear error, type/lint | Quick workflow |
| **Moderate** | Multi-file, root cause unclear | Standard workflow |
| **Complex** | System-wide, architecture impact | Deep workflow |
| **Parallel** | 2+ independent issues | Parallel developers |

### Step 4: Fix Verification

- Read and analyze all changes
- Scans related code to ensure fixes don't cause regressions
- Ensure fixes don't break other parts
- Prevent future issues with comprehensive validation

### Step 5: Finalize

- Report summary with confidence level, changes, related files
- Ask to commit via `git-manager` and update docs via `docs-manager`

## Usage

```
/fix [--auto|--review|--quick]
```

Activate automatically when mentioning bugs, errors, test failures, CI/CD issues, type errors, lint, log errors, UI issues, or code problems.

## Example Prompts

- "Tests are failing in the auth module"
- "Fix the type error in UserProfile component"
- "Debug why the API returns 500 on login"
- "The build is broken in CI"
- "Users report the app crashes on logout"

## Output Format

```
✓ Step 0: [Mode] selected - [Complexity] detected
✓ Step 1: Root cause identified - [summary]
✓ Step 2: Fix implemented - [N] files changed
✓ Step 3: Tests [X/X passed]
✓ Step 4: Review [score]/10 - [status]
✓ Step 5: Complete - [action taken]
```

## What Makes This Different

Fix doesn't just patch symptoms—it finds root causes, verifies fixes across the codebase, and prevents similar issues in the future through defense-in-depth validation. The result: reliable fixes, not band-aids.

## Related Skills

- [Debug](/docs/engineer/skills/debug) - Systematic debugging framework
- [Cook](/docs/engineer/skills/cook) - For implementing new features
