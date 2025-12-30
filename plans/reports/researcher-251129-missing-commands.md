# Research Report: Missing ClaudeKit Commands

**Date**: 2025-11-29
**Researcher**: Agent
**Scope**: Commands in engineer but not in docs
**Source**: `/mnt/d/www/claudekit/claudekit-engineer/.claude/commands/`

---

## Summary

**Total commands in engineer**: 13
**Currently documented**: 11 base commands visible in docs index
**Missing from docs**: 2 primary commands + multiple sub-commands/variants

### Commands Found in Engineer Directory

1. ask ✓
2. bootstrap ✓
3. brainstorm ✓
4. **code** ⚠️ MISSING
5. cook ✓
6. debug ✓
7. fix ✓
8. journal ✓
9. **plan** ⚠️ (exists but sub-variants missing)
10. **scout** ⚠️ (base exists, but `/scout:ext` variant missing)
11. test ✓
12. use-mcp ✓
13. watzup ✓

---

## Missing Commands Detail

### 1. `/code` - Start Coding from Plan

**Status**: NOT documented
**Complexity**: ⚡ (1 lightning)
**Argument**: `[plan]` (optional - auto-detects if empty)

**Purpose**: Execute implementation plan step-by-step with quality gates

**Key Features**:
- Auto-detects latest plan if no argument provided
- 6-step workflow with TodoWrite tracking
- Mandatory subagent calls: tester, code-reviewer, project-manager, docs-manager
- User approval gate before finalization
- Auto-commit on success

**Workflow Steps**:
0. Plan Detection - finds latest plan or uses provided path
1. Analysis & Task Extraction - reads plan, extracts tasks to TodoWrite
2. Implementation - executes tasks, marks complete as done
3. Testing - runs tests via `tester` subagent, must be 100% passing
4. Code Review - calls `code-reviewer` subagent, must have 0 critical issues
5. User Approval ⏸ - BLOCKING GATE, waits for explicit user approval
6. Finalize - updates plan status, docs, auto-commits and pushes

**Output Format**:
```
✓ Step 0: [Plan Name] - [Phase Name]
✓ Step 1: Found [N] tasks across [M] phases - Ambiguities: [list]
✓ Step 2: Implemented [N] files - [X/Y] tasks complete
✓ Step 3: Tests [X/X passed] - All requirements met
✓ Step 4: Code reviewed - [0] critical issues
✓ Step 5: User approved - Ready to complete
✓ Step 6: Finalize - Status updated - Git committed
```

**Enforcement Rules**:
- Steps cannot be skipped
- Each step must output "✓ Step N:" marker
- Blocking gates: tests 100% pass, 0 critical issues, user approval
- TodoWrite tracking mandatory

**Example Usage**:
```bash
/code                           # Auto-detect latest plan
/code plans/oauth-auth/plan.md  # Use specific plan
/code phase-2                   # Execute specific phase
```

---

### 2. `/brainstorm` - Feature Brainstorming

**Status**: Mentioned in docs index but NO detail page
**Complexity**: ⚡⚡ (2 lightning)
**Argument**: `[question]` (required)

**Purpose**: Collaborate with user to find best technical solutions

**Role**: Solution Brainstormer - elite software engineering expert

**Core Principles**: YAGNI, KISS, DRY

**Expertise Areas**:
- System architecture design & scalability
- Risk assessment & mitigation
- Development time optimization
- UX/DX optimization
- Technical debt management
- Performance optimization

**Process Phases**:
1. Discovery - clarify requirements, constraints, timeline, success criteria
2. Research - gather info from other agents, external sources
3. Analysis - evaluate multiple approaches using YAGNI/KISS/DRY
4. Debate - present options, challenge user preferences
5. Consensus - ensure alignment on chosen approach
6. Documentation - create markdown summary report

**Collaboration Tools**:
- `planner` agent - research best practices
- `docs-manager` agent - understand existing implementation
- `Search Google` (searchapi MCP) - find efficient approaches
- `docs-seeker` skill - read latest external docs
- `ai-multimodal` skill - analyze visual materials
- `psql` command - understand database structure
- `sequential-thinking` skill - complex problem-solving

