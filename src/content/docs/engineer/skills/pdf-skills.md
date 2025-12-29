---
title: PDF Skills
description: Comprehensive PDF manipulation toolkit for extracting text and tables, creating documents, merging/splitting files, and handling forms
section: engineer
category: skills
order: 7
published: true
---

# PDF Skills

> Complete PDF processing toolkit for text extraction, table parsing, document creation, merging/splitting, and form handling.

## What This Skill Does

PDF Skills provides comprehensive PDF manipulation capabilities using Python libraries (pypdf, pdfplumber, reportlab) and command-line tools (qpdf, pdftotext). This skill enables automated PDF processing workflows including data extraction from invoices, programmatic document generation, bulk PDF operations, and form filling.

Whether you're extracting tabular data from reports, generating invoices, merging scanned documents, or filling out forms at scale, this skill provides the tools and patterns to accomplish it efficiently.

## Prerequisites

**Python Libraries**:
```bash
# Core libraries
pip install pypdf pdfplumber reportlab

# Optional (for advanced features)
pip install pytesseract pdf2image  # OCR for scanned PDFs
pip install pandas  # Table export to Excel/CSV
```

**Command-Line Tools** (optional):
```bash
# Ubuntu/Debian
sudo apt-get install poppler-utils qpdf

# macOS
brew install poppler qpdf

# Windows
# Download from: https://poppler.freedesktop.org/ and https://qpdf.sourceforge.io/
```

## Activation

This skill activates automatically when:
- User mentions PDF processing, extraction, or generation
- User needs to merge, split, or manipulate PDF files
- User wants to extract tables or text from PDFs
- User references PDF forms or fillable documents

Manual activation:
```bash
/pdf-skills
```

## Core Libraries

### pypdf - Basic Operations

**Purpose**: Merge, split, rotate, encrypt PDFs
**Best for**: Document manipulation, metadata editing, basic transformations

### pdfplumber - Text and Table Extraction

**Purpose**: Extract text with layout preservation, parse tables
**Best for**: Data extraction, invoice processing, report parsing

### reportlab - PDF Creation

**Purpose**: Generate PDFs from scratch with text, graphics, tables
**Best for**: Invoice generation, report creation, certificate printing

## Capabilities

### Extract Text from PDFs

Read text content from PDF documents:

```python
from pypdf import PdfReader

# Read PDF
reader = PdfReader("document.pdf")
print(f"Pages: {len(reader.pages)}")

# Extract all text
text = ""
for page in reader.pages:
    text += page.extract_text()

print(text)
```

**When to use**: Extract content for analysis, search indexing, data migration.

### Extract Tables from PDFs

Parse tabular data into structured format:

```python
import pdfplumber
import pandas as pd

with pdfplumber.open("invoice.pdf") as pdf:
    all_tables = []
    for page in pdf.pages:
        tables = page.extract_tables()
        for table in tables:
            if table:  # Check table is not empty
                df = pd.DataFrame(table[1:], columns=table[0])
                all_tables.append(df)

# Combine all tables
if all_tables:
    combined_df = pd.concat(all_tables, ignore_index=True)
    combined_df.to_excel("extracted_data.xlsx", index=False)
```

**When to use**: Extract data from invoices, financial reports, tables in research papers.

### Merge PDFs

Combine multiple PDFs into single file:

```python
from pypdf import PdfWriter, PdfReader

writer = PdfWriter()

# Add pages from multiple PDFs
for pdf_file in ["doc1.pdf", "doc2.pdf", "doc3.pdf"]:
    reader = PdfReader(pdf_file)
    for page in reader.pages:
        writer.add_page(page)

# Save merged PDF
with open("merged.pdf", "wb") as output:
    writer.write(output)
```

**When to use**: Combine reports, merge scanned documents, consolidate receipts.

### Split PDFs

Extract individual pages into separate files:

```python
from pypdf import PdfReader, PdfWriter

reader = PdfReader("input.pdf")

# Create separate file for each page
for i, page in enumerate(reader.pages):
    writer = PdfWriter()
    writer.add_page(page)

    with open(f"page_{i+1}.pdf", "wb") as output:
        writer.write(output)
```

**When to use**: Distribute pages individually, extract specific sections, archive single pages.

### Create PDFs from Scratch

Generate PDFs programmatically:

```python
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

c = canvas.Canvas("invoice.pdf", pagesize=letter)
width, height = letter

# Add content
c.drawString(100, height - 100, "INVOICE")
c.drawString(100, height - 140, "Invoice #: 12345")
c.drawString(100, height - 160, "Date: 2025-12-29")

c.line(100, height - 180, 400, height - 180)

c.drawString(100, height - 220, "Item: Professional Services")
c.drawString(100, height - 240, "Amount: $5,000")

# Save
c.save()
```

