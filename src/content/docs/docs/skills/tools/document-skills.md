---
title: document-skills
description: "Documentation for document-skills
description:
section: docs
category: skills/tools
order: 14
published: true"
section: docs
category: skills/tools
order: 14
published: true
---

# document-skills

Read, parse, create, and manipulate PDF, Word, PowerPoint, and Excel documents with formula preservation and format conversion.

## When to Use

- Extract text, tables, or data from existing documents (invoices, reports, forms)
- Generate professional documents programmatically (reports, presentations, spreadsheets)
- Convert between formats while preserving structure (DOCX to PDF, Excel to JSON)
- Automate document workflows at scale (merge PDFs, batch processing)

## Key Capabilities

| **Skill** | **Read** | **Create** | **Special Features** |
|-----------|----------|------------|----------------------|
| pdf | Text, tables, forms | Merge, split, watermark | OCR scanned PDFs, form filling |
| docx | Text, tracked changes | Professional docs | Redlining, comments, formatting |
| pptx | Slides, speaker notes | Presentations | HTML conversion, templates |
| xlsx | Data, formulas | Spreadsheets | Formula recalc, financial models |

## Common Use Cases

**Accountant extracting invoice data**
> "Use document-skills/pdf to extract all line items, amounts, and vendor info from these 50 invoices and save to Excel"

**Lawyer reviewing contracts**
> "Use document-skills/docx to analyze contract.docx, track changes for proposed amendments to payment terms in Section 5, and generate redlined version"

**Analyst building financial model**
> "Use document-skills/xlsx to create DCF model with assumptions sheet, 5-year projections, formulas for NPV/IRR, and blue text for inputs"

**Marketing team generating reports**
> "Use document-skills/pptx to create quarterly deck using template.pptx - duplicate slide 3 for each region, replace text with Q4 metrics, output presentation.pptx"

**Compliance team processing forms**
> "Use document-skills/pdf to fill out tax forms from data.json, merge into single PDF, and validate all required fields completed"

## Quick Reference

**PDF Operations**
```
Extract tables: "Use document-skills/pdf to extract tables from report.pdf and save as CSV"
Merge files: "Use document-skills/pdf to merge contract.pdf, terms.pdf, exhibit.pdf into final.pdf"
Fill forms: "Use document-skills/pdf to fill W-9 form with company data and flatten fields"
```

**Word Documents**
```
Read content: "Use document-skills/docx to convert agreement.docx to markdown preserving structure"
Track changes: "Use document-skills/docx to add tracked change replacing '30 days' with '60 days' in Section 3.2"
Create doc: "Use document-skills/docx to generate report with headings, tables, and formatted text"
```

**PowerPoint**
```
Use template: "Use document-skills/pptx to duplicate slides 0,5,5,12 from template.pptx, replace text with new content"
Extract text: "Use document-skills/pptx to extract all slide text and speaker notes to JSON"
Create deck: "Use document-skills/pptx to build 10-slide presentation with charts and bullet points"
```

**Excel**
```
Read data: "Use document-skills/xlsx to load sales.xlsx and analyze revenue by region"
Create model: "Use document-skills/xlsx to build budget with formulas, blue inputs, formatted numbers"
Recalc formulas: "Use document-skills/xlsx to recalculate all formulas in model.xlsx and check for errors"
```

## Pro Tips

- **Specify format details**: "Extract tables preserving merged cells" vs just "extract tables"
- **Chain operations**: Read → Process → Create in one request for efficiency
- **Use templates**: Faster than creating from scratch for consistent branding
- **Validate formulas**: Always recalculate Excel files after modification (`recalc.py`)
- **Batch processing**: Process multiple files in one request for large jobs

**Not activating?** Say: *"Use document-skills skill to [your task]"* or reference specific sub-skill like *"Use document-skills/pdf to..."*

## Related Skills

- [ai-multimodal](/docs/skills/ai/ai-multimodal) - Analyze document images with AI
- [gemini-vision](/docs/skills/ai/gemini-vision) - OCR and visual document analysis
- [research](/docs/skills/tools/research) - Extract insights from documents
- [repomix](/docs/skills/tools/repomix) - Package documents for AI analysis

## Key Takeaway

document-skills handles all major document formats with professional precision. Extract invoice data, track contract changes, generate financial models, build presentations - all automated and production-ready.
