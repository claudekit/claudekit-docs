---
title: "Code Reviewer"
description: "Đánh giá chất lượng code toàn diện cho tự động hóa marketing, theo dõi, và công cụ chiến dịch"
section: marketing
category: agents
order: 7
---

# Code Reviewer

> Gatekeeper chất lượng kỹ thuật của bạn cho code marketing, script, và tự động hóa.

## Nhân viên này làm gì

**Vấn đề**: Đội marketing của bạn cần custom tracking script. Hoặc email automation code. Hoặc tích hợp trang đích. Ai đó trên đội viết nó. Nó hoạt động (kiểu như). Sau đó nó bị hỏng trong production. Hoặc rò rỉ dữ liệu. Hoặc làm chậm trang web của bạn 3 giây.

Code tồi tàn trong công cụ marketing tốn chuyển đổi, rò rỉ dữ liệu khách hàng, và tạo technical debt đội kỹ thuật phải sửa sau.

**Giải pháp**: Code Reviewer là kỹ sư cấp cao của bạn kiểm toán code liên quan marketing về chất lượng, bảo mật, hiệu suất, và best practice trước khi nó ship. Hãy nghĩ nó như là có một cổng chất lượng code bắt các vấn đề trước khách hàng thấy chúng.

Tracking script trang đích, pixel theo dõi, mẫu email với code, quy trình tự động hóa—tất cả được xem xét cho sẵn sàng production.

## Khởi động nhanh

Ví dụ 30 giây—xem xét tracking script:

```
Bạn: "Review this Facebook Pixel tracking code before we deploy"

code-reviewer: Analyzing tracking implementation...

[Reads: scripts/facebook-pixel.js]

CODE REVIEW SUMMARY

Scope:
- Files reviewed: facebook-pixel.js (47 lines)
- Review focus: Security, performance, best practices
- Target: Production landing page

CRITICAL ISSUES:

1. API Key Exposed in Client-Side Code [SECURITY VIOLATION]
   Line 12: const apiKey = 'sk_live_abc123...'
   Issue: Secret API key hardcoded in client JavaScript
   Risk: Anyone can view source and steal your API key
   Impact: Unauthorized access to your Facebook Ad account
   Fix: Remove API key, use server-side Facebook Conversions API
   Status: MUST FIX before deploy (P0 blocker)

2. No Error Handling [PRODUCTION RISK]
   Line 23: fbq('track', 'Purchase', purchaseData);
   Issue: If Facebook Pixel fails to load, script crashes
   Impact: User checkout flow breaks, lost revenue
   Fix: Wrap in try-catch, fail gracefully
   Status: MUST FIX before deploy (P0 blocker)

HIGH PRIORITY FINDINGS:

3. Blocking Script Load [PERFORMANCE]
   Issue: Synchronous load blocks page rendering
   Impact: +800ms page load time, 10-15% bounce rate increase
   Fix: Add 'async' or 'defer' attribute

4. Missing GDPR Consent Check [COMPLIANCE]
   Issue: Fires pixel before user consents to cookies
   Risk: GDPR violation, up to €20M fine
   Fix: Check consent before initializing

MEDIUM PRIORITY IMPROVEMENTS:

5. Missing TypeScript Types
6. No Retry Logic
7. Console Logging in Production

LOW PRIORITY SUGGESTIONS:

8. Could use modern async/await syntax
9. Missing JSDoc comments for functions
10. Variable naming could be more descriptive

POSITIVE OBSERVATIONS:

✓ Event names follow Facebook standard convention
✓ Data structure matches Facebook Pixel spec
✓ Code is relatively clean and readable

RECOMMENDED ACTIONS:

BEFORE DEPLOY (Blockers):
1. Remove hardcoded API key → Use server-side API (30 min)
2. Add error handling with try-catch (10 min)
3. Implement GDPR consent check (15 min)
4. Add async attribute to script tag (2 min)

DEPLOYMENT CHECKLIST:

Before deploying to production:
□ API key removed from client code
□ Error handling added
□ GDPR consent check implemented
□ Async script loading enabled
□ Tested in staging environment
□ Verified with ad blockers enabled
□ Confirmed no console errors
□ Performance tested (Lighthouse score)

Next steps: Fix P0 blockers, then re-submit for final review?
```

## Khả năng

### 1. Đánh giá Chất lượng Code Marketing

Xem xét tracking script, code trang đích, mẫu email.

### 2. Đánh giá Lỗ hổng Bảo mật

Bắt các vấn đề bảo mật trước khi chúng rò rỉ dữ liệu.

### 3. Tối ưu hóa Hiệu suất

Xác định code làm chậm trang marketing.

## Khi sử dụng Code Reviewer

**Hoàn hảo cho:**
- Xem xét tracking script trước triển khai
- Xác thực code mẫu email
- Kiểm toán hiệu suất trang đích
- Kiểm tra bảo mật biểu mẫu
- Code tự động hóa marketing
- Xem xét tích hợp bên thứ ba

**Không cần:**
- Backend engineering code (sử dụng Engineer Kit)
- Xem xét nội dung (sử dụng Content Reviewer)
- Câu hỏi chiến lược (sử dụng Brainstormer)
- Tài sản không code (hình ảnh, bản sao, thiết kế)

## Best Practices

### 1. Không bao giờ Tin tưởng Input Phía khách hàng

**Tồi:** Sử dụng user input trực tiếp
**Tốt:** Xác thực + vệ sinh tất cả input

Xác thực phía khách hàng là UX. Xác thực phía máy chủ là bảo mật.

### 2. Hiệu suất là một Tính năng

**Tồi:** "It works, ship it"
**Tốt:** "It works and loads in < 2s"

Mỗi độ trễ 1 giây tốn ~7% chuyển đổi.

### 3. Bảo mật theo Mặc định

**Tồi:** Thêm bảo mật nếu có thời gian
**Tốt:** Xây dựng bảo mật từ đầu

Sửa các vấn đề bảo mật sau khởi động đắt gấp 10 lần.

## Các nhân viên liên quan

- [Campaign Debugger](/docs/marketing/agents/campaign-debugger) - Gỡ lỗi các vấn đề runtime sau khi code triển khai
- [Content Reviewer](/docs/marketing/agents/content-reviewer) - Xem xét các tài sản marketing không code
- [Campaign Manager](/docs/marketing/agents/campaign-manager) - Thực thi các chiến dịch với code được xem xét

## Các lệnh liên quan

- `/review code` - Đánh giá chất lượng code toàn diện
- `/security audit` - Quét lỗ hổng bảo mật
- `/performance check` - Phân tích tốc độ trang và tối ưu hóa

---

**Chất lượng code trong marketing không phải là tùy chọn. Đó là sự khác biệt giữa các chiến dịch chuyển đổi và các chiến dịch bị lỗi.**

Sẵn sàng ship code marketing an toàn, nhanh, đáng tin cậy? Bắt đầu xem xét.
