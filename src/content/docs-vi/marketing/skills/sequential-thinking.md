---
lang: vi
title: "ckm:sequential-thinking"
description: "Phân tích từng bước có cấu trúc với khả năng chỉnh sửa và phân nhánh — cho vấn đề phức tạp đòi hỏi tư duy thận trọng."
section: marketing
kit: marketing
category: skills
order: 102
---

# ckm:sequential-thinking

> Giải quyết vấn đề phức tạp thông qua chuỗi suy nghĩ có thể chỉnh sửa, phân nhánh và điều chỉnh động.

## Kỹ Năng Này Làm Gì

Skill `ckm:sequential-thinking` kích hoạt chế độ tư duy tuần tự có cấu trúc, cho phép Claude phân tích vấn đề theo từng bước rõ ràng. Khác với chain-of-thought thông thường, sequential thinking cho phép quay lại và chỉnh sửa các bước trước, tạo nhánh khi có nhiều hướng tiếp cận.

## Bắt Đầu Nhanh

```
/ckm:sequential-thinking
```

Hoặc mô tả bài toán:

```
/ckm:sequential-thinking Phân tích chiến lược go-to-market cho sản phẩm AI mới tại thị trường Việt Nam
```

## Tính Năng Chính

- **Step-by-step reasoning**: Mỗi bước được đánh số và giải thích rõ ràng
- **Revision capability**: Có thể quay lại và chỉnh sửa bước trước khi có thêm thông tin
- **Branch exploration**: Khám phá nhiều hướng giải quyết song song
- **Self-correction**: Nhận biết và sửa lỗi logic trong quá trình suy nghĩ
- **Confidence tracking**: Ghi chú mức độ chắc chắn ở từng bước

## Khi Nào Dùng

Sequential thinking phù hợp khi:
- Bài toán có nhiều dependencies giữa các bước
- Cần trace lại quá trình suy nghĩ
- Rủi ro cao, cần đảm bảo logic chặt chẽ
- Vấn đề yêu cầu cân nhắc nhiều yếu tố đồng thời

## Ví Dụ Sử Dụng

**Phân tích chiến lược:**
```
/ckm:sequential-thinking Đánh giá quyết định: mở rộng sang thị trường B2B hay tập trung B2C trước?
```

**Debugging phức tạp:**
```
/ckm:sequential-thinking Trace luồng xử lý payment — tìm tại sao 5% transaction bị fail silently
```

**Thiết kế hệ thống:**
```
/ckm:sequential-thinking Thiết kế kiến trúc notification system cho 1M users — cân nhắc scale và cost
```

## Ví Dụ Output

```
Bước 1: Xác định vấn đề cốt lõi
→ Conversion rate thấp ở checkout (2.3%), nghi ngờ UX friction

Bước 2: Thu thập bằng chứng
→ Heatmap: 70% users click nút "Back" tại payment form
→ Sửa Bước 1: Vấn đề là payment form, không phải toàn bộ checkout

Bước 3: Phân tích nguyên nhân
→ Form có 12 fields — industry benchmark là 4-6 fields
...
```

## Liên Quan

- [ckm:problem-solving](/vi/docs/marketing/skills/problem-solving) - Khung giải quyết vấn đề
- [ckm:brainstorming](/vi/docs/marketing/skills/brainstorming) - Khám phá giải pháp sáng tạo
