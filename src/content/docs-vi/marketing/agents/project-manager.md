---
lang: vi
title: "Project Manager Agent"
description: "Track progress, consolidate reports, and keep marketing projects on schedule with comprehensive oversight."
section: marketing
category: agents
order: 2
---

# Project Manager Agent

> **Your project orchestrator** - Keeps everything on track and nothing falls through the cracks

## What This Agent Does

Bạn vừa hoàn thành triển khai tính năng chiến dịch lớn. Test đạt. Code trông tốt. Nhưng chờ - bạn có cập nhật lộ trình không? Kiểm tra xem những công việc khác bị chặn không? Xác minh rằng triển khai phù hợp với kế hoạch ban đầu không?

**The Problem**: Mà không có giám sát dự án, công việc sẽ hoàn thành nhưng không ai biết bạn có đang tiến bộ hướng tới mục tiêu hay không. Tính năng được phát hành không hoàn chỉnh, tài liệu tụt lại, và bạn mất dấu về những gì tiếp theo.

**The Solution**: Project Manager Agent duy trì cái nhìn toàn cảnh về toàn bộ dự án tiếp thị của bạn. Nó theo dõi tiến độ đối với các kế hoạch, tập hợp báo cáo từ các agent khác, xác định những trở ngại, và giữ tài liệu cập nhật. Bạn luôn biết bạn đang ở đâu.

## Quick Start

Kiểm tra trạng thái dự án sau hoàn thành công việc:

```bash
# After implementing a feature
/status "Check progress on email campaign automation"
```

Agent phân tích báo cáo triển khai, cập nhật kế hoạch, và cho bạn biết chính xác những gì đã hoàn thành và những gì tiếp theo.

## Capabilities

### Progress Tracking
Theo dõi phát triển trên tất cả các thành phần:
- Theo dõi hoàn thành công việc so với kế hoạch triển khai
- Xác định trượt lịch và thay đổi phạm vi
- Ánh xạ phụ thuộc và con đường tới giới hạn
- Duy trì khả năng hiển thị vào các luồng công việc song song
- Cung cấp phần trăm hoàn thành và số liệu burndown

### Report Collection & Analysis
Có hệ thống thu thập thông tin chi tiết từ tất cả các agent:
- Thu thập báo cáo từ các agent tester, developer, analyst
- Xác định mẫu và vấn đề định kỳ
- Gộp các phát hiện thành đánh giá gắn kết
- Nêu bật các vấn đề quan trọng cần chú ý
- Theo dõi số liệu chất lượng trên các triển khai

### Task Completeness Verification
Xác thực rằng công việc thực sự đáp ứng các yêu cầu:
- Kiểm tra các công việc hoàn thành so với tiêu chí chấp nhận
- Đánh giá chất lượng mã và phạm vi kiểm tra
- Xác thực rằng các triển khai phù hợp với kiến trúc
- Đảm bảo tài liệu hoàn chỉnh và cập nhật
- Xác minh tiêu chuẩn an ninh và hiệu suất được đáp ứng

### Plan Updates & Status Management
Giữ cho kế hoạch đồng bộ với thực tế:
- Cập nhật kế hoạch triển khai với trạng thái hiện tại
- Ghi chép các trở ngại và chiến lược giảm thiểu
- Xác định các bước tiếp theo rõ ràng với ưu tiên
- Duy trì khả năng truy xuất đến các yêu cầu kinh doanh
- Cập nhật YAML frontmatter (trạng thái, nỗ lực, ngày tháng)

### Documentation Coordination
Ủy quyền cập nhật tài liệu tại thời điểm phù hợp:
- Kích hoạt docs-manager khi tính năng hoàn thành
- Đảm bảo tài liệu API khớp với các điểm cuối thực tế
- Giữ tài liệu kiến trúc cập nhật với hệ thống
- Cập nhật tài liệu dành cho người dùng
- Duy trì nhật ký thay đổi với các mục chính xác

### Roadmap Management
Tự động duy trì lộ trình dự án:
- Cập nhật phần trăm tiến độ sau các cột mốc
- Ghi lại các tính năng hoàn thành trong nhật ký thay đổi
- Ghi chép các bản vá lỗi với mức độ nghiêm trọng và tác động
- Theo dõi cập nhật bảo mật và thay đổi tuân thủ
- Điều chỉnh lịch trình dựa trên tiến độ thực tế

## When to Use

Sử dụng Project Manager Agent khi bạn cần:
- Kiểm tra trạng thái và tiến độ dự án tổng thể
- Gộp báo cáo từ nhiều agent
- Cập nhật kế hoạch triển khai sau khi công việc hoàn thành
- Xác minh rằng tính năng thực sự hoàn thành (không chỉ "dev done")
- Xác định những gì cần làm tiếp theo
- Chuẩn bị cập nhật trạng thái cho các bên liên quan

## Example Workflows

