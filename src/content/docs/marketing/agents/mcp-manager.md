---
title: "MCP Manager Agent"
description: "Manage Model Context Protocol server integrations and execute MCP tools efficiently."
section: marketing
category: agents
order: 8
---

# MCP Manager Agent

> **Your integration specialist** - Connects Marketing Kit to external services through MCP servers

## What This Agent Does

You want to automate screenshot capture, access Google Analytics data, or interact with Figma designs. But each tool requires different setup, authentication, and command syntax. Managing these integrations is complex and error-prone.

**The Problem**: Modern marketing workflows depend on many external services—analytics platforms, design tools, browser automation, APIs. Integrating each service means learning its SDK, handling auth, and writing custom code.

**The Solution**: The MCP Manager Agent handles all Model Context Protocol (MCP) server integrations. It discovers available tools, executes them efficiently via Gemini CLI or direct scripts, and returns results cleanly. You access powerful external services with simple commands.

## Quick Start

Execute MCP tools through the manager:

```bash
# Take a screenshot with browser automation
/mcp "Take screenshot of claudekit.cc homepage"
```

The manager handles tool discovery, execution via optimal method (Gemini CLI first, scripts fallback), and result delivery.

## Capabilities

### MCP Server Management
Discovers and manages integrated services:
- Lists all available MCP servers
- Discovers tools each server provides
- Accesses prompts and resources from servers
- Handles authentication automatically
- Manages server connections and health

### Intelligent Execution Strategy
Chooses optimal execution method:
- **Primary**: Gemini CLI (fastest, 2M context window)
- **Secondary**: Direct TypeScript scripts
- **Fallback**: Error reporting with guidance
- Automatic failover between methods
- Context-efficient execution

### Multi-Server Coordination
Works across multiple MCP servers:
- Google Analytics (traffic, conversions, events)
- Google Search Console (search performance, rankings)
- Browser Automation (screenshots, testing)
- Figma (design access, asset export)
- Custom servers you configure

### Result Synthesis
Provides clean, actionable output:
- Execution status (success/failure)
- Tool output or data
- File paths for generated assets (screenshots, etc.)
- Error messages with troubleshooting guidance
- Performance metrics

## When to Use

Use the MCP Manager Agent when you need to:
- Take screenshots for testing or documentation
- Access Google Analytics or Search Console data
- Export assets from Figma designs
- Automate browser interactions
- Execute any MCP server tools
- Integrate external services into workflows

## Example Workflows

### Screenshot Capture

```bash
/mcp "Capture full-page screenshot of claudekit.cc/docs"
```

**The manager will**:
1. Check if Gemini CLI available
2. Setup MCP server symlink if needed
3. Execute via Gemini: `gemini -y -m gemini-2.5-flash -p "Take screenshot of https://claudekit.cc/docs"`
4. Return screenshot file path
5. If Gemini unavailable, fall back to direct script execution

### Google Analytics Data

```bash
/mcp "Get website sessions by source for last 30 days from Google Analytics"
```

**You'll get**:
```
Sessions by source (last 30 days):
- Organic: 12,450 sessions
- Direct: 8,320 sessions
- Social: 3,102 sessions
- Referral: 1,890 sessions
- Paid: 945 sessions

Data from: google-analytics MCP server
```

### Figma Asset Export

```bash
/mcp "Export logo assets from Figma design file"
```

**Returns**: Exported PNG/SVG files with paths for use in project.

## Execution Methods

### Method 1: Gemini CLI (Primary)

Fastest and most context-aware:
```bash
# Check availability
command -v gemini >/dev/null 2>&1

# Setup MCP config symlink
mkdir -p .gemini && ln -sf .claude/.mcp.json .gemini/settings.json

# Execute task
gemini -y -m gemini-2.5-flash -p "Take screenshot of example.com"
```

**Advantages**:
- 2M token context window
- Natural language task description
- Handles complex multi-step tasks
- Automatic tool discovery and chaining

### Method 2: Direct Scripts (Fallback)

When Gemini unavailable:
```bash
npx tsx .claude/skills/mcp-management/scripts/cli.ts call-tool \
  <server-name> <tool-name> '<json-args>'
```

**Example**:
```bash
npx tsx cli.ts call-tool human-mcp playwright_screenshot_fullpage \
  '{"url":"https://claudekit.cc"}'
```

## MCP Server Configuration

Configure servers in `.claude/.mcp.json`:

```json
{
  "mcpServers": {
    "google-analytics": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-google-analytics"],
      "env": {
        "GOOGLE_ANALYTICS_PROPERTY_ID": "12345"
      }
    },
    "browser-automation": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-puppeteer"]
    }
  }
}
```

## Available MCP Servers

Marketing Kit supports:

**Analytics & SEO**:
- `google-analytics` - GA4 traffic, conversions, events
- `google-search-console` - Search performance, rankings

**Design & Assets**:
- `figma` - Design access, asset export
- `image-processing` - ImageMagick operations

**Browser Automation**:
- `puppeteer` - Screenshot capture, browser testing
- `playwright` - Advanced browser automation

**Custom Servers**:
Add any MCP-compliant server to `.claude/.mcp.json`

## Performance

Optimized execution:
- Gemini CLI: ~2-5 seconds for simple tasks
- Direct scripts: ~3-8 seconds for same task
- Automatic failover adds <1 second overhead
- Results cached when appropriate

## Related Agents

- [Analytics Analyst](/docs/marketing/agents/analytics-analyst) - Uses MCP for data access
- [UI/UX Designer](/docs/marketing/agents/ui-ux-designer) - Uses MCP for Figma integration
- [Tester](/docs/marketing/agents/tester) - Uses MCP for browser testing

## Related Commands

- [`/mcp`](/docs/marketing/commands/mcp) - Execute MCP tools
- [`/tools`](/docs/marketing/commands/tools) - List available MCP tools

## Tips

**Prefer Gemini CLI**: If both available, Gemini CLI is faster and more flexible. Install Gemini CLI for best experience.

**Natural Language Tasks**: With Gemini CLI, describe tasks naturally: "Take screenshot and resize to 1200px wide" works better than manual tool chaining.

**Check Availability**: Run `/tools` to see all available MCP tools across configured servers.

**Add Custom Servers**: Any MCP-compliant server works. Add to `.claude/.mcp.json` and restart.

## Troubleshooting

**Gemini CLI not found**:
```bash
# Install Gemini CLI
npm install -g @anthropic-ai/gemini-cli

# Verify installation
gemini --version
```

**MCP server not responding**:
```bash
# Check server configuration
cat .claude/.mcp.json

# Test server directly
npx <server-command>
```

**Authentication errors**:
- Check environment variables in `.env`
- Verify API keys for external services
- Review server-specific auth documentation

The MCP Manager makes complex integrations simple. You focus on marketing tasks; the manager handles the technical integration complexity.
