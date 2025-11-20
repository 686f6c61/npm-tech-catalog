import { describe, it, expect } from 'vitest';
import {
  levenshteinDistance,
  calculateSimilarity,
  fuzzyMatch,
  getBestMatches,
} from '../src/utils/fuzzyMatch';

describe('FUZZY MATCH UTILITIES', () => {
  describe('levenshteinDistance', () => {
    it('should calculate distance for identical strings', () => {
      expect(levenshteinDistance('hello', 'hello')).toBe(0);
    });

    it('should calculate distance for completely different strings', () => {
      const distance = levenshteinDistance('abc', 'xyz');
      expect(distance).toBe(3);
    });

    it('should calculate distance for one character difference', () => {
      expect(levenshteinDistance('hello', 'hallo')).toBe(1);
    });

    it('should handle empty strings', () => {
      expect(levenshteinDistance('', 'hello')).toBe(5);
      expect(levenshteinDistance('hello', '')).toBe(5);
      expect(levenshteinDistance('', '')).toBe(0);
    });

    it('should calculate distance for insertion', () => {
      expect(levenshteinDistance('cat', 'cats')).toBe(1);
    });

    it('should calculate distance for deletion', () => {
      expect(levenshteinDistance('cats', 'cat')).toBe(1);
    });

    it('should calculate distance for substitution', () => {
      expect(levenshteinDistance('cat', 'bat')).toBe(1);
    });
  });

  describe('calculateSimilarity', () => {
    it('should return 1 for identical strings', () => {
      expect(calculateSimilarity('hello', 'hello')).toBe(1);
    });

    it('should return value between 0 and 1', () => {
      const similarity = calculateSimilarity('hello', 'hallo');
      expect(similarity).toBeGreaterThan(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });

    it('should be case-insensitive', () => {
      const sim1 = calculateSimilarity('Hello', 'hello');
      expect(sim1).toBe(1);
    });

    it('should handle empty strings', () => {
      expect(calculateSimilarity('', '')).toBe(1);
      const similarity = calculateSimilarity('hello', '');
      expect(similarity).toBeLessThan(1);
    });

    it('should return higher similarity for more similar strings', () => {
      const sim1 = calculateSimilarity('JavaScript', 'JavaScrpt');
      const sim2 = calculateSimilarity('JavaScript', 'Python');
      expect(sim1).toBeGreaterThan(sim2);
    });
  });

  describe('fuzzyMatch', () => {
    it('should match with default threshold', () => {
      expect(fuzzyMatch('JavaScript', 'JavaScrpt')).toBe(true);
    });

    it('should not match very different strings', () => {
      expect(fuzzyMatch('JavaScript', 'Python')).toBe(false);
    });

    it('should respect custom threshold', () => {
      expect(fuzzyMatch('JavaScript', 'Java', 0.9)).toBe(false);
      expect(fuzzyMatch('JavaScript', 'Java', 0.3)).toBe(true);
    });

    it('should match exact strings', () => {
      expect(fuzzyMatch('React', 'React')).toBe(true);
    });
  });

  describe('getBestMatches', () => {
    const items = [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'Python' },
      { name: 'Ruby' },
    ];

    it('should return best matches sorted by score', () => {
      const matches = getBestMatches(
        'javascript',
        items,
        (item) => item.name,
        3
      );
      expect(matches.length).toBeLessThanOrEqual(3);
      expect(matches[0].item.name).toBe('JavaScript');
      for (let i = 1; i < matches.length; i++) {
        expect(matches[i - 1].score).toBeGreaterThanOrEqual(matches[i].score);
      }
    });

    it('should respect maxResults parameter', () => {
      const matches = getBestMatches('script', items, (item) => item.name, 2);
      expect(matches.length).toBeLessThanOrEqual(2);
    });

    it('should filter by threshold', () => {
      const matches = getBestMatches(
        'javascript',
        items,
        (item) => item.name,
        10,
        0.9
      );
      expect(matches.every((m) => m.score >= 0.9)).toBe(true);
    });

    it('should return empty array when no matches exceed threshold', () => {
      const matches = getBestMatches(
        'xyz',
        items,
        (item) => item.name,
        10,
        0.9
      );
      expect(matches).toHaveLength(0);
    });

    it('should include score in results', () => {
      const matches = getBestMatches(
        'javascript',
        items,
        (item) => item.name,
        3
      );
      matches.forEach((match) => {
        expect(match.score).toBeDefined();
        expect(match.item).toBeDefined();
        expect(typeof match.score).toBe('number');
      });
    });
  });
});
