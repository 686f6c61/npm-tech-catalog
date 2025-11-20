/**
 * TECHNOLOGY TYPE DEFINITIONS
 */

export type TechnologyType =
  | 'Language'
  | 'Framework'
  | 'Library'
  | 'Database'
  | 'Server'
  | 'Tool'
  | 'Platform'
  | 'Stack';

/**
 * COMPONENT INTERFACE
 * Represents a component within a technology stack
 */
export interface StackComponent {
  nombre: string;
  tipo: Exclude<TechnologyType, 'Stack'>;
}

/**
 * BASE TECHNOLOGY INTERFACE
 * Common properties for all technology entries
 */
export interface BaseTechnology {
  nombre: string;
  tipo: TechnologyType;
}

/**
 * SIMPLE TECHNOLOGY INTERFACE
 * Standard technology without components
 */
export interface SimpleTechnology extends BaseTechnology {
  tipo: Exclude<TechnologyType, 'Stack'>;
}

/**
 * STACK TECHNOLOGY INTERFACE
 * Technology stack with components
 */
export interface StackTechnology extends BaseTechnology {
  tipo: 'Stack';
  componentes: StackComponent[];
}

/**
 * TECHNOLOGY UNION TYPE
 * All possible technology types
 */
export type Technology = SimpleTechnology | StackTechnology;

/**
 * CATEGORY METADATA INTERFACE
 */
export interface CategoryMetadata {
  descripcion: string;
  ejemplos: string[];
  estructura?: {
    nombre: string;
    tipo: string;
    componentes: Array<{
      nombre: string;
      tipo: string;
    }>;
  };
}

/**
 * CATALOG METADATA INTERFACE
 */
export interface CatalogMetadata {
  nombre: string;
  version: string;
  descripcion: string;
  total_tecnologias: number;
  categorias: Record<string, CategoryMetadata>;
  uso: string;
}

/**
 * CATALOG INTERFACE
 * Complete catalog structure
 */
export interface Catalog {
  _metadata: CatalogMetadata;
  tecnologias: Technology[];
}

/**
 * SEARCH OPTIONS INTERFACE
 */
export interface SearchOptions {
  fuzzy?: boolean;
  caseSensitive?: boolean;
  maxResults?: number;
  categories?: TechnologyType[];
}

/**
 * FILTER OPTIONS INTERFACE
 */
export interface FilterOptions {
  type?: TechnologyType | TechnologyType[];
  includeStacks?: boolean;
  limit?: number;
  offset?: number;
}

/**
 * SEARCH RESULT INTERFACE
 */
export interface SearchResult {
  technology: Technology;
  score?: number;
  matches?: {
    field: 'nombre' | 'tipo';
    value: string;
  }[];
}

/**
 * STATISTICS INTERFACE
 */
export interface CatalogStatistics {
  total: number;
  byCategory: Record<TechnologyType, number>;
  totalStacks: number;
  totalSimpleTechnologies: number;
  version: string;
}

/**
 * TYPE GUARDS
 */
export function isStackTechnology(tech: Technology): tech is StackTechnology {
  return tech.tipo === 'Stack';
}

export function isSimpleTechnology(tech: Technology): tech is SimpleTechnology {
  return tech.tipo !== 'Stack';
}

