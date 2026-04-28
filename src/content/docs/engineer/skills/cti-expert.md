---
title: "ck:cti-expert"
description: "Cyber threat intelligence and OSINT investigation toolkit for intelligence-grade investigations without API keys"
section: engineer
kit: engineer
category: skills
order: 25
---

# CTI Expert

Cyber threat intelligence and open-source intelligence (OSINT) investigation skill. Turns Claude into a trained CTI/OSINT analyst. Generates precision search queries, interprets public data, builds case timelines, and delivers structured intelligence products — no API keys required.

Think of it as having a professional threat intelligence analyst on your team who speaks multiple languages, knows every advanced search technique, and can piece together evidence across hundreds of public data sources.

## What This Skill Does

CTI Expert conducts multi-source investigations into digital footprints, organizations, domains, credentials, and security threats. It handles everything from username enumeration across 3000+ platforms to building threat models from scattered clues.

The skill runs guided case workflows (Acquire → Enrich → Assess → Deliver) that keep investigations organized and verifiable. Every finding is sourced, timestamped, and confidence-scored. You get formal intelligence reports suitable for legal proceedings, executive briefs for decision-makers, or technical threat assessments.

## Quick Start

```bash
# Full autonomous case — investigates everything applicable
/case target.com

# Guided workflow for beginners
/flow person

# Summary of findings so far
/brief

# Generate formal report
/report
```

Append `--yolo` to any command to skip confirmations and let the analyst decide autonomously.

## Investigation Phases

Every case follows the **AEAD** lifecycle:

| Phase | What Happens | Examples |
|-------|------------|----------|
| **Acquire** | Collect raw data | sweep domains, enumerate usernames, check breaches |
| **Enrich** | Expand and connect leads | branch identifiers, build timelines, cross-reference |
| **Assess** | Score and verify findings | expose score, threat models, validation checks |
| **Deliver** | Package output | formal reports, executive briefs, IOC exports |

Run `/progress` at any point to see which phase you're in and what's pending.

## Core Capabilities

### Social Media & Username Investigation

```bash
# Find a username across 3000+ platforms
/username johndoe

# Enumerate accounts, timeline, connected accounts
/sweep @johndoe
```

### Breach & Credential Hunting

```bash
# Deep breach lookup with context
/breach-deep user@example.com

# Exposed credentials in repos and paste sites
/secrets github.com/org
```

### Domain & IP Intelligence

```bash
# Full domain reconnaissance
/sweep example.com

# Technology fingerprint: CMS, analytics, CDN, servers
/techstack example.com

# DNS history and certificate timeline
/dns-history example.com
/cert-history example.com
```

### Threat & Vulnerability Assessment

```bash
# Threat intelligence on domain/IP/URL/hash
/threat-check 185.1.1.1

# Phishing/malware/scam site detection
/scam-check susp-site.xyz

# CVE and vulnerability lookup
/vuln-check CVE-2024-1234

# Check if organization is ransomware victim
/ransomware-check "Acme Corp"
```

### Cloud & Microsoft 365 Reconnaissance

```bash
# M365/Azure tenant recon — tenant ID, federation, MDI, SharePoint
/msftrecon example.com

# Google document metadata and ownership
/gdoc https://docs.google.com/document/d/...
```

### Geographic & Transport Intelligence

```bash
# WiFi SSID geolocation
/wifi "HomeNetwork"

# Exact AP lookup by MAC address
/wifi --bssid AA:BB:CC:DD:EE:FF
```

### Evidence & Reporting

```bash
# View archived snapshots
/snapshots example.com

# Full evidence trail for a subject
/show-trail JohnDoe

# ASCII relationship diagram
/graph
```

## Case Management

Save and resume cases:

```bash
# Persist case state
/workspace save mycase

# Resume a saved investigation
/workspace open mycase

# Compare two cases
/workspace diff case1 case2

# List all saved cases
/workspace list
```

## Report Formats

The skill exports intelligence in multiple formats:

| Format | Best For |
|--------|----------|
| `/report` | Formal structured intelligence report |
| `/report brief` | Single-page executive summary |
| `/report json` | Raw data for integration |
| `/report csv` | Spreadsheet analysis |
| `/report legal` | Evidence formatted for legal proceedings |
| `/report journalist` | Source-citation-heavy format |
| `/report ioc` | IOCs as STIX 2.1 or flat list |

## Subject Types

CTI Expert tracks entities with rich relationships:

| Type | Symbol | Examples |
|------|--------|----------|
| Person | 👤 | Full name, alias |
| Username | @ | Social handle |
| Email | 📧 | Address, domain |
| Domain | 🌐 | Site, subdomain |
| IP Address | 🖥 | IPv4, IPv6 |
| Organization | 🏢 | Company, group |
| Phone | 📱 | E.164 format |
| Crypto Wallet | 💰 | Bitcoin, Ethereum address |
| Device | 🖥️ | Server, workstation |
| Image | 🖼️ | Screenshot, photograph |

## Command Reference

**Acquire phase** — `/case`, `/sweep`, `/username`, `/phone`, `/email-deep`, `/subdomain`, `/breach-deep`, `/traffic`, `/techstack`, `/threat-check`, `/scam-check`, `/vuln-check`, `/msftrecon`, `/dork-sweep`, `/docleak`, `/cert-history`

**Enrich phase** — `/branch`, `/timeline`, `/crossref`, `/link-subjects`, `/show-connections`, `/watch`, `/record-finding`, `/graph`, `/pathfind`

**Assess phase** — `/exposure`, `/threat-model`, `/validate`, `/coverage`, `/verify-finding`, `/subject`, `/lookup`, `/modify`, `/blind-spots`, `/drift`

**Deliver phase** — `/report`, `/brief`, `/report json`, `/report csv`, `/report legal`, `/report ioc`, `/render entities`, `/render timeline`, `/render risk`, `/workspace save/open/list`

**Navigation** — `/flow`, `/progress`, `/opsec`, `/onboard`, `/quality`, `/novice`, `/terms`

See `SKILL.md` in the skill directory for the complete command reference and examples.

## Best Practices

**Collection Method** — The skill uses `agent-browser` when available for JavaScript-heavy sites and infinite-scroll discovery. Falls back to web search, web fetch, and direct URL retrieval when needed. Tool limitations are logged as gaps, never case blockers.

**Search Operators** — CTI Expert generates 12–15 advanced search queries automatically. Each targets a specific platform or data source to maximize signal and minimize noise.

**Confidence Scoring** — All findings are tagged by confidence level and source. The skill will flag ambiguous or high-uncertainty findings for human verification.

**OPSEC Checklist** — Run `/opsec` during sensitive investigations to review operational security practices.

## Use Cases

- **Incident response** — Rapid threat assessment and attribution
- **Due diligence** — Pre-partnership investigation of companies or individuals
- **Legal discovery** — Evidence collection for litigation or compliance
- **Security research** — Vulnerability disclosure and responsible reporting
- **Fraud investigation** — Tracking digital footprints of bad actors
- **Brand protection** — Monitoring for impersonation and credential abuse
- **Threat hunting** — Proactive search for indicators of compromise

## Prerequisites

- No API keys or paid subscriptions required
- Access to Claude with web search and web fetch capabilities
- For `agent-browser` features: JavaScript-capable environment (Playwright MCP)

## Related Skills

- [Scout](/docs/engineer/skills/scout) — Quick file search and codebase exploration
- [Repomix](/docs/engineer/skills/repomix) — Full codebase context dump
- [Security](/docs/engineer/skills/ck-security) — Automated security auditing
