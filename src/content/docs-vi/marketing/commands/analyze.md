---
lang: vi
title: "/analyze"
description: "Tạo báo cáo phân tích và hiệu suất với thông tin chi tiết do AI cung cấp"
section: marketing
category: commands
order: 7
published: true
---

> Biến dữ liệu thành những hiểu biết hành động được thực hiện với phân tích do AI cung cấp

## Khởi động nhanh

```bash
/analyze traffic
```

**Kết quả**: `reports/analytics/251229-traffic.md` với xu hướng, thông tin chi tiết và khuyến nghị

## Cú pháp

```bash
/analyze <type>
```

### Loại phân tích

| Loại | Mô tả | Kết quả | Tích hợp MCP |
|------|-------|--------|-------------|
| `traffic` | Phân tích lưu lượng truy cập | Báo cáo lưu lượng | GA4 |
| `campaigns` | Hiệu suất chiến dịch | Tổng quan chiến dịch | GA4, Search Console |
| `conversions` | Phễu chuyển đổi | Phân tích phễu | GA4 |
| `funnel` | Số liệu phễu bán hàng | Báo cáo phễu | GA4 |
| `content` | Hiệu suất nội dung | Phân tích nội dung | GA4, Search Console |
| `engagement` | Số liệu mức độ tương tác | Báo cáo mức độ tương tác | GA4 |

## Ví dụ: Phân tích lưu lượng truy cập

**Đầu vào**:
```bash
/analyze traffic
```

**Kết quả mong đợi**:
```markdown
✓ analytics-analyst: Dữ liệu được thu thập từ GA4
✓ funnel-architect: Thông tin chi tiết được tạo

---
# Báo cáo phân tích lưu lượng
Khoảng thời gian: 30 ngày gần đây (29 tháng 12 - 29 tháng 1, 2025)

## TỔNG QUAN
Tổng phiên: 47.320 (+18% so với kỳ trước)
Tổng người dùng: 32.180 (+15%)
Lượt xem trang: 156.890 (+22%)
Tỷ lệ thoát: 42,3% (-8% cải thiện)
Thời gian phiên bình quân: 3m 24s (+12%)

## NGUỒN LƯỚI LƯỢNG HÀNG ĐẦU
1. Tìm kiếm hữu cơ: 18.940 phiên (40%)
2. Trực tiếp: 12.530 phiên (26%)
3. Phương tiện truyền thông xã hội: 8.210 phiên (17%)
4. Giới thiệu: 5.330 phiên (11%)
5. Quảng cáo trả phí: 2.310 phiên (5%)

## TRANG HÀNG ĐẦU
1. /pricing - 12.450 lượt xem (+28%)
2. /features - 9.230 lượt xem (+15%)
3. /blog/ai-automation - 8.140 lượt xem (+45%)
4. /case-studies - 6.720 lượt xem (+22%)
5. / (trang chủ) - 15.890 lượt xem (+12%)

## THÔNG TIN CHI TIẾT CHỦ YẾU
✓ Lưu lượng blog tăng vọt (+45% tăng trưởng)
✓ Chuyển đổi trang giá tăng 28%
✓ Giới thiệu phương tiện truyền thông xã hội đang tăng
⚠ Quảng cáo trả phí hiệu suất kém (5% so với mục tiêu 15%)
⚠ Tỷ lệ thoát di động cao (52%)

## KHUYẾN NGHỊ
1. Tăng tần suất xuất bản blog (tận dụng tăng trưởng)
2. Tối ưu hóa trải nghiệm di động (giảm 52% thoát)
3. Tạm dừng các chiến dịch quảng cáo hiệu suất kém
4. Tạo thêm nội dung nghiên cứu trường hợp (+22% tương tác)

Báo cáo đã lưu: reports/analytics/250129-traffic.md

Tiếp theo: /analyze conversions
```

## Tích hợp quy trình làm việc

```bash
# Quy trình phân tích hàng tuần
/analyze traffic
/analyze campaigns
/analyze conversions

# Đi sâu vào các vấn đề
/analyze engagement  # nếu mức độ tương tác thấp
/fix --quick Issues identified in analytics

# Chiến dịch cụ thể
/campaign analyze "Q1 Launch"
/analyze campaigns  # so sánh tất cả chiến dịch
```

## Tác nhân được sử dụng

- **analytics-analyst**: Phân tích dữ liệu và báo cáo
- **funnel-architect**: Thông tin chi tiết phễu và tối ưu hóa

## Kỹ năng được kích hoạt

- **analytics**: Các khung và phương pháp hay nhất phân tích

## Tích hợp MCP

- **Google Analytics 4**: Dữ liệu lưu lượng truy cập và hành vi
- **Search Console**: Hiệu suất tìm kiếm và xếp hạng

## Lệnh liên quan

- [/campaign](/vi/docs/marketing/commands/campaign) - Phân tích cụ thể chiến dịch
- [/seo](/vi/docs/marketing/commands/seo) - Hiệu suất SEO
- [/use-mcp](/vi/docs/marketing/commands/use-mcp) - Kết nối công cụ phân tích

---

**Quyết định dựa trên dữ liệu.** Phân tích do AI cung cấp hướng dẫn chiến lược của bạn.
