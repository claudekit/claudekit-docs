# Phase 01 — Asset & Screenshot Prep

## Context Links

- Shared context: `/Users/kaitran/claudekit/plans/260516-1400-plugin-migration-epic-shared/SHARED-CONTEXT.md`
- Original brainstorm refs: `/Users/kaitran/.claude/image-cache/df199c90-4fe0-4c8c-9855-6a714331e25b/` (MISSING — re-capture required)
- Asset rules: `/Users/kaitran/claudekit/claudekit-docs/CLAUDE.md` § "Static Assets"
- Existing asset dir: `public/docs/screenshots/`

## Overview

- Priority: P2
- Status: pending
- Description: locate or re-capture 7 PNGs demonstrating plugin slash-menu behavior, optimize, place under `public/docs/screenshots/plugin-migration/`.

## Key Insights

- Original cache dir does NOT exist on disk — must re-capture from a real CC session against a plugin-installed `ck`.
- Astro serves only from `public/`. Markdown ref form: `![](/docs/screenshots/plugin-migration/<file>.png)`.
- 7 needed: legacy `/ck-plan` no-hint, legacy `/ck:plan` no-match, plugin `/ck:plan` with hint, `claude plugin list` output, `ck doctor` install-mode legacy, `ck doctor` plugin, `ck update` silent migration tail.

## Requirements

**Functional**
- 7 PNGs at `public/docs/screenshots/plugin-migration/` with descriptive kebab-case names
- Each < 300 KB (optimized via pngquant/oxipng)
- Alt text drafted per image

**Non-functional**
- No secrets in screenshots (scrub HOME, tokens, machine names)
- Consistent terminal theme (dark, One Dark Pro to match site)

## Architecture

```
public/docs/screenshots/plugin-migration/
├── slash-menu-legacy-no-hint.png
├── slash-menu-legacy-no-match.png
├── slash-menu-plugin-with-hint.png
├── claude-plugin-list.png
├── ck-doctor-mode-legacy.png
├── ck-doctor-mode-plugin.png
└── ck-update-silent-migration.png
```

## Related Code Files

- Create: 7 PNGs under `public/docs/screenshots/plugin-migration/`
- Create: `plans/260516-1400-docs-plugin-migration-guide/screenshot-alt-text.md` (working notes, not shipped)

## Implementation Steps

1. Confirm with user whether original 7 PNGs exist elsewhere (Discord, Drive, another cache UUID). If yes, copy → optimize → place.
2. If not: provision plugin-installed test env (`ck init` post-plugin release on `@beta`); capture each scenario.
3. Scrub: blur usernames/paths via ImageMagick if needed.
4. Optimize: `pngquant --quality=70-90 --strip` then `oxipng -o 4`.
5. Place under `public/docs/screenshots/plugin-migration/`.
6. Verify with the snippet in `CLAUDE.md` § Static Assets (loop checks each ref resolves).

## Todo List

- [ ] Confirm screenshot source (re-capture vs locate)
- [ ] Capture / collect 7 scenarios
- [ ] Scrub PII
- [ ] Optimize PNGs (<300 KB each)
- [ ] Place under `public/docs/screenshots/plugin-migration/`
- [ ] Draft alt text for each

## Success Criteria

- `ls public/docs/screenshots/plugin-migration/ | wc -l` → 7
- All files < 300 KB
- Alt text drafted and reviewed
- Asset-resolution loop in `CLAUDE.md` reports no MISSING for the new paths

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Original PNGs unrecoverable | High | Medium | Re-capture from `@beta` install — explicit step 2 |
| PII leak in terminal capture | Medium | High | Mandatory scrub step before commit |
| Oversized PNGs blow up page load | Low | Low | Quality gate < 300 KB enforced |

## Security Considerations

- Scrub `~/$USER`, machine hostnames, Tailscale IPs, OAuth fragments, file paths revealing private repo names from terminal captures.

## Next Steps

- Unblocks Phase 02 (MDX references the screenshots).
- Dependency: requires #687–#693 shipped to `@beta` so plugin install actually works on capture machine.
