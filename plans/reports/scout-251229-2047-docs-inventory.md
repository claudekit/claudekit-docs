# Documentation Inventory Report
**Date**: 2025-12-29 | **Location**: /mnt/d/www/claudekit/claudekit-docs

## Executive Summary

Complete scan of docs site at `src/content/docs/` reveals **169 total documentation pages** organized across **6 main sections** with **18+ content categories**. Currently **zero** mentions of "marketing kit" or dedicated marketing documentation. Structure supports multi-kit expansion via new sections.

---

## 1. Documentation Metrics

| Metric | Count |
|--------|-------|
| Total Pages | 169 |
| Sections | 6 |
| Categories | 18+ |
| Languages | 2 (EN + VI) |
| Marketing Kit References | 0 |

---

## 2. Section Breakdown

### Section: GETTING-STARTED (8 pages)
**Purpose**: Onboarding & core concepts
- `getting-started/index.md` - Getting Started
- `getting-started/introduction.md` - Introduction
- `getting-started/concepts.md` - Core Concepts
- `getting-started/installation.md` - Installation
- `getting-started/quick-start.md` - Quick Start
- `getting-started/upgrade-guide.md` - Upgrade Guide for Claude Code Users
- `getting-started/why-claudekit.md` - Why ClaudeKit
- `getting-started/cheatsheet.md` - ClaudeKit Cheatsheet

**Current Focus**: CLI setup, core concepts, upgrading from Claude Code

---

### Section: DOCS (133 pages)
**Purpose**: Core product documentation
**Status**: Largest section with deep hierarchical structure

#### Category: AGENTS (18 pages)
Agent specifications & use cases
- `docs/agents/index.md` - Agents Overview
- `docs/agents/researcher.md` - Researcher Agent
- `docs/agents/planner.md` - Planner Agent
- `docs/agents/tester.md` - Tester Agent
- `docs/agents/debugger.md` - Debugger Agent
- `docs/agents/brainstormer.md` - Brainstormer Agent
- `docs/agents/code-reviewer.md` - Code Reviewer Agent
- `docs/agents/scout.md` - Scout Agent
- `docs/agents/docs-manager.md` - Docs Manager Agent
- `docs/agents/scout-external.md` - Scout External Agent
- `docs/agents/project-manager.md` - Project Manager Agent
- `docs/agents/ui-ux-designer.md` - UI/UX Designer Agent
- `docs/agents/copywriter.md` - Copywriter Agent (**marketing-adjacent**)
- `docs/agents/git-manager.md` - Git Manager Agent
- `docs/agents/database-admin.md` - Database Admin Agent
- `docs/agents/journal-writer.md` - Journal Writer Agent
- `docs/agents/mcp-manager.md` - MCP Manager Agent
- `docs/agents/fullstack-developer.md` - Fullstack Developer Agent

**Copywriter Agent Note**: Only existing "marketing" reference - describes copywriting capabilities but limited to content generation

---

#### Category: CLI (2 pages)
CLI installation & usage
- `docs/cli/index.md` - CLI Overview
- `docs/cli/installation.md` - CLI Installation (**mentions** `npx claudekit-cli new --kit engineer`)

**Kit Reference Found**: `--kit engineer` flag exists, suggesting CLI framework for multiple kits

---

#### Category: COMMANDS (91 pages)
Comprehensive command documentation

