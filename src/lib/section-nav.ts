import type { NavCategoryMeta, NavSectionConfig } from './sidebar-nav-section-config';

export interface SectionNavDoc {
  slug: string;
  data: {
    title?: string;
    order?: number;
    category?: string;
  };
}

export interface AlphaGroup {
  key: string;
  items: SectionNavDoc[];
}

const collator = new Intl.Collator(['vi', 'en'], {
  numeric: true,
  sensitivity: 'base',
});

export function capitalizeCategoryLabel(label: string) {
  return label
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function groupDocsByCategory(
  docs: SectionNavDoc[],
  layout: NavSectionConfig['layout']
) {
  const groups: Record<string, SectionNavDoc[]> = {};

  docs.forEach((doc) => {
    const fullCategory = doc.data.category || 'overview';
    const category = layout === 'categorized' ? fullCategory.split('/')[0] : fullCategory;

    groups[category] ??= [];
    groups[category].push(doc);
  });

  return groups;
}

export function sortDocs(docs: SectionNavDoc[], meta?: NavCategoryMeta) {
  const sortMode = meta?.sortMode ?? 'order';
  const sortedDocs = [...docs];

  if (sortMode === 'alpha') {
    return sortedDocs.sort((left, right) => {
      const labelCompare = collator.compare(
        getDocSortLabel(left, meta),
        getDocSortLabel(right, meta)
      );

      if (labelCompare !== 0) return labelCompare;
      return (left.data.order ?? 999) - (right.data.order ?? 999);
    });
  }

  return sortedDocs.sort((left, right) => {
    const orderCompare = (left.data.order ?? 999) - (right.data.order ?? 999);

    if (orderCompare !== 0) return orderCompare;
    return collator.compare(getDocSortLabel(left, meta), getDocSortLabel(right, meta));
  });
}

export function splitPinnedDocs(docs: SectionNavDoc[], meta?: NavCategoryMeta) {
  const pinnedSlugSegments = new Set(meta?.pinnedSlugSegments ?? []);
  const pinnedDocs: SectionNavDoc[] = [];
  const remainingDocs: SectionNavDoc[] = [];

  docs.forEach((doc) => {
    if (pinnedSlugSegments.has(getDocLeafSlug(doc))) {
      pinnedDocs.push(doc);
      return;
    }

    remainingDocs.push(doc);
  });

  return {
    pinnedDocs: sortDocs(pinnedDocs, { ...meta, sortMode: 'order' }),
    remainingDocs: sortDocs(remainingDocs, meta),
  };
}

export function buildAlphaGroups(docs: SectionNavDoc[], meta?: NavCategoryMeta): AlphaGroup[] {
  const groupedDocs = new Map<string, SectionNavDoc[]>();

  sortDocs(docs, meta).forEach((doc) => {
    const groupKey = getAlphaGroupKey(doc, meta);
    const existingGroup = groupedDocs.get(groupKey);

    if (existingGroup) {
      existingGroup.push(doc);
      return;
    }

    groupedDocs.set(groupKey, [doc]);
  });

  return Array.from(groupedDocs.entries()).map(([key, items]) => ({ key, items }));
}

export function getDocDisplayLabel(doc: SectionNavDoc, meta?: NavCategoryMeta) {
  const label = doc.data.title || getDocLeafSlug(doc);

  if (meta?.displayLabelMode === 'trim-skill-prefix') {
    return trimSkillPrefix(label) || label;
  }

  return label;
}

function getDocLeafSlug(doc: SectionNavDoc) {
  return doc.slug.split('/').at(-1) ?? doc.slug;
}

function getDocSortLabel(doc: SectionNavDoc, meta?: NavCategoryMeta) {
  if (meta?.sortKey === 'slug') {
    return normalizeSortLabel(getDocLeafSlug(doc));
  }

  return normalizeSortLabel(getDocDisplayLabel(doc, meta));
}

function getAlphaGroupKey(doc: SectionNavDoc, meta?: NavCategoryMeta) {
  const [firstCharacter = '#'] = getDocSortLabel(doc, meta);
  return /^[a-z]/i.test(firstCharacter) ? firstCharacter.toUpperCase() : '#';
}

function normalizeSortLabel(value: string) {
  return trimSkillPrefix(value)
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function trimSkillPrefix(value: string) {
  return value.replace(/^ckm?:/i, '').trim();
}
