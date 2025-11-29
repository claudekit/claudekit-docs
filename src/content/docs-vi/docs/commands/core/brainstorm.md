---
title: /brainstorm
description: Hợp tác với các chuyên gia cố vấn để đánh giá các phương pháp kỹ thuật sử dụng nguyên tắc YAGNI, KISS và DRY
section: docs
category: commands/core
order: 9
published: true
---

# /brainstorm

Lệnh brainstorm cấp cao cho giải pháp kỹ thuật. Kích hoạt hợp tác đa agent để đánh giá các phương pháp theo nguyên tắc kỹ thuật, tạo ra đề xuất được ghi nhận.

## Cú pháp

```bash
/brainstorm [question]
```

## Khi nào sử dụng

- **Quyết định kiến trúc**: Chọn giữa các design pattern hoặc kiến trúc hệ thống
- **Lựa chọn công nghệ**: Đánh giá framework, thư viện hoặc công cụ
- **Thách thức thiết kế**: Giải quyết vấn đề phức tạp với nhiều cách tiếp cận hợp lệ
- **Đánh giá rủi ro**: Xác định đánh đổi trước khi cam kết triển khai
- **Đồng thuận nhóm**: Có phân tích có cấu trúc cho thảo luận với stakeholder

## Ví dụ nhanh

```bash
/brainstorm [should we use Redis or PostgreSQL for session storage?]
```

**Kết quả**:
```
Discovery Phase:
- Current user load: 10k DAU
- Session data: ~2KB per user
- Existing infrastructure: PostgreSQL primary

Analysis Against Principles:
YAGNI: PostgreSQL sessions sufficient for current scale
KISS: Single database reduces operational complexity
DRY: Reuse existing connection pooling

Recommendation:
PostgreSQL sessions with redis cache layer when >50k DAU

Report: plans/reports/brainstorm-251129-session-storage.md
```

**Kết quả**: Phân tích có cấu trúc được lưu vào báo cáo markdown.

## Tham số

- `[question]`: Câu hỏi kỹ thuật hoặc thách thức cần phân tích đa góc độ (bắt buộc)

## Nguyên tắc cốt lõi

Mỗi brainstorm đánh giá giải pháp theo ba nguyên tắc:

### YAGNI (You Aren't Gonna Need It)

Đừng xây dựng cho yêu cầu tương lai giả định. Nếu giải pháp đơn giản hơn hoạt động được:
- Tránh tối ưu hóa sớm
- Từ chối tính năng "phòng trường hợp"
- Đặt câu hỏi về các abstraction không có nhu cầu ngay lập tức

### KISS (Keep It Simple, Stupid)

Ưu tiên giải pháp đơn giản hơn giải pháp phức tạp:
- Ít thành phần = ít điểm lỗi
- Code dễ đọc hơn code nén
- Pattern chuẩn hơn implementation tùy chỉnh

### DRY (Don't Repeat Yourself)

Loại bỏ trùng lặp có ý nghĩa:
- Trích xuất logic lặp lại thành hàm
- Tập trung hóa cấu hình
- Nhưng: Đừng DRY quá sớm (ba lần xuất hiện trước)

## Quy trình hoạt động

### Quy trình 6 giai đoạn

**Giai đoạn 1: Khám phá**

Làm rõ yêu cầu và ràng buộc:
- Chúng ta đang giải quyết vấn đề gì?
- Có ràng buộc gì? (ngân sách, thời gian, kỹ năng team)
- Tiêu chí thành công là gì?
- Đã thử những gì?

**Giai đoạn 2: Nghiên cứu**

Thu thập thông tin từ nhiều nguồn:
- Tài liệu dự án (system-architecture.md, code-standards.md)
- API bên ngoài qua MCP tools
- Tra cứu tài liệu qua docs-seeker
- Phân tích codebase qua scout

**Giai đoạn 3: Phân tích**

Đánh giá mỗi phương pháp theo nguyên tắc:
- YAGNI: Điều này có thêm phức tạp không cần thiết không?
- KISS: Có cách tiếp cận đơn giản hơn không?
- DRY: Điều này có tạo trùng lặp không?
- Thêm: Bảo mật, hiệu suất, khả năng bảo trì

**Giai đoạn 4: Tranh luận**

Thách thức các giả định và sở thích:
- Devil's advocate cho mỗi tùy chọn
- Phát hiện đánh đổi ẩn
- Đặt câu hỏi về lựa chọn "hiển nhiên"
- Xem xét edge case và failure mode

