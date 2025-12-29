---
title: Code Review Skill
description: Guide proper code review practices with technical rigor, evidence-based claims, and verification gates
section: engineer
kit: engineer
category: skills/tools
order: 8
published: true
---

# Code Review Skill

Enforce verification gates and technical rigor across three critical practices: receiving feedback, requesting reviews, and proving completion claims.

## Core Principle

**Technical correctness over social comfort.** Verify before implementing. Ask before assuming. Evidence before claims. Always honor YAGNI, KISS, and DRY principles.

## When to Use

**Always use for:**
- Receiving code review feedback (especially unclear or questionable items)
- Completing tasks in subagent-driven development (after EACH task)
- Before making ANY completion/success claims (tests pass, build succeeds, bug fixed)

**Especially when:**
- Feedback conflicts with existing decisions or lacks context
- About to commit, push, or create PRs without fresh verification
- External reviewers suggest "proper" features without usage evidence

## The Process

### 1. Receiving Feedback
**Protocol:** READ → UNDERSTAND → VERIFY → EVALUATE → RESPOND → IMPLEMENT

**Rules:**
- ❌ No performative agreement ("You're right!", "Great point!", "Thanks for...")
- ❌ No implementation before verification
- ✅ Restate requirement, ask questions, push back technically
- ✅ If unclear: STOP and ask for clarification first
- ✅ YAGNI check: grep for usage before implementing

**Source handling:**
- Human partner: Trusted - implement after understanding
- External reviewer: Verify technically, check for breakage, push back if wrong

### 2. Requesting Reviews
**When:** After each task, major features, before merge

**Steps:**
```bash
# 1. Get git SHAs
BASE_SHA=$(git rev-parse HEAD~1)
HEAD_SHA=$(git rev-parse HEAD)

# 2. Dispatch code-reviewer subagent with:
# - WHAT_WAS_IMPLEMENTED
# - PLAN_OR_REQUIREMENTS
# - BASE_SHA, HEAD_SHA
# - DESCRIPTION
```

**Act on feedback:**
- Critical: Fix immediately
- Important: Fix before proceeding
- Minor: Note for later

### 3. Verification Gates
**The Iron Law:** NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE

**Gate function:**
```
IDENTIFY command → RUN full command → READ output → VERIFY confirms claim → THEN claim
```

**Evidence requirements:**

| Claim | Evidence Required |
|-------|-------------------|
| Tests pass | Test output shows 0 failures |
| Build succeeds | Build command exit 0 |
| Bug fixed | Test original symptom passes |
| Requirements met | Line-by-line checklist verified |

**Red flags - STOP:**
- Using "should"/"probably"/"seems to"
- Expressing satisfaction before verification
- Committing without verification
- Trusting agent reports
- ANY wording implying success without running verification

### 4. Quick Decision Tree
```
SITUATION?
│
├─ Received feedback
│  ├─ Unclear items? → STOP, ask for clarification first
│  ├─ From human partner? → Understand, then implement
│  └─ From external reviewer? → Verify technically before implementing
│
├─ Completed work
│  ├─ Major feature/task? → Request code-reviewer subagent review
│  └─ Before merge? → Request code-reviewer subagent review
│
└─ About to claim status
   ├─ Have fresh verification? → State claim WITH evidence
   └─ No fresh verification? → RUN verification command first
```

## Common Use Cases

### Receiving External Feedback
**Who**: Developer receiving PR comments
```
"External reviewer suggests adding error handling to validateUser(). Before implementing, verify if this function is actually used in production or just tests."
```

### Task Completion Verification
**Who**: Developer in subagent workflow
```
"Just completed the authentication refactor. Before moving to next task, dispatch code-reviewer subagent with BASE_SHA and HEAD_SHA to verify the implementation."
```

### Pre-Commit Evidence Check
**Who**: Developer about to commit
```
"Ready to commit the bug fix. Run full test suite and show output before claiming tests pass."
```

### Unclear Feedback Clarification
**Who**: Developer receiving vague comments
```
"Reviewer says 'improve error handling' but doesn't specify where or why. Stop and ask: Which error paths need handling? What scenarios am I missing?"
```

### YAGNI Enforcement
**Who**: Developer receiving "proper" suggestions
```
"Reviewer suggests adding a caching layer. Grep the codebase for actual usage patterns before implementing. Is this solving a real problem or premature optimization?"
```

## Pro Tips

- **Never assume success** - always verify with fresh evidence
- **Technical rigor first** - no performative agreement, just restate and implement
- **Evidence over claims** - show command output, not opinions
- **Question unclear feedback** - ask before implementing saves rework
- **YAGNI check** - grep before adding suggested "proper" features
- **Not activating?** Say: "Use code-review skill to verify this completion claim with evidence."

## Related Skills

- [Debugging](/docs/skills/tools/debugging) - Debug with evidence-based approach
- [Sequential Thinking](/docs/skills/tools/sequential-thinking) - Systematic problem-solving
- [Planning](/docs/skills/tools/planning) - Task breakdown and verification

## Key Takeaway

Code review requires technical rigor over social comfort. Use verification gates before ANY completion claims (run → read → verify → then claim). Request systematic reviews via code-reviewer subagent after each task. Push back technically on questionable feedback. Evidence, not assumptions.
