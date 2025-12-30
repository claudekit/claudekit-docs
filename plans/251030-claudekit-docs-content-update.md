# ClaudeKit Documentation Content Update Plan

**Created**: 2025-10-30
**Status**: Ready for Implementation
**Priority**: P0 (Critical)
**Estimated Timeline**: 3-4 weeks (phased approach)

---

## Executive Summary

Comprehensive content update for ClaudeKit documentation site to align with Claude Code best practices, showcase 14 specialized agents, 30+ slash commands, and 45 skills across 11 domains. Goal: make content brilliant, scannable, and accessible to non-tech users while demonstrating expertise.

**Current State**: 22 documentation pages, incomplete coverage of agents/commands/skills
**Target State**: 60+ pages with comprehensive coverage, improved navigation, clear use cases

---

## Content Audit

### Existing Content Analysis

**Strengths**:
- Good introduction page structure
- Clear commands overview with categories
- Agents overview explains orchestration
- Proper frontmatter and validation
- Examples are actionable

**Gaps**:
- Only 14 of 30+ commands documented
- Only 2 of 14 agents documented (planner, index)
- No skills documentation in main docs
- Limited use cases (only 3 pages)
- Missing troubleshooting section
- No quick start guide
- No configuration/CLAUDE.md guide
- Missing workflow documentation
- No hooks/customization guide
- No integration guides

**Quality Issues**:
- Some pages too verbose (sacrifice grammar for concision)
- Missing "catchy" brilliance in some sections
- Need more scannable formatting
- Could use more visual hierarchy
- Examples need testing verification

---

## Content Strategy

### Core Principles

1. **Plain Language**: No jargon unless necessary, explain technical terms
2. **Scannable**: Headers, bullets, short paragraphs, code blocks
3. **Action-Oriented**: Start with verbs, focus on user actions
4. **Present Tense**: Direct, immediate, confident
5. **Show Don't Tell**: Examples > explanations
6. **Brilliant Expertise**: Demonstrate deep knowledge without showing off

### Content Types

1. **Getting Started**: Quick wins, fast value
2. **Reference**: Complete, searchable, precise
3. **Guides**: Step-by-step, narrative flow
4. **Use Cases**: Problem → solution stories
5. **Troubleshooting**: Symptom → diagnosis → fix

---

## New Content Structure

### 1. Getting Started (Revised)

**Status**: Needs 2 new pages, revise 1

#### Pages:

**introduction.md** (EXISTS - REVISE)
- Reduce verbosity by 20%
- Add "5-minute quick win" section
- Emphasize time savings (10+ hours on first feature)
- Add comparison table (ClaudeKit vs Boilerplates vs AI Assistants)

**installation.md** (EXISTS - ENHANCE)
- Add troubleshooting for common install issues
- Add environment setup (API keys for skills)
- Add verification step after install

**quick-start.md** (NEW - CREATE)
- Ship first feature in 15 minutes
- Use /bootstrap:auto:fast
- Walk through complete workflow
- Show actual output/results
- Include "what just happened?" explainer

---

### 2. CLI Documentation (Existing - Enhance)

**Status**: 3 pages exist, needs clarity

#### Enhancements:

**cli/index.md** (REVISE)
- Add command output examples
- Add shell completion instructions
- Add update/upgrade instructions

**cli/installation.md** (REVISE)
- Merge installation steps from getting-started
- Add platform-specific tips (WSL, macOS, Linux)
- Add verification tests

**cli/new.md** (ENHANCE)
- Add more kit options
- Show directory structure after creation
- Add customization options

---

### 3. Core Concepts (New Section)

**Status**: 2 pages exist, needs 5 more

#### Pages:

**architecture.md** (EXISTS - RENAME from claude-md.md)
- Comprehensive system architecture
- Agent orchestration patterns
- File structure explained
- Data flow diagrams (ASCII art)

**workflows.md** (EXISTS - ENHANCE)
- Add more workflow examples
- Show parallel vs sequential patterns
- Add decision trees (when to use which command)

**claude-md.md** (NEW - CREATE)
- Complete CLAUDE.md guide
- All configuration options explained
- Examples for different project types
- Best practices for team projects

**development-rules.md** (NEW - CREATE)
- YAGNI, KISS, DRY explained with examples
- File organization standards
- Naming conventions
- Code quality requirements

**orchestration-protocol.md** (NEW - CREATE)
- How agents communicate
- Handoff protocols
- Report formats
- Context management

