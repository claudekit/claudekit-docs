import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { mkdirSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import {
  DEFAULT_FORBIDDEN_SIGNATURES,
  findPublicBoundaryViolations,
  scanPublicContent,
} from '../scripts/check-public-content-boundary';

const TMP = join(import.meta.dir, '__tmp_public_boundary_test__');
const FIXTURE_SIGNATURES = ['private-framework', 'private-repository'];

beforeAll(() => {
  mkdirSync(TMP, { recursive: true });
});

afterAll(() => {
  rmSync(TMP, { recursive: true, force: true });
});

describe('findPublicBoundaryViolations', () => {
  test('reports forbidden content without exposing the matched value', () => {
    const violations = findPublicBoundaryViolations(
      'src/content/docs/guide.md',
      'This page names a Private-Framework dependency.',
      FIXTURE_SIGNATURES
    );

    expect(violations).toEqual([
      {
        file: 'src/content/docs/guide.md',
        line: 1,
        signature: 0,
      },
    ]);
  });

  test('checks public page paths as well as page content', () => {
    const violations = findPublicBoundaryViolations(
      'src/content/docs/private-repository/overview.md',
      'Public wording only.',
      FIXTURE_SIGNATURES
    );

    expect(violations).toEqual([
      {
        file: 'src/content/docs/private-repository/overview.md',
        line: null,
        signature: 1,
      },
    ]);
  });

  test('matches identifiers case-insensitively', () => {
    const violations = findPublicBoundaryViolations(
      'guide.md',
      'PRIVATE-REPOSITORY',
      FIXTURE_SIGNATURES
    );

    expect(violations).toHaveLength(1);
    expect(violations[0].signature).toBe(1);
  });

  test('ships non-empty default boundary signatures', () => {
    expect(DEFAULT_FORBIDDEN_SIGNATURES.length).toBeGreaterThan(0);
    expect(DEFAULT_FORBIDDEN_SIGNATURES.every(value => value.length > 0)).toBe(true);
  });

  test('enforces the default signatures without printing their values', () => {
    const violations = findPublicBoundaryViolations(
      'src/content/docs/guide.md',
      `References ${DEFAULT_FORBIDDEN_SIGNATURES[0]}.`
    );

    expect(violations).toEqual([
      {
        file: 'src/content/docs/guide.md',
        line: 1,
        signature: 0,
      },
    ]);
  });
});

describe('scanPublicContent', () => {
  test('scans nested public text files and ignores binary assets', () => {
    const root = join(TMP, 'nested-scan');
    const docs = join(root, 'src', 'content', 'docs');
    mkdirSync(join(docs, 'getting-started'), { recursive: true });
    writeFileSync(join(docs, 'getting-started', 'guide.md'), 'Uses private-framework.');
    writeFileSync(join(docs, 'getting-started', 'safe.md'), 'Public guidance only.');
    writeFileSync(join(docs, 'getting-started', 'ignored.png'), 'private-repository');

    const violations = scanPublicContent([docs], root, FIXTURE_SIGNATURES);

    expect(violations).toEqual([
      {
        file: 'src/content/docs/getting-started/guide.md',
        line: 1,
        signature: 0,
      },
    ]);
  });
});
