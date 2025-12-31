# ClaudeKit Documentation Update Plan

**Date:** 2025-10-30
**Status:** Research Complete - Ready for Implementation
**Estimated Effort:** 12-16 hours

---

## Executive Summary

Comprehensive plan to update ClaudeKit.cc documentation by extracting content from ClaudeKit Engineer source files (`.claude/` directory) and CLI README. Will document 14 agents, 45 commands, 30+ skills, and hooks system. Existing docs structure already in place with 22 pages; plan expands coverage to full feature set.

---

## Research Findings

### File Analysis Summary

**ClaudeKit Engineer Structure** (`../claudekit-engineer/.claude/`):
- Total markdown files: 318
- Agent files: 14
- Command files: 45 (hierarchical structure)
- Skill files: 252 (30+ skills with reference docs)
- Hook files: 3 (plus setup guides)
- Workflow files: ~5

**Command Categories Identified**:
- Core: `ask`, `bootstrap`, `brainstorm`, `code`, `cook`, `plan`, `scout`, `test`, `debug`, `journal`, `watzup`
- Content: `content/cro`, `content/enhance`, `content/fast`, `content/good`
- Design: `design/3d`, `design/describe`, `design/fast`, `design/good`, `design/screenshot`, `design/video`
- Fix: `fix/ci`, `fix/fast`, `fix/hard`, `fix/logs`, `fix/test`, `fix/types`, `fix/ui`
- Git: `git/cm`, `git/cp`, `git/pr`
- Docs: `docs/init`, `docs/summarize`, `docs/update`
- Integration: `integrate/polar`, `integrate/sepay`
- Skill: `skill/create`, `skill/fix-logs`
- Variants: `bootstrap/auto`, `bootstrap/auto/fast`, `cook/auto`, `cook/auto/fast`, `plan/ci`, `plan/cro`, `plan/two`

**Skill Categories Identified** (30+ skills):
- Auth: better-auth
- Design: canvas-design
- Browser: chrome-devtools, cloudflare-browser-rendering
- Cloud: cloudflare, cloudflare-workers, cloudflare-r2, gcloud
- Database: mongodb, postgresql-psql
- Media: ffmpeg, imagemagick
- AI: gemini-audio, gemini-document-processing, gemini-image-gen, gemini-video-understanding, gemini-vision
- Development: docker, nextjs, remix-icon, repomix, shadcn-ui, shopify, tailwindcss, turborepo
- Tools: docs-seeker, mcp-builder
- Utilities: sequential-thinking, skill-creator, template-skill

**Agent Roles** (14 agents):
- Planning: planner, brainstormer, researcher, scout
- Development: debugger, tester, code-reviewer
- Creative: ui-ux-designer, copywriter
- Management: docs-manager, project-manager, git-manager
- Specialized: database-admin, journal-writer

**Hook Types**:
- Discord: Automated webhook notifications with rich embeds
- Telegram: Bot-based notifications with markdown formatting
- Manual: Custom message sending

**Existing Documentation** (`/mnt/d/www/claudekit/claudekit-docs/src/content/docs/`):
- Structure: 7 categories (getting-started, core-concepts, agents, commands, skills, use-cases, cli)
- Current files: 22 markdown files
- Schema: Zod-validated with required frontmatter (title, description, category, order, published)
- Agent docs: 2 files (index, planner)
- Command docs: 13 files (partial coverage)
- CLI docs: 3 files (index, installation, new)
- Skills docs: 1 file (index only)
- Use cases: 3 files

---

## Documentation Structure Plan

### Categories and Organization

