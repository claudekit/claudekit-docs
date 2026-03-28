---
title: "ck watch"
description: "Autonomous GitHub issue monitor that polls, analyzes, plans, and implements issues with AI"
section: docs
category: cli
order: 10
published: true
---

# ck watch

Autonomous long-running GitHub issue monitor. Polls issues, brainstorms with Claude, generates plans, waits for owner approval, then auto-implements via PR.

## Overview

`ck watch` turns your terminal into an overnight AI assistant. It continuously monitors GitHub issues for a repository (or multiple repos), uses Claude to analyze and plan solutions, posts the plan as a comment, and — once the repo owner approves — creates a branch, implements the fix, and opens a PR. Designed for 6-8+ hour unattended operation.

## Syntax

```bash
ck watch [options]
```

### Options

| Flag | Default | Description |
|------|---------|-------------|
| `--interval <ms>` | `30000` | Poll interval in milliseconds |
| `--dry-run` | `false` | Detect issues and log actions, but never post to GitHub |
| `--force` | `false` | Kill any existing `ck watch` process and start fresh |
| `--verbose` | `false` | Enable debug output |

## Prerequisites

- **GitHub CLI** (`gh`) installed and authenticated
- **Git** repository (or directory containing git repos for multi-repo mode)
- **Node.js 18+** / Bun runtime
- **ClaudeKit Engineer** installed in the project

## How It Works

### Issue Lifecycle

Every issue goes through a defined lifecycle:

```
new → brainstorming → clarifying → planning → plan_posted
→ awaiting_approval → implementing → completed
```

### Step-by-Step Flow

1. **Poll** — Fetches open issues from GitHub via `gh` CLI
2. **Brainstorm** — Invokes Claude to analyze the issue, ask clarifying questions
3. **Clarify** — If Claude needs more info, posts questions as a comment and waits for the author's reply
4. **Plan** — Once the problem is understood, Claude generates an implementation plan
5. **Post Plan** — Posts the plan as a GitHub comment, transitions to `awaiting_approval`
6. **Approval** — Monitors for the repo owner's approval comment (uses Claude to detect approval intent)
7. **Implement** — Creates a branch, runs `ck cook` with the plan, pushes code
8. **PR** — Opens a pull request linking the original issue
9. **Complete** — Posts a completion comment with the PR link

### Single-Repo vs Multi-Repo

- **Single-repo**: Run `ck watch` inside a git repository. Monitors that repo's issues.
- **Multi-repo**: Run `ck watch` in a parent directory containing multiple git repos. Discovers and monitors all sub-repos.

## Configuration

Stored in `.ck.json` under the `watch` key:

```json
{
  "watch": {
    "pollIntervalMs": 30000,
    "maxTurnsPerIssue": 10,
    "maxIssuesPerHour": 10,
    "excludeAuthors": [],
    "showBranding": true,
    "logMaxBytes": 0,
    "timeouts": {
      "brainstormSec": 300,
      "planSec": 600,
      "implementSec": 18000
    }
  }
}
```

| Key | Default | Description |
|-----|---------|-------------|
| `pollIntervalMs` | `30000` | How often to check for new issues (min 10s) |
| `maxTurnsPerIssue` | `10` | Max conversation turns before giving up |
| `maxIssuesPerHour` | `10` | Rate limit for new issue processing |
| `excludeAuthors` | `[]` | GitHub usernames to ignore |
| `showBranding` | `true` | Include ClaudeKit branding in posted comments |
| `logMaxBytes` | `0` | Log file size limit (0 = unlimited) |
| `timeouts.brainstormSec` | `300` | Brainstorm phase timeout (5 min) |
| `timeouts.planSec` | `600` | Plan generation timeout (10 min) |
| `timeouts.implementSec` | `18000` | Implementation timeout (5 hours) |

## Examples

### Basic Usage

```bash
# Start watching current repo
ck watch

# Custom poll interval (60 seconds)
ck watch --interval 60000

# Test without posting to GitHub
ck watch --dry-run

# Restart if already running
ck watch --force
```

### Overnight Workflow

```bash
# Start watch before leaving for the night
ck watch --verbose 2>&1 | tee watch-session.log

# Next morning: check what happened
cat ~/.claudekit/logs/ck-watch-*.log
```

### Multi-Repo Setup

```bash
# Directory structure:
# ~/projects/
#   ├── api-server/      (git repo)
#   ├── web-frontend/    (git repo)
#   └── shared-utils/    (git repo)

cd ~/projects
ck watch
# Monitors all 3 repos simultaneously
```

## Security Features

- **Process Lock** — Only one `ck watch` instance can run at a time (`~/.claudekit/locks/ck-watch.lock`)
- **Credential Scanning** — Blocks posting if secrets are detected in generated content
- **Input Sanitization** — Truncates input to 8K characters, strips injection patterns
- **Own-Comment Detection** — Uses HTML markers (`<!-- ck-watch-bot -->`) to avoid responding to its own comments
- **Mention Stripping** — Removes `@mentions` from AI output to prevent unwanted notifications
- **stdin-Only Claude** — Passes prompts via stdin, never as command-line arguments

## State Persistence

Runtime state is saved to `.ck.json` under `watch.state`:

- Active issues with their current lifecycle status
- Conversation history (capped at 10 messages per issue)
- Implementation queue (approved issues waiting to be implemented)
- Processed issues list (capped at 500 to prevent unbounded growth)

On graceful shutdown (`Ctrl+C`), in-progress issues revert to safe states so they can be resumed on next run.

## Logging

Log files are written to `~/.claudekit/logs/`:

```
~/.claudekit/logs/ck-watch-20260327.log
```

Logs include timestamps, log levels, and structured context for each action.

## Troubleshooting

### "Watch daemon already running"

Another `ck watch` process is active. Use `--force` to kill it and restart:

```bash
ck watch --force
```

### Issues not being picked up

- Verify `gh` authentication: `gh auth status`
- Check the repo has open issues: `gh issue list`
- Review excluded authors in `.ck.json`

### Implementation fails

- Check `timeouts.implementSec` — complex issues may need more than 5 hours
- Review the log file for error details
- The issue will revert to `awaiting_approval` so you can retry

### Comments not posted

- Ensure `gh` has write permissions to the repository
- Check `--dry-run` is not enabled
- Review logs for credential scanning blocks

## When to Use

- **Overnight processing** — Queue up issues before bed, wake up to PRs
- **Continuous triage** — Let Claude brainstorm and plan while you focus on other work
- **Multi-repo monitoring** — Watch all your team's repos from a single terminal
- **Hackathon mode** — Rapid prototyping with AI-assisted implementation

## Limitations

- Sequential implementation only (one issue at a time)
- Requires repo owner approval for each implementation
- GitHub API rate limits apply via `gh` CLI
- Claude CLI must be available and authenticated

## Related

- [CLI Overview](/docs/cli)
- [ck content](/docs/cli/content) — Autonomous content creation from git activity
