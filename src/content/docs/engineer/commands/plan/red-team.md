---
title: /plan:red-team
description: Adversarial plan review — spawn hostile reviewers to find flaws, security holes, and false assumptions
section: engineer
kit: engineer
category: commands/plan
order: 25
published: true
---

# /plan:red-team

Spawn parallel adversarial reviewers to find flaws, security holes, and false assumptions in your plan before implementation begins.

## Syntax

```bash
/plan:red-team                  # Red-team active plan
/plan:red-team [plan-path]      # Red-team specific plan
```

## How It Works

1. **Resolve Plan** - Auto-detects from arguments, active plan context, or prompts user to select
2. **Scale Reviewers** - Spawns 2-4 parallel reviewer subagents based on plan complexity
3. **Adversarial Review** - Each reviewer adopts a hostile persona focused on finding flaws, not praise
4. **Collect Findings** - Gathers all findings, deduplicates, caps at 15 total
5. **Adjudicate** - Each finding dispositioned as Accept or Reject with rationale
6. **User Review** - Presents dispositions for user approval before applying changes
7. **Apply Changes** - Accepted findings applied inline to plan files with `<!-- Red Team -->` markers
8. **Update Plan** - Red Team Review section appended to `plan.md` with summary

## Adversarial Lenses

Each reviewer adopts one hostile persona and looks only through that lens:

| Reviewer | Focus |
|----------|-------|
| **Security Adversary** | Attack vectors, exposed secrets, injection points, auth bypasses, insecure defaults |
| **Failure Mode Analyst** | Race conditions, cascading failures, unhandled edge cases, data loss scenarios |
| **Assumption Destroyer** | Implicit dependencies, unverified constraints, optimistic estimates, missing context |
| **Scope & Complexity Critic** | Underestimated effort, missing phases, integration gaps, unplanned migrations |

## Reviewer Scaling

Reviewer count scales automatically with plan complexity:

| Phase Count | Reviewers Spawned |
|-------------|-------------------|
| 1-3 phases | 2 reviewers |
| 4-6 phases | 3 reviewers |
| 7+ phases | 4 reviewers |

## Finding Format

Each finding is rated by severity:

- **Critical** - Blocks implementation; must address before starting
- **High** - Significant risk; strongly recommended to address
- **Medium** - Notable concern; address if time allows

Findings below Medium are not reported — red-teamers focus on what matters.

## User Review Process

After adjudication, you review each disposition:

```
Finding #1 [CRITICAL] — Security Adversary
"API keys passed as query params will appear in server logs and browser history"
Disposition: Accept — Apply fix to phase-02 auth implementation

Finding #2 [MEDIUM] — Scope Critic
"No database migration strategy for existing 2M rows"
Disposition: Accept — Add migration phase before deployment

Finding #3 [HIGH] — Assumption Destroyer
"Assumes Redis is already provisioned — not in infrastructure plan"
Disposition: Reject — Redis provisioning is handled by DevOps separately

Accept all? [Y/n/review each]
```

Approved findings are then applied to the relevant phase files.

## Example

```bash
/plan:red-team plans/260201-payment-integration/
```

**Output:**
```
Red Team Review — plans/260201-payment-integration/
Plan complexity: 8 phases → spawning 4 reviewers

[Spawning parallel reviewers...]
  Security Adversary         [done]
  Failure Mode Analyst       [done]
  Assumption Destroyer       [done]
  Scope & Complexity Critic  [done]

Collected 23 findings → deduplicated → capped at 15
Adjudicating...

Results:
  Critical  2 (Accept: 2)
  High      5 (Accept: 4, Reject: 1)
  Medium    8 (Accept: 5, Reject: 3)

Presenting for user review...
```

After user approval, accepted findings are written inline to phase files and a `## Red Team Review` section is appended to `plan.md`.

## Related Commands

- [/plan:validate](/docs/engineer/commands/plan/validate) - Interview-based validation before red-teaming
- [Planning skill](/docs/engineer/skills/plan) - Full consolidated planning workflow