### Post-Feature Status Check

```bash
# After implementing webhook notifications
/status "Completed webhook system—check overall progress"
```

**The manager will**:
1. Đọc báo cáo triển khai từ developer và tester
2. Xác minh tất cả các công việc kế hoạch được đánh dấu hoàn thành
3. Kiểm tra độ phủ của bài kiểm tra đáp ứng các yêu cầu
4. Xác thực rằng tài liệu được cập nhật
5. Cập nhật trạng thái kế hoạch và lộ trình
6. Xác định các công việc ưu tiên tiếp theo
7. Báo cáo bất kỳ khoảng trống hoặc mối lo ngại nào

### Cross-Agent Report Analysis

```bash
# Multiple agents finished work
/status "Backend developer and tester completed payment flow"
```

**You'll get**:
- Tóm tắt gộp từ cả hai báo cáo
- Phân tích hoàn thành triển khai
- Kết quả kiểm tra và số liệu độ phủ
- Trạng thái tài liệu
- Công việc còn lại và trở ngại
- Khuyến nghị ưu tiên

## Best Practices

1. **Run After Milestones**: Kiểm tra trạng thái sau hoàn thành tính năng, không phải trong quá trình phát triển. Hãy để các agent hoàn thành công việc trước tiên.

2. **Trust but Verify**: Manager xác thực rằng "done" thực sự có nghĩa là done. Đừng bỏ qua bước này trước khi chuyển sang tính năng tiếp theo.

3. **Update Plans, Not Just Code**: Kế hoạch là các tài liệu sống. Nếu phạm vi thay đổi trong quá trình triển khai, manager đảm bảo kế hoạch phản ánh thực tế.

4. **Weekly Reviews**: Chạy kiểm tra trạng thái hàng tuần để bắt các trượt lịch sớm và điều chỉnh ưu tiên.

## Report Output Format

Manager cung cấp báo cáo trạng thái toàn diện:

```markdown
## Project Status Report

### Achievements
- [Feature] Webhook system - 100% complete
- [Tests] 95% coverage, all passing
- [Docs] API documentation updated

### Current Phase Progress
Phase 2: Core Features - 75% complete
- ✅ User authentication
- ✅ Webhook notifications
- 🚧 Email templates (in progress)
- ⏳ Campaign analytics (blocked)

### Testing Requirements
- Integration tests needed for webhook retry logic
- Performance testing for email sending at scale

### Blockers
- Analytics blocked on third-party API access
- Email templates waiting for design approval

### Next Steps
Priority 1: Complete email template system
Priority 2: Unblock analytics with API access
Priority 3: Performance optimization

### Risk Assessment
- Timeline: On track for sprint goal
- Technical Debt: Low, refactoring complete
- Dependencies: 1 external blocker (analytics API)
```

## Documentation Update Triggers

Manager tự động kích hoạt cập nhật tài liệu khi:
- Trạng thái giai đoạn phát triển thay đổi (In Progress → Complete)
- Tính năng lớn được triển khai, kiểm tra hoặc phát hành
- Các lỗi nghiêm trọng được giải quyết hoặc các bản vá bảo mật được áp dụng
- Lịch trình, phạm vi hoặc kiến trúc dự án bị sửa đổi
- Các phụ thuộc bên ngoài được cập nhật với các thay đổi phá vỡ

## Related Agents

- [Planner](/docs/marketing/agents/planner) - Creates plans that manager tracks
- [Docs Manager](/docs/marketing/agents/docs-manager) - Updates documentation on manager's request
- [Tester](/docs/marketing/agents/tester) - Provides test reports manager analyzes
- [Journal Writer](/docs/marketing/agents/journal-writer) - Documents technical difficulties

## Related Commands

- [`/status`](/docs/marketing/commands/status) - Check project status
- [`/report`](/docs/marketing/commands/report) - Generate detailed status report

## Quality Standards

Manager thực thi các tiêu chuẩn này:
- Kế hoạch phải có YAML frontmatter với trạng thái, ưu tiên, nỗ lực
- Tính năng hoàn thành phải có các bài kiểm tra đạt
- Tài liệu phải cập nhật với triển khai
- Trở ngại phải có kế hoạch giảm thiểu
- Các bước tiếp theo phải được ưu tiên và có hành động

## Tips

**Ask for Next Steps**: Manager luôn cho bạn biết những gì cần làm tiếp theo. Nếu ưu tiên không rõ ràng, hãy kiểm tra với manager trước khi bắt đầu công việc mới.

**Don't Skip Verification**: "Tôi nghĩ nó đã xong" không giống "manager xác nhận nó đã xong". Bước xác minh bắt bỏ công việc không hoàn chỉnh.

**Use for Stakeholder Updates**: Báo cáo của manager được định dạng cho các bên liên quan không chuyên về kỹ thuật. Copy-paste để gửi email trạng thái hoặc stand-up.
