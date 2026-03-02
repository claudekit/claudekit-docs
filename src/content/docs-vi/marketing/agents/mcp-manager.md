---
title: "MCP Manager Agent"
lang: vi
description: "Quản lý các tích hợp server Model Context Protocol và thực thi MCP tools một cách hiệu quả."
section: marketing
category: agents
order: 8
---

# MCP Manager Agent

> **Chuyên gia tích hợp của bạn** - Kết nối Marketing Kit với các dịch vụ bên ngoài thông qua MCP server

## Agent Này Làm Gì

Bạn muốn tự động chụp ảnh màn hình, truy cập dữ liệu Google Analytics, hoặc tương tác với thiết kế Figma. Nhưng mỗi công cụ đòi hỏi thiết lập, xác thực và cú pháp lệnh khác nhau. Việc quản lý các tích hợp này rất phức tạp và dễ xảy ra lỗi.

**Vấn đề**: Các workflow marketing hiện đại phụ thuộc vào nhiều dịch vụ bên ngoài—nền tảng phân tích, công cụ thiết kế, tự động hóa trình duyệt, API. Tích hợp từng dịch vụ có nghĩa là học SDK của nó, xử lý xác thực và viết code tùy chỉnh.

**Giải pháp**: MCP Manager Agent xử lý tất cả các tích hợp server Model Context Protocol (MCP). Nó khám phá các tool có sẵn, thực thi chúng hiệu quả qua Gemini CLI hoặc script trực tiếp, và trả về kết quả gọn gàng. Bạn truy cập các dịch vụ bên ngoài mạnh mẽ với các lệnh đơn giản.

## Bắt Đầu Nhanh

Thực thi MCP tools qua manager:

```bash
# Chụp ảnh màn hình với browser automation
/mcp "Take screenshot of claudekit.cc homepage"
```

Manager xử lý việc khám phá tool, thực thi qua phương pháp tối ưu (Gemini CLI trước, script dự phòng), và trả về kết quả.

## Khả Năng

### Quản Lý MCP Server
Khám phá và quản lý các dịch vụ tích hợp:
- Liệt kê tất cả MCP server có sẵn
- Khám phá các tool mỗi server cung cấp
- Truy cập prompt và tài nguyên từ server
- Xử lý xác thực tự động
- Quản lý kết nối server và tình trạng hoạt động

### Chiến Lược Thực Thi Thông Minh
Chọn phương pháp thực thi tối ưu:
- **Chính**: Gemini CLI (nhanh nhất, cửa sổ context 2M)
- **Phụ**: Script TypeScript trực tiếp
- **Dự phòng**: Báo cáo lỗi với hướng dẫn
- Tự động chuyển đổi dự phòng giữa các phương pháp
- Thực thi tiết kiệm context

### Phối Hợp Đa Server
Làm việc trên nhiều MCP server:
- Google Analytics (traffic, conversion, event)
- Google Search Console (hiệu suất tìm kiếm, xếp hạng)
- Browser Automation (chụp ảnh màn hình, testing)
- Figma (truy cập thiết kế, export asset)
- Các server tùy chỉnh bạn cấu hình

### Tổng Hợp Kết Quả
Cung cấp đầu ra gọn gàng, có thể thực hiện:
- Trạng thái thực thi (thành công/thất bại)
- Đầu ra tool hoặc dữ liệu
- Đường dẫn file cho asset được tạo (ảnh màn hình, v.v.)
- Thông báo lỗi với hướng dẫn khắc phục sự cố
- Số liệu hiệu suất

## Khi Nào Nên Dùng

Sử dụng MCP Manager Agent khi bạn cần:
- Chụp ảnh màn hình để testing hoặc tài liệu
- Truy cập dữ liệu Google Analytics hoặc Search Console
- Export asset từ thiết kế Figma
- Tự động hóa tương tác trình duyệt
- Thực thi bất kỳ MCP server tool nào
- Tích hợp dịch vụ bên ngoài vào workflow

## Workflow Mẫu

### Chụp Ảnh Màn Hình

```bash
/mcp "Capture full-page screenshot of claudekit.cc/docs"
```

**Manager sẽ**:
1. Kiểm tra Gemini CLI có sẵn không
2. Thiết lập symlink MCP server nếu cần
3. Thực thi qua Gemini: `gemini -y -m gemini-2.5-flash -p "Take screenshot of https://claudekit.cc/docs"`
4. Trả về đường dẫn file ảnh màn hình
5. Nếu Gemini không khả dụng, chuyển sang thực thi script trực tiếp

### Dữ Liệu Google Analytics

```bash
/mcp "Get website sessions by source for last 30 days from Google Analytics"
```

**Bạn sẽ nhận được**:
```
Sessions by source (last 30 days):
- Organic: 12,450 sessions
- Direct: 8,320 sessions
- Social: 3,102 sessions
- Referral: 1,890 sessions
- Paid: 945 sessions

Data from: google-analytics MCP server
```