```
src/content/docs/
├── getting-started/          [Existing - 2 files] - Keep as is
│   ├── introduction.md
│   └── installation.md
├── cli/                      [Existing - 3 files] - Expand coverage
│   ├── index.md              [UPDATE] Add diagnose, versions
│   ├── installation.md       [KEEP]
│   ├── new.md               [KEEP]
│   ├── update.md            [CREATE] Document update command
│   ├── versions.md          [CREATE] List versions command
│   ├── diagnose.md          [CREATE] Troubleshooting tool
│   ├── authentication.md    [CREATE] Auth flow details
│   └── exclude-patterns.md  [CREATE] File exclusion
├── agents/                   [Existing - 2 files] - Complete set
│   ├── index.md             [UPDATE] Add missing agents
│   ├── planner.md           [KEEP]
│   ├── debugger.md          [CREATE]
│   ├── scout.md             [CREATE]
│   ├── tester.md            [CREATE]
│   ├── code-reviewer.md     [CREATE]
│   ├── researcher.md        [CREATE]
│   ├── brainstormer.md      [CREATE]
│   ├── ui-ux-designer.md    [CREATE]
│   ├── copywriter.md        [CREATE]
│   ├── docs-manager.md      [CREATE]
│   ├── project-manager.md   [CREATE]
│   ├── git-manager.md       [CREATE]
│   ├── database-admin.md    [CREATE]
│   └── journal-writer.md    [CREATE]
├── commands/                 [Existing - 13 files] - Complete coverage
│   ├── index.md             [UPDATE] Add categorization
│   ├── core/                [Partial coverage]
│   │   ├── ask.md           [CREATE]
│   │   ├── bootstrap.md     [KEEP]
│   │   ├── brainstorm.md    [CREATE]
│   │   ├── code.md          [CREATE]
│   │   ├── cook.md          [KEEP]
│   │   ├── plan.md          [CREATE]
│   │   ├── scout.md         [CREATE]
│   │   ├── test.md          [CREATE]
│   │   ├── debug.md         [CREATE]
│   │   ├── journal.md       [CREATE]
│   │   └── watzup.md        [CREATE]
│   ├── content/             [CREATE category]
│   │   ├── cro.md
│   │   ├── enhance.md
│   │   ├── fast.md
│   │   └── good.md
│   ├── design/              [CREATE category]
│   │   ├── 3d.md
│   │   ├── describe.md
│   │   ├── fast.md
│   │   ├── good.md
│   │   ├── screenshot.md
│   │   └── video.md
│   ├── fix/                 [Partial coverage]
│   │   ├── ci.md            [KEEP]
│   │   ├── fast.md          [KEEP]
│   │   ├── hard.md          [KEEP]
│   │   ├── logs.md          [CREATE]
│   │   ├── test.md          [CREATE]
│   │   ├── types.md         [CREATE]
│   │   └── ui.md            [KEEP]
│   ├── git/                 [Partial coverage]
│   │   ├── commit.md        [KEEP - rename from commit.md]
│   │   ├── commit-push.md   [KEEP]
│   │   └── pr.md            [CREATE]
│   ├── docs/                [Partial coverage]
│   │   ├── init.md          [KEEP]
│   │   ├── summarize.md     [CREATE]
│   │   └── update.md        [CREATE]
│   ├── integrate/           [CREATE category]
│   │   ├── polar.md
│   │   └── sepay.md
│   └── skill/               [CREATE category]
│       ├── create.md
│       └── fix-logs.md
├── skills/                   [Existing - 1 file] - Full catalog
│   ├── index.md             [UPDATE] Add all skills
│   ├── auth/                [CREATE category]
│   │   └── better-auth.md
│   ├── design/              [CREATE category]
│   │   ├── canvas-design.md
│   │   └── remix-icon.md
│   ├── browser/             [CREATE category]
│   │   ├── chrome-devtools.md
│   │   └── cloudflare-browser-rendering.md
│   ├── cloud/               [CREATE category]
│   │   ├── cloudflare.md
│   │   ├── cloudflare-workers.md
│   │   ├── cloudflare-r2.md
│   │   └── gcloud.md
│   ├── database/            [CREATE category]
│   │   ├── mongodb.md
│   │   └── postgresql-psql.md
│   ├── media/               [CREATE category]
│   │   ├── ffmpeg.md
│   │   └── imagemagick.md
│   ├── ai/                  [CREATE category]
│   │   ├── gemini-audio.md
│   │   ├── gemini-document-processing.md
│   │   ├── gemini-image-gen.md
│   │   ├── gemini-video-understanding.md
│   │   └── gemini-vision.md
│   ├── development/         [CREATE category]
│   │   ├── docker.md
│   │   ├── nextjs.md
│   │   ├── shadcn-ui.md
│   │   ├── shopify.md
│   │   ├── tailwindcss.md
│   │   └── turborepo.md
│   └── tools/               [CREATE category]
│       ├── docs-seeker.md
│       ├── mcp-builder.md
│       ├── repomix.md
│       ├── sequential-thinking.md
│       └── skill-creator.md
├── hooks/                    [CREATE category]
│   ├── index.md             [CREATE] Overview
│   ├── discord.md           [CREATE] Discord integration
│   ├── telegram.md          [CREATE] Telegram integration
│   └── custom.md            [CREATE] Creating custom hooks
├── core-concepts/           [Existing - 2 files] - Expand
│   ├── claude-md.md         [KEEP]
│   ├── workflows.md         [KEEP]
│   ├── agents.md            [CREATE] Agent architecture
│   ├── commands.md          [CREATE] Command system
│   └── orchestration.md     [CREATE] Agent coordination
└── use-cases/               [Existing - 3 files] - Keep as is
    ├── index.md
    ├── starting-new-project.md
    └── maintaining-old-project.md
```

**File Count Summary**:
- Existing: 22 files
- New files: ~90 files
- Updated files: ~10 files
- Total after: ~112 files

---

## Content Plan by Section

### 1. CLI Documentation (8 pages)

**Files to Update**:
- `cli/index.md` - Add diagnose, versions commands

