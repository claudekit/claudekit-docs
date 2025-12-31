---
title: "Hướng Dẫn Thương Hiệu"
description: "Giọng thương hiệu, nhận dạng hình ảnh, quản lý tài sản và thực thi tính nhất quán với xác nhận tự động và trích xuất màu."
lang: vi
section: marketing
category: skills
order: 14
---

> Duy trì tính nhất quán thương hiệu trên tất cả các tài liệu tiếp thị với xác nhận tự động, tổ chức tài sản và khung âm thanh.

## Skill Này Làm Gì

**Thách Thức**: Sự không nhất quán thương hiệu làm suy yếu công nhân phân biệt và xói mòn niềm tin. Quản lý tài sản, thực thi hướng dẫn giọng nói và duy trì tiêu chuẩn hình ảnh trên các đội là thủ công và dễ xảy ra lỗi.

**Giải Pháp**: Skill Hướng Dẫn Thương Hiệu cung cấp khung giọng thương hiệu, hệ thống nhận dạng hình ảnh, các mô hình tổ chức tài sản và các tập lệnh xác nhận tự động. Bao gồm trích xuất màu, quy ước đặt tên tài sản và tiêm bối cảnh thương hiệu cho nội dung được tạo AI.

## Kích Hoạt

**Ẩn Danh**: Kích hoạt tự động cho Content Creator, Social Media Manager, Email Wizard và UI/UX Designer agent.

**Rõ Ràng**: `/skill:add brand-guidelines`

## Khả Năng

### 1. Khung Giọng Thương Hiệu
Xác định và áp dụng tông giọng nhất quán trên tất cả nội dung.

**Các Chiều Giọng**:
- **Tông Giọng**: Chính Thức ↔ Bình Thường
- **Ngôn Ngữ**: Đơn Giản ↔ Phức Tạp
- **Nhân Vật**: Nghiêm Túc ↔ Vui Tươi
- **Cảm Xúc**: Dự Trữ ↔ Biểu Cảm

**Hướng Dẫn Khung**: `references/voice-framework.md`

**Tiêm Bối Cảnh Thương Hiệu**:
```bash
# Trích xuất bối cảnh thương hiệu cho prompt
node scripts/inject-brand-context.cjs

# Định dạng JSON để sử dụng lập trình
node scripts/inject-brand-context.cjs --json
```

### 2. Quản Lý Nhận Dạng Hình Ảnh
Bảng màu, kiểu chữ, cách sử dụng logo và tổ chức tài sản.

**Quản Lý Màu**:
```bash
# Hiển thị bảng thương hiệu
node scripts/extract-colors.cjs --palette

# So sánh màu tài sản với bảng thương hiệu
node scripts/extract-colors.cjs path/to/image.png
```

**Các Phần Tử Hình Ảnh**:
- Biến thể logo (đầy đủ, biểu tượng, đơn sắc)
- Bảng màu (chính, phụ, nhấn)
- Kiểu chữ (tiêu đề, phần thân, mã)
- Hướng dẫn kiểu ảnh

**Hướng Dẫn Hình Ảnh**: `references/visual-identity.md`

### 3. Xác Nhận và Tổ Chức Tài Sản
Kiểm tra tự động về tuân thủ tài sản và tổ chức tệp hệ thống.

**Xác Nhận Tài Sản**:
```bash
# Kiểm tra tuân thủ đặt tên, định dạng, kích thước
node scripts/validate-asset.cjs path/to/asset.png

# Kết Quả JSON cho CI/CD
node scripts/validate-asset.cjs path/to/asset.png --json
```

**Quy Ước Đặt Tên**:
```
{type}_{campaign}_{description}_{timestamp}_{variant}.{ext}

Ví Dụ:
banner_product-launch_hero_20251209_16-9.png
logo_rebrand_horizontal_20251209.svg
```

**Hướng Dẫn Tổ Chức**: `references/asset-organization.md`

## Điều Kiện Tiên Quyết

- Tài liệu hướng dẫn thương hiệu (`docs/brand-guidelines.md`)
- Cấu trúc thư mục tài sản (tạo tự động nếu thiếu)

## Cấu Hình

**Quy Trình Đồng Bộ Thương Hiệu**:
```bash
# 1. Chỉnh sửa docs/brand-guidelines.md

# 2. Đồng bộ hóa các token thiết kế
node scripts/sync-brand-to-tokens.cjs

# 3. Xác minh đồng bộ hóa
node scripts/inject-brand-context.cjs --json | head -20
```

