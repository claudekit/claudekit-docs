---
lang: vi
title: "ckm:ab-test-setup"
description: "Lập kế hoạch, thiết kế và triển khai A/B test cho thí nghiệm marketing"
section: marketing
kit: marketing
category: skills
order: 60
---

# A/B Test Setup

> Chạy thí nghiệm có kiểm soát để ra quyết định dựa trên dữ liệu, không dựa vào phỏng đoán.

## Skill Này Làm Gì

**Thách thức**: Các nhóm marketing thay đổi nhiều biến cùng lúc, chạy test với cỡ mẫu không đủ, hoặc kết thúc thí nghiệm sớm — dẫn đến kết luận sai và lãng phí ngân sách.

**Giải pháp**: Skill ab-test-setup hướng dẫn toàn bộ vòng đời A/B test: tính toán cỡ mẫu, thiết kế thí nghiệm, triển khai tracking, phân tích thống kê và tài liệu hóa kết quả.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi người dùng đề cập "A/B test", "split test", "thí nghiệm" hoặc "tối ưu chuyển đổi".

**Tường minh**: Kích hoạt qua prompt:
```
Activate ab-test-setup skill to [mô tả thí nghiệm]
```

## Tính Năng

### 1. Tính Toán Cỡ Mẫu
Xác định số lượng visitor cần thiết để đạt ý nghĩa thống kê trước khi bắt đầu test.

**Tham số đầu vào**:
- Tỷ lệ chuyển đổi baseline (ví dụ: 3%)
- Mức cải thiện tối thiểu cần phát hiện (ví dụ: 20% tương đối)
- Mức ý nghĩa thống kê (thường 95%)
- Statistical power (thường 80%)

**Công thức ước tính nhanh**:
```
Cỡ mẫu ≈ (16 × σ²) / δ²
σ = độ lệch chuẩn baseline
δ = mức khác biệt tối thiểu cần phát hiện
```

### 2. Thiết Kế Thí Nghiệm
Cấu trúc test để tránh sai lệch và đảm bảo kết quả tin cậy.

**Checklist thiết kế**:
- [ ] Một biến thay đổi duy nhất mỗi test
- [ ] Giả thuyết rõ ràng trước khi bắt đầu
- [ ] Phân chia lưu lượng ngẫu nhiên (50/50 cho test hai nhánh)
- [ ] Tách biệt phân khúc audience
- [ ] Xác định ngày kết thúc trước (không dừng sớm)
- [ ] Loại trừ người dùng đã thấy cả hai biến thể

### 3. Tracking và Implementation
Thiết lập theo dõi sự kiện chính xác cho cả hai biến thể.

**Ví dụ tracking với GA4**:
```javascript
// Ghi nhận phân bổ biến thể
gtag('event', 'experiment_impression', {
  experiment_id: 'checkout-cta-v2',
  variant_id: 'control' // hoặc 'variant_a'
});

// Ghi nhận sự kiện chuyển đổi
gtag('event', 'purchase', {
  experiment_id: 'checkout-cta-v2',
  variant_id: 'variant_a',
  value: orderValue
});
```

### 4. Phân Tích Thống Kê
Đánh giá kết quả với phương pháp thống kê phù hợp.

**Kiểm định chi-square cho tỷ lệ chuyển đổi**:
```
Chi-square = Σ (Quan sát - Kỳ vọng)² / Kỳ vọng
p-value < 0.05 → Kết quả có ý nghĩa thống kê
```

**Kết quả cần báo cáo**:
| Chỉ số | Control | Variant A | Thay đổi |
|--------|---------|-----------|----------|
| Visitors | 5,000 | 5,000 | - |
| Conversions | 150 | 185 | +23.3% |
| CVR | 3.0% | 3.7% | +23.3% |
| p-value | - | - | 0.021 |

## Điều Kiện Tiên Quyết

- Lưu lượng đủ lớn (tối thiểu 1,000 visitor/tuần)
- Hệ thống tracking đang hoạt động (GA4, Mixpanel, hoặc tương đương)
- Khả năng phân chia lưu lượng (feature flags, A/B testing platform)

## Cấu Hình

**Nền tảng A/B testing phổ biến**:
- **Google Optimize** (miễn phí, tích hợp GA4)
- **Optimizely** (enterprise)
- **VWO** (SMB-friendly)
- **LaunchDarkly** (feature flags + A/B)
- **PostHog** (mã nguồn mở, self-hosted)

## Thực Hành Tốt Nhất

**1. Test Một Thứ Mỗi Lần**
Thay đổi nhiều yếu tố cùng lúc khiến không biết yếu tố nào tạo ra sự khác biệt.

**2. Đặt Thời Hạn Test Trước**
Dừng test khi "gần có ý nghĩa" là sai lệch phổ biến nhất. Cam kết với thời gian tối thiểu (thường 2 tuần).

**3. Theo Dõi Chỉ Số Phụ**
Cải thiện CTR nhưng giảm AOV? Kiểm tra toàn bộ funnel trước khi triển khai.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Test CTA Button
**Giả thuyết**: Thay "Đăng ký miễn phí" thành "Bắt đầu ngay — Miễn phí" tăng CTR.

**Quy trình**:
1. Tính cỡ mẫu: CVR hiện tại 2.5%, MDE 15% → ~3,500 visitor/nhánh
2. Thiết kế: Chỉ thay text button, giữ nguyên màu và vị trí
3. Chạy 14 ngày
4. Phân tích: p-value, confidence interval, segment breakdown

**Kết quả**: Tài liệu quyết định với số liệu hỗ trợ.

### Trường Hợp 2: Test Landing Page Headline
**Giả thuyết**: Headline tập trung vào lợi ích thay vì tính năng tăng conversion.

**Quy trình**:
1. Viết 3 biến thể headline (benefit-focused)
2. Phân chia lưu lượng 25/25/25/25
3. Chạy đến khi đạt ý nghĩa thống kê (≥95%)
4. Triển khai winner, lưu hồ sơ thí nghiệm

## Xử Lý Sự Cố

**Vấn đề**: Test chạy 3 tuần nhưng chưa đạt ý nghĩa thống kê
**Giải pháp**: Lưu lượng có thể không đủ. Xem xét tăng MDE (giảm ngưỡng cải thiện cần phát hiện) hoặc kéo dài thời gian test.

**Vấn đề**: Kết quả không nhất quán giữa các phân khúc
**Giải pháp**: Phân tích interaction effects. Thiết bị, nguồn lưu lượng, hay thời gian trong ngày có thể là confounding variables.

## Skill Liên Quan

- [Analytics](/vi/docs/marketing/skills/analytics) - Theo dõi kết quả thí nghiệm
- [Form CRO](/vi/docs/marketing/skills/form-cro) - Tối ưu form dựa trên kết quả test
- [Marketing Psychology](/vi/docs/marketing/skills/marketing-psychology) - Lý thuyết đằng sau các biến thể test

## Lệnh Liên Quan

- `/ckm:ab-test-setup` - Bắt đầu thiết kế thí nghiệm
- `/ckm:analyze` - Phân tích kết quả test hiện có
- `/ckm:plan` - Lập kế hoạch roadmap testing
