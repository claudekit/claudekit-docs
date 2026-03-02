---
lang: vi
title: "ck:preview"
description: "Xem file/thư mục hoặc tạo giải thích trực quan, slide, và sơ đồ"
section: engineer
kit: engineer
category: skills
order: 56
---

Xem file và thư mục, hoặc tạo giải thích trực quan với ASCII art, sơ đồ Mermaid, và bài thuyết trình slide.

## Cách Dùng

```
/ck:preview [file hoặc thư mục]         # Xem nội dung
/ck:preview --explain [chủ đề]          # Giải thích trực quan
/ck:preview --diagram [chủ đề]          # Sơ đồ kiến trúc
/ck:preview --slides [chủ đề]           # Slide từng bước
/ck:preview --ascii [chủ đề]            # Sơ đồ thân thiện với terminal
```

## Các Chế Độ

| Flag | Output |
|------|--------|
| *(không có)* | Trình xem file/thư mục |
| `--explain` | Giải thích trực quan với ASCII + Mermaid |
| `--diagram` | Sơ đồ kiến trúc và luồng dữ liệu |
| `--slides` | Bài thuyết trình từng bước |
| `--ascii` | Chỉ sơ đồ ASCII cho terminal |
