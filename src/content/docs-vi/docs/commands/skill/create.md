---
title: /skill:create
description: "Documentation for /skill:create
description:
section: docs
category: commands/skill
order: 80
published: true"
section: docs
category: commands/skill
order: 80
published: true
---

# /skill:create

Create new agent skills that extend Claude's capabilities with specialized knowledge, workflows, or tool integrations. This command follows a comprehensive 4-phase process: research, implementation, review, and evaluation.

## Syntax

```bash
/skill:create [prompt-or-llms-or-github-url]
```

## Input Types

### 1. Natural Language Prompt

```bash
/skill:create [create skill for MongoDB database operations]
```

### 2. llms.txt URL

```bash
/skill:create https://docs.polar.sh/llms.txt
```

### 3. GitHub Repository

```bash
/skill:create https://github.com/cloudflare/workers-sdk
```

## How It Works

The `/skill:create` command follows a 4-phase workflow:

### Phase 1: Research (2-3 minutes)

Invokes **researcher** agent to:
- Fetch documentation (llms.txt, GitHub, web)
- Analyze domain knowledge required
- Identify key concepts and patterns
- Map out skill structure
- Determine MCP integration needs
- Research best practices

### Phase 2: Implementation (3-5 minutes)

Invokes **skill-creator** agent to:
- Write skill prompt file
- Structure knowledge sections
- Create usage examples
- Define when to use skill
- Add tool integration instructions
- Include best practices
- Format in markdown

### Phase 3: Review (1-2 minutes)

Invokes **code-reviewer** agent to:
- Validate skill structure
- Check completeness
- Verify examples work
- Ensure clear instructions
- Validate formatting
- Suggest improvements

### Phase 4: Evaluation (1 minute)

Invokes **tester** agent to:
- Test skill activation
- Verify skill prompt loads
- Check examples are clear
- Validate tool integrations
- Test edge cases
- Generate usage report

## Examples

### Create MongoDB Skill

```bash
/skill:create [create skill for MongoDB operations including CRUD, aggregations, and indexing]
```

**What happens:**
```
Phase 1: Research (2 minutes 15 seconds)
---
Agent: researcher

Gathering information...

MongoDB documentation analyzed:
✓ CRUD operations
✓ Aggregation pipelines
✓ Indexing strategies
✓ Schema design patterns
✓ Performance optimization
✓ Replication & sharding
✓ Security best practices

MCP server check:
✓ Found: @modelcontextprotocol/server-mongodb
✓ Available tools: query, insert, update, delete, aggregate
✓ Connection requirements: MongoDB URI

Best practices identified:
✓ Connection pooling
✓ Error handling patterns
✓ Query optimization
✓ Index selection
✓ Schema validation

Phase 2: Implementation (3 minutes 45 seconds)
---
Agent: skill-creator

Creating skill file...

Structure:
1. Skill Overview
2. When to Use This Skill
3. Prerequisites
4. MongoDB Operations Guide
   - CRUD operations
   - Aggregation pipelines
   - Indexing
   - Schema design
   - Performance optimization
5. MCP Integration
6. Examples
7. Best Practices
8. Common Patterns
9. Troubleshooting

File created:
.claude/skills/mongodb.md (2,847 words)

Key sections included:
✓ Clear use cases
✓ Step-by-step operations
✓ Code examples (15+)
✓ Aggregation pipeline examples
✓ Index creation patterns
✓ MCP tool usage
✓ Error handling
✓ Performance tips

Phase 3: Review (1 minute 30 seconds)
---
Agent: code-reviewer

Reviewing skill quality...

Structure: ✅ Excellent
- Clear sections
- Logical flow
- Good hierarchy

Completeness: ✅ Comprehensive
- All CRUD operations covered
- Aggregation examples included
- Indexing strategies explained
- MCP integration documented

Examples: ✅ High Quality
- 15 working examples
- Various complexity levels
- Real-world scenarios
- Copy-paste ready

Clarity: ✅ Clear
- Technical but accessible
- Step-by-step instructions
- Good use of code blocks

Suggestions:
1. Add section on transactions
2. Include change streams example
3. Add troubleshooting for connection issues

Applying suggestions...
✓ Transactions section added
✓ Change streams example included
✓ Troubleshooting expanded

Phase 4: Evaluation (45 seconds)
---
Agent: tester

Testing skill...

Activation test:
✓ Skill loads correctly
✓ No syntax errors
✓ Markdown formatting valid

Example validation:
✓ All 17 examples use correct syntax
✓ MongoDB queries valid
✓ MCP tool calls properly formatted

Tool integration:
✓ MCP server referenced correctly
✓ Connection instructions clear
✓ Authentication covered

Documentation quality:
✓ Professional tone
✓ Technical accuracy verified
✓ Easy to follow

Score: 9.2/10

Areas of excellence:
+ Comprehensive CRUD coverage
+ Excellent aggregation examples
+ Clear MCP integration
+ Good troubleshooting section

Minor improvements needed:
- Add more replica set examples
- Include sharding guidance

✓ Skill creation complete (8 minutes 15 seconds)

Summary:
---
✓ Skill created: .claude/skills/mongodb.md
✓ 2,847 words
✓ 17 examples
✓ 8 major sections
✓ MCP integration included
✓ Reviewed and tested
✓ Quality score: 9.2/10

Next steps:
1. Review skill: cat .claude/skills/mongodb.md
2. Test skill: /ask [mongodb question]
3. Iterate if needed: /skill:fix-logs
```

