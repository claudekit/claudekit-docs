---
title: "Content Automation"
description: "Automate social media content from git events — ck content monitors repos and publishes to X and Facebook via AI."
section: cli
order: 10
---

# Content Automation

> Daemon that monitors git repositories, generates AI-powered social media content, and publishes to X (Twitter) and Facebook automatically.

## Quick Start

```bash
# Interactive onboarding setup
ck content setup

# Start the daemon
ck content start

# Check daemon status
ck content status

# View recent logs
ck content logs --tail

# Approve pending content
ck content approve <id>

# Stop the daemon
ck content stop
```

## Subcommands

| Subcommand | Purpose | Key Options |
|------------|---------|-------------|
| `start` | Launch the scan→create→review→publish cycle | `--force`, `--verbose`, `--dry-run` |
| `stop` | Graceful shutdown via SIGTERM | — |
| `status` | Show running state, config, last scan time | — |
| `logs` | View or follow today's log file | `--tail` |
| `setup` | Interactive onboarding — platforms, credentials, schedule | — |
| `queue` | List content items pending review | — |
| `approve <id>` | Approve content item for publishing | — |
| `reject <id>` | Reject content item | `--reason <text>` |

## Architecture

The daemon runs a six-phase loop on each poll cycle:

1. **Git Scanner** — Detects commits, merged PRs, tags, releases, and plan completions across monitored repos
2. **Content Creator** — Sends event details to Claude CLI, parses JSON response with 4-strategy fallback
3. **Review Manager** — Applies review mode (auto/manual/hybrid) and checks daily post limits
4. **Publisher** — Posts to X via `xurl` CLI or Facebook via Graph API v21.0
5. **Engagement Tracker** — Polls likes, shares, comments, and impressions on published posts
6. **Self-Improvement** — Extracts patterns from top-performing posts to refine future prompts

State is persisted to `~/.claudekit/content.state.json` after each phase and on shutdown.

## Configuration

Configure via `.ck.json` in your project root:

```json
{
  "content": {
    "enabled": true,
    "pollIntervalMs": 60000,
    "reviewMode": "hybrid",
    "maxContentPerDay": 10,
    "platforms": {
      "x": {
        "enabled": true,
        "maxPostsPerDay": 5,
        "threadMaxParts": 6
      },
      "facebook": {
        "enabled": true,
        "pageId": "YOUR_PAGE_ID",
        "maxPostsPerDay": 3
      }
    },
    "schedule": {
      "timezone": "UTC",
      "quietHoursStart": "23:00",
      "quietHoursEnd": "06:00"
    },
    "selfImprovement": {
      "enabled": true,
      "engagementCheckIntervalHours": 6,
      "topPerformingCount": 10
    }
  }
}
```

## Review Modes

### Auto
Publishes immediately after generation. Useful for testing:

```bash
ck content start  # Content publishes without approval
```

### Manual
Requires explicit approval for every item:

```bash
ck content queue             # List pending items
ck content approve 42        # Approve item
ck content reject 42 --reason "Too promotional"
```

### Hybrid (Recommended)
Auto-publishes high-confidence content (score > 85%), holds uncertain items for manual review. Confidence is scored on keyword relevance, length, and grammar.

## Platform Adapters

### X / Twitter

**Requirements:** `xurl` CLI installed and authenticated.

- Checks daily post limit and quiet hours before publishing
- Supports threads: splits long content into up to 6 reply-chained parts
- Captures post ID and URL, stores in `publications` table

### Facebook

**Requirements:** Page Access Token with `pages_manage_metadata` scope, Page ID in config.

- Posts via Graph API v21.0 (`POST /me/feed`)
- Supports message, picture URL, and link
- Rate limited to configured `maxPostsPerDay` with exponential backoff on 429s

## Git Events Detected

| Event Type | Trigger |
|------------|---------|
| `commit` | New commits since last scan |
| `pr_merged` | Pull requests merged (GitHub API) |
| `plan_completed` | Updates to `.claude/plans/` directory |
| `tag` | New git tags |
| `release` | GitHub releases published |

Events are scored for content-worthiness using keywords (`feature`, `fix`, `breaking`, `release`), PR size, and author reputation. Already-processed event IDs are tracked to prevent duplicates.

## Security

- **PID lock** at `~/.claudekit/locks/ck-content.lock` prevents multiple daemon instances
- **No token logging** — platform credentials never written to logs or CLI output
- **Database** at `~/.claudekit/content.db` uses WAL mode and `0600` permissions
- **State writes** are atomic to prevent partial updates on crash

## Troubleshooting

```bash
# Daemon won't start — check stale lock
ls ~/.claudekit/locks/ck-content.lock
ck content start --force

# Content not generating — verify Claude CLI
which ck
echo "Hello" | ck --stream

# Publishing failures — check platform CLIs
which xurl && xurl status          # X/Twitter
# Facebook: verify token has pages_manage_metadata scope
```

## Related

- [Watch - Issue Auto-Responder](/docs/cli/watch) — GitHub issue automation
- [System Architecture](/docs/cli/architecture) — CLI technical design
- [Configuration](/docs/cli/configuration) — Global CLI config reference
