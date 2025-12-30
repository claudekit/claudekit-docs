---
title: "/cook"
description: "Thực hiện tính năng toàn bộ với lập kế hoạch, nghiên cứu, mã hóa, kiểm tra và tài liệu trong một lệnh duy nhất"
section: marketing
category: commands
order: 11
published: true
---

> Lập kế hoạch + mã + kiểm tra + xem xét + cam kết trong một lệnh

## Khởi động nhanh

```bash
/cook add dark mode toggle to settings
```

**Điều gì xảy ra** (5-15 phút):
1. Đặt câu hỏi cho bạn về yêu cầu
2. Nghiên cứu phương pháp hay nhất (3 tác nhân)
3. Khai thác cơ sở mã cho các tệp liên quan
4. Tạo kế hoạch nội bộ
5. Thực hiện với quy trình /code
6. Kiểm tra (100% pass required)
7. Đánh giá mã (0 vấn đề quan trọng)
8. Cập nhật tài liệu
9. Cam kết tới git

**Kết quả**: Tính năng hoàn chỉnh + cam kết git

## Nó làm gì

### /cook vs /plan → /code

| Khía cạnh | /cook | /plan → /code |
|----------|-------|---------------|
| Lập kế hoạch | Nội bộ (ẩn) | Kế hoạch rõ ràng |
| Tốt nhất cho | Tính năng nhỏ-trung bình | Tính năng phức tạp |
| Bước | Tất cả-trong-một | Quy trình hai bước |
| Tệp kế hoạch | Không được tạo | `plans/{date}-{slug}/` |
| Xem xét người dùng | Chỉ cuối cùng | Xem xét kế hoạch + mã |

### Trước /cook
- Lập kế hoạch thручnual (1-2 giờ)
- Nghiên cứu thручnual (1-2 giờ)
- Mã hóa thручnual (2-6 giờ)
- Kiểm tra thручnual (1 giờ)
- Tài liệu thручnual (30 phút)
- Cam kết thручnual (5 phút)
**Tổng: 5-12 giờ**

### Sau /cook
- Một lệnh
- AI xử lý mọi thứ
- Người dùng phê duyệt kết quả cuối cùng
**Tổng: 5-20 phút**

## Cú pháp

```bash
/cook [tasks]
```

### Biến thể

| Biến thể | Tốc độ | Độ phức tạp | Tốt nhất cho |
|---------|--------|----------|-----------|
| `/cook` | Tiêu chuẩn | Bất kỳ | Tính năng chung |
| `/cook:fast` | Nhanh | Đơn giản | Sửa lỗi, tính năng nhỏ |
| `/cook:hard` | Kỹ lưỡng | Phức tạp | Thay đổi kiến trúc |
| `/cook:parallel` | Đa theo dõi | Độc lập | Nhiều tính năng |

## Ví dụ: Thêm chế độ tối

**Đầu vào**:
```bash
/cook add dark mode toggle to settings page
```

**Câu hỏi AI**:
```
cook: System-wide dark mode or settings page only?
You: System-wide

cook: Persist preference where?
You: LocalStorage

cook: CSS variables or Tailwind dark: classes?
You: Tailwind dark: classes
```

