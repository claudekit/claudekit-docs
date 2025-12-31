# ClaudeKit Engineer - Complete Commands Reference

**Generated:** 2025-12-29  
**Total Commands:** 77  
**Organized by:** Functionality Category

---

## Executive Summary

ClaudeKit Engineer provides 77 specialized slash commands organized into 15 functional categories:
- **Core Operations** (5): ask, debug, test, watzup, ck-help
- **Code Execution** (4): code, code:auto, code:parallel, code:no-test
- **Issue Fixing** (9): fix (router), fix:types, fix:test, fix:ui, fix:ci, fix:fast, fix:logs, fix:hard, fix:parallel
- **Planning** (9): plan, plan:fast, plan:hard, plan:ci, plan:parallel, plan:two, plan:validate, plan:cro, plan:archive
- **Project Bootstrap** (4): bootstrap, bootstrap:auto, bootstrap:auto:fast, bootstrap:auto:parallel
- **Feature Implementation** (4): cook, cook:auto, cook:auto:fast, cook:auto:parallel
- **Git Operations** (5): git:cm, git:cp, git:ck, git:pr, git:merge
- **Documentation** (5): docs:summarize, docs:init, docs:update, docs:meta:init, docs:meta:update
- **Code Review** (2): review:codebase, review:codebase:parallel
- **Design** (6): design:fast, design:good, design:screenshot, design:describe, design:3d, design:video
- **Content Creation** (4): content:fast, content:good, content:enhance, content:cro
- **Testing** (1): test:ui
- **Skills Management** (6): skill:create, skill:add, skill:plan, skill:optimize, skill:optimize:auto, skill:fix-logs
- **Integration** (2): integrate:polar, integrate:sepay
- **Navigation & Utilities** (6): scout, scout:ext, preview, kanban, worktree, brainstorm, journal, coding-level, use-mcp

---

## 1. CORE OPERATIONS

### /ask
**Description:** ⚡ Answer technical and architectural questions  
**Arguments:** `[technical-question]`

**What it does:**
- Activates 4 specialized architectural advisors (Systems Designer, Technology Strategist, Scalability Consultant, Risk Analyst)
- Provides comprehensive architectural guidance without implementation
- Considers project workflows, constraints, and business context
- Honors YAGNI, KISS, DRY principles

**Output:**
- Architecture Analysis
- Design Recommendations with rationale
- Technology Guidance with pros/cons
- Implementation Strategy
- Next Actions

**Example usage:**
```
/ask How should we structure our multi-tenant SaaS authentication system?
```

---

### /debug
**Description:** ⚡⚡ Debug technical issues and provide solutions  
**Arguments:** `[issues]`

**What it does:**
- Uses debugger subagent to find root causes
- Analyzes and explains issues
- Does NOT implement fixes automatically
- Activates relevant skills for problem-solving

**Output:**
- Root cause analysis
- Detailed explanation of each issue
- Impact assessment

**Example usage:**
```
/debug Login fails silently on Safari, console errors with JWT validation
```

---

### /test
**Description:** ⚡ Run tests locally and analyze results  
**Arguments:** (none)

**What it does:**
- Uses tester subagent to execute test suite
- Provides analysis of test results
- Does NOT start implementing
- Activates required skills

**Output:**
- Test run summary
- Pass/fail breakdown
- Analysis report

**Example usage:**
```
/test
```

---

### /watzup
**Description:** ⚡ Review recent changes and wrap up work  
**Arguments:** (none)

**What it does:**
- Analyzes current branch state
- Reviews recent commits
- Provides detailed summary of changes, additions, removals
- Analyzes overall impact and quality

**Output:**
- Commit analysis
- Change summary (what was modified, added, removed)
- Overall impact assessment

**Example usage:**
```
/watzup
```

---

### /ck-help
**Description:** ClaudeKit usage guide  
**Arguments:** `[category|command|task description]`

**What it does:**
- Translates arguments to English if needed
- Runs Python help script for comprehensive docs
- Detects output type (comprehensive-docs, category-guide, command-details, search-results, task-recommendations)
- Presents output with helpful context and follow-up questions

**Output:**
- Full script output (never summarized)
- Additional context and real-world examples
- Tips and gotchas
- Follow-up questions

**Example usage:**
```
/ck-help How do I use the planning commands?
/ck-help fix
```

---

## 2. CODE EXECUTION

### /code
**Description:** ⚡⚡⚡ Start coding & testing an existing plan  
**Arguments:** `[plan]` or empty (auto-detects latest)

