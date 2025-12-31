# ClaudeKit Engineer Workflows Catalog

**Generated:** 2025-12-29
**Source Directory:** `../claudekit-engineer/.claude/workflows/`
**Total Workflows Found:** 4

---

## Workflow 1: Primary Workflow

**Filename:** `primary-workflow.md`

### Purpose
Defines the complete development lifecycle from code implementation through testing, quality review, and integration. Acts as the master workflow orchestrating all development activities.

### Description
The primary workflow establishes a comprehensive approach to feature development and bug fixing, ensuring code quality through multi-stage validation and delegation to specialized subagents.

### Phases/Steps Involved

1. **Code Implementation**
   - Delegate to `planner` agent to create implementation plan with TODO tasks in `./plans` directory
   - Use multiple `researcher` agents in parallel for technical research
   - Write clean, readable, maintainable code following architectural patterns
   - Implement features per specifications with proper edge case handling
   - Update existing files directly (no new "enhanced" files)
   - Run compile command/script after code modifications to check for errors

2. **Testing**
   - Delegate to `tester` agent to run tests and analyze summary report
   - Write comprehensive unit tests with high code coverage
   - Test error scenarios and validate performance requirements
   - Do NOT ignore failing tests to pass the build
   - Do NOT use fake data, mocks, or temporary solutions
   - Fix failing tests following recommendations; repeat testing until all pass

3. **Code Quality**
   - Delegate to `code-reviewer` agent for code review after implementation
   - Follow coding standards and conventions
   - Write self-documenting code with meaningful comments for complex logic
   - Optimize for performance and maintainability

4. **Integration**
   - Follow the plan provided by `planner` agent
   - Ensure seamless integration with existing code
   - Follow API contracts precisely
   - Maintain backward compatibility
   - Document breaking changes if any
   - Delegate to `docs-manager` agent to update `./docs` directory if needed

5. **Debugging** (triggered by bug reports)
   - Delegate to `debugger` agent to run tests and analyze summary report
   - Read summary report and implement fix
   - Delegate to `tester` agent for post-fix testing
   - Repeat from testing phase if tests fail

### When to Use It
- **Feature Development:** Primary path for implementing new features
- **Bug Fixes:** When debugging server issues or CI/CD pipeline failures
- **Code Refactoring:** Major code quality improvements
- **Integration Work:** Connecting components or merging features

### Prerequisites
- Established architectural patterns in codebase
- Documented specifications for features
- Test infrastructure in place
- Access to `planner`, `researcher`, `tester`, `code-reviewer`, and `docs-manager` subagents
- Compile command/script configured for the project

---

## Workflow 2: Development Rules

**Filename:** `development-rules.md`

### Purpose
Establishes coding standards, quality guidelines, and pre-commit/push rules. Provides guardrails for implementation to ensure consistency and quality across the codebase.

### Description
Comprehensive set of rules governing file organization, code quality standards, skill activation, and version control practices. Acts as enforcement mechanism for the primary workflow.

### Sections/Rules Involved

1. **General Guidelines**
   - Use kebab-case for file names with meaningful descriptive names
   - Keep individual code files under 200 lines for optimal context management
   - Split large files into smaller focused components/modules
   - Use composition over inheritance for complex widgets
   - Extract utility functions into separate modules
   - Create dedicated service classes for business logic

2. **Skill Activation**
   - Activate `docs-seeker` skill (context7) when exploring latest docs
   - Use `gh` bash command for GitHub feature interactions
   - Use `psql` bash command for Postgres database debugging
   - Use `ai-multimodal` skill for describing images, videos, documents
   - Use `ai-multimodal` + `imagemagick` for generating/editing media
   - Use `sequential-thinking` and `debugging` skills for code analysis

3. **Code Quality Guidelines**
   - Read and follow codebase structure in `./docs`
   - Don't be too harsh on linting; ensure no syntax errors and code is compilable
   - Prioritize functionality and readability over strict style enforcement
   - Use reasonable code quality standards enhancing developer productivity
   - Implement try-catch error handling and security standards
   - Use `code-reviewer` agent after every implementation

