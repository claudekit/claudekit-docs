# Phase 05 — Build Verify & PR

## Context Links

- Docs-sync rule: `/Users/kaitran/.claude/rules/claudekit/docs-sync-workflow.md` (branch pairing dev↔dev, main↔main)
- Personal workflow: `/Users/kaitran/.claude/rules/claudekit/claudekit-personal-workflow.md` (`kai/` branch prefix)
- CLAUDE.md docs gate: `bun run build` must pass

## Overview

- Priority: P1
- Status: pending
- Description: full-site build, link validator clean, PR opened against the matching branch of the source PR target.

## Key Insights

- Branch pairing is MANDATORY per docs-sync-workflow. Source CLI/Engineer epic PRs target `dev` → docs PR MUST target `dev`. When promoted to `main`, separate docs PR to `main`.
- Build validator (`build-time-internal-link-validator.ts`) is the hard gate; failures block merge.
- Monorepo submodule pointer commit in `~/claudekit/` separate from docs PR.

## Requirements

**Functional**
- `bun run build` exits 0 on local
- PR opened with cross-reference to engineer #694 and CLI epic
- After merge: monorepo submodule pointer updated

**Non-functional**
- PR description follows docs-sync template (links source PR, lists changed pages)
- Conventional commit prefix `docs:` (no version bump)

## Architecture

```
local dev branch (kai/docs/plugin-migration-guide)
  └── commits from Phase 02/03/04
       └── bun run build (gate)
            └── git push origin kai/docs/plugin-migration-guide
                 └── gh pr create --base dev
                      └── (on merge) monorepo submodule bump on dev
```

## Related Code Files

- All files modified/created in Phases 01-04
- Modify (monorepo): `~/claudekit/` submodule pointer for `claudekit-docs`

## Implementation Steps

1. From `~/claudekit/claudekit-docs/`, `git checkout dev && git pull origin dev`.
2. `git checkout -b kai/docs/plugin-migration-guide`.
3. Stage commits per phase (granularity: 1 commit per phase OR squash — author choice; prefer 3 commits: assets, mdx+cross-links, changelog+announcement).
4. `bun install && bun run build` — must pass; fix any link validator failures.
5. `git push origin kai/docs/plugin-migration-guide`.
6. `gh pr create --base dev --title "docs: ClaudeKit plugin migration guide" --body <ref engineer#694 + sibling CLI PRs + list of changed pages>`.
7. After merge: `cd ~/claudekit/ && git checkout dev && git pull && cd claudekit-docs && git pull origin dev && cd .. && git add claudekit-docs && git commit -m "chore(deps): update claudekit-docs submodule" && git push origin dev`.
8. When CLI/engineer PRs promote dev→main, repeat steps 1-7 against `main` branch.

## Todo List

- [ ] Branch from dev
- [ ] All phase commits staged
- [ ] `bun run build` clean
- [ ] Push branch
- [ ] PR opened against dev
- [ ] PR description cross-references engineer #694 + CLI epic
- [ ] Post-merge: monorepo submodule pointer bumped
- [ ] Repeat for main when source PRs promote

## Success Criteria

- PR merged into `claudekit-docs` `dev`
- No broken links in production preview
- Monorepo submodule pointer updated on `dev`
- Docs-impact statement appears in PR description: `Docs impact: major / Action: created PR #N in claudekit-docs`

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Build fails on link validator | Medium | High | Fix per validator output; absolute paths only |
| Branch mismatch (push to main when source still on dev) | Low | High | Hard rule: `git branch` check before push |
| Monorepo submodule bump forgotten | Medium | Low | Step 7 in checklist; not optional |
| `categoryOrder` for `configuration` missing in nav config | Low | Medium | Pre-check during Phase 02; add to `sidebar-nav-section-config.ts` if absent |

## Security Considerations

- Final sweep: `git diff` for accidental secrets, paths, IPs before push.

## Next Steps

- Triggers issue #694 close.
- Triggers 1-release-cycle timer before #695 (deprecate legacy install path) becomes actionable.
- Monitor docs-site analytics for migration-guide hit-rate; report back to epic if low.
