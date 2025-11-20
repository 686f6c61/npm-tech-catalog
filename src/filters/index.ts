/**
 * FILTERS MODULE
 * Advanced filtering utilities for technology queries
 */

import { getTechnologies } from '../core/catalog';
import type { Technology, TechnologyType, StackTechnology } from '../types';
import { isStackTechnology } from '../types';

/**
 * FILTER BY MULTIPLE CRITERIA
 * Filters technologies based on multiple conditions
 */
export interface FilterCriteria {
  types?: TechnologyType[];
  nameContains?: string;
  caseSensitive?: boolean;
  excludeStacks?: boolean;
  onlyStacks?: boolean;
}

export function filterTechnologies(criteria: FilterCriteria): Technology[] {
  let technologies = getTechnologies();

  if (criteria.types && criteria.types.length > 0) {
    technologies = technologies.filter((tech) =>
      criteria.types!.includes(tech.tipo)
    );
  }

  if (criteria.nameContains) {
    const searchTerm = criteria.caseSensitive
      ? criteria.nameContains
      : criteria.nameContains.toLowerCase();

    technologies = technologies.filter((tech) => {
      const techName = criteria.caseSensitive
        ? tech.nombre
        : tech.nombre.toLowerCase();
      return techName.includes(searchTerm);
    });
  }

  if (criteria.excludeStacks) {
    technologies = technologies.filter((tech) => !isStackTechnology(tech));
  }

  if (criteria.onlyStacks) {
    technologies = technologies.filter((tech) => isStackTechnology(tech));
  }

  return technologies;
}

/**
 * FILTER STACKS BY COMPONENT
 * Finds stacks that contain a specific technology as a component
 */
export function getStacksByComponent(componentName: string): StackTechnology[] {
  const technologies = getTechnologies();
  const normalizedName = componentName.toLowerCase();

  return technologies.filter((tech) => {
    if (!isStackTechnology(tech)) return false;
    return tech.componentes.some(
      (comp) => comp.nombre.toLowerCase() === normalizedName
    );
  }) as StackTechnology[];
}

/**
 * FILTER BY COMPONENT TYPE
 * Finds stacks that contain components of a specific type
 */
export function getStacksByComponentType(
  componentType: Exclude<TechnologyType, 'Stack'>
): StackTechnology[] {
  const technologies = getTechnologies();

  return technologies.filter((tech) => {
    if (!isStackTechnology(tech)) return false;
    return tech.componentes.some((comp) => comp.tipo === componentType);
  }) as StackTechnology[];
}

/**
 * GET TECHNOLOGIES USED IN STACKS
 * Returns all unique technologies that appear as components in stacks
 */
export function getTechnologiesUsedInStacks(): Technology[] {
  const technologies = getTechnologies();
  const stackComponentNames = new Set<string>();

  technologies.forEach((tech) => {
    if (isStackTechnology(tech)) {
      tech.componentes.forEach((comp) => {
        stackComponentNames.add(comp.nombre.toLowerCase());
      });
    }
  });

  return technologies.filter((tech) =>
    stackComponentNames.has(tech.nombre.toLowerCase())
  );
}

/**
 * GET STANDALONE TECHNOLOGIES
 * Returns technologies that are NOT used as components in any stack
 */
export function getStandaloneTechnologies(): Technology[] {
  const technologies = getTechnologies();
  const stackComponentNames = new Set<string>();

  technologies.forEach((tech) => {
    if (isStackTechnology(tech)) {
      tech.componentes.forEach((comp) => {
        stackComponentNames.add(comp.nombre.toLowerCase());
      });
    }
  });

  return technologies.filter(
    (tech) =>
      !isStackTechnology(tech) &&
      !stackComponentNames.has(tech.nombre.toLowerCase())
  );
}

/**
 * SORT TECHNOLOGIES
 * Sorts technologies by name (alphabetically)
 */
export function sortByName(
  technologies: Technology[],
  ascending: boolean = true
): Technology[] {
  return [...technologies].sort((a, b) => {
    const comparison = a.nombre.localeCompare(b.nombre);
    return ascending ? comparison : -comparison;
  });
}

/**
 * SORT BY TYPE
 * Sorts technologies by type, then by name within each type
 */
export function sortByType(
  technologies: Technology[],
  typeOrder?: TechnologyType[]
): Technology[] {
  const defaultOrder: TechnologyType[] = [
    'Language',
    'Framework',
    'Library',
    'Database',
    'Server',
    'Tool',
    'Platform',
    'Stack',
  ];

  const order = typeOrder || defaultOrder;

  return [...technologies].sort((a, b) => {
    const typeComparison = order.indexOf(a.tipo) - order.indexOf(b.tipo);
    if (typeComparison !== 0) return typeComparison;
    return a.nombre.localeCompare(b.nombre);
  });
}
