/**
 * check-skill-parity.ts
 *
 * Gate 3: skill page count in src/content/ must match SKILL.md count in agentkit/kits/.
 *
 * Walks agentkit/kits/<kit>/skills/<name>/SKILL.md (source of truth) and compares
 * against src/content/docs/<kit>/skills/<name>.md (documentation).
 *
 * Exits nonzero on mismatch when --mode fail. Defaults to warn mode so Track 1
 * content work can land without blocking CI.
 *
 * Usage:
 *   bun run scripts/check-skill-parity.ts \
 *     [--agentkit <path>] \
 *     [--docs <path>] \
 *     [--kit engineer|marketing|all] \
 *     [--mode warn|fail]
 *
 * Defaults:
 *   --agentkit  ../agentkit          (relative to docs repo root)
 *   --docs      src/content/docs     (relative to docs repo root)
 *   --kit       all
 *   --mode      warn
 *
 * Exit codes:
 *   0 — sets match (or mode=warn regardless)
 *   1 — mismatch detected and mode=fail
 */

import { readdirSync, existsSync, statSync } from 'fs';
import { join, resolve } from 'path';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ParityDelta {
  /** Skills in agentkit with no matching docs page */
  undocumented: string[];
  /** Docs pages with no matching agentkit skill */
  orphaned: string[];
}

// ---------------------------------------------------------------------------
// Core logic (exported for tests)
// ---------------------------------------------------------------------------

/**
 * Collect skill names from agentkit/kits/<kit>/skills/ that contain a SKILL.md.
 * Skips _shared and any directory without SKILL.md.
 */
export function collectAgentKitSkills(agentKitDir: string, kit: string): string[] {
  const skillsDir = join(agentKitDir, 'kits', kit, 'skills');

  if (!existsSync(skillsDir)) {
    return [];
  }

  const skills: string[] = [];

  try {
    const entries = readdirSync(skillsDir);
    for (const entry of entries) {
      if (entry.startsWith('_')) continue; // skip _shared and similar

      const entryPath = join(skillsDir, entry);
      const stat = statSync(entryPath);
      if (!stat.isDirectory()) continue;

      const skillMdPath = join(entryPath, 'SKILL.md');
      if (existsSync(skillMdPath)) {
        skills.push(entry);
      }
    }
  } catch {
    // Unreadable directory — return empty
  }

  return skills.sort();
}

/**
 * Collect skill page slugs from src/content/docs/<section>/skills/.
 * Excludes index.md (it's a section overview, not a skill page).
 */
export function collectDocSkillPages(docsContentDir: string, section: string): string[] {
  const skillsDir = join(docsContentDir, section, 'skills');

  if (!existsSync(skillsDir)) {
    return [];
  }

  const pages: string[] = [];

  try {
    const entries = readdirSync(skillsDir);
    for (const entry of entries) {
      if (!entry.endsWith('.md') && !entry.endsWith('.mdx')) continue;

      const slug = entry.replace(/\.mdx?$/, '');
      if (slug === 'index') continue; // section overview, not a skill page

      pages.push(slug);
    }
  } catch {
    // Unreadable directory — return empty
  }

  return pages.sort();
}

/**
 * Compute the symmetric diff between agentkit skills and docs pages.
 */
export function computeParityDelta(
  agentKitSkills: string[],
  docPages: string[]
): ParityDelta {
  const skillSet = new Set(agentKitSkills);
  const pageSet = new Set(docPages);

  const undocumented = agentKitSkills.filter(s => !pageSet.has(s));
  const orphaned = docPages.filter(p => !skillSet.has(p));

  return { undocumented, orphaned };
}

// ---------------------------------------------------------------------------
// Multi-kit runner
// ---------------------------------------------------------------------------

const SUPPORTED_KITS = ['engineer', 'marketing'] as const;
type Kit = (typeof SUPPORTED_KITS)[number];

interface KitResult {
  kit: Kit;
  agentKitCount: number;
  docsCount: number;
  delta: ParityDelta;
}

