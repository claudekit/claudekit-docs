---
title: Các Agent (Tổng quan)
description: Hiểu về 14 agent chuyên biệt của ClaudeKit và cách chúng phối hợp làm việc cùng nhau
section: engineer
kit: engineer
category: agents
order: 1
published: true
lang: vi
---

# Tổng quan về các Agent

ClaudeKit bao gồm 14 agent chuyên biệt làm việc cùng nhau để xử lý mọi khía cạnh của quá trình phát triển phần mềm. Mỗi agent được tối ưu hóa cho các nhiệm vụ cụ thể và tuân theo các quy trình làm việc (workflows) đã được thiết lập.

## 14 Agent Chuyên biệt

### Nhóm Phát triển
1. **[planner](/vi/docs/engineer/agents/planner)** - Nghiên cứu, phân tích và tạo kế hoạch triển khai.
2. **[scout](/vi/docs/engineer/agents/scout)** - Nhanh chóng định vị các tệp liên quan bằng tìm kiếm song song.
3. **[debugger](/vi/docs/engineer/agents/debugger)** - Điều tra vấn đề, phân tích nhật ký, chẩn đoán lỗi.
4. **[tester](/vi/docs/engineer/agents/tester)** - Xác nhận chất lượng mã nguồn thông qua kiểm thử toàn diện.

### Nhóm Đảm bảo Chất lượng
5. **[code-reviewer](/vi/docs/engineer/agents/code-reviewer)** - Xem xét mã nguồn và đánh giá chất lượng toàn diện.

### Nhóm Tài liệu & Quản lý Dự án
6. **[docs-manager](/vi/docs/engineer/agents/docs-manager)** - Quản lý tài liệu kỹ thuật và các tiêu chuẩn.
7. **[project-manager](/vi/docs/engineer/agents/project-manager)** - Giám sát và điều phối dự án tổng thể.

### Nhóm Sáng tạo & Thiết kế
8. **[ui-ux-designer](/vi/docs/engineer/agents/ui-ux-designer)** - Thiết kế giao diện và trải nghiệm người dùng.
9. **[copywriter](/vi/docs/engineer/agents/copywriter)** - Tạo nội dung marketing chuyển đổi cao.
10. **[brainstormer](/vi/docs/engineer/agents/brainstormer)** - Khám phá ý tưởng và tranh luận các quyết định kỹ thuật.

### Nhóm Nghiên cứu & Viết lách
11. **[researcher](/vi/docs/engineer/agents/researcher)** - Nghiên cứu đa nguồn, phân tích tài liệu và thực hành tốt nhất.
12. **[journal-writer](/vi/docs/engineer/agents/journal-writer)** - Ghi lại hành trình dự án và các khó khăn kỹ thuật.

### Nhóm DevOps & Hạ tầng
13. **[git-manager](/vi/docs/engineer/agents/git-manager)** - Lưu tạm, chuyển giao và đẩy mã nguồn theo chuẩn chuyên nghiệp.
14. **[database-admin](/vi/docs/engineer/agents/database-admin)** - Tối ưu hóa DB, phân tích truy vấn và quản trị.

## Tại sao lại là 14 Agent?

Các agent này được tối ưu hóa dựa trên kinh nghiệm thực tế:
- **Hiệu quả đã được chứng minh**: Được thử nghiệm trong các dự án thực tế.
- **Sự phối hợp tối ưu**: Các agent làm việc cùng nhau một cách liền mạch.
- **Phạm vi bao phủ toàn diện**: Xử lý mọi khía cạnh phát triển.

## Cách các Agent phối hợp

Các agent được ClaudeKit tự động điều phối dựa trên các workflow định trước. Bạn không cần phải điều phối thủ công.

### Ví dụ: Xây dựng một tính năng mới
1. **planner Agent**: Nghiên cứu và tạo kế hoạch.
2. **scout Agent**: Tìm các điểm tích hợp trong mã nguồn.
3. **Triển khai**: Viết mã và tạo kiểm thử.
4. **tester Agent**: Chạy bộ kiểm thử.
5. **code-reviewer Agent**: Xem xét chất lượng và bảo mật.
6. **docs-manager Agent**: Cập nhật tài liệu API và hướng dẫn.
7. **git-manager Agent**: Tạo commit và đẩy mã nguồn.

## Các mô hình điều phối

- **Tuần tự (Mặc định)**: Agent này chạy sau agent kia (planner → code → tester...).
- **Song song**: Nhiều agent chạy đồng thời để có kết quả nhanh hơn (ví dụ: nhiều Scout tìm kiếm cùng lúc).
- **Hỗn hợp**: Kết hợp cả tuần tự và song song cho các tác vụ phức tạp.

## Cách kích hoạt Agent

1. **Tự động (Khuyên dùng)**: ClaudeKit tự động điều phối dựa trên lệnh (`/cook`, `/fix`, v.v.).
2. **Thông qua Lệnh**: Các lệnh cụ thể kích hoạt agent cụ thể (`/test`, `/debug`, `/git cm`).
3. **Trực tiếp (Nâng cao)**: Yêu cầu đích danh agent trong câu lệnh của bạn.

---

**Thông điệp chính**: 14 agent chuyên biệt của ClaudeKit tự động phối hợp thông qua các quy trình làm việc định trước, xử lý mọi khía cạnh phát triển phần mềm từ lập kế hoạch đến triển khai.
