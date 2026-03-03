---
title: "ckm:skill-creator"
description: "Create or update Claude skills that are compatible with Skillmark benchmarks, including SKILL.md spec, prompt templates, and test cases."
section: marketing
kit: marketing
category: skills
order: 105
---

# `ckm:skill-creator`

> Build new Claude skills from scratch or update existing ones to meet Skillmark benchmark standards with proper spec files and test coverage.

## What This Skill Does

**The Challenge**: Creating high-quality Claude skills requires understanding the SKILL.md specification format, prompt template conventions, activation patterns, and Skillmark benchmark requirements. Poorly structured skills fail benchmarks and confuse users.

**The Solution**: Skill Creator automates scaffolding of new skills with proper `SKILL.md` format, example prompts, configuration files, and benchmark-compatible test cases. Works for creating new skills or auditing/updating existing ones.

## Activation

**Implicit**: Activates when creating new Claude skills or modifying existing skill definitions.

**Explicit**: Activate via prompt:
```
Activate skill-creator skill to build a new skill for automating social media scheduling
```

## Capabilities

### 1. SKILL.md Scaffolding
Generate properly structured skill definition files.

**SKILL.md structure**:
```markdown
# Skill Name

## Overview
Brief description of what this skill does and when it activates.

## Activation
- Implicit: Conditions for automatic activation
- Explicit: Activation command and syntax

## Capabilities
List of specific capabilities with examples.

## Configuration
Required env vars, files, dependencies.

## Examples
Input/output examples for each capability.

## Benchmarks
Skillmark test cases and expected outputs.
```

### 2. Prompt Template Creation
Design effective system prompts and user-facing activation syntax.

**Prompt design principles**:
- Clear activation trigger (explicit vs implicit)
- Defined output format
- Error handling instructions
- Scope boundaries (what skill does NOT do)

### 3. Test Case Generation
Create Skillmark-compatible benchmark test cases.

**Test case format**:
```json
{
  "skill": "skill-name",
  "input": "User prompt that should activate skill",
  "expected_behavior": "Description of correct response",
  "evaluation_criteria": [
    "Uses correct output format",
    "Handles error case X",
    "Produces result within scope"
  ]
}
```

### 4. Skill Audit
Review existing skills against current SKILL.md spec and benchmark standards.

**Audit checklist**:
- [ ] SKILL.md format compliance
- [ ] Activation patterns documented
- [ ] Examples cover all capabilities
- [ ] Error handling specified
- [ ] Test cases present

## Prerequisites

- Target skill purpose and capabilities defined
- Access to Skillmark benchmark requirements
- Existing skills directory (for updates)

## Configuration

**Skills directory location**:
```
~/.claude/skills/
├── skill-name/
│   ├── SKILL.md          # Main skill definition
│   ├── prompts/          # Prompt templates
│   ├── examples/         # Input/output examples
│   └── tests/            # Benchmark test cases
```

## Best Practices

**1. One skill, one responsibility**
Skills should do one thing well. If a skill needs more than 5 capabilities, split it.

**2. Write examples before prompts**
Define what good output looks like, then write prompts that produce it.

**3. Test edge cases explicitly**
Skillmark benchmarks focus on edge cases. Document how the skill handles malformed input, missing context, and ambiguous requests.

## Common Use Cases

### Use Case 1: New Tool Integration Skill
**Scenario**: Create a skill for a new API tool (e.g., "search-web" using Perplexity API).

**Workflow**:
1. Define skill purpose and activation triggers
2. Scaffold SKILL.md with capabilities
3. Write example prompts and expected outputs
4. Create configuration template
5. Generate benchmark test cases

**Output**: Complete skill package ready for `~/.claude/skills/`.

### Use Case 2: Skill Audit and Update
**Scenario**: Existing skill fails Skillmark benchmarks after spec update.

**Workflow**:
1. Read current SKILL.md
2. Compare against latest spec requirements
3. Identify gaps (missing examples, outdated format)
4. Update SKILL.md to current format
5. Add missing test cases

**Output**: Updated skill package with benchmark compliance.

## Troubleshooting

**Issue**: Skill activates unexpectedly in wrong contexts
**Solution**: Narrow implicit activation conditions. Add explicit "does not activate when..." clause.

**Issue**: Benchmark test cases fail despite correct output
**Solution**: Review evaluation criteria — may need more specific output format requirements.

## Related Skills

- [Template Skill](/docs/marketing/skills/template-skill) - Minimal skill template
- [Research](/docs/marketing/skills/research) - Research skill requirements

## Related Commands

- `/ckm:skill-creator` - Create or update skills
- `/ckm:template-skill` - Minimal skill scaffold