### Export Asset Figma

```bash
/mcp "Export logo assets from Figma design file"
```

**Trả về**: Các file PNG/SVG đã export với đường dẫn để sử dụng trong dự án.

## Phương Pháp Thực Thi

### Phương Pháp 1: Gemini CLI (Chính)

Nhanh nhất và nhận thức context tốt nhất:
```bash
# Kiểm tra tính khả dụng
command -v gemini >/dev/null 2>&1

# Thiết lập symlink config MCP
mkdir -p .gemini && ln -sf .claude/.mcp.json .gemini/settings.json

# Thực thi tác vụ
gemini -y -m gemini-2.5-flash -p "Take screenshot of example.com"
```

**Ưu điểm**:
- Cửa sổ context 2M token
- Mô tả tác vụ bằng ngôn ngữ tự nhiên
- Xử lý các tác vụ phức tạp đa bước
- Tự động khám phá và chuỗi tool

### Phương Pháp 2: Script Trực Tiếp (Dự Phòng)

Khi Gemini không khả dụng:
```bash
npx tsx .claude/skills/mcp-management/scripts/cli.ts call-tool \
  <server-name> <tool-name> '<json-args>'
```

**Ví dụ**:
```bash
npx tsx cli.ts call-tool human-mcp playwright_screenshot_fullpage \
  '{"url":"https://claudekit.cc"}'
```

## Cấu Hình MCP Server

Cấu hình server trong `.claude/.mcp.json`:

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

## MCP Server Có Sẵn

Marketing Kit hỗ trợ:

**Analytics & SEO**:
- `google-analytics` - GA4 traffic, conversion, event
- `google-search-console` - Hiệu suất tìm kiếm, xếp hạng

**Design & Asset**:
- `figma` - Truy cập thiết kế, export asset
- `image-processing` - Các thao tác ImageMagick

**Browser Automation**:
- `puppeteer` - Chụp ảnh màn hình, browser testing
- `playwright` - Tự động hóa trình duyệt nâng cao

**Server Tùy Chỉnh**:
Thêm bất kỳ server tuân thủ MCP vào `.claude/.mcp.json`

## Hiệu Suất

Thực thi được tối ưu:
- Gemini CLI: ~2-5 giây cho tác vụ đơn giản
- Script trực tiếp: ~3-8 giây cho cùng tác vụ
- Tự động chuyển dự phòng thêm dưới 1 giây overhead
- Kết quả được cache khi phù hợp

## Agent Liên Quan

- [Analytics Analyst](/vi/docs/marketing/agents/analytics-analyst) - Sử dụng MCP để truy cập dữ liệu
- [UI/UX Designer](/vi/docs/marketing/agents/ui-ux-designer) - Sử dụng MCP để tích hợp Figma
- [Tester](/vi/docs/marketing/agents/tester) - Sử dụng MCP để browser testing

## Lệnh Liên Quan

- [`/mcp`](/vi/docs/marketing/skills) - Thực thi MCP tools
- [`/tools`](/vi/docs/marketing/skills) - Liệt kê các MCP tool có sẵn

## Mẹo

**Ưu Tiên Gemini CLI**: Nếu cả hai đều có sẵn, Gemini CLI nhanh hơn và linh hoạt hơn. Cài đặt Gemini CLI để có trải nghiệm tốt nhất.

**Tác Vụ Ngôn Ngữ Tự Nhiên**: Với Gemini CLI, mô tả tác vụ một cách tự nhiên: "Take screenshot and resize to 1200px wide" hoạt động tốt hơn việc chuỗi tool thủ công.

**Kiểm Tra Tính Khả Dụng**: Chạy `/tools` để xem tất cả MCP tool có sẵn trên các server đã cấu hình.

**Thêm Server Tùy Chỉnh**: Bất kỳ server tuân thủ MCP nào đều hoạt động. Thêm vào `.claude/.mcp.json` và khởi động lại.

## Khắc Phục Sự Cố

**Không tìm thấy Gemini CLI**:
```bash
# Cài đặt Gemini CLI
npm install -g @anthropic-ai/gemini-cli

# Xác minh cài đặt
gemini --version
```

**MCP server không phản hồi**:
```bash
# Kiểm tra cấu hình server
cat .claude/.mcp.json

# Test server trực tiếp
npx <server-command>
```

**Lỗi xác thực**:
- Kiểm tra biến môi trường trong `.env`
- Xác minh API key cho các dịch vụ bên ngoài
- Xem tài liệu xác thực cụ thể của server

MCP Manager làm cho các tích hợp phức tạp trở nên đơn giản. Bạn tập trung vào các tác vụ marketing; manager xử lý độ phức tạp tích hợp kỹ thuật.
