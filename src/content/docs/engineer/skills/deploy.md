---
title: "ck:deploy"
description: "Auto-detect platform and deploy to any of 15 hosting providers with cost-optimized recommendations"
section: engineer
kit: engineer
category: skills
order: 54
---

# Deploy

Auto-detects your deployment target from config files and deploys to any of 15 supported platforms. For advanced infrastructure needs, defers to [DevOps](/docs/engineer/skills/devops).

## What This Skill Does

Deploy reads your project config files (vercel.json, netlify.toml, fly.toml, etc.) to determine the target platform, validates prerequisites, and executes the deployment. No manual platform configuration needed for standard projects.

## When to Use

- First deployment of a new project
- Deploying feature branches for preview
- Switching hosting providers
- Setting up production deployments with CI/CD

## Supported Platforms

| Platform | Config File Detected |
|----------|---------------------|
| Vercel | `vercel.json` |
| Netlify | `netlify.toml` |
| Cloudflare Pages/Workers | `wrangler.toml` |
| Railway | `railway.json` |
| Fly.io | `fly.toml` |
| Render | `render.yaml` |
| Heroku | `Procfile` |
| GitHub Pages | `gh-pages` branch / Actions workflow |
| AWS | `serverless.yml`, `cdk.json`, `amplify.yml` |
| GCP | `app.yaml`, `cloudbuild.yaml` |
| DigitalOcean | `do-app.yaml` |
| Vultr | Detected via CLI |
| Coolify | `coolify.yaml` |
| Dokploy | `dokploy.yaml` |
| TOSE | `tose.yaml` |

## Arguments

| Argument | Description |
|----------|-------------|
| `[platform]` | Override auto-detection (e.g., `vercel`, `fly`) |
| `--env production\|preview\|staging` | Target environment |
| `--dry-run` | Show what would be deployed without executing |

## Example Usage

```
/ck:deploy
/ck:deploy vercel --env production
/ck:deploy fly --dry-run
```

## Workflow

1. **Auto-detect platform** — scan config files in project root
2. **Validate prerequisites** — check CLI installed, auth configured
3. **Pre-deploy checks** — run build, verify env vars present
4. **Execute deployment** — run platform-specific deploy command
5. **Report result** — URL, deployment ID, and logs summary

## Cost-Optimized Recommendations

When no platform config is detected, Deploy recommends the most cost-effective option based on your stack:

- **Static sites**: Cloudflare Pages (free, fast edge network)
- **Node.js apps**: Railway or Render (generous free tiers)
- **Full-stack**: Vercel (best Next.js integration)
- **Containers**: Fly.io (per-second billing)

For Kubernetes, Terraform, or complex multi-region setups, use [DevOps](/docs/engineer/skills/devops) instead.

## Related Skills

- [DevOps](/docs/engineer/skills/devops) — advanced infrastructure, CI/CD pipelines, multi-region
- [Git](/docs/engineer/skills/git) — commit and push before deploying
- [Ship](/docs/engineer/skills/ship) — full pipeline from branch to deployed PR
