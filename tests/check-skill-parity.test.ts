/**
 * Tests for check-skill-parity.ts
 *
 * Verifies that every skill directory in agentkit/kits/ that contains a SKILL.md
 * has a corresponding documentation page in src/content/docs/, and vice versa.
 *
 * Exits nonzero on mismatch (gate 3). Initially run in warn mode so Track 1
 * content work can land first; switched to fail mode once all pages exist.
 */
import { describe, test, expect, beforeAll, afterAll } from 'bun:test';
import { mkdirSync, writeFileSync, rmSync } from 'fs';
import { join } from 'path';
import {
  collectAgentKitSkills,
  collectDocSkillPages,
  computeParityDelta,
  discoverKits,
} from '../scripts/check-skill-parity';

// ---------------------------------------------------------------------------
// Fixture helpers
// ---------------------------------------------------------------------------

const TMP = join(import.meta.dir, '__tmp_parity_test__');

beforeAll(() => {
  mkdirSync(TMP, { recursive: true });
});

afterAll(() => {
  rmSync(TMP, { recursive: true, force: true });
});

// ---------------------------------------------------------------------------
// Unit tests — collectAgentKitSkills
// ---------------------------------------------------------------------------

describe('collectAgentKitSkills', () => {
  test('collects skill names from kit directories that contain SKILL.md', () => {
    const agentKitDir = join(TMP, 'aks_test');
    mkdirSync(join(agentKitDir, 'kits', 'engineer', 'skills', 'cook'), { recursive: true });
    mkdirSync(join(agentKitDir, 'kits', 'engineer', 'skills', 'fix'), { recursive: true });
    writeFileSync(join(agentKitDir, 'kits', 'engineer', 'skills', 'cook', 'SKILL.md'), '# cook');
    writeFileSync(join(agentKitDir, 'kits', 'engineer', 'skills', 'fix', 'SKILL.md'), '# fix');

    const skills = collectAgentKitSkills(agentKitDir, 'engineer');
    expect(skills).toContain('cook');
    expect(skills).toContain('fix');
    expect(skills).toHaveLength(2);
  });

  test('skips directories that have no SKILL.md', () => {
    const agentKitDir = join(TMP, 'aks_no_skill');
    mkdirSync(join(agentKitDir, 'kits', 'engineer', 'skills', 'empty-dir'), { recursive: true });
    mkdirSync(join(agentKitDir, 'kits', 'engineer', 'skills', 'real-skill'), { recursive: true });
    writeFileSync(
      join(agentKitDir, 'kits', 'engineer', 'skills', 'real-skill', 'SKILL.md'),
      '# real'
    );

    const skills = collectAgentKitSkills(agentKitDir, 'engineer');
    expect(skills).toContain('real-skill');
    expect(skills).not.toContain('empty-dir');
  });

  test('skips _shared directory', () => {
    const agentKitDir = join(TMP, 'aks_shared');
    mkdirSync(join(agentKitDir, 'kits', 'engineer', 'skills', '_shared'), { recursive: true });
    writeFileSync(
      join(agentKitDir, 'kits', 'engineer', 'skills', '_shared', 'SKILL.md'),
      '# shared'
    );
    mkdirSync(join(agentKitDir, 'kits', 'engineer', 'skills', 'cook'), { recursive: true });
    writeFileSync(
      join(agentKitDir, 'kits', 'engineer', 'skills', 'cook', 'SKILL.md'),
      '# cook'
    );

    const skills = collectAgentKitSkills(agentKitDir, 'engineer');
    expect(skills).not.toContain('_shared');
    expect(skills).toContain('cook');
  });

  test('returns empty array when kit directory does not exist', () => {
    const agentKitDir = join(TMP, 'aks_missing');
    const skills = collectAgentKitSkills(agentKitDir, 'nonexistent-kit');
    expect(skills).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Unit tests — collectDocSkillPages
// ---------------------------------------------------------------------------

describe('collectDocSkillPages', () => {
  test('collects skill slugs from docs section skills dir', () => {
    const docsContentDir = join(TMP, 'docs_collect', 'src', 'content', 'docs');
    mkdirSync(join(docsContentDir, 'engineer', 'skills'), { recursive: true });
    writeFileSync(join(docsContentDir, 'engineer', 'skills', 'cook.md'), '---\ntitle: cook\n---');
    writeFileSync(join(docsContentDir, 'engineer', 'skills', 'fix.md'), '---\ntitle: fix\n---');
    writeFileSync(join(docsContentDir, 'engineer', 'skills', 'index.md'), '---\ntitle: idx\n---');

    const pages = collectDocSkillPages(docsContentDir, 'engineer');
    expect(pages).toContain('cook');
    expect(pages).toContain('fix');
    // index.md should NOT be counted as a skill page
    expect(pages).not.toContain('index');
  });

  test('returns empty array when section has no skills dir', () => {
    const docsContentDir = join(TMP, 'docs_no_skills');
    mkdirSync(docsContentDir, { recursive: true });
    const pages = collectDocSkillPages(docsContentDir, 'engineer');
    expect(pages).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Unit tests — discoverKits (M6)
// ---------------------------------------------------------------------------

describe('discoverKits', () => {
  test('discovers kit names from agentkit/kits/* directories', () => {
    const agentKitDir = join(TMP, 'dk_test');
    mkdirSync(join(agentKitDir, 'kits', 'engineer'), { recursive: true });
    mkdirSync(join(agentKitDir, 'kits', 'marketing'), { recursive: true });
    mkdirSync(join(agentKitDir, 'kits', 'core'), { recursive: true });

    const kits = discoverKits(agentKitDir);
    expect(kits).toContain('engineer');
    expect(kits).toContain('marketing');
    expect(kits).toContain('core');
    expect(kits).toHaveLength(3);
  });

  test('excludes underscore-prefixed directories', () => {
    const agentKitDir = join(TMP, 'dk_underscore');
    mkdirSync(join(agentKitDir, 'kits', '_shared'), { recursive: true });
    mkdirSync(join(agentKitDir, 'kits', 'engineer'), { recursive: true });

    const kits = discoverKits(agentKitDir);
    expect(kits).not.toContain('_shared');
    expect(kits).toContain('engineer');
  });

  test('falls back to FALLBACK_KITS when kits dir is missing', () => {
    const agentKitDir = join(TMP, 'dk_missing');
    // Do not create the kits dir

    const kits = discoverKits(agentKitDir);
    expect(kits).toContain('engineer');
    expect(kits).toContain('marketing');
  });

  test('returns sorted kit names', () => {
    const agentKitDir = join(TMP, 'dk_sorted');
    mkdirSync(join(agentKitDir, 'kits', 'marketing'), { recursive: true });
    mkdirSync(join(agentKitDir, 'kits', 'core'), { recursive: true });
    mkdirSync(join(agentKitDir, 'kits', 'engineer'), { recursive: true });

    const kits = discoverKits(agentKitDir);
    expect(kits).toEqual([...kits].sort());
  });
});

// ---------------------------------------------------------------------------
// Unit tests — computeParityDelta
// ---------------------------------------------------------------------------

describe('computeParityDelta', () => {
  test('empty delta when both sets match', () => {
    const skills = ['cook', 'fix', 'brainstorm'];
    const pages = ['cook', 'fix', 'brainstorm'];
    const delta = computeParityDelta(skills, pages);
    expect(delta.undocumented).toHaveLength(0);
    expect(delta.orphaned).toHaveLength(0);
  });

  test('identifies skills missing from docs (undocumented)', () => {
    const skills = ['cook', 'fix', 'brainstorm'];
    const pages = ['cook'];
    const delta = computeParityDelta(skills, pages);
    expect(delta.undocumented).toContain('fix');
    expect(delta.undocumented).toContain('brainstorm');
    expect(delta.undocumented).toHaveLength(2);
  });

  test('identifies docs pages with no matching skill (orphaned)', () => {
    const skills = ['cook'];
    const pages = ['cook', 'old-skill', 'deprecated-feature'];
    const delta = computeParityDelta(skills, pages);
    expect(delta.orphaned).toContain('old-skill');
    expect(delta.orphaned).toContain('deprecated-feature');
    expect(delta.orphaned).toHaveLength(2);
  });

  test('handles completely disjoint sets', () => {
    const delta = computeParityDelta(['a', 'b'], ['c', 'd']);
    expect(delta.undocumented).toEqual(['a', 'b']);
    expect(delta.orphaned).toEqual(['c', 'd']);
  });

  test('handles empty skills list', () => {
    const delta = computeParityDelta([], ['old-page']);
    expect(delta.undocumented).toHaveLength(0);
    expect(delta.orphaned).toContain('old-page');
  });

  test('handles empty docs list', () => {
    const delta = computeParityDelta(['new-skill'], []);
    expect(delta.undocumented).toContain('new-skill');
    expect(delta.orphaned).toHaveLength(0);
  });
});
