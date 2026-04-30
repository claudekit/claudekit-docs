---
title: "Thiết lập MCP"
description: "Tài liệu hướng dẫn thiết lập MCP (Model Context Protocol)"
section: engineer
kit: engineer
category: configuration
order: 3
published: true
lang: vi
---

# Thiết lập MCP

## Tóm tắt

ClaudeKit định tuyến việc dùng máy chủ MCP (Model Context Protocol) qua `/ck:use-mcp`. Cách làm này giữ manifest công cụ ngoài agent chính cho đến khi tác vụ thật sự cần MCP.

---

## Các bước cấu hình

1. **Sao chép tệp cấu hình mẫu**
   ```bash
   cp .claude/.mcp.json.example .claude/.mcp.json
   ```
2. **Tùy biến danh sách MCP**
   - Xóa các máy chủ mẫu: `context7`, `human-mcp`, `chrome-devtools`, `sequential-thinking`.
   - Chỉ thêm những máy chủ MCP thực sự cần thiết để hạn chế tiêu tốn token.
3. **Lưu tệp cấu hình** để `/ck:use-mcp` có thể khởi tạo MCP Client từ `.claude/.mcp.json` khi cần.

> 💡 Đặt `.claude/.mcp.json` ngoài nội dung prompt chính để agent cốt lõi không tải manifest MCP ngay từ đầu.

---

## Sử dụng công cụ MCP

Kích hoạt các công cụ đã cấu hình thông qua lệnh `/ck:use-mcp`:

```bash
/ck:use-mcp <chỉ-dẫn>
```

**Ví dụ**

```bash
/ck:use-mcp Dùng chrome-devtools mcp để chụp ảnh màn hình google.com
```

ClaudeKit nạp cấu hình MCP, phân tích các công cụ khả dụng, chọn phương án phù hợp nhất, thực thi và trả kết quả về phiên làm việc chính.

---

## Phân tích kỹ thuật

![Kiến trúc proxy MCP](/assets/mcp-proxy.jpeg)

### Vì sao chọn kiến trúc này?

Bài viết “Code Execution with MCP” của Anthropic gợi ý một hướng tiếp cận nhẹ: mỗi subagent có context riêng. Nếu nạp trực tiếp manifest MCP vào agent chính, context sẽ phình to rất nhanh—đặc biệt với các máy chủ như Chrome DevTools hoặc Playwright. Chuyển chúng sang subagent giúp hội thoại chính giữ được sự trong trẻo dù bạn cấu hình hàng chục MCP.

![Cô lập context](/assets/05-mcp-context.jpg)

### Cơ chế hoạt động

1. Kỹ năng **use-mcp** chỉ đọc `.claude/.mcp.json` khi tác vụ yêu cầu truy cập MCP.
2. Nó có thể dùng luồng LLM để chọn tool linh hoạt hoặc scripts xác định cho quy trình liệt kê/gọi tool trực tiếp.
3. Khi được kích hoạt, kỹ năng sẽ:
   - Đọc `.claude/.mcp.json`.
   - Kết nối tới các máy chủ MCP đã khai báo.
   - Liệt kê công cụ, chọn phương án phù hợp với yêu cầu.
   - Gọi công cụ và truyền kết quả về agent chính.

Kết quả: context chính vẫn sạch nhưng bạn vẫn khai thác trọn vẹn sức mạnh của MCP. (Bạn *có thể* đăng ký 80 MCP, nhưng hãy chỉ thêm những gì thật sự cần thiết!)

### Tối ưu nâng cao

Ngay cả khi cô lập bằng subagent, việc duyệt quá nhiều công cụ MCP vẫn tốn token. Để giảm chi phí, ClaudeKit có thể chuyển phần orchestration nặng nề sang **gemini-cli**, tận dụng một runtime rẻ hơn mà vẫn giữ cuộc trò chuyện chính tập trung.

---

## Bước tiếp theo

- Cập nhật `.claude/.mcp.json` theo nhu cầu công cụ thực tế.
- Quản lý phiên bản một cách riêng tư nếu tệp chứa endpoint hoặc thông tin nhạy cảm.
- Kết hợp `/ck:use-mcp` với các lệnh tự động như `/ck:cook`, `/ck:fix`, `/ck:plan` để dùng song song công cụ tùy chỉnh và agent gốc của ClaudeKit.

Bạn sẽ tận dụng được lợi thế của MCP mà không lo phình to context chính.