**Subcategories**:
- **commands/core** (22 pages): Bootstrap, Cook, Ask, Scout, Debug, Journal, Code, Brainstorm, Test, etc.
- **commands/content** (4 pages): /content:cro, /content:enhance, /content:fast, /content:good
- **commands/design** (6 pages): /design:3d, /design:describe, /design:fast, /design:good, /design:screenshot, /design:video
- **commands/docs-cmd** (3 pages): /docs:init, /docs:update, /docs:summarize
- **commands/fix** (9 pages): /fix, /fix:test, /fix:parallel, /fix:fast, /fix:hard, /fix:ci, /fix:logs, /fix:ui, /fix:types
- **commands/git** (6 pages): /git:cm, /git:cp, /git:merge, /git:commit, /git:commit-push, /git:pr
- **commands/integrate** (2 pages): /integrate:polar, /integrate:sepay
- **commands/plan** (7 pages): /plan, /plan:fast, /plan:hard, /plan:cro, /plan:ci, /plan:two, /plan:parallel
- **commands/review** (1 page): /review:codebase
- **commands/skill** (5 pages): /skill:create, /skill:fix-logs, /skill:add, /skill:optimize, /skill:optimize:auto

**Marketing-Related Commands**: `/content:*` commands (4 pages) handle content generation

---

#### Category: CONFIGURATION (4 pages)
Project setup & configuration
- `docs/configuration/claude-md.md` - CLAUDE.md
- `docs/configuration/mcp-setup.md` - MCP Setup
- `docs/configuration/workflows.md` - Workflows
- `docs/configuration/hooks.md` - Hooks

---

#### Category: SKILLS (28 pages)
Specialized capability documentation

**Skill Areas**:
- **skills/ai** (4 pages): AI Multimodal, Gemini Vision, Canvas Design, Google ADK Python
- **skills/auth** (1 page): Better Auth
- **skills/backend** (5 pages): Backend Development, Databases, DevOps, Docker, PostgreSQL
- **skills/ecommerce** (1 page): Shopify
- **skills/frontend** (11 pages): Next.js, Tailwind CSS, Frontend Design, shadcn/ui, Web Frameworks, UI Styling, Three.js, Frontend Development, Aesthetic, Frontend Design Pro, UI/UX Pro Max
- **skills/mobile** (1 page): Mobile Development
- **skills/multimedia** (1 page): Media Processing
- **skills/payments** (1 page): Payment Integration (**commerce-adjacent**)
- **skills/tools** (17 pages): Chrome DevTools, Code Review, MCP Management, Sequential Thinking, Planning, Docs Seeker, Debugging, MCP Builder, Repomix, Document Skills, Problem-Solving, Research, Skill Creator, Claude Code Skill, FFmpeg, ImageMagick

---

### Section: WORKFLOWS (17 pages)
**Purpose**: Task-oriented tutorials & guides

- `workflows/index.md` - Workflows
- `workflows/feature-development.md` - Feature Development Workflow
- `workflows/bug-fixing.md` - Bug Fixing Workflow
- `workflows/documentation.md` - Documentation Workflow
- `workflows/starting-new-project.md` - Starting a New Project
- `workflows/maintaining-old-project.md` - Maintaining an Old Project
- `workflows/adding-feature.md` - Adding a New Feature
- `workflows/gemini.md` - Gemini, wait what?
- `workflows/fixing-bugs.md` - Fixing Bugs
- `workflows/refactoring-code.md` - Refactoring Code
- `workflows/building-api.md` - Building a REST API
- `workflows/new-project.md` - Greenfield Projects
- `workflows/existing-project.md` - Brownfield Projects
- `workflows/implementing-auth.md` - Implementing Authentication
- `workflows/integrating-payment.md` - Integrating Payment Processing (**commerce-adjacent**)
- `workflows/optimizing-performance.md` - Optimizing Performance
- `workflows/understanding-codebases-with-gkg.md` - Understanding Codebases with GitLab Knowledge Graph

**Commerce References**: Payment integration workflow exists, suggesting existing commerce documentation

---

### Section: SUPPORT (8 pages)
**Purpose**: Troubleshooting & FAQs

- `support/index.md` - Support
- `support/faq.md` - Frequently Asked Questions
- `support/troubleshooting/index.md` - Troubleshooting
- `support/troubleshooting/installation-issues.md` - Installation Issues
- `support/troubleshooting/command-errors.md` - Command Errors
- `support/troubleshooting/agent-issues.md` - Agent Issues
- `support/troubleshooting/api-key-setup.md` - API Key Setup
- `support/troubleshooting/performance-issues.md` - Performance Issues

