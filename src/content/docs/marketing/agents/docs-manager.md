---
title: "Docs Manager Agent"
description: "Maintain accurate, comprehensive technical documentation synchronized with your codebase."
section: marketing
category: agents
order: 3
---

# Docs Manager Agent

> **Your documentation guardian** - Keeps docs accurate, organized, and actually useful

## What This Agent Does

Your campaign system evolved. You added new features, refactored the API, changed the database schema. But your documentation still describes the old system. New team members read outdated docs and implement things the wrong way.

**The Problem**: Documentation rots fast. Codebases change daily while docs lag behind, becoming misleading rather than helpful. Developers skip updating docs because it's tedious, and nobody notices until someone wastes hours following obsolete instructions.

**The Solution**: The Docs Manager Agent maintains synchronization between code and documentation. It analyzes your codebase, identifies outdated docs, updates technical specifications, and ensures your documentation actually reflects reality. You get docs that help instead of confuse.

## Quick Start

Update documentation after major changes:

```bash
# After refactoring your API
/docs "Update documentation for new webhook API"
```

The agent analyzes code changes, updates relevant docs, and ensures consistency across all documentation files.

## Capabilities

### Documentation Analysis & Maintenance
Systematically reviews all project documentation:
- Scans `docs/` directory for gaps and inconsistencies
- Cross-references docs with actual codebase implementation
- Identifies outdated information and broken links
- Maintains documentation hierarchy and navigation
- Ensures consistent formatting and terminology

### Code-to-Documentation Synchronization
Keeps docs current with code changes:
- Analyzes nature and scope of code changes
- Identifies all documentation requiring updates
- Updates API docs, config guides, integration instructions
- Ensures code examples and snippets are functional
- Documents breaking changes and migration paths

### Product Development Requirements (PDRs)
Creates and maintains comprehensive PDRs:
- Defines clear functional and non-functional requirements
- Specifies acceptance criteria and success metrics
- Includes technical constraints and dependencies
- Provides implementation guidance and architectural decisions
- Tracks requirement changes and version history

### Developer Productivity Optimization
Organizes docs for maximum efficiency:
- Minimizes time-to-understanding for new developers
- Provides quick reference guides for common tasks
- Includes troubleshooting guides and FAQs
- Maintains current setup and deployment instructions
- Creates clear onboarding documentation

### Codebase Summary Generation
Generates comprehensive codebase overviews:
- Runs `repomix` to create codebase compaction
- Generates `docs/codebase-summary.md` from analysis
- Documents project structure and key files
- Explains architectural patterns and conventions
- Updates automatically as codebase evolves

## When to Use

Use the Docs Manager Agent when you need to:
- Update documentation after feature implementation
- Create technical specifications for new features
- Synchronize docs with refactored code
- Generate codebase summaries for new team members
- Establish documentation standards and structure
- Audit documentation quality and coverage

## Example Workflows

### Post-Feature Documentation Update

```bash
# After implementing email campaign system
/docs "Document the new email campaign API and workflow"
```

**The manager will**:
1. Analyze email campaign implementation
2. Update API documentation with new endpoints
3. Create workflow diagrams and examples
4. Update integration guides
5. Add troubleshooting section
6. Verify all code examples work
7. Update table of contents and navigation

### Codebase Summary Generation

```bash
# For new team members joining project
/docs "Generate comprehensive codebase summary"
```

**You'll get**:
1. Complete project structure overview
2. Key files and their purposes explained
3. Architectural patterns documented
4. Code standards and conventions
5. Integration points mapped
6. Technology stack documented

## Best Practices

1. **Update Docs During Development**: Don't wait until after shipping. Update docs as you build features. The Docs Manager makes this quick.

2. **Run After Refactoring**: Major refactors often break documentation examples. Run the manager to catch and fix these issues.

3. **Periodic Audits**: Monthly documentation audits catch drift before it becomes misleading. Schedule regular reviews.

4. **Write for Future You**: Documentation is for the developer who joins your project in 6 months. Make their onboarding painless.

## Documentation Standards

The manager maintains these files in `docs/`:

```
docs/
├── project-overview-pdr.md      # Product requirements and overview
├── code-standards.md            # Coding conventions and standards
├── codebase-summary.md          # Generated project structure summary
├── system-architecture.md       # System design and architecture
├── project-roadmap.md           # Project timeline and milestones
├── api-documentation.md         # API endpoints and specifications
└── deployment-guide.md          # Deployment and operations
```

### Frontmatter Requirements

All documentation includes metadata:

```yaml
---
title: "Document Title"
description: "Brief description for search"
category: "guides"
lastUpdated: 2025-12-29
version: "1.0.0"
---
```

### Quality Checklist

The manager ensures:
- All variable/function names use correct case (camelCase, PascalCase, snake_case)
- Code examples are tested and functional
- Links are valid (no 404s)
- Screenshots are current
- API docs match Swagger/OpenAPI specs
- Version numbers are accurate
- Cross-references work correctly

## Report Output Format

The manager provides detailed documentation reports:

```markdown
## Documentation Update Report

### Current State Assessment
- Total documentation files: 12
- Coverage: 85% (good)
- Last updated: 2 files outdated (>30 days)
- Broken links: 0
- Missing sections: "Error Handling" in API docs

### Changes Made
✅ Updated API documentation
  - Added 3 new webhook endpoints
  - Updated authentication section
  - Fixed 2 broken code examples

✅ Refreshed codebase summary
  - Added new modules: email, notifications
  - Updated tech stack versions
  - Documented recent refactoring

### Gaps Identified
⚠️ Deployment guide missing Kubernetes setup
⚠️ No troubleshooting guide for common errors
⚠️ API rate limiting not documented

### Recommendations
Priority 1: Add Kubernetes deployment instructions
Priority 2: Create troubleshooting section with FAQ
Priority 3: Document rate limiting and retry logic

### Metrics
- Documentation coverage: 85% → 92%
- Average doc age: 45 days → 12 days
- Broken links: 3 → 0
```

## Integration with Development Workflow

The Docs Manager integrates seamlessly:
- **During Feature Development**: Updates docs alongside code
- **Code Review Process**: Documentation reviews included
- **Pre-Release**: Validates docs are current before shipping
- **Post-Deployment**: Updates operational docs with new insights

## Related Agents

- [Project Manager](/docs/marketing/agents/project-manager) - Triggers doc updates after milestones
- [Planner](/docs/marketing/agents/planner) - Creates plans that become docs
- [Git Manager](/docs/marketing/agents/git-manager) - Commits documentation changes

## Related Commands

- [`/docs`](/docs/marketing/commands/docs) - Update or create documentation
- [`/audit`](/docs/marketing/commands/audit) - Run documentation quality audit

## Tips

**Start with Structure**: If `docs/` doesn't exist, the manager creates it with a solid foundation. Let it set up the structure, then customize.

**Use Repomix**: The manager uses `repomix` to generate codebase summaries. This gives new team members a comprehensive overview in minutes.

**Documentation as Code**: Treat documentation like code. Keep it in version control, review changes, and run automated checks.

**Examples Over Prose**: The manager prioritizes practical examples over verbose explanations. Show, don't just tell.
