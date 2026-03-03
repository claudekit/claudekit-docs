---
title: "ckm:scout"
description: "Fast codebase scouting with parallel agents to map architecture, identify patterns, and surface key files before implementation."
section: marketing
kit: marketing
category: skills
order: 101
---

# `ckm:scout`

> Map unfamiliar codebases in minutes using parallel agents that explore structure, patterns, and conventions simultaneously.

## What This Skill Does

**The Challenge**: Working on large codebases is slow without orientation. Developers and AI agents waste time searching for the right files, re-discovering patterns, or writing code that conflicts with existing conventions.

**The Solution**: Scout skill deploys parallel agents to explore codebase structure, identify key files, map architectural patterns, surface naming conventions, and produce an orientation report — all before a single line of code is written.

## Activation

**Implicit**: Activates at the start of implementation tasks in unfamiliar repositories.

**Explicit**: Activate via prompt:
```
Activate scout skill to map the authentication system in this codebase
```

## Capabilities

### 1. Structural Mapping
Identify directory structure, module boundaries, and file organization patterns.

**Mapped elements**:
- Entry points (`main.ts`, `index.ts`, `app.ts`)
- Configuration files (`.env.example`, `tsconfig.json`, framework configs)
- Key directories (`src/`, `lib/`, `components/`, `api/`, `services/`)
- Test organization (`__tests__/`, `*.spec.ts`, `*.test.ts`)

### 2. Pattern Recognition
Surface recurring patterns, conventions, and architectural choices.

**Patterns analyzed**:
- State management (Redux, Zustand, Context API, Jotai)
- API patterns (REST, GraphQL, tRPC, server actions)
- Styling approach (CSS modules, Tailwind, styled-components)
- Error handling conventions
- Authentication patterns

### 3. Dependency Analysis
Map external dependencies and their usage patterns.

```bash
# Key files to scan
package.json        # Dependencies and scripts
tsconfig.json       # TypeScript config and paths
.env.example        # Required environment variables
```

### 4. Parallel Exploration
Deploy multiple agents to explore different subsystems simultaneously.

**Parallel agent assignments**:
- Agent A: Database models and schema
- Agent B: API routes and controllers
- Agent C: Frontend components and state
- Agent D: Configuration and infrastructure

## Prerequisites

- Repository access (local or via Repomix)
- Target area of exploration defined (full codebase or specific feature)

## Configuration

No configuration required. Scout operates through file system exploration.

**Scope options**:
- Full repository scan (for new codebases)
- Feature-scoped scan (for targeted implementation)
- Dependency scan (for integration work)

## Best Practices

**1. Scout before you plan**
Run scout before creating implementation plans. Architecture findings often change the approach.

**2. Define the question before scouting**
"Where is authentication handled?" produces better scout output than "tell me about the codebase."

**3. Save scout reports**
Scout outputs are valuable orientation documents. Save to `plans/reports/scout-report.md`.

## Common Use Cases

### Use Case 1: Onboarding to New Codebase
**Scenario**: Developer joins team and needs orientation on large Next.js app.

**Workflow**:
1. Run scout on full repository
2. Map: page structure, API routes, data layer, shared components
3. Identify: key patterns, naming conventions, testing approach
4. Generate orientation report

**Output**: Scout report with architecture overview, key file list, and convention guide.

### Use Case 2: Pre-Implementation Research
**Scenario**: Adding payments feature to existing app. Need to understand current auth, user model, and API patterns.

**Workflow**:
1. Scout scope: `src/api/**`, `src/models/**`, `src/lib/**`
2. Map: existing payment-adjacent code, user model fields, API auth pattern
3. Identify: where to add routes, which patterns to follow
4. Feed findings to planner

**Output**: Implementation context report fed into planning phase.

## Troubleshooting

**Issue**: Scout report is too high-level, missing specific patterns
**Solution**: Narrow scope with specific directories or questions.

**Issue**: Large codebase scout takes too long
**Solution**: Use Repomix to pack codebase first, then scout the packed file.

## Related Skills

- [Repomix](/docs/marketing/skills/repomix) - Pack repo for full-context analysis
- [Plan](/docs/marketing/skills/plan) - Create implementation plan from scout findings
- [Research](/docs/marketing/skills/research) - Deep technical research

## Related Commands

- `/ckm:scout` - Codebase scouting workflow
- `/ckm:repomix` - Repository packing for analysis
- `/ckm:plan` - Implementation planning