---

### 4. Agents Documentation (Critical Gap)

**Status**: 2 pages exist, needs 12 more agent pages

#### Overview Page (EXISTS - ENHANCE)
- Add visual agent workflow diagram (ASCII)
- Add "when to use which agent" decision tree
- Add agent comparison table

#### Individual Agent Pages (CREATE 12):

**Planning & Research**:
1. **planner.md** (EXISTS - ENHANCE)
   - Add real plan examples
   - Show research capabilities
   - Add parallel researcher pattern

2. **researcher.md** (NEW)
   - Research sources (Google, YouTube, websites)
   - SearchAPI and VidCap MCP usage
   - Example research reports

3. **brainstormer.md** (NEW)
   - Solution brainstorming workflow
   - Feature feasibility analysis
   - Example brainstorming sessions

4. **scout.md** (NEW)
   - File location strategies
   - Scale parameter usage
   - Large codebase tips

**Implementation**:
5. **tester.md** (NEW)
   - Unit/integration/E2E testing
   - Coverage requirements
   - Test report examples

6. **debugger.md** (NEW)
   - CI/CD log analysis
   - Root cause investigation
   - Debugging workflow

7. **code-reviewer.md** (NEW)
   - Security scanning (OWASP Top 10)
   - Performance analysis
   - Review checklist

**Operations**:
8. **git-manager.md** (NEW)
   - Conventional commits
   - Secret detection
   - PR management

9. **docs-manager.md** (NEW)
   - Documentation sync
   - Naming compliance
   - Repomix usage

10. **project-manager.md** (NEW)
    - Progress tracking
    - Roadmap updates
    - Changelog management

**Creative**:
11. **ui-ux-designer.md** (NEW)
    - Design workflow
    - Wireframes and mockups
    - Human MCP integration

12. **copywriter.md** (NEW)
    - Conversion-focused content
    - SEO optimization
    - Multi-language support

**Database**:
13. **database-admin.md** (NEW)
    - Query optimization
    - Schema design
    - Migration planning

**Journaling**:
14. **journal-writer.md** (NEW)
    - Technical diary usage
    - Learning documentation
    - Decision tracking

---

### 5. Commands Documentation (Major Gap)

**Status**: 14 pages exist, needs 16+ more

#### Category Pages (CREATE):

