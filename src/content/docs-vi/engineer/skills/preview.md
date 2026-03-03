---
title: "ck:preview"
description: "Xem file/thư mục hoặc tạo giải thích trực quan, slides và sơ đồ"
section: engineer
kit: engineer
category: skills
order: 56
lang: vi
---

# Preview

Xem file và thư mục, hoặc tạo giải thích trực quan với ASCII art, sơ đồ Mermaid và slides thuyết trình.

## Cách Dùng

```
/ck:preview [file hoặc thư mục]         # Xem nội dung
/ck:preview --explain [chủ đề]          # Giải thích trực quan
/ck:preview --diagram [chủ đề]          # Sơ đồ kiến trúc
/ck:preview --slides [chủ đề]           # Slides từng bước
/ck:preview --ascii [chủ đề]            # Sơ đồ thân thiện với terminal
```

## Các Chế Độ

| Flag | Đầu ra |
|------|--------|
| *(không có)* | Trình xem file/thư mục |
| `--explain` | Giải thích trực quan với ASCII + Mermaid |
| `--diagram` | Sơ đồ kiến trúc và luồng dữ liệu |
| `--slides` | Thuyết trình hướng dẫn từng bước |
| `--ascii` | Chỉ sơ đồ ASCII cho terminal |
