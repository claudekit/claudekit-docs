---
title: Kỹ năng xây dựng MCP (mcp-builder)
description: Tài liệu hướng dẫn sử dụng kỹ năng mcp-builder
section: engineer
kit: engineer
category: skills/tools
order: 13
published: true
lang: vi
---

# Kỹ năng xây dựng MCP (mcp-builder)

Xây dựng các máy chủ MCP (Model Context Protocol) chất lượng cao cho phép Claude tương tác với các dịch vụ bên ngoài thông qua các công cụ được thiết kế bài bản.

## MCP là gì?

Giao thức ngữ cảnh mô hình (Model Context Protocol) cho phép Claude:
- Gọi các API bên ngoài
- Truy cập cơ sở dữ liệu
- Đọc/ghi tệp tin
- Tương tác với các dịch vụ
- Thực thi các công cụ (tools)
- Lấy các tài nguyên (resources)

## Khi nào nên sử dụng

Sử dụng mcp-builder khi tạo các máy chủ MCP cho:
- Tích hợp API tùy chỉnh
- Truy cập cơ sở dữ liệu
- Các thao tác với hệ thống tệp tin
- Kết nối các dịch vụ bên ngoài
- Các công cụ tùy chỉnh cho Claude
- Các nhà cung cấp tài nguyên

## Bắt đầu nhanh

### Cách gọi kỹ năng

```
"Sử dụng mcp-builder để tạo máy chủ MCP cho Stripe API với:
- Các công cụ thanh toán
- Quản lý gói đăng ký
- Xử lý webhook
- Triển khai bằng TypeScript"
```

### Kết quả nhận được

Kỹ năng này sẽ giúp bạn:
1. Thiết kế kiến trúc máy chủ
2. Tạo các định nghĩa công cụ (tool definitions)
3. Triển khai các trình xử lý (handlers)
4. Thêm xác thực
5. Xử lý lỗi đúng cách
6. Viết tài liệu hướng dẫn
7. Thiết lập kiểm thử (testing)

## Các trường hợp sử dụng phổ biến

### Tích hợp API

```
"Sử dụng mcp-builder để tạo máy chủ MCP cho GitHub API:
- Quản lý kho lưu trữ
- Theo dõi vấn đề (issues)
- Các công cụ pull request
- Xác thực bằng mã thông báo (tokens)"
```

### Truy cập cơ sở dữ liệu

```
"Sử dụng mcp-builder cho máy chủ MCP PostgreSQL:
- Thực thi truy vấn
- Kiểm tra cấu trúc schema
- Nhóm kết nối (connection pooling)
- An toàn với chế độ chỉ đọc"
```

### Hệ thống tệp tin

```
"Sử dụng mcp-builder để tạo máy chủ MCP quản lý tệp tin:
- Đọc/ghi tệp tin
- Các thao tác thư mục
- Tính năng tìm kiếm
- Xử lý đường dẫn an toàn"
```

### Các công cụ tùy chỉnh

```
"Sử dụng mcp-builder cho logic kinh doanh tùy chỉnh:
- Tạo hóa đơn
- Tạo báo cáo
- Biến đổi dữ liệu
- Tự động hóa quy trình công việc"
```

## Các loại máy chủ MCP

### Python (FastMCP)

```
"Sử dụng mcp-builder để tạo máy chủ MCP Python với FastMCP:
- Các trình trang trí công cụ (tool decorators)
- Các trình xử lý tài nguyên
- Gợi ý kiểu dữ liệu (type hints)
- Các thao tác bất đồng bộ (async)"
```

**Tốt nhất cho:**
- Xử lý dữ liệu
- Tích hợp ML/AI
- Tính toán khoa học
- Các công cụ trong hệ sinh thái Python

### TypeScript (MCP SDK)

```
"Sử dụng mcp-builder để tạo máy chủ MCP TypeScript:
- An toàn kiểu dữ liệu (type safety)
- Sử dụng async/await hiện đại
- Hệ sinh thái NPM
- Dễ dàng triển khai"
```

