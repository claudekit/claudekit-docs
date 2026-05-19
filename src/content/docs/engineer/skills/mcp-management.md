---
title: "ck:mcp-management"
description: "Discover, analyze, and execute MCP server tools, prompts, and resources with context-efficient subagent delegation"
section: engineer
kit: engineer
category: skills
order: 99
published: true
---

# mcp-management

Manage Model Context Protocol (MCP) servers — discover capabilities, select tools by task, execute calls, and avoid polluting the main context window.

## What This Skill Does

MCP is an open protocol that lets AI agents connect to external tools and data sources. This skill provides structured workflows for:

- **Discovery**: List all tools, prompts, and resources from configured MCP servers
- **Selection**: Intelligently pick the right MCP tools for a given task
- **Execution**: Call MCP tools with proper parameter handling
- **Context management**: Delegate MCP operations to subagents to keep the main context clean

## Usage

```
/ck:mcp-management [task or server-name]
```

**Examples:**
- `/ck:mcp-management list all available tools`
- `/ck:mcp-management find tools for database operations`
- `/ck:mcp-management execute github create-issue with title "Bug report"`

## Configuration

MCP servers are configured in `.claude/.mcp.json` in your project root.

**Gemini CLI integration** (recommended) — create a symlink so both Claude Code and Gemini CLI share one config:

```bash
mkdir -p .gemini && ln -sf .claude/.mcp.json .gemini/settings.json
```

## Core Capabilities

### Discover MCP Capabilities

```
/ck:mcp-management discover tools from my configured servers
```

The skill uses subagents to enumerate tools from each server, saves a persistent tool catalog to JSON for fast re-use, and returns a filtered list relevant to your task.

### Task-Based Tool Selection

```
/ck:mcp-management I need to create a GitHub issue and post to Slack
```

The skill analyzes your task, matches it against the tool catalog, and recommends the minimal set of MCP tools needed — avoiding context bloat from loading every tool description.

### Execute MCP Tools

```
/ck:mcp-management call github:create-issue with title "Login fails on Safari" body "Steps to reproduce..."
```

Handles parameter mapping, error recovery, and response formatting.

### Multi-Server Management

When multiple MCP servers are configured, the skill tracks which server owns which tool and routes calls to the correct server automatically.

## When to Use vs `use-mcp`

| Use | Skill |
|-----|-------|
| Execute a specific known MCP tool | [use-mcp](/docs/engineer/skills/use-mcp) |
| Discover what MCP tools exist | **mcp-management** |
| Select the right tool for a task | **mcp-management** |
| Build or debug an MCP server | [mcp-builder](/docs/engineer/skills/mcp-builder) |

## Related Skills

- [use-mcp](/docs/engineer/skills/use-mcp) — Execute MCP tools directly
- [mcp-builder](/docs/engineer/skills/mcp-builder) — Build new MCP servers
- [agentize](/docs/engineer/skills/agentize) — Convert existing tools into MCP servers
