---
title: "Thiết lập MCP"
description: "Tài liệu hướng dẫn thiết lập MCP (Model Context Protocol)"
section: engineer
kit: engineer
category: docs/configuration
order: 3
published: true
lang: vi
---

# Thiết lập MCP

## Tóm tắt

ClaudeKit chuyển việc quản lý các máy chủ MCP (Model Context Protocol) cho **mcp-manager** – một subagent chuyên trách. Cách làm này tách toàn bộ manifest của công cụ ra khỏi agent chính, giúp giữ context gọn nhẹ mà vẫn tận dụng được các tích hợp sâu.

---

## Các bước cấu hình

1. **Sao chép tệp cấu hình mẫu**
   ```bash
   cp .claude/.mcp.json.example .claude/.mcp.json
   ```
2. **Tùy biến danh sách MCP**
   - Xóa các máy chủ mẫu: `context7`, `human-mcp`, `chrome-devtools`, `sequential-thinking`.
   - Chỉ thêm những máy chủ MCP thực sự cần thiết để hạn chế tiêu tốn token.
3. **Lưu tệp cấu hình** để subagent có thể khởi tạo MCP Client từ `.claude/.mcp.json` khi cần.

> 💡 Đặt `.claude/.mcp.json` ngoài nội dung prompt chính để agent cốt lõi không tải manifest MCP ngay từ đầu.

---

## Sử dụng công cụ MCP

Kích hoạt các công cụ do subagent quản lý thông qua lệnh `/ck:use-mcp`:

```bash
/ck:use-mcp <chỉ-dẫn>
```

**Ví dụ**

```bash
/ck:use-mcp Dùng chrome-devtools mcp để chụp ảnh màn hình google.com
```

ClaudeKit sẽ gọi **mcp-manager**, nạp cấu hình MCP, phân tích các công cụ khả dụng, chọn phương án phù hợp nhất, thực thi và trả kết quả về phiên làm việc chính.

---

## Phân tích kỹ thuật

![Kiến trúc proxy MCP](/assets/mcp-proxy.jpeg)

### Vì sao chọn kiến trúc này?

Bài viết “Code Execution with MCP” của Anthropic gợi ý một hướng tiếp cận nhẹ: mỗi subagent có context riêng. Nếu nạp trực tiếp manifest MCP vào agent chính, context sẽ phình to rất nhanh—đặc biệt với các máy chủ như Chrome DevTools hoặc Playwright. Chuyển chúng sang subagent giúp hội thoại chính giữ được sự trong trẻo dù bạn cấu hình hàng chục MCP.

![Cô lập context](/assets/05-mcp-context.jpg)

### Cơ chế hoạt động

1. Bộ kỹ năng **mcp-management** lưu các đoạn script khởi tạo MCP Client từ `.claude/.mcp.json`.
2. Subagent **mcp-manager** được cấp các kỹ năng này và chỉ chạy khi có lệnh `/ck:use-mcp`.
3. Khi được kích hoạt, subagent sẽ:
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