**Output Location**:
- If active plan exists: `{active-plan}/reports/brainstorm-YYMMDD-{topic}.md`
- Fallback: `plans/reports/brainstorm-YYMMDD-{topic}.md`

**Report Includes**:
- Problem statement & requirements
- Evaluated approaches with pros/cons
- Final recommended solution with rationale
- Implementation considerations & risks
- Success metrics & validation criteria
- Next steps & dependencies

**Critical Constraints**:
- Does NOT implement solutions
- Only brainstorms and advises
- Must validate feasibility before endorsing
- Prioritizes long-term maintainability

**Example Usage**:
```bash
/brainstorm [should we use Redis or PostgreSQL for session storage?]
/brainstorm [best way to implement real-time notifications?]
```

---

### 3. `/plan` - Intelligent Plan Creation Router

**Status**: Base command exists, sub-commands missing from docs
**Complexity**: ⚡⚡⚡ (3 lightning)
**Argument**: `[task]` (required)

**Purpose**: Analyze task complexity and route to `/plan:fast` or `/plan:hard`

**Pre-Creation Check**:
- Checks `<WORKING-DIR>/.claude/active-plan` for existing plan
- Asks user: "Active plan found: {path}. Continue? [Y/n]"
- If Y (default): passes existing plan path to subcommand
- If n: creates new plan

**Workflow**:
1. Analyze given task
2. Ask for more details if needed
3. Decide between `/plan:fast` or `/plan:hard` based on complexity
4. Execute chosen SlashCommand with **enhanced prompt**
5. Activate `planning` skill

**Key Note**: "detailed-instructions-prompt" is enhanced description based on task

**Missing Sub-Commands**:
- `/plan:parallel` - Create plan with parallel-executable phases ⚠️ MISSING
- Other variants already documented: `/plan:ci`, `/plan:two`, `/plan:cro`

**Example Usage**:
```bash
/plan [add OAuth authentication]          # Auto-routes to fast/hard
/plan:parallel [implement payment system] # Parallel execution plan
```

---

### 4. `/fix` - Intelligent Fix Router

**Status**: Base command exists, routing logic not detailed in docs
**Complexity**: ⚡⚡ (2 lightning)
**Argument**: `[issues]` (required)

**Purpose**: Analyze issues and route to specialized fix command

**Decision Tree**:

1. **Check for existing plan** → `/code <path-to-plan>`

2. **Route by issue type**:
   - **Type Errors** (keywords: type, typescript, tsc) → `/fix:types`
   - **UI/UX Issues** (keywords: ui, ux, design, layout, style, css, responsive) → `/fix:ui`
   - **CI/CD Issues** (keywords: github actions, pipeline, ci/cd, workflow) → `/fix:ci`
   - **Test Failures** (keywords: test, spec, jest, vitest, failing test) → `/fix:test`
   - **Log Analysis** (keywords: logs, error logs, log file, stack trace) → `/fix:logs`
   - **Multiple Independent Issues** (2+ unrelated issues) → `/fix:parallel`
   - **Complex Issues** (keywords: complex, architecture, refactor, major) → `/fix:hard`
   - **Simple/Quick Fixes** (default: small bug, single file) → `/fix:fast`

**Notes**:
- `detailed-description` = enhanced prompt describing issue in detail
- If unclear, asks user for clarification before routing
- Can combine routes for multiple issue types

**Missing Sub-Commands**:
- `/fix:parallel` - Fix multiple independent issues ⚠️ MISSING (referenced but not documented)

**Example Usage**:
```bash
/fix [button not clickable on mobile]      # Auto-routes to /fix:ui
/fix [type error in auth service]          # Auto-routes to /fix:types
/fix [complex auth flow broken]            # Auto-routes to /fix:hard
```

---

### 5. `/scout` - Codebase Directory Scout

**Status**: Base command exists
**Complexity**: ⚡⚡ (2 lightning)
**Arguments**: `[user-prompt]` (required), `[scale]` (optional, defaults to 3)

**Purpose**: Fast, token-efficient parallel codebase search

**Workflow**:
- Spawns SCALE number of `Explore` subagents in parallel
- Each agent searches assigned directories
- Agents use 3-minute timeout
- Skips agents that don't return within timeout
- Generates report: `plans/<plan-name>/reports/scout-report.md`