**6-Step Workflow:**
1. **Step 0:** Detect plan and phase
2. **Step 1:** Analyze plan, extract tasks, identify skills
3. **Step 2:** Implementation with task tracking
4. **Step 3:** Testing (100% pass required)
5. **Step 4:** Code Review (0 critical issues required)
6. **Step 5:** ⏸ User Approval (BLOCKING)
7. **Step 6:** Finalize with status update, docs update, auto-commit

**Requirements:**
- Tests must all pass (no fakes/mocks/cheats)
- Code review finds 0 critical issues
- User must explicitly approve before finalization
- Uses TodoWrite for task tracking

**Example usage:**
```
/code plans/auth-system/plan.md
/code  # Auto-detects latest plan
```

---

### /code:auto
**Description:** ⚡⚡⚡ [AUTO] Start coding without approval gates  
**Arguments:** `[plan] [all-phases-yes-or-no]` (default: Yes)

**What it does:**
- Same as /code but skips Step 5 (user approval)
- Can auto-proceed through all phases
- Useful for auto-implementations with "trust me bro" approach

**Example usage:**
```
/code:auto plans/feature/plan.md Yes
/code:auto plans/simple/plan.md No  # Do one phase at a time
```

---

### /code:parallel
**Description:** ⚡ Execute parallel or sequential phases  
**Arguments:** `[plan-path]`

**What it does:**
- Reads plan.md for dependency graph
- Detects parallel vs sequential phases
- Launches multiple fullstack-developer agents simultaneously
- Waits for parallel groups to complete
- Executes sequential phases one at a time

**Example usage:**
```
/code:parallel plans/big-feature/plan.md
```

---

### /code:no-test
**Description:** ⚡⚡ Start coding without testing  
**Arguments:** `[plan]`

**What it does:**
- Skips Step 3 (Testing)
- Implements → Code Review → User Approval → Finalize
- Useful for documentation or non-critical features

**Example usage:**
```
/code:no-test plans/docs/plan.md
```

---

## 3. FIXING ISSUES

### /fix
**Description:** ⚡⚡ Analyze and fix issues [INTELLIGENT ROUTING]  
**Arguments:** `[issues]`

**Intelligent Routing Decision Tree:**

| Issue Type | Keywords | Routes To |
|-----------|----------|-----------|
| Type Errors | type, typescript, tsc | `/fix:types` |
| UI/UX Issues | ui, ux, design, layout, style, button, css | `/fix:ui` |
| CI/CD Issues | github actions, pipeline, workflow, deployment | `/fix:ci` |
| Test Failures | test, spec, jest, vitest, failing | `/fix:test` |
| Log Analysis | logs, error logs, stack trace | `/fix:logs` |
| Multiple Issues | 2+ unrelated issues | `/fix:parallel` |
| Complex Issues | complex, architecture, refactor, system-wide | `/fix:hard` |
| Simple Fixes | small bug, single file, straightforward | `/fix:fast` |

**Example usage:**
```
/fix Dashboard component not rendering on mobile
```

---

### /fix:types
**Description:** ⚡ Fix type errors  
**Arguments:** (none)

**What it does:**
- Runs `bun run typecheck` or `tsc`
- Fixes all type errors iteratively
- Never uses `any` to pass checks
- Repeats until 0 errors

**Example usage:**
```
/fix:types
```

---

### /fix:test
**Description:** ⚡⚡ Run test suite and fix issues  
**Arguments:** `[issues]`

**Workflow:**
1. Compile code, fix syntax errors
2. Run tests via tester subagent
3. Debug failures with debugger
4. Implement fixes
5. Re-test until 100% pass
6. Code review changes

**Example usage:**
```
/fix:test Payment processing tests failing
```

---

### /fix:ui
**Description:** ⚡⚡ Analyze and fix UI issues  
**Arguments:** `[issue]`

**Skills Used:**
1. ui-ux-pro-max (design intelligence)
2. aesthetic (design principles)
3. frontend-design (patterns)

**Workflow:**
- Analyzes design-guidelines.md
- Takes screenshots and uses ai-multimodal for analysis
- Implements fixes with ui-ux-designer
- Verifies with chrome-devtools
- Tests and reviews code

**Example usage:**
```
/fix:ui Button alignment broken on mobile devices
/fix:ui [screenshot.png]  # With screenshot
```

---

### /fix:ci
**Description:** ⚡ Analyze Github Actions logs and fix  
**Arguments:** `[github-actions-url]`

**Workflow:**
1. Read Github Actions logs with gh command
2. Debugger finds root causes
3. Implement fixes
4. Test with tester
5. Repeat until working

**Requirements:**
- gh (GitHub CLI) must be installed

**Example usage:**
```
/fix:ci https://github.com/org/repo/actions/runs/123
```

---

