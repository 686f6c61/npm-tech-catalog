import { describe, it, expect } from 'vitest';
import {
  getCatalog,
  getTechnologies,
  getMetadata,
  getTechnologyCount,
  getTechsByType,
  getTechsByTypes,
  getSimpleTechnologies,
  getStacks,
  getCategories,
  getTechByName,
  getTechByNameStrict,
  getTechsByPartialName,
  techExists,
  getStatistics,
  getCountByCategory,
  getMostPopularCategory,
} from '../src/core';

describe('CATALOG FUNCTIONS', () => {
  it('should get complete catalog', () => {
    const catalog = getCatalog();
    expect(catalog).toBeDefined();
    expect(catalog._metadata).toBeDefined();
    expect(catalog.tecnologias).toBeDefined();
    expect(Array.isArray(catalog.tecnologias)).toBe(true);
  });

  it('should get technologies array', () => {
    const technologies = getTechnologies();
    expect(Array.isArray(technologies)).toBe(true);
    expect(technologies.length).toBeGreaterThan(0);
  });

  it('should get metadata', () => {
    const metadata = getMetadata();
    expect(metadata.nombre).toBe('SPARRING Technology Catalog');
    expect(metadata.version).toBeDefined();
    expect(metadata.total_tecnologias).toBeGreaterThan(0);
  });

  it('should get technology count', () => {
    const count = getTechnologyCount();
    expect(count).toBeGreaterThan(0);
    expect(count).toBe(getMetadata().total_tecnologias);
  });
});

describe('GET BY TYPE FUNCTIONS', () => {
  it('should get technologies by type', () => {
    const frameworks = getTechsByType('Framework');
    expect(Array.isArray(frameworks)).toBe(true);
    expect(frameworks.every((tech) => tech.tipo === 'Framework')).toBe(true);
  });

  it('should get technologies by multiple types', () => {
    const techs = getTechsByTypes(['Language', 'Framework']);
    expect(Array.isArray(techs)).toBe(true);
    expect(
      techs.every(
        (tech) => tech.tipo === 'Language' || tech.tipo === 'Framework'
      )
    ).toBe(true);
  });

  it('should get simple technologies only', () => {
    const simple = getSimpleTechnologies();
    expect(Array.isArray(simple)).toBe(true);
    expect(simple.every((tech) => tech.tipo !== 'Stack')).toBe(true);
  });

  it('should get stacks only', () => {
    const stacks = getStacks();
    expect(Array.isArray(stacks)).toBe(true);
    expect(stacks.every((tech) => tech.tipo === 'Stack')).toBe(true);
    expect(stacks.every((tech) => 'componentes' in tech)).toBe(true);
  });

  it('should get all categories', () => {
    const categories = getCategories();
    expect(categories).toHaveLength(8);
    expect(categories).toContain('Language');
    expect(categories).toContain('Framework');
    expect(categories).toContain('Stack');
  });
});

describe('GET BY NAME FUNCTIONS', () => {
  it('should find technology by exact name (case-insensitive)', () => {
    const tech = getTechByName('JavaScript');
    expect(tech).toBeDefined();
    expect(tech?.nombre).toBe('JavaScript');
  });

  it('should find technology by exact name with different case', () => {
    const tech = getTechByName('javascript');
    expect(tech).toBeDefined();
    expect(tech?.nombre).toBe('JavaScript');
  });

  it('should return undefined for non-existent technology', () => {
    const tech = getTechByName('NonExistentTech12345');
    expect(tech).toBeUndefined();
  });

  it('should find technology by strict name (case-sensitive)', () => {
    const tech = getTechByNameStrict('JavaScript');
    expect(tech).toBeDefined();
  });

  it('should not find technology with wrong case in strict mode', () => {
    const tech = getTechByNameStrict('javascript');
    expect(tech).toBeUndefined();
  });

  it('should find technologies by partial name', () => {
    const techs = getTechsByPartialName('Script');
    expect(Array.isArray(techs)).toBe(true);
    expect(techs.length).toBeGreaterThan(0);
    expect(
      techs.every((tech) => tech.nombre.toLowerCase().includes('script'))
    ).toBe(true);
  });

  it('should check if technology exists', () => {
    expect(techExists('JavaScript')).toBe(true);
    expect(techExists('NonExistentTech12345')).toBe(false);
  });
});

describe('STATISTICS FUNCTIONS', () => {
  it('should get complete statistics', () => {
    const stats = getStatistics();
    expect(stats.total).toBeGreaterThan(0);
    expect(stats.byCategory).toBeDefined();
    expect(stats.version).toBeDefined();
  });

  it('should get count by category', () => {
    const count = getCountByCategory('Framework');
    expect(count).toBeGreaterThan(0);
    expect(typeof count).toBe('number');
  });

  it('should get most popular category', () => {
    const result = getMostPopularCategory();
    expect(result.category).toBeDefined();
    expect(result.count).toBeGreaterThan(0);
  });

  it('should have consistent counts', () => {
    const stats = getStatistics();
    const manualCount = Object.values(stats.byCategory).reduce(
      (sum, count) => sum + count,
      0
    );
    expect(stats.total).toBe(manualCount);
  });
});
