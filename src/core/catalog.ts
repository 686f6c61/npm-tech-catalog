import catalogData from '../data/tecnologias-autocompletado.json';
import type { Catalog, Technology, CatalogMetadata } from '../types';

/**
 * GET COMPLETE CATALOG
 * Returns the complete catalog with all technologies
 */
export function getCatalog(): Catalog {
  return catalogData as Catalog;
}

/**
 * GET ALL TECHNOLOGIES
 * Returns array of all technologies in the catalog
 */
export function getTechnologies(): Technology[] {
  return catalogData.tecnologias as Technology[];
}

/**
 * GET METADATA
 * Returns catalog metadata including version, description, and statistics
 */
export function getMetadata(): CatalogMetadata {
  return catalogData._metadata as CatalogMetadata;
}

/**
 * GET TECHNOLOGY COUNT
 * Returns the total number of technologies in the catalog
 */
export function getTechnologyCount(): number {
  return catalogData.tecnologias.length;
}