### Create Skill from llms.txt

```bash
/skill:create https://docs.polar.sh/llms.txt
```

**What happens:**
```
Phase 1: Research (1 minute 30 seconds)
---
Agent: researcher

Fetching llms.txt...
URL: https://docs.polar.sh/llms.txt

Content retrieved:
- 5,249 lines
- Polar.sh payment platform
- Subscription management
- Webhook handling
- Customer portal
- API documentation

Analyzing structure...
✓ Clear API sections
✓ Code examples included
✓ Authentication documented
✓ Webhooks explained

Phase 2: Implementation (4 minutes)
---
Agent: skill-creator

Creating Polar.sh skill...

Skill structure:
1. Overview (what Polar.sh does)
2. When to use this skill
3. Prerequisites (API keys)
4. Core Features
   - Subscriptions
   - One-time payments
   - Customer portal
   - Webhooks
5. Implementation Guide
   - Setup
   - Creating checkouts
   - Webhook handling
   - Customer management
6. Code Examples (SDK usage)
7. Best Practices
8. Security Guidelines
9. Testing
10. Troubleshooting

File created:
.claude/skills/polar.md (3,124 words)

✓ 23 code examples extracted from llms.txt
✓ API endpoints documented
✓ Webhook events listed
✓ Security best practices added

Phase 3: Review (1 minute 20 seconds)
---
Agent: code-reviewer

Review findings:

Strengths:
✓ Comprehensive API coverage
✓ Real code examples from docs
✓ Security well documented
✓ Clear integration steps

Enhancements applied:
+ Added pricing tier examples
+ Included webhook signature verification
+ Added troubleshooting section
+ Improved error handling examples

Phase 4: Evaluation (50 seconds)
---
Agent: tester

Evaluation results:

✓ All API examples valid
✓ Webhook handling comprehensive
✓ Security practices sound
✓ Documentation clear

Score: 9.4/10

✓ Skill ready to use (7 minutes 40 seconds)
```

### Create Skill from GitHub

```bash
/skill:create https://github.com/cloudflare/workers-sdk
```

**What happens:**
```
Phase 1: Research (2 minutes 45 seconds)
---
Agent: researcher

Analyzing GitHub repository...
Repo: cloudflare/workers-sdk

Using Repomix to analyze codebase...
✓ 847 files analyzed
✓ Documentation extracted
✓ README.md processed
✓ Examples folder scanned
✓ API patterns identified

Key findings:
- Cloudflare Workers SDK
- Wrangler CLI tool
- Workers API documentation
- D1 database integration
- KV storage operations
- Durable Objects
- R2 storage

Phase 2: Implementation (5 minutes)
---
Agent: skill-creator

Creating Cloudflare Workers skill...

Skill sections:
1. Cloudflare Workers Overview
2. When to Use This Skill
3. Wrangler CLI Guide
4. Worker Development
   - Basic workers
   - Request handling
   - Environment variables
5. Cloudflare Services
   - D1 (SQLite)
   - KV (Key-Value)
   - R2 (Object Storage)
   - Durable Objects
6. Deployment
7. Testing & Debugging
8. Best Practices
9. Common Patterns
10. Troubleshooting

File created:
.claude/skills/cloudflare-workers.md (4,126 words)

✓ 31 code examples
✓ CLI commands documented
✓ Service integration guides
✓ Deployment workflow

Phase 3-4: Review & Evaluation
---
✓ Review complete
✓ Examples validated
✓ CLI commands tested

Score: 9.1/10

✓ Skill creation complete (10 minutes)
```

## Skill File Structure

Every created skill follows this structure:

```markdown
# [Skill Name]

[Brief description of what the skill helps with]

## When to Use This Skill

Use this skill when:
- [Specific use case 1]
- [Specific use case 2]
- [Specific use case 3]

## Prerequisites

- [Requirement 1]
- [Requirement 2]

## [Main Knowledge Section 1]

### [Subsection]

[Detailed information with examples]

```code
// Working code example
```

## [Main Knowledge Section 2]

[More content...]

## MCP Integration (if applicable)

[How to use MCP tools with this skill]

## Examples

### Example 1: [Scenario]
```code
// Complete working example
```

### Example 2: [Scenario]
```code
// Another example
```

## Best Practices

- [Practice 1]
- [Practice 2]

## Common Patterns

[Reusable patterns and solutions]

## Troubleshooting

**Problem:** [Common issue]
**Solution:** [How to fix]
```

## Skill Quality Criteria

Skills are evaluated on:

### 1. Completeness (25%)

- All major topics covered
- Edge cases addressed
- Error handling included
- Security considerations

### 2. Clarity (25%)

