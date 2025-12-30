# Documentation Inventory Report - README

**Generated**: 2025-12-29 | **Time**: 20:47 UTC  
**Working Directory**: /mnt/d/www/claudekit/claudekit-docs

## Overview

Complete scan of the ClaudeKit documentation site revealing **169 documentation pages** across **6 sections** with **18+ categories**. This inventory identifies the existing documentation structure and critical gaps for marketing kit documentation.

## Report Files

### 1. **scout-251229-2047-docs-inventory.md** (Main Report)
**Size**: 15 KB | **Lines**: 409

Comprehensive documentation inventory including:
- Executive summary with metrics
- Complete section breakdown (Getting-Started, Docs, Workflows, Support, Tools, Changelog)
- Documentation structure analysis (schema, navigation components)
- Marketing kit gap analysis with current references
- Multi-kit documentation strategy recommendations
- Content coverage analysis
- Key observations (strengths, weaknesses, unknowns)
- Unresolved questions

**Start here for complete analysis**

### 2. **INVENTORY-VISUAL.txt** (Visual Summary)
**Size**: 7 KB | **Lines**: 195

Visual representation of documentation structure:
- ASCII art overview of section breakdown
- Critical gaps highlighted with emoji indicators
- Schema constraints visualization
- Navigation architecture diagram
- Recommended solutions (Option A vs Option B)
- Reusable content identification
- Strengths/weaknesses summary

**Use this for quick visual reference and presentations**

### 3. **ALL-FILES-LIST.md** (Complete File Listing)
**Size**: 14 KB | **Lines**: 310

Exhaustive list of all 169 documentation pages with:
- Absolute file paths for each document
- Organized by section and category
- All command subcategories listed
- All skill categories expanded
- Vietnamese translation mirrors noted

**Reference when you need specific file paths**

## Key Findings

### Metrics
```
Total Pages:              169
Sections:                 6
Categories:              18+
Languages:               2 (EN + VI)
Marketing References:    0 ❌
```

### Section Distribution
```
DOCS (133 pages) ████████████████████████████████████
- Agents (18)
- CLI (2)
- Commands (91)
- Configuration (4)
- Skills (28)

WORKFLOWS (17 pages) ████
GETTING-STARTED (8 pages) ████
SUPPORT (8 pages) ████
TOOLS (2 pages) █
CHANGELOG (1 page) █
```

### Critical Gaps for Marketing Kit
1. Zero dedicated marketing section
2. No marketing-specific agents (copywriter is only reference)
3. No marketing commands documentation
4. No marketing skills category
5. No marketing workflows
6. No marketing troubleshooting

## Architecture Constraints

### Hardcoded Section Enum
**File**: `src/content/config.ts`

```typescript
section: z.enum([
  'getting-started',
  'docs',
  'workflows',
  'tools',
  'changelog',
  'support'
])  // ❌ Blocks adding new sections
```

**Problem**: Cannot add marketing section without code modification

### Flexible Category
**Same file**, category field:

```typescript
category: z.string().optional()
```

**Good news**: Already used for nesting (e.g., "commands/core", "skills/backend")

## Recommended Solutions

### Option A: Minimal (Add Marketing Section)
- Update config enum to include 'marketing'
- Create MarketingNav.astro component
- Add marketing docs at `src/content/docs/marketing/`
- **Effort**: 3-5 days
- **Impact**: Limited, tight coupling remains

### Option B: Kit-Agnostic Architecture (⭐ Recommended)
- Generalize section enum or use dynamic routing
- Add 'kit' field to schema for content filtering
- Create KitSwitcher component for navigation
- Reorganize: `src/content/docs/{shared, engineer, marketing, web}/`
- Update DocsNav for multi-kit rendering
- **Effort**: 1-2 weeks
- **Impact**: Scalable, reusable, clean separation

## Marketing Kit Documentation Gaps

### Content Commands (Already Exist)
- `/content:cro` - Content ROI optimization
- `/content:enhance` - Content enhancement
- `/content:fast` - Fast content generation
- `/content:good` - Content quality

### Missing Categories
**Marketing-specific agents needed**:
- SEO Optimizer
- Content Strategist
- Social Media Manager
- Campaign Manager

**Marketing-specific commands needed**:
- `/marketing:campaign` - Campaign planning
- `/marketing:seo` - SEO optimization
- `/marketing:social` - Social media strategy
- `/marketing:analytics` - Analytics analysis

**Marketing-specific skills needed**:
- SEO Optimization
- Social Media Marketing
- Content Strategy
- Email Marketing
- Analytics & Reporting

**Marketing-specific workflows needed**:
- Content Marketing Campaign
- Social Media Strategy
- SEO Optimization Workflow
- Email Newsletter Creation

## Navigation Components

**Location**: `src/components/nav/`

Current:
- SidebarNav.astro (main router)
- GettingStartedNav.astro
- DocsNav.astro ⭐ (2-level hierarchy builder)
- WorkflowsNav.astro
- ToolsNav.astro
- ChangelogNav.astro
- SupportNav.astro

**Missing**: MarketingNav.astro (needs creation per kit)

## Content Reuse Potential

### Can be Shared
- Core agents documentation (18 pages)
- Some commands: /ask, /scout, /debug, /journal
- Some skills: AI, backend, tools
- Configuration documentation

### Kit-Specific
- Commands: /content, /fix:ui, /design/*
- Marketing workflows
- Marketing skills: SEO, Social Media, Content Strategy

## Related Projects

Referenced in CLI:
```bash
npx claudekit-cli new --kit engineer  # ✓ Documented
npx claudekit-cli new --kit marketing # ❌ No docs
npx claudekit-cli new --kit web       # ❌ No docs
```

**Actual Locations**:
- ClaudeKit CLI: `../claudekit-cli`
- ClaudeKit Engineer: `../claudekit-engineer`
- ClaudeKit Marketing: `../claudekit-marketing` (undocumented)
- ClaudeKit Web: `../claudekit-web` (undocumented)

## Next Steps

1. **Review Reports**: Start with main inventory report
2. **Analyze Gaps**: Identify marketing-specific documentation needs
3. **Choose Architecture**: Decide between Option A (minimal) or Option B (recommended)
4. **Plan Content**: List all marketing docs needed
5. **Estimate Scope**: Determine implementation timeline
6. **Define Multi-Kit Strategy**: How to handle engineer/marketing/web kits

## Unresolved Questions

1. What marketing-specific documentation is required?
2. Should marketing kit have separate docs section or integrated?
3. Can schema enum be made dynamic/flexible?
4. Which copywriter agent docs apply to marketing kit?
5. Is multi-kit architecture approved/planned?
6. Should Vietnamese translations be created for marketing kit?
7. How to position/differentiate engineer vs. marketing vs. web kits?

## Using These Reports

**For Planning**: Read scout-251229-2047-docs-inventory.md (full analysis)  
**For Presentations**: Use INVENTORY-VISUAL.txt (visual summary)  
**For Development**: Reference ALL-FILES-LIST.md (file paths)

---

**Status**: Complete ✓  
**Last Updated**: 2025-12-29 20:47  
**Scope**: All 169 docs scanned, navigation components analyzed, gaps identified
