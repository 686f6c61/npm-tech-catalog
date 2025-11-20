/**
 * FUZZY MATCHING UTILITIES
 * Implements fuzzy string matching for search functionality
 */

/**
 * LEVENSHTEIN DISTANCE
 * Calculates the edit distance between two strings
 */
export function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix: number[][] = [];

  if (len1 === 0) return len2;
  if (len2 === 0) return len1;

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[len1][len2];
}

/**
 * CALCULATE SIMILARITY SCORE
 * Returns a similarity score between 0 and 1 (1 being identical)
 */
export function calculateSimilarity(str1: string, str2: string): number {
  const maxLength = Math.max(str1.length, str2.length);
  if (maxLength === 0) return 1;

  const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase());
  return 1 - distance / maxLength;
}

/**
 * FUZZY MATCH
 * Checks if a search term fuzzy matches a target string
 */
export function fuzzyMatch(
  searchTerm: string,
  target: string,
  threshold: number = 0.6
): boolean {
  const similarity = calculateSimilarity(searchTerm, target);
  return similarity >= threshold;
}

/**
 * GET BEST MATCHES
 * Returns items sorted by similarity score
 */
export function getBestMatches<T>(
  searchTerm: string,
  items: T[],
  getItemString: (item: T) => string,
  maxResults: number = 10,
  threshold: number = 0.3
): Array<{ item: T; score: number }> {
  const matches = items
    .map((item) => ({
      item,
      score: calculateSimilarity(searchTerm, getItemString(item)),
    }))
    .filter((match) => match.score >= threshold)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);

  return matches;
}
