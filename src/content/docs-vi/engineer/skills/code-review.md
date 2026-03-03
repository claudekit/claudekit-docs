---
title: "ck:code-review"
description: Hướng dẫn các thực hành code review đúng đắn với sự nghiêm ngặt kỹ thuật, các tuyên bố dựa trên bằng chứng và các cổng xác minh
section: engineer
kit: engineer
category: skills/tools
order: 50
published: true
lang: vi
---

# Code Review Skill

Thực thi các verification gates và sự nghiêm ngặt kỹ thuật qua ba thực hành quan trọng: nhận feedback, yêu cầu reviews và chứng minh các tuyên bố hoàn thành.

## Nguyên Tắc Cốt Lõi

**Tính chính xác kỹ thuật hơn sự thoải mái xã hội.** Xác minh trước khi implement. Hỏi trước khi giả định. Bằng chứng trước khi tuyên bố. Luôn tôn trọng các nguyên tắc YAGNI, KISS và DRY.

## Khi Nào Dùng

**Luôn dùng cho:**
- Nhận feedback code review (đặc biệt các mục không rõ ràng hoặc đáng ngờ)
- Sau khi hoàn thành features hoặc tasks
- Trước khi đưa ra BẤT KỲ tuyên bố hoàn thành/thành công nào (tests pass, build thành công, bug đã fix)

**Đặc biệt khi:**
- Feedback mâu thuẫn với quyết định hiện có hoặc thiếu context
- Sắp commit, push hoặc tạo PRs mà chưa có fresh verification
- External reviewers đề xuất các tính năng "proper" mà không có bằng chứng sử dụng

## Quy Trình

### 0. Edge Case Scouting (v2.10.0+)

Trước khi dispatch code-reviewer, hãy scout các edge cases:

```bash
# Scout trước để tìm:
# - Files bị ảnh hưởng bởi changes (không chỉ modified files)
# - Data flow paths có thể bị break
# - Edge cases và boundary conditions
# - Potential side effects

/ck:scout edge cases for <feature>
```

Bước pre-review này xác định các vấn đề tiềm ẩn mà reviewer nên tập trung, giúp reviews có mục tiêu hơn và hiệu quả hơn.

### 1. Nhận Feedback
**Protocol:** READ → UNDERSTAND → VERIFY → EVALUATE → RESPOND → IMPLEMENT

**Quy tắc:**
- Không đồng ý hình thức ("Bạn nói đúng!", "Điểm hay!", "Cảm ơn...")
- Không implement trước khi xác minh
- Trình bày lại requirement, đặt câu hỏi, phản bác về mặt kỹ thuật
- Nếu không rõ: DỪNG và hỏi để làm rõ trước
- Kiểm tra YAGNI: grep usage trước khi implement

**Xử lý nguồn:**
- Human partner: Tin tưởng - implement sau khi hiểu
- External reviewer: Xác minh về mặt kỹ thuật, kiểm tra breakage, phản bác nếu sai

### 2. Yêu Cầu Reviews
**Khi nào:** Sau mỗi task, major features, trước khi merge

**Các bước:**
```bash
# 1. Lấy git SHAs
BASE_SHA=$(git rev-parse HEAD~1)
HEAD_SHA=$(git rev-parse HEAD)

# 2. Chạy code review với:
# - WHAT_WAS_IMPLEMENTED
# - PLAN_OR_REQUIREMENTS
# - BASE_SHA, HEAD_SHA
# - DESCRIPTION
```

**Xử lý feedback:**
- Critical: Fix ngay lập tức
- Important: Fix trước khi tiếp tục
- Minor: Ghi chú để sau

### 3. Verification Gates
**Nguyên Tắc Sắt Đá:** KHÔNG CÓ TUYÊN BỐ HOÀN THÀNH MÀ KHÔNG CÓ BẰNG CHỨNG XÁC MINH MỚI

**Gate function:**
```
IDENTIFY command → RUN full command → READ output → VERIFY confirms claim → THEN claim
```

