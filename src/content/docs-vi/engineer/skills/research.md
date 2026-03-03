---
title: "ck:research"
description: Phương pháp nghiên cứu có hệ thống cho các giải pháp kỹ thuật với xác thực đa nguồn và báo cáo toàn diện
section: engineer
kit: engineer
category: skills/tools
order: 8
published: true
lang: vi
---

# Research

Xác thực các quyết định kỹ thuật bằng nghiên cứu đa nguồn trước khi triển khai. Tối đa 5 lần tìm kiếm mỗi task.

## Nguyên Tắc Cốt Lõi

**Tuân thủ YAGNI, KISS, DRY. Nghiên cứu để loại bỏ sự không chắc chắn, không phải để thỏa mãn sự tò mò.**

Nghiên cứu là lãng phí nếu nó không ảnh hưởng đến một quyết định. Trước khi tìm kiếm, hãy biết quyết định nào phụ thuộc vào câu trả lời. Tập trung vào các nguồn có thẩm quyền (docs, repos, CVEs), tham chiếu chéo để đảm bảo độ chính xác, ưu tiên 12 tháng gần nhất. Trung thực thẳng thắn hơn là lịch sự chung chung.

## Khi Nào Sử Dụng

Luôn dùng khi:
- Đánh giá thư viện/framework trước khi áp dụng
- Điều tra lỗ hổng bảo mật hoặc phương pháp tốt nhất
- So sánh các hướng tiếp cận giải pháp với trade-off chưa rõ
- Tạo spec kỹ thuật cần bằng chứng

Đặc biệt khi:
- Nhóm chưa quen với công nghệ (giảm phỏng đoán)
- Quan trọng về bảo mật/hiệu suất (cần benchmarks, CVEs)
- Có nhiều giải pháp tồn tại (cần phân tích so sánh)
- Migration legacy (phải xác minh deprecation/compatibility)

## Quy Trình

### 1. Xác Định Phạm Vi + Tiêu Chí Quyết Định
Xác định: Quyết định nào cần nghiên cứu này? Sự thật nào sẽ thay đổi kết quả? Đặt ranh giới (độ sâu, độ mới, nguồn). Ví dụ: "Thư viện auth nào cho Next.js?" → Tiêu chí: được duy trì, lịch sử bảo mật, hỗ trợ TypeScript, <50kb.

### 2. Tìm Kiếm Có Hệ Thống (Tối Đa 5)
**Ưu tiên**: `gemini -m gemini-2.5-flash -p "your prompt"` (nếu có)
**Dự phòng**: Công cụ `WebSearch`

**Fan-out truy vấn** trên:
- Docs chính thức, GitHub repos, changelogs
- Cơ sở dữ liệu CVE (chủ đề bảo mật)
- Chuyên gia/hội nghị được công nhận (video)
- Benchmarks, case studies (hiệu suất)

Tham chiếu chéo tối thiểu 3 nguồn. Kiểm tra ngày. Xác định đồng thuận vs ngoại lệ.

### 3. Phân Tích + Tổng Hợp
So sánh: Ưu/nhược điểm, độ trưởng thành, mức độ áp dụng, bảo mật, hiệu suất, khả năng tương thích. Đánh dấu: Tính năng deprecated, breaking changes, vấn đề chưa giải quyết. Kết quả: Khuyến nghị có thể thực hiện được với bằng chứng.

### 4. Tạo Báo Cáo
**Vị trí**: `{active-plan}/reports/researcher-YYMMDD-topic.md` (dự phòng: `plans/reports/`)

**Cấu trúc**:
```markdown
# Research: [Chủ Đề]

## Tóm Tắt Quyết Định
[1-2 đoạn: khuyến nghị + lý do]

## Phương Pháp
Nguồn: [danh sách], Phạm vi ngày: [X], Thuật ngữ tìm kiếm: [Y]

## Phát Hiện
### Tổng Quan Công Nghệ
### Phương Pháp Tốt Nhất
### Bảo Mật/Hiệu Suất
### Đánh Đổi

## Khuyến Nghị
### Bắt Đầu Nhanh
### Ví Dụ Code
### Các Lỗi Cần Tránh

## Tài Liệu Tham Khảo
[Links với tiêu đề]

## Chưa Giải Quyết
[Câu hỏi còn mở nếu có]
```

