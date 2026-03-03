---
title: "ck:mcp-management"
description: Khám phá, phân tích và thực thi các công cụ từ các MCP server đã cấu hình với lựa chọn công cụ thông minh và điều phối multi-server
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

# MCP Management

Bạn đã cấu hình MCP servers, nhưng làm thế nào để thực sự sử dụng chúng mà không làm tràn context window với hàng trăm định nghĩa công cụ? Đó là lúc MCP Management phát huy tác dụng.

## Skill Này Làm Gì

MCP Management cung cấp các scripts và tiện ích để khám phá, phân tích và thực thi các khả năng từ các Model Context Protocol (MCP) servers mà không làm ô nhiễm context window chính. Nó cho phép progressive disclosure: chỉ tải các công cụ MCP bạn cần, khi bạn cần.

Skill hỗ trợ ba phương thức thực thi với ưu tiên rõ ràng: Gemini CLI để tự động khám phá và thực thi công cụ (chính), scripts CLI trực tiếp để kiểm soát thủ công (phụ), và thực thi dựa trên subagent để hiệu quả context (dự phòng). Nó xử lý quản lý multi-server từ một file config, lựa chọn công cụ thông minh dựa trên yêu cầu nhiệm vụ, và catalogs công cụ persistent để tham chiếu nhanh.

Hãy nghĩ về nó như lớp điều phối MCP của bạn. Thay vì tải 100+ định nghĩa công cụ vào context, bạn khám phá những gì có sẵn, chọn công cụ liên quan, thực thi chúng, và nhận kết quả có cấu trúc.

## Yêu Cầu Trước

Bạn cần:

- Các MCP servers được cấu hình trong `.claude/.mcp.json`
- Node.js 18+ để chạy TypeScript scripts
- Tùy chọn: Gemini CLI được cài đặt globally cho phương thức thực thi chính
- Hiểu biết cơ bản về cách hoạt động của MCP servers (xem [MCP Builder](/vi/docs/engineer/skills/mcp-builder))

## Cấu Hình

Các MCP servers được cấu hình trong `.claude/.mcp.json`:

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

**Tích Hợp Gemini CLI** (khuyến nghị):

Tạo symlink để Gemini CLI có thể dùng cùng config:

```bash
mkdir -p .gemini
ln -sf .claude/.mcp.json .gemini/settings.json
```

Bây giờ cả ClaudeKit và Gemini CLI chia sẻ cùng cấu hình MCP server.

## Ba Phương Thức Thực Thi

### Phương Thức 1: Gemini CLI (Chính)

Nếu bạn đã cài đặt Gemini CLI, đây là phương thức nhanh nhất và thông minh nhất:

```bash
# Kiểm tra xem Gemini CLI có sẵn không
command -v gemini

# Thực thi nhiệm vụ (Gemini tự động chọn công cụ)
echo "Take a screenshot of https://example.com. Return JSON only per GEMINI.md instructions." | gemini -y -m gemini-2.5-flash
```

**Quan Trọng**: Luôn dùng stdin piping (`echo "..." | gemini`), KHÔNG phải flag `-p`. Flag `-p` đã deprecated và bỏ qua khởi tạo MCP.

**Đầu Ra Mong Đợi** (JSON có cấu trúc):

```json
{
  "server": "puppeteer",
  "tool": "screenshot",
  "success": true,
  "result": "screenshot.png",
  "error": null
}
```

**Tại Sao Điều Này Hoạt Động**:

Project root chứa `GEMINI.md` mà Gemini CLI tự động tải. File này thực thi các phản hồi JSON có cấu trúc (không markdown, không giải thích), tối đa 500 ký tự phản hồi, và báo cáo lỗi nhất quán.

**Lợi Ích**:

- Tự động khám phá công cụ
- Lựa chọn công cụ thông minh
- Phản hồi có cấu trúc, có thể parse
- Nhanh hơn điều phối subagent
- Không có sự mơ hồ ngôn ngữ tự nhiên

### Phương Thức 2: Scripts CLI Trực Tiếp (Phụ)

Dùng khi bạn cần kiểm soát công cụ/server cụ thể:

```bash
# Điều hướng đến thư mục scripts
cd .claude/skills/mcp-management/scripts

# Cài đặt dependencies (lần đầu)
npm install

# Liệt kê tất cả công cụ có sẵn (lưu vào assets/tools.json)
npx tsx cli.ts list-tools

# Liệt kê prompts và resources
npx tsx cli.ts list-prompts
npx tsx cli.ts list-resources

# Thực thi công cụ cụ thể
npx tsx cli.ts call-tool memory create_entities '{"entities":[{"name":"Project","type":"project","observations":["Uses React"]}]}'
```

Lệnh `list-tools` lưu catalog công cụ hoàn chỉnh vào `assets/tools.json` với đầy đủ schemas, giúp duyệt các công cụ có sẵn offline dễ dàng.

