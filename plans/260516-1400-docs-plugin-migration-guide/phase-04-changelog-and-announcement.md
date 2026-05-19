# Phase 04 — Changelog & Discord Announcement

## Context Links

- Changelog file: `src/content/docs/changelog/index.md` (hand-maintained — no semantic-release output found in docs repo)
- Discord bot repo: `claudekit/claudekit-discord-bot` (tracker issue venue)
- ClaudeKit assistant note: `~/claudekit/CLAUDE.md` § "ClaudeKit Assistant (Discord Bot + API)"

## Overview

- Priority: P2
- Status: pending
- Description: append a changelog entry referencing the migration guide; draft a Discord announcement; file a tracker issue in claudekit-discord-bot for delivery.

## Key Insights

- Docs changelog is manual append — no CI auto-gen here (`changelog/` has only `index.md`, no release pipeline). CLI's semantic-release output is in CLI repo, not docs.
- No `announcements/` directory exists. Create one OR file a tracker issue. Recommend: tracker issue (delivery channel) + archived copy under `plans/.../announcement-draft.md` (this plan folder).
- Bot post timing must coincide with `@beta` → `@latest` promotion (post-Phase 3 ship).

## Requirements

**Functional**
- Changelog entry under "Latest" listing migration with link to new page
- Draft markdown post for Discord (concise: ~6 lines, link, screenshot reference)
- Tracker issue in `claudekit/claudekit-discord-bot` with announcement body + scheduled date

**Non-functional**
- Changelog entry < 8 lines
- Discord post < 300 words

## Architecture

```
claudekit-docs/
└── src/content/docs/changelog/index.md      [APPEND entry]
└── plans/260516-1400-docs-plugin-migration-guide/
    └── announcement-draft.md                [archived copy of Discord post]

claudekit-discord-bot/  (separate repo)
└── new tracker issue: "post: plugin migration announcement"
    body: full markdown post + scheduled timestamp + link to guide
```

## Related Code Files

- Modify: `src/content/docs/changelog/index.md`
- Create: `plans/260516-1400-docs-plugin-migration-guide/announcement-draft.md`
- External: `gh issue create --repo claudekit/claudekit-discord-bot`

## Implementation Steps

1. Read existing `changelog/index.md` to match entry style (date, version, bullets).
2. Append new entry: "Engineer Kit migrated to Claude Code plugin format" + 2 bullets + link.
3. Draft Discord post in `announcement-draft.md`: TL;DR, single command (`ck update`), how to verify (`/ck:plan` hint), link to guide.
4. File tracker issue in `claudekit-discord-bot` with body = draft + suggested post date.
5. `bun run build` — confirm changelog page still renders.

## Todo List

- [ ] Read changelog/index.md style
- [ ] Append entry + link
- [ ] Draft Discord post (archived in plan folder)
- [ ] File tracker issue in claudekit-discord-bot
- [ ] `bun run build` passes
- [ ] Tracker issue URL recorded in this phase file post-creation

## Success Criteria

- Changelog page contains visible entry with working link
- `announcement-draft.md` exists in plan folder
- Discord tracker issue filed and assigned
- Build exits 0

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Announce before `@latest` promotion → users hit `@beta` only | Medium | High | Tracker issue includes scheduled date tied to npm dist-tag promotion |
| Discord bot lacks scheduling, posts immediately | Medium | Medium | Hold tracker issue OPEN until promotion; maintainer triggers manually |
| Changelog style drift | Low | Low | Mirror most recent existing entry's structure |

## Security Considerations

- Announcement body: no internal infra links, no maintainer-only paths.

## Next Steps

- Phase 05 final build + PR gathers Phase 02/03/04 changes into one docs PR.
- Discord tracker issue blocks on CLI `@latest` promotion (out of docs PR scope).
