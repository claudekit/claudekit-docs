---
title: Code Review Skill
description: Hướng dẫn code review practices đúng đắn với technical rigor, evidence-based claims và verification gates
section: engineer
kit: engineer
category: skills/tools
order: 8
published: true
lang: vi
---

# Code Review Skill

Thực thi verification gates và technical rigor qua ba practices quan trọng: nhận feedback, yêu cầu reviews và chứng minh completion claims.

## Nguyên Tắc Cốt Lõi

**Technical correctness trên social comfort.** Verify trước khi implement. Hỏi trước khi giả định. Evidence trước claims. Luôn tôn trọng các nguyên tắc YAGNI, KISS và DRY.

## Khi Nào Sử Dụng

**Luôn dùng cho:**
- Nhận code review feedback (đặc biệt unclear hoặc questionable items)
- Sau khi hoàn thành features hoặc tasks
- Trước khi tạo BẤT KỲ completion/success claims nào (tests pass, build succeeds, bug fixed)

**Đặc biệt khi:**
- Feedback conflicts với existing decisions hoặc thiếu context
- Sắp commit, push hoặc tạo PRs mà không có fresh verification
- External reviewers suggest "proper" features mà không có usage evidence

## Quy Trình

### 1. Nhận Feedback
**Protocol:** READ → UNDERSTAND → VERIFY → EVALUATE → RESPOND → IMPLEMENT

**Rules:**
- ❌ Không performative agreement ("You're right!", "Great point!", "Thanks for...")
- ❌ Không implementation trước verification
- ✅ Restate requirement, đặt câu hỏi, push back technically
- ✅ Nếu unclear: STOP và hỏi clarification trước
- ✅ YAGNI check: grep cho usage trước khi implement

**Source handling:**
- Human partner: Trusted - implement sau khi understand
- External reviewer: Verify technically, check breakage, push back nếu sai

### 2. Yêu Cầu Reviews
**Khi nào:** Sau mỗi task, major features, trước merge

**Steps:**
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

**Hành động với feedback:**
- Critical: Fix ngay lập tức
- Important: Fix trước khi proceed
- Minor: Note để sau

### 3. Verification Gates
**The Iron Law:** KHÔNG COMPLETION CLAIMS NẾU KHÔNG CÓ FRESH VERIFICATION EVIDENCE

**Gate function:**
```
IDENTIFY command → RUN full command → READ output → VERIFY confirms claim → THEN claim
```

**Evidence requirements:**

| Claim | Evidence Required |
|-------|-------------------|
| Tests pass | Test output shows 0 failures |
| Build succeeds | Build command exit 0 |
| Bug fixed | Test original symptom passes |
| Requirements met | Line-by-line checklist verified |

**Red flags - STOP:**
- Dùng "should"/"probably"/"seems to"
- Expressing satisfaction trước verification
- Committing mà không có verification
- Trusting agent reports
- BẤT KỲ wording nào implying success mà không chạy verification

### 4. Quick Decision Tree
```
SITUATION?
│
├─ Received feedback
│  ├─ Unclear items? → STOP, hỏi clarification trước
│  ├─ From human partner? → Understand, sau đó implement
│  └─ From external reviewer? → Verify technically trước implement
│
├─ Completed work
│  ├─ Major feature/task? → Request code review
│  └─ Trước merge? → Request code review
│
└─ Sắp claim status
   ├─ Có fresh verification? → State claim VỚI evidence
   └─ Không có fresh verification? → CHẠY verification command trước
```

## Common Use Cases

### Nhận External Feedback
**Who**: Developer nhận PR comments
```
"External reviewer suggest thêm error handling vào validateUser(). Trước khi implement, verify xem function này thực sự được dùng trong production hay chỉ tests."
```

### Task Completion Verification
**Who**: Developer hoàn thành task
```
"Vừa hoàn thành authentication refactor. Trước khi chuyển sang task tiếp theo, chạy code review với BASE_SHA và HEAD_SHA để verify implementation."
```

### Pre-Commit Evidence Check
**Who**: Developer sắp commit
```
"Sẵn sàng commit bug fix. Chạy full test suite và show output trước khi claim tests pass."
```

### Unclear Feedback Clarification
**Who**: Developer nhận vague comments
```
"Reviewer nói 'improve error handling' nhưng không chỉ định where hoặc why. Stop và hỏi: Error paths nào cần handling? Scenarios nào tôi đang miss?"
```

### YAGNI Enforcement
**Who**: Developer nhận "proper" suggestions
```
"Reviewer suggest thêm caching layer. Grep codebase cho actual usage patterns trước khi implement. Cái này đang solve real problem hay premature optimization?"
```

## Pro Tips

- **Không bao giờ assume success** - luôn verify với fresh evidence
- **Technical rigor first** - không performative agreement, chỉ restate và implement
- **Evidence over claims** - show command output, không phải opinions
- **Question unclear feedback** - hỏi trước khi implement saves rework
- **YAGNI check** - grep trước khi thêm suggested "proper" features
- **Không kích hoạt?** Nói: "Dùng code-review skill để verify completion claim này với evidence."

## Các Skills Liên Quan

- [Debugging](/vi/docs/engineer/skills/tools/debugging) - Debug với evidence-based approach
- [Sequential Thinking](/vi/docs/engineer/skills/tools/sequential-thinking) - Systematic problem-solving
- [Planning](/vi/docs/engineer/skills/tools/planning) - Task breakdown và verification

## Key Takeaway

Code review yêu cầu technical rigor trên social comfort. Dùng verification gates trước BẤT KỲ completion claims nào (run → read → verify → then claim). Request systematic reviews sau mỗi task. Push back technically trên questionable feedback. Evidence, không phải assumptions.
