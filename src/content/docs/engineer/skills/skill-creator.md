---
title: skill-creator
description: Create custom skills that extend Claude's capabilities with specialized knowledge, workflows, and tool integrations
section: engineer
kit: engineer
category: skills/tools
order: 15
published: true
---

# skill-creator

Transform your workflow knowledge into reusable AI skills that Claude can activate automatically.

## When to Use

- **API integration** - Create skills for Stripe, Twilio, or custom APIs with proper patterns
- **Company knowledge** - Encode coding standards, schemas, or business logic into portable skills
- **Reusable workflows** - Turn deployment, testing, or ETL processes into repeatable instructions
- **Framework guides** - Build skills for Vue, Django, or tech stacks with bundled resources

## Key Capabilities

| Feature | What It Does |
|---------|-------------|
| SKILL.md Generation | Creates structured skill files with metadata and instructions |
| Bundled Resources | Adds scripts, references, and assets for complex tasks |
| Progressive Disclosure | Keeps skills under 100 lines, references external files as needed |
| Validation & Packaging | Validates structure and packages skills as distributable ZIPs |

## Common Use Cases

### API Integration Developer
**Prompt:** "Use skill-creator to make Stripe payment skill with webhooks, subscriptions, and error handling"

### DevOps Engineer
**Prompt:** "Use skill-creator for deployment workflow: build, test staging, smoke tests, production deploy"

### Engineering Lead
**Prompt:** "Use skill-creator for team coding standards: file structure, naming conventions, error patterns, testing requirements"

### Data Engineer
**Prompt:** "Use skill-creator for BigQuery skill with table schemas, join patterns, and optimization rules"

### Frontend Developer
**Prompt:** "Use skill-creator for React skill with component patterns, hooks best practices, and state management"

## Quick Reference

### Invoke Skill

```bash
"Use skill-creator to create skill for [purpose]:
- [capability 1]
- [capability 2]
- [best practices]"
```

### Skill Structure

```
.claude/skills/skill-name/
├── SKILL.md              # <100 lines, core instructions
├── scripts/              # Python/Node scripts with tests
├── references/           # Documentation loaded as needed
└── assets/               # Templates, images, boilerplate
```

### Skill Creation Process

1. **Clarify** - skill-creator asks about use cases and functionality
2. **Design** - Plans structure: scripts, references, assets needed
3. **Initialize** - Runs `init_skill.py` to create template
4. **Implement** - Writes SKILL.md, adds bundled resources, writes tests
5. **Validate** - Runs `package_skill.py` to check structure and package
6. **Save** - Outputs to `.claude/skills/` for immediate use

### Key Requirements

- **SKILL.md**: <100 lines, uses imperative form ("To do X, run Y")
- **Scripts**: Include tests, respect `.env` hierarchy, prefer Python/Node over Bash
- **References**: <100 lines each, split large docs using progressive disclosure
- **Metadata**: Specific `description` triggers automatic activation

## Pro Tips

- **Not activating?** Say: "Use skill-creator skill to create a [domain] skill"
- **Large documentation?** Split into multiple reference files, let Claude load as needed
- **Repetitive code?** Move to scripts with tests instead of regenerating
- **Company schemas?** Store in `references/` so Claude doesn't rediscover each time
- **Boilerplate?** Add to `assets/` as templates Claude can copy and modify

## Related Skills

- [/docs/engineer/skills/tools/claude-code-skill](/docs/engineer/skills/tools/claude-code-skill) - Create skills via CLI commands
- [/docs/engineer/skills/tools/planning](/docs/engineer/skills/tools/planning) - Design complex workflows before building skills
- [/docs/engineer/skills/tools/mcp-management](/docs/engineer/skills/tools/mcp-management) - Manage Model Context Protocol integrations

## Key Takeaway

skill-creator turns procedural knowledge into AI-activatable skills. Describe what you need, get a validated skill package ready for your team or personal toolkit.