function checkKit(kit: Kit, agentKitDir: string, docsContentDir: string): KitResult {
  const agentKitSkills = collectAgentKitSkills(agentKitDir, kit);
  const docPages = collectDocSkillPages(docsContentDir, kit);
  const delta = computeParityDelta(agentKitSkills, docPages);

  return {
    kit,
    agentKitCount: agentKitSkills.length,
    docsCount: docPages.length,
    delta,
  };
}

// ---------------------------------------------------------------------------
// CLI entrypoint
// ---------------------------------------------------------------------------

function parseArgs(args: string[]): {
  agentKitDir: string;
  docsContentDir: string;
  kits: Kit[];
  mode: 'warn' | 'fail';
} {
  const cwd = process.cwd();
  let agentKitDir = resolve(cwd, '../agentkit');
  let docsContentDir = join(cwd, 'src', 'content', 'docs');
  let kits: Kit[] = [...SUPPORTED_KITS];
  let mode: 'warn' | 'fail' = 'warn';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--agentkit' && args[i + 1]) {
      const val = args[i + 1];
      agentKitDir = val.startsWith('/') ? val : resolve(cwd, val);
      i++;
    } else if (args[i] === '--docs' && args[i + 1]) {
      const val = args[i + 1];
      docsContentDir = val.startsWith('/') ? val : join(cwd, val);
      i++;
    } else if (args[i] === '--kit' && args[i + 1]) {
      const val = args[i + 1] as Kit | 'all';
      kits = val === 'all' ? [...SUPPORTED_KITS] : [val as Kit];
      i++;
    } else if (args[i] === '--mode' && args[i + 1]) {
      const val = args[i + 1];
      if (val === 'warn' || val === 'fail') mode = val;
      i++;
    }
  }

  return { agentKitDir, docsContentDir, kits, mode };
}

if (import.meta.main) {
  const { agentKitDir, docsContentDir, kits, mode } = parseArgs(process.argv.slice(2));

  if (!existsSync(agentKitDir)) {
    console.error(`[X] agentkit directory not found: ${agentKitDir}`);
    console.error('    Pass --agentkit <path> or clone agentkit as a sibling directory.');
    process.exit(mode === 'fail' ? 1 : 0);
  }

  const results: KitResult[] = kits.map(kit =>
    checkKit(kit, agentKitDir, docsContentDir)
  );

  let hasProblems = false;

  for (const result of results) {
    const { kit, agentKitCount, docsCount, delta } = result;
    const hasDelta = delta.undocumented.length > 0 || delta.orphaned.length > 0;

    if (!hasDelta) {
      console.log(`[OK] ${kit}: ${agentKitCount} skills, ${docsCount} pages — in sync`);
      continue;
    }

    hasProblems = true;
    const label = mode === 'fail' ? '[X]' : '[!]';
    console.log(`${label} ${kit}: agentkit=${agentKitCount} skills, docs=${docsCount} pages — MISMATCH`);

    if (delta.undocumented.length > 0) {
      console.log(`\n  Skills in agentkit with no docs page (${delta.undocumented.length}):`);
      for (const s of delta.undocumented) {
        console.log(`    - ${s}  →  src/content/docs/${kit}/skills/${s}.md  (missing)`);
      }
    }

    if (delta.orphaned.length > 0) {
      console.log(`\n  Docs pages with no matching agentkit skill (${delta.orphaned.length}):`);
      for (const p of delta.orphaned) {
        console.log(`    - ${p}  →  agentkit/kits/${kit}/skills/${p}/SKILL.md  (not found)`);
      }
    }

    console.log('');
  }

  if (!hasProblems) {
    process.exit(0);
  }

  if (mode === 'warn') {
    console.log('[!] Parity check running in warn mode — not failing build.');
    console.log('    Switch to --mode fail after Track 1 content fixes are merged.');
    process.exit(0);
  } else {
    console.log('[X] Parity check failed.');
    process.exit(1);
  }
}
