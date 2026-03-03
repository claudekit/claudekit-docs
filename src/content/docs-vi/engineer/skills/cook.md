---
title: "ck:cook"
description: "Implementation tính năng end-to-end với phát hiện workflow tự động và định tuyến thông minh"
section: engineer
kit: engineer
category: skills
order: 4
lang: vi
---

Engine implementation tính năng hoàn chỉnh của bạn. Thay thế lệnh `/code` cũ bằng smart workflow detection, research phases và quality gates.

## Skill Này Làm Gì

Cook điều phối toàn bộ hành trình implementation từ ý tưởng đến code đã test, đã review. Nó tự động phát hiện workflow phù hợp dựa trên yêu cầu của bạn — dù bạn cần fast prototyping, parallel execution hay full research-backed development.

Hãy nghĩ về nó như nhạc trưởng implementation của bạn. Giao cho nó một task như "add user authentication" và nó điều phối researchers, planners, developers, testers và reviewers để deliver code production-ready.

## Khả Năng Cốt Lõi

- **Smart Intent Detection**: Phân tích yêu cầu của bạn để chọn workflow tối ưu
- **Research Phase**: Researchers song song thu thập kiến thức kỹ thuật liên quan
- **Scout Phase**: Khám phá cấu trúc codebase và các files liên quan
- **Planning**: Tạo implementation plans chi tiết với các phases
- **Implementation**: Thực thi với quality gates và review cycles
- **Testing**: Coverage test toàn diện với yêu cầu pass 100%
- **Code Review**: Review tự động hoặc con người tùy theo độ phức tạp

## Các Workflow Modes

| Mode | Research | Testing | Review Gates | Dùng Khi |
|------|----------|---------|--------------|----------|
| **interactive** (mặc định) | ✓ | ✓ | User approval mỗi bước | Standard features |
| **auto** | ✓ | ✓ | Auto nếu score≥9.5 | Autonomous work đáng tin |
| **fast** | ✗ | ✓ | User approval mỗi bước | Quick prototypes |
| **parallel** | Tùy chọn | ✓ | User approval mỗi bước | Multi-feature work |
| **no-test** | ✓ | ✗ | User approval mỗi bước | Experimental code |
| **code** | ✗ | ✓ | User approval mỗi bước | Thực thi plan hiện có |

## Sử Dụng

```
/ck:cook <task hoặc plan path> [--flag]
```

Flags tùy chọn: `--interactive`, `--fast`, `--parallel`, `--no-test`, `--auto`

Nếu không có flag, dùng interactive mode theo mặc định.

## Câu Lệnh Mẫu

- "/ck:cook add user authentication to the app"
- "/ck:cook implement real-time notifications --fast"
- "/ck:cook path/to/plan.md --auto"
- "/ck:cook add search, filters, and pagination --parallel"
- "/ck:cook prototype new UI design --no-test"

## Tổng Quan Workflow

```
[Intent Detection] → [Research?] → [Review] → [Plan] → [Review]
→ [Implement] → [Review] → [Test?] → [Review] → [Finalize]
```

**Mặc định (non-auto)**: Dừng ở [Review] gates để con người phê duyệt trước mỗi bước lớn.

**Auto mode**: Bỏ qua human review gates, implement tất cả phases liên tục.

## Quality Gates

**Luôn được thực thi (tất cả modes):**
- Testing: Pass 100% bắt buộc (trừ no-test mode)
- Code Review: User approval HOẶC auto-approve (score≥9.5, 0 critical)
- Finalize: project-manager VÀ docs-manager phải hoàn thành

## Điểm Khác Biệt

Cook không chỉ viết code — nó quản lý toàn bộ software development lifecycle. Nó biết khi nào cần research, khi nào bỏ qua research, khi nào song song hóa công việc và khi nào thực thi quality gates. Kết quả: tính năng production-ready, không phải prototypes.

## Các Skills Liên Quan

- [Planning](/vi/docs/engineer/skills/plan) - Tạo plans mà cook thực thi
- [Brainstorm](/vi/docs/engineer/skills/brainstorm) - Cho quyết định kiến trúc trước khi implementation
- [Fix](/vi/docs/engineer/skills/fix) - Để debug code hiện có
- [Scout](/vi/docs/engineer/skills/scout) - Để khám phá codebase
