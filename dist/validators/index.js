'use strict';

// src/types/index.ts
function isStackTechnology(tech) {
  return tech.tipo === "Stack";
}

// src/validators/index.ts
function validateTechnology(tech) {
  const errors = [];
  if (!tech || typeof tech !== "object") {
    return {
      isValid: false,
      errors: ["Technology must be an object"]
    };
  }
  const techObj = tech;
  if (!techObj.nombre || typeof techObj.nombre !== "string") {
    errors.push('Technology must have a valid "nombre" string property');
  }
  if (!techObj.tipo || typeof techObj.tipo !== "string") {
    errors.push('Technology must have a valid "tipo" string property');
  }
  const validTypes = [
    "Language",
    "Framework",
    "Library",
    "Database",
    "Server",
    "Tool",
    "Platform",
    "Stack"
  ];
  if (techObj.tipo && !validTypes.includes(techObj.tipo)) {
    errors.push(
      `Invalid technology type: "${techObj.tipo}". Must be one of: ${validTypes.join(", ")}`
    );
  }
  if (techObj.tipo === "Stack") {
    if (!Array.isArray(techObj.componentes)) {
      errors.push('Stack technology must have a "componentes" array');
    } else if (techObj.componentes.length === 0) {
      errors.push("Stack technology must have at least one component");
    } else {
      techObj.componentes.forEach((comp, index) => {
        if (!comp || typeof comp !== "object") {
          errors.push(`Component at index ${index} must be an object`);
          return;
        }
        const compObj = comp;
        if (!compObj.nombre || typeof compObj.nombre !== "string") {
          errors.push(
            `Component at index ${index} must have a valid "nombre" string`
          );
        }
        if (!compObj.tipo || typeof compObj.tipo !== "string") {
          errors.push(
            `Component at index ${index} must have a valid "tipo" string`
          );
        }
        if (compObj.tipo === "Stack") {
          errors.push(`Component at index ${index} cannot be of type "Stack"`);
        }
      });
    }
  }
  return {
    isValid: errors.length === 0,
    errors
  };
}
function isValidTechnologyType(type) {
  const validTypes = [
    "Language",
    "Framework",
    "Library",
    "Database",
    "Server",
    "Tool",
    "Platform",
    "Stack"
  ];
  return validTypes.includes(type);
}
function validateStack(tech) {
  const errors = [];
  if (!isStackTechnology(tech)) {
    return {
      isValid: false,
      errors: ["Technology is not a stack"]
    };
  }
  if (!tech.componentes || tech.componentes.length === 0) {
    errors.push("Stack must have at least one component");
  }
  const componentNames = /* @__PURE__ */ new Set();
  tech.componentes.forEach((comp, index) => {
    if (componentNames.has(comp.nombre.toLowerCase())) {
      errors.push(`Duplicate component at index ${index}: "${comp.nombre}"`);
    }
    componentNames.add(comp.nombre.toLowerCase());
  });
  return {
    isValid: errors.length === 0,
    errors
  };
}
function validateCatalog(technologies) {
  const errors = [];
  const warnings = [];
  const names = /* @__PURE__ */ new Map();
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
        `Technology at index ${index} (${tech.nombre}) is invalid: ${validation.errors.join(", ")}`
      );
    }
  });
  const stackTechs = technologies.filter(
    (tech) => isStackTechnology(tech)
  );
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
    warnings
  };
}
function sanitizeName(name) {
  return name.trim().replace(/\s+/g, " ");
}
function validateSearchOptions(options) {
  const errors = [];
  if (options && typeof options !== "object") {
    return {
      isValid: false,
      errors: ["Options must be an object"]
    };
  }
  const opts = options;
  if (opts.fuzzy !== void 0 && typeof opts.fuzzy !== "boolean") {
    errors.push('Option "fuzzy" must be a boolean');
  }
  if (opts.caseSensitive !== void 0 && typeof opts.caseSensitive !== "boolean") {
    errors.push('Option "caseSensitive" must be a boolean');
  }
  if (opts.maxResults !== void 0) {
    if (typeof opts.maxResults !== "number") {
      errors.push('Option "maxResults" must be a number');
    } else if (opts.maxResults < 1) {
      errors.push('Option "maxResults" must be at least 1');
    }
  }
  if (opts.categories !== void 0) {
    if (!Array.isArray(opts.categories)) {
      errors.push('Option "categories" must be an array');
    } else {
      opts.categories.forEach((cat, index) => {
        if (typeof cat !== "string" || !isValidTechnologyType(cat)) {
          errors.push(
            `Invalid category at index ${index}: must be a valid TechnologyType`
          );
        }
      });
    }
  }
  return {
    isValid: errors.length === 0,
    errors
  };
}

exports.isValidTechnologyType = isValidTechnologyType;
exports.sanitizeName = sanitizeName;
exports.validateCatalog = validateCatalog;
exports.validateSearchOptions = validateSearchOptions;
exports.validateStack = validateStack;
exports.validateTechnology = validateTechnology;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map