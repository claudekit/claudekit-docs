---
title: "ckm:mcp-management"
description: "Manage MCP servers — discover available tools, analyze capabilities, execute tool calls, and debug integrations."
section: marketing
kit: marketing
category: skills
order: 91
---

> Discover, configure, and orchestrate MCP servers to extend Claude's capabilities with external tools and services.

## What This Skill Does

**The Challenge**: As MCP server ecosystems grow, managing multiple servers, understanding their capabilities, and orchestrating them effectively becomes complex without proper tooling.

**The Solution**: MCP Management skill provides discovery workflows, capability mapping, tool execution patterns, and debugging utilities for managing MCP server integrations in Claude projects.

## Activation

**Implicit**: Activates when managing MCP servers, configuring tool access, or debugging MCP integrations.

**Explicit**: Activate via prompt:
```
Activate mcp-management skill to list available tools and run a search query
```

## Capabilities

### 1. MCP Server Discovery
List and inspect all configured MCP servers and their tools.

**Claude Desktop config location**:
```
~/Library/Application Support/Claude/claude_desktop_config.json
```

**Example config structure**:
```json
{
  "mcpServers": {
    "hubspot": {
      "command": "node",
      "args": ["/path/to/hubspot-mcp/dist/index.js"]
    },
    "analytics": {
      "command": "node",
      "args": ["/path/to/analytics-mcp/dist/index.js"],
      "env": { "GA4_PROPERTY_ID": "123456789" }
    }
  }
}
```

### 2. Tool Capability Analysis
Map available tools across all configured servers.

**Capability inventory format**:
| Server | Tool | Description | Input Schema |
|--------|------|-------------|--------------|
| hubspot | search_contacts | Find contacts | name, email, company |
| analytics | get_traffic | GA4 report | start_date, end_date, metrics |

### 3. Tool Execution Orchestration
Chain MCP tool calls across multiple servers for complex workflows.

**Orchestration pattern**:
1. Identify required tools across servers
2. Plan execution order and data dependencies
3. Execute sequential or parallel tool calls
4. Aggregate and synthesize results

## Prerequisites

- Claude Desktop installed with MCP support
- MCP servers configured in `claude_desktop_config.json`
- Server binaries built and accessible

## Configuration

**Add MCP server**:
```json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["/absolute/path/to/server/dist/index.js"],
      "env": {
        "API_KEY": "your_key_here"
      }
    }
  }
}
```

**Restart Claude Desktop** after config changes for servers to appear.

## Best Practices

**1. Use absolute paths in config**
Relative paths fail when Claude Desktop starts with different working directory.

**2. Namespace tools by server**
Prefix tool names (e.g., `hubspot_search`) to avoid naming collisions between servers.

**3. Log tool inputs and outputs**
Add logging in MCP server code for debugging. Check server process logs when tools fail.

## Common Use Cases

### Use Case 1: Marketing Stack Integration Audit
**Scenario**: New team member needs overview of all integrated marketing tools.

**Workflow**:
1. Open `claude_desktop_config.json`
2. List all configured servers
3. For each server, list available tools and capabilities
4. Document in team wiki: tool name, purpose, required inputs

**Output**: Marketing tool capability map.

### Use Case 2: Cross-Platform Campaign Analysis
**Scenario**: Pull campaign data from multiple ad platforms for unified reporting.

**Workflow**:
1. Identify servers: Google Ads MCP, Meta Ads MCP, Analytics MCP
2. Execute parallel tool calls for each platform
3. Aggregate spend, impressions, clicks, conversions
4. Generate unified performance report

**Output**: Cross-platform campaign dashboard.

## Troubleshooting

**Issue**: MCP server not appearing in Claude
**Solution**: Restart Claude Desktop. Check `claude_desktop_config.json` for JSON syntax errors.

**Issue**: Tool calls fail with authentication errors
**Solution**: Verify `env` block in server config has correct API keys. Check key expiry.

**Issue**: Server starts but tools return empty results
**Solution**: Check server logs (run server manually with `node dist/index.js`). Verify API endpoints and credentials.

## Related Skills

- [MCP Builder](/docs/marketing/skills/mcp-builder) - Create new MCP servers
- [Analytics](/docs/marketing/skills/analytics) - GA4 data via MCP
- [Use MCP](/docs/marketing/skills/use-mcp) - Using MCP tools in workflows

## Related Commands

- `/ckm:mcp-management` - MCP server management workflows
- `/ckm:mcp-builder` - Build new MCP server integrations
