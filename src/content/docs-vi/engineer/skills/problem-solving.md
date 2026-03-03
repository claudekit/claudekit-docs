---
title: "ck:problem-solving"
description: Các kỹ thuật có hệ thống cho vòng xoáy phức tạp, các khối đổi mới, các pattern tái diễn và sự không chắc chắn về quy mô
section: engineer
kit: engineer
category: skills/tools
order: 50
published: true
lang: vi
---

# Skill Giải Quyết Vấn Đề

Các cách tiếp cận có hệ thống cho các loại tình trạng bị kẹt khác nhau. Mỗi kỹ thuật nhắm vào các pattern vấn đề cụ thể.

## Khi Nào Nên Dùng

- **Phức tạp leo thang**: Nhiều implementations, ngày càng nhiều trường hợp đặc biệt
- **Khối đổi mới**: Các giải pháp thông thường không đủ
- **Các pattern tái diễn**: Cùng vấn đề trên nhiều lĩnh vực
- **Ràng buộc giả định**: Tư duy "cách duy nhất"
- **Không chắc chắn về quy mô**: Sẵn sàng cho production chưa rõ ràng
- **Bị kẹt chung**: Không chắc kỹ thuật nào áp dụng

## Phân Phối Nhanh

| Triệu Chứng Bị Kẹt | Kỹ Thuật |
|---------------------|---------|
| Cùng thứ được implement 5+ cách | Simplification Cascades |
| Các giải pháp thông thường không đủ | Collision-Zone Thinking |
| Cùng vấn đề ở các nơi khác nhau | Meta-Pattern Recognition |
| Giải pháp cảm thấy bị ép buộc | Inversion Exercise |
| Điều này có hoạt động trong production không? | Scale Game |
| Không chắc kỹ thuật nào | Flowchart When Stuck |

## Các Kỹ Thuật Cốt Lõi

### 1. Simplification Cascades (Tầng Đơn Giản Hóa)

Tìm một insight loại bỏ nhiều components. "Nếu điều này đúng, chúng ta không cần X, Y, Z."

**Insight chính**: Mọi thứ đều là trường hợp đặc biệt của một pattern chung.

**Dấu hiệu đỏ**: "Chỉ cần thêm một trường hợp nữa..." (lặp đi lặp lại mãi)

### 2. Collision-Zone Thinking (Tư Duy Vùng Va Chạm)

Buộc các khái niệm không liên quan lại với nhau để khám phá các thuộc tính nổi lên. "Điều gì sẽ xảy ra nếu chúng ta xử lý X như Y?"

**Insight chính**: Các ý tưởng cách mạng từ việc pha trộn ẩn dụ có chủ ý.

**Dấu hiệu đỏ**: "Tôi đã thử mọi thứ trong lĩnh vực này"

### 3. Meta-Pattern Recognition (Nhận Biết Meta-Pattern)

Phát hiện các pattern xuất hiện trong 3+ lĩnh vực để tìm ra các nguyên tắc phổ quát.

**Insight chính**: Các pattern về cách các pattern nổi lên tiết lộ các abstractions có thể tái sử dụng.

**Dấu hiệu đỏ**: "Vấn đề này là duy nhất" (có lẽ không)

### 4. Inversion Exercise (Bài Tập Đảo Ngược)

Lật các giả định cốt lõi để tiết lộ các ràng buộc ẩn. "Điều gì sẽ xảy ra nếu điều ngược lại là đúng?"

**Insight chính**: Các đảo ngược hợp lệ tiết lộ sự phụ thuộc ngữ cảnh của "các quy tắc."

**Dấu hiệu đỏ**: "Chỉ có một cách để làm điều này"

### 5. Scale Game (Trò Chơi Quy Mô)

Kiểm thử ở các cực đoan (lớn hơn/nhỏ hơn 1000 lần, tức thời/kéo dài một năm) để phơi bày các sự thật cơ bản.

**Insight chính**: Những gì hoạt động ở một quy mô thất bại ở quy mô khác.

**Dấu hiệu đỏ**: "Nên mở rộng tốt" (mà không kiểm thử)

## Quy Trình Áp Dụng

1. **Xác định loại bị kẹt**: Khớp triệu chứng với kỹ thuật
2. **Tải tài liệu tham chiếu chi tiết**: Đọc kỹ thuật cụ thể
3. **Áp dụng có hệ thống**: Theo quy trình của kỹ thuật
4. **Ghi lại insights**: Ghi lại những gì đã hoạt động/thất bại
5. **Kết hợp nếu cần**: Một số vấn đề cần nhiều kỹ thuật

## Các Kết Hợp Mạnh Mẽ

- **Simplification + Meta-pattern**: Tìm pattern, đơn giản hóa tất cả instances
- **Collision + Inversion**: Buộc ẩn dụ, đảo ngược các giả định
- **Scale + Simplification**: Các cực đoan tiết lộ những gì cần loại bỏ
- **Meta-pattern + Scale**: Các pattern phổ quát được kiểm thử ở các cực đoan

## Điều Hướng Tham Chiếu

| Chủ đề | Tham chiếu |
|--------|-----------|
| Flowchart Phân Phối | `references/when-stuck.md` |
| Simplification | `references/simplification-cascades.md` |
| Collision-Zone | `references/collision-zone-thinking.md` |
| Meta-Pattern | `references/meta-pattern-recognition.md` |
| Inversion | `references/inversion-exercise.md` |
| Scale Game | `references/scale-game.md` |
| Attribution | `references/attribution.md` |

## Tích Hợp Với ClaudeKit

Hoạt động với:

- **sequential-thinking**: Phân tích vấn đề có cấu trúc
- **debugging**: Điều tra nguyên nhân gốc rễ
- **planning**: Thiết kế giải pháp

---

## Điểm Mấu Chốt

Khớp các triệu chứng bị kẹt với các kỹ thuật cụ thể: Simplification Cascades cho độ phức tạp, Collision-Zone cho các khối đổi mới, Meta-Pattern cho các vấn đề tái diễn, Inversion cho các giả định, Scale Game cho sẵn sàng production.