**Tốt nhất cho:**
- Các bản bao bọc API (API wrappers)
- Dịch vụ web
- Tích hợp Node.js
- Các công cụ JavaScript

## Các thành phần chính

### Công cụ (Tools)

Các hàm mà Claude có thể gọi:
- Cấu trúc đầu vào (Input schema)
- Định dạng đầu ra
- Xử lý lỗi
- Tài liệu hướng dẫn

### Tài nguyên (Resources)

Dữ liệu mà Claude có thể đọc:
- Các URI
- Các loại nội dung
- Cập nhật động
- Siêu dữ liệu (metadata)

### Lời nhắc (Prompts)

Các mẫu mà Claude có thể sử dụng:
- Các lời nhắc đã được định nghĩa sẵn
- Tiêm tham số (parameter injection)
- Xây dựng ngữ cảnh

## Ví dụ triển khai

### Tích hợp Stripe

```
"Sử dụng mcp-builder để tạo máy chủ MCP Stripe với các công cụ cho:
- Tạo khách hàng
- Tạo gói đăng ký
- Xử lý thanh toán
- Xử lý webhook
- Liệt kê các giao dịch"
```

### Tích hợp Slack

```
"Sử dụng mcp-builder cho máy chủ MCP Slack:
- Gửi tin nhắn
- Liệt kê các kênh
- Tìm kiếm tin nhắn
- Tải tệp lên
- Phản hồi tin nhắn"
```

### Các công cụ cơ sở dữ liệu

```
"Sử dụng mcp-builder cho máy chủ MCP cơ sở dữ liệu:
- Thực thi truy vấn
- Lấy thông tin schema
- Chạy các bản di cư (migrations)
- Sao lưu dữ liệu
- Kiểm tra an toàn"
```

### Xử lý tệp tin

```
"Sử dụng mcp-builder để tạo bộ xử lý tài liệu:
- Trích xuất PDF
- Chuyển đổi hình ảnh
- Phân tích văn bản
- Chuyển đổi định dạng"
```

## Phương pháp hay nhất

### Thiết kế công cụ

Kỹ năng này đảm bảo:
- Tên công cụ rõ ràng
- Các tham số mang tính mô tả
- Xác thực đầu vào phù hợp
- Thông báo lỗi tốt
- Tài liệu đầy đủ

### Bảo mật

Triển khai:
- Xác thực (Authentication)
- Ủy quyền (Authorization)
- Làm sạch đầu vào (sanitization)
- Giới hạn tốc độ (rate limiting)
- Các thiết lập mặc định an toàn

### Xử lý lỗi

Cung cấp:
- Thông báo lỗi rõ ràng
- Mã lỗi phù hợp
- Gợi ý khôi phục
- Ghi nhật ký (logging)
- Xử lý thất bại êm ái

### Tài liệu hướng dẫn

Tạo ra:
- Mô tả công cụ
- Tài liệu về tham số
- Ví dụ sử dụng
- Hướng dẫn thiết lập
- Xử lý sự cố

## Các tính năng nâng cao

### Xác thực

```
"Sử dụng mcp-builder để thêm xác thực:
- Xác thực khóa API
- Luồng OAuth2
- Làm mới mã thông báo (token refresh)
- Quản lý phiên làm việc"
```

### Lưu bộ nhớ đệm (Caching)

```
"Sử dụng mcp-builder để triển khai bộ nhớ đệm:
- Lưu bộ nhớ đệm phản hồi
- Vô hiệu hóa bộ nhớ đệm
- Cấu hình TTL (thời gian sống)
- Tối ưu hóa hiệu suất"
```

### Giới hạn tốc độ (Rate Limiting)

```
"Sử dụng mcp-builder để thêm giới hạn tốc độ:
- Giới hạn trên mỗi người dùng
- Giới hạn điểm cuối (endpoint)
- Logic thử lại
- Chiến lược backoff"
```

### Webhook

```
"Sử dụng mcp-builder để xử lý webhook:
- Xác minh chữ ký
- Xử lý sự kiện
- Xử lý bất đồng bộ
- Khôi phục sau lỗi"
```

## Quy trình phát triển

### 1. Giai đoạn thiết kế