Hy sinh ngữ pháp để cô đọng. Dùng code blocks, sơ đồ mermaid/ASCII.

## Các Trường Hợp Sử Dụng Phổ Biến

### Lựa Chọn Thư Viện Auth
**Ai dùng**: Full-stack dev xây dựng SaaS
```
"Research các giải pháp auth Next.js. Cần: tích hợp Prisma, OAuth providers, quản lý session, TypeScript. So sánh NextAuth vs Clerk vs Supabase Auth. Đề xuất một giải pháp."
```

### Hướng Tiếp Cận Tối Ưu Hiệu Suất
**Ai dùng**: Frontend engineer với app chậm
```
"React dashboard render chậm. Research: Các chiến lược code splitting, lazy loading patterns, công cụ phân tích bundle. Tập trung vào các tối ưu hóa đặc thù Vite và benchmarks thực tế."
```

### Lộ Trình Migration Database
**Ai dùng**: Backend lead lên kế hoạch nâng cấp Postgres
```
"Migration từ Postgres 12 lên 16. Research breaking changes, cải thiện hiệu suất, công cụ migration. Kiểm tra vấn đề tương thích với Prisma 5.x."
```

### Đánh Giá Lỗ Hổng Bảo Mật
**Ai dùng**: DevOps điều tra CVE
```
"CVE-2024-XXXX ảnh hưởng đến version Express của chúng tôi. Research: Phạm vi tác động, độ khó khai thác, chiến lược vá lỗi, tùy chọn workaround. Kiểm tra xem Next.js 14 có bị ảnh hưởng không."
```

### Đánh Giá Framework Mới
**Ai dùng**: Nhóm xem xét chuyển đổi framework
```
"Đánh giá Astro vs Next.js cho content site. Ưu tiên: Tốc độ build, SEO, partial hydration, hỗ trợ markdown, đơn giản khi deploy. Cần dữ liệu cứng về thời gian build."
```

## Mẹo Pro

**Không kích hoạt?** Nói: *"Use research skill to investigate [topic] with multi-source validation and generate a report."*

**Phân bổ tìm kiếm**:
- Tìm kiếm 1-2: Khám phá rộng (docs chính thức, bài viết phổ biến)
- Tìm kiếm 3-4: Đào sâu (tính năng cụ thể, benchmarks, CVEs)
- Tìm kiếm 5: Edge cases/câu hỏi chưa giải quyết

**Dấu hiệu đỏ**:
- Chỉ một nguồn cho tuyên bố quan trọng
- Ngày >2 năm trước cho công nghệ thay đổi nhanh
- Tuyên bố mơ hồ không có ví dụ/dữ liệu

**Danh sách kiểm tra chất lượng**:
- [ ] 3+ nguồn có thẩm quyền được tham chiếu chéo
- [ ] Ví dụ code được đưa vào (nếu áp dụng)
- [ ] Tác động bảo mật được đề cập
- [ ] Dữ liệu hiệu suất được trích dẫn (nếu liên quan)
- [ ] Ghi chú migration/tương thích rõ ràng

**Báo cáo hiệu quả**:
- Dùng bullet points thay vì đoạn văn
- Đặt khuyến nghị trước, bằng chứng sau
- Bỏ qua thông tin cơ bản hiển nhiên (giả định đối tượng kỹ thuật)
- Liệt kê các câu hỏi chưa giải quyết ở cuối

## Skill Liên Quan

- [Docs Seeker](/vi/docs/engineer/skills/docs-seeker) - Tra cứu tài liệu
- [Sequential Thinking](/vi/docs/engineer/skills/sequential-thinking) - Phân tích có cấu trúc
- [Planning](/vi/docs/engineer/skills/plan) - Thiết kế giải pháp

## Điểm Mấu Chốt

Skill Research tạo ra các quyết định kỹ thuật dựa trên bằng chứng thông qua xác thực đa nguồn có hệ thống, với các báo cáo tập trung vào khuyến nghị có thể thực hiện hơn là lý thuyết. Tối đa 5 lần tìm kiếm—suy nghĩ trước mỗi truy vấn.