---

### Section: TOOLS (2 pages)
**Purpose**: Utilities & external tools

- `tools/index.md` - Tools & Utilities
- `tools/ccs.md` - CCS - Claude Code Switch

---

### Section: CHANGELOG (1 page)
**Purpose**: Version history & release notes

- `changelog/index.md` - Changelog

---

## 3. Documentation Structure & Navigation

### Config Schema
**File**: `src/content/config.ts`

```typescript
const docsSchema = z.object({
  title: z.string(),
  description: z.string().min(10).max(160),
  section: z.enum([
    'getting-started',
    'docs',
    'workflows',
    'tools',
    'changelog',
    'support'
  ]),
  category: z.string().optional(),
  order: z.number().optional().default(999),
  published: z.boolean().default(true),
  lastUpdated: z.date().optional(),
});
```

**Key Points**:
- Section enum fixed to 6 values (would need expansion for marketing kit)
- Category is flexible string (supports nested paths like "commands/core")
- Order field controls sidebar ranking
- Published flag allows draft docs

### Sidebar Navigation Components
**Location**: `src/components/nav/`

**Files**:
- `SidebarNav.astro` - Main router (detects section from URL)
- `GettingStartedNav.astro` - Getting started section nav
- `DocsNav.astro` - **Main docs section nav** (builds 2-level hierarchy)
- `WorkflowsNav.astro` - Workflows section nav
- `ToolsNav.astro` - Tools section nav
- `ChangelogNav.astro` - Changelog section nav
- `SupportNav.astro` - Support section nav

**Navigation Logic**:
- URL detection via path prefix (e.g., `/docs/workflows/` → workflows section)
- Hierarchical rendering via category paths (e.g., `commands/core` → section > subsection)
- Collapsible categories with session state persistence
- Two-level nesting supported (category > subcategory)

---

## 4. Marketing Kit Analysis

### Current References
**Search Results**: 13 files mention "marketing"
- Only **copywriter agent** directly marketing-related
- **Content commands** (/content:*) support marketing workflows
- References mostly incidental (e.g., "prompt engineering" in technical context)

### Missing Marketing Documentation
- **Zero dedicated pages** for marketing toolkit
- **No marketing section** in nav structure
- **No marketing-specific agents** documented
- **No marketing workflows** (e.g., campaign planning, content calendar)
- **No marketing skills** category

### Opportunity Areas
```
Potential Marketing Kit Documentation:
├── getting-started/ (if marketing-specific onboarding needed)
├── docs/
│   ├── agents/
│   │   ├── copywriter.md (✓ EXISTS)
│   │   ├── seo-optimizer.md (needed)
│   │   ├── content-strategist.md (needed)
│   │   └── social-media-manager.md (needed)
│   ├── commands/
│   │   └── marketing/* (new category needed)
│   └── skills/
│       ├── marketing/* (new category needed)
│       ├── content/* (new category needed)
│       └── seo/* (new category needed)
├── workflows/
│   ├── content-marketing.md (needed)
│   ├── campaign-planning.md (needed)
│   └── social-media-strategy.md (needed)
└── support/
    └── marketing-troubleshooting/ (needed)
```

---

## 5. Multi-Kit Documentation Strategy

### Current Architecture Issues
1. **Hardcoded section enum** - Cannot add new sections without schema changes
2. **Single-kit assumption** - All docs assume ClaudeKit CLI usage
3. **No kit differentiation** - No pages explaining differences between engineer/marketing/web kits
4. **Unified navigation** - Sidebar assumes single product

### Recommended Changes for Marketing Kit

