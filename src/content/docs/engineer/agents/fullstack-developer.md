---
title: Fullstack Developer Agent
description: Execute implementation phases from parallel plans with strict file ownership boundaries
section: engineer
kit: engineer
category: agents
order: 17
published: true
---

# Fullstack Developer Agent

**Execute parallel-safe implementation phases across backend, frontend, and infrastructure with strict file ownership enforcement.**

## When to Use

- Implementing phases from `/plan:parallel` output
- Running backend + frontend work simultaneously without conflicts
- Need file-level isolation for parallel execution
- Building full-stack features (API + UI + tests)

## Key Capabilities

| Area | Details |
|------|---------|
| **Backend** | Node.js, Express APIs, auth, database ops |
| **Frontend** | React, TypeScript, components, styling |
| **Infrastructure** | Config, env setup, deployment scripts |
| **Parallel Safety** | File ownership enforcement, conflict detection |
| **Quality** | Type checking, tests, success criteria validation |

## Common Use Cases

| Who | Prompt | Outcome |
|-----|--------|---------|
| **Team Lead** | `/code plans/251201-user-api/phase-02-endpoints.md` | Executes Phase 02 API endpoints with ownership boundaries |
| **Developer** | Execute backend + frontend phases simultaneously | Safe parallel execution, no file conflicts |
| **PM** | `/plan:parallel Add CRUD API + React dashboard` → `/code` phases | Full implementation with automated reports |

## How It Works

**1. Phase Analysis**
- Reads `phase-XX-*.md` from plan directory
- Validates file ownership (exclusive files only)
- Checks parallelization info and dependencies

**2. Implementation**
- Follows steps from phase file
- Only touches files in "File Ownership" section
- **NEVER** modifies files owned by other phases

**3. Quality Assurance**
```bash
npm run typecheck  # Must pass
npm test           # Must pass
```

**4. Report Output**
```
{active-plan}/reports/fullstack-dev-{YYMMDD}-phase-{XX}-{topic}.md
```

## File Ownership Example

```markdown
# Phase 02: API Endpoints

## File Ownership (Exclusive)
- src/api/users.ts
- src/schemas/*.ts
- tests/api/*.test.ts

## Shared (Read-Only)
- src/types/index.ts
```

**Critical Rules:**
- **NEVER** modify files not in ownership list
- **STOP** immediately if conflict detected
- Only read shared files, never write

## Parallel Execution Safety

```
Phase 02 (Backend)     Phase 03 (Frontend)
├── src/api/           ├── src/components/
├── src/schemas/       ├── src/hooks/
└── tests/api/         └── tests/components/

No overlap → Safe for parallel execution
```

**Independence principles:**
- Work without checking other phases' progress
- Trust dependencies listed in phase file
- Report completion to unblock dependent phases

## Pro Tips

1. **Read First**: Check `.claude/active-plan` for current plan path
2. **Ownership Strict**: If not in ownership list, don't touch it
3. **Phase Order**: Sequential phases (01, 04) must run in order; parallel phases (02, 03) can run simultaneously
4. **YAGNI**: Only implement what's in the phase spec, nothing more
5. **Token Efficiency**: Concise implementation, minimal overhead

## Related Agents

- [Planner Agent](/docs/engineer/agents/planner) - Creates implementation plans
- [Scout Agent](/docs/engineer/agents/scout-external) - Gathers external context before planning

## Key Takeaway

**Fullstack Developer executes implementation phases with file-level isolation, enabling safe parallel backend/frontend development while maintaining code quality through automated testing.**
