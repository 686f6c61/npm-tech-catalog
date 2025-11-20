/**
 * TECHNOLOGY TYPE DEFINITIONS
 */
type TechnologyType = 'Language' | 'Framework' | 'Library' | 'Database' | 'Server' | 'Tool' | 'Platform' | 'Stack';
/**
 * COMPONENT INTERFACE
 * Represents a component within a technology stack
 */
interface StackComponent {
    nombre: string;
    tipo: Exclude<TechnologyType, 'Stack'>;
}
/**
 * BASE TECHNOLOGY INTERFACE
 * Common properties for all technology entries
 */
interface BaseTechnology {
    nombre: string;
    tipo: TechnologyType;
}
/**
 * SIMPLE TECHNOLOGY INTERFACE
 * Standard technology without components
 */
interface SimpleTechnology extends BaseTechnology {
    tipo: Exclude<TechnologyType, 'Stack'>;
}
/**
 * STACK TECHNOLOGY INTERFACE
 * Technology stack with components
 */
interface StackTechnology extends BaseTechnology {
    tipo: 'Stack';
    componentes: StackComponent[];
}
/**
 * TECHNOLOGY UNION TYPE
 * All possible technology types
 */
type Technology = SimpleTechnology | StackTechnology;
/**
 * CATEGORY METADATA INTERFACE
 */
interface CategoryMetadata {
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
interface CatalogMetadata {
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
interface Catalog {
    _metadata: CatalogMetadata;
    tecnologias: Technology[];
}
/**
 * SEARCH OPTIONS INTERFACE
 */
interface SearchOptions {
    fuzzy?: boolean;
    caseSensitive?: boolean;
    maxResults?: number;
    categories?: TechnologyType[];
}
/**
 * FILTER OPTIONS INTERFACE
 */
interface FilterOptions {
    type?: TechnologyType | TechnologyType[];
    includeStacks?: boolean;
    limit?: number;
    offset?: number;
}
/**
 * SEARCH RESULT INTERFACE
 */
interface SearchResult {
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
interface CatalogStatistics {
    total: number;
    byCategory: Record<TechnologyType, number>;
    totalStacks: number;
    totalSimpleTechnologies: number;
    version: string;
}
/**
 * TYPE GUARDS
 */
declare function isStackTechnology(tech: Technology): tech is StackTechnology;
declare function isSimpleTechnology(tech: Technology): tech is SimpleTechnology;

export { type BaseTechnology as B, type CategoryMetadata as C, type FilterOptions as F, type StackComponent as S, type TechnologyType as T, type SimpleTechnology as a, type StackTechnology as b, type Technology as c, type CatalogMetadata as d, type Catalog as e, type SearchOptions as f, type SearchResult as g, type CatalogStatistics as h, isStackTechnology as i, isSimpleTechnology as j };
