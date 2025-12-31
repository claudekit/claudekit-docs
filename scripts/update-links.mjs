import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

console.log('=== Internal Link Update Script ===\n');

// Define all link replacements
const replacements = [
  // English links
  { old: /\/docs\/agents\//g, new: '/docs/engineer/agents/' },
  { old: /\/docs\/commands\//g, new: '/docs/engineer/commands/' },
  { old: /\/docs\/skills\//g, new: '/docs/engineer/skills/' },
  { old: /\/docs\/configuration\//g, new: '/docs/engineer/configuration/' },

  // Vietnamese links
  { old: /\/vi\/docs\/agents\//g, new: '/vi/docs/engineer/agents/' },
  { old: /\/vi\/docs\/commands\//g, new: '/vi/docs/engineer/commands/' },
  { old: /\/vi\/docs\/skills\//g, new: '/vi/docs/engineer/skills/' },
  { old: /\/vi\/docs\/configuration\//g, new: '/vi/docs/engineer/configuration/' },
];

// Process all markdown files
const patterns = [
  'src/content/docs/**/*.md',
  'src/content/docs-vi/**/*.md',
  'README.md',
  'CLAUDE.md',
  'docs/**/*.md',
];

let totalFiles = 0;
let totalUpdates = 0;
let fileDetails = [];

for (const pattern of patterns) {
  const files = await glob(pattern);

  for (const file of files) {
    let content = readFileSync(file, 'utf-8');
    let modified = false;
    let matchCount = 0;

    for (const { old, new: newPath } of replacements) {
      const matches = content.match(old);
      if (matches) {
        content = content.replace(old, newPath);
        modified = true;
        matchCount += matches.length;
      }
    }

    if (modified) {
      writeFileSync(file, content, 'utf-8');
      totalFiles++;
      totalUpdates += matchCount;
      fileDetails.push({ file, count: matchCount });
    }
  }
}

console.log(`✓ Updated ${totalUpdates} links in ${totalFiles} files\n`);

// Show detailed breakdown
if (fileDetails.length > 0) {
  console.log('Files modified:');
  fileDetails
    .sort((a, b) => b.count - a.count)
    .slice(0, 20)
    .forEach(({ file, count }) => {
      console.log(`  ${count.toString().padStart(3)} links | ${file}`);
    });

  if (fileDetails.length > 20) {
    console.log(`  ... and ${fileDetails.length - 20} more files`);
  }
}

console.log('\n✓ Link update complete');
