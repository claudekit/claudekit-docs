# Phase 02 - Validation And Rollout

## Context Links

- Phase 01: `./phase-01-site-trust-signals.md`
- Validation commands: `bun run build`

## Overview

Priority: High
Status: Pending
Brief: Verify the generated site outputs and document what still needs to happen outside the repo.

## Key Insights

- This repo can improve trust posture but cannot directly clear FortiGuard categorization.
- The original engineer issue should receive exactly one status update only after rollout is complete.

## Requirements

- Build must pass.
- Generated output must include sitemap and trust files.
- Final handoff must clearly separate repo work from infra/reputation work.

## Implementation Steps

1. Run build and inspect output files.
2. Check generated HTML for canonical and social tags.
3. Summarize any remaining non-repo actions.
4. Defer engineer-issue comment until `dev` and then `main` rollout are done.

## Todo List

- [ ] Build passes
- [ ] Output files verified
- [ ] Remaining external actions listed
- [ ] Cross-repo status update explicitly deferred

## Success Criteria

- Repo changes are PR-ready.
- Verification notes are concrete.
- No premature comment is posted to `claudekit-engineer#639`.
