---
title: /docs:update
description: "Documentation for /docs:update
description:
section: docs
category: commands/docs-cmd
order: 61
published: true"
section: docs
category: commands/docs-cmd
order: 61
published: true
---

# /docs:update

Comprehensively analyze your codebase and update all documentation files to ensure they accurately reflect the current state of your project. Uses the `docs-manager` agent to maintain synchronized, high-quality documentation.

## Syntax

```bash
/docs:update [additional requests]
```

### Parameters

- `[additional requests]` (optional): Specific documentation updates or focus areas

## How It Works

The `/docs:update` command uses the `docs-manager` agent with this workflow:

### 1. Codebase Analysis

- Generates comprehensive codebase compaction using `repomix`
- Creates/updates `./docs/codebase-summary.md`
- Scans project structure and architecture
- Identifies key components and patterns
- Analyzes dependencies and integrations

### 2. Documentation Review

- Reads all existing documentation in `./docs/` directory
- Identifies outdated information
- Finds gaps and inconsistencies
- Cross-references with actual code implementation
- Checks examples and code snippets for accuracy

### 3. Systematic Updates

- Updates each documentation file:
  - `README.md` - Project overview and quick start
  - `docs/project-overview-pdr.md` - Product Development Requirements
  - `docs/codebase-summary.md` - Comprehensive codebase summary
  - `docs/code-standards.md` - Codebase structure and standards
  - `docs/system-architecture.md` - System architecture documentation
  - `docs/project-roadmap.md` - Project roadmap and future plans
  - `docs/deployment-guide.md` (optional) - Deployment instructions
  - `docs/design-guidelines.md` (optional) - Design system guidelines

### 4. Quality Assurance

- Ensures consistent formatting and terminology
- Validates all links and references
- Verifies code examples are functional
- Maintains documentation hierarchy
- Updates version information and timestamps

## When to Use

### ✅ Perfect For

**After Major Features**
```bash
# Implemented new authentication system
/docs:update
```

**Refactoring Projects**
```bash
# Refactored entire API layer
/docs:update [focus on API architecture changes]
```

**New Team Members**
```bash
# Preparing documentation for onboarding
/docs:update [ensure all setup instructions are current]
```

**Pre-Release**
```bash
# Before version release
/docs:update [prepare for v2.0 release]
```

**Quarterly Maintenance**
```bash
# Regular documentation review
/docs:update [quarterly documentation audit]
```

### ❌ Don't Use For

**Simple Typos**
```bash
❌ /docs:update [fix typo in README]
✅ Just edit the README directly
```

**No Code Changes**
```bash
❌ /docs:update [just checking]
✅ Only run after meaningful code changes
```

**Quick Status Check**
```bash
❌ /docs:update [what changed?]
✅ /watzup [review recent changes]
```

## Examples

### After Feature Implementation

```bash
/docs:update
```

**What happens:**
```
1. Analyzing codebase
   $ repomix
   ✓ Generated: ./repomix-output.xml (245KB, 45K tokens)
   ✓ Created: ./docs/codebase-summary.md

2. Reviewing existing documentation
   - README.md: Outdated (mentions old API structure)
   - project-overview-pdr.md: Missing new features
   - code-standards.md: Current
   - system-architecture.md: Needs update (new microservices)
   - codebase-summary.md: Regenerated

3. Updating documentation
   ✓ README.md
     - Updated API endpoint examples
     - Added new environment variables
     - Refreshed feature list

   ✓ project-overview-pdr.md
     - Added OAuth2 authentication section
     - Updated technical requirements
     - Added new acceptance criteria

   ✓ system-architecture.md
     - Added payment service architecture
     - Updated database schema diagram
     - Documented new message queue integration

   ✓ codebase-summary.md
     - Complete project structure overview
     - File organization and naming conventions
     - Key architectural patterns

4. Summary
   Files updated: 4
   Sections added: 12
   Examples refreshed: 8
   Broken links fixed: 3

✓ Documentation synchronized (3m 45s)
```