**Files to Create**:
- `cli/update.md` - Update command usage, options, workflow
- `cli/versions.md` - List versions, filtering, examples
- `cli/diagnose.md` - Diagnostic tool, troubleshooting, output interpretation
- `cli/authentication.md` - Multi-tier auth flow, setup by platform, token management
- `cli/exclude-patterns.md` - Glob patterns, examples, security restrictions

**Content Structure** (per file):
```markdown
---
title: "[Command Name]"
description: "[Brief description]"
category: cli
order: [number]
published: true
---

# [Command Name]

Brief introduction (1-2 paragraphs).

## Synopsis

\`\`\`bash
ck [command] [options]
\`\`\`

## Options

| Flag | Description | Default |
|------|-------------|---------|
| ... | ... | ... |

## Usage Examples

### Basic Usage
\`\`\`bash
# Example
\`\`\`

### Advanced Usage
\`\`\`bash
# Example
\`\`\`

## Common Scenarios

### Scenario 1
Description and example.

## Troubleshooting

Common issues and solutions.

## See Also

- Related commands
- Related concepts
```

**Source**: `/mnt/d/www/claudekit/claudekit-cli/README.md` lines 80-648

---

### 2. Agents Documentation (15 pages)

**Files to Update**:
- `agents/index.md` - Complete list with categories

**Files to Create** (13 agent pages):
- `agents/debugger.md`
- `agents/scout.md`
- `agents/tester.md`
- `agents/code-reviewer.md`
- `agents/researcher.md`
- `agents/brainstormer.md`
- `agents/ui-ux-designer.md`
- `agents/copywriter.md`
- `agents/docs-manager.md`
- `agents/project-manager.md`
- `agents/git-manager.md`
- `agents/database-admin.md`
- `agents/journal-writer.md`

**Content Structure** (per agent):
```markdown
---
title: "[Agent Name] Agent"
description: "[One-line description from agent file]"
category: agents
order: [number]
published: true
---

# [Agent Name] Agent

[Description extracted from agent YAML frontmatter]

## When to Use

[Extracted from description field with examples]

## Core Responsibilities

[Extracted from agent markdown content - Core Responsibilities section]

## Workflow

[Extracted from agent content - workflow/process sections]

## Tools & Techniques

[Extracted from agent content - tools section if present]

## Best Practices

[Extracted from agent content]

## Examples

### Example 1: [Scenario]
[Extracted from examples in agent file]

### Example 2: [Scenario]
[Another example]

## See Also

- Related agents
- Related commands
- Related workflows
```

**Source**: `/mnt/d/www/claudekit/claudekit-engineer/.claude/agents/*.md`

---

### 3. Commands Documentation (45 pages)

**Structure by Category**:

#### Core Commands (11)
- `ask.md`, `bootstrap.md`, `brainstorm.md`, `code.md`, `cook.md`, `plan.md`, `scout.md`, `test.md`, `debug.md`, `journal.md`, `watzup.md`

#### Content Commands (4)
- `content/cro.md`, `content/enhance.md`, `content/fast.md`, `content/good.md`

#### Design Commands (6)
- `design/3d.md`, `design/describe.md`, `design/fast.md`, `design/good.md`, `design/screenshot.md`, `design/video.md`

#### Fix Commands (7)
- `fix/ci.md`, `fix/fast.md`, `fix/hard.md`, `fix/logs.md`, `fix/test.md`, `fix/types.md`, `fix/ui.md`

#### Git Commands (3)
- `git/commit.md`, `git/commit-push.md`, `git/pr.md`

#### Docs Commands (3)
- `docs/init.md`, `docs/summarize.md`, `docs/update.md`

#### Integration Commands (2)
- `integrate/polar.md`, `integrate/sepay.md`

#### Skill Commands (2)
- `skill/create.md`, `skill/fix-logs.md`

**Content Structure** (per command):
```markdown
---
title: "/[command-name]"
description: "[Description from command file]"
category: commands
order: [number]
published: true
---

# /[command-name]

[Description and argument hint extracted from YAML frontmatter]

## Purpose

[Main purpose extracted from command content]

## Usage

\`\`\`bash
/[command-name] [arguments]
\`\`\`

## Arguments

| Argument | Description | Required |
|----------|-------------|----------|
| ... | ... | ... |

## Workflow

[Workflow steps extracted from command markdown]

## Agent Orchestration

[Which agents are used and how - extracted from workflow section]

## Examples

### Example 1: [Scenario]
\`\`\`bash
/[command-name] "example argument"
\`\`\`

### Example 2: [Scenario]
[Another example]

## Best Practices

[Tips and recommendations]

## See Also

- Related commands
- Related agents
- Related workflows
```

**Source**: `/mnt/d/www/claudekit/claudekit-engineer/.claude/commands/**/*.md`

