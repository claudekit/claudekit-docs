---
title: "/use-mcp"
description: "Execute Model Context Protocol (MCP) operations via Gemini CLI to preserve context budget and access external tools"
section: marketing
category: commands
order: 23
published: true
---

> Use MCP tools without burning context budget

## Quick Start

```bash
/use-mcp Get Google Analytics traffic for last 30 days
```

**What happens**:
1. Executes via Gemini CLI (preserves Claude context)
2. Gemini CLI auto-connects to MCP servers
3. Discovers available tools
4. Executes MCP tool
5. Returns structured JSON result

**Output**: JSON response from MCP tool

## Why Gemini CLI?

### Context Preservation
- MCP servers consume large context
- Running MCP via Claude burns your token budget
- Gemini CLI runs externally, preserves Claude tokens
- Claude stays focused on your task

### How It Works
```
You → Claude → Gemini CLI → MCP Servers → Tools
            ↓
        Executes externally
        Returns JSON only
```

## Syntax

```bash
/use-mcp [task]
```

## Execution Method

**Uses stdin piping** (correct):
```bash
echo "$ARGUMENTS. Return JSON only." | gemini -y -m gemini-2.5-flash
```

**DO NOT use -p flag** (deprecated, skips MCP):
```bash
# WRONG - skips MCP server connections
gemini -y -m gemini-2.5-flash -p "..."
```

## Examples

### Example 1: Google Analytics

**Input**:
```bash
/use-mcp Get traffic data for last 30 days
```

**Process**:
```markdown
Executing via Gemini CLI...

MCP Server: google-analytics
Tool: get_traffic_report
Parameters: { period: "30d" }

Result:
{
  "server": "google-analytics",
  "tool": "get_traffic_report",
  "success": true,
  "result": {
    "sessions": 47320,
    "users": 32180,
    "pageviews": 156890,
    "bounce_rate": 42.3,
    "avg_session_duration": "3:24"
  },
  "error": null
}

Summary:
- Sessions: 47,320
- Users: 32,180
- Pageviews: 156,890
- Bounce rate: 42.3%
```

### Example 2: Search Console

**Input**:
```bash
/use-mcp Get top 10 keywords from Search Console
```

**Output**:
```markdown
MCP Server: google-search-console
Tool: get_keywords

Result:
{
  "keywords": [
    { "keyword": "marketing automation", "impressions": 12400, "clicks": 847, "position": 3.2 },
    { "keyword": "email marketing tools", "impressions": 8900, "clicks": 623, "position": 4.1 },
    ...
  ]
}
```

### Example 3: Discord Posting

**Input**:
```bash
/use-mcp Post campaign announcement to #marketing channel
```

**Output**:
```markdown
MCP Server: discord
Tool: send_message

Result:
{
  "success": true,
  "message_id": "123456789",
  "channel": "#marketing",
  "timestamp": "2025-01-29T14:30:00Z"
}

Posted to Discord #marketing channel
Message ID: 123456789
```

## MCP Server Support

### Built-in MCP Servers

| Server | Tools | Use Cases |
|--------|-------|-----------|
| Google Analytics 4 | Traffic, behavior, conversions | Analytics reporting |
| Search Console | Keywords, rankings, impressions | SEO tracking |
| Discord | Post messages, read channels | Community management |
| Slack | Post messages, team comms | Team collaboration |

### Configure MCP Servers

MCP servers configured in GEMINI.md (auto-loaded):
```json
{
  "mcpServers": {
    "google-analytics": {
      "command": "npx",
      "args": ["-y", "@google/mcp-server-ga4"]
    }
  }
}
```

## Fallback: mcp-manager Subagent

If Gemini CLI unavailable:
```markdown
Gemini CLI not found. Using mcp-manager subagent...

✓ mcp-manager: Discovering MCP tools...
✓ Found 23 tools across 4 servers
✓ Executing: google-analytics.get_traffic_report

[Same result as Gemini CLI]
```

**Note**: Subagent consumes Claude context. Gemini CLI preferred.

## Response Format

All responses are structured JSON:
```json
{
  "server": "server-name",
  "tool": "tool-name",
  "success": true,
  "result": { ... },
  "error": null
}
```

## Flags

- `-y`: Auto-approve tool execution (no prompts)
- `-m gemini-2.5-flash`: Use fast Gemini model

## Workflow Integration

### Analytics Reporting
```bash
/use-mcp Get GA4 traffic for last 30 days
/analyze traffic  # Analyze with AI
```

### SEO Tracking
```bash
/use-mcp Get Search Console keyword rankings
/seo keywords "top performing keywords"
```

### Multi-Channel Publishing
```bash
/social twitter thread "product launch"
/use-mcp Post to Discord #announcements
/use-mcp Post to Slack #marketing
```

## Troubleshooting

### Gemini CLI not found
```bash
# Install Gemini CLI
npm install -g @google/generative-ai-cli

# Or use fallback
# /use-mcp automatically uses mcp-manager subagent
```

### MCP server not connected
```bash
# Check GEMINI.md configuration
# Ensure MCP server installed
# Restart Gemini CLI
```

### Tool execution failed
```bash
# Check MCP server logs
# Verify API keys
# Check tool parameters
```

## Related Commands

- [/analyze](/docs/marketing/commands/analyze) - Analyze MCP data
- [/campaign](/docs/marketing/commands/campaign) - Use analytics in campaigns

## Related Skills

- **mcp-management**: MCP server operations
- **mcp-builder**: MCP tool development

---

**External execution. Zero context cost.** Use MCP tools without burning tokens.
