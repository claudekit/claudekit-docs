---
title: "Chuyển Đổi: Commands → Skills"
description: "Hướng dẫn chuyển đổi từ các lệnh slash đã lỗi thời sang skills trong engineer@1.3.0+"
lang: vi
category: "getting-started"
section: "getting-started"
order: 6
published: true
---

## Những Thay Đổi Trong engineer@1.3.0+

Nhiều lệnh slash đã được chuyển đổi thành **skills** tự động kích hoạt hoặc qua ngôn ngữ tự nhiên. Điều này giảm số lượng lệnh và tạo quy trình làm việc trực quan hơn.

**Lệnh vẫn tồn tại** cho các thao tác cốt lõi: lập kế hoạch, khởi tạo, tài liệu, kiểm thử, review code và tiện ích.

---

## Bảng Tham Chiếu Chuyển Đổi

| Lệnh Cũ | Skill Mới | Loại Kích Hoạt |
|----------|-----------|----------------|
| `/code` | `cook` | Linked (tự động kích hoạt) |
| `/cook` | `cook` | Linked (tự động kích hoạt) |
| `/fix` | `fix` | Linked (tự động kích hoạt) |
| `/debug` | `debug` | Linked (tự động kích hoạt) |
| `/scout` | `scout` | Linked (tự động kích hoạt) |
| `/design` | `frontend-design` | Linked (tự động kích hoạt) |
| `/code-review` | `code-review` | Linked (tự động kích hoạt) |
| `/content` | `PowerWriting` | Skill |
| `/brainstorm` | `brainstorm` | Passive (ngôn ngữ tự nhiên) |

---

## Giải Thích Các Loại Kích Hoạt

- **Linked**: Tự động kích hoạt khi phát hiện ngữ cảnh liên quan (ví dụ: `cook` kích hoạt khi triển khai từ plan)
- **Passive**: Kích hoạt qua ngôn ngữ tự nhiên (ví dụ: "brainstorm ý tưởng cho...")
- **Skill**: Tham chiếu rõ ràng bằng tên hoặc ngôn ngữ tự nhiên

---

## Quy Trình Làm Việc Cập Nhật

### Quy Trình Cũ (trước 1.3.0)
```
/plan "feature X"
/code @plans/feature.md
```

### Quy Trình Mới (1.3.0+)
```
/plan "feature X"
/clear
Mô tả task tự nhiên → skill cook tự động kích hoạt từ ngữ cảnh plan
```

**Quan trọng**: Chạy `/clear` sau `/plan` để giải phóng ngữ cảnh trước khi triển khai. Điều này đảm bảo skill `cook` có ngân sách token tối ưu.

---

## Các Lệnh Đang Hoạt Động (không thay đổi)

Các lệnh này vẫn giữ nguyên dạng lệnh slash:

- `/ask` — Đặt câu hỏi về dự án
- `/bootstrap*` — Khởi tạo mẫu dự án
- `/ck-help` — Hệ thống trợ giúp ClaudeKit
- `/coding-level` — Đặt mức độ chi tiết code
- `/docs*` — Tạo tài liệu
- `/journal` — Ghi nhật ký phiên làm việc
- `/kanban` — Quản lý bảng tác vụ
- `/plan*` — Quy trình lập kế hoạch
- `/preview` — Xem trước thay đổi
- `/review:codebase*` — Review codebase
- `/test*` — Quy trình kiểm thử
- `/use-mcp` — Tích hợp MCP
- `/watzup` — Tổng quan trạng thái
- `/worktree` — Quản lý git worktree

---

## Bộ Điều Chỉnh Lệnh (vẫn hoạt động)

Bộ điều chỉnh lệnh áp dụng cho các lệnh đang hoạt động:

- `:fast` — Sử dụng model nhanh hơn
- `:hard` — Sử dụng model khả năng cao nhất
- `:parallel` — Bật thực thi song song
- `:two` — Sử dụng quy trình hai agent

**Ví dụ**: `/plan:hard "feature phức tạp"` vẫn hoạt động.

---

## Mẹo Chuyển Đổi

1. **Đừng ghi nhớ**: Chỉ cần mô tả những gì bạn muốn. Skills tự động kích hoạt.
2. **Sử dụng `/clear` thường xuyên**: Đặc biệt sau `/plan` hoặc trước khi bắt đầu tác vụ mới.
3. **Kiểm tra `/ck-help`**: Liệt kê tất cả lệnh đang hoạt động và skills có sẵn.
4. **Ngôn ngữ tự nhiên trước**: Thử mô tả tác vụ trước khi dùng lệnh.

---

## Ví Dụ Chuyển Đổi

### Trước (1.2.x)
```
/plan "Add authentication"
/code @plans/260129-auth.md
/test
/code-review
```

### Sau (1.3.0+)
```
/plan "Add authentication"
/clear
Implement the authentication plan → skill cook kích hoạt
Run tests → skill test kích hoạt
Review the code → skill code-review kích hoạt
```

Quy trình đơn giản hơn, đàm thoại hơn và cần ít lệnh rõ ràng hơn.