**Quy trình dự kiến**:
```markdown
✓ Bước 1: Nghiên cứu (3 nhà nghiên cứu song song)
   - Next.js 15 dark mode patterns
   - Tailwind dark mode setup
   - Preference persistence strategies

✓ Bước 2: Khai thác cơ sở mã
   - Found: app/settings/page.tsx
   - Found: tailwind.config.ts
   - Found: components/ThemeToggle.tsx (doesn't exist, will create)

✓ Bước 3: Lập kế hoạch nội bộ
   - Pha 1: Tailwind config
   - Pha 2: Theme provider
   - Pha 3: Toggle component
   - Pha 4: Settings integration

✓ Bước 4: Thực hiện
   [4 minutes of coding]
   - Modified tailwind.config.ts
   - Created providers/ThemeProvider.tsx
   - Created components/ThemeToggle.tsx
   - Modified app/settings/page.tsx
   - Modified app/layout.tsx (wrap with provider)

✓ Bước 5: Kiểm tra
   tester: Running test suite...
   ✓ Theme toggle switches classes correctly
   ✓ Preference persists on reload
   ✓ All existing tests pass (89 passed)

✓ Bước 6: Đánh giá mã
   code-reviewer: Quality check...
   ✓ No security issues
   ✓ No performance issues
   ✓ Type-safe (0 errors)
   ✓ Follows project patterns

✓ Bước 7: Tài liệu
   docs-manager: Updated docs...
   ✓ Updated docs/design-guidelines.md
   ✓ Updated README.md (added dark mode section)

✓ Bước 8: Phê duyệt người dùng

Thực hiện hoàn thành!

Thay đổi:
- 5 files modified
- 2 files created
- 3 tests added
- Documentation updated

Phê duyệt và cam kết? [Y/n]
```

**Sau khi được phê duyệt**:
```markdown
✓ Bước 9: Cam kết git

git-manager: Committing changes...

feat(ui): add system-wide dark mode toggle

- Add Tailwind dark mode configuration
- Create ThemeProvider with localStorage persistence
- Implement ThemeToggle component
- Integrate toggle into settings page
- Add 3 test cases for theme switching

✓ Committed: abc1234
✓ Pushed to origin/main

Xong! Chế độ tối live at /settings
```

## Tích hợp quy trình làm việc

### Tính năng nhanh
```bash
/cook add newsletter signup form
/cook implement email validation
/cook add loading spinner to buttons
```

### vs Lập kế hoạch trước
```bash
# Đối với các tính năng phức tạp, sử dụng /plan trước
/plan implement payment integration  # Review plan
/code  # Then implement

# Đối với các tính năng trung bình, /cook nhanh hơn
/cook implement payment integration  # Does both
```

### Nhiều tính năng
```bash
# Sequential (one at a time)
/cook add dark mode
/cook add export to CSV
/cook add user preferences

# Parallel (all at once)
/cook:parallel add dark mode, export CSV, user preferences
```

## Bước quy trình làm việc (Nội bộ)

1. **Hỏi mọi thứ**: Làm rõ yêu cầu
2. **Nghiên cứu**: 3+ tác nhân nhà nghiên cứu song song (≤150 dòng mỗi cái)
3. **Khai thác**: /scout:ext hoặc /scout cho các tệp liên quan
4. **Kế hoạch**: Kế hoạch nội bộ (tiết lộ từng bước)
5. **Thực hiện**: Quy trình /code (6 bước)
6. **Kiểm tra**: Tác nhân tester (100% pass required)
7. **Xem xét**: Tác nhân code-reviewer (0 vấn đề quan trọng required)
8. **Tài liệu**: Tác nhân docs-manager + project-manager
9. **Onboarding**: Cấu hình người dùng nếu cần
10. **Cam kết**: Tác nhân git-manager (sau khi phê duyệt của người dùng)

## Tác nhân được sử dụng

Tất cả tác nhân từ /plan và /code:
- planner, researcher (3+), scout
- fullstack-developer, ui-ux-designer
- tester, debugger, code-reviewer
- project-manager, docs-manager, git-manager

## Kỹ năng được kích hoạt

Tất cả các kỹ năng liên quan được tự động kích hoạt:
- planning, research, implementation
- testing, debugging, code-review
- documentation, git-operations
- Plus feature-specific skills

## Lệnh liên quan

- [/plan](/vi/docs/marketing/commands/plan) - Lập kế hoạch chỉ (xem xét trước khi mã hóa)
- [/code](/vi/docs/marketing/commands/code) - Thực hiện kế hoạch hiện có
- [/fix](/vi/docs/marketing/commands/fix) - Khắc phục các vấn đề sau thực hiện

---

**Một lệnh. Tính năng đầy đủ.** Từ ý tưởng đến sản xuất trong vài phút.