**Giai đoạn 5: Đồng thuận**

Xây dựng sự thống nhất về đề xuất:
- Tổng hợp các góc nhìn
- Xếp hạng tùy chọn với lý do
- Xác định điều không thể thương lượng
- Ghi nhận đánh đổi chấp nhận được

**Giai đoạn 6: Tài liệu**

Tạo báo cáo markdown toàn diện:
- Mô tả vấn đề
- Các tùy chọn đã xem xét
- Phân tích theo nguyên tắc
- Đề xuất với lý do
- Rủi ro và giảm thiểu
- Chỉ số thành công

## Lĩnh vực chuyên môn

Brainstorming sử dụng nhiều góc nhìn:

| Lĩnh vực | Tập trung |
|----------|-----------|
| Kiến trúc | Thiết kế hệ thống, ranh giới component, interface |
| Rủi ro | Failure mode, ảnh hưởng bảo mật, tech debt |
| Phát triển | Ước tính thời gian, độ phức tạp triển khai |
| UX/DX | Trải nghiệm người dùng, trải nghiệm lập trình viên |
| Hiệu suất | Khả năng mở rộng, độ trễ, sử dụng tài nguyên |
| Vận hành | Triển khai, giám sát, gánh nặng bảo trì |

## Công cụ hợp tác

Quy trình brainstorm có thể gọi:

- **planner**: Cấu trúc phân tích và tạo đề xuất
- **docs-manager**: Truy cập và cập nhật tài liệu dự án
- **searchapi MCP**: Nghiên cứu giải pháp và pattern bên ngoài
- **docs-seeker**: Tra cứu tài liệu framework
- **ai-multimodal**: Phân tích sơ đồ hoặc tài liệu tham khảo trực quan
- **psql**: Truy vấn database schema để có ngữ cảnh

## Vị trí lưu trữ

Báo cáo được lưu vào file markdown:

**Với kế hoạch đang hoạt động**:
```
{active-plan}/reports/brainstorm-YYMMDD-{topic}.md
```

**Không có kế hoạch đang hoạt động**:
```
plans/reports/brainstorm-YYMMDD-{topic}.md
```

## Cấu trúc báo cáo

Báo cáo được tạo bao gồm:

```markdown
# Brainstorm: {Topic}

**Date**: YYMMDD
**Question**: {Câu hỏi gốc}

## Problem Statement
{Vấn đề và ràng buộc đã làm rõ}

## Options Considered

### Option A: {Tên}
- Mô tả
- Ưu điểm
- Nhược điểm
- Tuân thủ nguyên tắc: YAGNI ✓ KISS ✓ DRY ✓

### Option B: {Tên}
...

## Recommendation
{Tùy chọn được chọn với lý do}

## Risks & Mitigations
- Rủi ro 1: {mô tả} → Giảm thiểu: {cách tiếp cận}
...

## Success Metrics
- {Tiêu chí đo lường thành công}

## Next Steps
1. {Hành động}
...
```

## Ví dụ đầy đủ

### Kịch bản: Chọn State Management

```bash
/brainstorm [what state management should we use for a React dashboard with real-time updates?]
```

**Kết quả các giai đoạn**:

**Discovery**:
```
Requirements clarified:
- Dashboard with 20+ widgets
- Real-time data via WebSocket
- User preferences persistence
- Team: 3 devs, familiar with React hooks

Constraints:
- No Redux experience on team
- Performance critical (60fps animations)
- Must support offline mode
```

**Research**:
```
Options identified:
- Redux Toolkit + RTK Query
- Zustand
- Jotai
- React Query + Context
- Recoil

External sources consulted:
- State management benchmarks 2024
- React documentation on state patterns
- Real-time dashboard case studies
```

**Analysis**:
```
YAGNI Analysis:
- Redux: Overkill for 20 widgets, adds boilerplate
- Zustand: Minimal API, no unnecessary abstractions
- React Query: Built-in caching eliminates manual sync

KISS Analysis:
- Zustand: ~10 lines for basic store
- Redux: Requires slices, actions, selectors
- Jotai: Atomic model adds cognitive load

DRY Analysis:
- React Query: Centralizes data fetching logic
- All options support shared state
```

