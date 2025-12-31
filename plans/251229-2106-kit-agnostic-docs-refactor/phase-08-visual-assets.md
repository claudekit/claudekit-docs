---
title: "Phase 08: Visual Assets"
status: pending
effort: 4h
type: parallel
depends_on: [phase-01]
copywriter: ai-artist
---

# Phase 08: Visual Assets

**Type**: PARALLEL (can run with Phases 2-7)
**Effort**: 4h
**Owner**: AI Artist (ai-multimodal + ai-artist skills)
**Depends On**: Phase 1 (Infrastructure)

---

## Overview

Create visual assets (diagrams, flowcharts, infographics) to support documentation. Uses ai-multimodal and ai-artist skills for generation.

---

## Exclusive File Ownership

This phase exclusively owns:

```
public/assets/diagrams/kit-architecture.svg
public/assets/diagrams/agent-orchestration.svg
public/assets/diagrams/workflow-overview.svg
public/assets/diagrams/marketing-funnel.svg
public/assets/diagrams/cli-flow.svg
public/assets/diagrams/campaign-lifecycle.svg
public/assets/diagrams/content-pipeline.svg
public/assets/diagrams/seo-workflow.svg
public/assets/diagrams/email-sequence.svg
public/assets/diagrams/analytics-flow.svg
public/assets/infographics/kit-comparison.png
public/assets/infographics/agent-matrix.png
public/assets/infographics/command-cheatsheet.png
public/assets/infographics/workflow-guide.png
public/assets/infographics/funnel-stages.png
```

**Total**: 15 files (10 diagrams + 5 infographics)

---

## Asset Categories

### Architecture Diagrams (SVG)

| Asset | Purpose | Used In |
|-------|---------|---------|
| kit-architecture.svg | Overall system architecture | Getting Started, Overview |
| agent-orchestration.svg | How agents work together | Agents Overview |
| workflow-overview.svg | Workflow system concept | Workflows Index |
| cli-flow.svg | CLI command flow | CLI Overview |
| campaign-lifecycle.svg | Campaign stages | Campaign Workflow |

### Marketing-Specific Diagrams (SVG)

| Asset | Purpose | Used In |
|-------|---------|---------|
| marketing-funnel.svg | TOFU/MOFU/BOFU visualization | Marketing Overview |
| content-pipeline.svg | Content creation flow | Content Workflow |
| seo-workflow.svg | SEO optimization process | SEO Workflow |
| email-sequence.svg | Email campaign flow | Email Workflow |
| analytics-flow.svg | Data analysis pipeline | Analytics Workflow |

### Infographics (PNG)

| Asset | Purpose | Used In |
|-------|---------|---------|
| kit-comparison.png | Engineer vs Marketing comparison | Why ClaudeKit |
| agent-matrix.png | Agent capabilities matrix | Agents Overview |
| command-cheatsheet.png | Command quick reference | Cheatsheet |
| workflow-guide.png | Workflow selection guide | Workflows Index |
| funnel-stages.png | Marketing funnel stages | Marketing Overview |

---

## Design Guidelines

### Color Palette

Based on design-guidelines.md - Claude-inspired warm coral:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Coral) | `#D97757` | Accent, highlights |
| Background Dark | `#1E1E1E` | Diagram backgrounds |
| Background Light | `#2D2D2D` | Card backgrounds |
| Text Primary | `#E5E5E5` | Main text |
| Text Secondary | `#A0A0A0` | Secondary text |
| Success | `#98C379` | Success states |
| Warning | `#E5C07B` | Warning states |
| Error | `#E06C75` | Error states |
| Info | `#61AFEF` | Info states |

### Typography

- **Headings**: Inter Bold
- **Body**: Inter Regular
- **Code**: Geist Mono

### Diagram Style

- **Style**: Clean, minimal, technical
- **Background**: Dark mode compatible
- **Lines**: Rounded corners, 2px stroke
- **Icons**: Simple, monochrome
- **Arrows**: Directional, clear flow
- **Spacing**: Generous whitespace

---

## Asset Specifications

### SVG Diagrams

**Format**: SVG (scalable, web-optimized)
**Dimensions**: 800x600px (standard), responsive
**Accessibility**: Descriptive `<title>` and `<desc>` elements

**Structure**:
```svg
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <title>Diagram Title</title>
  <desc>Detailed description for screen readers</desc>
  <!-- Content -->
</svg>
```

### PNG Infographics

**Format**: PNG (high quality)
**Dimensions**: 1200x800px (landscape), 800x1200px (portrait)
**DPI**: 2x for retina displays
**Compression**: Optimized for web (<200KB)

---

## Asset Descriptions

### kit-architecture.svg

**Content**:
- ClaudeKit ecosystem overview
- CLI, Engineer Kit, Marketing Kit boxes
- Connections between components
- Cloud services (MCP, Gemini) indicated

**Flow**: Left-to-right
**Elements**: 8-10 boxes with connecting lines

---

### agent-orchestration.svg

**Content**:
- Main agent (orchestrator)
- Subagent spawning pattern
- Report flow back to main
- File-based communication

**Flow**: Hierarchical tree
**Elements**: Main agent, 3-4 subagents, arrows

