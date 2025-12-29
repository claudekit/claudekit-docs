# ClaudeKit Visual Assets

This directory contains visual assets for ClaudeKit documentation.

## Directory Structure

```
/public/assets/
├── diagrams/          # Technical SVG diagrams (10 files)
├── infographics/      # Marketing infographics (5 SVG placeholders)
└── README.md         # This file
```

## SVG Diagrams (10)

Production-ready SVG diagrams with dark mode compatibility:

1. **kit-architecture.svg** (5.3KB)
   - ClaudeKit ecosystem overview
   - Shows CLI, Engineer Kit, Marketing Kit, Web Kit, and cloud services
   - Left-to-right flow architecture

2. **agent-orchestration.svg** (7.8KB)
   - Multi-agent orchestration pattern
   - Hierarchical tree showing orchestrator and subagents
   - File-based communication flow
   - Report generation cycle

3. **workflow-overview.svg** (6.2KB)
   - Development workflow cycle
   - Plan → Code → Test → Review → Deploy stages
   - Iteration loop for continuous improvement

4. **marketing-funnel.svg** (8.0KB)
   - TOFU → MOFU → BOFU funnel
   - Conversion metrics at each stage
   - AI agents mapped to funnel stages
   - Performance metrics on sides

5. **cli-flow.svg** (6.9KB)
   - CLI command decision tree
   - `ck new` workflow from selection to output
   - Kit selection branches
   - Final file output structure

6. **campaign-lifecycle.svg** (8.8KB)
   - Circular campaign lifecycle
   - Create → Plan → Execute → Analyze → Optimize
   - Task details for each stage
   - Continuous iteration pattern

7. **content-pipeline.svg** (9.8KB)
   - Linear content production pipeline
   - Ideation → Draft → Review → Publish → Measure
   - Quality gates between stages
   - AI agent automation layer
   - Timeline indicators

8. **seo-workflow.svg** (9.6KB)
   - SEO optimization workflow
   - Audit → Research → Optimize (Technical/Content) → Monitor
   - Branching optimization paths
   - Continuous improvement loop
   - Metrics boxes

9. **email-sequence.svg** (8.7KB)
   - Email automation sequence
   - Trigger → Email 1 → Decision → Email 2
   - Conditional branching based on opens/clicks
   - Wait periods and retry logic
   - Metrics summary

10. **analytics-flow.svg** (11KB)
    - Data pipeline architecture
    - Sources → Collection → Analysis → Reporting → Dashboard
    - Real-time data flow
    - Storage layer connections
    - Performance metrics

## SVG Infographics (5 Placeholders)

These are SVG placeholders with detailed content. For production, convert to high-res PNG:

1. **kit-comparison.svg** (9.5KB)
   - Side-by-side comparison: Engineer Kit vs Marketing Kit
   - Features, agents, use cases for each
   - Best for recommendations
   - Should be: 2400x1600px PNG

2. **agent-matrix.svg** (17KB)
   - Grid of 12+ agents with capabilities
   - Color-coded by category (Dev, Marketing, Content, Ops, Analytics)
   - Capability ratings (High/Medium/Basic)
   - Detailed skill lists
   - Should be: 2800x1800px PNG

3. **command-cheatsheet.svg** (14KB)
   - Top 20 CLI commands quick reference
   - Organized by category (Setup, Agents, Workflows, Content, Dev, Config)
   - Command syntax and examples
   - Pro tips section
   - Should be: 2400x3200px PNG (printable poster)

4. **workflow-guide.svg** (13KB)
   - Decision tree for workflow selection
   - New vs Existing project branches
   - Recommended commands for each path
   - Parallel workflow option
   - Should be: 2400x2000px PNG

5. **funnel-stages.svg** (15KB)
   - Detailed marketing funnel breakdown
   - TOFU/MOFU/BOFU with tactics and KPIs
   - Optimization strategies for each stage
   - Traffic sources, engagement, revenue metrics
   - Should be: 2800x2000px PNG

## Design System

All assets follow ClaudeKit design guidelines:

### Colors
- Primary Coral: `#D97757`
- Background Dark: `#1E1E1E`
- Background Light: `#2D2D2D`
- Text Primary: `#E5E5E5`
- Text Secondary: `#A0A0A0`
- Success: `#98C379`
- Warning: `#E5C07B`
- Error: `#E06C75`
- Info: `#61AFEF`

### Typography
- Body: Inter, sans-serif
- Code: Geist Mono, monospace
- Headings: Inter with font-weight 600-700

### Standards
- Dark mode compatible backgrounds
- 2px rounded stroke lines (rx="2")
- Accessibility: `<title>` and `<desc>` tags
- Generous whitespace
- Clean, minimal, technical style
- SVG viewBox for responsive scaling

## Usage in Documentation

### Markdown

```markdown
![Kit Architecture](/assets/diagrams/kit-architecture.svg)
```

### Astro/MDX

```astro
<img src="/assets/diagrams/kit-architecture.svg" alt="Kit Architecture" />
```

### HTML

```html
<img src="/assets/diagrams/workflow-overview.svg" alt="Workflow Overview" />
```

## Converting SVG to PNG

For infographics, convert SVG to PNG at specified resolutions:

```bash
# Using Inkscape CLI
inkscape --export-type=png --export-dpi=300 \
  --export-width=2400 --export-height=1600 \
  kit-comparison.svg -o kit-comparison.png

# Using ImageMagick
convert -density 300 -resize 2400x1600 \
  kit-comparison.svg kit-comparison.png
```

## File Sizes

**Diagrams (SVG):**
- Total: ~82KB (10 files)
- Average: 8.2KB per file
- All optimized for web delivery

**Infographics (SVG placeholders):**
- Total: ~68KB (5 files)
- Should convert to PNG: ~5-10MB total (high-res)

## TODO

- [ ] Convert infographic SVGs to high-res PNGs
- [ ] Add interactive versions for web (hover states)
- [ ] Create animated versions for key workflows
- [ ] Add localized versions (Vietnamese)
- [ ] Generate social media preview cards (1200x630)
- [ ] Create printable PDF versions

## Notes

All SVG diagrams are production-ready and can be used directly in documentation. The infographic SVGs serve as detailed placeholders and should be professionally designed and exported as PNGs for final use.

Design inspiration: Polar docs, Linear, Vercel design systems.

## License

All assets are part of ClaudeKit documentation (MIT License).