**Tệp Đồng Bộ Hóa**:
- `docs/brand-guidelines.md` → Nguồn sự thật
- `assets/design-tokens.json` → Định nghĩa token
- `assets/design-tokens.css` → Biến CSS

**Cấu Trúc Thư Mục**:
```
.assets/                  # Siêu dữ liệu theo dõi Git
├── manifest.json         # Sổ đăng ký tài sản
├── tags.json            # Hệ thống gắn thẻ
├── versions/            # Lịch sử phiên bản
└── metadata/            # Siêu dữ liệu cụ thể loại

assets/                   # Tệp Thô
├── designs/             # Chiến dịch, web, in
├── banners/             # Phương tiện xã hội, email, hạ cánh
├── logos/               # Đầy đủ, biểu tượng, đơn sắc
├── videos/              # Quảng cáo, hướng dẫn
└── generated/           # Được tạo AI (dấu thời gian)
```

## Phương Pháp Tốt Nhất

**1. Tính Nhất Quán Vượt Qua Hoàn Hảo**
Áp dụng hướng dẫn nhất quán, ngay cả khi chúng phát triển theo thời gian. Sự không nhất quán có hại hơn các quy tắc không hoàn hảo.

**2. Giọng Thích Nghi, Tính Cách Ở Lại**
Tông giọng có thể thay đổi theo kênh (LinkedIn chuyên nghiệp, Twitter bình thường), nhưng tính cách cốt lõi vẫn không đổi.

**3. Kiểm Tra Hàng Quý**
Xem xét tính nhất quán thương hiệu trên các kênh mỗi 3 tháng. Cập nhật hướng dẫn khi thương hiệu phát triển.

## Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp Sử Dụng 1: Tiêm Bối Cảnh Thương Hiệu Cho Nội Dung AI
**Tình Huống**: Tạo bài đăng blog với giọng thương hiệu được áp dụng tự động.

**Quy Trình Công Việc**:
1. Trích xuất bối cảnh thương hiệu: `node scripts/inject-brand-context.cjs`
2. Chuyển bối cảnh vào prompt AI (giọng, màu, nhắn tin)
3. Tạo nội dung duy trì tính nhất quán thương hiệu
4. Xác nhận đầu ra dựa vào khung giọng

**Kết Quả**: Nội dung phù hợp giọng thương hiệu mà không cần chỉnh sửa thủ công.

### Trường Hợp Sử Dụng 2: Quy Trình Phê Duyệt Tài Sản
**Tình Huống**: Đội thiết kế tạo banner phương tiện xã hội, cần kiểm tra tuân thủ thương hiệu.

**Quy Trình Công Việc**:
1. Nhà thiết kế tạo tài sản theo quy ước đặt tên
2. Chạy xác nhận: `node scripts/validate-asset.cjs banner.png`
3. Kiểm tra tuân thủ màu: `node scripts/extract-colors.cjs banner.png`
4. So sánh với bảng thương hiệu (tập lệnh hiển thị độ lệch)
5. Điều chỉnh màu nếu cần, xác nhận lại
6. Đăng ký trong manifest.json

**Kết Quả**: Tài sản phù hợp thương hiệu sẵn sàng sử dụng.

## Khắc Phục Sự Cố

**Vấn Đề**: Nội dung được tạo AI không khớp với giọng thương hiệu
**Giải Pháp**: Sử dụng `inject-brand-context.cjs` để trích xuất các tham số giọng. Bao gồm trong lời nhắc hệ thống cho tất cả tạo nội dung.

**Vấn Đề**: Màu tài sản không khớp với bảng thương hiệu
**Giải Pháp**: Chạy `extract-colors.cjs path/to/asset.png` để so sánh. Điều chỉnh trong công cụ thiết kế, xuất lại.

**Vấn Đề**: Các thành viên đội sử dụng tên tài sản không nhất quán
**Giải Pháp**: Ghi lại quy ước đặt tên trong README. Thêm hook trước commit để xác nhận tên (tùy chọn).

## Kỹ Năng Liên Quan

- [Content Marketing](/vi/docs/marketing/skills/content-marketing) - Áp dụng giọng để lập kế hoạch nội dung
- [Social Media](/vi/docs/marketing/skills/social-media) - Thích nghi giọng cụ thể theo nền tảng
- [AI Multimodal](/vi/docs/marketing/skills/ai-multimodal) - Tạo hình ảnh căn chỉnh thương hiệu với Imagen 4

## Lệnh Liên Quan

- `/brand:update` - Cập nhật hướng dẫn thương hiệu
- `/content/good` - Tạo nội dung căn chỉnh thương hiệu
- `/design/good` - Tạo thiết kế phù hợp thương hiệu
