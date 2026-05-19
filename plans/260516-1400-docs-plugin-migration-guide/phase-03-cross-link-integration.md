# Phase 03 — Cross-Link Integration

## Context Links

- Link rules: `claudekit-docs/CLAUDE.md` § "CRITICAL: Link Guidelines"
- Link validator: `src/integrations/build-time-internal-link-validator.ts` (fails build on broken refs)
- Target slug from Phase 2: `/docs/engineer/configuration/plugin-migration`

## Overview

- Priority: P2
- Status: pending
- Description: add cross-references from install/upgrade/CLI/support pages so users hit the migration guide from natural entry points.

## Key Insights

- Discoverability is the real risk — a guide nobody finds is worse than no guide. Cross-linking enforces the SEO + journey.
- Build validator catches typos; safe to add many small edits in one PR.
- Each edit is small (admonition or 1-line link); low collision risk.

## Requirements

**Functional**
- Each page below gains exactly one link to the migration guide, contextually placed.
- All links use absolute path `/docs/engineer/configuration/plugin-migration`.

**Non-functional**
- Edits are minimal — do not restructure host pages.
- Preserve existing tone of each page.

## Architecture

| Host page | Path | Edit type | Location in page |
|-----------|------|-----------|------------------|
| Installation | `src/content/docs/getting-started/installation.md` | admonition `:::note` | end of "Installing ClaudeKit CLI" |
| Upgrade Guide | `src/content/docs/getting-started/upgrade-guide.md` | new H3 subsection | under "Upgrading ClaudeKit" |
| CLI Update | `src/content/docs/cli/update.md` | admonition `:::tip` | first section |
| CLI Doctor | `src/content/docs/cli/doctor.md` | sentence + link | install-mode section (or add one if absent) |
| Troubleshooting index | `src/content/docs/support/troubleshooting/index.md` | bullet item | "Common Issues" list |
| FAQ | `src/content/docs/support/faq.md` | 2-3 new Q&A entries | end of Install/Upgrade section |

## Related Code Files

- Modify (6): listed in Architecture table above
- Read-only: `src/integrations/build-time-internal-link-validator.ts`

## Implementation Steps

1. `installation.md` — append admonition: "Engineer Kit now ships as a Claude Code plugin. See [Plugin Migration](/docs/engineer/configuration/plugin-migration)."
2. `upgrade-guide.md` — add `### Engineer Kit plugin migration` section linking + 2-sentence summary.
3. `cli/update.md` — admonition near top: "First `ck update` after vX.Y.Z silently migrates legacy installs to plugin format. Details: [Plugin Migration](...)."
4. `cli/doctor.md` — add bullet "Install mode (legacy/plugin/mixed/fresh)" referencing migration guide; if section already added by #692 docs follow-up, just append link.
5. `support/troubleshooting/index.md` — add bullet "Slash menu shows no hint for `/ck:*` → [Plugin Migration](...)."
6. `support/faq.md` — add Q&A: "Do I need to do anything for the plugin migration?" + "Can I keep using `~/.claude/skills/`?"
7. `bun run build` — verify link validator clean.
8. `grep -rn "/docs/engineer/configuration/plugin-migration" src/content/docs/` — confirm 6+ refs.

## Todo List

- [ ] Edit installation.md
- [ ] Edit upgrade-guide.md
- [ ] Edit cli/update.md
- [ ] Edit cli/doctor.md
- [ ] Edit support/troubleshooting/index.md
- [ ] Edit support/faq.md
- [ ] `bun run build` passes
- [ ] grep confirms 6 cross-links

## Success Criteria

- 6 host pages contain a link to the migration guide
- Build exits 0
- No broken-link warnings
- Manual nav: every host page renders correctly with new link

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Page edits conflict with parallel #692 doctor docs work | Medium | Low | Coordinate via SHARED-CONTEXT; this phase touches `cli/doctor.md` last and rebases if needed |
| Admonition syntax error breaks build on host page | Low | Medium | Validate each edit with `bun run build` after each file |
| Link validator misses relative-path regression | Low | High | Validator scope covers `[text](/...)` + `href="/..."` per CLAUDE.md; both forms covered |

## Security Considerations

- N/A (docs-only text edits)

## Next Steps

- Phase 04 (changelog + Discord) can run in parallel with this phase — no file overlap.
- Phase 05 build-verifies everything end to end.