### /fix:fast
**Description:** ⚡ Analyze and fix small issues [FAST]  
**Arguments:** `[issues]`

**Workflow:**
1. Analyze issues with ai-multimodal (if screenshots/videos)
2. Debug with debugger subagent
3. Implement fixes
4. Test with tester
5. Repeat if needed

**Example usage:**
```
/fix:fast Missing import statement in utils.ts
```

---

### /fix:logs
**Description:** ⚡ Analyze logs and fix issues  
**Arguments:** `[issue]`

**Workflow:**
1. Check for logs.txt, set up piping if missing
2. Debugger analyzes logs.txt
3. Scout finds related files
4. Planner creates implementation plan
5. Implement and test
6. Code review

**Example usage:**
```
/fix:logs Database connection timeout on startup
```

---

### /fix:hard
**Description:** ⚡⚡⚡ Plan and fix complex issues  
**Arguments:** `[issues]`

**Workflow:**
1. Ask clarifying questions
2. Debugger finds root causes
3. Researcher investigates solutions
4. Planner creates fix plan
5. Code with /code command
6. Final report and git commit

**Example usage:**
```
/fix:hard Race condition in concurrent request handling
```

---

### /fix:parallel
**Description:** ⚡⚡ Analyze & fix with parallel agents  
**Arguments:** `[issues]`

**Workflow:**
1. Issue analysis with debugger and scout
2. Parallel fix planning
3. Launch multiple fullstack-developer agents
4. Testing with tester
5. Code review
6. Project management & docs

**Example usage:**
```
/fix:parallel Auth broken + Database migration error + UI layout
```

---

## 4. PLANNING

### /plan
**Description:** ⚡⚡⚡ Intelligent plan creation  
**Arguments:** `[task]`

**What it does:**
- Detects complexity level
- Routes to `/plan:fast` (simple) or `/plan:hard` (complex)
- Uses planning skill
- Creates plan or uses active plan

**Example usage:**
```
/plan Add email verification to signup
```

---

### /plan:fast
**Description:** ⚡⚡ No research. Only analyze and create plan  
**Arguments:** `[task]`

**Workflow:**
1. Read codebase docs (summary, standards, architecture)
2. Planner creates implementation plan
3. Ask user to review

**Output:**
- Plan directory with plan.md + phase files
- YAML frontmatter with metadata
- Phases under 80 lines each

**Example usage:**
```
/plan:fast Add logout button to navbar
```

---

### /plan:hard
**Description:** ⚡⚡⚡ Research, analyze, and create plan  
**Arguments:** `[task]`

**Workflow:**
1. Multiple researcher agents (2 parallel)
2. Read codebase docs
3. Scout codebase for files (if codebase-summary.md missing)
4. Planner creates comprehensive plan
5. Optional validation interview

**Output:**
- research/ directory with reports
- scout/ directory with findings
- plan.md + phase files
- Validation summary (if validated)

**Example usage:**
```
/plan:hard Redesign entire payment system
```

---

### /plan:ci
**Description:** Analyze Github Actions logs and provide fix plan  
**Arguments:** `[github-actions-url]`

**What it does:**
- Planner analyzes CI logs
- Provides 2+ fix approaches with pros/cons
- Creates implementation plan

**Output:**
- YAML frontmatter
- Multiple approaches with tradeoffs
- Recommended approach

**Example usage:**
```
/plan:ci https://github.com/org/repo/actions/runs/123
```

---

### /plan:parallel
**Description:** ⚡⚡⚡ Create plan with parallel-executable phases  
**Arguments:** `[task]`

**What it does:**
- Creates phases that can run independently
- No file overlap between phases
- Includes dependency graph
- File ownership matrix
- Execution strategy

**Requirements for Parallel Phases:**
- Self-contained with no runtime dependencies
- Clear boundaries (no file overlap)
- Logical separation by layer/domain/type
- Well-defined interfaces
- Dependency matrix

**Example usage:**
```
/plan:parallel User profiles + notifications + admin dashboard
```

---

### /plan:two
**Description:** ⚡⚡⚡⚡ Create 2 implementation approaches  
**Arguments:** `[task]`

**What it does:**
- Provides 2 detailed plans
- Clear pros/cons for each
- Recommended approach

**Example usage:**
```
/plan:two Should we use REST or GraphQL for our API?
```

---

### /plan:validate
**Description:** Validate plan with critical questions  
**Arguments:** `[plan-path]` (or uses active plan)

**What it does:**
- Asks 3-8 critical questions
- Validates assumptions, decisions, risks, tradeoffs
- Documents answers in plan.md
- Flags items needing revision

**Example usage:**
```
/plan:validate plans/feature/plan.md
```

---

