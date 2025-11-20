import { describe, it, expect } from 'vitest';
import { searchTech, searchByName, autocomplete } from '../src/search';

describe('SEARCH FUNCTIONS', () => {
  describe('searchTech', () => {
    it('should search with fuzzy matching by default', () => {
      const results = searchTech('JavaScrpt');
      expect(Array.isArray(results)).toBe(true);
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].technology.nombre).toBe('JavaScript');
      expect(results[0].score).toBeDefined();
    });

    it('should search with exact matching when fuzzy is false', () => {
      const results = searchTech('Java', { fuzzy: false });
      expect(Array.isArray(results)).toBe(true);
      expect(
        results.every((r) => r.technology.nombre.includes('Java'))
      ).toBe(true);
    });

    it('should respect maxResults option', () => {
      const results = searchTech('a', { maxResults: 5 });
      expect(results.length).toBeLessThanOrEqual(5);
    });

    it('should filter by categories', () => {
      const results = searchTech('React', {
        categories: ['Framework', 'Library'],
      });
      expect(Array.isArray(results)).toBe(true);
      expect(
        results.every(
          (r) =>
            r.technology.tipo === 'Framework' ||
            r.technology.tipo === 'Library'
        )
      ).toBe(true);
    });

    it('should handle case-sensitive search', () => {
      const results = searchTech('javascript', {
        fuzzy: false,
        caseSensitive: true,
      });
      expect(results.length).toBe(0);
    });

    it('should return empty array for no matches', () => {
      const results = searchTech('xyz123nonexistent456', { fuzzy: false });
      expect(results).toEqual([]);
    });
  });

  describe('searchByName', () => {
    it('should search by name with scoring', () => {
      const results = searchByName('JavaScript');
      expect(Array.isArray(results)).toBe(true);
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].score).toBeDefined();
      expect(results[0].technology).toBeDefined();
    });

    it('should respect maxResults parameter', () => {
      const results = searchByName('a', 3);
      expect(results.length).toBeLessThanOrEqual(3);
    });

    it('should return results sorted by score', () => {
      const results = searchByName('React');
      for (let i = 1; i < results.length; i++) {
        expect(results[i - 1].score).toBeGreaterThanOrEqual(results[i].score);
      }
    });
  });

  describe('autocomplete', () => {
    it('should return technology suggestions', () => {
      const suggestions = autocomplete('Reac');
      expect(Array.isArray(suggestions)).toBe(true);
      expect(suggestions.length).toBeGreaterThan(0);
      expect(suggestions[0].nombre).toBeDefined();
    });

    it('should respect maxSuggestions parameter', () => {
      const suggestions = autocomplete('a', 5);
      expect(suggestions.length).toBeLessThanOrEqual(5);
    });

    it('should filter by type', () => {
      const suggestions = autocomplete('React', 10, ['Framework']);
      expect(suggestions.every((tech) => tech.tipo === 'Framework')).toBe(true);
    });

    it('should return empty array for no matches', () => {
      const suggestions = autocomplete('xyz123nonexistent456qwertyabcdef');
      expect(suggestions.length).toBe(0);
    });
  });
});
