---
title: Skills Overview
description: Specialized capabilities you can invoke within Claude Code for enhanced functionality
category: skills
order: 1
published: true
---

# Skills Overview

Skills are specialized capabilities that extend Claude Code's functionality. Unlike slash commands, skills are invoked directly within the conversation for specific technical tasks.

## Available Skills

### skill-creator

**Purpose**: Create new custom skills for your project

**Use when**: You need a new specialized capability that doesn't exist yet

**Example:**
```
"Use the skill-creator skill to create a new skill for generating OpenAPI specifications from code"
```

**What it does:**
- Analyzes your requirements
- Creates skill definition file
- Implements skill logic
- Adds to `.claude/skills/` directory
- Documents usage

---

### canvas-design

**Purpose**: Generate canvas-based designs and visualizations

**Use when**: You need interactive visual elements, diagrams, or graphics

**Example:**
```
"Use the canvas-design skill to create an interactive architecture diagram showing our microservices"
```

**Capabilities:**
- Interactive diagrams
- Data visualizations
- Flowcharts
- Architecture diagrams
- Custom graphics
- Animations

**Technologies:**
- HTML5 Canvas
- SVG
- D3.js (for data viz)
- Custom drawing logic

---

### document-skills

**Purpose**: Read, parse, and understand various document formats

**Use when**: Working with PDFs, Word docs, presentations, or other document formats

**Example:**
```
"Use the document-skills to extract all API endpoints from this PDF specification"
```

**Supported Formats:**
- PDF
- Microsoft Word (.docx)
- PowerPoint (.pptx)
- Excel (.xlsx)
- Markdown
- Plain text
- HTML

**Capabilities:**
- Text extraction
- Table parsing
- Image extraction
- Metadata analysis
- Structure understanding
- Content summarization

---

### mcp-builder

**Purpose**: Build efficient MCP (Model Context Protocol) servers

**Use when**: Creating custom MCP servers for specialized integrations

**Example:**
```
"Use the mcp-builder skill to create an MCP server for our internal API"
```

**What it builds:**
- MCP server boilerplate
- Tool definitions
- Resource handlers
- Authentication logic
- Error handling
- Documentation

**Features:**
- Standards-compliant
- TypeScript support
- Testing setup
- Example usage
- Deployment guide

---

## How to Use Skills

### Invoke in Conversation

Skills are invoked directly in your conversation with Claude Code:

```
"Use the [skill-name] skill to [task description]"
```

### Examples

**Document Analysis:**
```
"Use the document-skills to extract all function signatures from architecture.pdf"
```

**Create Custom Skill:**
```
"Use the skill-creator to build a skill that generates Terraform configurations from our infrastructure docs"
```

**Visual Design:**
```
"Use the canvas-design skill to create an interactive flow diagram of our authentication process"
```

**MCP Server:**
```
"Use the mcp-builder to create an MCP server that exposes our database schema as tools"
```

## Skills vs. Commands

### Commands (Slash Commands)

- Predefined workflows
- Use `/` prefix
- Orchestrate multiple agents
- For common development tasks

**Example:** `/cook [feature]`

### Skills

- Specialized capabilities
- Invoked in conversation
- Single focused purpose
- For specific technical needs

**Example:** "Use mcp-builder to..."

## Creating Custom Skills

### Using skill-creator

```
"Use the skill-creator skill to create a new skill called 'api-doc-generator' that:
- Reads controller files
- Extracts route definitions
- Generates OpenAPI 3.0 spec
- Creates Postman collection
- Saves to docs/api/"
```

The skill-creator will:
1. Understand requirements
2. Design skill architecture
3. Implement skill logic
4. Create tests
5. Add documentation
6. Save to `.claude/skills/api-doc-generator.md`

### Skill Structure

Created skills follow this structure:

```markdown
---
name: api-doc-generator
description: Generate API documentation from code
version: 1.0.0
---

# API Doc Generator

## Purpose
Generate comprehensive API documentation from controller files

## Usage
"Use the api-doc-generator skill to document [path/to/controllers]"

## Implementation
[Skill logic and instructions]

## Examples
[Usage examples]

## Output
[Expected output format]
```

## Skill Best Practices

### Invoke Clearly

✅ **Clear:**
```
"Use the document-skills to extract tables from quarterly-report.pdf and convert to CSV"
```

❌ **Unclear:**
```
"Read this PDF"
```

### Provide Context

✅ **With Context:**
```
"Use the canvas-design skill to create a sequence diagram showing the OAuth2 flow described in docs/auth.md"
```

❌ **Without Context:**
```
"Make a diagram"
```

### Specify Output

✅ **Specific:**
```
"Use the mcp-builder to create an MCP server that exposes our Product API with tools for CRUD operations, save to src/mcp/"
```

❌ **Vague:**
```
"Build an MCP server"
```

## Common Use Cases

### Documentation Generation

```
"Use the document-skills to parse all markdown files in docs/ and create a searchable index"
```

### Visual Documentation

```
"Use the canvas-design skill to create an interactive component hierarchy diagram based on src/components/"
```

### Tool Creation

```
"Use the mcp-builder to create an MCP server that provides tools for querying our PostgreSQL database schema"
```

### Custom Workflows

```
"Use the skill-creator to make a skill that:
1. Analyzes git commits
2. Extracts breaking changes
3. Updates CHANGELOG.md
4. Creates migration guide
5. Notifies team on Slack"
```

## Skill Combination

Skills can work together:

```
"First use document-skills to extract API requirements from specs.pdf,
then use mcp-builder to create an MCP server implementing those APIs"
```

## Troubleshooting

### Skill Not Found

**Problem:** "Skill X not available"

**Solution:**
1. Check spelling
2. Use `skill-creator` to create it
3. Verify `.claude/skills/` directory exists

### Unexpected Output

**Problem:** Skill produces wrong result

**Solution:**
1. Provide more specific instructions
2. Include examples of desired output
3. Give more context about requirements

### Skill Fails

**Problem:** Skill errors during execution

**Solution:**
1. Check input format
2. Verify file paths exist
3. Review skill documentation
4. Try simpler input first

## Coming Soon

More skills in development:

- **api-client-generator**: Generate client SDKs from OpenAPI specs
- **test-data-builder**: Create realistic test data
- **migration-helper**: Database migration assistance
- **performance-analyzer**: Analyze and optimize code performance
- **security-scanner**: Custom security analysis
- **deployment-validator**: Pre-deployment checks

## Request New Skills

Need a skill that doesn't exist?

1. **Discord**: Join [ClaudeKit Discord](https://discord.gg/x7SwTSf3wc)
2. **GitHub**: Open an issue with skill proposal
3. **Create Your Own**: Use `skill-creator` to build it

## Next Steps

- [Creating Custom Skills](/docs/skills/creating-skills) - Build your own
- [MCP Servers](/docs/skills/mcp-builder) - Deep dive into MCP
- [Document Processing](/docs/skills/document-skills) - Working with docs
- [Commands](/docs/commands/) - Slash commands vs skills

---

**Key Takeaway**: Skills extend Claude Code with specialized capabilities for specific technical tasks, complementing the workflow-oriented slash commands.