#### Option A: Add Marketing Section (Minimal)
```
Config Change:
  section: z.enum([...existing..., 'marketing'])

Navigation:
  Add MarketingNav.astro component
  Add route detection in SidebarNav.astro

Folder Structure:
  src/content/docs/marketing/
    ├── getting-started/
    ├── agents/
    ├── commands/
    ├── skills/
    └── workflows/
```

#### Option B: Kit-Agnostic Structure (Recommended)
```
Config Change:
  section: z.enum(['...existing...', 'marketing', 'web', 'engineer'])
  kit: z.enum(['cli', 'engineer', 'marketing', 'web']).optional()

Navigation:
  Add kit switcher component
  Route detection supports multiple kits
  Show/hide content per kit

Folder Structure:
  src/content/docs/
    ├── shared/ (common to all kits)
    ├── engineer/ (engineering toolkit specific)
    ├── marketing/ (marketing toolkit specific)
    └── web/ (web toolkit specific)
```

---

## 6. Content Coverage Analysis

### Well-Covered Topics
- **Agents** (18 docs) - Comprehensive agent reference
- **Core Commands** (22 docs) - Deep command documentation
- **Skills** (28 docs) - Extensive skill coverage
- **Workflows** (17 docs) - Task-oriented guides
- **Configuration** (4 docs) - Setup & customization

### Gaps
- **Marketing tooling** - Zero dedicated docs
- **Multi-kit guidance** - No explanation of kit selection
- **Integration examples** - Limited to Polar, SePay
- **Use case guides** - Limited to engineering scenarios
- **Video/visual content** - No transcripts or guides referenced

---

## 7. File Structure Summary

```
src/content/docs/
├── changelog/
│   └── index.md (1)
├── docs/
│   ├── agents/ (18)
│   ├── cli/ (2)
│   ├── commands/ (91)
│   ├── configuration/ (4)
│   └── skills/ (28)
├── getting-started/ (8)
├── support/ (8)
├── tools/ (2)
└── workflows/ (17)

Total: 169 files
```

**Additional Path**: `src/content/docs-vi/` mirrors above structure for Vietnamese translations

---

## 8. Key Observations

### ✓ Strengths
1. Well-organized hierarchical structure
2. Comprehensive command & skill documentation
3. Schema supports optional categories & ordering
4. Multi-language support via `docs-vi/` collection
5. Collapsible navigation with state persistence
6. 169 existing pages provide content foundation

### ✗ Weaknesses
1. Hardcoded section enum limits expansion
2. No marketing kit documentation
3. Single-product assumption throughout
4. Navigation doesn't support kit differentiation
5. Missing multi-kit positioning/comparison
6. Limited cross-kit linking

### ? Unknowns
1. Why marketing kit exists vs. web kit - differentiation unclear
2. Expected marketing documentation scope
3. Whether docs should split marketing/web/engineer into separate sections
4. Multi-kit nav strategy (switcher vs. separate docs)
5. Content reuse strategy between kits

---

## 9. Related Projects Referenced

### Mentioned in Docs
- **ClaudeKit CLI** (`../claudekit-cli`) - Referenced in installation docs
- **ClaudeKit Engineer** (`../claudekit-engineer`) - Mentioned in kit selection
- **ClaudeKit Web** (`../claudekit-web`) - Exists but not documented
- **ClaudeKit Marketing** (`../claudekit-marketing`) - Exists but not documented

### CLI Evidence
From `docs/cli/installation.md`:
```bash
npx claudekit-cli new --kit engineer
```
Suggests `--kit` flag expects values like `engineer`, implying `marketing`, `web` exist

---

## Unresolved Questions

1. **Scope**: What marketing-specific documentation is needed?
2. **Navigation**: Should marketing docs be separate section or integrated?
3. **Schema**: Can section enum be made dynamic/flexible?
4. **Content**: Which copywriter agent docs apply to marketing kit?
5. **Strategy**: Is multi-kit docs architecture planned/approved?
6. **Localization**: Does marketing kit need Vietnamese translations?

