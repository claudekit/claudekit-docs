# Code Standards & Development Guidelines

**Last Updated**: 2025-10-30
**Applies To**: ClaudeKit Engineer v1.0+
**Status**: Active

---

## Table of Contents

1. [Core Development Principles](#core-development-principles)
2. [File Organization](#file-organization)
3. [Naming Conventions](#naming-conventions)
4. [Agent Development Standards](#agent-development-standards)
5. [Command Development Standards](#command-development-standards)
6. [Documentation Standards](#documentation-standards)
7. [Code Quality Requirements](#code-quality-requirements)
8. [Git Workflow Standards](#git-workflow-standards)
9. [Testing Standards](#testing-standards)
10. [Security Standards](#security-standards)

---

## Core Development Principles

### YAGNI (You Aren't Gonna Need It)

**Definition**: Only implement features that are immediately required.

**Application**:
- Don't add functionality "just in case"
- Avoid premature optimization
- Build the simplest solution that works
- Add complexity only when proven necessary

**Examples**:
```markdown
❌ Bad: Adding caching layer before performance issues identified
✅ Good: Add caching after profiling shows bottleneck

❌ Bad: Building complex configuration system for single setting
✅ Good: Use simple environment variable, expand if needed

❌ Bad: Creating abstract factory pattern for single implementation
✅ Good: Direct implementation, refactor when second use case appears
```

---

### KISS (Keep It Simple, Stupid)

**Definition**: Prefer simple, straightforward solutions over complex ones.

**Application**:
- Choose clarity over cleverness
- Minimize dependencies and abstractions
- Write code that's easy to understand
- Favor explicit over implicit

**Examples**:
```markdown
❌ Bad: Complex regex when simple string methods work
✅ Good: Use indexOf, substring, split for simple parsing

❌ Bad: Deep inheritance hierarchies
✅ Good: Composition and simple class structures

❌ Bad: Overly abstracted generic solutions
✅ Good: Concrete implementations that solve actual problems
```

---

### DRY (Don't Repeat Yourself)

**Definition**: Eliminate code duplication through abstraction and reuse.

**Application**:
- Extract common logic into functions
- Use shared utilities and libraries
- Create reusable components
- Maintain single source of truth

**Examples**:
```markdown
❌ Bad: Duplicate validation logic across multiple files
✅ Good: Shared validation utility functions

❌ Bad: Copy-pasted error handling in every function
✅ Good: Centralized error handling middleware

❌ Bad: Repeated configuration values
✅ Good: Configuration file with exports
```

---

## File Organization

### Directory Structure

```
claudekit-engineer/
├── .husky/                    # Git hooks
│   └── commit-msg             # Commit message validation
├── .opencode/                 # Agent and command definitions
│   ├── agent/                 # AI agent configurations
│   │   ├── *.md              # One file per agent
│   │   └── ...
│   └── command/               # Slash command definitions
│       ├── design/            # Design-related commands
│       ├── docs/              # Documentation commands
│       ├── fix/               # Fix and debug commands
│       ├── git/               # Git operation commands
│       ├── plan/              # Planning commands
│       └── *.md               # Core commands
├── guide/                     # User-facing documentation
│   ├── COMMANDS.md            # Command reference guide
│   └── SKILLS.md              # Skills documentation
├── docs/                      # Project documentation
│   ├── project-overview-pdr.md    # Product requirements
│   ├── codebase-summary.md        # Generated codebase summary
│   ├── code-standards.md          # This file
│   ├── system-architecture.md     # Architecture docs
│   └── research/              # Research reports
├── plans/                     # Implementation plans
│   ├── templates/             # Plan templates
│   │   ├── feature-implementation-template.md
│   │   ├── bug-fix-template.md
│   │   └── refactor-template.md
│   └── reports/               # Agent communication
│       └── YYMMDD-from-to-task-report.md
├── .commitlintrc.json         # Commit linting rules
├── .env.example               # Environment template
├── .gitignore                 # Git exclusions
├── .releaserc.json            # Release configuration
├── .repomixignore             # Repomix exclusions
├── CHANGELOG.md               # Version history
├── CLAUDE.md                  # AI instructions
├── LICENSE                    # MIT license
├── package.json               # Dependencies
└── README.md                  # Project overview
```

---

### File Size Guidelines

**Maximum File Size**: 500 lines per file

**Rationale**:
- Optimal for AI context management
- Improves readability and maintainability
- Encourages proper separation of concerns
- Reduces cognitive load

**Refactoring Strategy**:
```markdown
When file exceeds 500 lines:

1. **Identify Logical Boundaries**
   - Separate modules or components
   - Extract utility functions
   - Split related functionality

2. **Extract Components**
   - Create focused, single-responsibility files
   - Use clear naming for extracted files
   - Maintain proper imports/exports

3. **Update References**
   - Update all import statements
   - Test functionality after extraction
   - Document new file structure
```

---

## Naming Conventions

### File Naming

**Agent Files**: `kebab-case.md`
```
✅ code-reviewer.md
✅ ui-ux-designer.md
✅ planner-researcher.md
❌ CodeReviewer.md
❌ ui_ux_designer.md
```

**Command Files**: `kebab-case.md`
```
✅ fix/fast.md
✅ docs/init.md
✅ plan/two.md
❌ fixFast.md
❌ docs_init.md
```

**Plan Files**: `YYMMDD-feature-name-plan.md`
```
✅ 251030-auth-system-plan.md
✅ 251115-database-migration-plan.md
❌ auth-plan.md
❌ 2025-10-30-plan.md
```

**Report Files**: `YYMMDD-from-agent-to-agent-task-report.md`
```
✅ 251030-from-planner-to-main-auth-implementation-report.md
✅ 251115-from-tester-to-debugger-test-failures-report.md
❌ planner-report.md
❌ test-results.md
```

---

### Variable Naming

**JavaScript/TypeScript**:
```javascript
// Variables and functions: camelCase
const userProfile = {};
function getUserData() {}

// Constants: SCREAMING_SNAKE_CASE
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = 'https://api.example.com';

// Classes and interfaces: PascalCase
class UserService {}
interface ApiResponse {}

// Private members: _camelCase (if needed)
class Example {
  private _internalState;
}
```

**Markdown/YAML**:
```yaml
# Frontmatter fields: kebab-case
---
description: Agent description
model: anthropic/claude-sonnet-4
mode: subagent
---
```

---

### Directory Naming

**Directories**: `kebab-case`
```
✅ .opencode/
✅ plans/templates/
✅ docs/research/
❌ PlansTemplates/
❌ docs_research/
```

---

## Agent Development Standards

### Agent File Structure

**Required Frontmatter**:
```markdown
---
name: agent-name                    # Unique identifier (optional)
description: |                      # Multi-line description
  Use this agent when...
  Examples: <example>...</example>
mode: subagent                      # or "all" for main agents
model: anthropic/claude-sonnet-4    # Model identifier
temperature: 0.1                    # Optional, default varies
---
```

**Required Sections**:

1. **Role Description** (1-2 paragraphs)
   - Clear explanation of agent's expertise
   - Specialization areas
   - Core capabilities

2. **Core Responsibilities** (Bulleted list)
   - Specific tasks the agent handles
   - Expected inputs and outputs
   - Quality standards

3. **Working Process** (Numbered steps)
   - Step-by-step workflow
   - Decision points
   - Error handling approach

4. **Output Format** (Template or description)
   - Expected deliverables
   - Report structure
   - File locations

5. **Quality Standards** (Requirements)
   - Acceptance criteria
   - Performance expectations
   - Error tolerance

6. **Important Guidelines** (Best practices)
   - Do's and don'ts
   - Common pitfalls
   - Integration notes

---

### Agent Communication Protocol

**File-Based Communication**:
- All inter-agent communication via markdown files
- Reports saved in `./plans/reports/`
- Standardized naming: `YYMMDD-from-agent-to-agent-task-report.md`

**Report Structure**:
```markdown
# Report: [Task Name]

**From**: [Agent Name]
**To**: [Recipient Agent or Main]
**Date**: YYYY-MM-DD
**Status**: [In Progress / Complete / Blocked]

## Summary
[2-3 sentence overview]

## Details
[Comprehensive findings]

## Recommendations
[Actionable next steps]

## Unresolved Questions
[If any]
```

---

### Agent Model Selection

**Model Guidelines**:

**Claude Sonnet 4** - Balanced performance and cost
- Code review
- Debugging
- UI/UX design
- Documentation management

**Claude Opus 4** - Maximum reasoning capability
- Complex architectural planning
- Critical system design
- High-stakes technical decisions

**Google Gemini 2.5 Flash** - Fast, cost-effective
- Documentation generation
- Routine planning tasks
- Content processing

**Grok Code** - Specialized coding tasks
- Testing execution
- Git operations
- Quick code analysis

---

## Command Development Standards

### Command File Structure

**Required Frontmatter**:
```markdown
---
description: Brief description of command purpose
---
```

**Command Body**:
```markdown
[Instructions for main agent]

## Workflow:
1. Step-by-step process
2. Agent delegation pattern
3. Expected outputs

## Notes:
- Important considerations
- Special requirements
- Edge cases

**IMPORTANT**: Key warnings or constraints
```

---

### Command Argument Handling

**Variable Substitution**:
- `$ARGUMENTS` - All arguments as single string
- `$1`, `$2`, `$3` - Individual positional arguments

**Examples**:
```markdown
# Command: /plan [task]
# Usage: /plan "implement user authentication"

Use the `planner` subagent to plan for this task:
<task>
 $ARGUMENTS
</task>
```

---

### Command Orchestration Patterns

**Sequential Execution**:
```markdown
## Workflow:
1. Use `planner` to create implementation plan
2. Wait for plan completion
3. Use main agent to implement plan
4. Use `tester` to validate implementation
5. Use `code-reviewer` to assess quality
6. Use `git-manager` to commit changes
```

**Parallel Execution**:
```markdown
## Workflow:
1. Use `planner` to spawn multiple `researcher` agents in parallel:
   - researcher (database options)
   - researcher (authentication methods)
   - researcher (UI frameworks)
2. Wait for all researchers to report back
3. Synthesize findings and create plan
```

**Conditional Execution**:
```markdown
## Workflow:
1. Use `tester` to run tests
2. If tests fail:
   - Use `debugger` to analyze failures
   - Use main agent to implement fixes
   - Repeat from step 1
3. If tests pass:
   - Proceed to code review
```

---

## Documentation Standards

### Markdown Formatting

**Headers**:
```markdown
# H1: Document title only (once per file)
## H2: Major sections
### H3: Subsections
#### H4: Detailed points
```

**Emphasis**:
```markdown
**Bold** for important terms and definitions
*Italic* for emphasis
`Code` for inline code, commands, file names
```

**Lists**:
```markdown
Unordered lists:
- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2

Ordered lists:
1. First step
2. Second step
3. Third step
```

**Code Blocks**:
````markdown
```language
code here
```

Languages: javascript, typescript, bash, markdown, yaml, json, python
````

**Links**:
```markdown
[Link text](./relative/path.md)
[External link](https://example.com)
[Reference link][ref-id]

[ref-id]: https://example.com
```

---

### Documentation Sections

**Required in All Docs**:

1. **Title** (H1)
2. **Metadata** (optional but recommended)
   - Last Updated date
   - Version number
   - Status (Draft, Active, Deprecated)
3. **Table of Contents** (for docs >1000 words)
4. **Introduction/Overview**
5. **Main Content** (organized by H2 sections)
6. **Examples** (when applicable)
7. **Related Resources** (when applicable)

---

### Code Examples

**Requirements**:
- All examples must be tested and functional
- Include necessary context and imports
- Show both correct and incorrect approaches
- Provide explanations

**Format**:
```markdown
**Good Example**:
\```javascript
// Descriptive comment
const result = correctApproach();
\```

**Bad Example**:
\```javascript
// Why this is wrong
const result = incorrectApproach();
\```

**Explanation**: Why the good approach is better...
```

---

## Code Quality Requirements

### Code Review Checklist

**Before Completion**:
- [ ] All syntax errors resolved
- [ ] Code compiles successfully
- [ ] All tests pass
- [ ] Type safety validated
- [ ] Security vulnerabilities addressed
- [ ] Performance acceptable
- [ ] Documentation updated
- [ ] No secrets in code or commits

---

### Linting Standards

**Philosophy**: Reasonable standards that enhance productivity

**Priority Levels**:
1. **Critical**: Syntax errors, security issues
2. **High**: Type safety, error handling
3. **Medium**: Code style, maintainability
4. **Low**: Formatting preferences

**Approach**:
- Fix critical and high issues immediately
- Address medium issues when practical
- Low issues are suggestions, not requirements

---

### Error Handling

**Required Patterns**:

**Try-Catch Blocks**:
```javascript
try {
  // Risky operation
  const result = await riskyOperation();
  return result;
} catch (error) {
  // Specific error handling
  if (error instanceof SpecificError) {
    // Handle specific error
  }
  // Log error
  logger.error('Operation failed', { error });
  // User-friendly message
  throw new Error('Failed to complete operation. Please try again.');
}
```

**Input Validation**:
```javascript
function processUser(user) {
  // Validate required fields
  if (!user || !user.id || !user.email) {
    throw new Error('Invalid user data: missing required fields');
  }

  // Validate data types
  if (typeof user.id !== 'string') {
    throw new Error('Invalid user ID: must be string');
  }

  // Proceed with processing
  return validateAndProcess(user);
}
```

**Error Messages**:
- Clear and actionable
- Include context (what failed, why, what to do)
- No sensitive information in messages
- Logged errors include stack traces

---

## Git Workflow Standards

### Commit Message Format

**Conventional Commits**:
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style/formatting
- `refactor`: Code refactoring
- `test`: Test additions/changes
- `chore`: Maintenance tasks
- `build`: Build system changes
- `ci`: CI/CD changes
- `perf`: Performance improvements
- `revert`: Revert previous commit

**Rules**:
- Subject: lowercase, no period, <100 chars
- Body: wrap at 300 chars, explain what and why
- Footer: BREAKING CHANGE or issue references

**Examples**:
```
feat(auth): add OAuth2 authentication

Implement OAuth2 flow with Google and GitHub providers.
Includes token refresh and secure storage.

Closes #123

---

fix(api): resolve timeout in database queries

Database queries were timing out due to missing index.
Added index on user_id column to improve performance.

---

docs: update installation guide

Add troubleshooting section for common setup issues.

---

BREAKING CHANGE: API endpoints redesigned

POST /users is now POST /api/v2/users
Response format changed from XML to JSON
```

---

### Pre-Commit Checks

**Automated Checks**:
1. **Secret Detection** - Scan for credentials
2. **Lint Validation** - Run linters
3. **Commit Message** - Validate conventional format
4. **File Size** - Warn on large files

**Manual Checks**:
- Review staged changes
- Verify no debug code
- Confirm no commented code
- Check for TODO comments

---

### Branch Strategy

**Branch Naming**:
```
feature/short-description
fix/issue-description
docs/documentation-topic
refactor/component-name
```

**Workflow**:
1. Create branch from `main`
2. Make focused commits
3. Keep commits atomic
4. Rebase before merging
5. Squash if needed
6. Delete branch after merge

---

## Testing Standards

### Test Coverage Requirements

**Minimum Coverage**: 80% overall

**Priority Areas**:
- Critical business logic: 100%
- API endpoints: 95%
- Utility functions: 90%
- UI components: 80%

---

### Test Types

**Unit Tests**:
- Test individual functions
- Mock external dependencies
- Fast execution (<1ms per test)
- Isolated and independent

**Integration Tests**:
- Test component interactions
- Use test databases
- Moderate speed (<100ms per test)
- Setup and teardown required

**End-to-End Tests**:
- Test complete workflows
- Use test environment
- Slower execution (<5s per test)
- Realistic scenarios

---

### Test Organization

**File Structure**:
```
src/
├── utils/
│   ├── validation.ts
│   └── validation.test.ts    # Co-located tests
├── services/
│   ├── userService.ts
│   └── userService.test.ts
└── __tests__/                # Integration tests
    └── api.test.ts
```

**Naming**:
```javascript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create user with valid data', () => {});
    it('should throw error for invalid email', () => {});
    it('should hash password before saving', () => {});
  });
});
```

---

## Security Standards

### Secret Management

**Never Commit**:
- `.env` files (use `.env.example`)
- API keys and tokens
- Database credentials
- Private keys and certificates
- AWS/GCP credentials

**Environment Variables**:
```bash
# .env.example (commit this)
API_KEY=your-api-key-here
DATABASE_URL=postgresql://user:pass@host:port/db

# .env (never commit)
API_KEY=actual-secret-key
DATABASE_URL=postgresql://real-user:real-pass@real-host:5432/prod_db
```

---

### Input Validation

**Always Validate**:
- User input
- API responses
- File uploads
- Database queries
- External data sources

**Validation Example**:
```javascript
function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    throw new Error('Email must be a non-empty string');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }

  return email.toLowerCase().trim();
}
```

---

### Security Best Practices

**OWASP Top 10 Coverage**:
1. **Injection** - Parameterized queries, input validation
2. **Broken Authentication** - Secure session management, MFA
3. **Sensitive Data Exposure** - Encryption, secure transmission
4. **XML External Entities** - Disable XXE in parsers
5. **Broken Access Control** - Role-based permissions
6. **Security Misconfiguration** - Secure defaults, hardening
7. **XSS** - Output encoding, CSP headers
8. **Insecure Deserialization** - Validate serialized data
9. **Known Vulnerabilities** - Regular dependency updates
10. **Insufficient Logging** - Comprehensive audit trails

---

## Summary

### Quick Reference

**Core Principles**: YAGNI, KISS, DRY
**File Size Limit**: 500 lines
**Naming**: kebab-case for files, camelCase for code
**Agents**: Markdown with frontmatter, clear responsibilities
**Commands**: Workflow orchestration, argument substitution
**Documentation**: Comprehensive, examples, up-to-date
**Git**: Conventional commits, atomic changes
**Testing**: 80% coverage, unit+integration+E2E
**Security**: No secrets, validate input, OWASP Top 10

---

**Enforcement**: All standards enforced through automated reviews by code-reviewer agent
**Updates**: Standards evolve based on project needs and community feedback
**Exceptions**: Discuss with team before deviating from standards

---

**Version**: 1.0
**Last Review**: 2025-10-30
**Next Review**: Q1 2025
**Owner**: ClaudeKit Team
