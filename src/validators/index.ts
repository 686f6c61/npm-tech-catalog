/**
 * VALIDATORS MODULE
 * Validation utilities for technology data
 */

import type { Technology, TechnologyType, StackTechnology } from '../types';
import { isStackTechnology } from '../types';

/**
 * VALIDATE TECHNOLOGY OBJECT
 * Checks if an object is a valid Technology
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateTechnology(tech: unknown): ValidationResult {
  const errors: string[] = [];

  if (!tech || typeof tech !== 'object') {
    return {
      isValid: false,
      errors: ['Technology must be an object'],
    };
  }

  const techObj = tech as Record<string, unknown>;

  if (!techObj.nombre || typeof techObj.nombre !== 'string') {
    errors.push('Technology must have a valid "nombre" string property');
  }

  if (!techObj.tipo || typeof techObj.tipo !== 'string') {
    errors.push('Technology must have a valid "tipo" string property');
  }

  const validTypes: TechnologyType[] = [
    'Language',
    'Framework',
    'Library',
    'Database',
    'Server',
    'Tool',
    'Platform',
    'Stack',
  ];

  if (techObj.tipo && !validTypes.includes(techObj.tipo as TechnologyType)) {
    errors.push(
      `Invalid technology type: "${techObj.tipo}". Must be one of: ${validTypes.join(', ')}`
    );
  }

  if (techObj.tipo === 'Stack') {
    if (!Array.isArray(techObj.componentes)) {
      errors.push('Stack technology must have a "componentes" array');
    } else if (techObj.componentes.length === 0) {
      errors.push('Stack technology must have at least one component');
    } else {
      techObj.componentes.forEach((comp: unknown, index: number) => {
        if (!comp || typeof comp !== 'object') {
          errors.push(`Component at index ${index} must be an object`);
          return;
        }

        const compObj = comp as Record<string, unknown>;

        if (!compObj.nombre || typeof compObj.nombre !== 'string') {
          errors.push(
            `Component at index ${index} must have a valid "nombre" string`
          );
        }

        if (!compObj.tipo || typeof compObj.tipo !== 'string') {
          errors.push(
            `Component at index ${index} must have a valid "tipo" string`
          );
        }

        if (compObj.tipo === 'Stack') {
          errors.push(`Component at index ${index} cannot be of type "Stack"`);
        }
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * VALIDATE TECHNOLOGY TYPE
 * Checks if a string is a valid TechnologyType
 */
export function isValidTechnologyType(type: string): type is TechnologyType {
  const validTypes: TechnologyType[] = [
    'Language',
    'Framework',
    'Library',
    'Database',
    'Server',
    'Tool',
    'Platform',
    'Stack',
  ];
  return validTypes.includes(type as TechnologyType);
}

/**
 * VALIDATE STACK STRUCTURE
 * Validates that a stack has proper structure
 */
export function validateStack(tech: Technology): ValidationResult {
  const errors: string[] = [];

  if (!isStackTechnology(tech)) {
    return {
      isValid: false,
      errors: ['Technology is not a stack'],
    };
  }

  if (!tech.componentes || tech.componentes.length === 0) {
    errors.push('Stack must have at least one component');
  }

  const componentNames = new Set<string>();
  tech.componentes.forEach((comp, index) => {
    if (componentNames.has(comp.nombre.toLowerCase())) {
      errors.push(`Duplicate component at index ${index}: "${comp.nombre}"`);
    }
    componentNames.add(comp.nombre.toLowerCase());
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * VALIDATE CATALOG CONSISTENCY
 * Checks for inconsistencies in the catalog
 */
export interface CatalogValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateCatalog(
  technologies: Technology[]
): CatalogValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const names = new Map<string, number>();
  technologies.forEach((tech, index) => {
    const normalizedName = tech.nombre.toLowerCase();
    if (names.has(normalizedName)) {
      errors.push(
        `Duplicate technology name "${tech.nombre}" at indices ${names.get(normalizedName)} and ${index}`
      );
    }
    names.set(normalizedName, index);

    const validation = validateTechnology(tech);
    if (!validation.isValid) {
      errors.push(
        `Technology at index ${index} (${tech.nombre}) is invalid: ${validation.errors.join(', ')}`
      );
    }
  });

  const stackTechs = technologies.filter((tech) =>
    isStackTechnology(tech)
  ) as StackTechnology[];

  stackTechs.forEach((stack) => {
    stack.componentes.forEach((comp) => {
      const found = technologies.find(
        (tech) => tech.nombre.toLowerCase() === comp.nombre.toLowerCase()
      );

      if (!found) {
        warnings.push(
          `Stack "${stack.nombre}" references component "${comp.nombre}" which is not in the catalog`
        );
      } else if (found.tipo !== comp.tipo) {
        warnings.push(
          `Stack "${stack.nombre}" component "${comp.nombre}" has type mismatch: stack says "${comp.tipo}", catalog says "${found.tipo}"`
        );
      }
    });
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * SANITIZE TECHNOLOGY NAME
 * Cleans and normalizes a technology name
 */
export function sanitizeName(name: string): string {
  return name.trim().replace(/\s+/g, ' ');
}

/**
 * VALIDATE SEARCH OPTIONS
 * Validates search options object
 */
export function validateSearchOptions(options: unknown): ValidationResult {
  const errors: string[] = [];

  if (options && typeof options !== 'object') {
    return {
      isValid: false,
      errors: ['Options must be an object'],
    };
  }

  const opts = options as Record<string, unknown>;

  if (opts.fuzzy !== undefined && typeof opts.fuzzy !== 'boolean') {
    errors.push('Option "fuzzy" must be a boolean');
  }

  if (
    opts.caseSensitive !== undefined &&
    typeof opts.caseSensitive !== 'boolean'
  ) {
    errors.push('Option "caseSensitive" must be a boolean');
  }

  if (opts.maxResults !== undefined) {
    if (typeof opts.maxResults !== 'number') {
      errors.push('Option "maxResults" must be a number');
    } else if (opts.maxResults < 1) {
      errors.push('Option "maxResults" must be at least 1');
    }
  }

  if (opts.categories !== undefined) {
    if (!Array.isArray(opts.categories)) {
      errors.push('Option "categories" must be an array');
    } else {
      opts.categories.forEach((cat: unknown, index: number) => {
        if (typeof cat !== 'string' || !isValidTechnologyType(cat)) {
          errors.push(
            `Invalid category at index ${index}: must be a valid TechnologyType`
          );
        }
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