4. **Pre-commit/Push Rules**
   - Run linting before commit
   - Run tests before push (DO NOT ignore failed tests)
   - Keep commits focused on actual code changes
   - DO NOT commit confidential information (dotenv files, API keys, credentials)
   - Create clean professional commit messages in conventional commit format

5. **Core Principles**
   - YAGNI (You Aren't Gonna Need It)
   - KISS (Keep It Simple, Stupid)
   - DRY (Don't Repeat Yourself)

### When to Use It
- **During Implementation:** Reference for all coding decisions
- **Code Review:** Checklist for reviewing submitted code
- **Onboarding:** Training new team members on project standards
- **Pre-commit:** Validation checklist before pushing code

### Prerequisites
- `.claude/workflows/` directory in project
- `./docs/` directory with codebase structure documentation
- Git repository with hooks configured
- Linting tools configured for the project

---

## Workflow 3: Orchestration Protocol

**Filename:** `orchestration-protocol.md`

### Purpose
Defines patterns for coordinating multiple subagents and managing task dependencies. Enables efficient parallel and sequential execution of complex development tasks.

### Description
Provides tactical guidance on when and how to chain or parallelize subagent work, ensuring coordination without conflicts and proper context passing between agents.

### Execution Patterns

1. **Sequential Chaining**
   - **Use Case:** When tasks have dependencies or require outputs from previous steps
   - **Primary Pattern:** Planning → Implementation → Testing → Review
   - **Alternative Pattern:** Research → Design → Code → Documentation
   - **Execution:** Each agent completes fully before next begins
   - **Context:** Pass context and outputs between agents in chain

2. **Parallel Execution**
   - **Use Case:** For independent tasks without conflicts
   - **Typical Pattern:** Code + Tests + Docs simultaneously
   - **Scenarios:**
     - Multiple feature branches (different agents, isolated features)
     - Cross-platform development (iOS and Android specific implementations)
   - **Coordination:** Plan integration points before execution begins
   - **Merge Strategy:** Ensure no file conflicts or shared resource contention

### When to Use It
- **Large Feature Development:** Chain planning → implementation → testing → review
- **New System Components:** Chain research → design → code → documentation
- **Parallel Feature Work:** Spawn multiple agents for independent features
- **Cross-platform Work:** Parallelize iOS/Android implementations
- **Documentation + Code:** Run simultaneously when changes are independent

### Prerequisites
- Multiple subagents available for delegation
- Clear task dependency mapping
- Isolated file/resource separation for parallel tasks
- Git branch strategy to avoid conflicts
- Integration plan for merging parallel outputs

---

## Workflow 4: Project Documentation Management

**Filename:** `documentation-management.md`

### Purpose
Establishes procedures for maintaining project documentation, tracking progress, and ensuring all stakeholders have current information about roadmap, changelog, and architecture.

### Description
Comprehensive documentation lifecycle covering when and how to update critical project documents. Includes automatic update triggers and protocols for maintaining documentation accuracy.

### Sections/Processes

1. **Living Documents Maintained**
   - **Project Roadmap** (`./docs/development-roadmap.md`): Phases, milestones, progress
   - **Project Changelog** (`./docs/project-changelog.md`): Significant changes, features, fixes
   - **System Architecture** (`./docs/system-architecture.md`): Architecture details
   - **Code Standards** (`./docs/code-standards.md`): Coding conventions

2. **Automatic Update Triggers**
   - **After Feature Implementation:** Update roadmap progress status and changelog entries
   - **After Major Milestones:** Review/adjust roadmap phases, update success metrics
   - **After Bug Fixes:** Document fixes with severity and impact
   - **After Security Updates:** Record security improvements and version updates
   - **Weekly Reviews:** Update progress percentages and milestone statuses

3. **Documentation Update Protocol**
   - **Step 1 - Before Updates:** Read current roadmap and changelog status
   - **Step 2 - During Updates:** Maintain version consistency and proper formatting
   - **Step 3 - After Updates:** Verify links, dates, and cross-references
   - **Step 4 - Quality Check:** Ensure updates align with actual implementation progress

4. **Responsibility**
   - `project-manager` agent MUST update documents when:
     - Development phase status changes (e.g., "In Progress" → "Complete")
     - Major features are implemented or released
     - Significant bugs resolved or security patches applied
     - Project timeline or scope adjustments made
     - External dependencies or breaking changes occur

5. **Plans Directory Structure**
   - **Location:** Save plans in `./plans` directory with timestamp and descriptive name
   - **Format:** `plans/YYMMDD-HHMM-feature-name/`
   - **Example:** `plans/251101-1505-authentication-and-profile-implementation/`

6. **Plan File Organization**
   ```
   plans/YYMMDD-HHMM-feature-name/
   ├── research/
   │   ├── researcher-XX-report.md
   │   └── ...
   ├── reports/
   │   ├── scout-report.md
   │   ├── researcher-report.md
   │   └── ...
   ├── plan.md                              # Overview access point
   ├── phase-01-setup-environment.md        # Setup environment
   ├── phase-02-implement-database.md       # Database models
   ├── phase-03-implement-api-endpoints.md  # API endpoints
   ├── phase-04-implement-ui-components.md  # UI components
   ├── phase-05-implement-authentication.md # Auth & authorization
   ├── phase-06-implement-profile.md        # Profile page
   └── phase-07-write-tests.md              # Tests
   ```

7. **Phase File Structure** (each phase should contain)
   - **Context Links:** Related reports, files, documentation
   - **Overview:** Priority, current status, brief description
   - **Key Insights:** Important findings, critical considerations
   - **Requirements:** Functional and non-functional requirements
   - **Architecture:** System design, component interactions, data flow
   - **Related Code Files:** Files to modify, create, delete
   - **Implementation Steps:** Detailed, numbered steps with specific instructions
   - **Todo List:** Checkbox list for tracking
   - **Success Criteria:** Definition of done, validation methods
   - **Risk Assessment:** Potential issues, mitigation strategies
   - **Security Considerations:** Auth/authorization, data protection
   - **Next Steps:** Dependencies, follow-up tasks

### When to Use It
- **After Each Feature:** Update roadmap and changelog
- **Major Milestones:** Review and adjust all project documentation
- **Bug Fixes:** Document in changelog with severity
- **Security Updates:** Record all improvements
- **Weekly Check-ins:** Update progress percentages
- **Project Planning:** Create detailed phase plans using established structure

### Prerequisites
- `./docs/` directory with roadmap and changelog files
- `./plans/` directory for structured implementation plans
- `project-manager` agent available for documentation updates
- Git repository for tracking documentation changes
- Clear versioning scheme and naming conventions

---

## Summary Table

| Workflow | Type | Purpose | Primary User |
|----------|------|---------|--------------|
| Primary Workflow | Process | Complete development lifecycle | Developer/Feature Owner |
| Development Rules | Standards | Coding guidelines and quality gates | All developers |
| Orchestration Protocol | Pattern | Subagent coordination strategy | Project Manager |
| Documentation Management | Process | Living docs and roadmap maintenance | Project Manager/Docs Owner |

---

## Integration Points

1. **Primary Workflow uses Development Rules** for code quality enforcement
2. **Primary Workflow uses Orchestration Protocol** for subagent delegation
3. **Primary Workflow triggers Documentation Management** at integration phase
4. **Documentation Management** uses established phase structure from Primary Workflow

## Key Observations

- **Subagent Ecosystem:** Workflows depend on 7+ specialized subagents (planner, researcher, tester, code-reviewer, docs-manager, debugger, project-manager)
- **Quality Gates:** Multiple checkpoints (compilation, testing, code review) before integration
- **Systematic Planning:** All implementation requires upfront planning with TODO tasks
- **Living Documentation:** Documentation treated as first-class artifact requiring consistent maintenance
- **No Shortcuts:** Emphasis on real implementation, no mocks/fakes, no ignoring failed tests

