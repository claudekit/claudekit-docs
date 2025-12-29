---
title: "MCP Management"
description: "Discover, analyze, and execute tools from configured Model Context Protocol servers with intelligent tool selection and multi-server orchestration"
section: engineer
category: skills
order: 19
---

You've got MCP servers configured, but how do you actually use them without flooding your context window with hundreds of tool definitions? That's where MCP Management comes in.

## What This Skill Does

MCP Management provides scripts and utilities to discover, analyze, and execute capabilities from Model Context Protocol (MCP) servers without polluting your main context window. It enables progressive disclosure: load only the MCP tools you need, when you need them.

The skill supports three execution methods with clear priority: Gemini CLI for automatic tool discovery and execution (primary), direct CLI scripts for manual control (secondary), and subagent-based execution for context efficiency (fallback). It handles multi-server management from a single config file, intelligent tool selection based on task requirements, and persistent tool catalogs for fast reference.

Think of it as your MCP orchestration layer. Instead of loading 100+ tool definitions into your context, you discover what's available, select relevant tools, execute them, and get structured results back.

## Prerequisites

You need:

- MCP servers configured in `.claude/.mcp.json`
- Node.js 18+ for running the TypeScript scripts
- Optional: Gemini CLI installed globally for the primary execution method
- Basic understanding of how MCP servers work (see [MCP Builder](/docs/engineer/skills/mcp-builder))

## Configuration

MCP servers are configured in `.claude/.mcp.json`:

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/allowed/path"]
    }
  }
}
```

**Gemini CLI Integration** (recommended):

Create a symlink so Gemini CLI can use the same config:

```bash
mkdir -p .gemini
ln -sf .claude/.mcp.json .gemini/settings.json
```

Now both ClaudeKit and Gemini CLI share the same MCP server configuration.

## Three Execution Methods

### Method 1: Gemini CLI (Primary)

If you have Gemini CLI installed, this is the fastest and most intelligent method:

```bash
# Check if Gemini CLI is available
command -v gemini

# Execute a task (Gemini auto-selects tools)
echo "Take a screenshot of https://example.com. Return JSON only per GEMINI.md instructions." | gemini -y -m gemini-2.5-flash
```

**Important**: Always use stdin piping (`echo "..." | gemini`), NOT the `-p` flag. The `-p` flag is deprecated and skips MCP initialization.

**Expected Output** (structured JSON):

```json
{
  "server": "puppeteer",
  "tool": "screenshot",
  "success": true,
  "result": "screenshot.png",
  "error": null
}
```

**Why This Works**:

The project root contains `GEMINI.md` that Gemini CLI automatically loads. This file enforces structured JSON responses (no markdown, no explanations), maximum 500 character responses, and consistent error reporting.

**Benefits**:

- Automatic tool discovery
- Intelligent tool selection
- Structured, parseable responses
- Faster than subagent orchestration
- No natural language ambiguity

### Method 2: Direct CLI Scripts (Secondary)

Use when you need specific tool/server control:

```bash
# Navigate to scripts directory
cd .claude/skills/mcp-management/scripts

# Install dependencies (first time only)
npm install

# List all available tools (saves to assets/tools.json)
npx tsx cli.ts list-tools

# List prompts and resources
npx tsx cli.ts list-prompts
npx tsx cli.ts list-resources

# Execute specific tool
npx tsx cli.ts call-tool memory create_entities '{"entities":[{"name":"Project","type":"project","observations":["Uses React"]}]}'
```

The `list-tools` command saves a complete tool catalog to `assets/tools.json` with full schemas, making it easy to browse available tools offline.

### Method 3: Subagent-Based Execution (Fallback)

Use when Gemini CLI is unavailable or when you need context-efficient delegation.

The `mcp-manager` subagent uses this skill to:

- Check Gemini CLI availability first
- Execute via `gemini` command if available
- Fallback to direct script execution
- Discover MCP capabilities without loading into main context
- Report results back to main agent

This keeps your main agent's context clean.

## Core Capabilities

### Capability Discovery

Discover what's available across all configured MCP servers:

```bash
cd .claude/skills/mcp-management/scripts

