import { describe, it, expect } from 'vitest';
import {
  validateTechnology,
  isValidTechnologyType,
  validateStack,
  validateCatalog,
  sanitizeName,
  validateSearchOptions,
} from '../src/validators';
import { getTechnologies } from '../src/core';

describe('VALIDATOR FUNCTIONS', () => {
  describe('validateTechnology', () => {
    it('should validate a valid simple technology', () => {
      const tech = {
        nombre: 'JavaScript',
        tipo: 'Language',
      };
      const result = validateTechnology(tech);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should validate a valid stack technology', () => {
      const tech = {
        nombre: 'MEAN',
        tipo: 'Stack',
        componentes: [
          { nombre: 'MongoDB', tipo: 'Database' },
          { nombre: 'Express', tipo: 'Framework' },
        ],
      };
      const result = validateTechnology(tech);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject technology without nombre', () => {
      const tech = {
        tipo: 'Language',
      };
      const result = validateTechnology(tech);
      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should reject technology with invalid type', () => {
      const tech = {
        nombre: 'Test',
        tipo: 'InvalidType',
      };
      const result = validateTechnology(tech);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('Invalid technology type'))).toBe(true);
    });

    it('should reject stack without componentes', () => {
      const tech = {
        nombre: 'TestStack',
        tipo: 'Stack',
      };
      const result = validateTechnology(tech);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('componentes'))).toBe(true);
    });

    it('should reject stack with empty componentes', () => {
      const tech = {
        nombre: 'TestStack',
        tipo: 'Stack',
        componentes: [],
      };
      const result = validateTechnology(tech);
      expect(result.isValid).toBe(false);
    });

    it('should reject non-object input', () => {
      const result = validateTechnology('not an object');
      expect(result.isValid).toBe(false);
    });
  });

  describe('isValidTechnologyType', () => {
    it('should validate correct technology types', () => {
      expect(isValidTechnologyType('Language')).toBe(true);
      expect(isValidTechnologyType('Framework')).toBe(true);
      expect(isValidTechnologyType('Stack')).toBe(true);
    });

    it('should reject invalid technology types', () => {
      expect(isValidTechnologyType('InvalidType')).toBe(false);
      expect(isValidTechnologyType('')).toBe(false);
      expect(isValidTechnologyType('framework')).toBe(false);
    });
  });

  describe('validateStack', () => {
    it('should validate a proper stack', () => {
      const stack = {
        nombre: 'MEAN',
        tipo: 'Stack' as const,
        componentes: [
          { nombre: 'MongoDB', tipo: 'Database' as const },
          { nombre: 'Express', tipo: 'Framework' as const },
        ],
      };
      const result = validateStack(stack);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject non-stack technology', () => {
      const tech = {
        nombre: 'JavaScript',
        tipo: 'Language' as const,
      };
      const result = validateStack(tech);
      expect(result.isValid).toBe(false);
    });

    it('should detect duplicate components', () => {
      const stack = {
        nombre: 'TestStack',
        tipo: 'Stack' as const,
        componentes: [
          { nombre: 'React', tipo: 'Framework' as const },
          { nombre: 'React', tipo: 'Framework' as const },
        ],
      };
      const result = validateStack(stack);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('Duplicate'))).toBe(true);
    });
  });

  describe('validateCatalog', () => {
    it('should validate the actual catalog structure', () => {
      const technologies = getTechnologies();
      const result = validateCatalog(technologies);
      // CHECK THAT ALL TECHNOLOGIES HAVE VALID STRUCTURE
      // NOTE: DUPLICATES MAY EXIST IN THE CATALOG
      const structuralErrors = result.errors.filter(
        (error) => !error.includes('Duplicate technology name')
      );
      expect(structuralErrors).toHaveLength(0);
    });

    it('should detect duplicate names', () => {
      const technologies = [
        { nombre: 'JavaScript', tipo: 'Language' as const },
        { nombre: 'JavaScript', tipo: 'Language' as const },
      ];
      const result = validateCatalog(technologies);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('Duplicate'))).toBe(true);
    });

    it('should warn about missing component references', () => {
      const technologies = [
        {
          nombre: 'TestStack',
          tipo: 'Stack' as const,
          componentes: [
            { nombre: 'NonExistentTech', tipo: 'Framework' as const },
          ],
        },
      ];
      const result = validateCatalog(technologies);
      expect(result.warnings.length).toBeGreaterThan(0);
    });
  });

  describe('sanitizeName', () => {
    it('should trim whitespace', () => {
      expect(sanitizeName('  JavaScript  ')).toBe('JavaScript');
    });

    it('should normalize multiple spaces', () => {
      expect(sanitizeName('Node     JS')).toBe('Node JS');
    });

    it('should handle already clean names', () => {
      expect(sanitizeName('JavaScript')).toBe('JavaScript');
    });
  });

  describe('validateSearchOptions', () => {
    it('should validate correct search options', () => {
      const options = {
        fuzzy: true,
        caseSensitive: false,
        maxResults: 10,
        categories: ['Framework', 'Language'],
      };
      const result = validateSearchOptions(options);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject invalid fuzzy option', () => {
      const options = { fuzzy: 'yes' };
      const result = validateSearchOptions(options);
      expect(result.isValid).toBe(false);
    });

    it('should reject invalid maxResults', () => {
      const options = { maxResults: 0 };
      const result = validateSearchOptions(options);
      expect(result.isValid).toBe(false);
    });

    it('should reject invalid categories', () => {
      const options = { categories: ['InvalidCategory'] };
      const result = validateSearchOptions(options);
      expect(result.isValid).toBe(false);
    });

    it('should validate empty options object', () => {
      const result = validateSearchOptions({});
      expect(result.isValid).toBe(true);
    });
  });
});
