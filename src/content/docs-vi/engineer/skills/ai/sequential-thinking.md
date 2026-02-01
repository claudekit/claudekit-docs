---
title: Sequential Thinking Skill
description: Áp dụng phương pháp giải quyết vấn đề có cấu trúc và suy nghĩ phản chiếu cho các tác vụ phức tạp đòi hỏi phân tích đa bước và xác minh giả thuyết
section: engineer
kit: engineer
category: skills/ai
order: 10
published: true
lang: vi
---

# Sequential Thinking

Phân tích các vấn đề phức tạp thành chuỗi suy nghĩ được đánh số, có tính phản chiếu, có thể sửa đổi, phân nhánh và xác minh giả thuyết một cách linh hoạt.

## Nguyên Tắc Cốt Lõi

**Các vấn đề phức tạp đòi hỏi chuỗi lý luận rõ ràng, không phải phân tích lộn xộn.**

Khi bạn giải quyết các vấn đề đa bước, bộ não của bạn được lợi từ tiến trình suy nghĩ rõ ràng: "Điều này dẫn đến điều kia, điều này bộc lộ sai sót này, vì vậy tôi sẽ sửa đổi cách tiếp cận của mình." Sequential Thinking làm cho quá trình này có hệ thống với các suy nghĩ được đánh số, dấu hiệu sửa đổi và xác minh giả thuyết.

## Khi Nào Sử Dụng

Luôn sử dụng cho:
- Các vấn đề đa bước với phạm vi chưa rõ ràng
- Debug đòi hỏi kiểm tra giả thuyết
- Quyết định kiến trúc so sánh các phương án
- Phân tích yêu cầu điều chỉnh hướng đi giữa chừng

Đặc biệt khi:
- Bạn phát hiện độ phức tạp mới ở giữa chừng
- Các giả định ban đầu tỏ ra sai
- Nhiều cách tiếp cận cần đánh giá
- Phạm vi vấn đề nổi lên trong khi bạn suy nghĩ

## Quy Trình

### 1. Bắt Đầu Với Ước Lượng Sơ Bộ
Bắt đầu với số lượng suy nghĩ ước tính (`Thought 1/5`), điều chỉnh khi độ phức tạp nổi lên. Đừng suy nghĩ quá nhiều về tổng số—nó sẽ thay đổi.

### 2. Cấu Trúc Mỗi Suy Nghĩ
- Xây dựng dựa trên ngữ cảnh trước đó một cách rõ ràng
- Giải quyết MỘT khía cạnh cho mỗi suy nghĩ
- Nêu các giả định/không chắc chắn/nhận ra
- Báo hiệu suy nghĩ tiếp theo sẽ giải quyết gì

### 3. Áp Dụng Các Thao Tác Động
- **Mở rộng**: Phức tạp hơn → tăng tổng số (`1/5` thành `1/8`)
- **Thu hẹp**: Đơn giản hơn → giảm tổng số (`3/8` thành `3/6`)
- **Sửa đổi**: Góc nhìn mới → đánh dấu `[REVISION of Thought 2]`
- **Phân nhánh**: Nhiều đường đi → khám phá `[BRANCH A]` và `[BRANCH B]`

### 4. Xác Minh Giả Thuyết
Sử dụng `[HYPOTHESIS]` cho các giải pháp đề xuất, `[VERIFICATION]` cho kết quả kiểm tra. Lặp lại cho đến khi xác minh được. Đánh dấu cuối cùng với `[FINAL]`.

## Các Trường Hợp Sử Dụng Phổ Biến

### Debug Authentication Flow
**Ai**: Full-stack developer sửa lỗi đăng nhập
```
"Người dùng báo cáo đăng nhập hoạt động ban đầu nhưng thất bại sau 24 giờ. JWT token được cấu hình với thời hạn 24h. Logic refresh token tồn tại trong backend. Hãy giúp tôi debug tại sao xác thực lại bị hỏng chính xác ở mốc 24h."
```

### Quyết Định Kiến Trúc Cho State Management
**Ai**: React developer chọn giải pháp state
```
"Tôi cần state management cho ứng dụng dashboard với đồng bộ dữ liệu thời gian thực, optimistic updates và hỗ trợ offline. Đánh giá Redux Toolkit vs TanStack Query + Zustand, xem xét đội của chúng tôi chưa sử dụng nhiều cả hai."
```

### Đánh Giá Thiết Kế API
**Ai**: Backend engineer thiết kế endpoints
```
"Đang đánh giá REST API mới của chúng tôi cho user profiles. Thiết kế hiện tại có /users/:id cho thông tin cơ bản và /users/:id/details cho dữ liệu mở rộng. Việc phân tách này có ý nghĩa không hay chúng ta nên hợp nhất? Xem xét hiệu suất và frontend DX."
```

### Điều Tra Hiệu Suất
**Ai**: Frontend dev giải quyết render chậm
```
"React app có rendering dashboard chậm. Profiler hiển thị component ProductList re-render 10+ lần mỗi lần tải trang. Nó nhận mảng products từ Redux store. Hướng dẫn tôi xác định nguyên nhân gốc và sửa lỗi."
```

### Refactoring Database Schema
**Ai**: Engineer di chuyển data model
```
"Cần refactor schema e-commerce của chúng tôi. Thiết kế hiện tại có các bảng riêng cho sản phẩm vật lý/kỹ thuật số với 60% cột trùng lặp. Đánh giá single-table với discriminator vs polymorphic associations vs cách tiếp cận hiện tại."
```

## Pro Tips

**Không kích hoạt?** Nói: *"Use sequential-thinking skill to analyze this step-by-step with explicit thought markers."*

**Các chế độ:**
- **Explicit**: Sử dụng các dấu hiệu `Thought 1/5` rõ ràng khi độ phức tạp đòi hỏi hoặc được yêu cầu
- **Implicit**: Áp dụng phương pháp nội bộ cho phân tích thông thường

**Ví dụ sửa đổi:**
```
Thought 5/8 [REVISION of Thought 2]: Corrected understanding
- Original: localStorage is sufficient for tokens
- Why revised: XSS vulnerability discovered in dependencies
- Impact: Must switch to httpOnly cookies
```

**Ví dụ phân nhánh:**
```
Thought 4/7 [BRANCH A from Thought 2]: Redux Toolkit
Pros: Mature, predictable. Cons: Boilerplate, learning curve

Thought 4/7 [BRANCH B from Thought 2]: Zustand
Pros: Simple API, TypeScript. Cons: Less middleware ecosystem
```

## Các Kỹ Năng Liên Quan

- [Problem Solving](/vi/docs/engineer/skills/tools/problem-solving) - Phân rã vấn đề tổng quát
- [Debugging](/vi/docs/engineer/skills/tools/debugging) - Điều tra lỗi có hệ thống
- [Code Review](/vi/docs/engineer/skills/tools/code-review) - Phân tích kỹ thuật

## Điểm Chính

Sequential Thinking biến đổi phân tích lộn xộn thành chuỗi suy nghĩ có cấu trúc với khả năng sửa đổi, phân nhánh cho các phương án thay thế và xác minh giả thuyết—sử dụng rõ ràng cho các vấn đề phức tạp hoặc ngầm định khi lý luận có cấu trúc cải thiện độ chính xác.
