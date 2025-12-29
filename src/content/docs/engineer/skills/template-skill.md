---
title: Template Skill
description: Reference template for creating new ClaudeKit Engineer skills with proper structure, metadata, and integration patterns
section: engineer
kit: engineer
category: skills
order: 5
published: true
---

# Template Skill

> Starting point for building custom skills that extend ClaudeKit Engineer's capabilities with specialized knowledge and workflows.

## What This Skill Does

Template Skill is a reference implementation showing the proper structure and patterns for creating new skills. It serves as a blueprint for skill creators, demonstrating how to integrate specialized knowledge, tools, and workflows into ClaudeKit Engineer.

This skill is not functional on its own - it's documentation and scaffolding for developers building custom skills to extend engineer capabilities for specific domains, frameworks, APIs, or workflows.

## Prerequisites

- ClaudeKit Engineer installed (ck init)
- Basic understanding of skill architecture
- Familiarity with the domain/framework you're building for
- Text editor for creating skill files

## Activation

This skill is referenced when:
- User wants to create a new skill
- User asks about skill structure or architecture
- User needs examples of skill metadata and patterns

For creating skills, use:
```bash
/skill-creator
```

## Skill Directory Structure

Every skill follows this structure:

```
.claude/skills/your-skill-name/
├── SKILL.md                 # Main skill instructions (required)
├── README.md               # User-facing documentation (optional)
├── references/             # Additional reference docs (optional)
│   ├── api-guide.md
│   ├── examples.md
│   └── troubleshooting.md
├── scripts/                # Executable scripts (optional)
│   └── helper.py
├── assets/                 # Static assets (optional)
│   └── template.html
└── .env.example            # Environment variable template (optional)
```

## SKILL.md Format

Required frontmatter and structure:

```yaml
---
name: your-skill-name
description: When Claude should use this skill and what it does (150 chars)
version: 1.0.0
license: MIT
---

# Your Skill Name

Brief overview of what this skill enables.

## When to Use This Skill

Specific scenarios that trigger this skill:
- User needs to [capability 1]
- User mentions [keyword 1, keyword 2]
- User wants to [task description]

## Core Concepts

Key terminology and architecture this skill deals with.

## Quick Start

Minimal working example to get started.

## Capabilities

### Capability 1

Description with code example.

### Capability 2

Description with code example.

## Best Practices

- Guideline 1
- Guideline 2
- Guideline 3

## Common Patterns

### Pattern 1

Example code or workflow.

## Troubleshooting

**Problem**: Common issue

**Solution**: How to fix it

## Resources

- Official docs
- GitHub repo
- Community links
```

## Skill Metadata Fields

### Required Fields

**name**: Skill identifier (lowercase, hyphen-separated)
```yaml
name: google-adk-python
```

**description**: When Claude should activate this skill (under 200 chars)
```yaml
description: Build AI agents with Google's Agent Development Kit. Use when creating multi-agent systems, tool integration, or workflow automation.
```

### Optional Fields

**version**: Semantic version for tracking changes
```yaml
version: 1.0.0
```

**license**: License terms
```yaml
license: MIT
```

## Activation Patterns

Skills activate automatically based on:

**Keywords**: Specific terms in user queries
```markdown
## When to Use This Skill

Use when user mentions:
- Google ADK
- Agent development
- Multi-agent systems
```

**Task descriptions**: What user wants to accomplish
```markdown
Use when user needs to:
- Build AI agents with tool integration
- Deploy agents to Cloud Run or Vertex AI
```

**Domain references**: Technologies or frameworks
```markdown
Use when working with:
- Gemini models
- Agent orchestration
- LLM-powered workflows
```

## Integration Patterns

### Python Scripts

For skills with Python tools:

```python
#!/usr/bin/env python3
"""
Skill: your-skill-name
Description: What this script does
"""

import os
import sys

def main():
    # Script logic
    pass

if __name__ == "__main__":
    main()
```

### Node.js Scripts

