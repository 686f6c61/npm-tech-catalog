import { getTechnologies } from '../core/catalog';
import { getBestMatches, calculateSimilarity } from '../utils/fuzzyMatch';
import type { Technology, SearchOptions, SearchResult, TechnologyType } from '../types';

/**
 * SEARCH TECHNOLOGIES
 * Searches for technologies with optional fuzzy matching
 */
export function searchTech(
  query: string,
  options: SearchOptions = {}
): SearchResult[] {
  const {
    fuzzy = true,
    caseSensitive = false,
    maxResults = 20,
    categories,
  } = options;

  let technologies = getTechnologies();

  if (categories && categories.length > 0) {
    technologies = technologies.filter((tech) =>
      categories.includes(tech.tipo)
    );
  }

  const normalizedQuery = caseSensitive ? query : query.toLowerCase();

  if (fuzzy) {
    const matches = getBestMatches(
      normalizedQuery,
      technologies,
      (tech) => (caseSensitive ? tech.nombre : tech.nombre.toLowerCase()),
      maxResults,
      0.3
    );

    return matches.map(({ item, score }) => ({
      technology: item,
      score,
      matches: [
        {
          field: 'nombre' as const,
          value: item.nombre,
        },
      ],
    }));
  }

  const exactMatches = technologies
    .filter((tech) => {
      const techName = caseSensitive ? tech.nombre : tech.nombre.toLowerCase();
      return techName.includes(normalizedQuery);
    })
    .slice(0, maxResults);

  return exactMatches.map((tech) => ({
    technology: tech,
    score: 1.0,
    matches: [
      {
        field: 'nombre' as const,
        value: tech.nombre,
      },
    ],
  }));
}

/**
 * SEARCH BY NAME ONLY
 * Simple name-based search with scoring
 */
export function searchByName(
  name: string,
  maxResults: number = 10
): SearchResult[] {
  const technologies = getTechnologies();
  const matches = getBestMatches(
    name.toLowerCase(),
    technologies,
    (tech) => tech.nombre.toLowerCase(),
    maxResults
  );

  return matches.map(({ item, score }) => ({
    technology: item,
    score,
  }));
}

/**
 * AUTOCOMPLETE
 * Returns suggestions for autocomplete functionality
 */
export function autocomplete(
  input: string,
  maxSuggestions: number = 10,
  filterByType?: TechnologyType[]
): Technology[] {
  const results = searchTech(input, {
    fuzzy: true,
    maxResults: maxSuggestions,
    categories: filterByType,
  });

  return results.map((result) => result.technology);
}