# List all tools (saves to assets/tools.json)
npx tsx cli.ts list-tools

# List available prompts
npx tsx cli.ts list-prompts

# List available resources
npx tsx cli.ts list-resources
```

Output includes server identification so you know which server provides which capability.

### Tool Catalog Persistence

The `list-tools` command automatically saves the complete tool catalog to `assets/tools.json`:

```json
{
  "server": "filesystem",
  "tools": [
    {
      "name": "read_file",
      "description": "Read contents of a file",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string",
            "description": "File path to read"
          }
        },
        "required": ["path"]
      }
    }
  ]
}
```

**Benefits**:

- Fast offline reference
- Version control tracking
- No need to reconnect to servers for tool discovery
- LLM can analyze JSON directly for intelligent tool selection

### Intelligent Tool Selection

Rather than using keyword matching algorithms, let an LLM analyze `assets/tools.json` directly:

```bash
# Generate tool catalog
npx tsx cli.ts list-tools

# LLM reads assets/tools.json and selects relevant tools
# This understands context, synonyms, and intent better than keyword matching
```

### Multi-Server Orchestration

Coordinate tools across multiple servers. Each tool knows its source server for proper routing:

```bash
# Execute tool from specific server
npx tsx cli.ts call-tool filesystem read_file '{"path":"/file.txt"}'

# Execute tool from different server
npx tsx cli.ts call-tool memory create_entities '{"entities":[...]}'
```

## Structured Response Format

The `GEMINI.md` file in your project root enforces structured JSON responses when using Gemini CLI:

```markdown
# GEMINI.md

You must respond in JSON format only. No markdown, no explanations.

Response format:
{
  "server": "server-name",
  "tool": "tool-name",
  "success": true|false,
  "result": <data>,
  "error": null|"error message"
}

Maximum response length: 500 characters.
```

**Benefits**:

- Programmatically parseable output
- Consistent error reporting
- DRY configuration (format defined once)
- Context-efficient (auto-loaded by Gemini CLI)

## Real-World Examples

### Screenshot a Website

Using Gemini CLI (assuming puppeteer MCP server is configured):

```bash
echo "Take a full-page screenshot of https://docs.claudekit.cc and save it to screenshot.png. Return JSON only per GEMINI.md instructions." | gemini -y -m gemini-2.5-flash
```

Response:

```json
{
  "server": "puppeteer",
  "tool": "screenshot",
  "success": true,
  "result": "screenshot.png",
  "error": null
}
```

### Store Information in Memory

Using direct CLI scripts:

```bash
cd .claude/skills/mcp-management/scripts

# Create entities in memory server
npx tsx cli.ts call-tool memory create_entities '{
  "entities": [
    {
      "name": "ClaudeKit",
      "type": "project",
      "observations": [
        "Open source toolkit for AI engineering",
        "Includes CLI, Engineer Kit, Marketing Kit",
        "Uses MCP protocol for integrations"
      ]
    }
  ]
}'
```

### Discover Available Tools

Generate complete catalog of all available tools:

```bash
cd .claude/skills/mcp-management/scripts

# List and save all tools
npx tsx cli.ts list-tools

# Output saved to assets/tools.json

# Now read the catalog
cat assets/tools.json | jq '.[] | {server: .server, tools: .tools[].name}'
```

### Context-Efficient Task Delegation

Let the `mcp-manager` subagent handle MCP operations:

```bash
# From main agent, delegate to mcp-manager
# This keeps main context clean

# mcp-manager checks Gemini CLI availability
# If available: uses echo "..." | gemini approach
# If not: uses direct CLI scripts
# Reports structured results back
```

## Configuration Management

### Single Source of Truth

MCP servers are defined in `.claude/.mcp.json`:

```json
{
  "mcpServers": {
    "server-name": {
      "command": "command",
      "args": ["arg1", "arg2"],
      "env": {
        "API_KEY": "value"
      }
    }
  }
}
```

### Gemini CLI Integration

Create symlink for shared configuration:

```bash
mkdir -p .gemini
ln -sf .claude/.mcp.json .gemini/settings.json
```

Now Gemini CLI and ClaudeKit use the same MCP server configuration.

### GEMINI.md Response Format

The `GEMINI.md` file enforces response structure. Gemini CLI auto-loads this file from project root.

**Template**:

```markdown
# MCP Tool Execution Instructions

