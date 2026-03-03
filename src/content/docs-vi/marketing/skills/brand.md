---
lang: vi
title: "ckm:brand"
description: "Giọng nói thương hiệu, nhận diện hình ảnh, quản lý tài sản và thực thi tính nhất quán với xác nhận tự động và trích xuất màu sắc."
section: marketing
category: skills
order: 14
---

> Duy trì tính nhất quán thương hiệu trên tất cả tài liệu marketing với xác nhận tự động, tổ chức tài sản và khung giọng nói.

## Skill Này Làm Gì

**Thách thức**: Sự không nhất quán thương hiệu làm suy yếu sự khác biệt và xói mòn niềm tin. Quản lý tài sản, thực thi hướng dẫn giọng nói và duy trì tiêu chuẩn hình ảnh trên các nhóm là công việc thủ công và dễ xảy ra lỗi.

**Giải pháp**: Skill Brand Guidelines cung cấp khung giọng nói thương hiệu, hệ thống nhận diện hình ảnh, mẫu tổ chức tài sản và script xác nhận tự động. Bao gồm trích xuất màu sắc, quy ước đặt tên tài sản và đưa ngữ cảnh thương hiệu vào nội dung do AI tạo.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt cho agent Content Creator, Social Media Manager, Email Wizard và UI/UX Designer.

**Tường minh**: Kích hoạt theo tên khi cần: "Activate brand skill"

## Tính Năng

### 1. Khung Giọng Nói Thương Hiệu
Xác định và áp dụng tông điệu nhất quán trên tất cả nội dung.

**Các chiều giọng nói**:
- **Tông điệu**: Trang trọng ↔ Thân mật
- **Ngôn ngữ**: Đơn giản ↔ Phức tạp
- **Cá tính**: Nghiêm túc ↔ Vui tươi
- **Cảm xúc**: Kín đáo ↔ Biểu cảm

**Hướng dẫn khung**: `references/voice-framework.md`

**Đưa ngữ cảnh thương hiệu vào**:
```bash
# Trích xuất ngữ cảnh thương hiệu cho prompt
node scripts/inject-brand-context.cjs

# Định dạng JSON cho sử dụng theo chương trình
node scripts/inject-brand-context.cjs --json
```

### 2. Quản Lý Nhận Diện Hình Ảnh
Bảng màu, kiểu chữ, cách sử dụng logo và tổ chức tài sản.

**Quản lý màu sắc**:
```bash
# Hiển thị bảng màu thương hiệu
node scripts/extract-colors.cjs --palette

# So sánh màu tài sản với bảng màu thương hiệu
node scripts/extract-colors.cjs path/to/image.png
```

**Các yếu tố hình ảnh**:
- Biến thể logo (đầy đủ, biểu tượng, đơn sắc)
- Bảng màu (chính, phụ, nhấn mạnh)
- Kiểu chữ (tiêu đề, nội dung, code)
- Hướng dẫn phong cách nhiếp ảnh

**Hướng dẫn hình ảnh**: `references/visual-identity.md`

### 3. Xác Nhận và Tổ Chức Tài Sản
Kiểm tra tự động tính tuân thủ tài sản và tổ chức file có hệ thống.

**Xác nhận tài sản**:
```bash
# Kiểm tra tên, định dạng, tuân thủ kích thước
node scripts/validate-asset.cjs path/to/asset.png

# Đầu ra JSON cho CI/CD
node scripts/validate-asset.cjs path/to/asset.png --json
```

**Quy ước đặt tên**:
```
{type}_{campaign}_{description}_{timestamp}_{variant}.{ext}

Ví dụ:
banner_product-launch_hero_20251209_16-9.png
logo_rebrand_horizontal_20251209.svg
```

**Hướng dẫn tổ chức**: `references/asset-organization.md`

## Điều Kiện Tiên Quyết

- Tài liệu hướng dẫn thương hiệu (`docs/brand-guidelines.md`)
- Cấu trúc thư mục tài sản (tự động tạo nếu thiếu)

## Cấu Hình

**Quy trình đồng bộ thương hiệu**:
```bash
# 1. Chỉnh sửa docs/brand-guidelines.md

# 2. Đồng bộ design token
node scripts/sync-brand-to-tokens.cjs

# 3. Xác minh đồng bộ
node scripts/inject-brand-context.cjs --json | head -20
```

