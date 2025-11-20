import { T as TechnologyType, c as Technology } from '../index-CKsEp0Si.mjs';

/**
 * VALIDATORS MODULE
 * Validation utilities for technology data
 */

/**
 * VALIDATE TECHNOLOGY OBJECT
 * Checks if an object is a valid Technology
 */
interface ValidationResult {
    isValid: boolean;
    errors: string[];
}
declare function validateTechnology(tech: unknown): ValidationResult;
/**
 * VALIDATE TECHNOLOGY TYPE
 * Checks if a string is a valid TechnologyType
 */
declare function isValidTechnologyType(type: string): type is TechnologyType;
/**
 * VALIDATE STACK STRUCTURE
 * Validates that a stack has proper structure
 */
declare function validateStack(tech: Technology): ValidationResult;
/**
 * VALIDATE CATALOG CONSISTENCY
 * Checks for inconsistencies in the catalog
 */
interface CatalogValidationResult {
    isValid: boolean;
    errors: string[];
    warnings: string[];
}
declare function validateCatalog(technologies: Technology[]): CatalogValidationResult;
/**
 * SANITIZE TECHNOLOGY NAME
 * Cleans and normalizes a technology name
 */
declare function sanitizeName(name: string): string;
/**
 * VALIDATE SEARCH OPTIONS
 * Validates search options object
 */
declare function validateSearchOptions(options: unknown): ValidationResult;

export { type CatalogValidationResult, type ValidationResult, isValidTechnologyType, sanitizeName, validateCatalog, validateSearchOptions, validateStack, validateTechnology };
