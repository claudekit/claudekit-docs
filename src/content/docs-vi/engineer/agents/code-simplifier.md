---
title: Agent Đơn Giản Hóa Mã
description: Đơn giản hóa mã nguồn để tăng tính rõ ràng và khả năng bảo trì mà không thay đổi hành vi
section: engineer
kit: engineer
category: agents
order: 90
published: true
lang: vi
---

# Agent Đơn Giản Hóa Mã

Agent `code-simplifier` rà soát mã vừa thay đổi, loại bỏ độ phức tạp không cần thiết, chuẩn hóa cách đặt tên và cấu trúc, đồng thời giữ nguyên toàn bộ chức năng.

## Khi Nào Sử Dụng

- Sau một thay đổi lớn cần làm sạch trước khi review
- Khi mã đúng nhưng khó đọc hoặc lặp lại
- Khi cần giảm nesting và làm rõ luồng điều khiển

Agent này chỉ có trong Claude Code. Codex dùng các skill Engineer nhưng không tải định nghĩa agent Claude.
