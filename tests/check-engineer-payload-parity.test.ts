import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { mkdirSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import {
  collectDocsCatalog,
  collectEngineerPayload,
  collectPayloadAgents,
  collectPayloadSkills,
  computeParityDelta,
  resolveDefaultPayloadDir,
} from '../scripts/check-engineer-payload-parity';

const TMP = join(import.meta.dir, '__tmp_engineer_payload_parity_test__');

beforeAll(() => mkdirSync(TMP, { recursive: true }));
afterAll(() => rmSync(TMP, { recursive: true, force: true }));

function write(path: string, content = '# fixture') {
  mkdirSync(path.substring(0, path.lastIndexOf('/')), { recursive: true });
  writeFileSync(path, content);
}

describe('Engineer payload collection', () => {
  test('resolves payloads beside normal checkouts and their worktree parent', () => {
    const normalRoot = join(TMP, 'normal-root');
    const normalDocs = join(normalRoot, 'claudekit-docs');
    write(join(normalRoot, 'claudekit-engineer', 'claude', 'agents', 'planner.md'));
    write(join(normalRoot, 'claudekit-engineer', 'claude', 'skills', 'cook', 'SKILL.md'));

    expect(resolveDefaultPayloadDir(normalDocs)).toBe(
      join(normalRoot, 'claudekit-engineer', 'claude'),
    );

    const worktree = join(normalRoot, 'worktrees', 'docs-feature');
    expect(resolveDefaultPayloadDir(worktree)).toBe(
      join(normalRoot, 'claudekit-engineer', 'claude'),
    );
  });

  test('collects top-level agents and ignores non-markdown files', () => {
    const payload = join(TMP, 'agents-payload');
    write(join(payload, 'agents', 'planner.md'));
    write(join(payload, 'agents', 'tester.md'));
    write(join(payload, 'agents', 'README.txt'));

    expect(collectPayloadAgents(payload)).toEqual(['planner', 'tester']);
  });

  test('collects top-level and supported nested document skills', () => {
    const payload = join(TMP, 'skills-payload');
    write(join(payload, 'skills', 'cook', 'SKILL.md'));
    write(join(payload, 'skills', 'empty', 'README.md'));
    write(join(payload, 'skills', '_shared', 'SKILL.md'));
    write(join(payload, 'skills', 'document-skills', 'pdf', 'SKILL.md'));
    write(join(payload, 'skills', 'document-skills', 'docx', 'SKILL.md'));

    expect(collectPayloadSkills(payload)).toEqual(['cook', 'docx', 'pdf']);
  });

  test('returns a complete payload catalog', () => {
    const payload = join(TMP, 'complete-payload');
    write(join(payload, 'agents', 'planner.md'));
    write(join(payload, 'skills', 'cook', 'SKILL.md'));

    expect(collectEngineerPayload(payload)).toEqual({
      agents: ['planner'],
      skills: ['cook'],
    });
  });
});

describe('Docs catalog collection', () => {
  test('collects English and Vietnamese pages while excluding indexes', () => {
    const repo = join(TMP, 'docs-repo');
    write(join(repo, 'src', 'content', 'docs', 'engineer', 'agents', 'planner.md'));
    write(join(repo, 'src', 'content', 'docs', 'engineer', 'agents', 'index.md'));
    write(join(repo, 'src', 'content', 'docs', 'engineer', 'skills', 'cook.md'));
    write(join(repo, 'src', 'content', 'docs-vi', 'engineer', 'agents', 'planner.md'));
    write(join(repo, 'src', 'content', 'docs-vi', 'engineer', 'skills', 'cook.md'));

    expect(collectDocsCatalog(repo, 'en')).toEqual({ agents: ['planner'], skills: ['cook'] });
    expect(collectDocsCatalog(repo, 'vi')).toEqual({ agents: ['planner'], skills: ['cook'] });
  });
});

describe('Parity delta', () => {
  test('reports missing and orphaned pages', () => {
    expect(computeParityDelta(['cook', 'fix'], ['cook', 'legacy'])).toEqual({
      undocumented: ['fix'],
      orphaned: ['legacy'],
    });
  });

  test('returns an empty delta for matching catalogs', () => {
    expect(computeParityDelta(['cook'], ['cook'])).toEqual({ undocumented: [], orphaned: [] });
  });
});
