---
title: "ckm:elevenlabs"
description: "Generate speech, clone voices, create sound effects and music with ElevenLabs API for marketing audio content."
section: marketing
category: skills
order: 76
---

# ElevenLabs

> Create professional voiceovers, clone brand voices, and generate audio content at scale with ElevenLabs.

## What This Skill Does

**The Challenge**: Marketing teams need audio content — video voiceovers, podcast intros, ad narration, social audio snippets — but professional voice recording is expensive and slow. Consistency across content is hard to maintain.

**The Solution**: ElevenLabs skill provides text-to-speech generation, voice cloning, sound effect generation, and music creation via the ElevenLabs API. Includes voice selection, emotional tuning, multilingual support, and batch generation for marketing workflows.

## Activation

**Implicit**: Activates when user requests voiceover, audio content, speech synthesis, or voice cloning.

**Explicit**: Activate via prompt:
```
Activate elevenlabs skill to [generate voice/clone voice/create audio] for [describe content]
```

## Capabilities

### 1. Text-to-Speech Generation
Convert scripts to natural-sounding audio.

**Python example**:
```python
from elevenlabs import ElevenLabs

client = ElevenLabs(api_key=os.environ["ELEVENLABS_API_KEY"])

audio = client.text_to_speech.convert(
    voice_id="21m00Tcm4TlvDq8ikWAM",  # Rachel (professional female)
    text="Join thousands of marketers who trust ClaudeKit.",
    model_id="eleven_multilingual_v2",
    voice_settings={"stability": 0.5, "similarity_boost": 0.8}
)

with open("voiceover.mp3", "wb") as f:
    for chunk in audio:
        f.write(chunk)
```

### 2. Voice Library
Pre-built voices categorized for marketing use cases.

**Marketing voice categories**:
| Use Case | Voice Style | Example Voice |
|----------|------------|--------------|
| Ad narration | Authoritative, clear | Adam, Josh |
| Brand warm | Friendly, approachable | Rachel, Bella |
| Tutorial | Calm, instructive | Antoni, Elli |
| Testimonial | Conversational | Dorothy, Thomas |

### 3. Voice Cloning
Create custom voice from audio samples.

**Requirements**: 1-5 minutes of clean audio, minimal background noise.

**Clone workflow**:
```python
voice = client.voices.add(
    name="Brand Voice",
    files=[open("sample.mp3", "rb")],
    description="Our brand spokesperson voice"
)
```

### 4. Sound Effects and Music
Generate background audio for videos and presentations.

**Sound effects**:
```python
sfx = client.text_to_sound_effects.convert(
    text="Soft notification chime, professional",
    duration_seconds=2,
)
```

## Prerequisites

- `ELEVENLABS_API_KEY` in `.env`
- Python 3.8+ with `elevenlabs` package: `pip install elevenlabs`
- ffmpeg for audio processing (optional, for format conversion)

## Best Practices

**1. Match voice to brand personality**
Energetic startup voice differs from established enterprise. Test 3-5 voices before committing.

**2. Keep scripts under 500 words per generation**
Longer scripts should be split at natural pause points for better pacing.

**3. Store generated audio in `assets/audio/`**
Use naming convention: `20260303-product-ad-v1.mp3`

## Common Use Cases

### Use Case 1: Video Ad Voiceover
**Scenario**: 30-second product ad needs professional narration.

**Workflow**:
1. Write script using copywriting skill (75-90 words for 30s)
2. Select voice matching brand (warm, professional)
3. Generate with ElevenLabs API
4. Adjust stability/similarity for right tone
5. Export MP3, sync with video in editor

### Use Case 2: Podcast Intro Production
**Scenario**: Marketing podcast needs consistent intro with voice + music.

**Workflow**:
1. Write 15-second intro script
2. Clone founder's voice (use real recordings as samples)
3. Generate intro voiceover
4. Generate background music loop
5. Mix with audio editor (or ffmpeg)

## Troubleshooting

**Issue**: Voice sounds robotic on complex sentences
**Solution**: Add punctuation for natural pauses. Use `<break time="0.5s"/>` SSML tags for longer pauses.

**Issue**: Voice clone doesn't match source accurately
**Solution**: Provide higher quality samples (studio recording preferred). Increase sample quantity to 3-5 minutes.

## Related Skills

- [Media Processing](/docs/marketing/skills/media-processing) - Process audio/video files
- [Copywriting](/docs/marketing/skills/copywriting) - Write scripts for voiceovers
- [Video](/docs/marketing/skills/video) - Video production with voiceovers
- [AI Multimodal](/docs/marketing/skills/ai-multimodal) - Multi-format content processing

## Related Commands

- `/ckm:write` - Write audio scripts
- `/ckm:campaign` - Campaign audio content planning
