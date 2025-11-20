import { e as Catalog, c as Technology, d as CatalogMetadata, T as TechnologyType, a as SimpleTechnology, b as StackTechnology, h as CatalogStatistics } from '../index-CKsEp0Si.js';

/**
 * GET COMPLETE CATALOG
 * Returns the complete catalog with all technologies
 */
declare function getCatalog(): Catalog;
/**
 * GET ALL TECHNOLOGIES
 * Returns array of all technologies in the catalog
 */
declare function getTechnologies(): Technology[];
/**
 * GET METADATA
 * Returns catalog metadata including version, description, and statistics
 */
declare function getMetadata(): CatalogMetadata;
/**
 * GET TECHNOLOGY COUNT
 * Returns the total number of technologies in the catalog
 */
declare function getTechnologyCount(): number;

/**
 * GET TECHNOLOGIES BY TYPE
 * Filters technologies by their type category
 */
declare function getTechsByType(type: TechnologyType): Technology[];
/**
 * GET TECHNOLOGIES BY MULTIPLE TYPES
 * Filters technologies by multiple type categories
 */
declare function getTechsByTypes(types: TechnologyType[]): Technology[];
/**
 * GET SIMPLE TECHNOLOGIES
 * Returns only non-stack technologies
 */
declare function getSimpleTechnologies(): SimpleTechnology[];
/**
 * GET STACKS
 * Returns only stack technologies with their components
 */
declare function getStacks(): StackTechnology[];
/**
 * GET AVAILABLE CATEGORIES
 * Returns list of all available technology types
 */
declare function getCategories(): TechnologyType[];

/**
 * GET TECHNOLOGY BY NAME
 * Finds a technology by its exact name (case-insensitive)
 */
declare function getTechByName(name: string): Technology | undefined;
/**
 * GET TECHNOLOGY BY NAME (STRICT)
 * Finds a technology by its exact name (case-sensitive)
 */
declare function getTechByNameStrict(name: string): Technology | undefined;
/**
 * GET TECHNOLOGIES BY PARTIAL NAME
 * Finds all technologies whose names contain the search string
 */
declare function getTechsByPartialName(partialName: string, caseSensitive?: boolean): Technology[];
/**
 * TECHNOLOGY EXISTS
 * Checks if a technology with the given name exists
 */
declare function techExists(name: string): boolean;

/**
 * GET CATALOG STATISTICS
 * Returns statistical information about the catalog
 */
declare function getStatistics(): CatalogStatistics;
/**
 * GET COUNT BY CATEGORY
 * Returns the count of technologies for a specific category
 */
declare function getCountByCategory(category: TechnologyType): number;
/**
 * GET MOST POPULAR CATEGORY
 * Returns the category with the most technologies
 */
declare function getMostPopularCategory(): {
    category: TechnologyType;
    count: number;
};

export { getCatalog, getCategories, getCountByCategory, getMetadata, getMostPopularCategory, getSimpleTechnologies, getStacks, getStatistics, getTechByName, getTechByNameStrict, getTechnologies, getTechnologyCount, getTechsByPartialName, getTechsByType, getTechsByTypes, techExists };
