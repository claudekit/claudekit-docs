---
title: Agent Project Manager
description: Quản lý dự án cao cấp và điều phối hệ thống để lập kế hoạch triển khai, theo dõi tiến độ và điều phối chéo các agent
section: engineer
kit: engineer
category: agents
order: 10
published: true
lang: vi
---

# Agent Project Manager

Agent project-manager là một quản lý dự án cao cấp và là người điều phối hệ thống chịu trách nhiệm phân tích các kế hoạch triển khai, theo dõi tiến độ của tất cả các agent và duy trì sự giám sát toàn diện đối với dự án.

## Mục đích

Phân tích kế hoạch triển khai, theo dõi tiến độ của tất cả các agent, thu thập báo cáo, xác nhận việc hoàn thành nhiệm vụ, cập nhật kế hoạch và duy trì lộ trình dự án (roadmap).

## Mô hình & Công cụ

**Mô hình**: Sonnet (phân tích và điều phối toàn diện)

**Công cụ chính**:
- Quản lý nhiệm vụ: `TodoWrite`
- Phân tích hệ thống: `Glob`, `Grep`, `Read`, `BashOutput`
- Cập nhật tài liệu: `Edit`, `Write`
- Nghiên cứu: `WebSearch`, `WebFetch`

## Khi nào được kích hoạt

Agent project-manager kích hoạt khi:
- Sau khi hoàn thành một tính năng lớn
- Hợp nhất công việc từ nhiều agent
- Xem xét trạng thái dự án
- Khi cần theo dõi tiến độ (lệnh `/watzup`)
- Khi hoàn thành một cột mốc (milestone) quan trọng

## Khả năng

### Phân tích kế hoạch triển khai
Đánh giá tính đầy đủ, rõ ràng của kế hoạch, phân bổ nguồn lực, ước tính thời gian, xác định rủi ro và các điểm phụ thuộc.

### Theo dõi & Quản lý tiến độ
Giám sát trạng thái hoàn thành nhiệm vụ, hoạt động của các agent, tuân thủ dòng thời gian và xác định các điểm nghẽn (blockers).

### Thu thập báo cáo
Tập hợp báo cáo từ tất cả các agent (planner, tester, docs-manager, git-manager) trong thư mục `./plans/reports/` để phân tích sự phối hợp và các chỉ số chất lượng.

### Xác nhận hoàn thành nhiệm vụ
Kiểm tra các tiêu chí chấp nhận, kết quả kiểm thử, cập nhật tài liệu, xem xét mã nguồn và các chỉ số hiệu suất trước khi đánh dấu hoàn thành.

### Duy trì Lộ trình dự án (Project Roadmap)
Cập nhật tệp `./docs/project-roadmap.md` sau khi hoàn thành tính năng, sửa lỗi, cập nhật bảo mật hoặc thay đổi giai đoạn dự án.

## Ví dụ sử dụng

### Xem xét hoàn thành tính năng
**Đầu vào**: `/watzup`
**Quy trình**:
1. Phân tích các thay đổi gần đây thông qua `git log`.
2. Thu thập báo cáo từ các agent khác.
3. Đánh giá tiến độ so với kế hoạch ban đầu.
4. Cập nhật `project-roadmap.md`.
5. Tạo báo cáo tóm tắt tuần/giai đoạn.

## Các mô hình điều phối

Agent project-manager điều phối các agent khác theo các giai đoạn:
1. **Lập kế hoạch**: `planner`, `researcher`, `docs-manager`
2. **Triển khai**: `code`
3. **Kiểm thử**: `tester`
4. **Xem xét**: `code-reviewer`
5. **Tài liệu**: `docs-manager`
6. **Đẩy mã nguồn**: `git-manager`

## Duy trì Roadmap

**Cần cập nhật sau khi**:
- Triển khai xong một tính năng.
- Hoàn thành cột mốc quan trọng.
- Sửa các lỗi nghiêm trọng/cao.
- Cập nhật bảo mật.
- Đánh giá tiến độ hàng tuần.

---

**Thông điệp chính**: Agent project-manager cung cấp khả năng giám sát dự án toàn diện thông qua phân tích triển khai, theo dõi tiến độ, thu thập báo cáo và duy trì lộ trình dự án, đồng thời ủy thác các nhiệm vụ chuyên biệt cho các agent phù hợp.
