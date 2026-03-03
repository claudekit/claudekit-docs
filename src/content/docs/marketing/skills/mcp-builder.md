---
title: "ckm:mcp-builder"
description: "Create MCP servers to connect LLMs with external services, APIs, and data sources through standardized tool protocols."
section: marketing
kit: marketing
category: skills
order: 90
---

> Build MCP (Model Context Protocol) servers that give Claude and other LLMs direct access to your APIs, databases, and external tools.

## What This Skill Does

**The Challenge**: LLMs are powerful but isolated. Connecting them to your CRM, analytics platform, or internal tools requires custom integrations for each model and use case.

**The Solution**: MCP Builder skill scaffolds MCP servers that expose any external service as standardized tools LLMs can call. Supports HTTP APIs, databases, file systems, and custom logic with proper authentication and error handling.

## Activation

**Implicit**: Activates automatically when creating MCP server integrations or building LLM tool integrations.

**Explicit**: Activate via prompt:
```
Activate mcp-builder skill to create an MCP server for our Stripe billing API
```

## Capabilities

### 1. MCP Server Scaffolding
Generate production-ready MCP server boilerplate with TypeScript.

**Project structure**:
```
mcp-server/
├── src/
│   ├── index.ts          # Server entry point
│   ├── tools/            # Tool definitions
│   └── resources/        # Resource definitions
├── package.json
└── README.md
```

### 2. Tool and Resource Definitions
Define tools LLMs can call and resources they can read.

**Tool definition pattern**:
```typescript
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  // Handle tool calls
});
```

**Resource types**: REST API endpoints, database queries, file reads, webhooks

### 3. Authentication Patterns
Secure MCP servers with API keys, OAuth, or JWT.

**Auth methods supported**:
| Method | Use Case |
|--------|----------|
| API Key (header) | Internal tools, simple integrations |
| OAuth 2.0 | Third-party services (Google, GitHub) |
| JWT | Multi-tenant SaaS integrations |
| Bearer token | Most REST APIs |

## Prerequisites

- Node.js 18+ and TypeScript
- Target API credentials and documentation
- `@modelcontextprotocol/sdk` package

## Configuration

**Install MCP SDK**:
```bash
npm install @modelcontextprotocol/sdk
```

**Environment variables** (`.env`):
```bash
MCP_SERVER_PORT=3000
TARGET_API_KEY=your_api_key
TARGET_API_BASE_URL=https://api.example.com
```

## Best Practices

**1. One responsibility per tool**
Each MCP tool should do one thing. Avoid combining multiple API calls into one tool.

**2. Schema-validate all inputs**
Use Zod schemas for tool input validation. LLMs pass unexpected values.

**3. Return structured, parseable output**
LLMs work better with consistent JSON schemas than freeform text responses.

## Common Use Cases

### Use Case 1: CRM Integration MCP Server
**Scenario**: Give Claude direct access to HubSpot contacts and deals.

**Tools to expose**:
1. `search_contacts` - Search by name, email, company
2. `get_deal_pipeline` - Retrieve deal stages and values
3. `create_note` - Add activity notes to contacts
4. `update_deal_stage` - Move deals through pipeline

**Output**: Functional MCP server deployable via Claude Desktop config.

### Use Case 2: Analytics Dashboard MCP Server
**Scenario**: Let marketing agents query GA4 data directly.

**Tools to expose**:
1. `get_traffic_report` - Sessions, users by date range
2. `get_conversion_data` - Goals and conversion rates
3. `compare_periods` - YoY/MoM performance

**Output**: MCP server with GA4 tool access for conversational analytics.

## Troubleshooting

**Issue**: Tool calls return malformed JSON
**Solution**: Add explicit `JSON.stringify` and schema validation in response handlers.

**Issue**: Authentication fails on API calls
**Solution**: Verify credentials are loaded from environment, not hardcoded. Check token expiry.

**Issue**: Claude doesn't discover tools
**Solution**: Ensure server is registered in Claude Desktop `claude_desktop_config.json`.

## Related Skills

- [MCP Management](/docs/marketing/skills/mcp-management) - Manage and use existing MCP servers
- [Web Frameworks](/docs/marketing/skills/web-frameworks) - Backend API development

## Related Commands

- `/ckm:mcp-builder` - Scaffold new MCP server
- `/ckm:mcp-management` - Discover and use MCP servers