### /plan:cro
**Description:** Create a CRO (Conversion Rate Optimization) plan  
**Arguments:** `[issues]`

**Conversion Framework (25 Points):**
1. Headline 4-U (Useful, Unique, Urgent, Ultra-specific)
2. Above-Fold Value Proposition
3. CTA First-Person Psychology
4. 5-Field Form Maximum
5. Message Match Precision
... (25 total)

**Workflow:**
- Analyzes content with ai-multimodal
- Scouts codebase for files
- Creates CRO plan with phases
- Does NOT implement

**Example usage:**
```
/plan:cro Landing page conversion rate is 2%, should be 5%
```

---

### /plan:archive
**Description:** Archive or delete completed plans  
**Arguments:** `[plan-path]` (default: all)

**Workflow:**
1. Reads plan files
2. Optionally creates journal entries
3. Asks for confirmation
4. Moves to archive or deletes
5. Offers to commit changes

**Example usage:**
```
/plan:archive plans/v1-launch/plan.md
/plan:archive  # All plans
```

---

## 5. PROJECT BOOTSTRAP

### /bootstrap
**Description:** ⚡⚡⚡⚡⚡ Bootstrap new project step by step  
**Arguments:** `[user-requirements]`

**Complete Workflow:**
1. Initialize Git (ask if needed)
2. Ask clarifying questions
3. Research (parallel)
4. Tech stack selection (with user approval)
5. Wireframe & design (with user approval)
6. Implementation planning
7. Implementation (with /code)
8. Testing
9. Code review
10. Documentation
11. Onboarding
12. Final report

**Example usage:**
```
/bootstrap Create a SaaS project management tool with teams, tasks, and real-time collaboration
```

---

### /bootstrap:auto
**Description:** ⚡⚡⚡⚡ Bootstrap automatically  
**Arguments:** `[user-requirements]`

**What it does:**
- Same as /bootstrap but no approval gates between phases
- Auto-proceeds through all steps

**Example usage:**
```
/bootstrap:auto Blog platform with tags, categories, and comments
```

---

### /bootstrap:auto:fast
**Description:** ⚡⚡⚡ Quickly bootstrap  
**Arguments:** `[user-requirements]`

**Workflow:**
- Research (parallel) + Tech stack
- Wireframe & design
- Implementation planning
- Implementation
- Testing
- Code review
- Documentation
- Final report

**Example usage:**
```
/bootstrap:auto:fast Static landing page for startup
```

---

### /bootstrap:auto:parallel
**Description:** ⚡⚡⚡⚡⚡ Bootstrap with parallel execution  
**Arguments:** `[user-requirements]`

**What it does:**
- Research, Tech stack, Design (parallel)
- Parallel planning and implementation
- Testing, review, docs, onboarding
- Final report

**Example usage:**
```
/bootstrap:auto:parallel Complex SaaS with API, web app, and admin dashboard
```

---

## 6. FEATURE IMPLEMENTATION

### /cook
**Description:** ⚡⚡⚡ Implement a feature [step by step]  
**Arguments:** `[tasks]`

**Complete Workflow:**
1. Ask clarifying questions
2. Research (parallel)
3. Planning
4. Implementation with /code
5. Final report
6. Onboarding (if needed)

**Example usage:**
```
/cook Add dark mode toggle with persistent user preference
```

---

### /cook:auto
**Description:** ⚡⚡ Implement feature automatically  
**Arguments:** `[tasks]`

**Workflow:**
- Plan → Code → Git commit (no approval gates)

**Example usage:**
```
/cook:auto Add email verification to signup process
```

---

### /cook:auto:fast
**Description:** ⚡ No research. Only scout, plan & implement  
**Arguments:** `[tasks]`

**Workflow:**
- Scout → Plan:fast → Code (skip research)

**Example usage:**
```
/cook:auto:fast Fix typo in error message
```

---

### /cook:auto:parallel
**Description:** ⚡⚡⚡ Plan parallel phases & execute  
**Arguments:** `[tasks]`

**Workflow:**
- Research/plan (parallel where possible)
- Parallel implementation with fullstack-developer agents
- Testing, review, docs, final report

**Example usage:**
```
/cook:auto:parallel User profiles + notification system + settings management
```

---

## 7. GIT OPERATIONS

### /git:cm
**Description:** Stage all files and create commit  
**Arguments:** (none)

**What it does:**
- Stages all changes
- Creates meaningful commit message
- Does NOT push

**Example usage:**
```
/git:cm
```

---

### /git:cp
**Description:** Stage, commit and push to remote  
**Arguments:** (none)

**What it does:**
- Stages changes
- Creates commit with message
- Pushes to remote

