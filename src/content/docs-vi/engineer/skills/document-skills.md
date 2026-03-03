---
title: document-skills
description: Đọc, phân tích, tạo và thao tác PDF, Word, PowerPoint và Excel documents với bảo toàn công thức và chuyển đổi định dạng
section: engineer
kit: engineer
category: skills/tools
order: 14
published: true
lang: vi
---

# document-skills

Đọc, phân tích, tạo và thao tác PDF, Word, PowerPoint và Excel documents với bảo toàn công thức và chuyển đổi định dạng.

## Khi Nào Dùng

- Trích xuất text, tables hoặc data từ documents hiện có (hóa đơn, báo cáo, forms)
- Tạo documents chuyên nghiệp theo cách lập trình (báo cáo, presentations, spreadsheets)
- Chuyển đổi giữa các định dạng trong khi bảo tồn cấu trúc (DOCX sang PDF, Excel sang JSON)
- Tự động hóa document workflows ở quy mô lớn (merge PDFs, batch processing)

## Khả Năng Chính

| **Skill** | **Đọc** | **Tạo** | **Tính Năng Đặc Biệt** |
|-----------|---------|---------|------------------------|
| pdf | Text, tables, forms | Merge, split, watermark | OCR scanned PDFs, điền form |
| docx | Text, tracked changes | Professional docs | Redlining, comments, formatting |
| pptx | Slides, speaker notes | Presentations | HTML conversion, templates |
| xlsx | Data, formulas | Spreadsheets | Recalc công thức, financial models |

## Các Use Case Phổ Biến

**Kế toán trích xuất dữ liệu hóa đơn**
> "Use document-skills/pdf to extract all line items, amounts, and vendor info from these 50 invoices and save to Excel"

**Luật sư review hợp đồng**
> "Use document-skills/docx to analyze contract.docx, track changes for proposed amendments to payment terms in Section 5, and generate redlined version"

**Analyst xây dựng financial model**
> "Use document-skills/xlsx to create DCF model with assumptions sheet, 5-year projections, formulas for NPV/IRR, and blue text for inputs"

**Marketing team tạo báo cáo**
> "Use document-skills/pptx to create quarterly deck using template.pptx - duplicate slide 3 for each region, replace text with Q4 metrics, output presentation.pptx"

**Compliance team xử lý forms**
> "Use document-skills/pdf to fill out tax forms from data.json, merge into single PDF, and validate all required fields completed"

## Quick Reference

**PDF Operations**
```
Trích xuất tables: "Use document-skills/pdf to extract tables from report.pdf and save as CSV"
Merge files: "Use document-skills/pdf to merge contract.pdf, terms.pdf, exhibit.pdf into final.pdf"
Điền forms: "Use document-skills/pdf to fill W-9 form with company data and flatten fields"
```

**Word Documents**
```
Đọc nội dung: "Use document-skills/docx to convert agreement.docx to markdown preserving structure"
Track changes: "Use document-skills/docx to add tracked change replacing '30 days' with '60 days' in Section 3.2"
Tạo doc: "Use document-skills/docx to generate report with headings, tables, and formatted text"
```

**PowerPoint**
```
Dùng template: "Use document-skills/pptx to duplicate slides 0,5,5,12 from template.pptx, replace text with new content"
Trích xuất text: "Use document-skills/pptx to extract all slide text and speaker notes to JSON"
Tạo deck: "Use document-skills/pptx to build 10-slide presentation with charts and bullet points"
```

**Excel**
```
Đọc data: "Use document-skills/xlsx to load sales.xlsx and analyze revenue by region"
Tạo model: "Use document-skills/xlsx to build budget with formulas, blue inputs, formatted numbers"
Recalc công thức: "Use document-skills/xlsx to recalculate all formulas in model.xlsx and check for errors"
```

## Pro Tips

- **Chỉ định chi tiết định dạng**: "Extract tables preserving merged cells" thay vì chỉ "extract tables"
- **Kết nối các thao tác**: Read → Process → Create trong một request để hiệu quả
- **Dùng templates**: Nhanh hơn tạo từ đầu cho branding nhất quán
- **Validate công thức**: Luôn recalculate Excel files sau khi chỉnh sửa (`recalc.py`)
- **Batch processing**: Xử lý nhiều files trong một request cho công việc lớn

**Không kích hoạt?** Nói: *"Use document-skills skill to [your task]"* hoặc tham chiếu sub-skill cụ thể như *"Use document-skills/pdf to..."*

## Các Skills Liên Quan

- [ai-multimodal](/vi/docs/engineer/skills/ai-multimodal) - Phân tích document images với AI
- [gemini-vision](/vi/docs/engineer/skills/ai-multimodal) - OCR và visual document analysis
- [research](/vi/docs/engineer/skills/research) - Trích xuất insights từ documents
- [repomix](/vi/docs/engineer/skills/repomix) - Đóng gói documents để AI phân tích

## Điểm Mấu Chốt

document-skills xử lý tất cả các định dạng document chính với độ chính xác chuyên nghiệp. Trích xuất dữ liệu hóa đơn, track contract changes, tạo financial models, xây dựng presentations — tất cả đều tự động hóa và production-ready.