**When to use**: Generate invoices, certificates, reports from templates, automated document creation.

### Rotate Pages

Adjust page orientation:

```python
from pypdf import PdfReader, PdfWriter

reader = PdfReader("input.pdf")
writer = PdfWriter()

# Rotate first page 90 degrees clockwise
page = reader.pages[0]
page.rotate(90)
writer.add_page(page)

# Add remaining pages without rotation
for page in reader.pages[1:]:
    writer.add_page(page)

with open("rotated.pdf", "wb") as output:
    writer.write(output)
```

**When to use**: Fix scanned document orientation, adjust page layout.

### Extract Metadata

Read PDF document properties:

```python
from pypdf import PdfReader

reader = PdfReader("document.pdf")
meta = reader.metadata

print(f"Title: {meta.title}")
print(f"Author: {meta.author}")
print(f"Subject: {meta.subject}")
print(f"Creator: {meta.creator}")
print(f"Producer: {meta.producer}")
print(f"Created: {meta.creation_date}")
```

**When to use**: Document management, compliance tracking, metadata indexing.

## Advanced Operations

### OCR Scanned PDFs

Extract text from image-based PDFs:

```python
import pytesseract
from pdf2image import convert_from_path

# Convert PDF to images
images = convert_from_path('scanned.pdf')

# OCR each page
text = ""
for i, image in enumerate(images):
    text += f"Page {i+1}:\n"
    text += pytesseract.image_to_string(image)
    text += "\n\n"

print(text)
```

**Prerequisites**: `tesseract-ocr` installed on system.

**When to use**: Scanned documents, image-based PDFs, legacy document digitization.

### Add Watermark

Apply watermark to all pages:

```python
from pypdf import PdfReader, PdfWriter

# Load or create watermark PDF
watermark = PdfReader("watermark.pdf").pages[0]

# Apply to all pages
reader = PdfReader("document.pdf")
writer = PdfWriter()

for page in reader.pages:
    page.merge_page(watermark)
    writer.add_page(page)

with open("watermarked.pdf", "wb") as output:
    writer.write(output)
```

**When to use**: Add "DRAFT" or "CONFIDENTIAL" stamps, branding, copyright protection.

### Password Protection

Encrypt PDFs with password:

```python
from pypdf import PdfReader, PdfWriter

reader = PdfReader("input.pdf")
writer = PdfWriter()

# Add all pages
for page in reader.pages:
    writer.add_page(page)

# Encrypt with password
writer.encrypt("userpassword", "ownerpassword")

with open("encrypted.pdf", "wb") as output:
    writer.write(output)
```

**When to use**: Secure sensitive documents, compliance requirements, controlled access.

## Command-Line Tools

### pdftotext - Text Extraction

```bash
# Extract text
pdftotext input.pdf output.txt

# Preserve layout
pdftotext -layout input.pdf output.txt

# Extract specific pages
pdftotext -f 1 -l 5 input.pdf output.txt  # Pages 1-5
```

### qpdf - PDF Manipulation

```bash
# Merge PDFs
qpdf --empty --pages file1.pdf file2.pdf -- merged.pdf

# Split pages
qpdf input.pdf --pages . 1-5 -- pages1-5.pdf

# Rotate pages
qpdf input.pdf output.pdf --rotate=+90:1

# Remove password
qpdf --password=mypassword --decrypt encrypted.pdf decrypted.pdf
```

### pdfimages - Extract Images

```bash
# Extract all images as JPEG
pdfimages -j input.pdf output_prefix

# Results: output_prefix-000.jpg, output_prefix-001.jpg, etc.
```

## Examples

### Example 1: Invoice Data Extraction

Extract invoice data into structured format:

```python
import pdfplumber
import pandas as pd
import json

def extract_invoice_data(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        # Extract text from first page
        text = pdf.pages[0].extract_text()

        # Extract tables
        tables = pdf.pages[0].extract_tables()

        # Parse invoice number and date (example pattern)
        invoice_number = None
        invoice_date = None
        for line in text.split('\n'):
            if 'Invoice #' in line:
                invoice_number = line.split(':')[-1].strip()
            if 'Date:' in line:
                invoice_date = line.split(':')[-1].strip()

        # Convert table to DataFrame
        items = pd.DataFrame(tables[0][1:], columns=tables[0][0]) if tables else None

        return {
            'invoice_number': invoice_number,
            'date': invoice_date,
            'items': items.to_dict('records') if items is not None else []
        }

# Extract data
data = extract_invoice_data('invoice.pdf')
print(json.dumps(data, indent=2))
```