**Agent Instructions**:
- Quickly search codebase for files needed to complete task
- NOT full blown search, just quick file finding
- Divide folders intelligently for parallel search

**Report Writing**:
- Sacrifice grammar for concision
- List unresolved questions at end if any

**Missing Sub-Command**:
- `/scout:ext` - Use external agentic tools to scout ⚠️ MISSING (file doesn't exist in engineer)

**Example Usage**:
```bash
/scout [authentication files]          # Use 3 agents (default)
/scout [database models] [5]           # Use 5 agents
/scout:ext [payment integration] [4]   # Use external tools + 4 agents
```

---

## Other Missing Sub-Commands

Based on docs index, these sub-commands exist but are NOT found in engineer directory as standalone files (likely implemented as variants or removed):

### Bootstrap Variants
- `/bootstrap:auto` - NOT in engineer (docs mentions it)
- `/bootstrap:auto:fast` - NOT in engineer
- `/bootstrap:auto:parallel` - NOT in engineer

### Cook Variants
- `/cook:auto` - NOT in engineer
- `/cook:auto:fast` - NOT in engineer
- `/cook:auto:parallel` - NOT in engineer

### Code Variants
- `/code:parallel` - NOT in engineer (Execute parallel/sequential phases)

### Plan Variants
- `/plan:fast` - NOT standalone (called by `/plan`)
- `/plan:hard` - NOT standalone (called by `/plan`)
- `/plan:parallel` - NOT in engineer

### Fix Variants
- `/fix:parallel` - NOT in engineer (referenced in `/fix` routing)

### Skills Management (NOT in docs at all)
These exist as slash commands in docs index but NO markdown files in engineer:
- `/skill:create` - Create new agent skill
- `/skill:add` - Add reference files/scripts to skill
- `/skill:optimize` - Optimize existing skill
- `/skill:optimize:auto` - Auto-optimize skill
- `/skill:fix-logs` - Fix skill based on logs.txt

### Review Commands
- `/review:codebase` - NOT in engineer directory

---

## Recommendations

### High Priority Documentation Needed

1. **`/code`** - Core command for plan execution, MUST be documented
2. **`/brainstorm`** - Listed in index but no detail page
3. **Routing Logic** - Document how `/plan` and `/fix` intelligently route to sub-commands
4. **Skills Commands** - `/skill:*` commands need documentation pages

### Medium Priority

5. **`/scout:ext`** - External agentic tools variant
6. **`/plan:parallel`** - Parallel execution planning
7. **`/fix:parallel`** - Multiple independent issue fixing
8. **Auto Variants** - `/bootstrap:auto:*`, `/cook:auto:*`, `/code:parallel`

### Low Priority

9. **`/review:codebase`** - Codebase scanning/analysis

### Documentation Structure Suggestion

```
docs/commands/
├── core/
│   ├── code.md              ⚠️ ADD (highest priority)
│   ├── brainstorm.md        ⚠️ ADD (has index entry, needs detail)
│   └── ... (existing files)
├── fix/
│   ├── index.md             ⚠️ UPDATE (add routing logic)
│   └── parallel.md          ⚠️ ADD
├── plan/
│   ├── index.md             ⚠️ UPDATE (add routing logic)
│   └── parallel.md          ⚠️ ADD
├── skills/
│   ├── create.md            ⚠️ ADD
│   ├── add.md               ⚠️ ADD
│   ├── optimize.md          ⚠️ ADD
│   └── optimize-auto.md     ⚠️ ADD
└── advanced/
    ├── scout-ext.md         ⚠️ ADD
    ├── bootstrap-auto.md    ⚠️ ADD
    ├── cook-auto.md         ⚠️ ADD
    └── code-parallel.md     ⚠️ ADD
```

---

## Unresolved Questions

1. **Where are auto-variants defined?** `/bootstrap:auto:*`, `/cook:auto:*` appear in docs index but no markdown files in engineer directory
2. **Is `/code:parallel` implemented?** Mentioned in docs index but no file in engineer
3. **Status of `/review:codebase`?** In docs index but no file in engineer
4. **Are skills commands still active?** `/skill:*` commands in docs index but no markdown files found