**File đã đồng bộ**:
- `docs/brand-guidelines.md` → Nguồn sự thật
- `assets/design-tokens.json` → Định nghĩa token
- `assets/design-tokens.css` → CSS variables

**Cấu trúc thư mục**:
```
.assets/                  # Metadata được theo dõi bởi Git
├── manifest.json         # Registry tài sản
├── tags.json            # Hệ thống gắn thẻ
├── versions/            # Lịch sử phiên bản
└── metadata/            # Metadata theo loại

assets/                   # File thô
├── designs/             # Chiến dịch, web, in ấn
├── banners/             # Mạng xã hội, email, landing page
├── logos/               # Đầy đủ, biểu tượng, đơn sắc
├── videos/              # Quảng cáo, hướng dẫn
└── generated/           # Do AI tạo (có timestamp)
```

## Thực Hành Tốt Nhất

**1. Nhất Quán Hơn Hoàn Hảo**
Áp dụng hướng dẫn nhất quán, dù chúng phát triển theo thời gian. Sự không nhất quán gây hại nhiều hơn quy tắc không hoàn hảo.

**2. Giọng Nói Thích Ứng, Cá Tính Bền Vững**
Tông điệu có thể thay đổi theo kênh (LinkedIn chuyên nghiệp, Twitter thân mật), nhưng cá tính cốt lõi vẫn không đổi.

**3. Kiểm Tra Hàng Quý**
Xem xét tính nhất quán thương hiệu trên các kênh mỗi 3 tháng. Cập nhật hướng dẫn khi thương hiệu phát triển.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Đưa Ngữ Cảnh Thương Hiệu Vào Nội Dung AI
**Tình huống**: Tạo bài blog với giọng nói thương hiệu được áp dụng tự động.

**Quy trình**:
1. Trích xuất ngữ cảnh thương hiệu: `node scripts/inject-brand-context.cjs`
2. Truyền ngữ cảnh vào prompt AI (giọng nói, màu sắc, nhắn tin)
3. Tạo nội dung duy trì tính nhất quán thương hiệu
4. Xác nhận đầu ra theo khung giọng nói

**Kết quả**: Nội dung phù hợp với giọng nói thương hiệu mà không cần chỉnh sửa thủ công.

### Trường Hợp 2: Quy Trình Phê Duyệt Tài Sản
**Tình huống**: Nhóm thiết kế tạo banner mạng xã hội, cần kiểm tra tuân thủ thương hiệu.

**Quy trình**:
1. Nhà thiết kế tạo tài sản theo quy ước đặt tên
2. Chạy xác nhận: `node scripts/validate-asset.cjs banner.png`
3. Kiểm tra tuân thủ màu sắc: `node scripts/extract-colors.cjs banner.png`
4. So sánh với bảng màu thương hiệu (script hiển thị độ lệch)
5. Điều chỉnh màu sắc nếu cần, xác nhận lại
6. Đăng ký trong manifest.json

**Kết quả**: Tài sản tuân thủ thương hiệu sẵn sàng sử dụng.

## Xử Lý Sự Cố

**Vấn đề**: Nội dung do AI tạo không khớp giọng nói thương hiệu
**Giải pháp**: Dùng `inject-brand-context.cjs` để trích xuất các thông số giọng nói. Bao gồm trong system prompt cho tất cả tạo nội dung.

**Vấn đề**: Màu tài sản không khớp bảng màu thương hiệu
**Giải pháp**: Chạy `extract-colors.cjs path/to/asset.png` để so sánh. Điều chỉnh trong công cụ thiết kế, xuất lại.

**Vấn đề**: Thành viên nhóm dùng tên tài sản không nhất quán
**Giải pháp**: Ghi lại quy ước đặt tên trong README. Thêm pre-commit hook để xác nhận tên (tùy chọn).

## Skill Liên Quan

- [Content Marketing](/vi/docs/marketing/skills/content-marketing) - Áp dụng giọng nói vào lập kế hoạch nội dung
- [Social Media](/vi/docs/marketing/skills/social-media) - Thích ứng giọng nói theo nền tảng
- [AI Multimodal](/vi/docs/marketing/skills/ai-multimodal) - Tạo hình ảnh phù hợp thương hiệu với Imagen 4

## Lệnh Liên Quan

- `/ckm:brand:update` - Cập nhật hướng dẫn thương hiệu
- `/content/good` - Tạo nội dung phù hợp thương hiệu
- `/design/good` - Tạo thiết kế tuân thủ thương hiệu
