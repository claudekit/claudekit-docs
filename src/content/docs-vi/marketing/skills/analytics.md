---
lang: vi
title: "ckm:analytics"
description: "Phân tích marketing với tích hợp GA4 API, theo dõi KPI, mô hình phân bổ và báo cáo dựa trên dữ liệu để tối ưu hiệu suất."
section: marketing
category: skills
order: 4
---

# Analytics

> Biến dữ liệu marketing thành insights hành động thông qua báo cáo tự động, phân tích phân bổ và theo dõi ROI.

## Skill Này Làm Gì

**Thách thức**: Đội marketing bị chìm đắm trong dữ liệu từ GA4, nền tảng quảng cáo, công cụ email và CRM. Báo cáo thủ công tốn thời gian và phân bổ đa kênh rất phức tạp.

**Giải pháp**: Skill Analytics cung cấp tích hợp GA4 API, khung KPI dựng sẵn, mô hình phân bổ và tạo báo cáo tự động. Bao gồm trực quan hóa Mermaid.js và ưu tiên hóa khuyến nghị hành động.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt cho agent Analytics Analyst, Campaign Manager và Growth Specialist.

**Tường minh**: Kích hoạt qua prompt:
```
Activate analytics skill to [mô tả tác vụ]
```

## Tính Năng

### 1. Tích Hợp Google Analytics 4 API
Truy vấn dữ liệu GA4 theo chương trình cho báo cáo và dashboard tùy chỉnh.

**Thiết lập**:
```bash
npm install @google-analytics/admin @google-analytics/data
```

**Liệt kê tài khoản và thuộc tính**:
```bash
node scripts/ga-list-accounts.cjs --summaries
```

**Chạy báo cáo tùy chỉnh**:
```bash
node scripts/ga-run-report.cjs \
  --property=PROPERTY_ID \
  --dimensions=country,city \
  --metrics=activeUsers,sessions \
  --start-date=30daysAgo \
  --end-date=today
```

**Tài liệu API**:
- Admin API: `references/ga-admin-api.md`
- Data API: `references/ga-data-api.md`

### 2. Khung KPI và Theo Dõi
Các chỉ số đã định nghĩa sẵn cho thu hút, tương tác, chuyển đổi và giữ chân.

**KPI marketing cốt lõi**:
| Danh mục | Chỉ số |
|----------|--------|
| Thu hút | CAC (Chi phí thu hút khách hàng), CPL (Chi phí mỗi lead), Lưu lượng |
| Tương tác | CTR (Tỷ lệ nhấp), Thời gian trên trang, Bounce Rate |
| Chuyển đổi | CVR (Tỷ lệ chuyển đổi), ROAS (Lợi tức trên chi tiêu quảng cáo), Doanh thu |
| Giữ chân | LTV (Giá trị trọn đời), Churn Rate, NPS (Điểm khuyến nghị thuần) |

**Tải khung**: `references/marketing-kpis.md`

### 3. Mô Hình Phân Bổ
So sánh các mô hình phân bổ để hiểu đóng góp của từng kênh.

**Mô hình có sẵn**:
- **Last-click**: Toàn bộ ghi công cho điểm chạm cuối
- **First-click**: Toàn bộ ghi công cho điểm chạm đầu
- **Linear**: Ghi công đều cho tất cả điểm chạm
- **Time-decay**: Ghi công nhiều hơn cho điểm chạm gần đây
- **Position-based**: 40% đầu, 40% cuối, 20% giữa

**Hướng dẫn mô hình**: `references/attribution-models.md`

## Điều Kiện Tiên Quyết

**Để truy cập GA4 API**:
- Google Cloud project với GA4 APIs đã bật
- Service account HOẶC thông tin xác thực OAuth 2.0
- File thông tin xác thực trong `.claude/secrets/`:
  - `ga_service_account.json` (service account)
  - HOẶC `google_client_secret.json` (OAuth)

**Để tạo báo cáo**:
- Nguồn dữ liệu đã cấu hình (GA4, nền tảng quảng cáo, email, CRM)

## Cấu Hình