### Focused Update

```bash
/docs:update [update API documentation with new endpoints]
```

**What happens:**
```
1. Analyzing API changes
   - New endpoints: 5 (user management)
   - Modified endpoints: 3 (authentication)
   - Deprecated endpoints: 1 (legacy login)

2. Updating API documentation
   ✓ project-overview-pdr.md
     - Added API endpoints section
     - Documented request/response formats
     - Added authentication requirements

   ✓ code-standards.md
     - Updated API design patterns
     - Added endpoint naming conventions
     - Documented error response structure

   ✓ README.md
     - Added API quick start examples
     - Updated authentication flow

3. Validation
   - All endpoints documented
   - Request examples tested
   - Response schemas validated

✓ API documentation updated (2m 12s)
```

### Pre-Release Documentation

```bash
/docs:update [prepare documentation for v2.0 release]
```

**What happens:**
```
1. Comprehensive review
   - Reviewing 8 documentation files
   - Checking 156 code examples
   - Validating 43 links

2. Major updates
   ✓ README.md
     - Updated version to 2.0
     - Added breaking changes section
     - Refreshed installation instructions

   ✓ project-overview-pdr.md
     - Added v2.0 features overview
     - Updated technical requirements
     - Added migration guide from v1.x

   ✓ project-roadmap.md
     - Marked v2.0 items as completed
     - Added v2.1 and v3.0 planning
     - Updated timeline

   ✓ deployment-guide.md
     - Updated for new deployment architecture
     - Added Docker Compose examples
     - Documented environment variables

3. Quality checks
   ✓ All links validated
   ✓ Code examples tested
   ✓ Consistent formatting applied
   ✓ Version numbers updated throughout

✓ Release documentation ready (4m 23s)
```

### Architecture Documentation

```bash
/docs:update [focus on system architecture]
```

**What happens:**
```
1. Architecture analysis
   - Microservices: 7 services identified
   - Databases: 2 (PostgreSQL, Redis)
   - Message queues: RabbitMQ
   - External APIs: 4 integrations

2. Updating system-architecture.md
   ✓ Added system overview diagram
   ✓ Documented each microservice
     - API Gateway
     - Auth Service
     - User Service
     - Payment Service
     - Notification Service
     - Analytics Service
     - Background Job Service

   ✓ Database architecture
     - Schema relationships
     - Migration strategy
     - Backup procedures

   ✓ Communication patterns
     - REST APIs
     - Message queue flows
     - WebSocket connections

   ✓ Deployment architecture
     - Container orchestration
     - Load balancing
     - Scaling strategies

✓ Architecture documentation complete (3m 56s)
```

## Documentation Files Updated

### Core Documentation

**README.md**
- Project overview
- Quick start guide
- Installation instructions
- Basic usage examples
- Contributing guidelines

**docs/project-overview-pdr.md**
- Product vision and goals
- Functional requirements
- Non-functional requirements
- Technical constraints
- Acceptance criteria
- Success metrics

**docs/codebase-summary.md**
- Project structure overview
- File organization
- Key components
- Architectural patterns
- Token count and statistics

**docs/code-standards.md**
- Coding conventions
- File naming patterns
- Directory structure
- Error handling patterns
- Testing strategies
- Security practices

**docs/system-architecture.md**
- High-level architecture
- Component diagrams
- Data flow
- Technology stack
- Integration points
- Deployment architecture

### Optional Documentation

**docs/project-roadmap.md**
- Feature timeline
- Release planning
- Future improvements
- Technical debt tracking

**docs/deployment-guide.md**
- Deployment procedures
- Environment setup
- Configuration management
- Monitoring and logging

**docs/design-guidelines.md**
- UI/UX patterns
- Component library
- Design system
- Accessibility guidelines

## Agent Invoked

The command uses the **docs-manager agent** with these capabilities:

- **Documentation Analysis**: Systematic review of all documentation
- **Codebase Synchronization**: Cross-referencing docs with code
- **Standards Enforcement**: Consistent formatting and terminology
- **Gap Identification**: Finding missing or outdated documentation
- **Quality Assurance**: Validating examples, links, and references

