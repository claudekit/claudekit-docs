---
title: MCP Management
description: Khám phá, phân tích và thực thi tools từ các Model Context Protocol servers đã cấu hình với intelligent tool selection và multi-server orchestration
section: engineer
kit: engineer
category: skills
order: 19
lang: vi
---

Bạn đã cấu hình MCP servers, nhưng làm sao để thực sự sử dụng chúng mà không làm ngập context window với hàng trăm tool definitions? Đó là lúc MCP Management xuất hiện.

## Skill Này Làm Gì

MCP Management cung cấp scripts và utilities để khám phá, phân tích và thực thi capabilities từ Model Context Protocol (MCP) servers mà không làm ô nhiễm main context window. Nó cho phép progressive disclosure: chỉ load MCP tools bạn cần, khi bạn cần.

Skill hỗ trợ ba execution methods với priority rõ ràng: Gemini CLI cho automatic tool discovery và execution (primary), direct CLI scripts cho manual control (secondary) và subagent-based execution cho context efficiency (fallback). Nó xử lý multi-server management từ một config file, intelligent tool selection dựa trên task requirements và persistent tool catalogs cho fast reference.

Hãy nghĩ về nó như MCP orchestration layer của bạn. Thay vì load 100+ tool definitions vào context, bạn khám phá những gì available, chọn relevant tools, thực thi chúng và nhận structured results trở lại.

## Yêu Cầu Trước

Bạn cần:

- MCP servers được cấu hình trong `.claude/.mcp.json`
- Node.js 18+ để chạy TypeScript scripts
- Tùy chọn: Gemini CLI installed globally cho primary execution method
- Hiểu biết cơ bản về cách MCP servers hoạt động (xem [MCP Builder](/docs/engineer/skills/mcp-builder))

## Cấu Hình

MCP servers được cấu hình trong `.claude/.mcp.json`:

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

**Gemini CLI Integration** (khuyến nghị):

Tạo symlink để Gemini CLI có thể dùng cùng config:

```bash
mkdir -p .gemini
ln -sf .claude/.mcp.json .gemini/settings.json
```

Giờ cả ClaudeKit và Gemini CLI đều dùng cùng MCP server configuration.

## Ba Execution Methods

### Method 1: Gemini CLI (Primary)

Nếu bạn có Gemini CLI installed, đây là method nhanh và intelligent nhất:

```bash
# Kiểm tra Gemini CLI có available không
command -v gemini

# Execute một task (Gemini auto-selects tools)
echo "Take a screenshot of https://example.com. Return JSON only per GEMINI.md instructions." | gemini -y -m gemini-2.5-flash
```

**Quan trọng**: Luôn dùng stdin piping (`echo "..." | gemini`), KHÔNG dùng `-p` flag. Flag `-p` bị deprecated và skip MCP initialization.

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

**Tại Sao Hoạt Động**:

Project root chứa `GEMINI.md` mà Gemini CLI tự động load. File này enforce structured JSON responses (no markdown, no explanations), maximum 500 character responses và consistent error reporting.

**Lợi ích**:

- Automatic tool discovery
- Intelligent tool selection
- Structured, parseable responses
- Nhanh hơn subagent orchestration
- Không có natural language ambiguity

### Method 2: Direct CLI Scripts (Secondary)

Sử dụng khi bạn cần specific tool/server control:

```bash
# Navigate tới scripts directory
cd .claude/skills/mcp-management/scripts

# Install dependencies (lần đầu)
npm install

# List tất cả available tools (saves vào assets/tools.json)
npx tsx cli.ts list-tools

# List prompts và resources
npx tsx cli.ts list-prompts
npx tsx cli.ts list-resources

# Execute specific tool
npx tsx cli.ts call-tool memory create_entities '{"entities":[{"name":"Project","type":"project","observations":["Uses React"]}]}'
```

Command `list-tools` save complete tool catalog vào `assets/tools.json` với full schemas, giúp browse available tools offline dễ dàng.

### Method 3: Subagent-Based Execution (Fallback)

Sử dụng khi Gemini CLI không available hoặc khi bạn cần context-efficient delegation.

`mcp-manager` subagent dùng skill này để:

- Kiểm tra Gemini CLI availability trước
- Execute qua `gemini` command nếu available
- Fallback sang direct script execution
- Khám phá MCP capabilities mà không load vào main context
- Report results trở lại main agent

