---
title: imagemagick
description: "Documentation for imagemagick
description:
section: docs
category: skills/tools
order: 22
published: true"
section: docs
category: skills/tools
order: 22
published: true
---

# imagemagick Skill

Advanced image processing - format conversion, resizing, effects, transformations, batch operations.

## When to Use

Use imagemagick when you need:
- Convert image formats
- Resize/crop images
- Apply effects/filters
- Create thumbnails
- Batch process images
- Add watermarks/text
- Optimize for web

## Quick Start

### Invoke the Skill

```
"Use imagemagick to:
- Resize all product images to 800x800
- Convert to WebP
- Optimize file size
- Keep quality high"
```

### What You Get

The skill will help you:
1. Convert formats
2. Resize/transform
3. Apply effects
4. Batch process
5. Optimize output

## Common Use Cases

### Format Conversion

```
"Use imagemagick to convert all PNG images to JPEG with 90% quality"
```

### Create Thumbnails

```
"Use imagemagick to create 200x200 thumbnails for all images in folder"
```

### Watermark Images

```
"Use imagemagick to add logo watermark to bottom-right of all images"
```

### Batch Optimization

```
"Use imagemagick to optimize all images for web:
- Max width 1920px
- WebP format
- Good quality
- Small file size"
```

## Basic Operations

### Format Conversion

```bash
# PNG to JPEG
magick input.png output.jpg

# With quality setting
magick input.png -quality 85 output.jpg

# To WebP
magick input.jpg output.webp
```

### Resize

```bash
# Fit within 800x600 (maintains aspect)
magick input.jpg -resize 800x600 output.jpg

# Exact size (may distort)
magick input.jpg -resize 800x600! output.jpg

# Width only
magick input.jpg -resize 800x output.jpg

# Height only
magick input.jpg -resize x600 output.jpg

# By percentage
magick input.jpg -resize 50% output.jpg
```

### Crop

```bash
# Crop to 500x500 from top-left
magick input.jpg -crop 500x500+0+0 output.jpg

# Crop from center
magick input.jpg -gravity center -crop 500x500+0+0 output.jpg
```

### Rotate

```bash
# Rotate 90 degrees
magick input.jpg -rotate 90 output.jpg

# Flip horizontal
magick input.jpg -flop output.jpg

# Flip vertical
magick input.jpg -flip output.jpg
```

## Effects & Filters

### Blur/Sharpen

```bash
# Blur
magick input.jpg -blur 0x8 output.jpg

# Sharpen
magick input.jpg -sharpen 0x1 output.jpg
```

### Adjust Colors

```bash
# Brightness (+/- 50)
magick input.jpg -modulate 120 output.jpg

# Contrast
magick input.jpg -contrast output.jpg

# Saturation
magick input.jpg -modulate 100,150 output.jpg

# Grayscale
magick input.jpg -colorspace Gray output.jpg

# Sepia tone
magick input.jpg -sepia-tone 80% output.jpg
```

### Borders & Frames

```bash
# Add border
magick input.jpg -border 10 -bordercolor black output.jpg

# Add frame
magick input.jpg -mattecolor white -frame 10x10 output.jpg
```

### Watermark

```bash
# Add logo
magick input.jpg logo.png -gravity southeast -geometry +10+10 -composite output.jpg

# Add text
magick input.jpg -gravity southeast -pointsize 20 -fill white -annotate +10+10 'Copyright 2025' output.jpg
```

## Batch Processing

### Convert All Files

```bash
# Convert all PNG to JPEG
for file in *.png; do
  magick "$file" "${file%.png}.jpg"
done
```

### Batch mogrify

```bash
# Resize all JPEGs in place
mogrify -resize 800x600 *.jpg

# Convert all to WebP
mogrify -format webp *.jpg
```

### Advanced Batch

```bash
# Create thumbnails for all images
for file in *.jpg; do
  magick "$file" -resize 200x200^ -gravity center -extent 200x200 "thumb_${file}"
done
```

## Web Optimization

### Progressive JPEG

```bash
magick input.jpg -interlace Plane -quality 85 output.jpg
```

### Strip Metadata

```bash
magick input.jpg -strip output.jpg
```

### Optimize WebP

```bash
magick input.jpg -quality 80 -define webp:method=6 output.webp
```

### Create Responsive Sizes

```bash
# Create multiple sizes
magick input.jpg -resize 1920x output-large.jpg
magick input.jpg -resize 1280x output-medium.jpg
magick input.jpg -resize 640x output-small.jpg
```

## Advanced Features

### Create Montage

```bash
# Create contact sheet
montage *.jpg -thumbnail 200x200 -geometry +5+5 montage.jpg
```

### Composite Images

```bash
# Overlay two images
composite overlay.png background.jpg output.jpg
```

### Create Animated GIF

```bash
magick -delay 100 -loop 0 frame*.jpg animated.gif
```

### Extract Frames from GIF

```bash
magick animated.gif frame_%03d.jpg
```

## Geometry Specs

- `100x100` - Fit within (maintains aspect)
- `100x100!` - Exact size (may distort)
- `100x100^` - Fill (may crop)
- `100x` - Width 100, auto height
- `x100` - Height 100, auto width
- `50%` - Scale to 50%
- `100x100+10+20` - 100x100 at offset (10,20)

## Quick Examples

**Simple Resize:**
```
"Use imagemagick to resize image to 800px width"
```

**Batch Thumbnails:**
```
"Use imagemagick to create square 300x300 thumbnails for all product images"
```

**Format Conversion:**
```
"Use imagemagick to convert all images to WebP format with good compression"
```

**Add Watermark:**
```
"Use imagemagick to add copyright text to bottom-right of all images"
```

## Best Practices

1. **Always backup originals**
2. **Test on single file first**
3. **Use appropriate quality** (85-90 for web)
4. **Strip metadata** for web
5. **Maintain aspect ratio**
6. **Use WebP** for modern browsers
7. **Create multiple sizes** for responsive
8. **Optimize file size**

## Common Tasks

### Product Images

```bash
# Square crop from center
magick input.jpg -resize 1000x1000^ -gravity center -extent 1000x1000 product.jpg
```

### Social Media

```bash
# Instagram (1080x1080)
magick input.jpg -resize 1080x1080^ -gravity center -extent 1080x1080 instagram.jpg

# Facebook cover (820x312)
magick input.jpg -resize 820x312^ -gravity center -extent 820x312 facebook.jpg
```

### Email Friendly

```bash
# Small file size
magick input.jpg -resize 600x -quality 70 -strip email.jpg
```

## Troubleshooting

### Command not found

```bash
# Check installation
magick -version

# Install
brew install imagemagick  # macOS
sudo apt-get install imagemagick  # Linux
```

### Security policy

Edit `/etc/ImageMagick-7/policy.xml` or use `convert` instead of `magick`.

### Quality issues

- Increase quality value (-quality 90)
- Use PNG for graphics/screenshots
- Use JPEG for photos
- Use WebP for best compression

## Next Steps

- [Media Processing](/docs/use-cases/)
- [FFmpeg](/docs/skills/ffmpeg)
- [Batch Automation](/docs/use-cases/)

---

**Bottom Line:** imagemagick handles all image processing. Resize, convert, optimize - powerful command-line image manipulation.
