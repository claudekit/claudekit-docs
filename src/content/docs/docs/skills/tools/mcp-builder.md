---
title: MCP Builder Skill
description: Build production-ready MCP servers in Python or TypeScript that connect Claude to any external API, database, or service
section: docs
category: skills/tools
order: 13
published: true
---

# MCP Builder Skill

Production-ready MCP (Model Context Protocol) servers that connect Claude to external APIs, databases, and services—built with agent-first design principles.

## When to Use

- Connecting Claude to external APIs (Stripe, GitHub, Slack, etc.)
- Creating database access tools (PostgreSQL, MongoDB, MySQL)
- Building custom business logic tools
- Enabling workflow automation through integrated services

## Key Capabilities

| Capability | Python (FastMCP) | TypeScript (MCP SDK) |
|-----------|-----------------|---------------------|
| Tool Registration | `@mcp.tool` decorator | `server.registerTool` |
| Input Validation | Pydantic v2 models | Zod schemas |
| Async Operations | Native async/await | Promise-based |
| Type Safety | Type hints | TypeScript strict mode |
| Best For | Data/ML/scientific | API wrappers/web services |

**Core Features**:
- Agent-optimized workflow tools (not just API wrappers)
- Context-aware responses (concise vs. detailed)
- Actionable error messages that guide usage
- Pagination, rate limiting, character limits (25K tokens)
- Read-only, destructive, idempotent tool hints

## Common Use Cases

### Payment Processing Integration
**Who**: SaaS developer adding billing
```
"Use mcp-builder to create Stripe MCP server with:
- Create customer and subscription
- Process payments
- Manage invoices
- Handle webhooks
- List transactions"
```

### Project Management Automation
**Who**: Team lead integrating dev tools
```
"Use mcp-builder for GitHub + Jira MCP server:
- Sync issues between platforms
- Create PRs from Jira tickets
- Track commit status
- Send Slack notifications"
```

### Database Operations
**Who**: Backend developer building admin tools
```
"Use mcp-builder for PostgreSQL MCP server with:
- Execute queries safely
- Schema introspection
- Read-only mode
- Character limit truncation
- Pagination support"
```

### Custom Business Logic
**Who**: Startup automating workflows
```
"Use mcp-builder to create invoice generation MCP server:
- Calculate taxes
- Generate PDF invoices
- Send email notifications
- Update accounting records"
```

### Multi-Service Integration
**Who**: Full-stack developer building AI assistant
```
"Use mcp-builder to combine Slack, Google Calendar, and Notion:
- Schedule meetings
- Send team updates
- Create task lists
- Sync across platforms"
```

## Development Workflow

| Phase | Action |
|-------|--------|
| **1. Research** | Study MCP docs, API docs, design agent-first workflows |
| **2. Plan** | Select high-impact tools, define input/output schemas |
| **3. Implement** | Build shared utilities, implement tools with validation |
| **4. Review** | Check DRY, type safety, error handling, documentation |
| **5. Evaluate** | Create 10 complex questions to test tool effectiveness |

**Testing**: Use evaluation harness or tmux (servers run indefinitely on stdio/stdin).

## Pro Tips

- **Design for workflows, not endpoints**: Combine operations (e.g., check availability + schedule event)
- **Optimize context**: Default to concise responses, provide detailed option when needed
- **Write actionable errors**: Suggest next steps ("Try filter='active_only'")
- **Use consistent prefixes**: Group related tools (e.g., `github_*`, `stripe_*`)
- **Load docs as needed**: MCP protocol, SDK docs, language-specific guides
- **Create evaluations**: 10 complex, read-only questions to verify tool quality
- **Not activating?** Say: "Use mcp-builder skill to..."

## Configuration

**Claude Desktop** (`~/Library/Application Support/Claude/claude_desktop_config.json`):
```json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["/absolute/path/to/dist/index.js"],
      "env": {
        "API_KEY": "your-api-key"
      }
    }
  }
}
```

**Python**: Use `python /path/to/server.py` as command
**TypeScript**: Use `node /path/to/dist/index.js` after `npm run build`

## Related Skills

- [MCP Management](/docs/skills/tools/mcp-management) - Install and manage MCP servers
- [Databases](/docs/skills/backend/databases) - PostgreSQL/MongoDB integration
- [Backend Development](/docs/skills/backend/backend-development) - API design patterns
- [Planning](/docs/skills/tools/planning) - Design complex integrations

---

## Key Takeaway

 Use MCP Builder to create production-ready servers that connect Claude to any external service. Follows agent-first design principles with workflow-focused tools, context optimization, and comprehensive evaluation harnesses for quality assurance.