### Example 2: Bulk PDF Merge

Merge all PDFs in directory:

```python
from pypdf import PdfWriter, PdfReader
from pathlib import Path

def merge_pdfs_in_directory(directory, output_file):
    writer = PdfWriter()

    # Sort files for consistent ordering
    pdf_files = sorted(Path(directory).glob('*.pdf'))

    for pdf_file in pdf_files:
        reader = PdfReader(pdf_file)
        for page in reader.pages:
            writer.add_page(page)

    with open(output_file, 'wb') as output:
        writer.write(output)

    print(f"Merged {len(pdf_files)} PDFs into {output_file}")

merge_pdfs_in_directory('./reports/', 'all_reports.pdf')
```

### Example 3: Generate Report with Tables

Create PDF report with formatted tables:

```python
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib import colors

def generate_report(filename, title, data):
    doc = SimpleDocTemplate(filename, pagesize=letter)
    styles = getSampleStyleSheet()
    story = []

    # Title
    story.append(Paragraph(title, styles['Title']))
    story.append(Spacer(1, 20))

    # Table
    table = Table(data)
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 14),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
        ('GRID', (0, 0), (-1, -1), 1, colors.black)
    ]))

    story.append(table)

    # Build PDF
    doc.build(story)

# Usage
data = [
    ['Product', 'Q1', 'Q2', 'Q3', 'Q4'],
    ['Product A', '$10k', '$12k', '$15k', '$18k'],
    ['Product B', '$8k', '$9k', '$11k', '$13k'],
    ['Product C', '$5k', '$6k', '$7k', '$9k']
]

generate_report('sales_report.pdf', 'Quarterly Sales Report', data)
```

## Best Practices

**Use pdfplumber for extraction**: More accurate than pypdf for text and tables.

**Handle encoding issues**: PDFs may have encoding problems - use error handling when extracting text.

**Validate extracted tables**: Check table structure before processing - OCR and complex layouts may produce malformed tables.

**Test with sample PDFs**: Behavior varies by PDF creator - test extraction logic with real examples.

**Stream large PDFs**: For multi-GB PDFs, process page-by-page instead of loading entire file.

**Check PDF version**: Some features require specific PDF versions - verify compatibility.

**Preserve original files**: Always work on copies when modifying PDFs.

## Troubleshooting

**Problem**: Text extraction returns garbled characters.

**Solution**: PDF may use custom encoding. Try pdfplumber instead of pypdf. For scanned PDFs, use OCR (pytesseract).

---

**Problem**: Table extraction misses columns or rows.

**Solution**: Use pdfplumber's table settings to adjust detection:
```python
table_settings = {
    "vertical_strategy": "lines",
    "horizontal_strategy": "lines"
}
tables = page.extract_tables(table_settings=table_settings)
```

---

**Problem**: Merged PDF is larger than individual files combined.

**Solution**: Use qpdf to compress:
```bash
qpdf --compress-streams=y input.pdf output.pdf
```

---

**Problem**: PDF creation fails with Unicode characters.

**Solution**: Register fonts that support Unicode:
```python
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
pdfmetrics.registerFont(TTFont('Unicode', 'path/to/unicode-font.ttf'))
```

---

**Problem**: OCR is slow for large documents.

**Solution**: Reduce image DPI before OCR:
```python
images = convert_from_path('scanned.pdf', dpi=150)  # Lower DPI = faster
```

## Quick Reference

| Task | Best Tool | Command/Code |
|------|-----------|--------------|
| Merge PDFs | pypdf | `writer.add_page(page)` |
| Split PDFs | pypdf | One page per file |
| Extract text | pdfplumber | `page.extract_text()` |
| Extract tables | pdfplumber | `page.extract_tables()` |
| Create PDFs | reportlab | Canvas or Platypus |
| Command-line merge | qpdf | `qpdf --empty --pages ...` |
| OCR scanned PDFs | pytesseract | Convert to image first |
| Fill PDF forms | See forms.md in skill | pypdf or pdf-lib |

## Related Skills

- [Document Skills](/docs/engineer/skills/document-skills) - DOCX, XLSX, PPTX processing
- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - Analyze PDF content with Gemini
- [Media Processing](/docs/engineer/skills/media-processing) - Image extraction and conversion

## Resources

- pypdf docs: https://pypdf.readthedocs.io/
- pdfplumber docs: https://github.com/jsvine/pdfplumber
- reportlab docs: https://www.reportlab.com/docs/reportlab-userguide.pdf
- qpdf manual: https://qpdf.readthedocs.io/
