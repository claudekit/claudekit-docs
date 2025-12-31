# Phase 06: Advanced Auto Commands

**Phase ID**: 06
**Status**: Pending
**Priority**: Medium
**Estimated Complexity**: High
**Files**: 3

## Context

Advanced automation commands with parallel execution:
- `/bootstrap:auto:parallel` - Bootstrap project with parallel agents
- `/cook:auto:parallel` - Feature implementation with parallel phases
- `/code:parallel` - Execute parallel/sequential phases from plan

## Research Links

- Missing Commands: Lines 260-277 (auto variants)
- Reference: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/core/bootstrap.md`
- Reference: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/core/cook.md`

## Requirements

### 1. /bootstrap:auto:parallel Documentation (NEW)

**File**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/core/bootstrap-auto-parallel.md`

**Frontmatter**:
```yaml
---
title: /bootstrap:auto:parallel
description: Bootstrap complete projects with parallel execution using researcher, planner, and fullstack-developer agents
category: commands/core
order: 41
published: true
---
```

**Content Sections**:
1. **Overview**: Parallel project bootstrapping with multi-agent orchestration
2. **Syntax**: `/bootstrap:auto:parallel [user-requirements]` (required)
3. **What It Does**:
   - Creates new project from requirements
   - Uses parallel agents for research, planning, design, implementation
   - Coordinates dependencies between parallel phases
   - Full automation (no approval gates)
4. **10-Step Workflow**:
   - Step 1: Requirements analysis
   - Step 2: Tech stack research (researcher agent)
   - Step 3: Architecture planning (planner agent)
   - Step 4: UI/UX design (ui-designer agent) [parallel with 2-3]
   - Step 5: Parallel implementation plan (/plan:parallel)
   - Step 6: Phase dependency resolution
   - Step 7: Parallel execution (fullstack-developer agents)
   - Step 8: Integration testing
   - Step 9: Documentation generation
   - Step 10: Project delivery
5. **Parallel Execution Waves**:
   - Wave 1: Researcher + UI Designer (parallel)
   - Wave 2: Planner (depends on Wave 1)
   - Wave 3: Multiple fullstack-developer agents (parallel phases)
   - Wave 4: Integration & testing
6. **Agents Invoked**:
   - `researcher`: Tech stack research
   - `planner`: Architecture planning
   - `ui-designer`: Design system
   - `fullstack-developer` (multiple): Parallel implementation
   - `tester`: Integration testing
   - `docs-manager`: Documentation
7. **Output Structure**:
   ```
   {project-name}/
   ├── src/
   ├── tests/
   ├── docs/
   ├── plans/
   │   └── bootstrap-YYMMDD/
   │       ├── plan.md
   │       ├── research-report.md
   │       └── design-spec.md
   └── README.md
   ```
8. **Use Cases**:
   - New project kickoff
   - Proof of concept development
   - Microservices scaffolding
9. **Examples**: 2 scenarios (full-stack app, microservices)
10. **Related Commands**: /bootstrap, /bootstrap:auto, /plan:parallel, /code:parallel

**Complexity**: 5 lightning (⚡⚡⚡⚡⚡)

### 2. /cook:auto:parallel Documentation (NEW)

**File**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/core/cook-auto-parallel.md`

**Frontmatter**:
```yaml
---
title: /cook:auto:parallel
description: Implement features with parallel execution using plan:parallel and fullstack-developer agents
category: commands/core
order: 51
published: true
---
```

**Content Sections**:
1. **Overview**: Feature implementation with parallel phases
2. **Syntax**: `/cook:auto:parallel [tasks]` (required)
3. **What It Does**:
   - Creates parallel execution plan (/plan:parallel)
   - Launches fullstack-developer agents for each phase
   - Manages dependencies between phases
   - Full automation
4. **Workflow**:
   - Step 1: Analyze feature requirements
   - Step 2: Create parallel plan (/plan:parallel)
   - Step 3: Parse dependency graph
   - Step 4: Execute parallel phases (fullstack-developer agents)
   - Step 5: Monitor progress (all phases)
   - Step 6: Integrate results
   - Step 7: Run tests
   - Step 8: Generate PR summary
5. **Dependency Management**:
   - Reads dependency graph from plan.md
   - Launches independent phases in parallel
   - Waits for dependencies before sequential phases
   - Example:
     ```
     Wave 1: Phase 1 + Phase 2 (parallel)
     Wave 2: Phase 3 (depends on 1,2)
     ```
