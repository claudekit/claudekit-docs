---
title: MCP Management Skill
description: Manage Model Context Protocol servers - discover, analyze, and execute tools/prompts/resources from configured MCP servers
section: docs
category: skills/tools
order: 9
published: true
---

# MCP Management Skill

Discover and execute tools from MCP servers without polluting your context window.

## When to Use

- **Discovering capabilities**: List available MCP tools/prompts/resources
- **Task-based selection**: Find relevant tools for specific operations
- **Programmatic execution**: Call MCP tools with proper parameter handling
- **Context efficiency**: Delegate MCP operations to subagents

## Key Capabilities

| Capability | Method | Output |
|------------|--------|--------|
| **Tool Discovery** | `list-tools` | Saves to `assets/tools.json` |
| **Intelligent Selection** | LLM analysis | Context-aware tool filtering |
| **Auto-Execution** | Gemini CLI | Structured JSON responses |
| **Multi-Server** | Config-driven | Aggregate capabilities |

## Common Use Cases

### Browse Available MCP Tools
**Who**: Developer exploring MCP ecosystem
```
"List all MCP tools configured in this project and save them for quick reference"
```

### Execute Screenshot Tool
**Who**: QA engineer testing UI
```
"Take a screenshot of https://staging.example.com and save it to the screenshots folder"
```

### Query Documentation
**Who**: Developer researching API
```
"Use context7 to find Next.js 15 app router documentation on data fetching patterns"
```

### Store Entity Relationships
**Who**: Backend developer modeling data
```
"Create memory entities for User, Post, and Comment models with their relationships"
```

### Coordinate Multiple Tools
**Who**: DevOps engineer automating tasks
```
"Take a screenshot of the admin panel, then use memory to store the current deployment state"
```

## Pro Tips

**Execution Priority**:
1. **Gemini CLI** (primary) - Fast, automatic tool discovery
2. **Direct scripts** (secondary) - Manual tool specification
3. **mcp-manager agent** (fallback) - Context-efficient delegation

**Critical**: Use stdin piping for Gemini CLI, NOT `-p` flag (skips MCP initialization):
```bash
# ✅ Correct
echo "Take screenshot of example.com" | gemini -y -m gemini-2.5-flash

# ❌ Wrong - skips MCP init
gemini -p "Take screenshot" -y -m gemini-2.5-flash
```

**GEMINI.md Format**: Enforce structured JSON responses by adding:
```
"Return JSON only per GEMINI.md instructions"
```

**Tool Catalog**: Run `list-tools` to persist capabilities to JSON for fast offline reference.

**Not activating?** Say: "Use mcp-management skill to discover available MCP tools"

## Configuration

MCP servers configured in `.claude/.mcp.json`:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

**Gemini CLI Integration** (recommended):
```bash
mkdir -p .gemini && ln -sf .claude/.mcp.json .gemini/settings.json
```

## Quick Start

### Method 1: Gemini CLI (Recommended)

```bash
# Install
npm install -g @google/gemini-cli

# Create symlink for shared config
mkdir -p .gemini && ln -sf .claude/.mcp.json .gemini/settings.json

# Execute with stdin piping
echo "Take a screenshot of https://example.com. Return JSON only per GEMINI.md instructions." | gemini -y -m gemini-2.5-flash
```

**Expected Output**:
```json
{"server":"puppeteer","tool":"screenshot","success":true,"result":"screenshot.png","error":null}
```

### Method 2: Direct Scripts

```bash
cd .claude/skills/mcp-management/scripts && npm install

# List tools (saves to assets/tools.json)
npx tsx cli.ts list-tools

# Execute tool
npx tsx cli.ts call-tool memory create_entities '{"entities":[{"name":"User","type":"model"}]}'
```

### Method 3: mcp-manager Subagent

Use when Gemini CLI unavailable. Subagent handles discovery and execution, keeping main context clean.

## Related Skills

- [Chrome DevTools](/docs/skills/tools/chrome-devtools) - Browser automation via MCP
- [Problem Solving](/docs/skills/tools/problem-solving) - Systematic debugging patterns
- [Debugging](/docs/skills/tools/debugging) - Error investigation strategies

## Key Takeaway

MCP Management provides context-efficient access to external tools through Gemini CLI (primary), direct scripts (secondary), or subagent delegation (fallback). Persistent tool catalogs and structured JSON responses enable programmatic integration without context pollution.
