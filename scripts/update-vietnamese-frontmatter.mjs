import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

const files = await glob('src/content/docs-vi/engineer/**/*.md');

console.log(`Processing ${files.length} Vietnamese files...`);

let updated = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf-8');
  let modified = false;

  // Replace section: docs with section: engineer
  if (content.includes('section: docs')) {
    content = content.replace(/^section: docs$/gm, 'section: engineer');
    modified = true;
  }

  // Add kit: engineer if not present and section: engineer exists
  if (content.includes('section: engineer') && !content.includes('kit: engineer')) {
    content = content.replace(
      /^(section: engineer)$/gm,
      '$1\nkit: engineer'
    );
    modified = true;
  }

  if (modified) {
    writeFileSync(file, content, 'utf-8');
    updated++;
  }
}

console.log(`✓ Updated ${updated} Vietnamese files`);