**Yêu cầu bằng chứng:**

| Tuyên Bố | Bằng Chứng Yêu Cầu |
|----------|---------------------|
| Tests pass | Test output hiển thị 0 failures |
| Build thành công | Build command exit 0 |
| Bug đã fix | Test original symptom passes |
| Requirements đáp ứng | Checklist theo từng dòng đã xác minh |

**Red flags - DỪNG LẠI:**
- Dùng "should"/"probably"/"seems to"
- Bày tỏ sự hài lòng trước khi xác minh
- Commit mà không xác minh
- Tin vào báo cáo của agent
- BẤT KỲ cách diễn đạt nào ngụ ý thành công mà không chạy verification

### 4. Quick Decision Tree
```
SITUATION?
│
├─ Nhận feedback
│  ├─ Có mục không rõ? → DỪNG, hỏi để làm rõ trước
│  ├─ Từ human partner? → Hiểu, rồi implement
│  └─ Từ external reviewer? → Xác minh kỹ thuật trước khi implement
│
├─ Đã hoàn thành công việc
│  ├─ Major feature/task? → Yêu cầu code review
│  └─ Trước khi merge? → Yêu cầu code review
│
└─ Sắp tuyên bố status
   ├─ Có fresh verification? → Nêu tuyên bố KÈM bằng chứng
   └─ Không có fresh verification? → CHẠY verification command trước
```

## Các Use Case Phổ Biến

### Nhận External Feedback
**Đối tượng**: Developer nhận PR comments
```
"External reviewer suggests adding error handling to validateUser(). Before implementing, verify if this function is actually used in production or just tests."
```

### Task Completion Verification
**Đối tượng**: Developer hoàn thành task
```
"Just completed the authentication refactor. Before moving to next task, run code review with BASE_SHA and HEAD_SHA to verify the implementation."
```

### Pre-Commit Evidence Check
**Đối tượng**: Developer sắp commit
```
"Ready to commit the bug fix. Run full test suite and show output before claiming tests pass."
```

### Làm Rõ Feedback Không Rõ Ràng
**Đối tượng**: Developer nhận comments mơ hồ
```
"Reviewer says 'improve error handling' but doesn't specify where or why. Stop and ask: Which error paths need handling? What scenarios am I missing?"
```

### Thực Thi YAGNI
**Đối tượng**: Developer nhận đề xuất "proper"
```
"Reviewer suggests adding a caching layer. Grep the codebase for actual usage patterns before implementing. Is this solving a real problem or premature optimization?"
```

## Pro Tips

- **Không bao giờ giả định thành công** - luôn xác minh với bằng chứng mới
- **Nghiêm ngặt kỹ thuật trước** - không đồng ý hình thức, chỉ trình bày lại và implement
- **Bằng chứng hơn tuyên bố** - hiển thị command output, không phải ý kiến
- **Đặt câu hỏi về feedback không rõ** - hỏi trước khi implement tiết kiệm việc làm lại
- **Kiểm tra YAGNI** - grep trước khi thêm các tính năng "proper" được đề xuất
- **Không kích hoạt?** Nói: "Use code-review skill to verify this completion claim with evidence."

## Các Skills Liên Quan

- [Debugging](/vi/docs/engineer/skills/debug) - Debug với phương pháp dựa trên bằng chứng
- [Sequential Thinking](/vi/docs/engineer/skills/sequential-thinking) - Giải quyết vấn đề có hệ thống
- [Planning](/vi/docs/engineer/skills/plan) - Phân chia task và xác minh

## Điểm Mấu Chốt

Code review yêu cầu sự nghiêm ngặt kỹ thuật hơn sự thoải mái xã hội. Dùng verification gates trước BẤT KỲ tuyên bố hoàn thành nào (chạy → đọc → xác minh → rồi tuyên bố). Yêu cầu systematic reviews sau mỗi task. Phản bác kỹ thuật về feedback đáng ngờ. Bằng chứng, không phải giả định.
