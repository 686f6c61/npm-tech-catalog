import { describe, it, expect } from 'vitest';
import {
  filterTechnologies,
  getStacksByComponent,
  getStacksByComponentType,
  getTechnologiesUsedInStacks,
  getStandaloneTechnologies,
  sortByName,
  sortByType,
} from '../src/filters';
import { getTechnologies } from '../src/core';

describe('FILTER FUNCTIONS', () => {
  describe('filterTechnologies', () => {
    it('should filter by types', () => {
      const results = filterTechnologies({
        types: ['Language', 'Framework'],
      });
      expect(
        results.every(
          (tech) => tech.tipo === 'Language' || tech.tipo === 'Framework'
        )
      ).toBe(true);
    });

    it('should filter by name contains', () => {
      const results = filterTechnologies({
        nameContains: 'Script',
      });
      expect(
        results.every((tech) => tech.nombre.toLowerCase().includes('script'))
      ).toBe(true);
    });

    it('should exclude stacks', () => {
      const results = filterTechnologies({
        excludeStacks: true,
      });
      expect(results.every((tech) => tech.tipo !== 'Stack')).toBe(true);
    });

    it('should filter only stacks', () => {
      const results = filterTechnologies({
        onlyStacks: true,
      });
      expect(results.every((tech) => tech.tipo === 'Stack')).toBe(true);
    });

    it('should combine multiple criteria', () => {
      const results = filterTechnologies({
        types: ['Framework', 'Library'],
        nameContains: 'React',
        excludeStacks: true,
      });
      expect(
        results.every(
          (tech) =>
            (tech.tipo === 'Framework' || tech.tipo === 'Library') &&
            tech.nombre.toLowerCase().includes('react') &&
            tech.tipo !== 'Stack'
        )
      ).toBe(true);
    });
  });

  describe('getStacksByComponent', () => {
    it('should find stacks containing a specific component', () => {
      const stacks = getStacksByComponent('React');
      expect(Array.isArray(stacks)).toBe(true);
      expect(stacks.every((stack) => stack.tipo === 'Stack')).toBe(true);
      if (stacks.length > 0) {
        expect(
          stacks.every((stack) =>
            stack.componentes.some(
              (comp) => comp.nombre.toLowerCase() === 'react'
            )
          )
        ).toBe(true);
      }
    });

    it('should return empty array if no stacks contain component', () => {
      const stacks = getStacksByComponent('NonExistentComponent12345');
      expect(stacks).toEqual([]);
    });
  });

  describe('getStacksByComponentType', () => {
    it('should find stacks with components of specific type', () => {
      const stacks = getStacksByComponentType('Framework');
      expect(Array.isArray(stacks)).toBe(true);
      if (stacks.length > 0) {
        expect(
          stacks.every((stack) =>
            stack.componentes.some((comp) => comp.tipo === 'Framework')
          )
        ).toBe(true);
      }
    });
  });

  describe('getTechnologiesUsedInStacks', () => {
    it('should return technologies that appear in stacks', () => {
      const techs = getTechnologiesUsedInStacks();
      expect(Array.isArray(techs)).toBe(true);
    });
  });

  describe('getStandaloneTechnologies', () => {
    it('should return technologies not used in any stack', () => {
      const techs = getStandaloneTechnologies();
      expect(Array.isArray(techs)).toBe(true);
      expect(techs.every((tech) => tech.tipo !== 'Stack')).toBe(true);
    });
  });

  describe('sortByName', () => {
    it('should sort technologies alphabetically (ascending)', () => {
      const technologies = getTechnologies().slice(0, 10);
      const sorted = sortByName(technologies, true);
      for (let i = 1; i < sorted.length; i++) {
        expect(
          sorted[i - 1].nombre.localeCompare(sorted[i].nombre)
        ).toBeLessThanOrEqual(0);
      }
    });

    it('should sort technologies alphabetically (descending)', () => {
      const technologies = getTechnologies().slice(0, 10);
      const sorted = sortByName(technologies, false);
      for (let i = 1; i < sorted.length; i++) {
        expect(
          sorted[i - 1].nombre.localeCompare(sorted[i].nombre)
        ).toBeGreaterThanOrEqual(0);
      }
    });

    it('should not mutate original array', () => {
      const technologies = getTechnologies().slice(0, 10);
      const original = [...technologies];
      sortByName(technologies);
      expect(technologies).toEqual(original);
    });
  });

  describe('sortByType', () => {
    it('should sort technologies by type then name', () => {
      const technologies = getTechnologies().slice(0, 20);
      const sorted = sortByType(technologies);
      expect(Array.isArray(sorted)).toBe(true);
      expect(sorted.length).toBe(technologies.length);
    });

    it('should respect custom type order', () => {
      const technologies = getTechnologies().slice(0, 20);
      const customOrder = ['Stack', 'Framework', 'Language'];
      const sorted = sortByType(technologies, customOrder);
      expect(Array.isArray(sorted)).toBe(true);
    });
  });
});
