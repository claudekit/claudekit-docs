---
title: "ck content"
description: "Autonomous content daemon that scans git activity and publishes to social media platforms"
section: cli
order: 11
published: true
---

# ck content

Autonomous content creation daemon. Scans git activity (commits, PRs, releases), generates platform-specific social media posts with Claude, and publishes to X/Twitter and Facebook.

## Overview

`ck content` is a background daemon that turns your development activity into social media content. It monitors git events across your repositories, uses Claude to craft engaging posts tailored to each platform, and publishes them on a configurable schedule. Supports review workflows (auto, manual, hybrid) and tracks engagement metrics for self-improvement.

## Syntax

```bash
ck content <subcommand> [options]
```

### Subcommands

| Command | Description |
|---------|-------------|
| `ck content start` | Launch the content daemon |
| `ck content stop` | Stop a running daemon |
| `ck content status` | Show daemon state, config summary, and last scan time |
| `ck content logs` | Print today's content log |
| `ck content setup` | Interactive onboarding wizard for platform configuration |
| `ck content queue` | List pending review items |
| `ck content approve <id>` | Approve a content item for publishing |
| `ck content reject <id> [reason]` | Reject a content item |

### Global Options

| Flag | Default | Description |
|------|---------|-------------|
| `--dry-run` | `false` | Generate content but never publish |
| `--verbose` | `false` | Enable debug output |
| `--force` | `false` | Kill existing daemon and start fresh |
| `--tail` | `false` | Follow log output in real-time (for `logs` subcommand) |

## Prerequisites

- **GitHub CLI** (`gh`) installed and authenticated
- **Git** repository (or directory containing git repos)
- **Platform API credentials** configured via `ck content setup`:
  - X/Twitter: API key, API secret, access token, access secret
  - Facebook: Page access token, Page ID

## How It Works

### Content Pipeline

```
Git Scan → Event Classification → Content Creation → Review → Publish → Engage
```

### Step-by-Step Flow

1. **Git Scan** — Scans repositories for new commits, merged PRs, tags, releases, and completed plans
2. **Event Classification** — Filters noise, classifies events by importance (high/medium/low)
3. **Content Creation** — Claude generates platform-specific posts with hashtags, hook lines, and CTAs
4. **Review** — Based on `reviewMode`:
   - `auto` — Publishes immediately if quality checks pass
   - `manual` — Queues for human approval via `ck content queue/approve/reject`
   - `hybrid` — Auto-publishes high-confidence content, queues borderline items
5. **Publish** — Posts to enabled platforms respecting rate limits and quiet hours
6. **Engagement Tracking** — Periodically checks post performance and feeds insights back into content generation

### Supported Git Events

| Event Type | Trigger | Example |
|-----------|---------|---------|
| `commit` | New commits on default branch | Feature commits, bug fixes |
| `pr_merged` | Pull request merged | Feature PRs, dependency updates |
| `tag` | New git tag created | Version releases |
| `release` | GitHub release published | Major releases |
| `plan_completed` | ClaudeKit plan marked done | Milestone completions |

### Supported Platforms

| Platform | Post Types | Limits |
|----------|-----------|--------|
| **X/Twitter** | Single posts, threads (up to 6 parts) | 280 chars/post, configurable max posts/day |
| **Facebook** | Page posts | Configurable max posts/day |

## Configuration

Stored in `.ck.json` under the `content` key:

```json
{
  "content": {
    "enabled": false,
    "pollIntervalMs": 60000,
    "platforms": {
      "x": {
        "enabled": false,
        "maxPostsPerDay": 5,
        "threadMaxParts": 6
      },
      "facebook": {
        "enabled": false,
        "maxPostsPerDay": 3
      }
    },
    "reviewMode": "auto",
    "schedule": {
      "timezone": "UTC",
      "quietHoursStart": "23:00",
      "quietHoursEnd": "06:00"
    },
    "selfImprovement": {
      "enabled": true,
      "engagementCheckIntervalHours": 6,
      "topPerformingCount": 10
    },
    "firstScanLookbackDays": 30,
    "maxContentPerDay": 10,
    "contentDir": "~/.claudekit/content/",
    "dbPath": "~/.claudekit/content.db"
  }
}
```

### Key Configuration Options

| Key | Default | Description |
|-----|---------|-------------|
| `enabled` | `false` | Master switch (set via `ck content setup`) |
| `pollIntervalMs` | `60000` | Git scan interval (1 minute) |
| `reviewMode` | `auto` | Content approval mode: `auto`, `manual`, `hybrid` |
| `schedule.timezone` | `UTC` | Timezone for quiet hours |
| `schedule.quietHoursStart` | `23:00` | No publishing after this time |
| `schedule.quietHoursEnd` | `06:00` | Resume publishing after this time |
| `firstScanLookbackDays` | `30` | Days to scan on first run |
| `maxContentPerDay` | `10` | Global daily post limit across all platforms |
| `selfImprovement.enabled` | `true` | Learn from engagement metrics |

## Examples

### Getting Started

```bash
# Interactive setup — configure platforms and API keys
ck content setup

# Start the daemon
ck content start

# Check status
ck content status
```

### Manual Review Workflow

```bash
# Set reviewMode to "manual" in .ck.json, then:
ck content start

# Check pending content
ck content queue

# Approve or reject
ck content approve 42
ck content reject 43 "Too promotional"
```

### Monitoring

```bash
# View today's logs
ck content logs

# Follow logs in real-time
ck content logs --tail

# Test without publishing
ck content start --dry-run --verbose
```

### Daemon Management

```bash
# Stop the daemon
ck content stop

# Force restart
ck content start --force
```

## Content Lifecycle

Each piece of content flows through these states:

```
draft → scheduled → reviewing → approved → publishing → published
                                                      → failed (retries up to 3x within 24h)
```

## Database

Content data is stored in a SQLite database at `~/.claudekit/content.db`:

- **git_events** — Tracked git activity with importance classification
- **content_items** — Generated posts with platform, text, hashtags, status
- **publications** — Published post references (post ID, URL, timestamp)

Data retention cleanup runs automatically every 24 hours.

## Security

- **Process Lock** — Only one daemon instance at a time (`~/.claudekit/locks/ck-content.lock`)
- **Credential Isolation** — Platform API keys stored separately, never in git
- **Rate Limiting** — Per-platform daily limits and configurable quiet hours
- **Retry Protection** — Failed content creation retries max 3 times, failed publishing retries within 24h window

## Troubleshooting

### "Content engine not enabled"

Run the setup wizard first:

```bash
ck content setup
```

### "Content daemon already running"

Stop or force-restart:

```bash
ck content stop
# or
ck content start --force
```

### Posts not publishing

- Verify platform API credentials via `ck content setup`
- Check quiet hours in config — posts won't publish during quiet hours
- Review `maxPostsPerDay` limits
- Check logs: `ck content logs --tail`

### No content generated

- Ensure the repo has recent git activity
- Check `firstScanLookbackDays` if this is the first run
- Review event classification in logs — some events may be filtered as noise

## When to Use

- **Developer advocacy** — Auto-share your team's shipping velocity
- **Open source projects** — Keep followers updated on releases and features
- **Changelog broadcasting** — Turn releases into social announcements
- **Content marketing** — Generate draft posts from development activity

## Limitations

- Platforms currently limited to X/Twitter and Facebook
- Requires platform API keys (developer accounts)
- Content quality depends on git commit message quality
- Self-improvement requires sufficient published post history

## Related

- [CLI Overview](/docs/cli)
- [ck watch](/docs/cli/watch) — Autonomous GitHub issue monitor