---

### 4. Skills Documentation (30+ pages)

**Category Organization**:
- Auth (1): better-auth
- Design (2): canvas-design, remix-icon
- Browser (2): chrome-devtools, cloudflare-browser-rendering
- Cloud (4): cloudflare, cloudflare-workers, cloudflare-r2, gcloud
- Database (2): mongodb, postgresql-psql
- Media (2): ffmpeg, imagemagick
- AI (5): gemini-audio, gemini-document-processing, gemini-image-gen, gemini-video-understanding, gemini-vision
- Development (6): docker, nextjs, shadcn-ui, shopify, tailwindcss, turborepo
- Tools (5): docs-seeker, mcp-builder, repomix, sequential-thinking, skill-creator

**Content Structure** (per skill):
```markdown
---
title: "[Skill Name]"
description: "[Description from skill.md frontmatter]"
category: skills
order: [number]
published: true
---

# [Skill Name]

[Introduction extracted from skill.md]

## When to Use This Skill

[When to use section from skill.md]

## Core Concepts

[Core concepts/key features from skill.md]

## Installation & Setup

[Installation steps from skill.md]

## Usage Examples

### Basic Usage
[Examples from skill.md]

### Advanced Usage
[Advanced examples]

## Configuration

[Configuration options from skill.md]

## Best Practices

[Best practices section]

## Common Patterns

[Common patterns/recipes]

## Troubleshooting

[Common issues and solutions]

## Resources

- Official documentation
- Related skills
- Examples

## See Also

- Related commands
- Related agents
```

**Source**: `/mnt/d/www/claudekit/claudekit-engineer/.claude/skills/*/skill.md`

**Note**: Each skill directory contains:
- `skill.md` - Main documentation (use this as primary source)
- Reference docs (additional context)
- Examples/scripts (for code snippets)

---

### 5. Hooks Documentation (4 pages)

**Files to Create**:
- `hooks/index.md` - Overview of hooks system
- `hooks/discord.md` - Discord webhook setup and usage
- `hooks/telegram.md` - Telegram bot setup and usage
- `hooks/custom.md` - Creating custom hooks

**Content Structure** (per hook type):
```markdown
---
title: "[Hook Type] Hooks"
description: "[Description]"
category: hooks
order: [number]
published: true
---

# [Hook Type] Hooks

[Introduction to hook type]

## Overview

[What this hook does, when it triggers]

## Setup

### Prerequisites
- Requirements

### Configuration Steps

1. [Step 1]
2. [Step 2]
3. [Step 3]

## Environment Variables

\`\`\`bash
# Required variables
VARIABLE_NAME=value
\`\`\`

## Hook Configuration

\`\`\`json
{
  "hooks": {
    "Stop": [{
      "hooks": [{
        "type": "command",
        "command": "..."
      }]
    }]
  }
}
\`\`\`

## Usage Examples

### Basic Notification
[Example]

### Custom Message
[Example]

## Troubleshooting

[Common issues]

## Security Best Practices

[Security recommendations]

## See Also

- Related hooks
- Configuration reference
```

**Source**: `/mnt/d/www/claudekit/claudekit-engineer/.claude/hooks/*.md`

---

### 6. Core Concepts Documentation (5 pages)

**Files to Keep**:
- `core-concepts/claude-md.md`
- `core-concepts/workflows.md`

**Files to Create**:
- `core-concepts/agents.md` - Agent architecture, lifecycle, communication
- `core-concepts/commands.md` - Command system, slash commands, orchestration
- `core-concepts/orchestration.md` - Agent coordination patterns

**Content Structure**:
```markdown
---
title: "[Concept Name]"
description: "[Description]"
category: core-concepts
order: [number]
published: true
---

# [Concept Name]

[Introduction and overview]

## Architecture

[System architecture explanation with diagrams]

## Key Components

### Component 1
[Details]

### Component 2
[Details]

## How It Works

[Step-by-step explanation]

## Patterns

### Pattern 1: [Name]
[Description and example]

### Pattern 2: [Name]
[Description and example]

## Best Practices

[Recommendations]

## Examples

[Real-world examples]

## See Also

- Related concepts
- Related commands
```

---

## Implementation Steps

### Phase 1: Setup & Infrastructure (2 hours)

**Step 1.1: Create Directory Structure**
```bash
# Create new category directories
mkdir -p src/content/docs/hooks
mkdir -p src/content/docs/skills/{auth,design,browser,cloud,database,media,ai,development,tools}
mkdir -p src/content/docs/commands/{content,design,integrate,skill}
```

**Step 1.2: Update Content Schema**
Update `src/content/config.ts`:
```typescript
category: z.enum([
  'getting-started',
  'core-concepts',
  'agents',
  'commands',
  'skills',
  'hooks',  // ADD
  'use-cases',
  'components',
  'cli'
])
```

