import { getTechnologies } from './catalog';
import type { Technology, TechnologyType, SimpleTechnology, StackTechnology } from '../types';
import { isStackTechnology } from '../types';

/**
 * GET TECHNOLOGIES BY TYPE
 * Filters technologies by their type category
 */
export function getTechsByType(type: TechnologyType): Technology[] {
  const technologies = getTechnologies();
  return technologies.filter((tech) => tech.tipo === type);
}

/**
 * GET TECHNOLOGIES BY MULTIPLE TYPES
 * Filters technologies by multiple type categories
 */
export function getTechsByTypes(types: TechnologyType[]): Technology[] {
  const technologies = getTechnologies();
  return technologies.filter((tech) => types.includes(tech.tipo));
}

/**
 * GET SIMPLE TECHNOLOGIES
 * Returns only non-stack technologies
 */
export function getSimpleTechnologies(): SimpleTechnology[] {
  const technologies = getTechnologies();
  return technologies.filter((tech) => !isStackTechnology(tech)) as SimpleTechnology[];
}

/**
 * GET STACKS
 * Returns only stack technologies with their components
 */
export function getStacks(): StackTechnology[] {
  const technologies = getTechnologies();
  return technologies.filter((tech) => isStackTechnology(tech)) as StackTechnology[];
}

/**
 * GET AVAILABLE CATEGORIES
 * Returns list of all available technology types
 */
export function getCategories(): TechnologyType[] {
  return [
    'Language',
    'Framework',
    'Library',
    'Database',
    'Server',
    'Tool',
    'Platform',
    'Stack',
  ];
}
