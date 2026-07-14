import { existsSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';

export interface ParityDelta {
  undocumented: string[];
  orphaned: string[];
}

export interface EngineerPayloadCatalog {
  agents: string[];
  skills: string[];
}

export interface DocsCatalog {
  agents: string[];
  skills: string[];
}

const SUPPORTED_NESTED_SKILL_GROUPS = ['document-skills'] as const;

function isEngineerPayloadDir(dir: string): boolean {
  return existsSync(join(dir, 'agents')) && existsSync(join(dir, 'skills'));
}

export function resolveDefaultPayloadDir(cwd: string): string {
  const candidates = [
    resolve(cwd, '../claudekit-engineer/claude'),
    resolve(cwd, '../../claudekit-engineer/claude'),
  ];

  return candidates.find(isEngineerPayloadDir) ?? candidates[0];
}

function collectMarkdownBasenames(dir: string, excluded: ReadonlySet<string> = new Set()): string[] {
  if (!existsSync(dir)) return [];

  return readdirSync(dir)
    .filter(entry => entry.endsWith('.md') && !excluded.has(entry))
    .map(entry => entry.replace(/\.md$/, ''))
    .sort();
}

export function collectPayloadAgents(payloadDir: string): string[] {
  return collectMarkdownBasenames(join(payloadDir, 'agents'));
}

export function collectPayloadSkills(payloadDir: string): string[] {
  const skillsDir = join(payloadDir, 'skills');
  if (!existsSync(skillsDir)) return [];

  const skills = new Set<string>();

  for (const entry of readdirSync(skillsDir)) {
    if (entry.startsWith('_')) continue;
    const entryPath = join(skillsDir, entry);
    if (!statSync(entryPath).isDirectory()) continue;
    if (existsSync(join(entryPath, 'SKILL.md'))) skills.add(entry);
  }

  for (const group of SUPPORTED_NESTED_SKILL_GROUPS) {
    const groupDir = join(skillsDir, group);
    if (!existsSync(groupDir)) continue;

    for (const entry of readdirSync(groupDir)) {
      const entryPath = join(groupDir, entry);
      if (statSync(entryPath).isDirectory() && existsSync(join(entryPath, 'SKILL.md'))) {
        skills.add(entry);
      }
    }
  }

  return [...skills].sort();
}

export function collectEngineerPayload(payloadDir: string): EngineerPayloadCatalog {
  return {
    agents: collectPayloadAgents(payloadDir),
    skills: collectPayloadSkills(payloadDir),
  };
}

export function collectDocsCatalog(repoDir: string, locale: 'en' | 'vi'): DocsCatalog {
  const collection = locale === 'vi' ? 'docs-vi' : 'docs';
  const engineerDir = join(repoDir, 'src', 'content', collection, 'engineer');
  const excluded = new Set(['index.md']);

  return {
    agents: collectMarkdownBasenames(join(engineerDir, 'agents'), excluded),
    skills: collectMarkdownBasenames(join(engineerDir, 'skills'), excluded),
  };
}

export function computeParityDelta(source: string[], docs: string[]): ParityDelta {
  const sourceSet = new Set(source);
  const docsSet = new Set(docs);

  return {
    undocumented: source.filter(entry => !docsSet.has(entry)),
    orphaned: docs.filter(entry => !sourceSet.has(entry)),
  };
}

interface Args {
  payloadDir: string;
  repoDir: string;
  mode: 'warn' | 'fail';
}

function parseArgs(args: string[]): Args {
  const cwd = process.cwd();
  let payloadDir = resolveDefaultPayloadDir(cwd);
  let repoDir = cwd;
  let mode: 'warn' | 'fail' = 'fail';

  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    const value = args[index + 1];

    if (arg === '--payload' && value) {
      payloadDir = resolve(cwd, value);
      index++;
    } else if (arg === '--docs' && value) {
      repoDir = resolve(cwd, value);
      index++;
    } else if (arg === '--mode' && (value === 'warn' || value === 'fail')) {
      mode = value;
      index++;
    }
  }

  return { payloadDir, repoDir, mode };
}

if (import.meta.main) {
  const { payloadDir, repoDir, mode } = parseArgs(process.argv.slice(2));

  if (!existsSync(join(payloadDir, 'skills')) || !existsSync(join(payloadDir, 'agents'))) {
    console.error(`[X] Engineer payload not found at ${payloadDir}`);
    process.exit(mode === 'fail' ? 1 : 0);
  }

  const source = collectEngineerPayload(payloadDir);
  let hasProblems = false;

  for (const locale of ['en', 'vi'] as const) {
    const docs = collectDocsCatalog(repoDir, locale);

    for (const kind of ['agents', 'skills'] as const) {
      const delta = computeParityDelta(source[kind], docs[kind]);
      const hasDelta = delta.undocumented.length > 0 || delta.orphaned.length > 0;
      const label = hasDelta ? '[X]' : '[OK]';
      console.log(`${label} ${locale.toUpperCase()} ${kind}: payload=${source[kind].length}, docs=${docs[kind].length}`);

      if (!hasDelta) continue;
      hasProblems = true;
      if (delta.undocumented.length > 0) {
        console.log(`  Missing docs: ${delta.undocumented.join(', ')}`);
      }
      if (delta.orphaned.length > 0) {
        console.log(`  Orphaned docs: ${delta.orphaned.join(', ')}`);
      }
    }
  }

  if (hasProblems && mode === 'fail') process.exit(1);
}
