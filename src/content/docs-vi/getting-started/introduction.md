---
title: "Giới Thiệu"
description: "ClaudeKit là gì và nó hoạt động như thế nào? Tìm hiểu cơ bản trong 3 phút"
lang: vi
section: getting-started
order: 1
published: true
---

# Giới Thiệu về ClaudeKit

**ClaudeKit** mở rộng Claude Code với các agents chuyên biệt, slash commands và skills có thể tái sử dụng.

## Video Hướng Dẫn

Mới với ClaudeKit? Xem hướng dẫn từng bước này bao gồm cài đặt CLI, thiết lập bằng lệnh `ck`, và demo xây dựng giao diện người dùng từ ảnh chụp màn hình.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 0.75rem; border: 1px solid var(--color-border); margin-bottom: 1rem;">
  <iframe
    src="https://www.youtube.com/embed/F_E0GIi_kVY"
    title="ClaudeKit Complete Walkthrough"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

*Xem thêm hướng dẫn: [@goonnguyen](https://www.youtube.com/@goonnguyen) | X: [@goon_nguyen](https://x.com/goon_nguyen)*

## ClaudeKit Là Gì?

ClaudeKit mở rộng Claude Code với các bộ công cụ chuyên biệt cho kỹ thuật và marketing. Thay vì viết prompts từ đầu, bạn gọi các workflows được tối ưu hóa về tốc độ và chất lượng.

### Hai Bộ Công Cụ Mạnh Mẽ

**Engineer Kit** - Bộ công cụ phát triển và tự động hóa:
- **Agents**: AI assistants chuyên biệt (planner, researcher, tester, debugger, backend-developer)
- **Commands**: Workflows phát triển (`/cook`, `/fix`, `/plan`, `/test`)
- **Skills**: Modules kiến thức kỹ thuật (Next.js, PostgreSQL, Docker, DevOps)

**Marketing Kit** - Bộ công cụ tự động hóa marketing và nội dung:
- **Agents**: Người tạo nội dung (copywriter, ui-ux-designer, campaign-manager, seo-specialist)
- **Commands**: Workflows marketing (`/write:blog`, `/video:create`, `/slide:create`, `/campaign:*`)
- **Asset Management**: Trung tâm quản lý copy, storyboards, slides, brand guidelines
- **Skills**: Chuyên môn marketing (copywriting, SEO, analytics, video production)

## Cách Hoạt Động

**Ví Dụ Engineer Kit:**
1. Gõ `/cook "add user authentication"`
2. Hệ thống khởi chạy planner → researcher → developer → tester
3. Agents cộng tác, viết code, chạy tests, commit changes
4. Bạn xem lại kết quả, cung cấp phản hồi, lặp lại

**Ví Dụ Marketing Kit:**
1. Gõ `/write:blog "introducing our new API"`
2. Hệ thống trích xuất phong cách viết của bạn từ `/assets/writing-styles/`
3. Copywriter agent soạn blog phù hợp với tông giọng của bạn
4. Nội dung được lưu vào Asset Management hub để tái sử dụng

## Tại Sao Sử Dụng ClaudeKit?

**Dành Cho Engineers:**
- **Tốc Độ**: Nhanh hơn 10x so với prompting thủ công cho phát triển tính năng
- **Chất Lượng**: Workflows đã kiểm nghiệm giảm bugs và technical debt
- **Nhất Quán**: Cùng patterns phát triển cho toàn bộ đội ngũ

**Dành Cho Marketers:**
- **Nhất Quán Thương Hiệu**: Asset management tập trung đảm bảo thông điệp thống nhất
- **Nhận Thức Ngữ Cảnh**: Nội dung dựa trên sản phẩm/codebase thực tế
- **Sẵn Sàng Production**: Video storyboards với Gemini Veo 3.1, slides định dạng .pptx

## Chọn Bộ Công Cụ Của Bạn

Sử dụng kit switcher trong header để khám phá:

**Engineer Kit** → Bắt đầu tại [Tài Liệu Engineer](/vi/docs/engineer/agents)
- Workflows phát triển tính năng
- Agents testing và debugging
- Tự động hóa infrastructure

**Marketing Kit** → Bắt đầu tại [Tài Liệu Marketing](/vi/docs/marketing/)
- Workflows tạo nội dung
- Pipelines sản xuất video
- Điều phối chiến dịch

## Bước Tiếp Theo

1. **[Hiểu Các Khái Niệm](/vi/docs/getting-started/concepts)** - Cách agents, commands và skills hoạt động
2. **[Cài Đặt ClaudeKit](/vi/docs/getting-started/installation)** - Thiết lập CLI
3. **[Bắt Đầu Nhanh](/vi/docs/getting-started/quick-start)** - Xây dựng tính năng hoặc chiến dịch đầu tiên

## Khám Phá Workflows

**Engineer Workflows**:
- [Thiết Lập Dự Án Mới](/vi/docs/workflows/new-project) - Bootstrap dự án với best practices
- [Phát Triển Tính Năng](/docs/workflows/feature-development) - Triển khai tính năng end-to-end
- [Code Review](/vi/docs/workflows) - Kiểm tra chất lượng code tự động

**Marketing Workflows**:
- [Tạo Nội Dung](/docs/marketing/workflows/content-workflow) - Blog posts, copy, social media
- [Sản Xuất Video](/docs/marketing/workflows/dashboard-workflow) - Script đến storyboard đến video
- [Quản Lý Chiến Dịch](/docs/marketing/workflows/campaign-workflow) - Chiến dịch đa kênh