Respond in JSON format only. No markdown, no explanations, no extra text.

Format:
{
  "server": "server-name",
  "tool": "tool-name",
  "success": true|false,
  "result": <data>,
  "error": null|"error message"
}

Maximum response: 500 characters.

Available MCP servers:
- memory: Knowledge graph storage
- filesystem: File operations
- puppeteer: Browser automation
```

## Integration Strategy

### Execution Priority

1. **Gemini CLI** (Primary): Fast, automatic, intelligent
   - Check: `command -v gemini`
   - Execute: `echo "<task>" | gemini -y -m gemini-2.5-flash`
   - Best for: All tasks when available

2. **Direct CLI Scripts** (Secondary): Manual control
   - Use when: Need specific tool/server control
   - Execute: `npx tsx scripts/cli.ts call-tool <server> <tool> <args>`

3. **mcp-manager Subagent** (Fallback): Context efficiency
   - Use when: Gemini unavailable or context management needed
   - Keeps main context clean

### Integration with Agents

The `mcp-manager` subagent uses this skill to:

- Check Gemini CLI availability
- Execute via `gemini` command if available
- Fallback to direct scripts
- Discover MCP capabilities without polluting main context
- Report structured results back

This enables efficient MCP integration in agent workflows.

## Scripts Reference

All scripts are in `.claude/skills/mcp-management/scripts/`:

### mcp-client.ts

Core MCP client manager class. Handles:

- Config loading from `.claude/.mcp.json`
- Connecting to multiple MCP servers
- Listing tools/prompts/resources across all servers
- Executing tools with proper error handling
- Connection lifecycle management

### cli.ts

Command-line interface for MCP operations:

```bash
# List capabilities
npx tsx cli.ts list-tools      # Saves to assets/tools.json
npx tsx cli.ts list-prompts
npx tsx cli.ts list-resources

# Execute tools
npx tsx cli.ts call-tool <server> <tool> '<json-args>'
```

## Best Practices

**Use Gemini CLI When Available**: It's the fastest method with automatic tool selection and structured responses.

**Always Use Stdin Piping**: Never use `gemini -p "prompt"`. Use `echo "prompt" | gemini` instead. The `-p` flag skips MCP initialization.

**Add Response Format Reminder**: Include "Return JSON only per GEMINI.md instructions" in your prompts to enforce structured output.

**Generate Tool Catalog**: Run `list-tools` to create `assets/tools.json` for fast offline reference and LLM analysis.

**Let LLMs Analyze Tools**: Rather than keyword matching, let an LLM read `assets/tools.json` to select relevant tools intelligently.

**Delegate to Subagents**: For complex MCP workflows, use the `mcp-manager` subagent to keep main context clean.

## Technical Details

For deeper understanding of the MCP protocol, see `references/mcp-protocol.md`:

- JSON-RPC protocol details
- Message types and formats
- Error codes and handling
- Transport mechanisms (stdio, HTTP+SSE)
- Best practices

This reference is in the Engineer Kit at `../claudekit-engineer/.claude/skills/mcp-management/references/`.

## Related Skills and Commands

Combine MCP Management with:

- [MCP Builder](/docs/engineer/skills/mcp-builder) - Build MCP servers before managing them
- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - Some MCP servers may expose Gemini capabilities
- [Chrome DevTools](/docs/engineer/skills/chrome-devtools) - Puppeteer MCP servers provide browser automation

## Key Principle

MCP Management enables progressive disclosure: discover what's available, load only what you need, execute with structure, keep context clean.

Use Gemini CLI for automatic execution, direct scripts for manual control, and subagents for context efficiency. Always enforce structured JSON responses for programmatic parsing.
