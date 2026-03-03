---
lang: vi
title: "ckm:elevenlabs"
description: "Tạo giọng nói, nhân bản giọng, hiệu ứng âm thanh với ElevenLabs"
section: marketing
kit: marketing
category: skills
order: 76
---

# ElevenLabs

> Tạo voiceover marketing, podcast, và nội dung audio chuyên nghiệp với ElevenLabs AI.

## Skill Này Làm Gì

**Thách thức**: Sản xuất audio chất lượng cao cho marketing — video ads, podcast, explainer videos — đòi hỏi studio, voice actor, và post-production tốn kém. Chi phí thường ngoài tầm với của solopreneur và startup.

**Giải pháp**: Skill elevenlabs tận dụng ElevenLabs API để tạo giọng nói realistic, nhân bản giọng thương hiệu, thêm hiệu ứng âm thanh và sản xuất audio marketing chuyên nghiệp.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi cần tạo audio, voiceover hoặc nội dung âm thanh.

**Tường minh**: Kích hoạt qua prompt:
```
Activate elevenlabs skill to [create/clone/generate] [audio type]
```

## Tính Năng

### 1. Text-to-Speech (TTS)
Chuyển đổi văn bản marketing thành giọng nói chất lượng cao.

**Giọng phổ biến cho marketing**:
| Voice ID | Phong cách | Dùng cho |
|----------|-----------|---------|
| Adam | Professional, clear | Product demos, explainers |
| Rachel | Warm, friendly | Brand voice, customer service |
| Domi | Energetic, confident | Ads, promotions |
| Bella | Soft, conversational | Podcasts, stories |

**API call cơ bản**:
```python
from elevenlabs import ElevenLabs

client = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))

audio = client.generate(
    text="Khám phá ClaudeKit Marketing — bộ công cụ AI đầy đủ cho solopreneur.",
    voice="Rachel",
    model="eleven_multilingual_v2"  # Hỗ trợ tiếng Việt
)

with open("voiceover.mp3", "wb") as f:
    f.write(audio)
```

### 2. Voice Cloning
Nhân bản giọng nói thương hiệu từ audio samples.

**Quy trình clone giọng**:
```python
# 1. Upload audio samples (15-60 giây, nhiều samples = tốt hơn)
voice = client.clone(
    name="Brand Voice",
    description="Professional Vietnamese brand voice",
    files=["sample1.mp3", "sample2.mp3", "sample3.mp3"],
)

# 2. Sử dụng cloned voice
audio = client.generate(
    text="Nội dung marketing của bạn",
    voice=voice.voice_id
)
```

**Yêu cầu audio samples**:
- Chất lượng: Clear, không có background noise
- Thời lượng: Tổng cộng 2-10 phút
- Nội dung: Đọc nhiều loại văn bản khác nhau

### 3. Sound Effects
Tạo hiệu ứng âm thanh tùy chỉnh cho video marketing.

```python
# Text-to-sound effect
sfx = client.text_to_sound_effects.convert(
    text="Tiếng chuông thông báo thành công, upbeat và professional",
    duration_seconds=2.0
)
```

### 4. Audio Production Workflow
Quy trình hoàn chỉnh từ script đến audio final.

**Bước 1: Chuẩn bị script**
```markdown
# Ad Script — 30 giây
[INTRO — 5s]
Bạn đang dùng hàng chục tools marketing riêng lẻ?

[PROBLEM — 8s]
Mỗi ngày phải chuyển qua lại giữa 10 tabs khác nhau...
Mất cả buổi sáng chỉ để tổng hợp báo cáo...

[SOLUTION — 10s]
ClaudeKit Marketing tích hợp tất cả vào một workflow.
Analytics, email, social media — tất cả trong một nơi.

[CTA — 7s]
Dùng thử miễn phí 14 ngày tại claudekit.cc
```

**Bước 2: Generate với emotion markers**
```python
# SSML-like markers cho expressiveness
text = """
<break time="0.5s"/> Bạn đang dùng hàng chục tools marketing riêng lẻ?
<break time="1s"/>
Mỗi ngày phải chuyển qua lại giữa 10 tabs khác nhau...
"""

audio = client.generate(
    text=text,
    voice="Rachel",
    model="eleven_multilingual_v2",
    voice_settings={
        "stability": 0.5,
        "similarity_boost": 0.75,
        "style": 0.3  # Expressiveness
    }
)
```

**Bước 3: Post-processing**
```bash
# Normalize audio levels với ffmpeg
ffmpeg -i voiceover.mp3 -af "loudnorm=I=-16:TP=-1.5:LRA=11" output.mp3

# Add background music (lower volume)
ffmpeg -i voiceover.mp3 -i bg-music.mp3 \
  -filter_complex "[1:a]volume=0.15[bg]; [0:a][bg]amix=inputs=2:duration=first" \
  final-ad.mp3
```

## Điều Kiện Tiên Quyết

- ElevenLabs API key (elevenlabs.io)
- Python 3.10+ hoặc Node.js 18+
- ffmpeg (cho audio processing)

## Cấu Hình

**Biến môi trường**:
```bash
ELEVENLABS_API_KEY=your_api_key_here
```

**Giới hạn plan**:
| Plan | Characters/tháng | Voice cloning |
|------|-----------------|---------------|
| Free | 10,000 | Không |
| Starter | 30,000 | 3 voices |
| Creator | 100,000 | 10 voices |
| Pro | 500,000 | Unlimited |

## Thực Hành Tốt Nhất

**1. Script Ngắn Gọn Cho Ads**
30 giây = ~70-80 từ tiếng Việt. Mỗi câu = một ý tưởng.

**2. Test Nhiều Voices**
Cùng một script, test 3-4 voices khác nhau trước khi chọn. Giọng phù hợp brand tạo ra sự khác biệt lớn.

**3. Stability và Style Balance**
Stability cao = giọng nhất quán, ít biểu cảm. Style cao = cảm xúc hơn nhưng ít dự đoán được.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Video Ad 15 Giây
**Tình huống**: Tạo voiceover cho video quảng cáo Facebook.

**Quy trình**:
1. Viết script 30-40 từ với `/ckm:copywriting`
2. Generate với voice "Domi" (energetic) ở tốc độ 1.1x
3. Export MP3, sync với video clips
4. Normalize audio level

### Trường Hợp 2: Podcast Intro/Outro
**Tình huống**: Tạo branded intro cho marketing podcast.

**Quy trình**:
1. Clone giọng host từ audio samples
2. Script intro 15 giây
3. Add background music
4. Master và export

## Xử Lý Sự Cố

**Vấn đề**: Giọng phát âm sai tên thương hiệu
**Giải pháp**: Thêm phonetic spelling trong script: "ClaudeKit (đọc là: Claude-Kit)"

**Vấn đề**: Audio có artifacts hoặc glitches
**Giải pháp**: Tăng stability, giảm style. Chia đoạn văn dài thành nhiều đoạn ngắn.

## Skill Liên Quan

- [Media Processing](/vi/docs/marketing/skills/media-processing) - Xử lý và edit audio/video
- [Video](/vi/docs/marketing/skills/video) - Tạo video marketing đầy đủ
- [Copywriting](/vi/docs/marketing/skills/copywriting) - Viết script cho voiceover

## Lệnh Liên Quan

- `/ckm:elevenlabs` - Tạo audio với ElevenLabs
- `/ckm:video` - Tích hợp audio vào video
- `/ckm:copywriting` - Viết script marketing
