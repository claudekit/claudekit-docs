---
title: /use-mcp
description: Execute MCP operations via Gemini CLI to preserve context budget
section: docs
category: commands/core
order: 20
published: true
---

# /use-mcp

Execute Model Context Protocol (MCP) operations via Gemini CLI to preserve context budget.

## Syntax

```bash
/use-mcp [task]
```

## How It Works

1. **Primary**: Execute via Gemini CLI (stdin pipe):
   ```bash
   echo "$ARGUMENTS. Return JSON only per GEMINI.md instructions." | gemini -y -m gemini-2.5-flash
   ```

2. **Fallback**: If Gemini CLI unavailable, use `mcp-manager` subagent

## Key Rules

- **MUST use stdin piping** - deprecated `-p` flag skips MCP initialization
- Use `-y` flag to auto-approve tool execution
- `GEMINI.md` auto-loaded from project root
- Response format: `{"server":"name","tool":"name","success":true,"result":<data>,"error":null}`

## Anti-Pattern

```bash
# ❌ BROKEN - deprecated -p flag skips MCP connections!
gemini -y -m gemini-2.5-flash -p "..."

# ✅ CORRECT
echo "your task" | gemini -y -m gemini-2.5-flash
```

## When to Use

- Browser automation via MCP
- External tool integrations
- Database operations via MCP
- Any task requiring MCP server tools

---

**Key Takeaway**: Use `/use-mcp` to execute MCP operations through Gemini CLI with stdin piping, preserving Claude's context budget.
