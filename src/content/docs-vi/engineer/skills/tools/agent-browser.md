---
title: "Agent Browser"
description: "Tự động hóa trình duyệt được tối ưu cho AI với snapshots hiệu quả về context để kiểm thử tự động và hỗ trợ cloud browser"
section: engineer
kit: engineer
category: skills
order: 20
lang: vi
---

Tự động hóa trình duyệt được thiết kế đặc biệt cho các AI agents. Sử dụng mô hình "snapshot + refs" để giảm 93% context so với các công cụ truyền thống.

## Skill Này Làm Gì

Agent Browser cung cấp tự động hóa trình duyệt headless với hiệu suất token cực cao. Thay vì dump toàn bộ HTML tree khổng lồ vào context, nó cung cấp snapshots gọn gàng với các handles @ref cho các phần tử tương tác. Hãy nghĩ về nó như Playwright được thiết kế lại cho AI workflows—bạn có toàn bộ sức mạnh của tự động hóa trình duyệt mà không bị ngập trong output dài dòng.

Skill này xuất sắc trong các phiên làm việc tự động dài hạn khi việc bảo toàn context quan trọng. Nó hỗ trợ ghi video để debug, kiểm thử cloud browser qua Browserbase, và các build loops tự kiểm tra khi bạn cần xác nhận các thay đổi trực quan thực sự hoạt động.

## Khả Năng Cốt Lõi

- Điều hướng các trang và tương tác với elements sử dụng handles @ref
- Capture snapshots chỉ với các phần tử tương tác (~280 chars vs 8K+ cho Playwright MCP)
- Ghi video các phiên tự động hóa để debug
- Chạy tests trên cloud browsers (Browserbase) cho CI/CD
- Xử lý workflows đa-tab và chuyển đổi frames
- Lưu/tải trạng thái trình duyệt cho các phiên đã authenticated
- Mock network requests và responses
- Mô phỏng thiết bị, geolocation, offline mode

## Khi Nào Dùng Cái Này vs Chrome DevTools

Dùng agent-browser cho: Các phiên AI tự động dài hạn, workflows bị giới hạn context, ghi video, cloud browsers, xử lý đa-tab, self-verifying build loops

Dùng chrome-devtools cho: Screenshots nhanh, custom Puppeteer scripts, debug WebSocket, tích hợp workflow hiện có, auth injection

## Sử Dụng

Kích hoạt bằng cách đề cập đến các tác vụ tự động hóa trình duyệt. ClaudeKit tự động kích hoạt skill này cho các tác vụ web testing, scraping và xác minh UI.

## Câu Lệnh Mẫu

- "Kiểm thử login flow tại example.com và xác minh dashboard loads"
- "Điều hướng đến pricing page và chụp screenshot của comparison table"
- "Điền contact form và xác nhận success message xuất hiện"
- "Ghi video quy trình checkout từ giỏ hàng đến confirmation"
- "Chạy test suite này trên Browserbase cho CI"

## Quick Workflow

Mẫu 4 bước chuẩn:

1. Navigate: `agent-browser open https://example.com`
2. Snapshot: `agent-browser snapshot -i` (lấy @refs cho buttons, inputs)
3. Interact: `agent-browser fill @e2 "text"`, `agent-browser click @e1`
4. Re-snapshot: `agent-browser snapshot -i` (sau khi trang thay đổi)

## Các Skills Liên Quan

- [Web Testing](/docs/engineer/skills/web-testing) - Kiểm thử toàn diện với Playwright, Vitest, k6