**Example usage:**
```
/git:cp
```

---

### /git:ck
**Description:** Smart commit with skill/command/agent separation  
**Arguments:** (none)

**What it does:**
- Splits changes by skills, commands, agents, scripts
- Creates separate commits for each

**Example usage:**
```
/git:ck
```

---

### /git:pr
**Description:** Create a pull request  
**Arguments:** `[to-branch]` `[from-branch]` (defaults: main, current)

**Workflow:**
1. Fetch remote, push current branch
2. Analyze REMOTE diff (critical!)
3. Get commits between remote branches
4. Generate PR title and body
5. Create PR with gh command

**Example usage:**
```
/git:pr main feature/auth
/git:pr
```

---

### /git:merge
**Description:** Merge code from one branch to another  
**Arguments:** `[to-branch]` `[from-branch]` (defaults: main, current)

**Workflow:**
1. Sync with remote (fetch/pull)
2. Merge origin/{FROM_BRANCH} into {TO_BRANCH}
3. Resolve conflicts if any
4. Push result

**Example usage:**
```
/git:merge main dev
```

---

## 8. DOCUMENTATION

### /docs:summarize
**Description:** ⚡ Analyze codebase and summarize documentation  
**Arguments:** `[focused-topics]` `[should-scan-codebase]`

**What it does:**
- Uses docs-manager subagent
- Analyzes based on codebase-summary.md
- Provides focused summary

**Example usage:**
```
/docs:summarize authentication false
/docs:summarize
```

---

### /docs:init
**Description:** ⚡⚡⚡⚡ Create initial documentation  
**Arguments:** (none)

**Phase 1:** Parallel Codebase Scouting
- Spawns multiple scout subagents
- Targets actual project directories
- Merges results

**Phase 2:** Documentation Creation
- project-overview-pdr.md
- codebase-summary.md
- code-standards.md
- system-architecture.md
- Updated README.md

**Example usage:**
```
/docs:init
```

---

### /docs:update
**Description:** ⚡⚡⚡ Update documentation  
**Arguments:** `[additional-requests]`

**What it does:**
- Parallel scouts codebase
- Updates all documentation files

**Updates:**
- README.md
- docs/project-overview-pdr.md
- docs/codebase-summary.md
- docs/code-standards.md
- docs/system-architecture.md
- docs/project-roadmap.md
- docs/deployment-guide.md (optional)
- docs/design-guidelines.md (optional)

**Example usage:**
```
/docs:update
/docs:update Add deployment guide section
```

---

### /docs:meta:init
**Description:** 💡💡💡💡 Create initial documentation (expert mode)  
**Arguments:** (none)

**What it does:**
- Identifies actual project directories
- Spawns parallel scout subagents
- Creates documentation via docs-manager

**Example usage:**
```
/docs:meta:init
```

---

### /docs:meta:update
**Description:** 💡💡💡 Update documentation (expert mode)  
**Arguments:** `[additional-requests]`

**What it does:**
- Parallel scouts actual directories
- Updates all documentation

**Example usage:**
```
/docs:meta:update
```

---

## 9. CODE REVIEW

### /review:codebase
**Description:** ⚡⚡⚡ Scan & analyze codebase  
**Arguments:** `[tasks-or-prompt]`

**Workflow:**
1. Research (2 agents parallel)
2. Scout codebase
3. Code review (multiple agents parallel)
4. Creates improvement plan
5. Final report

**Example usage:**
```
/review:codebase What security vulnerabilities exist?
/review:codebase Identify performance bottlenecks
```

---

### /review:codebase:parallel
**Description:** ⚡⚡⚡ Exhaustively check edge cases  
**Arguments:** `[scope-or-prompt]`

**Workflow:**
1. Ultrathink: List ALL potential edge cases
2. Categorize by scope
3. Launch parallel code-reviewers
4. Aggregate verification results
5. Option to auto-fix with /fix:parallel
6. Final report and commit

**Edge Cases Checked:**
- Null/undefined scenarios
- Boundary conditions
- Error handling
- Race conditions
- Input validation
- Security vulnerabilities
- Resource leaks

**Example usage:**
```
/review:codebase:parallel auth module
```

---

## 10. DESIGN

### /design:fast
**Description:** Create a quick design  
**Arguments:** `[tasks]`

**Skills:**
- ui-ux-pro-max (design intelligence)
- frontend-design (implementation)

**Workflow:**
1. Run ui-ux-pro-max searches
2. Use ui-ux-designer subagent
3. Create in HTML/CSS/JS
4. Ask for approval
5. Update design-guidelines if approved

**Example usage:**
```
/design:fast Create a modern login form
```

---

### /design:good
**Description:** Create an immersive design  
**Arguments:** `[tasks]`