**Step 1.3: Create Documentation Extraction Script**
Create `scripts/extract-docs.ts` to automate content extraction from source files:
```typescript
// Parse YAML frontmatter
// Extract markdown content
// Generate frontmatter for docs site
// Write to appropriate directory
```

---

### Phase 2: CLI Documentation (3 hours)

**Step 2.1: Update Existing Files**
- Update `cli/index.md` - Add diagnose, versions commands to overview

**Step 2.2: Create New CLI Pages**
Priority order:
1. `cli/authentication.md` - Most requested by users
2. `cli/update.md` - Core command
3. `cli/diagnose.md` - Important for troubleshooting
4. `cli/versions.md` - List versions
5. `cli/exclude-patterns.md` - Advanced feature

**Source Sections** (from CLI README):
- Lines 80-208: Commands and usage
- Lines 236-350: Authentication flow
- Lines 352-508: Troubleshooting
- Lines 558-643: Exclude patterns

---

### Phase 3: Agents Documentation (4 hours)

**Step 3.1: Update Index**
- Update `agents/index.md` with all 14 agents categorized

**Step 3.2: Create Agent Pages** (Priority order):
1. **High Priority** (most used):
   - `debugger.md` - Critical for troubleshooting
   - `scout.md` - Core functionality
   - `tester.md` - Core functionality
   - `researcher.md` - Core functionality

2. **Medium Priority**:
   - `code-reviewer.md`
   - `docs-manager.md`
   - `ui-ux-designer.md`
   - `project-manager.md`

3. **Lower Priority**:
   - `brainstormer.md`
   - `copywriter.md`
   - `git-manager.md`
   - `database-admin.md`
   - `journal-writer.md`

**Extraction Process** (per agent):
1. Read source file: `../claudekit-engineer/.claude/agents/[name].md`
2. Extract YAML frontmatter (name, description, model)
3. Extract markdown sections
4. Apply doc template
5. Write to `src/content/docs/agents/[name].md`

---

### Phase 4: Commands Documentation (5 hours)

**Step 4.1: Update Index**
- Update `commands/index.md` with all categories

**Step 4.2: Create Command Pages by Category**

Priority order:
1. **Core Commands** (highest priority):
   - `ask.md`, `brainstorm.md`, `code.md`, `plan.md`, `scout.md`, `test.md`, `debug.md`, `journal.md`, `watzup.md`

2. **Fix Commands** (user requests):
   - `fix/logs.md`, `fix/test.md`, `fix/types.md`

3. **Git Commands**:
   - `git/pr.md`

4. **Docs Commands**:
   - `docs/summarize.md`, `docs/update.md`

5. **Content Commands**:
   - `content/*.md` (4 files)

6. **Design Commands**:
   - `design/*.md` (6 files)

7. **Integration Commands**:
   - `integrate/*.md` (2 files)

8. **Skill Commands**:
   - `skill/*.md` (2 files)

**Extraction Process** (per command):
1. Read source: `../claudekit-engineer/.claude/commands/**/*.md`
2. Extract YAML frontmatter (description, argument-hint)
3. Extract workflow sections
4. Identify agent orchestration patterns
5. Apply doc template
6. Write to appropriate location

---

### Phase 5: Skills Documentation (6 hours)

**Step 5.1: Update Index**
- Update `skills/index.md` with categorized skill list

**Step 5.2: Create Skill Pages by Priority**

Priority order:
1. **High Demand** (most used):
   - AI: `gemini-vision.md`, `gemini-image-gen.md`
   - Tools: `docs-seeker.md`, `repomix.md`
   - Development: `nextjs.md`, `tailwindcss.md`, `docker.md`

2. **Medium Priority**:
   - Cloud: `cloudflare.md`, `cloudflare-workers.md`
   - Database: `mongodb.md`, `postgresql-psql.md`
   - Design: `canvas-design.md`, `shadcn-ui.md`
   - Browser: `chrome-devtools.md`

3. **Lower Priority**:
   - Auth: `better-auth.md`
   - Media: `ffmpeg.md`, `imagemagick.md`
   - AI: `gemini-audio.md`, `gemini-document-processing.md`, `gemini-video-understanding.md`
   - Tools: `mcp-builder.md`, `sequential-thinking.md`, `skill-creator.md`
   - Development: `shopify.md`, `turborepo.md`, `remix-icon.md`
   - Cloud: `cloudflare-r2.md`, `cloudflare-browser-rendering.md`, `gcloud.md`

**Extraction Process** (per skill):
1. Read source: `../claudekit-engineer/.claude/skills/[name]/skill.md`
2. Extract YAML frontmatter
3. Extract markdown sections (When to Use, Core Concepts, etc.)
4. Extract code examples
5. Apply doc template
6. Write to categorized location

