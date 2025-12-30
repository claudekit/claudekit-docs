---
title: "Phase 02: Marketing Agents Content"
status: pending
effort: 6h
type: parallel
depends_on: [phase-01]
copywriter: copywriter-1
---

# Phase 02: Marketing Agents Content

**Type**: PARALLEL (can run with Phases 3-8)
**Effort**: 6h
**Owner**: Copywriter-1
**Depends On**: Phase 1 (Infrastructure)

---

## Overview

Create comprehensive documentation for all 27 Marketing Kit agents. Each agent doc follows storytelling structure with practical examples.

---

## Exclusive File Ownership

This phase exclusively owns:

```
src/content/docs/marketing/agents/index.md
src/content/docs/marketing/agents/attraction-specialist.md
src/content/docs/marketing/agents/seo-specialist.md
src/content/docs/marketing/agents/lead-qualifier.md
src/content/docs/marketing/agents/researcher.md
src/content/docs/marketing/agents/email-wizard.md
src/content/docs/marketing/agents/sale-enabler.md
src/content/docs/marketing/agents/funnel-architect.md
src/content/docs/marketing/agents/content-creator.md
src/content/docs/marketing/agents/continuity-specialist.md
src/content/docs/marketing/agents/upsell-maximizer.md
src/content/docs/marketing/agents/copywriter.md
src/content/docs/marketing/agents/brainstormer.md
src/content/docs/marketing/agents/content-reviewer.md
src/content/docs/marketing/agents/campaign-debugger.md
src/content/docs/marketing/agents/campaign-manager.md
src/content/docs/marketing/agents/social-media-manager.md
src/content/docs/marketing/agents/community-manager.md
src/content/docs/marketing/agents/planner.md
src/content/docs/marketing/agents/project-manager.md
src/content/docs/marketing/agents/docs-manager.md
src/content/docs/marketing/agents/git-manager.md
src/content/docs/marketing/agents/journal-writer.md
src/content/docs/marketing/agents/scout.md
src/content/docs/marketing/agents/scout-external.md
src/content/docs/marketing/agents/mcp-manager.md
src/content/docs/marketing/agents/analytics-analyst.md
src/content/docs/marketing/agents/tester.md
```

**Total**: 28 files (1 index + 27 agents)

---

## Agent Categories

### TOFU (Top of Funnel) - 4 agents

| Agent | Purpose | Priority |
|-------|---------|----------|
| Attraction Specialist | Content that attracts leads | P1 |
| SEO Specialist | Search optimization | P1 |
| Lead Qualifier | Lead scoring and routing | P1 |
| Researcher | Market research | P2 |

### MOFU (Middle of Funnel) - 5 agents

| Agent | Purpose | Priority |
|-------|---------|----------|
| Email Wizard | Email campaigns | P1 |
| Sale Enabler | Sales content | P1 |
| Funnel Architect | Funnel optimization | P1 |
| Content Creator | Content production | P1 |
| Continuity Specialist | Nurture sequences | P2 |

### BOFU (Bottom of Funnel) - 1 agent

| Agent | Purpose | Priority |
|-------|---------|----------|
| Upsell Maximizer | Upsell/cross-sell | P1 |

### Core Marketing - 5 agents

| Agent | Purpose | Priority |
|-------|---------|----------|
| Copywriter | Marketing copy | P1 |
| Brainstormer | Campaign ideation | P1 |
| Content Reviewer | Quality assurance | P2 |
| Campaign Debugger | Campaign troubleshooting | P2 |
| Campaign Manager | Campaign orchestration | P1 |

### Community - 2 agents

| Agent | Purpose | Priority |
|-------|---------|----------|
| Social Media Manager | Social presence | P1 |
| Community Manager | Community engagement | P2 |

### Support/Infrastructure - 10 agents

| Agent | Purpose | Priority |
|-------|---------|----------|
| Planner | Strategic planning | P1 |
| Project Manager | Task management | P2 |
| Docs Manager | Documentation | P2 |
| Git Manager | Version control | P3 |
| Journal Writer | Decision logging | P3 |
| Scout | Codebase exploration | P2 |
| Scout External | External research | P2 |
| MCP Manager | Integration management | P3 |
| Analytics Analyst | Data analysis | P1 |
| Tester | Quality testing | P2 |

---

## Content Template

Each agent doc must follow this structure:

```markdown
---
title: "{Agent Name}"
description: "{One-line description for SEO, 80-150 chars}"
section: marketing
category: agents
order: {number}
---

# {Agent Name}

> **Your {persona}** - {inspiring tagline}

## What This Agent Does

{2-3 paragraphs explaining the agent's purpose in storytelling format}

**The Problem**: {Relatable frustration}
**The Solution**: {How this agent solves it}

## Quick Start

{30-second example to see it in action}

```bash
/agent {command}
```

## Capabilities

### {Capability 1}

{Description with example}

### {Capability 2}

{Description with example}

## When to Use

Use {Agent Name} when you need to:

- {Use case 1}
- {Use case 2}
- {Use case 3}

## Example Workflows

### {Workflow 1 Name}

{Step-by-step with code blocks}

### {Workflow 2 Name}

{Step-by-step with code blocks}

## Best Practices

1. **{Practice 1}**: {Explanation}
2. **{Practice 2}**: {Explanation}
3. **{Practice 3}**: {Explanation}

## Related Agents

- [{Related Agent 1}](/docs/marketing/agents/{slug})
- [{Related Agent 2}](/docs/marketing/agents/{slug})

## Related Commands

- [`/{command}`](/docs/marketing/commands/{slug})
```