**Debate**:
```
Devil's Advocate Points:
- Zustand: Less ecosystem than Redux
  Counter: Ecosystem not needed for dashboard scope

- React Query: Not for WebSocket
  Counter: Can integrate with WS for cache invalidation

- No Redux: Team won't learn industry standard
  Counter: Modern React prefers lighter solutions
```

**Recommendation**:
```
Zustand + React Query

Rationale:
- Zustand: UI state (widget positions, preferences)
- React Query: Server state (API data, caching)
- WebSocket: Triggers React Query invalidation

Principle alignment:
- YAGNI: No unused Redux infrastructure
- KISS: Two focused tools vs one complex one
- DRY: React Query eliminates fetch boilerplate
```

**Report saved**: `plans/reports/brainstorm-251129-state-management.md`

## Trường hợp sử dụng phổ biến

### Đánh giá kiến trúc

```bash
/brainstorm [monorepo with Turborepo vs separate repos for 5 services?]
```

Nhận phân tích về độ phức tạp build, chia sẻ code và đánh đổi deployment.

### Lựa chọn công nghệ

```bash
/brainstorm [Prisma vs Drizzle vs raw SQL for new Node.js API?]
```

Nhận so sánh dựa trên kinh nghiệm team, độ phức tạp query và nhu cầu type safety.

### Thách thức thiết kế

```bash
/brainstorm [how to handle file uploads: direct to S3 vs through API server?]
```

Nhận phân tích bảo mật, chi phí và độ phức tạp cho mỗi cách tiếp cận.

### Chiến lược migration

```bash
/brainstorm [gradual migration from Express to Fastify or full rewrite?]
```

Nhận phân tích rủi ro và đề xuất tiếp cận từng giai đoạn.

## Điều /brainstorm KHÔNG làm

- ❌ Triển khai code (dùng `/cook` hoặc `/code`)
- ❌ Sửa bug (dùng `/debug` hoặc `/fix:*`)
- ❌ Đưa ra quyết định cuối cùng (bạn quyết định, nó tư vấn)
- ❌ Bỏ qua tài liệu (luôn tạo báo cáo)

## Thực hành tốt nhất

### Cung cấp ngữ cảnh

Bao gồm ràng buộc trong câu hỏi:
```bash
/brainstorm [
  Authentication approach for:
  - 50k users, 5k concurrent
  - Team knows JWT basics
  - Must support SSO later
  - Budget: startup (minimize vendor costs)
]
```

### Đặt câu hỏi so sánh

✅ **Tốt**:
```bash
/brainstorm [PostgreSQL vs MongoDB for user-generated content with nested comments?]
/brainstorm [SSR vs SSG vs ISR for documentation site with daily updates?]
```

❌ **Quá mơ hồ**:
```bash
/brainstorm [what database should I use?]
/brainstorm [how to build this?]
```

### Xem báo cáo trước khi hành động

Báo cáo markdown chứa phân tích chi tiết không hiển thị trong terminal output:
```bash
# Sau brainstorm
cat plans/reports/brainstorm-251129-{topic}.md
```

## Tích hợp với quy trình làm việc

### Trước khi lập kế hoạch

```bash
# 1. Brainstorm cách tiếp cận
/brainstorm [best auth strategy for multi-tenant SaaS?]

# 2. Xem báo cáo, thảo luận với team
cat plans/reports/brainstorm-251129-auth-strategy.md

# 3. Tạo kế hoạch triển khai
/plan [implement JWT auth with tenant isolation]

# 4. Thực thi
/code
```

### Trong quá trình đánh giá kiến trúc

```bash
# 1. Đánh giá PR với thay đổi phức tạp
git diff main

# 2. Đặt câu hỏi về cách tiếp cận
/brainstorm [is this service abstraction worth the complexity?]

# 3. Điều chỉnh dựa trên đề xuất
```

## Các lệnh liên quan

- [/ask](/vi/docs/commands/core/ask) - Câu hỏi kiến trúc nhanh không cần báo cáo đầy đủ
- [/plan](/vi/docs/commands/plan) - Tạo kế hoạch triển khai sau brainstorming
- [/code](/vi/docs/commands/core/code) - Thực thi kế hoạch với các cổng kiểm soát chất lượng
- [/cook](/vi/docs/commands/core/cook) - Triển khai tính năng từng bước

---

**Điểm chính**: `/brainstorm` cung cấp phân tích đa góc độ có cấu trúc về quyết định kỹ thuật, ghi nhận đề xuất theo nguyên tắc YAGNI, KISS và DRY. Nó tư vấn - bạn quyết định.