**What it does:**
- Award-winning design quality
- Research + implementation
- Storytelling, 3D experiences, micro-interactions

**Workflow:**
1. Research design style, trends, fonts, colors
2. Use ui-ux-designer to implement
3. Generate assets with ai-multimodal
4. Review and approve
5. Update design-guidelines

**Example usage:**
```
/design:good Create interactive product showcase with animations
```

---

### /design:screenshot
**Description:** Create design based on screenshot  
**Arguments:** `[screenshot-path]`

**What it does:**
- Analyzes screenshot details
- Creates plan with progressive disclosure
- Implements to match exactly

**Details Analyzed:**
- Design style, fonts, colors, spacing
- Elements' positions, sizes, shapes
- Textures, materials, light, shadow
- Borders, blur, glow effects

**Example usage:**
```
/design:screenshot path/to/design.png
```

---

### /design:describe
**Description:** Describe design based on screenshot/video  
**Arguments:** `[screenshot-or-video-path]`

**What it does:**
- Uses ai-multimodal to describe super details
- Generates design implementation plan
- Does NOT implement

**Example usage:**
```
/design:describe path/to/design.png
```

---

### /design:3d
**Description:** Create immersive 3D designs with Three.js  
**Arguments:** `[tasks]`

**Skills:**
- ui-ux-pro-max
- threejs (Three.js/WebGL)
- frontend-design

**Features:**
- Custom GLSL shaders
- GPU-accelerated particles
- Immersive camera controls
- Post-processing effects
- Responsive design
- Interactive elements
- Smooth animations

**Gemini Skills Integration:**
- ai-multimodal for textures, skyboxes
- ImageMagick for image processing
- Eyes tools for visual analysis

**Example usage:**
```
/design:3d Create 3D product configurator with real-time rendering
```

---

### /design:video
**Description:** Create design based on video  
**Arguments:** `[video-path]`

**What it does:**
- Analyzes video with ai-multimodal
- Describes all interactions and animations
- Creates and implements plan
- Does NOT implement yet

**Example usage:**
```
/design:video path/to/design.mp4
```

---

## 11. CONTENT CREATION

### /content:fast
**Description:** Write creative & smart copy [FAST]  
**Arguments:** `[user-request]`

**Workflow:**
- Analyze with ai-multimodal (if screenshots/videos)
- Copywriter writes copy

**Example usage:**
```
/content:fast Write compelling product description for SaaS tool
```

---

### /content:good
**Description:** Write good creative & smart copy [GOOD]  
**Arguments:** `[user-request]`

**Workflow:**
1. Analyze screenshots/videos with ai-multimodal
2. Research (parallel agents)
3. Plan copy strategy
4. Copywriter implements
5. Report back

**Example usage:**
```
/content:good Create entire landing page copy with headlines, CTAs, testimonials
```

---

### /content:enhance
**Description:** Analyze and enhance existing copy  
**Arguments:** `[issues]`

**What it does:**
- Analyzes current copy
- Identifies issues
- Copywriter enhances

**Example usage:**
```
/content:enhance Headlines are weak and not compelling
```

---

### /content:cro
**Description:** Optimize content for conversion  
**Arguments:** `[issues]`

**25-Point CRO Framework:**
1. Headline 4-U (Useful, Unique, Urgent, Ultra-specific)
2. Above-Fold Value Proposition
3. CTA First-Person Psychology
4. 5-Field Form Maximum
5. Message Match Precision
6. Social Proof Near CTAs
7. Cognitive Bias Stack
8. PAS Copy Framework
9. Genuine Urgency Only
... (25 total)

**Workflow:**
- Analyze with ai-multimodal or web_fetch
- Scout codebase
- Copywriter optimizes

**Example usage:**
```
/content:cro Landing page conversion rate is below 2%, need to improve
```

---

## 12. TESTING

### /test:ui
**Description:** ⚡⚡ Run UI tests on website & generate report  
**Arguments:** `[url]` `[options]`

**Testing Scope:**
- Pages and components discovery
- Forms and navigation
- User flows
- Accessibility (WCAG)
- Responsive layouts
- Cross-browser compatibility
- Performance
- Security
- SEO

**Authentication Support:**
- Cookies injection
- Bearer token injection
- localStorage injection
- sessionStorage injection
- Multiple auth methods combined

**Output:**
- Comprehensive Markdown report
- Embedded screenshots
- Test results summary
- Recommendations

**Example usage:**
```
/test:ui https://example.com --mobile
/test:ui https://dashboard.example.com/admin --auth
```

---

## 13. SKILLS MANAGEMENT

