---
title: gemini-vision
description: "Documentation for gemini-vision
description:
section: docs
category: skills/ai
order: 20
published: true"
section: docs
category: skills/ai
order: 20
published: true
---

# gemini-vision Skill

Google Gemini API for image understanding - captioning, classification, visual QA, object detection, segmentation.

## When to Use

Use gemini-vision when you need:
- Image captioning
- Object detection
- Visual question answering
- Document OCR
- Multi-image comparison
- Segmentation masks

## Quick Start

### Invoke the Skill

```
"Use gemini-vision to analyze product images and extract:
- Product name
- Color
- Condition
- Defects if any"
```

### What You Get

The skill will help you:
1. Set up Gemini API
2. Process images
3. Extract information
4. Handle responses
5. Manage API costs

## Common Use Cases

### Product Analysis

```
"Use gemini-vision to analyze product photos:
- Identify product type
- Extract visible text
- Assess quality
- Detect damage"
```

### Document OCR

```
"Use gemini-vision to extract text from invoice.jpg and structure as JSON"
```

### Multi-Image Comparison

```
"Use gemini-vision to compare before/after photos and list differences"
```

### Object Detection

```
"Use gemini-vision with gemini-2.0-flash to detect all objects in image with bounding boxes"
```

## Supported Formats

- **Images**: PNG, JPEG, WEBP, HEIC, HEIF
- **Documents**: PDF (up to 1,000 pages)
- **Size**: 20MB max inline, File API for larger

## Available Models

- **gemini-2.5-pro**: Most capable, segmentation + detection
- **gemini-2.5-flash**: Fast, efficient
- **gemini-2.0-flash**: Object detection
- **gemini-1.5-pro/flash**: Previous generation

## API Setup

### Get API Key

1. Visit [Google AI Studio](https://aistudio.google.com/apikey)
2. Create API key
3. Set environment variable:

```bash
export GEMINI_API_KEY="your-key-here"
```

Or in `.env` file:
```
GEMINI_API_KEY=your-key-here
```

### Install SDK

```bash
pip install google-genai
```

## Usage Examples

### Basic Analysis

```python
from google import genai

client = genai.Client(api_key="YOUR_API_KEY")

response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents=['What objects are in this image?', 'image.jpg']
)

print(response.text)
```

### Structured Output

```
"Use gemini-vision to analyze receipt.jpg and return JSON with:
{
  'store': 'store name',
  'date': 'purchase date',
  'items': ['item list'],
  'total': 'total amount'
}"
```

### Batch Processing

```
"Use gemini-vision to process folder of product images and create CSV with product details"
```

## Token Costs

Images consume tokens based on size:
- **Small** (≤384px): 258 tokens
- **Large**: Tiled into 768x768 chunks, 258 tokens each

**Example**: 960x540 image = ~1,548 tokens

## Best Practices

### Image Quality

- Use clear, well-lit images
- Ensure correct rotation
- Higher resolution for text extraction
- Compress large files

### Prompting

```
"Use gemini-vision to analyze image:
- Be specific in questions
- Request structured output (JSON/CSV)
- Provide examples for accuracy
- Specify required fields"
```

### Cost Optimization

- Resize images before upload
- Use File API for repeated analysis
- Choose appropriate model (Flash for speed)
- Batch related images

## Advanced Features

### Object Detection (2.0+)

```
"Use gemini-vision with gemini-2.0-flash to:
- Detect all objects
- Return bounding boxes
- Label each object
- Calculate confidence scores"
```

### Segmentation (2.5+)

```
"Use gemini-vision with gemini-2.5-pro to:
- Create segmentation masks
- Identify distinct objects
- Separate foreground/background"
```

### Multi-Image Analysis

```
"Use gemini-vision to compare these 5 product photos and identify which one shows damage"
```

## Integration Examples

### E-commerce Product Listing

```
"Use gemini-vision to:
1. Analyze product photo
2. Extract product attributes
3. Generate description
4. Categorize product
5. Output as JSON for database"
```

### Quality Control

```
"Use gemini-vision for manufacturing QC:
- Detect defects
- Compare to reference image
- Classify defect types
- Generate inspection report"
```

### Document Processing

```
"Use gemini-vision to:
1. Extract text from scanned invoice
2. Parse line items
3. Calculate totals
4. Validate against expected format"
```

## Error Handling

Common errors:
- **401**: Invalid API key
- **429**: Rate limit exceeded
- **400**: Invalid image format/size
- **403**: Restricted content

## Quick Examples

**Simple Caption:**
```
"Use gemini-vision to caption this image"
```

**Product Catalog:**
```
"Use gemini-vision to analyze product images and create catalog with:
- Product name
- Description
- Key features
- Suggested price range"
```

**Document Extraction:**
```
"Use gemini-vision to extract all text and tables from multi-page PDF invoice"
```

## Rate Limits

Free tier:
- 15 RPM (requests per minute)
- 1 million TPM (tokens per minute)
- 1,500 RPD (requests per day)

Paid tiers scale up significantly.

## Next Steps

- [Document Processing](/docs/skills/document-skills)
- [AI Integration Examples](/docs/use-cases/)
- [API Reference](https://ai.google.dev/gemini-api/docs/image-understanding)

---

**Bottom Line:** gemini-vision analyzes images with AI. Extract text, detect objects, answer visual questions - all with simple prompts.