**Vị trí thông tin xác thực**: `.claude/secrets/`
- `ga_service_account.json` - Service account (khuyến nghị cho tự động hóa)
- `google_client_secret.json` - OAuth (thiết lập tương tác)
- `google_tokens.json` - OAuth token (tự tạo)

**Mẫu báo cáo**: `references/report-templates.md`

## Thực Hành Tốt Nhất

**1. Theo Dõi Chỉ Số Dẫn Đầu, Không Chỉ Chỉ Số Trễ**
Theo dõi chỉ số tương tác (dẫn đầu) để dự đoán chuyển đổi (trễ).

**2. So Sánh Cùng Loại Với Cùng Loại**
Sử dụng khung thời gian và phân khúc nhất quán. So sánh năm này sang năm khác theo tính mùa vụ.

**3. Ý Nghĩa Thống Kê Trước Kết Luận**
Đảm bảo cỡ mẫu hỗ trợ insights. Sử dụng khoảng tin cậy cho A/B test.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Báo Cáo Hiệu Suất Chiến Dịch Hàng Tuần
**Tình huống**: Tạo báo cáo hàng tuần so sánh hiệu suất kênh.

**Quy trình**:
1. Lấy dữ liệu GA4 cho 7 ngày qua
2. Tính các tỷ lệ chính (CAC, ROAS, CVR)
3. So sánh với tuần trước và chuẩn mực
4. Tạo biểu đồ Mermaid.js
5. Ưu tiên khuyến nghị

**Kết quả**: Báo cáo Markdown với:
- Bảng hiệu suất kênh
- Trực quan hóa xu hướng
- 3 hành động hàng đầu với người chịu trách nhiệm

**Mẫu**: `references/report-templates.md` → Weekly Performance

### Trường Hợp 2: Phân Tích Phân Bổ Cho Chiến Dịch Đa Điểm Chạm
**Tình huống**: Hiểu cách các kênh phối hợp trong hành trình khách hàng 30 ngày.

**Quy trình**:
1. Xuất dữ liệu đường dẫn GA4
2. Áp dụng các mô hình phân bổ (last-click, linear, position-based)
3. So sánh đóng góp kênh theo các mô hình
4. Xác định kênh bị đánh giá thấp
5. Khuyến nghị phân bổ lại ngân sách

**Kết quả**: Bảng so sánh phân bổ với khuyến nghị tối ưu ngân sách.

## Xử Lý Sự Cố

**Vấn đề**: GA4 API trả về 403 Forbidden
**Giải pháp**:
1. Xác minh API đã bật trong Google Cloud Console
2. Kiểm tra service account có quyền truy cập thuộc tính GA4 (tối thiểu vai trò Viewer)
3. Xác nhận định dạng property ID: `properties/123456789`

**Vấn đề**: Báo cáo hiển thị đột biến dữ liệu bất thường
**Giải pháp**:
1. Kiểm tra bot traffic (lọc IP nội bộ)
2. Xác minh triển khai theo dõi (GTM tag firing)
3. So sánh sự kiện thô với chỉ số đã xử lý

**Vấn đề**: Kết quả mô hình phân bổ không khớp giao diện GA4
**Giải pháp**: GA4 sử dụng phân bổ dựa trên dữ liệu theo mặc định. Script dùng mô hình dựa trên quy tắc. Ghi lại sự khác biệt về phương pháp.

## Skill Liên Quan

- [Campaign Management](/vi/docs/marketing/skills/campaign) - Theo dõi và tối ưu chiến dịch
- [SEO Optimization](/vi/docs/marketing/skills/seo) - Phân tích lưu lượng tìm kiếm
- [Email Marketing](/vi/docs/marketing/skills/email-marketing) - Chỉ số hiệu suất email
- [Ads Management](/vi/docs/marketing/skills/ads-management) - Theo dõi ROAS chiến dịch trả phí

## Lệnh Liên Quan

- `/analytics/dashboard` - Tạo snapshot dashboard
- `/analytics/keywords` - Phân tích hiệu suất tìm kiếm
- `/ckm:analyze` - Phân tích dữ liệu chung
- `/ckm:analyze:report` - Tạo báo cáo tùy chỉnh