```
"Sử dụng mcp-builder để thiết kế máy chủ MCP:
- Định nghĩa các công cụ cần thiết
- Chỉ định đầu vào/đầu ra
- Lập kế hoạch xác thực
- Tài liệu hóa API"
```

### 2. Triển khai

```
"Sử dụng mcp-builder để triển khai:
- Tạo cấu trúc máy chủ
- Triển khai các công cụ
- Thêm xử lý lỗi
- Viết các bản kiểm thử"
```

### 3. Kiểm thử

```
"Sử dụng mcp-builder để kiểm thử máy chủ:
- Kiểm thử đơn vị cho các công cụ
- Kiểm thử tích hợp
- Các kịch bản lỗi
- Kiểm thử hiệu suất"
```

### 4. Triển khai (Deployment)

```
"Sử dụng mcp-builder để triển khai:
- Đóng gói máy chủ
- Cấu hình
- Giám sát
- Tài liệu hướng dẫn"
```

## Kiểm thử (Testing)

### Kiểm thử đơn vị (Unit Tests)

```
"Sử dụng mcp-builder để tạo các bản kiểm thử cho:
- Mỗi hàm công cụ
- Các điều kiện lỗi
- Xác thực đầu vào
- Định dạng đầu ra"
```

### Kiểm thử tích hợp (Integration Tests)

```
"Sử dụng mcp-builder để kiểm thử tích hợp:
- Các cuộc gọi API thực tế
- Luồng xác thực
- Xử lý lỗi
- Các trường hợp biên (edge cases)"
```

## Cấu hình

### Claude Desktop

```json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["path/to/server.js"]
    }
  }
}
```

### Biến môi trường

```
"Sử dụng mcp-builder để cấu hình:
- Các khóa API
- Các URL cơ sở dữ liệu
- Các điểm cuối dịch vụ
- Các cờ tính năng (feature flags)"
```

## Xử lý sự cố

### Các vấn đề thường gặp

**Máy chủ không kết nối được**
- Kiểm tra đường dẫn cấu hình
- Xác minh máy chủ đã khởi động
- Xem lại nhật ký (logs)

**Công cụ không xuất hiện**
- Kiểm tra định nghĩa công cụ
- Xác minh định dạng schema
- Xem lại tài liệu hướng dẫn

**Xác thực không thành công**
- Xác minh thông tin đăng nhập
- Kiểm tra định dạng mã thông báo
- Xem lại luồng xác thực

## Ví dụ nhanh

**Bản bao bọc API đơn giản:**
```
"Sử dụng mcp-builder để bao bọc REST API thành máy chủ MCP"
```

**Các công cụ cơ sở dữ liệu:**
```
"Sử dụng mcp-builder cho các công cụ truy vấn PostgreSQL với tính năng an toàn chỉ đọc"
```

**Logic kinh doanh tùy chỉnh:**
```
"Sử dụng mcp-builder để tạo máy chủ MCP cho:
- Tạo hóa đơn
- Tính thuế
- Gửi thông báo
- Cập nhật hồ sơ"
```

**Tích hợp đa dịch vụ:**
```
"Sử dụng mcp-builder để kết hợp:
- GitHub API
- Jira API
- Thông báo Slack
- Thành một máy chủ MCP duy nhất"
```

## Tài nguyên

- [Thông số kỹ thuật MCP](https://modelcontextprotocol.io)
- [FastMCP (Python)](https://github.com/jlowin/fastmcp)
- [MCP SDK (TypeScript)](https://github.com/modelcontextprotocol/typescript-sdk)

## Bước tiếp theo

- [Ví dụ về các công cụ tùy chỉnh](/docs/use-cases/)
- [Hướng dẫn tích hợp API](/docs/use-cases/)
- [Kỹ năng cơ sở dữ liệu](/docs/engineer/skills/postgresql-psql)

---

**Tóm lại:** mcp-builder tạo ra các máy chủ MCP sẵn sàng cho môi trường sản xuất. Chỉ cần mô tả các công cụ bạn cần và kỹ năng này sẽ xử lý việc triển khai.