- Clear explanations
- Logical structure
- Easy to follow
- Good formatting

### 3. Examples (25%)

- Working code examples
- Various complexity levels
- Real-world scenarios
- Copy-paste ready

### 4. Usefulness (25%)

- Practical application
- Time-saving
- Reduces errors
- Fills knowledge gap

## MCP Integration

When skill requires tools, MCP integration is included:

```markdown
## MCP Server Integration

This skill works best with the [tool-name] MCP server.

### Installation

```bash
npm install @modelcontextprotocol/server-[name]
```

### Configuration

Add to claude_desktop_config.json:

```json
{
  "mcpServers": {
    "[name]": {
      "command": "node",
      "args": ["path/to/server"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
```

### Available Tools

- `tool_name_1` - Description
- `tool_name_2` - Description
```

## Best Practices for Skill Creation

### Provide Detailed Input

✅ **Good:**
```bash
/skill:create [create skill for implementing WebSocket real-time features including connection management, reconnection logic, message queuing, and scaling with Redis pub/sub]
```

❌ **Vague:**
```bash
/skill:create [websockets]
```

### Use Official Documentation

```bash
# Best: Official llms.txt
/skill:create https://docs.service.com/llms.txt

# Good: Official GitHub
/skill:create https://github.com/official/repo

# OK: Natural language (but less comprehensive)
/skill:create [create skill for X]
```

### Specify Domain if Broad

```bash
# Too broad
/skill:create [Python]

# Better
/skill:create [Python async programming with asyncio]

# Best
/skill:create [Python async programming with asyncio including event loops, coroutines, async/await patterns, and concurrent task management]
```

## After Skill Creation

Standard workflow:

```bash
# 1. Create skill
/skill:create [description or URL]

# 2. Review skill
cat .claude/skills/[skill-name].md

# 3. Test skill
/ask [question related to skill]
# Skill should automatically activate

# 4. If issues found
/skill:fix-logs .claude/skills/[skill-name].md

# 5. Iterate until satisfied

# 6. Commit skill
/git:cm
```

## Output Files

After `/skill:create` completes:

### Skill File

```
.claude/skills/[skill-name].md
```

Complete skill prompt ready to use

### Research Report

```
plans/skill-research-[name]-[date].md
```

Research findings and analysis

### Evaluation Report

```
plans/skill-evaluation-[name]-[date].md
```

Quality score and recommendations

## Common Use Cases

### 1. Framework/Library Skills

```bash
/skill:create https://docs.nextjs.org/llms.txt
/skill:create https://github.com/remix-run/remix
/skill:create [create skill for TailwindCSS]
```

### 2. Cloud Platform Skills

```bash
/skill:create [create skill for AWS Lambda deployment]
/skill:create https://github.com/cloudflare/workers-sdk
/skill:create [Azure Functions development]
```

### 3. Database Skills

```bash
/skill:create [PostgreSQL query optimization]
/skill:create https://github.com/mongodb/mongo
/skill:create [Redis caching patterns]
```

### 4. Tool Integration Skills

```bash
/skill:create [Docker containerization best practices]
/skill:create [GitHub Actions CI/CD]
/skill:create [Kubernetes deployment]
```

### 5. Domain-Specific Skills

```bash
/skill:create [payment processing with Stripe]
/skill:create [email marketing with SendGrid]
/skill:create [analytics with Google Analytics]
```

## Skill Activation

Once created, skills activate automatically:

```bash
# Skill: mongodb.md exists

# Ask MongoDB question
/ask [how to create compound index in MongoDB]

# System automatically:
1. Detects question relates to MongoDB
2. Loads mongodb.md skill
3. Uses skill knowledge to answer
4. Provides accurate, detailed response
```

## Troubleshooting

### Skill Not Activating

**Problem:** Skill exists but doesn't activate

**Check:**
```bash
# 1. Verify skill exists
ls .claude/skills/

# 2. Check skill format
cat .claude/skills/[name].md
# Should have clear "When to Use" section

# 3. Fix if needed
/skill:fix-logs .claude/skills/[name].md
```

### Low Quality Score

**Problem:** Skill scores below 8.0

**Solution:**
```bash
# Review evaluation report
cat plans/skill-evaluation-*.md

# Address issues mentioned

# Re-create with more detail
/skill:create [more detailed prompt]
```

### Missing Information

**Problem:** Skill incomplete

**Solution:**
```bash
# Add more context to input
/skill:create [original prompt + specific areas to cover]

# Or manually edit skill file
# Then validate
/skill:fix-logs .claude/skills/[name].md
```

## Next Steps

After creating skills:

- [/skill:fix-logs](/docs/commands/skill/fix-logs) - Fix skill based on logs
- [/ask](/docs/commands/core/ask) - Use skill to answer questions
- [Skill Creator Guide](/docs/guides/creating-skills) - Advanced skill creation

---

**Key Takeaway**: `/skill:create` generates comprehensive agent skills through 4-phase process (research, implementation, review, evaluation) from natural language prompts, llms.txt URLs, or GitHub repositories—extending Claude's capabilities with specialized domain knowledge and tool integrations.