6. **Agent Coordination**:
   - Each agent gets exclusive file ownership (no conflicts)
   - Agents run with 15-minute timeout
   - Failed agents don't block others
7. **Progress Tracking**:
   - TodoWrite tracks all phases
   - Real-time status updates
   - Completion summary
8. **Examples**: 2 scenarios (auth+payment, multi-module feature)
9. **Related Commands**: /cook, /cook:auto, /plan:parallel, /code:parallel

**Complexity**: 3 lightning (⚡⚡⚡)

### 3. /code:parallel Documentation (NEW)

**File**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/core/code-parallel.md`

**Frontmatter**:
```yaml
---
title: /code:parallel
description: Execute parallel or sequential phases from existing plan using dependency graph analysis
category: commands/core
order: 81
published: true
---
```

**Content Sections**:
1. **Overview**: Plan execution with parallel/sequential phase coordination
2. **Syntax**: `/code:parallel [plan-path]` (optional - auto-detect)
3. **What It Does**:
   - Reads plan.md for dependency graph
   - Determines parallel vs sequential execution
   - Launches fullstack-developer agents
   - Manages execution waves
4. **Dependency Graph Detection**:
   - Looks for "## Dependency Graph" section in plan.md
   - Parses phase dependencies
   - Builds execution waves
   - Example:
     ```markdown
     ## Dependency Graph
     Phase 1 (no deps)
     Phase 2 (no deps)
     Phase 3 (depends on: Phase 1, Phase 2)
     ```
5. **Execution Waves**:
   - Wave N: All phases with satisfied dependencies
   - Sequential wait for wave completion
   - Example:
     ```
     Wave 1: Phase 1, Phase 2 (parallel)
     [Wait for Wave 1 completion]
     Wave 2: Phase 3 (sequential)
     ```
6. **Workflow**:
   - Step 1: Auto-detect or load plan path
   - Step 2: Read plan.md, extract dependency graph
   - Step 3: Build execution waves
   - Step 4: Execute Wave 1 (parallel)
   - Step 5: Wait for wave completion
   - Step 6: Execute Wave 2 (if exists)
   - Step 7: Repeat for all waves
   - Step 8: Integration & testing
7. **File Ownership**: Reads "## File Ownership Matrix" to prevent conflicts
8. **Fallback**: If no dependency graph, executes phases sequentially
9. **Examples**: 2 scenarios (parallel plan, sequential fallback)
10. **Related Commands**: /code, /plan:parallel, /cook:auto:parallel

**Complexity**: 1 lightning (⚡)

## Implementation Steps

1. **Create /bootstrap:auto:parallel.md**:
   - Write frontmatter (order: 41, after bootstrap=4)
   - Document 10-step workflow
   - Document 4 execution waves
   - List 6 agents
   - Add project output structure
   - Add 2 examples
2. **Create /cook:auto:parallel.md**:
   - Write frontmatter (order: 51, after cook=5)
   - Document 8-step workflow
   - Explain dependency management
   - Document agent coordination (file ownership)
   - Add 2 examples
3. **Create /code:parallel.md**:
   - Write frontmatter (order: 81, after code=8)
   - Document dependency graph parsing
   - Explain execution waves
   - Document fallback to sequential
   - Add 2 examples
4. **Quality Check**:
   - SEO descriptions 150-160 chars
   - Dependency graph examples clear
   - Execution wave concept explained
   - Internal cross-references valid
5. **Build Test**: `bun run build`

## Success Criteria

- [ ] /bootstrap:auto:parallel.md created at correct path
- [ ] /cook:auto:parallel.md created at correct path
- [ ] /code:parallel.md created at correct path
- [ ] 10-step bootstrap workflow documented
- [ ] Dependency graph parsing explained
- [ ] Execution waves concept clear
- [ ] File ownership matrix referenced
- [ ] Frontmatter valid
- [ ] SEO descriptions within limit
- [ ] `bun run build` passes

## Dependencies

- Phase 02 (plan:parallel cross-reference)

## Notes

- Order values: bootstrap=4→41, cook=5→51, code=8→81
- All three commands use parallel fullstack-developer agents
- Dependency graph format must be standardized
- File ownership prevents merge conflicts