**Note**: Each skill has substantial reference documentation (some have 100+ KB); prioritize essential information, link to examples.

---

### Phase 6: Hooks Documentation (2 hours)

**Step 6.1: Create Hooks Overview**
- `hooks/index.md` - System overview, hook types, configuration

**Step 6.2: Create Hook Type Pages**
1. `hooks/discord.md` - Discord webhook setup
2. `hooks/telegram.md` - Telegram bot setup
3. `hooks/custom.md` - Custom hook creation

**Source**: `../claudekit-engineer/.claude/hooks/README.md` and setup guides

---

### Phase 7: Core Concepts Expansion (2 hours)

**Step 7.1: Create Architecture Pages**
1. `core-concepts/agents.md` - Agent architecture and lifecycle
2. `core-concepts/commands.md` - Command system deep dive
3. `core-concepts/orchestration.md` - Agent coordination patterns

**Sources**:
- Agent files for architecture patterns
- Command files for orchestration examples
- Workflow files for coordination patterns

---

### Phase 8: Cross-References & Navigation (1 hour)

**Step 8.1: Add Cross-References**
- Link related agents, commands, skills in "See Also" sections
- Add breadcrumb navigation
- Create quick reference tables

**Step 8.2: Update Navigation**
- Verify `order` field for logical progression
- Test navigation flow
- Add category landing pages

---

### Phase 9: Quality Assurance (2 hours)

**Step 9.1: Content Review**
- Check all frontmatter is valid
- Verify code examples work
- Test links and cross-references
- Ensure consistent formatting

**Step 9.2: Build Validation**
```bash
npm run build
# Check for schema validation errors
# Test generated routes
```

**Step 9.3: Preview & Test**
```bash
npm run preview
# Manual testing of navigation
# Verify all pages render
# Check mobile responsiveness
```

---

## Files to Modify

### Existing Files to Update (10)
1. `src/content/config.ts` - Add 'hooks' to category enum
2. `src/content/docs/cli/index.md` - Add diagnose, versions commands
3. `src/content/docs/agents/index.md` - Add all 14 agents with categories
4. `src/content/docs/commands/index.md` - Add all command categories
5. `src/content/docs/skills/index.md` - Add all skills with categories
6. `src/content/docs/core-concepts/agents.md` - Create
7. `src/content/docs/core-concepts/commands.md` - Create
8. `src/content/docs/core-concepts/orchestration.md` - Create
9. Navigation component (if needed for new categories)
10. README.md - Update with new structure

### New Files to Create (~90)

**CLI** (5 new):
- cli/update.md
- cli/versions.md
- cli/diagnose.md
- cli/authentication.md
- cli/exclude-patterns.md

**Agents** (13 new):
- agents/debugger.md
- agents/scout.md
- agents/tester.md
- agents/code-reviewer.md
- agents/researcher.md
- agents/brainstormer.md
- agents/ui-ux-designer.md
- agents/copywriter.md
- agents/docs-manager.md
- agents/project-manager.md
- agents/git-manager.md
- agents/database-admin.md
- agents/journal-writer.md

**Commands** (32 new):
- commands/core/ask.md
- commands/core/brainstorm.md
- commands/core/code.md
- commands/core/plan.md
- commands/core/scout.md
- commands/core/test.md
- commands/core/debug.md
- commands/core/journal.md
- commands/core/watzup.md
- commands/content/cro.md
- commands/content/enhance.md
- commands/content/fast.md
- commands/content/good.md
- commands/design/3d.md
- commands/design/describe.md
- commands/design/fast.md
- commands/design/good.md
- commands/design/screenshot.md
- commands/design/video.md
- commands/fix/logs.md
- commands/fix/test.md
- commands/fix/types.md
- commands/git/pr.md
- commands/docs/summarize.md
- commands/docs/update.md
- commands/integrate/polar.md
- commands/integrate/sepay.md
- commands/skill/create.md
- commands/skill/fix-logs.md
- commands/plan/ci.md
- commands/plan/cro.md
- commands/plan/two.md

**Skills** (~30 new):
- skills/auth/better-auth.md
- skills/design/canvas-design.md
- skills/design/remix-icon.md
- skills/browser/chrome-devtools.md
- skills/browser/cloudflare-browser-rendering.md
- skills/cloud/cloudflare.md
- skills/cloud/cloudflare-workers.md
- skills/cloud/cloudflare-r2.md
- skills/cloud/gcloud.md
- skills/database/mongodb.md
- skills/database/postgresql-psql.md
- skills/media/ffmpeg.md
- skills/media/imagemagick.md
- skills/ai/gemini-audio.md
- skills/ai/gemini-document-processing.md
- skills/ai/gemini-image-gen.md
- skills/ai/gemini-video-understanding.md
- skills/ai/gemini-vision.md
- skills/development/docker.md
- skills/development/nextjs.md
- skills/development/shadcn-ui.md
- skills/development/shopify.md
- skills/development/tailwindcss.md
- skills/development/turborepo.md
- skills/tools/docs-seeker.md
- skills/tools/mcp-builder.md
- skills/tools/repomix.md
- skills/tools/sequential-thinking.md
- skills/tools/skill-creator.md

