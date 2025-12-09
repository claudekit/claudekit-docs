---
title: /bootstrap:auto
description: Full auto-bootstrap a new project with research, design, implementation
section: docs
category: commands/core
order: 24
published: true
---

# /bootstrap:auto

Comprehensive automatic project bootstrapping with full research, design, and implementation.

## Syntax

```bash
/bootstrap:auto [user-requirements]
```

## Workflow Phases

### 1. Git Initialization
- Check/initialize Git repository
- Use `main` branch

### 2. Research
- Multiple `researcher` subagents explore in parallel
- Idea validation, challenges, solutions
- Reports ≤150 lines each

### 3. Tech Stack
- `planner` + `researcher` subagents find best fit
- Document in `./docs` directory

### 4. Wireframe & Design
- `ui-ux-designer` + `researcher` subagents
- Design guidelines at `./docs/design-guidelines.md`
- Wireframes in HTML at `./docs/wireframe/`
- Logo generation if needed
- Screenshots saved to `./docs/wireframes/`
- User approval required

### 5. Implementation
- Follow plan in `./plans` directory
- UI implementation per design guidelines
- Asset generation with `ai-multimodal`
- Type checking and compilation

### 6. Testing
- Real tests (no fake data)
- `tester` + `debugger` subagents
- Repeat until all pass

### 7. Code Review
- `code-reviewer` subagent
- Fix critical issues
- Re-test after fixes

### 8. Documentation
- `docs-manager` creates/updates:
  - README.md
  - project-overview-pdr.md
  - code-standards.md
  - system-architecture.md
- Project roadmap at `./docs/project-roadmap.md`

### 9. Onboarding
- Step-by-step user guidance
- API key configuration
- Environment setup

### 10. Final Report
- Summary of changes
- Optional git commit/push

## Comparison

| Command | Speed | Research | Design |
|---------|-------|----------|--------|
| `/bootstrap` | Medium | Yes | Yes |
| `/bootstrap:auto` | Slow | Full | Full |
| `/bootstrap:auto:fast` | Fast | Parallel | Yes |
| `/bootstrap:auto:parallel` | Medium | Parallel | Yes |

---

**Key Takeaway**: Use `/bootstrap:auto` for comprehensive project bootstrapping with full research, design system, testing, and documentation.
