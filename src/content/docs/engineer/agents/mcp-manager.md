---
title: MCP Manager Agent
description: Manage MCP server integrations, discover tools, and execute MCP capabilities while keeping main context clean
section: engineer
kit: engineer
category: agents
order: 16
published: true
---
# MCP Manager Agent

Execute MCP server tools (screenshots, browser automation, docs lookup) in isolated context - keeps your main Claude session clean while accessing 100+ MCP capabilities.

## When to Use

- Need browser screenshots, form automation, web scraping
- Query library docs (Next.js, React, Supabase via context7)
- Access DevTools Protocol, sequential reasoning tools
- Any `/use-mcp [task]` command - agent handles the rest

## Key Capabilities

| Capability | What It Does | Example |
|------------|--------------|---------|
| **Tool Discovery** | Scans multiple MCP servers, filters relevant tools | Finds playwright_screenshot across 5 servers |
| **Execution Priority** | Gemini CLI → Direct scripts → Error report | Auto-fallback ensures reliability |
| **Context Isolation** | Runs in subagent, returns concise summaries only | Main agent stays token-efficient |
| **Multi-Server Support** | Orchestrates context7, human-mcp, chrome-devtools | Single command, multiple backends |

## Common Use Cases

### 1. Frontend Dev - Visual Testing
**Who:** React/Next.js developers
**Prompt:** `/use-mcp Screenshot staging.app.com/dashboard vs prod at 1920x1080, highlight differences`

### 2. DevOps - Monitoring Checks
**Who:** SREs, DevOps engineers
**Prompt:** `/use-mcp Navigate to status.service.com, check all green checkmarks, screenshot if any red`

### 3. Docs Research - API Lookup
**Who:** Full-stack developers
**Prompt:** `/use-mcp Find Supabase auth documentation for OAuth providers and MFA setup`

### 4. QA Automation - Form Testing
**Who:** QA engineers
**Prompt:** `/use-mcp Fill example.com/contact form with test data: name=John, email=test@test.com, submit and confirm`

### 5. Web Scraping - Data Extraction
**Who:** Data analysts, marketers
**Prompt:** `/use-mcp Extract all product names and prices from competitor.com/products table`

## Pro Tips

**Gemini CLI Required:** Install `npm i -g @google/gemini-cli` for primary execution (direct scripts auto-fallback if missing)

**Config Location:** `.claude/.mcp.json` - add servers like context7, human-mcp with API keys in `env` section

**Error Handling:** Agent reports failures with actionable fixes (timeout → check URL, connection → verify .mcp.json)

**Screenshot Defaults:** Full-page captures at viewport size - specify `1920x1080` or `mobile` for custom dimensions

**Multi-Step Tasks:** Chain operations in one prompt: "Navigate → Fill form → Submit → Screenshot confirmation"

## Related Agents

- [Scout External](/docs/engineer/skills/scout) - External research + MCP docs lookup synergy
- [Fullstack Developer](/docs/engineer/agents/fullstack-developer) - Uses MCP Manager for visual regression testing

## Key Takeaway

MCP Manager isolates complex tool execution (browser automation, docs queries, screenshots) from your main Claude context - you get clean outputs, Claude stays fast. Access 100+ MCP tools via `/use-mcp [natural language task]`.