**Hooks** (4 new):
- hooks/index.md
- hooks/discord.md
- hooks/telegram.md
- hooks/custom.md

**Core Concepts** (3 new):
- core-concepts/agents.md
- core-concepts/commands.md
- core-concepts/orchestration.md

---

## Testing Strategy

### Unit Validation
1. **Schema Validation**
   - Run build to validate all frontmatter
   - Check Zod errors for any invalid fields

2. **Content Validation**
   - Verify all code examples have language specified
   - Check all internal links resolve
   - Validate markdown syntax

### Integration Testing
1. **Build Testing**
   ```bash
   npm run build
   # Should complete without errors
   ```

2. **Route Generation**
   - Verify all pages generate routes
   - Test dynamic slug generation
   - Check file-based routing works

3. **Navigation Testing**
   - Test sidebar navigation
   - Verify category grouping
   - Check page ordering

### User Acceptance Testing
1. **Content Review**
   - Spot-check 10% of pages for accuracy
   - Verify examples work
   - Test links and cross-references

2. **Mobile Testing**
   - Test responsive layout
   - Verify navigation on mobile
   - Check code block scrolling

3. **Search Testing** (when implemented)
   - Verify all pages indexed
   - Test search relevance

---

## Security Considerations

### Sensitive Information
- **Never include** actual API keys, tokens, or credentials in examples
- Use placeholder values: `ghp_YOUR_TOKEN_HERE`, `YOUR_WEBHOOK_URL`
- Sanitize any real URLs from source files

### Content Safety
- Review all extracted content for sensitive data
- Check for hardcoded paths that might reveal system info
- Verify no personal information in examples

### Access Control
- Documentation is public; ensure no private implementation details
- Keep internal architecture details appropriate for public docs
- No proprietary algorithms or business logic

---

## Performance Considerations

### Build Performance
- 112 total pages is manageable for Astro static generation
- Estimated build time: 30-60 seconds
- No dynamic content requiring SSR

### Content Organization
- Hierarchical structure improves tree-shaking
- Category-based organization enables code splitting
- Lazy loading for navigation not needed at this scale

### Image Optimization
- Use Astro's image optimization for any screenshots
- Compress logos and icons
- Consider WebP format for better performance

---

## Risks & Mitigations

### Risk 1: Content Drift
**Description**: Source files in Engineer repo may change, docs become outdated.
**Impact**: High - Inaccurate documentation
**Mitigation**:
- Document source file locations clearly
- Create update workflow in CI/CD
- Add "Last Updated" date to frontmatter
- Consider automated sync script

### Risk 2: Schema Breaking Changes
**Description**: Zod schema changes could break existing docs.
**Impact**: Medium - Build failures
**Mitigation**:
- Version control schema changes
- Run validation before schema updates
- Use optional fields where possible

### Risk 3: Incomplete Extraction
**Description**: Automated extraction might miss important context.
**Impact**: Medium - Poor documentation quality
**Mitigation**:
- Manual review of extracted content
- Compare source and output files
- User feedback mechanism

### Risk 4: Navigation Complexity
**Description**: 112 pages could create overwhelming navigation.
**Impact**: Low - User confusion
**Mitigation**:
- Clear category hierarchy
- Logical ordering within categories
- Search functionality (future)
- Quick reference pages

### Risk 5: Build Time
**Description**: Large number of pages may slow builds.
**Impact**: Low - Developer friction
**Mitigation**:
- Astro is optimized for static sites
- Incremental builds in development
- Fast production builds (<60s)

---

## TODO Tasks

### Phase 1: Setup (2 hours)
- [ ] Create directory structure for hooks category
- [ ] Create skill subcategory directories (9 categories)
- [ ] Create command subcategory directories (4 new categories)
- [ ] Update content schema to add 'hooks' category
- [ ] Create documentation extraction script (optional)

### Phase 2: CLI (3 hours)
- [ ] Update cli/index.md with new commands
- [ ] Create cli/authentication.md
- [ ] Create cli/update.md
- [ ] Create cli/diagnose.md
- [ ] Create cli/versions.md
- [ ] Create cli/exclude-patterns.md

### Phase 3: Agents (4 hours)
- [ ] Update agents/index.md
- [ ] Create agents/debugger.md
- [ ] Create agents/scout.md
- [ ] Create agents/tester.md
- [ ] Create agents/researcher.md
- [ ] Create agents/code-reviewer.md
- [ ] Create agents/ui-ux-designer.md
- [ ] Create agents/docs-manager.md
- [ ] Create agents/project-manager.md
- [ ] Create agents/brainstormer.md
- [ ] Create agents/copywriter.md
- [ ] Create agents/git-manager.md
- [ ] Create agents/database-admin.md
- [ ] Create agents/journal-writer.md

