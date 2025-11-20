import { getTechnologies } from './catalog';
import type { Technology } from '../types';

/**
 * GET TECHNOLOGY BY NAME
 * Finds a technology by its exact name (case-insensitive)
 */
export function getTechByName(name: string): Technology | undefined {
  const technologies = getTechnologies();
  const normalizedName = name.toLowerCase().trim();

  return technologies.find(
    (tech) => tech.nombre.toLowerCase() === normalizedName
  );
}

/**
 * GET TECHNOLOGY BY NAME (STRICT)
 * Finds a technology by its exact name (case-sensitive)
 */
export function getTechByNameStrict(name: string): Technology | undefined {
  const technologies = getTechnologies();
  return technologies.find((tech) => tech.nombre === name.trim());
}

/**
 * GET TECHNOLOGIES BY PARTIAL NAME
 * Finds all technologies whose names contain the search string
 */
export function getTechsByPartialName(
  partialName: string,
  caseSensitive: boolean = false
): Technology[] {
  const technologies = getTechnologies();
  const searchTerm = caseSensitive ? partialName.trim() : partialName.toLowerCase().trim();

  return technologies.filter((tech) => {
    const techName = caseSensitive ? tech.nombre : tech.nombre.toLowerCase();
    return techName.includes(searchTerm);
  });
}

/**
 * TECHNOLOGY EXISTS
 * Checks if a technology with the given name exists
 */
export function techExists(name: string): boolean {
  return getTechByName(name) !== undefined;
}