### Phương Thức 3: Thực Thi Dựa Trên Subagent (Dự Phòng)

Dùng khi Gemini CLI không có sẵn hoặc khi cần ủy quyền hiệu quả context.

Subagent `mcp-manager` dùng skill này để:

- Kiểm tra tính khả dụng của Gemini CLI trước
- Thực thi qua lệnh `gemini` nếu có sẵn
- Fallback sang thực thi script trực tiếp
- Khám phá khả năng MCP mà không tải vào context chính
- Báo cáo kết quả lại cho agent chính

Điều này giữ context của agent chính sạch sẽ.

## Khả Năng Cốt Lõi

### Khám Phá Khả Năng

Khám phá những gì có sẵn trên tất cả MCP servers đã cấu hình:

```bash
cd .claude/skills/mcp-management/scripts

# Liệt kê tất cả công cụ (lưu vào assets/tools.json)
npx tsx cli.ts list-tools

# Liệt kê prompts có sẵn
npx tsx cli.ts list-prompts

# Liệt kê resources có sẵn
npx tsx cli.ts list-resources
```

Đầu ra bao gồm nhận dạng server để bạn biết server nào cung cấp khả năng nào.

### Catalog Công Cụ Persistent

Lệnh `list-tools` tự động lưu catalog công cụ hoàn chỉnh vào `assets/tools.json`:

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

**Lợi Ích**:

- Tham chiếu offline nhanh
- Theo dõi kiểm soát phiên bản
- Không cần kết nối lại với servers để khám phá công cụ
- LLM có thể phân tích JSON trực tiếp để lựa chọn công cụ thông minh

### Lựa Chọn Công Cụ Thông Minh

Thay vì dùng thuật toán khớp từ khóa, để LLM phân tích `assets/tools.json` trực tiếp:

```bash
# Tạo catalog công cụ
npx tsx cli.ts list-tools

# LLM đọc assets/tools.json và chọn công cụ liên quan
# Điều này hiểu ngữ cảnh, từ đồng nghĩa và ý định tốt hơn khớp từ khóa
```

### Điều Phối Multi-Server

Phối hợp công cụ trên nhiều servers. Mỗi công cụ biết server nguồn để định tuyến đúng:

```bash
# Thực thi công cụ từ server cụ thể
npx tsx cli.ts call-tool filesystem read_file '{"path":"/file.txt"}'

# Thực thi công cụ từ server khác
npx tsx cli.ts call-tool memory create_entities '{"entities":[...]}'
```

## Định Dạng Phản Hồi Có Cấu Trúc

File `GEMINI.md` trong project root thực thi các phản hồi JSON có cấu trúc khi dùng Gemini CLI:

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

**Lợi Ích**:

- Đầu ra có thể parse theo chương trình
- Báo cáo lỗi nhất quán
- Cấu hình DRY (định dạng định nghĩa một lần)
- Hiệu quả context (tự động tải bởi Gemini CLI)

## Ví Dụ Thực Tế

### Chụp Ảnh Màn Hình Website

Dùng Gemini CLI (giả sử puppeteer MCP server đã cấu hình):

```bash
echo "Take a full-page screenshot of https://docs.claudekit.cc and save it to screenshot.png. Return JSON only per GEMINI.md instructions." | gemini -y -m gemini-2.5-flash
```

Phản hồi:

```json
{
  "server": "puppeteer",
  "tool": "screenshot",
  "success": true,
  "result": "screenshot.png",
  "error": null
}
```

### Lưu Trữ Thông Tin Trong Memory

Dùng scripts CLI trực tiếp:

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

### Khám Phá Các Công Cụ Có Sẵn

Tạo catalog hoàn chỉnh của tất cả công cụ có sẵn:

```bash
cd .claude/skills/mcp-management/scripts

# Liệt kê và lưu tất cả công cụ
npx tsx cli.ts list-tools

# Đầu ra được lưu vào assets/tools.json

# Bây giờ đọc catalog
cat assets/tools.json | jq '.[] | {server: .server, tools: .tools[].name}'
```

### Ủy Quyền Nhiệm Vụ Hiệu Quả Context

Để subagent `mcp-manager` xử lý các thao tác MCP:

```bash
# Từ agent chính, ủy quyền cho mcp-manager
# Điều này giữ context chính sạch sẽ

# mcp-manager kiểm tra tính khả dụng Gemini CLI
# Nếu có sẵn: dùng phương thức echo "..." | gemini
# Nếu không: dùng scripts CLI trực tiếp
# Báo cáo kết quả có cấu trúc lại
```

## Quản Lý Cấu Hình

### Nguồn Sự Thật Duy Nhất

Các MCP servers được định nghĩa trong `.claude/.mcp.json`:

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

### Tích Hợp Gemini CLI

Tạo symlink để chia sẻ cấu hình:

```bash
mkdir -p .gemini
ln -sf .claude/.mcp.json .gemini/settings.json
```