**commands/core/** (6 exist, need 4 more):
- ask.md (NEW)
- scout.md (NEW)
- debug.md (NEW)
- journal.md (NEW)

**commands/fix/** (4 exist, need 2 more):
- logs.md (NEW)
- types.md (NEW)

**commands/docs/** (1 exists, need 2 more):
- update.md (NEW)
- summarize.md (NEW)

**commands/git/** (2 exist, need 1 more):
- pull-request.md (NEW)

**commands/plan/** (need 2):
- ci.md (NEW)
- two.md (NEW)

**commands/design/** (need 5):
- 3d.md (NEW)
- describe.md (NEW)
- fast.md (NEW)
- good.md (NEW)
- screenshot.md (NEW)
- video.md (NEW)

**commands/content/** (need 4):
- cro.md (NEW)
- enhance.md (NEW)
- fast.md (NEW)
- good.md (NEW)

**commands/integrate/** (need 2):
- polar.md (NEW)
- sepay.md (NEW)

**commands/skill/** (NEW category):
- create.md (NEW)
- fix-logs.md (NEW)

---

### 6. Skills Documentation (New Section)

**Status**: 1 index page, needs 45+ skill pages

#### Structure:

**skills/index.md** (EXISTS - ENHANCE)
- Group by domain (11 domains)
- Add skill comparison table
- Add setup requirements

**By Domain**:

**Debugging** (3 skills):
- debug/logs-analyzer.md
- debug/ci-fixer.md
- debug/type-checker.md

**Problem-Solving** (2 skills):
- problem-solving/sequential-thinking.md
- problem-solving/brainstormer.md

**Frontend** (7 skills):
- frontend/nextjs.md
- frontend/shadcn-ui.md
- frontend/tailwindcss.md
- frontend/canvas-design.md
- frontend/remix-icon.md
- frontend/chrome-devtools.md
- frontend/imagemagick.md

**Auth** (1 skill):
- auth/better-auth.md

**E-commerce** (1 skill):
- ecommerce/shopify.md

**Cloud** (7 skills):
- cloud/cloudflare.md
- cloud/cloudflare-workers.md
- cloud/cloudflare-r2.md
- cloud/cloudflare-browser-rendering.md
- cloud/gcloud.md
- cloud/docker.md
- cloud/turborepo.md

**AI** (6 skills):
- ai/gemini-audio.md
- ai/gemini-video-understanding.md
- ai/gemini-document-processing.md
- ai/gemini-image-gen.md
- ai/gemini-vision.md
- ai/mcp-builder.md

**Documents** (2 skills):
- documents/pdf.md
- documents/xlsx.md

**Media** (2 skills):
- media/ffmpeg.md
- media/imagemagick.md

**Dev Tools** (3 skills):
- dev-tools/repomix.md
- dev-tools/docs-seeker.md
- dev-tools/postgresql-psql.md

**Claude Code Integration** (11 skills):
- Integration guides for each skill

---

### 7. Use Cases (Expand)

**Status**: 3 pages exist, needs 7+ more

#### Existing (ENHANCE):
- starting-new-project.md (add more examples)
- maintaining-old-project.md (add migration guides)
- index.md (add decision tree)

#### New Pages:

**Development**:
- adding-feature.md - Complete feature workflow
- fixing-bugs.md - Bug investigation to resolution
- refactoring-code.md - Safe refactoring patterns
- migrating-tech-stack.md - Tech stack migration

**Team Collaboration**:
- onboarding-developers.md - New team member setup
- code-review-workflow.md - Review process
- documentation-sync.md - Keep docs current

**Specialized**:
- building-api.md - REST/GraphQL API development
- integrating-payment.md - Payment provider integration
- implementing-auth.md - Authentication systems
- optimizing-performance.md - Performance tuning

---

### 8. Troubleshooting (New Section)

**Status**: None exist, needs 6 pages

#### Pages:

**troubleshooting/index.md** (NEW)
- Common issues overview
- Quick fixes table
- When to ask for help

**installation-issues.md** (NEW)
- Platform-specific problems
- Permission errors
- Network issues

**command-errors.md** (NEW)
- Command not found
- Command fails
- Unexpected results

**agent-issues.md** (NEW)
- Agent not activating
- Agent conflicts
- Slow responses

**api-key-setup.md** (NEW)
- Missing API keys
- Invalid credentials
- Rate limiting

**performance-issues.md** (NEW)
- Slow commands
- Large codebases
- Memory issues

---

### 9. Configuration (New Section)

**Status**: None exist, needs 4 pages

#### Pages:

**configuration/index.md** (NEW)
- Configuration overview
- Priority order
- Environment variables

**claude-md-reference.md** (NEW)
- Complete CLAUDE.md reference
- All options documented
- Examples by project type

**environment-variables.md** (NEW)
- All env vars explained
- Required vs optional
- Secure storage

**project-structure.md** (NEW)
- File organization
- Directory structure
- Where things go

---

### 10. Hooks & Customization (New Section)

**Status**: None exist, needs 3 pages

#### Pages:

**hooks/index.md** (NEW)
- Hook system overview
- Available hooks
- Examples

**custom-agents.md** (NEW)
- Creating custom agents
- Agent templates
- Testing agents

**custom-commands.md** (NEW)
- Creating slash commands
- Command templates
- Testing commands

---

## Implementation Plan

### Phase 1: Foundation (Week 1) - HIGH PRIORITY

**Goal**: Fix critical gaps, establish baseline

#### Tasks:

1. **Create Quick Start Guide** (3 hours)
   - File: `src/content/docs/getting-started/quick-start.md`
   - 15-minute feature shipping walkthrough
   - Actual command outputs
   - "What just happened?" explainer

2. **Revise Introduction** (2 hours)
   - File: `src/content/docs/getting-started/introduction.md`
   - Reduce verbosity 20%
   - Add comparison table
   - Emphasize time savings

3. **Create CLAUDE.md Guide** (4 hours)
   - File: `src/content/docs/core-concepts/claude-md.md`
   - Complete configuration reference
   - Examples for different projects
   - Best practices

4. **Create Troubleshooting Section** (5 hours)
   - Create 6 troubleshooting pages
   - Common issues with solutions
   - Quick reference format

5. **Update Navigation** (2 hours)
   - Add new sections to sidebar
   - Reorder for logical flow
   - Add section descriptions

**Deliverables**:
- 1 quick start guide
- 1 revised introduction
- 1 CLAUDE.md guide
- 6 troubleshooting pages
- Updated navigation

---

### Phase 2: Agent Documentation (Week 2) - CRITICAL

**Goal**: Document all 14 agents comprehensively

#### Tasks:

1. **Enhance Agents Overview** (3 hours)
   - Add ASCII workflow diagrams
   - Add decision tree
   - Add comparison table

2. **Create 12 Missing Agent Pages** (24 hours)
   - Research agent capabilities from claudekit-engineer
   - Write comprehensive guides for each
   - Include examples and workflows
   - Add when-to-use sections

3. **Update Planner Page** (2 hours)
   - Add real plan examples
   - Show parallel researcher pattern
   - Add success metrics

**Deliverables**:
- 12 new agent pages
- 1 enhanced overview
- 1 updated planner page

---

### Phase 3: Commands Documentation (Week 2-3) - HIGH PRIORITY

**Goal**: Document all 30+ commands

#### Tasks:

1. **Create 16+ Missing Command Pages** (32 hours)
   - Core commands (4 pages)
   - Fix commands (2 pages)
   - Docs commands (2 pages)
   - Git commands (1 page)
   - Plan commands (2 pages)
   - Design commands (6 pages)
   - Content commands (4 pages)
   - Integration commands (2 pages)
   - Skill commands (2 pages)

2. **Enhance Commands Overview** (3 hours)
   - Add command decision tree
   - Add workflow examples
   - Add troubleshooting tips

**Deliverables**:
- 25+ command pages
- 1 enhanced overview

---

### Phase 4: Skills & Use Cases (Week 3-4) - MEDIUM PRIORITY

**Goal**: Complete skills reference and use case library

#### Tasks:

1. **Create Skills Documentation** (40 hours)
   - 45 skill pages organized by domain
   - Setup instructions
   - Usage examples
   - Integration guides

2. **Create Use Case Library** (16 hours)
   - 7 new use case pages
   - Real-world scenarios
   - Step-by-step walkthroughs
   - Expected outcomes

3. **Enhance Existing Use Cases** (4 hours)
   - Add more examples
   - Add troubleshooting
   - Add variations

**Deliverables**:
- 45 skill pages
- 7 new use cases
- 3 enhanced use cases

---

### Phase 5: Polish & Launch (Week 4) - FINAL

**Goal**: Final polish, SEO, launch

#### Tasks:

1. **Content Quality Pass** (8 hours)
   - Review all pages for:
     - Plain language
     - Scannable formatting
     - Action-oriented writing
     - Present tense
     - Grammar sacrifice for concision

2. **SEO Optimization** (4 hours)
   - Update meta descriptions (150-160 chars)
   - Add keywords naturally
   - Internal linking strategy
   - Image alt text

3. **Navigation & Search** (4 hours)
   - Optimize sidebar navigation
   - Test search functionality
   - Add breadcrumbs
   - Cross-references

4. **Testing & Validation** (4 hours)
   - Test all code examples
   - Verify all links
   - Test on mobile
   - Accessibility check

5. **Launch Preparation** (4 hours)
   - Create announcement
   - Update changelog
   - Prepare social media posts
   - Update main website

**Deliverables**:
- Polished, SEO-optimized content
- Tested, accessible documentation
- Launch materials

---

## Content Guidelines

### Writing Style

**Voice**: Expert but approachable, confident but humble

**Example - Too Verbose**:
> ClaudeKit Engineer is a sophisticated multi-agent artificial intelligence system that has been meticulously engineered and optimized to handle the complete end-to-end software development lifecycle...

**Example - Better**:
> ClaudeKit is an AI development team built on Claude Code. It handles planning, coding, testing, review, and deployment.

### Structure Every Page

```markdown
---
title: Clear, Specific Title
description: Action-oriented description (150-160 chars)
category: section-name
order: 1
published: true
---

# Title

Brief intro (1-2 sentences, what and why)

## What [Thing] Does

Bullet list of capabilities

## When to Use

Specific scenarios

## Quick Example

```bash
# Minimal working example
/command [args]
```

**Output**:
```
Expected output shown
```

## Complete Guide

Step-by-step with explanations

## Common Issues

Quick troubleshooting

## Next Steps

Related pages/topics
```

### Code Examples

**Requirements**:
- Every example must be tested
- Show actual output
- Explain what happens
- Include edge cases

**Format**:
```markdown
**Example**: [What this does]

```bash
# Command
/command [args]
```

**What happens**:
1. Agent X analyzes
2. Agent Y implements
3. Files created: `src/file.ts`

**Output**:
```
Actual command output
```

**Next**: Review changes with `git diff`
```

### Accessibility

- Use semantic headings (H1 → H2 → H3, no skipping)
- Alt text for all images
- Code blocks have language specified
- Links are descriptive ("see installation guide" not "click here")
- Abbreviations explained on first use

---

## Success Metrics

### Quantitative

1. **Page Count**: 22 → 80+ pages (264% increase)
2. **Agent Coverage**: 14% → 100% (14 agents fully documented)
3. **Command Coverage**: 47% → 100% (30+ commands documented)
4. **Skills Coverage**: 0% → 100% (45 skills documented)
5. **Avg Page Load**: <2s (currently ~1.5s, maintain)
6. **Search Findability**: 90%+ queries return relevant result
7. **Mobile Usability**: 100% pages responsive

### Qualitative

1. **First-Time User Success**: Can ship feature in 15 min with quick start
2. **Troubleshooting Effectiveness**: 80%+ issues resolved from docs
3. **Content Clarity**: 90%+ users rate docs "clear and helpful"
4. **Scannability**: Users find info within 30 seconds
5. **Completeness**: 95%+ questions answered in docs

### User Feedback Targets

- Satisfaction rating: >4.5/5
- "Docs were helpful": >90%
- Support tickets from docs: <10/week
- Return visit rate: >60%

---

## File Structure

```
src/content/docs/
├── getting-started/
│   ├── introduction.md [REVISE]
│   ├── installation.md [ENHANCE]
│   └── quick-start.md [NEW]
│
├── cli/
│   ├── index.md [REVISE]
│   ├── installation.md [REVISE]
│   └── new.md [ENHANCE]
│
├── core-concepts/
│   ├── architecture.md [RENAME/ENHANCE]
│   ├── workflows.md [ENHANCE]
│   ├── claude-md.md [NEW]
│   ├── development-rules.md [NEW]
│   └── orchestration-protocol.md [NEW]
│
├── agents/
│   ├── index.md [ENHANCE]
│   ├── planner.md [ENHANCE]
│   ├── researcher.md [NEW]
│   ├── brainstormer.md [NEW]
│   ├── scout.md [NEW]
│   ├── tester.md [NEW]
│   ├── debugger.md [NEW]
│   ├── code-reviewer.md [NEW]
│   ├── git-manager.md [NEW]
│   ├── docs-manager.md [NEW]
│   ├── project-manager.md [NEW]
│   ├── ui-ux-designer.md [NEW]
│   ├── copywriter.md [NEW]
│   ├── database-admin.md [NEW]
│   └── journal-writer.md [NEW]
│
├── commands/
│   ├── index.md [ENHANCE]
│   ├── core/
│   │   ├── bootstrap.md [EXISTS]
│   │   ├── cook.md [EXISTS]
│   │   ├── ask.md [NEW]
│   │   ├── scout.md [NEW]
│   │   ├── debug.md [NEW]
│   │   └── journal.md [NEW]
│   ├── fix/
│   │   ├── fast.md [EXISTS]
│   │   ├── hard.md [EXISTS]
│   │   ├── ci.md [EXISTS]
│   │   ├── ui.md [EXISTS]
│   │   ├── logs.md [NEW]
│   │   └── types.md [NEW]
│   ├── docs/
│   │   ├── init.md [EXISTS]
│   │   ├── update.md [NEW]
│   │   └── summarize.md [NEW]
│   ├── git/
│   │   ├── commit.md [EXISTS]
│   │   ├── commit-push.md [EXISTS]
│   │   └── pull-request.md [NEW]
│   ├── plan/
│   │   ├── ci.md [NEW]
│   │   └── two.md [NEW]
│   ├── design/
│   │   ├── 3d.md [NEW]
│   │   ├── describe.md [NEW]
│   │   ├── fast.md [NEW]
│   │   ├── good.md [NEW]
│   │   ├── screenshot.md [NEW]
│   │   └── video.md [NEW]
│   ├── content/
│   │   ├── cro.md [NEW]
│   │   ├── enhance.md [NEW]
│   │   ├── fast.md [NEW]
│   │   └── good.md [NEW]
│   ├── integrate/
│   │   ├── polar.md [NEW]
│   │   └── sepay.md [NEW]
│   └── skill/
│       ├── create.md [NEW]
│       └── fix-logs.md [NEW]
│
├── skills/
│   ├── index.md [ENHANCE]
│   ├── debugging/ [3 NEW]
│   ├── problem-solving/ [2 NEW]
│   ├── frontend/ [7 NEW]
│   ├── auth/ [1 NEW]
│   ├── ecommerce/ [1 NEW]
│   ├── cloud/ [7 NEW]
│   ├── ai/ [6 NEW]
│   ├── documents/ [2 NEW]
│   ├── media/ [2 NEW]
│   ├── dev-tools/ [3 NEW]
│   └── claude-code-integration/ [11 NEW]
│
├── use-cases/
│   ├── index.md [ENHANCE]
│   ├── starting-new-project.md [ENHANCE]
│   ├── maintaining-old-project.md [ENHANCE]
│   ├── adding-feature.md [NEW]
│   ├── fixing-bugs.md [NEW]
│   ├── refactoring-code.md [NEW]
│   ├── migrating-tech-stack.md [NEW]
│   ├── onboarding-developers.md [NEW]
│   ├── code-review-workflow.md [NEW]
│   ├── documentation-sync.md [NEW]
│   ├── building-api.md [NEW]
│   ├── integrating-payment.md [NEW]
│   ├── implementing-auth.md [NEW]
│   └── optimizing-performance.md [NEW]
│
├── troubleshooting/
│   ├── index.md [NEW]
│   ├── installation-issues.md [NEW]
│   ├── command-errors.md [NEW]
│   ├── agent-issues.md [NEW]
│   ├── api-key-setup.md [NEW]
│   └── performance-issues.md [NEW]
│
├── configuration/
│   ├── index.md [NEW]
│   ├── claude-md-reference.md [NEW]
│   ├── environment-variables.md [NEW]
│   └── project-structure.md [NEW]
│
└── hooks/
    ├── index.md [NEW]
    ├── custom-agents.md [NEW]
    └── custom-commands.md [NEW]
```

**Total New Files**: 58+
**Total Enhanced Files**: 10
**Final Page Count**: ~80 pages

---

## Content Templates

### Agent Page Template

```markdown
---
title: [Agent Name] Agent
description: [What it does in 1 sentence] (150-160 chars)
category: agents
order: [number]
published: true
---

# [Agent Name] Agent

[1-2 sentence overview: what, why]

## What [Agent] Does

- Capability 1
- Capability 2
- Capability 3

## When to Use

- Scenario 1: [description]
- Scenario 2: [description]
- Scenario 3: [description]

## Quick Example

```bash
/command-that-uses-agent [args]
```

**What happens**:
1. [Agent] analyzes [thing]
2. [Agent] creates [output]
3. Result saved to [location]

## How [Agent] Works

### Step 1: [Action]
[Explanation]

### Step 2: [Action]
[Explanation]

### Step 3: [Action]
[Explanation]

## Configuration

[Agent-specific settings if any]

## Output Format

[What the agent produces]

**Example Output**:
```
[Actual output example]
```

## Best Practices

✅ **Do**:
- [Best practice 1]
- [Best practice 2]

❌ **Don't**:
- [Anti-pattern 1]
- [Anti-pattern 2]

## Common Issues

### Issue 1
**Problem**: [description]
**Solution**: [fix]

### Issue 2
**Problem**: [description]
**Solution**: [fix]

## Related

- [Related agent/command/concept]
- [Related agent/command/concept]

---

**Next**: [Logical next step]
```

### Command Page Template

```markdown
---
title: /command-name
description: [What it does] (150-160 chars)
category: commands
order: [number]
published: true
---

# /command-name

[1 sentence: what and when to use]

## Syntax

```bash
/command-name [required-arg] [optional-arg]
```

## When to Use

- [Scenario 1]
- [Scenario 2]
- [Scenario 3]

## Quick Example

```bash
/command-name [example args]
```

**Output**:
```
[Actual output]
```

**Result**: [What was achieved]

## Arguments

- `[required-arg]`: [Description]
- `[optional-arg]`: [Description, default value]

## What Happens

When you run this command:

1. [Step 1]
2. [Step 2]
3. [Step 3]

**Agents Invoked**: [Agent list]

## Complete Example

[Detailed walkthrough with explanations]

## Variations

### Variation 1: [Description]
```bash
/command-name [different args]
```

### Variation 2: [Description]
```bash
/command-name [different args]
```

## Common Issues

[Troubleshooting]

## Related Commands

- [Related command 1]
- [Related command 2]

---

**Next**: [Logical next step]
```

### Skill Page Template

```markdown
---
title: [Skill Name]
description: [What it enables] (150-160 chars)
category: skills
order: [number]
published: true
---

# [Skill Name]

[1-2 sentences: what capability this provides]

## What [Skill] Provides

- Feature 1
- Feature 2
- Feature 3

## Setup

### Prerequisites

- [Requirement 1]
- [Requirement 2]

### API Key Setup

```bash
export SKILL_API_KEY=your-key-here
# Or add to .env
```

**Get API Key**: [Link to provider]

### Installation

[If any additional setup needed]

## Usage

### Basic Example

[Simple usage example]

### Advanced Example

[More complex example]

## Capabilities

### Capability 1
[Description and example]

### Capability 2
[Description and example]

## Integration with ClaudeKit

[How it integrates with agents/commands]

## Best Practices

[Optimal usage patterns]

## Troubleshooting

[Common issues]

## Related

- [Related skills]
- [Related documentation]

---

**Next**: [Logical next step]
```

---

## Review Checklist

Before marking any page complete:

### Content Quality
- [ ] Plain language (no unnecessary jargon)
- [ ] Scannable (headers, bullets, short paragraphs)
- [ ] Action-oriented (verb-first)
- [ ] Present tense
- [ ] Grammar sacrificed for concision where appropriate
- [ ] Examples are tested and work
- [ ] "Brilliance" - demonstrates expertise naturally

### Structure
- [ ] Frontmatter complete and valid
- [ ] Clear hierarchy (H1 → H2 → H3, no skipping)
- [ ] Logical flow
- [ ] Internal links work
- [ ] External links verified

### SEO
- [ ] Meta description 150-160 chars
- [ ] Keywords natural
- [ ] Descriptive links
- [ ] Image alt text

### Accessibility
- [ ] Semantic HTML
- [ ] Keyboard navigable
- [ ] Screen reader friendly
- [ ] Code blocks have language
- [ ] Abbreviations explained

### Mobile
- [ ] Responsive layout
- [ ] Readable text size
- [ ] Touch targets adequate
- [ ] No horizontal scroll

---

## Risk Assessment

### High Risk
1. **Timeline Slippage**: 80+ pages in 4 weeks is aggressive
   - **Mitigation**: Prioritize Phase 1-2, Phase 3-4 can extend
   - **Contingency**: Focus on quality over quantity

2. **Example Testing**: Testing all examples time-consuming
   - **Mitigation**: Test critical paths first
   - **Contingency**: Mark untested examples clearly

### Medium Risk
1. **Content Consistency**: Multiple writers or phases may vary tone
   - **Mitigation**: Use templates, style guide strictly
   - **Contingency**: Final consistency pass in Phase 5

2. **Navigation Complexity**: 80+ pages harder to navigate
   - **Mitigation**: Clear categories, good search
   - **Contingency**: Add overview pages, improve search

### Low Risk
1. **Technical Accuracy**: Content based on existing codebase
   - **Mitigation**: Reference source files directly
   - **Verification**: Test against actual implementation

---

## Resource Requirements

### Time Estimates

**Phase 1**: 16 hours
**Phase 2**: 29 hours
**Phase 3**: 35 hours
**Phase 4**: 60 hours
**Phase 5**: 24 hours

**Total**: ~164 hours (4 weeks at 40 hrs/week)

### Skills Needed

1. **Technical Writer**: Understanding of ClaudeKit, AI agents, development workflows
2. **Developer**: Testing examples, verifying accuracy
3. **Designer**: ASCII diagrams, visual hierarchy
4. **Editor**: Final polish, consistency

### Tools

- **Astro**: Site framework
- **Markdown**: Content format
- **Zod**: Schema validation
- **Git**: Version control
- **Claude Code**: Testing examples

---

## Definition of Done

### Per Page
- [ ] Content written following templates
- [ ] Examples tested and verified
- [ ] Frontmatter valid
- [ ] Internal links work
- [ ] Passes review checklist
- [ ] Merged to main branch

### Per Phase
- [ ] All planned pages complete
- [ ] Navigation updated
- [ ] Cross-references added
- [ ] Search indexed
- [ ] Deployed to staging
- [ ] Reviewed by stakeholder

### Overall Project
- [ ] All 5 phases complete
- [ ] 80+ pages published
- [ ] Navigation optimized
- [ ] Search working
- [ ] SEO implemented
- [ ] Accessible (WCAG AA)
- [ ] Mobile responsive
- [ ] Analytics tracking
- [ ] Deployed to production
- [ ] Announced

---

## Next Steps

1. **Approve Plan**: Review and approve this plan
2. **Assign Resources**: Allocate writers/developers
3. **Setup Tracking**: Create project board/tasks
4. **Start Phase 1**: Begin with foundation (Week 1)
5. **Daily Standup**: Track progress, adjust as needed
6. **Weekly Review**: Assess quality, adjust timeline

---

## Unresolved Questions

1. Should we include video walkthroughs for complex workflows?
2. Do we need localization (i18n) for Phase 1, or defer to Phase 6?
3. Should skills have interactive playgrounds/sandboxes?
4. Do we need printable PDF versions of documentation?
5. Should we implement version switching (for future ClaudeKit versions)?
6. Do we need dark mode examples for code screenshots?
7. Should we add estimated reading time to pages?

---

**Plan Created By**: planner agent
**Last Updated**: 2025-10-30
**Status**: Ready for Implementation
**Approval Required**: Yes

---

## Appendix: Example Page

### Sample Quick Start Page

```markdown
---
title: Quick Start
description: Ship your first feature in 15 minutes with ClaudeKit
category: getting-started
order: 3
published: true
---

# Quick Start

Ship production feature in 15 minutes.

## Prerequisites

- ClaudeKit installed (`ck version` works)
- Claude Code running
- API keys configured (optional for MVP)

## Your First Feature

We'll add user authentication to a Next.js app.

### Step 1: Bootstrap Project

```bash
ck new my-app --kit engineer
cd my-app
```

**Created**:
- `.claude/` - Agent configurations
- `docs/` - Project documentation
- `plans/` - Implementation plans

### Step 2: Plan Authentication

```bash
/plan add user authentication with email/password
```

**What happens** (30 seconds):
1. `planner` agent analyzes your codebase
2. Researches Next.js auth best practices
3. Creates implementation plan

**Output**:
```
planner Agent: Plan created
📄 plans/251030-auth-implementation.md

Summary:
- Use next-auth with credentials provider
- Add session management
- Create login/signup pages
- Files to create: 5
- Files to modify: 3
Estimated: 2 hours
```

### Step 3: Review Plan

```bash
cat plans/251030-auth-implementation.md
```

Review the plan. Looks good? Continue.

### Step 4: Implement

```bash
/cook implement the auth plan
```

**What happens** (5 minutes):
1. Installs dependencies (`next-auth`)
2. Creates auth config files
3. Generates login/signup pages
4. Adds middleware
5. Writes tests

**Output**:
```
Code Agent: Implementation complete

Created:
✓ app/api/auth/[...nextauth]/route.ts
✓ app/login/page.tsx
✓ app/signup/page.tsx
✓ middleware.ts

Tests:
✓ tests/auth.test.ts (8 tests)

Next: Run /test
```

### Step 5: Test

```bash
/test
```

**Output**:
```
tester Agent: Running tests...

✓ Unit tests: 45 passed
✓ Auth tests: 8 passed
✓ Coverage: 87%

All tests passed!
```

### Step 6: See It Work

```bash
npm run dev
```

Visit `http://localhost:3000/login`

### Step 7: Commit

```bash
/git:cm
```

**Output**:
```
git-manager Agent: Committing changes

✓ Staged: 8 files
✓ Commit: feat(auth): add email/password authentication
✓ Pushed to origin/main

Done!
```

## What Just Happened?

1. **Planning (30s)**: AI analyzed your project, researched best practices, created detailed plan
2. **Implementation (5m)**: AI wrote production code, tests, documentation
3. **Testing (1m)**: AI validated everything works
4. **Commit (10s)**: AI created professional git commit

**Time saved**: ~8 hours (typical auth implementation)

## Next Steps

Try more features:

```bash
/cook add OAuth with Google and GitHub
/cook add password reset flow
/cook add 2FA with TOTP
```

Each takes 5-15 minutes instead of hours.

## Learn More

- [Commands Guide](/docs/commands/) - All available commands
- [Agents Overview](/docs/agents/) - How AI agents work
- [Use Cases](/docs/use-cases/) - More real-world examples

---

**You just shipped production-ready authentication in 15 minutes.** Traditional boilerplates can't do that.
```

---

**End of Plan**
