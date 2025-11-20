import { T as TechnologyType, c as Technology, b as StackTechnology } from '../index-CKsEp0Si.js';

/**
 * FILTERS MODULE
 * Advanced filtering utilities for technology queries
 */

/**
 * FILTER BY MULTIPLE CRITERIA
 * Filters technologies based on multiple conditions
 */
interface FilterCriteria {
    types?: TechnologyType[];
    nameContains?: string;
    caseSensitive?: boolean;
    excludeStacks?: boolean;
    onlyStacks?: boolean;
}
declare function filterTechnologies(criteria: FilterCriteria): Technology[];
/**
 * FILTER STACKS BY COMPONENT
 * Finds stacks that contain a specific technology as a component
 */
declare function getStacksByComponent(componentName: string): StackTechnology[];
/**
 * FILTER BY COMPONENT TYPE
 * Finds stacks that contain components of a specific type
 */
declare function getStacksByComponentType(componentType: Exclude<TechnologyType, 'Stack'>): StackTechnology[];
/**
 * GET TECHNOLOGIES USED IN STACKS
 * Returns all unique technologies that appear as components in stacks
 */
declare function getTechnologiesUsedInStacks(): Technology[];
/**
 * GET STANDALONE TECHNOLOGIES
 * Returns technologies that are NOT used as components in any stack
 */
declare function getStandaloneTechnologies(): Technology[];
/**
 * SORT TECHNOLOGIES
 * Sorts technologies by name (alphabetically)
 */
declare function sortByName(technologies: Technology[], ascending?: boolean): Technology[];
/**
 * SORT BY TYPE
 * Sorts technologies by type, then by name within each type
 */
declare function sortByType(technologies: Technology[], typeOrder?: TechnologyType[]): Technology[];

export { type FilterCriteria, filterTechnologies, getStacksByComponent, getStacksByComponentType, getStandaloneTechnologies, getTechnologiesUsedInStacks, sortByName, sortByType };