---

## Source References

Each agent doc should reference:

**Primary Source**: `../claudekit-marketing/.claude/agents/{agent-name}.md`

**Scout Report**: `plans/reports/scout-251229-2047-marketing-analysis.md`

---

## Priority Order

Write in this order (highest value first):

1. `index.md` - Overview with agent matrix
2. `campaign-manager.md` - Core orchestration
3. `copywriter.md` - Most used agent
4. `seo-specialist.md` - High demand
5. `email-wizard.md` - Email marketing
6. `analytics-analyst.md` - Data insights
7. `funnel-architect.md` - Conversion optimization
8. `attraction-specialist.md` - Lead generation
9. `social-media-manager.md` - Social presence
10. All remaining agents

---

## Quality Checklist

For each agent doc:

- [ ] Title matches agent name exactly
- [ ] Description is 80-150 chars, SEO-optimized
- [ ] Section is `marketing`
- [ ] Category is `agents`
- [ ] Order number assigned (1-30)
- [ ] No relative links (all absolute paths)
- [ ] At least one code example
- [ ] Related agents/commands linked
- [ ] Storytelling structure applied
- [ ] No hallucinated capabilities (matches source)

---

## Index Page Structure

`src/content/docs/marketing/agents/index.md`:

```markdown
---
title: "Marketing Agents"
description: "27 specialized AI agents for marketing automation and growth"
section: marketing
category: agents
order: 1
---

# Marketing Agents

The Marketing Kit includes **27 specialized agents** designed to automate your entire marketing workflow.

## Agent Categories

### TOFU (Top of Funnel)

Agents that attract and qualify leads:

| Agent | Purpose |
|-------|---------|
| [Attraction Specialist](/docs/marketing/agents/attraction-specialist) | Create engaging content |
| [SEO Specialist](/docs/marketing/agents/seo-specialist) | Optimize for search |
| [Lead Qualifier](/docs/marketing/agents/lead-qualifier) | Score and route leads |
| [Researcher](/docs/marketing/agents/researcher) | Market research |

### MOFU (Middle of Funnel)

Agents that nurture and convert:

| Agent | Purpose |
|-------|---------|
| [Email Wizard](/docs/marketing/agents/email-wizard) | Email campaigns |
| [Sale Enabler](/docs/marketing/agents/sale-enabler) | Sales content |
| [Funnel Architect](/docs/marketing/agents/funnel-architect) | Funnel optimization |
| [Content Creator](/docs/marketing/agents/content-creator) | Content production |
| [Continuity Specialist](/docs/marketing/agents/continuity-specialist) | Nurture sequences |

### BOFU (Bottom of Funnel)

Agents that maximize revenue:

| Agent | Purpose |
|-------|---------|
| [Upsell Maximizer](/docs/marketing/agents/upsell-maximizer) | Upsell/cross-sell |

### Core Marketing

Essential marketing agents:

| Agent | Purpose |
|-------|---------|
| [Copywriter](/docs/marketing/agents/copywriter) | Marketing copy |
| [Brainstormer](/docs/marketing/agents/brainstormer) | Campaign ideation |
| [Campaign Manager](/docs/marketing/agents/campaign-manager) | Campaign orchestration |
| [Content Reviewer](/docs/marketing/agents/content-reviewer) | Quality assurance |
| [Campaign Debugger](/docs/marketing/agents/campaign-debugger) | Troubleshooting |

### Community

Community and social agents:

| Agent | Purpose |
|-------|---------|
| [Social Media Manager](/docs/marketing/agents/social-media-manager) | Social presence |
| [Community Manager](/docs/marketing/agents/community-manager) | Community engagement |

### Analytics & Planning

Strategic and data agents:

| Agent | Purpose |
|-------|---------|
| [Analytics Analyst](/docs/marketing/agents/analytics-analyst) | Data analysis |
| [Planner](/docs/marketing/agents/planner) | Strategic planning |
| [Project Manager](/docs/marketing/agents/project-manager) | Task management |

## Next Steps

- [Quick Start](/docs/getting-started/quick-start) - Get started in 15 minutes
- [Marketing Commands](/docs/marketing/commands) - See available commands
- [Marketing Workflows](/docs/marketing/workflows) - Learn common workflows
```

---

## Validation

Before marking Phase 2 complete:

- [ ] All 28 files created
- [ ] All frontmatter validates
- [ ] `bun run build` passes
- [ ] Navigation shows all agents
- [ ] No broken internal links

---

## Completion Criteria

Phase 2 is COMPLETE when:

1. All 28 files exist with valid content
2. Each file passes quality checklist
3. Index page lists all agents with links
4. Build succeeds without errors
