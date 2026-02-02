---
title: "Cook"
description: "Triển khai tính năng từ đầu đến cuối với phát hiện quy trình tự động và định tuyến thông minh"
section: engineer
kit: engineer
category: skills
order: 23
lang: vi
---

Engine triển khai tính năng hoàn chỉnh của bạn. Thay thế lệnh `/code` cũ với phát hiện quy trình thông minh, giai đoạn nghiên cứu và cổng chất lượng.

## Kỹ năng này làm gì

Cook điều phối toàn bộ hành trình triển khai từ ý tưởng đến code đã được kiểm tra và xem xét. Nó tự động phát hiện quy trình phù hợp dựa trên yêu cầu của bạn—dù bạn cần tạo mẫu nhanh, thực thi song song hay phát triển dựa trên nghiên cứu đầy đủ.

Hãy nghĩ về nó như người chỉ huy triển khai của bạn. Đưa cho nó một nhiệm vụ như "thêm xác thực người dùng" và nó sẽ điều phối researchers, planners, developers, testers và reviewers để cung cấp code sẵn sàng production.

## Khả năng cốt lõi

- **Phát hiện ý định thông minh**: Phân tích yêu cầu để chọn quy trình tối ưu
- **Giai đoạn nghiên cứu**: Researcher song song thu thập kiến thức kỹ thuật liên quan
- **Giai đoạn Scout**: Khám phá cấu trúc codebase và file liên quan
- **Lập kế hoạch**: Tạo kế hoạch triển khai chi tiết với các giai đoạn
- **Triển khai**: Thực thi với cổng chất lượng và chu trình xem xét
- **Kiểm tra**: Độ bao phủ test toàn diện với yêu cầu pass 100%
- **Xem xét code**: Review tự động hoặc con người dựa trên độ phức tạp

## Chế độ quy trình

| Chế độ | Nghiên cứu | Kiểm tra | Cổng review | Sử dụng khi |
|------|----------|---------|--------------|------------|
| **interactive** (mặc định) | ✓ | ✓ | Chấp thuận người dùng mỗi bước | Tính năng tiêu chuẩn |
| **auto** | ✓ | ✓ | Tự động nếu điểm≥9.5 | Công việc tự động đáng tin cậy |
| **fast** | ✗ | ✓ | Chấp thuận người dùng mỗi bước | Mẫu nhanh |
| **parallel** | Tùy chọn | ✓ | Chấp thuận người dùng mỗi bước | Công việc nhiều tính năng |
| **no-test** | ✓ | ✗ | Chấp thuận người dùng mỗi bước | Code thử nghiệm |
| **code** | ✗ | ✓ | Chấp thuận người dùng mỗi bước | Thực thi kế hoạch có sẵn |

## Cách sử dụng

```
/cook <task OR plan path> [--flag]
```

Flag tùy chọn: `--interactive`, `--fast`, `--parallel`, `--no-test`, `--auto`

Nếu không có flag, sử dụng chế độ interactive mặc định.

## Ví dụ

- "/cook add user authentication to the app"
- "/cook implement real-time notifications --fast"
- "/cook path/to/plan.md --auto"
- "/cook add search, filters, and pagination --parallel"
- "/cook prototype new UI design --no-test"

## Tổng quan quy trình

```
[Intent Detection] → [Research?] → [Review] → [Plan] → [Review]
→ [Implement] → [Review] → [Test?] → [Review] → [Finalize]
```

**Mặc định (không auto)**: Dừng tại cổng [Review] để chấp thuận con người trước mỗi bước chính.

**Chế độ auto**: Bỏ qua cổng review con người, triển khai tất cả giai đoạn liên tục.

## Cổng chất lượng

**Luôn thực thi (tất cả chế độ):**
- Kiểm tra: Yêu cầu pass 100% (trừ khi chế độ no-test)
- Xem xét code: Chấp thuận người dùng HOẶC tự động chấp thuận (điểm≥9.5, 0 critical)
- Hoàn tất: project-manager VÀ docs-manager phải hoàn thành

## Điểm khác biệt

Cook không chỉ viết code—nó quản lý toàn bộ vòng đời phát triển phần mềm. Nó biết khi nào nghiên cứu, khi nào bỏ qua nghiên cứu, khi nào song song hóa công việc và khi nào thực thi cổng chất lượng. Kết quả: tính năng sẵn sàng production, không phải mẫu.

## Kỹ năng liên quan

- [Brainstorm](/docs/engineer/skills/brainstorm) - Để quyết định kiến trúc trước khi triển khai
- [Fix](/docs/engineer/skills/fix) - Để gỡ lỗi code hiện có
- [Scout](/docs/engineer/skills/scout) - Để khám phá codebase