Điều này giữ main agent's context sạch.

## Khả Năng Cốt Lõi

### Capability Discovery

Khám phá những gì available trên tất cả configured MCP servers:

```bash
cd .claude/skills/mcp-management/scripts

# List tất cả tools (saves vào assets/tools.json)
npx tsx cli.ts list-tools

# List available prompts
npx tsx cli.ts list-prompts

# List available resources
npx tsx cli.ts list-resources
```

Output bao gồm server identification để bạn biết server nào cung cấp capability nào.

### Tool Catalog Persistence

Command `list-tools` tự động save complete tool catalog vào `assets/tools.json`:

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

**Lợi ích**:

- Fast offline reference
- Version control tracking
- Không cần reconnect tới servers để tool discovery
- LLM có thể phân tích JSON trực tiếp cho intelligent tool selection

### Intelligent Tool Selection

Thay vì dùng keyword matching algorithms, để LLM phân tích `assets/tools.json` trực tiếp:

```bash
# Generate tool catalog
npx tsx cli.ts list-tools

# LLM đọc assets/tools.json và chọn relevant tools
# Hiểu context, synonyms và intent tốt hơn keyword matching
```

### Multi-Server Orchestration

Coordinate tools trên multiple servers. Mỗi tool biết source server của nó cho proper routing:

```bash
# Execute tool từ specific server
npx tsx cli.ts call-tool filesystem read_file '{"path":"/file.txt"}'

# Execute tool từ different server
npx tsx cli.ts call-tool memory create_entities '{"entities":[...]}'
```

## Structured Response Format

File `GEMINI.md` trong project root enforce structured JSON responses khi dùng Gemini CLI:

```markdown
# GEMINI.md

Bạn phải respond trong JSON format only. No markdown, no explanations.

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

**Lợi ích**:

- Programmatically parseable output
- Consistent error reporting
- DRY configuration (format defined once)
- Context-efficient (auto-loaded bởi Gemini CLI)

## Ví Dụ Thực Tế

### Screenshot một Website

Sử dụng Gemini CLI (giả định puppeteer MCP server đã được configured):

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

### Store Information trong Memory

Sử dụng direct CLI scripts:

```bash
cd .claude/skills/mcp-management/scripts

# Tạo entities trong memory server
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

### Khám Phá Available Tools

Generate complete catalog của tất cả available tools:

```bash
cd .claude/skills/mcp-management/scripts

# List và save tất cả tools
npx tsx cli.ts list-tools

# Output saved vào assets/tools.json

# Bây giờ đọc catalog
cat assets/tools.json | jq '.[] | {server: .server, tools: .tools[].name}'
```

## Best Practices

**Dùng Gemini CLI Khi Available**: Đây là method nhanh nhất với automatic tool selection và structured responses.

**Luôn Dùng Stdin Piping**: Không bao giờ dùng `gemini -p "prompt"`. Dùng `echo "prompt" | gemini` thay thế. Flag `-p` skip MCP initialization.

**Thêm Response Format Reminder**: Bao gồm "Return JSON only per GEMINI.md instructions" trong prompts để enforce structured output.

**Generate Tool Catalog**: Chạy `list-tools` để tạo `assets/tools.json` cho fast offline reference và LLM analysis.

**Để LLMs Phân Tích Tools**: Thay vì keyword matching, để LLM đọc `assets/tools.json` để chọn relevant tools một cách intelligent.

**Delegate cho Subagents**: Cho complex MCP workflows, dùng `mcp-manager` subagent để giữ main context sạch.

## Skills Liên Quan

Kết hợp MCP Management với:

- [MCP Builder](/docs/engineer/skills/mcp-builder) - Build MCP servers trước khi manage chúng
- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - Một số MCP servers có thể expose Gemini capabilities
- [Chrome DevTools](/docs/engineer/skills/chrome-devtools) - Puppeteer MCP servers cung cấp browser automation

## Nguyên Tắc Chính

MCP Management cho phép progressive disclosure: khám phá những gì available, load chỉ những gì bạn cần, execute với structure, giữ context sạch.

Dùng Gemini CLI cho automatic execution, direct scripts cho manual control và subagents cho context efficiency. Luôn enforce structured JSON responses cho programmatic parsing.
