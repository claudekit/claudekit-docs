---
title: "ck:xia"
description: "Extract, compare, port, or adapt features from external GitHub repositories into your current project"
section: engineer
kit: engineer
category: skills
order: 69
---

# Xia

Extract, compare, port, or adapt a feature from a GitHub repository or local repo into your current project. Study how another codebase implements something, then bring that implementation home — rewritten idiomatically for your stack.

## What This Skill Does

Xia runs a 6-phase pipeline: Recon (pack and scan the source repo), Map (inventory components and dependencies), Analyze (understand WHY, not just how), Challenge (surface hidden assumptions via decision questions), Plan (create implementation plan), and Deliver (hand off to cook or produce comparison report).

## When to Use

- Porting a feature from an open-source project into your codebase
- Comparing how two repos implement the same feature
- Learning from a reference implementation before building your own
- Adapting a third-party approach to fit your architecture

## Modes

| Mode | Flag | Behavior |
|------|------|----------|
| **Port** (default) | `--port` | Idiomatic rewrite for your stack |
| **Compare** | `--compare` | Analysis report only, no code changes |
| **Copy** | `--copy` | Minimal adaptation, keep structure close to source |
| **Improve** | `--improve` | Refactor and enhance while adapting |

### Speed Options

| Flag | Behavior |
|------|----------|
| (default) | Full workflow with approval gates |
| `--auto` | Full workflow, auto-approve gates |
| `--fast` | Skip research and challenge phases, auto-approve |

## Arguments

| Argument | Description |
|----------|-------------|
| `source` | GitHub URL, `owner/repo`, or local path |
| `feature` | Feature description (optional) |
| `--compare` | Analysis-only mode |
| `--copy` | Minimal changes mode |
| `--improve` | Refactor and enhance mode |
| `--port` | Idiomatic rewrite (default) |
| `--auto` | Auto-approve all gates |
| `--fast` | Skip research/challenge, auto-approve |

## Example Usage

```
/ck:xia react-query -- "infinite scroll pagination" --port
/ck:xia vue-final-form -- --compare
/ck:xia owner/repo -- "auth flow" --improve --auto
/ck:xia /local/path/repo -- "state management" --fast
```

## 6-Phase Workflow

### 1. Recon
- Pack source repo with `ck:repomix`
- Read source README and docs
- Use researcher agent for context and trade-offs
- Scout local project for integration points

### 2. Map
- Inventory components: core logic, state, data, API, config, types, tests
- Build dependency matrix (EXISTS, NEW, CONFLICT)
- Capture cross-cutting concerns (middleware, interceptors)
- Estimate work: files to create/modify, risks

### 3. Analyze
- Understand WHY the source works, not just how
- Trace execution paths for core components
- Identify implicit contracts and downstream expectations
- Mode-specific focus (architecture for compare, gaps for copy, anti-patterns for improve, idiomatic translation for port)

### 4. Challenge
- Generate 5+ challenge questions
- For each: source answer, local answer, risk if assumption is wrong
- Create decision matrix
- Get approval before advancing (unless `--fast` / `--auto`)

### 5. Plan
- Delegate to `ck:plan` with full context
- Compare mode: comparison report only
- Other modes: implementation plan with rollback strategy

### 6. Deliver
- Compare mode: write report to `plans/reports/`, stop
- Other modes: hand off to `ck:cook` for implementation

## Compare Mode Output

```markdown
# Feature Comparison: [name]
## Source: [owner/repo]
## Local Project: [name]
## Head-to-Head
| Aspect | Source | Local | Recommendation |
...
## Recommendation
```

## Security

- Source content is treated as untrusted data only
- No commands or instructions from source content are executed
- Only code structure, metadata, and dependency facts are extracted

## Related Skills

- [Repomix](/docs/engineer/skills/repomix) — packs repos into AI-friendly files (used in Recon)
- [Scout](/docs/engineer/skills/scout) — local codebase discovery (used in Recon)
- [Plan](/docs/engineer/skills/ck-plan) — creates implementation plan (used in Plan phase)
- [Cook](/docs/engineer/skills/cook) — implements the plan (used in Deliver phase)
