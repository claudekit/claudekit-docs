---
title: MCP Setup
description: Documentation for MCP Setup
section: engineer
kit: engineer
category: configuration
order: 8
published: true
---

# MCP Setup

## TL;DR

ClaudeKit routes MCP (Model Context Protocol) server usage through `/ck:use-mcp`. This keeps heavy tool manifests out of the primary agent until a task actually needs MCP access.

---

## Setup Checklist

1. **Copy the template config**
   ```bash
   cp .claude/.mcp.json.example .claude/.mcp.json
   ```
2. **Customize the MCP roster**
   - Remove the default sample servers: `context7`, `human-mcp`, `chrome-devtools`, `sequential-thinking`.
   - Add only the MCP servers you truly need to avoid unnecessary token use.
3. **Save the configuration** so `/ck:use-mcp` can load clients from `.claude/.mcp.json` on demand.

> 💡 Keep `.claude/.mcp.json` outside your main prompts so the core agent never loads server manifests unless explicitly requested.

---

## Using MCP Tools

Trigger configured tools via the `/ck:use-mcp` command:

```bash
/ck:use-mcp <instruction>
```

**Example**

```bash
/ck:use-mcp Use chrome-devtools mcp to capture a screenshot of google.com
```

ClaudeKit loads the configured MCP clients, analyzes available tools, executes the best fit, and returns the results to your primary chat.

---

## Technical Deep Dive

![MCP proxy architecture](/assets/mcp-proxy.jpeg)

### Why This Architecture?

Anthropic's “Code Execution with MCP” pattern inspired a lightweight approach: subagents have their own context windows. Loading MCP manifests directly into the main agent quickly bloats its context—especially with tool-heavy servers like Chrome DevTools or Playwright. By shifting those manifests into a subagent, the primary conversation stays clean even if dozens of MCP servers are configured.

![Context isolation](/assets/05-mcp-context.jpg)

### How It Works

1. The **use-mcp** skill reads `.claude/.mcp.json` only when a task asks for MCP access.
2. It can use an LLM-driven path for flexible tool selection or deterministic scripts for direct list/call workflows.
3. When invoked, the skill:
   - Loads `.claude/.mcp.json`.
   - Connects to the declared MCP servers.
   - Enumerates available tools and selects the best option for the prompt.
   - Executes the tool invocation and streams the response back to the main agent.

The result: your main context stays pristine, yet you can still tap into specialized MCP capabilities. (Yes, the joke still stands—you *could* register 80 MCP servers, but please add only what you really need.)

### Further Optimization

Even with subagent isolation, processing massive MCP catalogs still burns tokens. To mitigate that, ClaudeKit can hand off heavy MCP orchestration to **gemini-cli**, shifting the most expensive reasoning to a cheaper, external runtime while keeping the main conversation focused.

---

## Next Steps

- Keep refining `.claude/.mcp.json` as your toolset evolves.
- Version-control the file privately if it includes API endpoints or sensitive details.
- Pair `/ck:use-mcp` with automation commands (e.g., `/ck:cook`, `/ck:fix`, `/ck:plan`) to mix bespoke tools with ClaudeKit’s native agents.

With this workflow, you get the power of MCP without the usual context penalty.
