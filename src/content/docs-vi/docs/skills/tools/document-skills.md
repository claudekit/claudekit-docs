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

Read, parse, and create PDF, Word, PowerPoint, and Excel documents. Extract text, tables, images, and metadata.

## Supported Formats

- **PDF** - Extract and create PDFs
- **DOCX** - Word documents
- **PPTX** - PowerPoint presentations
- **XLSX** - Excel spreadsheets

## When to Use

Use document-skills when working with:
- Office documents
- PDF files
- Data extraction
- Document generation
- Format conversion
- Report creation

## Quick Start

### Invoke the Skill

```
"Use document-skills/pdf to extract all tables from quarterly-report.pdf and save as CSV"
```

### What You Get

The skill will help you:
1. Read document content
2. Extract structured data
3. Parse tables
4. Get images
5. Create new documents
6. Convert formats
7. Preserve formatting

## PDF Skills

### Extract Text

```
"Use document-skills/pdf to extract all text from contract.pdf"
```

### Extract Tables

```
"Use document-skills/pdf to:
- Extract all tables
- Convert to CSV
- Preserve structure
- Handle merged cells"
```

### Extract Forms

```
"Use document-skills/pdf to extract form fields and values from application.pdf"
```

### Create PDF

```
"Use document-skills/pdf to create PDF with:
- Custom content
- Formatting
- Images
- Tables"
```

### Merge PDFs

```
"Use document-skills/pdf to merge multiple PDFs into single file"
```

### Split PDF

```
"Use document-skills/pdf to split PDF by:
- Page numbers
- Page ranges
- Bookmarks"
```

## Word (DOCX) Skills

### Read Content

```
"Use document-skills/docx to extract text from report.docx with formatting preserved"
```

### Track Changes

```
"Use document-skills/docx to:
- Extract tracked changes
- List all comments
- Show revision history
- Export to markdown"
```

### Create Document

```
"Use document-skills/docx to create Word document with:
- Headings and paragraphs
- Bullet lists
- Tables
- Images
- Formatting"
```

### Convert Format

```
"Use document-skills/docx to convert Word doc to:
- Markdown
- Plain text
- HTML
- PDF"
```

## PowerPoint (PPTX) Skills

### Read Slides

```
"Use document-skills/pptx to extract content from presentation.pptx:
- Slide titles
- Bullet points
- Notes
- Images"
```

### Create Presentation

```
"Use document-skills/pptx to create PowerPoint with:
- Title slides
- Content slides
- Charts
- Images
- Layouts"
```

### Extract Data

```
"Use document-skills/pptx to extract:
- All text content
- Chart data
- Table data
- Speaker notes"
```

## Excel (XLSX) Skills

### Read Data

```
"Use document-skills/xlsx to read data from spreadsheet.xlsx:
- All sheets
- Specific ranges
- Formatted values
- Formulas"
```

### Extract Tables

```
"Use document-skills/xlsx to:
- Extract tables
- Convert to JSON
- Preserve formatting
- Handle multiple sheets"
```

### Create Spreadsheet

```
"Use document-skills/xlsx to create Excel with:
- Multiple sheets
- Formulas
- Formatting
- Charts
- Data validation"
```

### Analyze Data

```
"Use document-skills/xlsx to analyze:
- Calculate totals
- Find patterns
- Generate summaries
- Create reports"
```

## Common Use Cases

### Data Extraction

```
"Use document-skills to:
1. Read PDF invoice
2. Extract line items
3. Parse amounts
4. Convert to JSON
5. Save to database"
```

### Document Generation

```
"Use document-skills to:
1. Create Word template
2. Fill with data
3. Add tables
4. Export to PDF
5. Send to client"
```

### Format Conversion

```
"Use document-skills to convert:
- PDF to text
- Word to markdown
- Excel to JSON
- PowerPoint to images"
```

### Report Creation

```
"Use document-skills to generate monthly report:
- Extract data from Excel
- Create PowerPoint slides
- Add charts
- Export to PDF"
```

## Advanced Features

### Text Extraction

Capabilities:
- Preserve formatting
- Handle columns
- Extract metadata
- OCR support
- Font information

### Table Parsing

Features:
- Detect table structure
- Handle merged cells
- Preserve formatting
- Export to CSV/JSON
- Multi-page tables

### Image Handling

Support for:
- Extract embedded images
- Add images to documents
- Image positioning
- Size and scaling
- Format conversion

### Formatting

Preserve:
- Text styles
- Colors
- Fonts
- Alignment
- Spacing

## Best Practices

### Large Documents

```
"Use document-skills to handle large PDF:
- Process in chunks
- Extract specific pages
- Optimize memory
- Stream processing"
```

### Scanned Documents

```
"Use document-skills with OCR to:
- Extract text from scanned PDFs
- Handle image quality
- Improve accuracy
- Validate results"
```

### Complex Tables

```
"Use document-skills for complex tables:
- Detect merged cells
- Handle nested tables
- Preserve relationships
- Validate structure"
```

## Integration Examples

### With Databases

```
"Use document-skills to:
1. Extract data from Excel
2. Validate format
3. Insert into PostgreSQL
4. Log results"
```

### With APIs

```
"Use document-skills to:
1. Generate PDF invoice
2. Upload to cloud storage
3. Send via email API
4. Update database"
```

### With AI

```
"Use document-skills then use gemini-vision to:
1. Extract images from PDF
2. Analyze with AI
3. Extract information
4. Create summary"
```

## Error Handling

### Corrupted Files

```
"Use document-skills to handle:
- Validate document structure
- Attempt recovery
- Report errors clearly
- Provide alternatives"
```

### Missing Data

```
"Use document-skills to:
- Detect empty fields
- Validate required data
- Provide defaults
- Log warnings"
```

## Quick Examples

**Simple Extraction:**
```
"Use document-skills/pdf to extract text from file.pdf"
```

**Complex Processing:**
```
"Use document-skills to:
1. Read Excel data
2. Validate entries
3. Generate Word report
4. Create PDF summary
5. Extract as JSON"
```

**Batch Processing:**
```
"Use document-skills to process folder of PDFs:
- Extract all tables
- Combine data
- Create summary Excel
- Generate report"
```

## Format Comparison

| **Format** | **Best For** | **Extract** | **Create** |
|------------|--------------|-------------|------------|
| PDF | Reports, forms | ✓ | ✓ |
| DOCX | Documents, templates | ✓ | ✓ |
| PPTX | Presentations | ✓ | ✓ |
| XLSX | Data, calculations | ✓ | ✓ |

## Troubleshooting

### PDF Issues

- Password protected → Provide password
- Scanned PDF → Use OCR
- Corrupted → Try repair tools

### Excel Issues

- Large files → Process in chunks
- Complex formulas → Extract values
- Multiple sheets → Specify sheet

### Word Issues

- Old format (.doc) → Convert to .docx
- Embedded objects → Extract separately
- Macros → Handle with caution

## Next Steps

- [Data Processing Examples](/docs/use-cases/)
- [AI Integration](/docs/skills/)
- [Automation Workflows](/docs/use-cases/)

---

**Bottom Line:** document-skills handles all major document formats. Extract data, create documents, convert formats - all automated.
