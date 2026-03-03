---
lang: vi
title: "ckm:design"
description: "Điểm vào cho tác vụ thiết kế, định tuyến đến brand hoặc design-system"
section: marketing
kit: marketing
category: skills
order: 72
---

# `ckm:design`

> Điểm vào thống nhất cho mọi tác vụ thiết kế — tự động định tuyến đến skill chuyên biệt phù hợp.

## Skill Này Làm Gì

**Thách thức**: Marketing design bao gồm nhiều lĩnh vực khác nhau — brand identity, UI components, social media visuals, print materials, và hơn nữa. Mỗi lĩnh vực cần approach và tools khác nhau.

**Giải pháp**: Skill design là điểm vào thông minh phân tích yêu cầu thiết kế và định tuyến đến skill chuyên biệt phù hợp nhất — brand identity, design system, banner, logo, hay CIP.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi nhận yêu cầu thiết kế chung.

**Tường minh**: Kích hoạt qua prompt:
```
Activate design skill to [mô tả tác vụ thiết kế]
```

## Tính Năng

### 1. Định Tuyến Thông Minh

Skill design phân tích yêu cầu và chuyển sang skill phù hợp:

| Yêu cầu | Định tuyến đến |
|---------|----------------|
| "Thiết kế logo", "Logo mới" | [Logo Design](/vi/docs/marketing/skills/logo-design) |
| "Brand identity", "Brand guidelines" | [Brand](/vi/docs/marketing/skills/brand) |
| "Design system", "UI components" | [Design System](/vi/docs/marketing/skills/design-system) |
| "Banner Facebook/Instagram" | [Banner Design](/vi/docs/marketing/skills/banner-design) |
| "Name card, letterhead, CIP" | [CIP Design](/vi/docs/marketing/skills/cip-design) |
| "Tạo ảnh AI, artwork" | [AI Artist](/vi/docs/marketing/skills/ai-artist) |
| "Frontend UI, giao diện" | [Frontend Design](/vi/docs/marketing/skills/frontend-design) |

### 2. Design Brief Workflow
Trước khi bắt đầu bất kỳ thiết kế nào, thu thập thông tin cần thiết.

**Câu hỏi brief chuẩn**:
```
1. Mục đích thiết kế là gì?
2. Đối tượng target audience là ai?
3. Tone/cảm xúc mong muốn? (chuyên nghiệp, vui tươi, tin cậy...)
4. Brand colors/fonts đã có chưa?
5. Kích thước và định dạng cần thiết?
6. Deadline và deliverables?
7. Ví dụ thiết kế bạn thích? (inspiration)
```

### 3. Design Principles Chung
Các nguyên tắc áp dụng cho mọi loại thiết kế marketing.

**Visual Hierarchy**:
- Nội dung quan trọng nhất → kích thước lớn nhất, vị trí đầu tiên
- Màu sắc tương phản để dẫn mắt
- Whitespace là thiết kế, không phải khoảng trống lãng phí

**Consistency**:
- Dùng tối đa 2-3 fonts
- Palette màu sắc giới hạn (3-4 màu chính)
- Consistent spacing và sizing

**Accessibility**:
- Tương phản màu sắc tối thiểu 4.5:1 (WCAG AA)
- Text size tối thiểu 16px cho body copy
- Không truyền thông tin chỉ qua màu sắc

### 4. Design Handoff
Chuẩn bị assets để bàn giao cho developer hoặc in ấn.

**Digital deliverables**:
```
assets/designs/
├── source/           # Figma, AI files
├── export/
│   ├── svg/         # Vectors, icons
│   ├── png@1x/      # Web images
│   ├── png@2x/      # Retina displays
│   └── webp/        # Web-optimized
└── specs/
    └── design-specs.md  # Màu sắc, fonts, spacing
```

**Print deliverables**:
```
assets/designs/print/
├── pdf/            # Print-ready PDFs
├── ai/             # Adobe Illustrator source
└── fonts/          # Embedded fonts
```

## Điều Kiện Tiên Quyết

- Mô tả rõ ràng về mục đích thiết kế
- Brand guidelines (nếu đã có)
- Figma, Adobe Creative Suite, hoặc Canva Pro

## Cấu Hình

Không cần cấu hình đặc biệt. Skill hoạt động dựa trên yêu cầu của người dùng.

## Thực Hành Tốt Nhất

**1. Brief Trước, Thiết Kế Sau**
10 phút clarify requirements tiết kiệm 2 giờ revisions sau.

**2. Thiết Kế Cho Người Dùng, Không Phải Cho Bản Thân**
Thiết kế bạn thích không phải lúc nào cũng là thiết kế user thích. Test với target audience.

**3. Iterate Nhanh**
Low-fidelity sketches → Medium-fidelity wireframes → High-fidelity mockups. Đừng nhảy thẳng vào pixel-perfect.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Brand Package Mới
**Tình huống**: Startup cần full brand package.

**Routing**:
1. `/ckm:brand` → Brand strategy và guidelines
2. `/ckm:logo-design` → Logo và brand mark
3. `/ckm:design-system` → Digital design system
4. `/ckm:cip-design` → Print và corporate materials
5. `/ckm:banner-design` → Marketing visuals

### Trường Hợp 2: Single Asset
**Tình huống**: Cần banner cho campaign Facebook.

**Routing**: Trực tiếp sang `/ckm:banner-design` với thông số Facebook.

## Xử Lý Sự Cố

**Vấn đề**: Không biết skill nào phù hợp
**Giải pháp**: Mô tả yêu cầu chi tiết, skill design sẽ tự định tuyến phù hợp.

**Vấn đề**: Cần nhiều loại assets khác nhau
**Giải pháp**: Bắt đầu từ `/ckm:brand` để thiết lập nền tảng, sau đó spawn các sub-skills.

## Skill Liên Quan

- [Brand](/vi/docs/marketing/skills/brand) - Chiến lược và identity thương hiệu
- [Design System](/vi/docs/marketing/skills/design-system) - Hệ thống thiết kế kỹ thuật số
- [Logo Design](/vi/docs/marketing/skills/logo-design) - Thiết kế logo
- [Banner Design](/vi/docs/marketing/skills/banner-design) - Thiết kế banner
- [CIP Design](/vi/docs/marketing/skills/cip-design) - Corporate identity

## Lệnh Liên Quan

- `/ckm:design` - Điểm vào thiết kế
- `/ckm:brand` - Brand identity
- `/ckm:logo-design` - Logo design