For skills with Node tools:

```javascript
#!/usr/bin/env node
/**
 * Skill: your-skill-name
 * Description: What this script does
 */

function main() {
  // Script logic
}

if (require.main === module) {
  main();
}
```

### Environment Variables

For skills requiring API keys or config:

```bash
# .env.example
SKILL_API_KEY=your-api-key-here
SKILL_ENDPOINT=https://api.example.com
```

Document in SKILL.md:

```markdown
## Prerequisites

**Environment Variables**:
- `SKILL_API_KEY`: API key from [provider](https://example.com/keys)
- `SKILL_ENDPOINT`: Optional custom endpoint
```

## Reference Files

For complex skills, break content into focused reference files:

```
references/
├── installation.md       # Setup and dependencies
├── api-reference.md      # API docs
├── examples.md          # Code examples
├── patterns.md          # Common patterns
└── troubleshooting.md   # Common issues
```

Reference from SKILL.md:

```markdown
## Installation

See [installation.md](references/installation.md) for detailed setup.

## Examples

See [examples.md](references/examples.md) for complete code samples.
```

## Examples

### Example 1: Minimal Skill

Basic skill with no external dependencies:

```yaml
---
name: markdown-formatter
description: Format and validate markdown files. Use when user needs to lint, format, or validate markdown syntax.
---

# Markdown Formatter

Format markdown files according to best practices.

## When to Use

- User wants to format markdown files
- User needs to validate markdown syntax
- User mentions markdown linting

## Quick Start

Standard markdown formatting rules:
- Use ATX-style headers (`#` not underlines)
- Blank lines before/after code blocks
- Consistent list markers (`-` not `*`)

## Capabilities

### Validate Syntax

Checks for common markdown issues.

### Auto-Format

Applies consistent formatting rules.
```

### Example 2: Skill with Scripts

Skill with executable Python helper:

```yaml
---
name: image-optimizer
description: Optimize images for web with compression and resizing. Use when user needs to reduce image file sizes.
---

# Image Optimizer

Compress and resize images for web performance.

## Prerequisites

```bash
pip install pillow
```

## Quick Start

```bash
python .claude/skills/image-optimizer/scripts/optimize.py \
  --input image.jpg \
  --output optimized.jpg \
  --quality 85
```

## Capabilities

### Compression

Reduce file size while maintaining quality.

### Resizing

Scale images to target dimensions.
```

## Best Practices

**Clear activation criteria**: Specify exact keywords and scenarios that trigger skill.

**Minimal examples**: Provide working code snippets users can copy-paste.

**Progressive disclosure**: Start simple, link to detailed references for complex topics.

**Document dependencies**: List all required tools, packages, API keys upfront.

**Include troubleshooting**: Address common issues preemptively.

**Version your skills**: Track changes with semantic versioning.

**Test activation**: Verify skill activates for expected queries.

**Avoid duplication**: Check existing skills before creating overlapping functionality.

## Troubleshooting

**Problem**: Skill doesn't activate when expected.

**Solution**: Add missing keywords to "When to Use This Skill" section. Test with actual user queries.

---

**Problem**: Skill instructions too long, slows down Claude.

**Solution**: Move detailed content to reference files. Keep SKILL.md under 1000 lines.

---

**Problem**: Scripts fail with permission errors.

**Solution**: Make scripts executable: `chmod +x .claude/skills/your-skill/scripts/*.py`

---

**Problem**: Dependencies not installed.

**Solution**: Document installation in Prerequisites. Consider adding install script or npm/pip dependency list.

## Related Skills

- [Skill Creator](/docs/engineer/skills/skill-creator) - Interactive skill creation workflow
- [Common Utilities](/docs/engineer/skills/common-utilities) - Shared utilities for skill development

## Resources

- ClaudeKit Engineer GitHub: https://github.com/claudekit/claudekit-engineer
- Skill creation guide: Use `/skill-creator` for interactive process
- Example skills: Browse `.claude/skills/` directory