Bây giờ Gemini CLI và ClaudeKit dùng cùng cấu hình MCP server.

### Định Dạng Phản Hồi GEMINI.md

File `GEMINI.md` thực thi cấu trúc phản hồi. Gemini CLI tự động tải file này từ project root.

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

## Chiến Lược Tích Hợp

### Ưu Tiên Thực Thi

1. **Gemini CLI** (Chính): Nhanh, tự động, thông minh
   - Kiểm tra: `command -v gemini`
   - Thực thi: `echo "<task>" | gemini -y -m gemini-2.5-flash`
   - Tốt nhất cho: Tất cả nhiệm vụ khi có sẵn

2. **Scripts CLI Trực Tiếp** (Phụ): Kiểm soát thủ công
   - Dùng khi: Cần kiểm soát công cụ/server cụ thể
   - Thực thi: `npx tsx scripts/cli.ts call-tool <server> <tool> <args>`

3. **Subagent mcp-manager** (Dự Phòng): Hiệu quả context
   - Dùng khi: Gemini không có sẵn hoặc cần quản lý context
   - Giữ context chính sạch sẽ

### Tích Hợp Với Agents

Subagent `mcp-manager` dùng skill này để:

- Kiểm tra tính khả dụng Gemini CLI
- Thực thi qua lệnh `gemini` nếu có sẵn
- Fallback sang scripts trực tiếp
- Khám phá khả năng MCP mà không làm ô nhiễm context chính
- Báo cáo kết quả có cấu trúc lại

Điều này cho phép tích hợp MCP hiệu quả trong các quy trình agent.

## Tham Chiếu Scripts

Tất cả scripts trong `.claude/skills/mcp-management/scripts/`:

### mcp-client.ts

Lớp quản lý MCP client cốt lõi. Xử lý:

- Tải config từ `.claude/.mcp.json`
- Kết nối với nhiều MCP servers
- Liệt kê công cụ/prompts/resources trên tất cả servers
- Thực thi công cụ với xử lý lỗi phù hợp
- Quản lý vòng đời kết nối

### cli.ts

Giao diện dòng lệnh cho các thao tác MCP:

```bash
# Liệt kê khả năng
npx tsx cli.ts list-tools      # Lưu vào assets/tools.json
npx tsx cli.ts list-prompts
npx tsx cli.ts list-resources

# Thực thi công cụ
npx tsx cli.ts call-tool <server> <tool> '<json-args>'
```

## Thực Hành Tốt Nhất

**Dùng Gemini CLI Khi Có Sẵn**: Đây là phương thức nhanh nhất với lựa chọn công cụ tự động và phản hồi có cấu trúc.

**Luôn Dùng Stdin Piping**: Không bao giờ dùng `gemini -p "prompt"`. Dùng `echo "prompt" | gemini` thay thế. Flag `-p` bỏ qua khởi tạo MCP.

**Thêm Lời Nhắc Định Dạng Phản Hồi**: Bao gồm "Return JSON only per GEMINI.md instructions" trong prompts để thực thi đầu ra có cấu trúc.

**Tạo Catalog Công Cụ**: Chạy `list-tools` để tạo `assets/tools.json` để tham chiếu offline nhanh và phân tích LLM.

**Để LLMs Phân Tích Công Cụ**: Thay vì khớp từ khóa, để LLM đọc `assets/tools.json` để chọn công cụ liên quan thông minh.

**Ủy Quyền Cho Subagents**: Cho các quy trình MCP phức tạp, dùng subagent `mcp-manager` để giữ context chính sạch sẽ.

## Chi Tiết Kỹ Thuật

Để hiểu sâu hơn về giao thức MCP, xem `references/mcp-protocol.md`:

- Chi tiết giao thức JSON-RPC
- Các loại và định dạng message
- Mã lỗi và xử lý
- Cơ chế transport (stdio, HTTP+SSE)
- Best practices

Tài liệu tham chiếu này trong Engineer Kit tại `../claudekit-engineer/.claude/skills/mcp-management/references/`.

## Skills và Lệnh Liên Quan

Kết hợp MCP Management với:

- [MCP Builder](/vi/docs/engineer/skills/mcp-builder) - Xây dựng MCP servers trước khi quản lý chúng
- [AI Multimodal](/vi/docs/engineer/skills/ai-multimodal) - Một số MCP servers có thể phơi bày khả năng Gemini
- [Chrome DevTools](/vi/docs/engineer/skills/chrome-devtools) - Puppeteer MCP servers cung cấp tự động hóa trình duyệt

## Nguyên Tắc Cốt Lõi

MCP Management cho phép progressive disclosure: khám phá những gì có sẵn, chỉ tải những gì bạn cần, thực thi có cấu trúc, giữ context sạch sẽ.

Dùng Gemini CLI để thực thi tự động, scripts trực tiếp để kiểm soát thủ công, và subagents để hiệu quả context. Luôn thực thi các phản hồi JSON có cấu trúc để parse theo chương trình.
