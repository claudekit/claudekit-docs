# Plan Summary: ClaudeKit Documentation Update

**Plan ID**: 251129-1918-docs-commands-vi-translation
**Created**: 2025-11-29
**Status**: Ready for Execution

## Quick Stats

- **14 new EN command pages** (missing from docs)
- **34 VI files** to migrate (flat→nested structure)
- **26 VI translations** needed (existing + new EN docs)
- **Total files**: 74 (14 new + 34 migrate + 26 translate)

## Execution Strategy

### Wave 1: EN Documentation (Parallel)
Phases 01-06 can run in parallel:
- **Phase 01**: Core commands (code, brainstorm)
- **Phase 02**: Plan commands (routing, parallel)
- **Phase 03**: Fix commands (routing, parallel)
- **Phase 04**: Scout/Review (scout:ext, review:codebase)
- **Phase 05**: Skills (add, optimize, optimize:auto)
- **Phase 06**: Advanced (bootstrap/cook/code parallel variants)

### Wave 2: VI Structure (Sequential)
Must complete Wave 1 first:
- **Phase 07**: Migrate 34 VI files from flat to nested structure

### Wave 3: VI Translation (Sequential)
Must complete Wave 1 + Wave 2:
- **Phase 08**: Translate 26 missing VI pages

## Critical Paths

1. **Phase 07 blocks Phase 08** (structure migration required)
2. **Phases 01-06 completion** required for Phase 08 Group B (new docs translation)
3. **Quality gate**: `bun run build` must pass before any commit

## File Breakdown

### New EN Documentation (14 files)
```
commands/core/
  code.md                           # Phase 01
  brainstorm.md                     # Phase 01
  scout-ext.md                      # Phase 04
  review-codebase.md                # Phase 04
  bootstrap-auto-parallel.md        # Phase 06
  cook-auto-parallel.md             # Phase 06
  code-parallel.md                  # Phase 06

commands/plan/
  index.md (update)                 # Phase 02
  parallel.md                       # Phase 02

commands/fix/
  index.md (update)                 # Phase 03
  parallel.md                       # Phase 03

commands/skill/
  add.md                            # Phase 05
  optimize.md                       # Phase 05
  optimize-auto.md                  # Phase 05
```

### VI Structure Migration (34 files)
- 19 commands: flat → nested (core, docs-cmd, git, integrate, plan, skill)
- 15 skills: flat → categorized (ai, auth, backend, ecommerce, frontend, tools)

### VI Translation (26 files)
- 4 Getting Started
- 2 Support
- 3 Workflows
- 1 Changelog
- 16 New command docs (from Phases 01-06)

## Success Metrics

- [ ] 14 new EN pages created, published=true
- [ ] 34 VI files migrated to nested structure
- [ ] 26 VI translations completed
- [ ] `bun run build` passes
- [ ] All SEO descriptions 150-160 chars
- [ ] EN/VI structural parity achieved

## Key Decisions Needed

1. **VI URL Migration**: Add redirects for SEO?
2. **Translation Approach**: AI + review or human?
3. **EN Freeze**: Lock during VI migration?
4. **Rollout**: Announce breaking changes?

## Next Steps

1. Review plan with stakeholders
2. Decide on translation approach (Question 2)
3. Execute Wave 1 (Phases 01-06 in parallel)
4. Execute Wave 2 (Phase 07)
5. Execute Wave 3 (Phase 08)

## Plan Files

- **Overview**: `plan.md`
- **Phase 01**: `phase-01-core-commands.md`
- **Phase 02**: `phase-02-plan-commands.md`
- **Phase 03**: `phase-03-fix-commands.md`
- **Phase 04**: `phase-04-scout-review-commands.md`
- **Phase 05**: `phase-05-skill-commands.md`
- **Phase 06**: `phase-06-bootstrap-cook-commands.md`
- **Phase 07**: `phase-07-vi-structure-migration.md`
- **Phase 08**: `phase-08-vi-translation.md`

All files at: `/mnt/d/www/claudekit/claudekit-docs/plans/251129-1918-docs-commands-vi-translation/`
