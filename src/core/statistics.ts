import { getTechnologies, getMetadata } from './catalog';
import { getStacks, getSimpleTechnologies } from './getByType';
import type { CatalogStatistics, TechnologyType } from '../types';

/**
 * GET CATALOG STATISTICS
 * Returns statistical information about the catalog
 */
export function getStatistics(): CatalogStatistics {
  const technologies = getTechnologies();
  const metadata = getMetadata();

  const byCategory: Record<TechnologyType, number> = {
    'Language': 0,
    'Framework': 0,
    'Library': 0,
    'Database': 0,
    'Server': 0,
    'Tool': 0,
    'Platform': 0,
    'Stack': 0,
  };

  technologies.forEach((tech) => {
    byCategory[tech.tipo]++;
  });

  return {
    total: technologies.length,
    byCategory,
    totalStacks: getStacks().length,
    totalSimpleTechnologies: getSimpleTechnologies().length,
    version: metadata.version,
  };
}

/**
 * GET COUNT BY CATEGORY
 * Returns the count of technologies for a specific category
 */
export function getCountByCategory(category: TechnologyType): number {
  const technologies = getTechnologies();
  return technologies.filter((tech) => tech.tipo === category).length;
}

/**
 * GET MOST POPULAR CATEGORY
 * Returns the category with the most technologies
 */
export function getMostPopularCategory(): {
  category: TechnologyType;
  count: number;
} {
  const stats = getStatistics();
  let maxCategory: TechnologyType = 'Framework';
  let maxCount = 0;

  (Object.entries(stats.byCategory) as [TechnologyType, number][]).forEach(
    ([category, count]) => {
      if (count > maxCount) {
        maxCount = count;
        maxCategory = category;
      }
    }
  );

  return { category: maxCategory, count: maxCount };
}