### Phase 4: Commands (5 hours)
- [ ] Update commands/index.md
- [ ] Create 9 core command pages
- [ ] Create 4 content command pages
- [ ] Create 6 design command pages
- [ ] Create 3 fix command pages (logs, test, types)
- [ ] Create 1 git command page (pr)
- [ ] Create 2 docs command pages (summarize, update)
- [ ] Create 2 integration command pages
- [ ] Create 2 skill command pages
- [ ] Create 3 plan variant pages

### Phase 5: Skills (6 hours)
- [ ] Update skills/index.md
- [ ] Create 5 AI skill pages
- [ ] Create 6 development skill pages
- [ ] Create 4 cloud skill pages
- [ ] Create 5 tool skill pages
- [ ] Create 2 design skill pages
- [ ] Create 2 database skill pages
- [ ] Create 2 browser skill pages
- [ ] Create 2 media skill pages
- [ ] Create 1 auth skill page

### Phase 6: Hooks (2 hours)
- [ ] Create hooks/index.md
- [ ] Create hooks/discord.md
- [ ] Create hooks/telegram.md
- [ ] Create hooks/custom.md

### Phase 7: Core Concepts (2 hours)
- [ ] Create core-concepts/agents.md
- [ ] Create core-concepts/commands.md
- [ ] Create core-concepts/orchestration.md

### Phase 8: Cross-References (1 hour)
- [ ] Add "See Also" sections to all pages
- [ ] Verify navigation order values
- [ ] Test all internal links
- [ ] Update category landing pages

### Phase 9: QA (2 hours)
- [ ] Run build validation
- [ ] Check all frontmatter
- [ ] Test code examples
- [ ] Review mobile responsiveness
- [ ] Spot-check content accuracy
- [ ] Test navigation flow
- [ ] Update README.md

---

## Validation Criteria

### Content Completeness
- ✓ All 14 agents documented
- ✓ All 45 commands documented
- ✓ All 30+ skills documented
- ✓ Hooks system documented (3 types)
- ✓ CLI commands documented (8 pages)
- ✓ Core concepts expanded (5 pages)

### Quality Standards
- ✓ Consistent frontmatter across all pages
- ✓ Code examples with language specified
- ✓ All internal links resolve
- ✓ Mobile responsive
- ✓ Accessible (WCAG 2.1 AA)
- ✓ No schema validation errors

### User Experience
- ✓ Logical navigation hierarchy
- ✓ Clear category organization
- ✓ Cross-references between related pages
- ✓ Examples for common use cases
- ✓ Troubleshooting sections where relevant

---

## Unresolved Questions

1. **Content Extraction Automation**
   - Should we build automated extraction script or manual process?
   - Manual: More control, slower
   - Automated: Faster, potential for errors
   - Recommendation: Start manual, automate later if needed

2. **Skill Documentation Depth**
   - Skills have extensive reference docs (some 100+ KB)
   - Should we include full content or summarize with links?
   - Recommendation: Summarize essentials, link to examples in repo

3. **Version Management**
   - How to handle version-specific documentation?
   - Current approach: Single version (latest)
   - Future: May need versioned docs as Engineer evolves

4. **Search Implementation**
   - When to implement search functionality?
   - Options: Pagefind (mentioned in README), Algolia, custom
   - Recommendation: Phase 2 after content complete

5. **Documentation Sync**
   - How to keep docs in sync with Engineer repo updates?
   - Manual process or automated CI/CD?
   - Recommendation: Manual for now, document source paths clearly

6. **Command Variants**
   - Some commands have variants (bootstrap/auto/fast)
   - Document separately or as sections within parent page?
   - Recommendation: Separate pages for significant differences, sections for minor variants

7. **Agent Model Information**
   - Some agents specify model (e.g., debugger uses Sonnet)
   - Include model selection in docs or omit as implementation detail?
   - Recommendation: Include as "Performance Notes" section if specified

---

## Next Steps

After implementation:
1. Deploy to staging environment for review
2. Collect feedback from ClaudeKit team
3. Test with actual users for usability
4. Implement search functionality (Phase 2)
5. Add interactive examples (Phase 2)
6. Set up automated sync workflow
7. Consider versioned documentation structure
8. Add analytics to track popular pages
9. Create video tutorials for complex topics
10. Establish documentation update process

---

**Plan Created**: 2025-10-30
**Estimated Duration**: 27 hours (12-16 for implementation, 11 for research/QA)
**Priority**: High - Critical for user onboarding and product success
**Status**: Ready for Implementation