## Best Practices

### Run After Major Changes

✅ **Good - After meaningful work:**
```bash
# After implementing features
/cook [add payment integration]
/fix:types
/test
/docs:update

# Commit everything together
/git:cm
```

❌ **Bad - Too frequent:**
```bash
# After every tiny change
/fix:fast [typo]
/docs:update  # Wasteful
```

### Provide Context

✅ **Specific focus:**
```bash
/docs:update [focus on API changes and authentication flow]
```

❌ **No context:**
```bash
/docs:update  # Works but less targeted
```

### Review Before Committing

✅ **Review changes:**
```bash
/docs:update
git diff docs/
# Review changes
/git:cm
```

## Workflow

### Standard Feature Development

```bash
# 1. Plan feature
/plan [add OAuth2 authentication]

# 2. Implement feature
/cook [implement OAuth2 with Google and GitHub providers]

# 3. Fix any issues
/fix:types
/test

# 4. Update documentation
/docs:update [document OAuth2 implementation]

# 5. Review and commit
git diff
/git:cm
```

### Quarterly Documentation Maintenance

```bash
# 1. Update documentation
/docs:update [quarterly documentation review]

# 2. Review all changes
git diff docs/

# 3. Commit documentation updates
/git:cm
```

### Pre-Release Checklist

```bash
# 1. Update documentation
/docs:update [prepare for v2.0 release]

# 2. Review roadmap
# Edit docs/project-roadmap.md

# 3. Update changelog
# Edit CHANGELOG.md

# 4. Commit release documentation
/git:cm

# 5. Create release PR
/git:pr main develop
```

## Troubleshooting

### Incomplete Updates

**Problem:** Some documentation files not updated

**Solution:**
```bash
# Specify which files need attention
/docs:update [update system-architecture.md and deployment-guide.md]
```

### Outdated Examples

**Problem:** Code examples in docs don't match current code

**Solution:**
```bash
# Command automatically detects and updates
/docs:update

# Or specify focus
/docs:update [refresh all code examples]
```

### Missing Documentation

**Problem:** New features not documented

**Solution:**
```bash
# Command will create missing sections
/docs:update [document new payment service]
```

### Formatting Issues

**Problem:** Inconsistent formatting across docs

**Solution:**
```bash
# Command standardizes formatting
/docs:update
```

## Related Commands

### Documentation Overview

```bash
# Quick summary of recent changes
/watzup

# Full documentation update
/docs:update
```

### Codebase Summary Only

```bash
# Just update codebase summary
/docs:summarize

# Full documentation update
/docs:update
```

### Initialize Documentation

```bash
# First-time documentation setup
/docs:init

# Regular updates thereafter
/docs:update
```

## Output Structure

After running `/docs:update`, your documentation structure:

```
./
├── README.md (updated)
├── docs/
│   ├── project-overview-pdr.md (updated)
│   ├── codebase-summary.md (regenerated)
│   ├── code-standards.md (updated)
│   ├── system-architecture.md (updated)
│   ├── project-roadmap.md (updated)
│   ├── deployment-guide.md (optional, updated)
│   └── design-guidelines.md (optional, updated)
└── repomix-output.xml (generated)
```

## Metrics

Typical `/docs:update` performance:

- **Time**: 3-5 minutes (depending on codebase size)
- **Files analyzed**: Entire codebase
- **Files updated**: 4-8 documentation files
- **Code examples validated**: All examples in documentation
- **Links checked**: All internal and external links

## Next Steps

After using `/docs:update`:

- [/docs:summarize](/docs/commands/docs/summarize) - Update just codebase summary
- [/watzup](/docs/commands/core/watzup) - Review recent changes
- [/git:cm](/docs/commands/git/commit) - Commit documentation updates

---

**Key Takeaway**: `/docs:update` ensures your documentation stays synchronized with your codebase through comprehensive analysis and systematic updates across all documentation files.