---

### workflow-overview.svg

**Content**:
- Plan -> Code -> Test -> Review -> Deploy
- Each stage with icon
- Branching possibilities
- Loop for iterations

**Flow**: Linear with branches
**Elements**: 5-6 stages, connecting arrows

---

### marketing-funnel.svg

**Content**:
- TOFU (wide top): Awareness
- MOFU (middle): Consideration
- BOFU (narrow bottom): Decision
- Agents at each stage

**Flow**: Top-to-bottom funnel
**Elements**: 3 stages with agent icons

---

### cli-flow.svg

**Content**:
- `ck new` decision tree
- Kit selection branch
- Project creation steps
- Output files generated

**Flow**: Decision flowchart
**Elements**: Start, decision diamonds, actions

---

### campaign-lifecycle.svg

**Content**:
- Create -> Plan -> Execute -> Analyze -> Optimize
- Cycle visualization
- Agents involved at each stage

**Flow**: Circular lifecycle
**Elements**: 5 stages in circle

---

### content-pipeline.svg

**Content**:
- Ideation -> Draft -> Review -> Publish -> Measure
- Content types branching
- Quality gates indicated

**Flow**: Linear pipeline
**Elements**: 5 stages with gates

---

### seo-workflow.svg

**Content**:
- Audit -> Research -> Optimize -> Monitor
- Keyword flow
- Technical vs content SEO branch

**Flow**: Linear with branches
**Elements**: 4 main stages, sub-branches

---

### email-sequence.svg

**Content**:
- Trigger -> Email 1 -> Wait -> Email 2 -> etc.
- Decision points (open/click)
- Segmentation branches

**Flow**: Sequence with conditions
**Elements**: Emails, wait times, decisions

---

### analytics-flow.svg

**Content**:
- Data Sources -> Collection -> Analysis -> Reporting
- KPI indicators
- Dashboard output

**Flow**: Left-to-right pipeline
**Elements**: 4 stages, data icons

---

## Infographic Specifications

### kit-comparison.png

**Content**:
- Side-by-side: Engineer vs Marketing
- Feature comparison table
- Use case icons
- "Choose if..." guidance

**Layout**: Two-column comparison
**Size**: 1200x800px

---

### agent-matrix.png

**Content**:
- Grid of all agents
- Capabilities per agent
- Category grouping (TOFU, MOFU, BOFU, Core)

**Layout**: Matrix/grid
**Size**: 1200x1000px

---

### command-cheatsheet.png

**Content**:
- Top 20 commands
- Syntax examples
- Category grouping
- Quick reference format

**Layout**: Compact reference card
**Size**: 800x1200px (portrait)

---

### workflow-guide.png

**Content**:
- "What do you want to do?" decision tree
- Points to appropriate workflow
- Quick selection guide

**Layout**: Decision tree infographic
**Size**: 1200x800px

---

### funnel-stages.png

**Content**:
- Visual funnel with percentages
- Typical conversion rates
- Agents mapped to stages
- KPIs per stage

**Layout**: Funnel visualization
**Size**: 800x1200px (portrait)

---

## Generation Process

### For SVG Diagrams

1. **Prompt ai-artist**: Describe diagram concept
2. **Generate Mermaid**: Create Mermaid syntax first
3. **Convert to SVG**: Export with styling
4. **Refine**: Adjust colors, fonts, spacing
5. **Optimize**: Remove unnecessary elements

### For PNG Infographics

1. **Prompt ai-multimodal**: Describe infographic
2. **Generate base**: Create initial design
3. **Iterate**: Refine based on feedback
4. **Export**: 2x resolution PNG
5. **Compress**: Optimize file size

---

## Alt Text Requirements

Every visual MUST have alt text:

**SVG**: In `<title>` and `<desc>` elements
**PNG**: In markdown/HTML `alt` attribute

**Format**:
```markdown
![Kit Architecture Diagram: Shows ClaudeKit ecosystem with CLI, Engineer Kit, and Marketing Kit components connected to cloud services](/assets/diagrams/kit-architecture.svg)
```

---

## Quality Checklist

For each visual asset:

- [ ] Correct file format (SVG/PNG)
- [ ] Correct dimensions
- [ ] Dark mode compatible
- [ ] Color palette followed
- [ ] Alt text provided
- [ ] File size optimized (<200KB)
- [ ] Renders correctly in docs
- [ ] Accessible (screen reader friendly)

---

## Usage in Docs

Assets should be referenced in docs with:

```markdown
![Description](/assets/diagrams/filename.svg)
```

**Phase 2-7 copywriters**: Reference these paths in your docs. Assets will be created in parallel.

---

## Validation

Before marking Phase 8 complete:

- [ ] All 15 files created
- [ ] All files in correct directories
- [ ] All files under 200KB
- [ ] Alt text for all visuals
- [ ] Renders correctly in browser
- [ ] Dark mode compatible

---

## Completion Criteria

Phase 8 is COMPLETE when:

1. All 15 visual assets created
2. Each asset passes quality checklist
3. Assets accessible at `/assets/diagrams/` and `/assets/infographics/`
4. Build succeeds with assets
