---
title: "Giới Thiệu"
description: "ClaudeKit là gì và hoạt động như thế nào? Tìm hiểu kiến thức cơ bản trong 3 phút"
lang: vi
section: getting-started
order: 1
published: true
---

# Giới Thiệu về ClaudeKit

**ClaudeKit** mở rộng Claude Code với các agents chuyên biệt, slash commands và skills có thể tái sử dụng.

## Video Hướng Dẫn

Mới làm quen với ClaudeKit? Xem video hướng dẫn từng bước này bao gồm cài đặt CLI, thiết lập với lệnh `ck`, và demo xây dựng UI từ screenshot.

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

*Thêm tutorials: [@goonnguyen](https://www.youtube.com/@goonnguyen) | X: [@goon_nguyen](https://x.com/goon_nguyen)*

## ClaudeKit Là Gì?

ClaudeKit mở rộng Claude Code với các bộ công cụ chuyên biệt cho kỹ thuật và marketing. Thay vì viết prompts từ đầu, bạn gọi các workflows đã được tối ưu hóa cho tốc độ và chất lượng.

### Hai Bộ Công Cụ Mạnh Mẽ

**Engineer Kit** - Bộ công cụ phát triển & tự động hóa:
- **Agents**: Trợ lý AI chuyên biệt (planner, researcher, tester, debugger, backend-developer)
- **Commands**: Workflows phát triển (`/cook`, `/fix`, `/plan`, `/test`, `/code`)
- **Skills**: Modules kiến thức kỹ thuật (Next.js, PostgreSQL, Docker, DevOps)

**Marketing Kit** - Bộ công cụ marketing & tự động hóa nội dung:
- **Agents**: Người sáng tạo nội dung (copywriter, ui-ux-designer, campaign-manager, seo-specialist)
- **Commands**: Workflows marketing (`/write:blog`, `/video:create`, `/slide:create`, `/campaign:*`)
- **Asset Management**: Hub tập trung cho copy, storyboards, slides, brand guidelines
- **Skills**: Chuyên môn marketing (copywriting, SEO, analytics, video production)

## Cách Hoạt Động

**Ví dụ Engineer Kit:**
1. Gõ `/cook "add user authentication"`
2. Hệ thống khởi chạy planner → researcher → developer → tester
3. Agents cộng tác, viết code, chạy tests, commit thay đổi
4. Bạn xem xét kết quả, đưa phản hồi, lặp lại

**Ví dụ Marketing Kit:**
1. Gõ `/write:blog "introducing our new API"`
2. Hệ thống trích xuất phong cách viết của bạn từ `/assets/writing-styles/`
3. Copywriter agent soạn thảo bài blog phù hợp với giọng điệu của bạn
4. Nội dung được lưu trong hub Asset Management để tái sử dụng

## Tại Sao Sử Dụng ClaudeKit?

**Cho Kỹ Sư:**
- **Tốc Độ**: Nhanh hơn 10x so với prompting thủ công cho phát triển tính năng
- **Chất Lượng**: Workflows đã được thử nghiệm giảm bugs và technical debt
- **Nhất Quán**: Cùng patterns phát triển trong toàn đội

**Cho Marketers:**
- **Nhất Quán Thương Hiệu**: Asset management tập trung đảm bảo messaging thống nhất
- **Nhận Biết Ngữ Cảnh**: Nội dung dựa trên sản phẩm/codebase thực tế
- **Sẵn Sàng Production**: Video storyboards với Gemini Veo 3.1, slides ở định dạng .pptx

## Chọn Bộ Công Cụ Của Bạn

Sử dụng kit switcher ở header để khám phá:

**Engineer Kit** → Bắt đầu tại [Tài Liệu Engineer](/docs/engineer/agents)
- Workflows phát triển tính năng
- Agents kiểm tra và debug
- Tự động hóa infrastructure

**Marketing Kit** → Bắt đầu tại [Tài Liệu Marketing](/docs/marketing/)
- Workflows tạo nội dung
- Pipelines sản xuất video
- Điều phối chiến dịch

## Bước Tiếp Theo

1. **[Hiểu Các Khái Niệm](/docs/getting-started/concepts)** - Agents, commands, và skills hoạt động như thế nào
2. **[Cài Đặt ClaudeKit](/docs/getting-started/installation)** - Thiết lập CLI
3. **[Quick Start](/docs/getting-started/quick-start)** - Xây dựng tính năng hoặc chiến dịch đầu tiên

## Khám Phá Workflows

**Engineer Workflows**:
- [Thiết Lập Dự Án Mới](/docs/workflows/new-project) - Bootstrap dự án với best practices
- [Phát Triển Tính Năng](/docs/workflows/feature-development) - Triển khai tính năng end-to-end
- [Code Review](/docs/workflows/code-review) - Kiểm tra chất lượng code tự động

**Marketing Workflows**:
- [Tạo Nội Dung](/docs/marketing/workflows/content-workflow) - Blog posts, copy, social media
- [Sản Xuất Video](/docs/marketing/workflows/dashboard-workflow) - Script đến storyboard đến video
- [Quản Lý Chiến Dịch](/docs/marketing/workflows/campaign-workflow) - Chiến dịch đa kênh
