# Phase 02 — Author Migration MDX

## Context Links

- Source spec: `/Users/kaitran/claudekit/claudekit-engineer/plans/reports/issues-260420-2210-plugin-migration.md` § "Issue #13"
- Precedent page: `src/content/docs/getting-started/migration-from-commands-to-skills.md`
- Frontmatter schema: `src/content/config.ts` (Zod-validated)
- Nav config: `src/lib/sidebar-nav-section-config.ts` (engineer.categoryOrder includes `configuration`)
- Link rules: `claudekit-docs/CLAUDE.md` § "CRITICAL: Link Guidelines"

## Overview

- Priority: P1
- Status: pending
- Description: write the canonical migration guide page as MDX under `engineer/configuration/`.

## Key Insights

- MDX (not .md) chosen because: admonition components for callouts (`:::note`, `:::warning` via `remark-admonitions`) and code-tabbed snippets reduce duplication for legacy/plugin commands.
- Page placement under `engineer/configuration/` keeps it inside Engineer Kit nav where users browsing install/setup will find it.
- Single page with version-aware callouts (vs version switcher) — no switcher component exists; precedent in `migration-from-commands-to-skills.md` is single-page.
- Frontmatter MUST set `section: engineer`, `category: configuration`, `order` low so it surfaces near other config pages.

## Requirements

**Functional content (5 sections per issue spec)**
1. What changed (one paragraph): EngineerKit shipped as Claude Code plugin; folder names no longer leak into slash menu; hints restored.
2. What users do: single sentence — `ck update` (no flags, no prompts).
3. How to verify: type `/ck:plan` in Claude Code → hint appears in autocomplete; screenshot.
4. Troubleshooting: mixed-state recovery, rollback to legacy, `ck doctor` install-mode output.
5. FAQ: can I still use `~/.claude/skills/`? — yes, but `ck-*` prefixed entries are plugin-managed now and re-installed by the plugin path on update.

**Non-functional**
- Absolute internal links only (`/docs/...`)
- All image refs resolve under `public/`
- < 400 lines markdown

## Architecture

```
Frontmatter (Zod-validated)
  ├── title, description (150-160 chars)
  ├── section: engineer
  ├── category: configuration
  ├── order: 10  (after primary config pages)
  └── published: true

Body
  ├── ## What changed
  ├── ## What you need to do      ← single ck update sentence + code block
  ├── ## How to verify             ← /ck:plan screenshot, claude plugin list
  ├── ## Troubleshooting           ← mixed state, rollback, doctor outputs
  ├── ## FAQ                       ← ~/.claude/skills/ question + others
  └── ## Related                   ← cross-links to install, upgrade, doctor
```

## Related Code Files

- Create: `src/content/docs/engineer/configuration/plugin-migration.mdx`
- Read-only: `src/content/config.ts`, `src/content/docs/getting-started/migration-from-commands-to-skills.md`, `src/plugins/remark-admonitions.mjs`
- Defer (Phase 3): cross-link edits in install/upgrade/cli/support pages

## Implementation Steps

1. Copy frontmatter pattern from `migration-from-commands-to-skills.md`; adjust `section`, `category`, `order`, `title`, `description`.
2. Draft "What changed" paragraph — emphasize the slash-menu folder-name bug + plugin format fix.
3. "What you need to do" — single code block: `ck update`. Add admonition: silent migration, no prompts.
4. "How to verify": embed `slash-menu-plugin-with-hint.png` + `claude-plugin-list.png`; document expected `claude plugin list` line containing `ck`.
5. "Troubleshooting": three subsections — (a) mixed state diagnosed by `ck doctor`, (b) rollback via `ck migrate --legacy` (confirm flag name with #688 owner — see Open Questions), (c) verify failures (plugin disabled, CC < 1.0.33).
6. "FAQ": at minimum the `~/.claude/skills/` question; add 3-5 likely user Qs (does my custom skill break? does `ck init` re-prompt? what about other kits?).
7. "Related": absolute-path links to `/docs/getting-started/installation`, `/docs/getting-started/upgrade-guide`, `/docs/cli/update`, `/docs/cli/doctor`, `/docs/support/troubleshooting`.
8. Run `bun run build`; fix any link-validator failures.

## Todo List

- [ ] Create MDX file with frontmatter
- [ ] Section 1: What changed
- [ ] Section 2: What you do (`ck update`)
- [ ] Section 3: Verify (screenshots embedded)
- [ ] Section 4: Troubleshooting (3 subsections)
- [ ] Section 5: FAQ (5+ Qs)
- [ ] Related links
- [ ] `bun run build` passes
- [ ] Page loads at `/docs/engineer/configuration/plugin-migration` in `bun run dev`

## Success Criteria

- File at `src/content/docs/engineer/configuration/plugin-migration.mdx` exists, valid frontmatter
- `bun run build` exits 0
- Internal link validator reports no broken links
- Page renders in nav under Engineer → Configuration
- All 7 screenshots render

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| MDX admonition syntax differs from precedent | Medium | Low | Use `remark-admonitions` `:::note` form documented in `src/plugins/remark-admonitions.mjs` |
| Rollback flag name (`ck migrate --legacy`?) not finalized | Medium | Medium | Coordinate with #688 owner before merging; placeholder + note if unresolved |
| `category: configuration` may not group under Engineer if no other config pages exist | Low | Low | Pre-check `ls src/content/docs/engineer/configuration/`; add to `categoryOrder` already exists |
| Frontmatter description >160 chars hurts SEO | Low | Low | Use char-count check |

## Security Considerations

- No credentials in code samples
- Verify screenshots scrubbed (Phase 1 owns this gate)

## Next Steps

- Hands off to Phase 03 (cross-link integration in sibling pages)
- Hands off to Phase 04 (changelog + Discord) which references this slug