### /skill:create
**Description:** Create a new agent skill  
**Arguments:** `[prompt-or-llms-or-github-url]`

**What it does:**
- Creates SKILL.md (quick reference)
- Creates reference files
- Creates scripts if needed
- Token-efficient progressive disclosure

**Important:**
- Skills teach HOW to perform tasks
- Not documentation of tools
- Claude Code activates multiple skills automatically

**Example usage:**
```
/skill:create https://github.com/stripe/stripe-python
/skill:create Create skill for AWS DynamoDB operations
```

---

### /skill:add
**Description:** Add reference files or scripts to skill  
**Arguments:** `[skill-name]` `[reference-or-script-prompt]`

**What it does:**
- Adds new resources to existing skill
- Maintains token efficiency
- Updates SKILL.md as needed

**Example usage:**
```
/skill:add stripe-payments Add webhook signature validation
```

---

### /skill:plan
**Description:** Plan to create new skill  
**Arguments:** `[skill-name]` `[prompt]`

**What it does:**
- Creates comprehensive skill creation plan
- User approves before implementation
- Follows progressive disclosure

**Example usage:**
```
/skill:plan datadog-monitoring Create comprehensive APM integration
```

---

### /skill:optimize
**Description:** Optimize an existing skill  
**Arguments:** `[skill-name]` `[prompt]`

**What it does:**
- Plans skill optimization
- User approves before implementation

**Example usage:**
```
/skill:optimize stripe-payments Improve error handling and edge cases
```

---

### /skill:optimize:auto
**Description:** Optimize skill automatically  
**Arguments:** `[skill-name]` `[prompt]`

**What it does:**
- Auto-optimizes without approval

**Example usage:**
```
/skill:optimize:auto stripe-payments
```

---

### /skill:fix-logs
**Description:** Fix agent skill based on logs.txt  
**Arguments:** `[prompt-or-path-to-skill]`

**What it does:**
- Analyzes logs.txt file
- Debugs skill issues
- Fixes problems

**Example usage:**
```
/skill:fix-logs payments-integration
```

---

## 14. INTEGRATION

### /integrate:polar
**Description:** ⚡⚡ Implement payment with Polar.sh  
**Arguments:** `[tasks]`

**Workflow:**
1. Scout for related resources
2. Plan with /plan:fast
3. Implement with /code

**Activates:** payment-integration skill

**Example usage:**
```
/integrate:polar Add subscription billing with Polar
```

---

### /integrate:sepay
**Description:** ⚡⚡ Implement payment with SePay.vn  
**Arguments:** `[tasks]`

**Workflow:**
1. Scout for related resources
2. Plan with /plan:fast
3. Implement with /code

**Activates:** payment-integration skill

**Example usage:**
```
/integrate:sepay Add Vietnamese bank payment support
```

---

## 15. NAVIGATION & UTILITIES

### /scout
**Description:** ⚡⚡ Scout given directories for files  
**Arguments:** `[user-prompt]` `[scale]` (default scale: 3)

**What it does:**
- Uses multiple Explore subagents (in parallel)
- Fast, token-efficient codebase search
- Finds files needed to complete task

**Workflow:**
- Analyzes and divides folders for agents
- Each agent searches in parallel
- 3-minute timeout per agent
- Returns consolidated file list

**Example usage:**
```
/scout Find all authentication-related files 3
/scout Where are the payment webhook handlers?
```

---

### /scout:ext
**Description:** ⚡ Use external agentic tools to scout  
**Arguments:** `[user-prompt]` `[scale]` (default: 3)

**What it does:**
- Uses Gemini CLI or opencode
- External tools with large context windows (1M+ tokens)
- Faster for complex searches
- Falls back to Explore if unavailable

**Tools Used (by scale):**
- ≤3: Gemini CLI
- 3-6: opencode
- ≥6: Explore subagents

**Example usage:**
```
/scout:ext Find all webhook handlers 2
```

---

### /preview
**Description:** Path to file, plan, or directory  
**Arguments:** `[path]` or `--stop`

**What it does:**
- Opens markdown-novel-viewer
- Beautiful rendering of markdown
- Browse directories
- Runs as CC background task

**Workflow:**
- Determines if path is file or directory
- Starts server on localhost
- Provides local and network URLs

**Example usage:**
```
/preview plans/my-plan/plan.md
/preview plans/
/preview docs/
/preview --stop
```

---

### /kanban
**Description:** AI agent orchestration board  
**Arguments:** `[dir]` (default: ./plans) or `--stop`

**What it does:**
- Visual dashboard for plans
- Progress tracking
- Timeline/Gantt visualization
- Activity heatmap
- Issue and branch links

**Runs as:** CC background task

