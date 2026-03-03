---
title: "ckm:template-skill"
description: "Minimal template for creating new Claude skills with the correct SKILL.md structure, activation patterns, and configuration scaffolding."
section: marketing
kit: marketing
category: skills
order: 106
---

# `ckm:template-skill`

> Bootstrap new Claude skills from a minimal, production-ready template that follows ClaudeKit skill conventions.

## What This Skill Does

**The Challenge**: Every new skill needs the same boilerplate — SKILL.md format, directory structure, activation patterns, and configuration files. Starting from scratch wastes time and produces inconsistent skill quality.

**The Solution**: Template Skill provides a minimal but complete starting point for new skills. Covers essential sections, avoids over-engineering, and follows ClaudeKit conventions established across the skill library.

## Activation

**Explicit**: Activate via prompt:
```
Activate template-skill to scaffold a new skill called "data-export"
```

## Capabilities

### 1. Skill Directory Scaffold
Generate the minimum required file structure for a new skill.

**Generated structure**:
```
skills/your-skill-name/
├── SKILL.md              # Required: skill definition
├── README.md             # Optional: user-facing docs
└── examples/
    └── basic-example.md  # At least one example
```

### 2. SKILL.md Template
Minimal SKILL.md with required sections pre-filled.

```markdown
# Your Skill Name

## Overview
One paragraph: what it does, when it activates, primary use case.

## Activation
**Implicit**: [conditions] OR "Does not auto-activate."
**Explicit**: `Activate your-skill-name to [task description]`

## Capabilities
### 1. Core Capability
Description with example.

## Configuration
List of required env vars or files. "None required." if applicable.

## Examples
### Basic Example
Input: [user prompt]
Output: [expected result description]
```

### 3. Naming Convention Guide
Rules for skill naming and file organization.

**Naming rules**:
- Use kebab-case: `social-media`, not `socialMedia`
- Be descriptive: `email-sequence-builder`, not `email`
- Match invocation: skill named `data-export` invoked as `/ckm:data-export`

### 4. Activation Pattern Templates
Common activation patterns to copy.

**Implicit (content-triggered)**:
```markdown
**Implicit**: Activates when user asks to [describe trigger context].
```

**Implicit (agent-triggered)**:
```markdown
**Implicit**: Activates automatically for [Agent Name] agent.
```

**Explicit only**:
```markdown
**Implicit**: Does not auto-activate.
**Explicit**: `Activate skill-name to [describe task]`
```

## Prerequisites

- Skill name and primary purpose defined
- Target activation context decided (implicit/explicit)

## Configuration

No configuration required for template itself. Generated skill may have its own requirements.

## Best Practices

**1. Keep SKILL.md under 100 lines**
Skills should be focused. Long SKILL.md files signal a skill doing too much.

**2. One example per capability**
Each capability listed needs at least one concrete input/output example.

**3. Be explicit about scope boundaries**
Include a "Does not" or "Out of scope" note if the skill name could be misinterpreted.

## Common Use Cases

### Use Case 1: First Skill Creation
**Scenario**: Developer creating their first ClaudeKit skill.

**Workflow**:
1. Run template scaffold with skill name
2. Fill in SKILL.md sections
3. Add one concrete example
4. Test activation with explicit prompt
5. Refine based on output quality

**Output**: Working skill directory ready for testing.

### Use Case 2: Skill Standardization
**Scenario**: Existing skills have inconsistent formatting across a skill library.

**Workflow**:
1. Use template as reference for SKILL.md structure
2. Audit each existing skill against template sections
3. Add missing sections (examples, configuration)
4. Standardize activation patterns

**Output**: Consistent skill library following shared conventions.

## Troubleshooting

**Issue**: Skill not activating with expected prompt
**Solution**: Review activation pattern. Explicit prompts must contain the skill name or explicit activation phrase.

**Issue**: Skill activates but produces wrong output format
**Solution**: Add explicit output format instructions to SKILL.md capabilities section.

## Related Skills

- [Skill Creator](/docs/marketing/skills/skill-creator) - Full skill creation with benchmarks
- [Docs](/docs/marketing/skills/docs) - Documentation generation

## Related Commands

- `/ckm:template-skill` - Scaffold new skill from template
- `/ckm:skill-creator` - Create fully-specified skill with tests
