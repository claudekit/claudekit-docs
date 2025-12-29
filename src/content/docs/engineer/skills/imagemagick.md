---
title: imagemagick
description: Documentation for imagemagick
section: engineer
kit: engineer
category: skills/tools
order: 22
published: true
---

# imagemagick

Command-line powerhouse for image processing - format conversion, resizing, effects, batch operations.

## When to Use

- **Format conversion** - PNG/JPEG/WebP/GIF between formats with quality control
- **Batch processing** - Resize, optimize, watermark hundreds of images at once
- **Web optimization** - Create responsive sizes, strip metadata, compress for web
- **Effects & filters** - Blur, sharpen, color adjustments, artistic effects

## Key Capabilities

| Operation | Examples |
|-----------|----------|
| **Resize** | Fit, fill, crop, maintain aspect, exact dimensions |
| **Convert** | PNG↔JPEG↔WebP with quality settings |
| **Effects** | Blur, sharpen, grayscale, sepia, watermarks |
| **Batch** | Process entire folders with mogrify or loops |
| **Optimize** | Strip metadata, progressive JPEGs, WebP compression |

## Common Use Cases

### E-commerce Product Manager
**Who:** Store owner with 200 product photos
**Prompt:** "Use imagemagick to batch process product images: resize to 1000x1000 square from center, convert to WebP 85% quality, create 300x300 thumbnails"

### Social Media Manager
**Who:** Content creator preparing Instagram posts
**Prompt:** "Use imagemagick to create Instagram square (1080x1080) from these landscape photos, center crop, add white watermark bottom-right"

### Web Developer
**Who:** Dev optimizing site performance
**Prompt:** "Use imagemagick to generate responsive image set: create 320w, 640w, 1024w, 1920w versions of all JPEGs, WebP format, strip metadata"

### Email Marketer
**Who:** Newsletter designer reducing image sizes
**Prompt:** "Use imagemagick to optimize images for email: max width 600px, JPEG quality 75, strip all metadata, progressive encoding"

### Photographer
**Who:** Pro photographer watermarking portfolio
**Prompt:** "Use imagemagick to add logo watermark to all photos in folder, position bottom-right with 20px margin, 50% opacity"

## Quick Reference

```bash
# Resize (maintain aspect)
magick input.jpg -resize 800x600 output.jpg

# Square crop from center
magick input.jpg -resize 1000x1000^ -gravity center -extent 1000x1000 output.jpg

# Convert format
magick input.png -quality 85 output.jpg

# Batch resize all
mogrify -resize 800x *.jpg

# Batch to different folder
mogrify -path ./output -resize 800x600 *.jpg

# Web optimize
magick input.jpg -quality 85 -strip -interlace Plane output.jpg

# Add watermark
magick input.jpg logo.png -gravity southeast -geometry +10+10 -composite output.jpg

# Grayscale
magick input.jpg -colorspace Gray output.jpg

# Create thumbnails
for f in *.jpg; do magick "$f" -thumbnail 200x200 "thumb_$f"; done

# Responsive sizes
for w in 320 640 1024 1920; do magick input.jpg -resize ${w}x out-${w}w.jpg; done
```

**Geometry syntax:**
- `800x600` = fit within (maintains aspect)
- `800x600!` = exact size (may distort)
- `800x600^` = fill (may crop)
- `800x` = width 800, auto height
- `x600` = height 600, auto width

## Pro Tips

**Quality settings:**
- 95-100: Archival (large files)
- 85-90: Web publishing (recommended)
- 70-80: Email, thumbnails
- WebP: Use 80-85 for best size/quality

**Batch best practices:**
- Always backup originals before mogrify (modifies in-place)
- Test command on single file first
- Use `-path` to preserve originals: `mogrify -path ./output ...`
- For complex operations, use loops instead of mogrify

**Web optimization combo:**
```bash
magick input.jpg -resize 1920x -quality 85 -strip -interlace Plane output.jpg
```

**Not activating?** Say: "Use imagemagick skill to resize these images to 800px width and convert to WebP"

## Related Skills

- [FFmpeg](/docs/engineer/skills/tools/ffmpeg) - Video/audio processing
- [Frontend Design](/docs/engineer/skills/frontend/frontend-design) - UI component creation
- [Chrome DevTools](/docs/engineer/skills/tools/chrome-devtools) - Browser debugging

## Key Takeaway

ImageMagick = Swiss Army knife for images. One command processes hundreds of files. Essential for any workflow involving image optimization, batch conversion, or automated resizing.