**Future Phases:**
- Phase 2: Worktree integration with task spawning
- Phase 3: Full orchestration with parallel agents, code review, PR creation

**Example usage:**
```
/kanban plans/
/kanban --stop
```

---

### /worktree
**Description:** Create isolated git worktree  
**Arguments:** `[feature-description]`

**What it does:**
- Creates isolated worktree for parallel development
- Auto-detects branch prefix (feat, fix, refactor, docs, test, chore, perf)
- Asks for env files to copy
- For monorepo: asks which project

**Branch Prefix Detection:**
- "fix" keywords → `fix/`
- "refactor" keywords → `refactor/`
- "docs" keywords → `docs/`
- "test" keywords → `test/`
- "chore" keywords → `chore/`
- "perf" keywords → `perf/`
- Everything else → `feat/`

**Commands:**
- `create` - Create new worktree
- `remove` - Remove worktree and branch
- `info` - Get repo info
- `list` - List existing worktrees

**Example usage:**
```
/worktree fix the login validation bug
/worktree add dark mode feature
```

---

### /brainstorm
**Description:** ⚡⚡ Brainstorm a feature  
**Arguments:** `[question]`

**What it does:**
- Explores ideas without implementation
- Challenges assumptions
- Presents 2-3 alternatives with pros/cons
- Honors YAGNI, KISS, DRY

**Process:**
1. Discovery phase (ask clarifying questions)
2. Research phase (gather information)
3. Analysis phase (evaluate approaches)
4. Debate phase (present options)
5. Consensus phase (align on approach)
6. Documentation phase (create summary)
7. Finalize phase (optionally create plan)

**Output:**
- Markdown summary report
- Multiple approaches evaluated
- Final recommended solution
- Implementation considerations

**Example usage:**
```
/brainstorm How should we handle user onboarding?
```

---

### /journal
**Description:** ⚡ Write journal entries  
**Arguments:** (none)

**What it does:**
- Uses journal-writer subagent
- Explores memories and recent code changes
- Writes concise journal entries
- Saves to ./docs/journals/

**Entries Cover:**
- Most important events
- Key changes and impacts
- Critical decisions

**Example usage:**
```
/journal
```

---

### /coding-level
**Description:** Set coding experience level  
**Arguments:** `[0-5]`

**Levels:**
| Level | Name | For Whom |
|-------|------|----------|
| 0 | ELI5 | Zero coding experience |
| 1 | Junior | 0-2 years experience |
| 2 | Mid-Level | 3-5 years experience |
| 3 | Senior | 5-8 years experience |
| 4 | Tech Lead | 8-10 years experience |
| 5 | God Mode | Expert (default) |

**What it does:**
- Set in `.claude/.ck.json`
- Auto-injected at session start
- Adjusts explanation depth

**Example usage:**
```
/coding-level 2
```

---

### /use-mcp
**Description:** Utilize MCP server tools  
**Arguments:** `[task]`

**What it does:**
- Executes via Gemini CLI with stdin piping
- Preserves context budget
- Returns JSON output
- Falls back to mcp-manager subagent if needed

**Important:**
- Must use stdin piping (NOT deprecated -p flag)
- Use `-y` flag for auto-approval
- GEMINI.md auto-loaded for JSON enforcement

**Example usage:**
```
/use-mcp Search for database connection strings in codebase
```

---

## Key Principles

### YAGNI, KISS, DRY
- Every solution honors these principles
- No over-engineering
- No unnecessary complexity

### Token Efficiency
- Always maintain efficiency
- Use progressive disclosure
- Keep reports ≤150 lines (research)
- Plans < 80 lines overview

### Conciseness
- Sacrifice grammar for concision
- Get to the point
- No verbose explanations (unless requested)

### Quality First
- 100% test pass required
- 0 critical issues required
- No fake data/mocks/cheats
- Real, comprehensive testing

### User Control
- Block on user approval (when needed)
- Ask before major decisions
- Clear, honest communication
- Warn about risks/tradeoffs

---

## Unresolved Questions / Notes

1. **Parallel execution complexity:** Some commands support parallel phases which require careful dependency management. Edge cases in conflict prevention may need validation.

2. **Skills activation:** Commands often "activate" skills - this assumes skills catalog exists and is properly organized. Integration with skills system should be verified.

3. **Git workflow:** All git commands assume GitHub setup. Other git platforms may need adaptation.

4. **MCP tools:** `/use-mcp` requires Gemini CLI which may not be installed - fallback behavior needs testing.

5. **External tools:** `/scout:ext` requires Gemini CLI or opencode which are external dependencies.

6. **UI testing:** `/test:ui` requires authentication injection which is complex and may have platform-specific issues.

