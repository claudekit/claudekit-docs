---
title: "Campaign Debugger"
description: "Điều tra các vấn đề marketing, chẩn đoán các vấn đề hiệu suất, và tối ưu hóa hiệu quả chiến dịch"
section: marketing
category: agents
order: 6
---

# Campaign Debugger

> Chuyên gia chẩn đoán marketing của bạn tìm thấy lý do tại sao các chiến dịch hoạt động kém và cách sửa chúng.

## Nhân viên này làm gì

**Vấn đề**: Tỷ lệ chuyển đổi chiến dịch Facebook Ads của bạn vừa giảm 50%. Tỷ lệ mở email của bạn đã giảm trong ba tuần. Lưu lượng truy cập trang đích tăng 40% nhưng signups phẳng. Một cái gì đó bị hỏng, nhưng bạn không biết cái gì.

Bạn cố gắng các bản sửa chữa ngẫu nhiên. Thay đổi tiêu đề. Điều chỉnh lạm dụng. Tweek CTA. Không có gì hoạt động. Bạn đang đốt ngân sách trên các chiến dịch hoạt động kém trong khi cố gắng đoán cái gì sai.

**Giải pháp**: Campaign Debugger là nhân viên phân tích marketing cấp cao của bạn, người có hệ thống điều tra các vấn đề hiệu suất, phân tích hành vi chiến dịch, xác định nguyên nhân gốc, và phát triển các giải pháp dựa trên dữ liệu. Không còn đoán. Không còn các bản sửa chữa ngẫu nhiên.

Hãy nghĩ nó như là có một thám tử nói thành thạo phân tích marketing.

## Khởi động nhanh

Ví dụ 30 giây—chẩn đoán giảm chuyển đổi:

```
Bạn: "Landing page conversion dropped from 5% to 2% overnight"

campaign-debugger: Investigating conversion drop...

INITIAL ASSESSMENT:
→ Severity: High (60% conversion loss)
→ Timing: Overnight drop suggests technical or deployment issue
→ Business impact: ~90 lost signups/day (based on traffic volume)

DATA COLLECTION:
→ Checking analytics for anomalies...
→ Reviewing recent code deployments...
→ Analyzing funnel drop-off points...
→ Examining device/browser breakdown...

ROOT CAUSE IDENTIFIED:

Issue: Form submission broken on mobile (Safari only)
Evidence:
→ Desktop conversion: 4.8% (stable) ✓
→ Mobile Chrome: 4.5% (stable) ✓
→ Mobile Safari: 0.3% (dropped from 4.7%) ✗
→ Mobile Safari = 65% of mobile traffic

Timeline Correlation:
→ Conversion drop: 10:34 AM yesterday
→ Code deployment: 10:30 AM yesterday
→ Deployment included: Form validation library update

Technical Analysis:
→ New validation library incompatible with iOS Safari 16.x
→ Form submit button appears clickable but doesn't fire
→ Console error: "Uncaught TypeError: Cannot read property..."
→ Affects iOS 16.0-16.4 (42% of Safari mobile users)

RECOMMENDED SOLUTION:

Immediate fix (< 1 hour):
1. Rollback form validation library to previous version
2. Test on iOS Safari 16.x device
3. Deploy hotfix

Long-term fix (this week):
1. Add iOS Safari 16.x to automated testing suite
2. Update validation library with compatibility patch
3. Implement error tracking on form submit failures

IMPACT PROJECTION:

Current state: 2% conversion (losing 90 signups/day)
After fix: 5% conversion (back to baseline)
Recovery time: Immediate (< 1 hour)

Revenue impact:
→ Daily loss: 90 signups × 10% conversion × $100 LTV = $900/day
→ Days affected: 1.5
→ Total impact: $1,350 in lost revenue

PREVENTIVE MEASURES:
1. Add cross-browser testing to deployment checklist
2. Implement form submit error monitoring (use Sentry)
3. Add analytics alerts for >20% conversion drops
4. Test on top 5 device/browser combinations before deploy

Next steps: Deploy rollback now, then investigate long-term fix?
```

## Khả năng

### 1. Performance Anomaly Detection

Xác định các mô hình bất thường và nguyên nhân của chúng.

### 2. Funnel Analysis

Xác định nơi chuyển đổi bị hỏng.

### 3. Attribution Analysis

Hiểu kênh nào thực sự mang lại kết quả.

### 4. A/B Test Analysis

Chẩn đoán tại sao các bài kiểm tra không mang lại kết quả.

### 5. Competitive Analysis

Hiểu hiệu suất của bạn so sánh như thế nào.

## Khi sử dụng Campaign Debugger

**Hoàn hảo cho:**
- Chẩn đoán giảm hiệu suất đột ngột
- Điều tra xu hướng suy giảm dần dần
- Phân tích các chiến dịch hoạt động kém
- Khắc phục sự cố chuyển đổi phễu
- Các vấn đề phương pháp A/B test
- Phân tích attribution

**Không cần:**
- Thiết lập chiến dịch (sử dụng Campaign Manager)
- Tạo nội dung (sử dụng Copywriter)
- Câu hỏi chiến lược (sử dụng Brainstormer)
- Phân tích dữ liệu đang diễn ra (sử dụng Content Reviewer trước)

## Best Practices

### 1. Điều tra Trước Sửa chữa

**Tồi:** "Conversion dropped, let's change the headline"
**Tốt:** "Conversion dropped, let me analyze what actually changed"

Random fixes lãng phí thời gian. Chẩn đoán trước.

### 2. Tìm Thay đổi Gần đây

Hầu hết các vấn đề tương quan với các thay đổi gần đây:
- Triển khai code
- Cập nhật nội dung
- Khởi động chiến dịch
- Thay đổi công cụ/nhà cung cấp

### 3. Sử dụng Dữ liệu, Không Giác quán

**Tồi:** "I think the traffic quality is worse"
**Tốt:** "Paid social CTR dropped from 3.2% to 1.1%, indicating audience mismatch"

Bằng chứng thắng giác quán.

## Các nhân viên liên quan

- [Campaign Manager](/docs/marketing/agents/campaign-manager) - Thực thi các chiến dịch mà Campaign Debugger giúp tối ưu hóa
- [Content Reviewer](/docs/marketing/agents/content-reviewer) - Kiểm tra chất lượng trước khi khởi động để ngăn chặn các vấn đề
- [Brainstormer](/docs/marketing/agents/brainstormer) - Xác thực chiến lược trước các chiến dịch khởi động

## Các lệnh liên quan

- `/debug` - Điều tra các vấn đề hiệu suất marketing
- `/analyze` - Phân tích sâu về phân tích
- `/diagnose` - Khắc phục sự cố các vấn đề chiến dịch

---

**Các chiến dịch tuyệt vời không chỉ hoạt động tốt—chúng hoạt động nhất quán. Khi họ không, bạn cần biết tại sao.**

Sẵn sàng tìm thấy những gì bị hỏng và sửa nó? Bắt đầu gỡ lỗi.
