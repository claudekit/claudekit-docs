---
title: "ckm:use-mcp"
description: "Utilize tools of Model Context Protocol servers"
section: marketing
kit: marketing
category: skills
order: 48
---

# Use MCP

> Connect to and use external tools through Model Context Protocol (MCP) servers.

## What This Skill Does

The Use-MCP skill enables the marketing toolkit to connect with external services and data sources through Model Context Protocol servers. MCP is an open protocol that allows AI systems to use tools hosted on external servers — think of it as a plugin system for marketing automation.

With MCP, the marketing toolkit can access live data from CRMs, analytics platforms, content management systems, and specialized marketing APIs without building custom integrations. Any service that exposes an MCP server becomes immediately available as a tool in marketing workflows.

Common MCP integrations for marketing include: HubSpot CRM data, Notion content databases, Google Analytics 4, Airtable campaign trackers, and custom internal APIs. The skill handles connection, authentication, and tool invocation transparently.

## Quick Start

```
/ckm:use-mcp --server hubspot --tool get-contacts --filter "lifecycle_stage=lead"
```

## Key Features

- Connect to any MCP-compatible server
- Tool discovery: list available tools on connected servers
- Authenticated requests with credential management
- Supports streaming responses for long-running operations
- Error handling and retry logic
- Works within existing marketing skill workflows

## Usage Examples

**Query CRM data**:
```
/ckm:use-mcp --server hubspot --tool get-deals --filter "stage=proposal&amount_gte=10000"
# Returns pipeline deals matching criteria for targeting
```

**Fetch content from Notion**:
```
/ckm:use-mcp --server notion --tool query-database --database-id "..." --filter "Status=Ready to Publish"
```

**Custom analytics query**:
```
/ckm:use-mcp --server ga4 --tool run-report --dimensions "pagePath,deviceCategory" --metrics "sessions,conversions" --date-range last-30-days
```

## Configuration

**MCP Server Config** (`.claude/mcp.json`):
```json
{
  "servers": {
    "hubspot": { "url": "https://mcp.hubspot.com", "auth": "HUBSPOT_TOKEN" },
    "notion": { "url": "https://mcp.notion.so", "auth": "NOTION_TOKEN" }
  }
}
```

## Related

- [ckm:analyze](/docs/marketing/skills/analyze) - Analysis using MCP data sources
- [ckm:campaign](/docs/marketing/skills/campaign) - Campaign data from CRM via MCP
- [ckm:dashboard](/docs/marketing/skills/dashboard) - Dashboard powered by MCP integrations
