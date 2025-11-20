import { f as SearchOptions, g as SearchResult, T as TechnologyType, c as Technology } from '../index-CKsEp0Si.js';

/**
 * SEARCH TECHNOLOGIES
 * Searches for technologies with optional fuzzy matching
 */
declare function searchTech(query: string, options?: SearchOptions): SearchResult[];
/**
 * SEARCH BY NAME ONLY
 * Simple name-based search with scoring
 */
declare function searchByName(name: string, maxResults?: number): SearchResult[];
/**
 * AUTOCOMPLETE
 * Returns suggestions for autocomplete functionality
 */
declare function autocomplete(input: string, maxSuggestions?: number, filterByType?: TechnologyType[]): Technology[];

export { autocomplete, searchByName, searchTech };
