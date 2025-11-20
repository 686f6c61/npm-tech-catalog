# @SPARRING/TECH-CATALOG

A COMPREHENSIVE CATALOG OF 1094+ TECHNOLOGIES, FRAMEWORKS, LIBRARIES, AND TECH STACKS WITH TYPESCRIPT SUPPORT.

## TABLE OF CONTENTS

- [OVERVIEW](#overview)
- [FEATURES](#features)
- [INSTALLATION](#installation)
- [QUICK START](#quick-start)
- [API REFERENCE](#api-reference)
  - [CORE MODULE](#core-module)
  - [SEARCH MODULE](#search-module)
  - [FILTERS MODULE](#filters-module)
  - [VALIDATORS MODULE](#validators-module)
- [USAGE EXAMPLES](#usage-examples)
- [TECHNOLOGY CATEGORIES](#technology-categories)
- [DATA STRUCTURE](#data-structure)
- [TYPESCRIPT SUPPORT](#typescript-support)
- [CONTRIBUTING](#contributing)
- [LICENSE](#license)

## OVERVIEW

`@sparring/tech-catalog` IS A CURATED, STRUCTURED CATALOG OF OVER 1094 MODERN TECHNOLOGIES ORGANIZED INTO 8 DISTINCT CATEGORIES. IT PROVIDES A ROBUST API FOR SEARCHING, FILTERING, AND VALIDATING TECHNOLOGY DATA WITH FULL TYPESCRIPT SUPPORT.

### WHY THIS PACKAGE?

- **COMPREHENSIVE**: 1094+ TECHNOLOGIES ACROSS 8 CATEGORIES
- **STRUCTURED**: CONSISTENT DATA FORMAT WITH RICH METADATA
- **TYPED**: FULL TYPESCRIPT SUPPORT WITH TYPE GUARDS
- **SEARCHABLE**: FUZZY MATCHING AND ADVANCED FILTERING
- **VALIDATED**: BUILT-IN VALIDATION UTILITIES
- **TREE-SHAKEABLE**: MODULAR EXPORTS FOR OPTIMAL BUNDLE SIZE
- **ZERO DEPENDENCIES**: NO EXTERNAL RUNTIME DEPENDENCIES

## FEATURES

- **CORE FUNCTIONS**: ACCESS CATALOG DATA, FILTER BY TYPE, SEARCH BY NAME
- **FUZZY SEARCH**: LEVENSHTEIN DISTANCE-BASED SIMILARITY MATCHING
- **AUTOCOMPLETE**: INTELLIGENT SUGGESTION ENGINE
- **ADVANCED FILTERS**: MULTI-CRITERIA FILTERING WITH SORTING
- **VALIDATORS**: VALIDATE TECHNOLOGY DATA AND CATALOG CONSISTENCY
- **STACK SUPPORT**: DETAILED TECHNOLOGY STACKS WITH COMPONENTS
- **STATISTICS**: CATALOG ANALYTICS AND INSIGHTS
- **DUAL FORMAT**: BOTH CJS AND ESM EXPORTS

## INSTALLATION

```bash
npm install @sparring/tech-catalog
```

```bash
yarn add @sparring/tech-catalog
```

```bash
pnpm add @sparring/tech-catalog
```

## QUICK START

```typescript
import {
  getTechnologies,
  searchTech,
  autocomplete,
  getTechByName,
} from '@sparring/tech-catalog';

// GET ALL TECHNOLOGIES
const technologies = getTechnologies();
console.log(`Total technologies: ${technologies.length}`);

// FIND A SPECIFIC TECHNOLOGY
const react = getTechByName('React');
console.log(react); // { nombre: 'React', tipo: 'Framework' }

// SEARCH WITH FUZZY MATCHING
const results = searchTech('recat'); // TYPO INTENDED
console.log(results[0].technology.nombre); // 'React'

// AUTOCOMPLETE
const suggestions = autocomplete('java', 5);
// RETURNS: ['JavaScript', 'Java', 'JavaFX', ...]
```

## API REFERENCE

### CORE MODULE

#### `getCatalog()`

RETURNS THE COMPLETE CATALOG INCLUDING METADATA AND TECHNOLOGIES.

```typescript
import { getCatalog } from '@sparring/tech-catalog/core';

const catalog = getCatalog();
console.log(catalog._metadata.version);
console.log(catalog.tecnologias.length);
```

#### `getTechnologies()`

RETURNS AN ARRAY OF ALL TECHNOLOGIES.

```typescript
import { getTechnologies } from '@sparring/tech-catalog/core';

const technologies = getTechnologies();
```

#### `getMetadata()`

RETURNS CATALOG METADATA.

```typescript
import { getMetadata } from '@sparring/tech-catalog/core';

const metadata = getMetadata();
console.log(metadata.nombre); // 'CATÁLOGO SPARRING DE TECNOLOGÍAS'
console.log(metadata.version); // '3.0'
```

#### `getTechnologyCount()`

RETURNS THE TOTAL NUMBER OF TECHNOLOGIES.

```typescript
import { getTechnologyCount } from '@sparring/tech-catalog/core';

const count = getTechnologyCount(); // 1094
```

#### `getTechsByType(type)`

RETURNS ALL TECHNOLOGIES OF A SPECIFIC TYPE.

```typescript
import { getTechsByType } from '@sparring/tech-catalog/core';

const frameworks = getTechsByType('Framework');
const languages = getTechsByType('Lenguaje');
```

#### `getTechsByTypes(types)`

RETURNS TECHNOLOGIES MATCHING ANY OF THE SPECIFIED TYPES.

```typescript
import { getTechsByTypes } from '@sparring/tech-catalog/core';

const techs = getTechsByTypes(['Framework', 'Librería']);
```

#### `getSimpleTechnologies()`

RETURNS ALL NON-STACK TECHNOLOGIES.

```typescript
import { getSimpleTechnologies } from '@sparring/tech-catalog/core';

const simple = getSimpleTechnologies();
```

#### `getStacks()`

RETURNS ALL STACK TECHNOLOGIES WITH THEIR COMPONENTS.

```typescript
import { getStacks } from '@sparring/tech-catalog/core';

const stacks = getStacks();
stacks.forEach((stack) => {
  console.log(stack.nombre);
  console.log(stack.componentes);
});
```

#### `getCategories()`

RETURNS ALL AVAILABLE TECHNOLOGY CATEGORIES.

```typescript
import { getCategories } from '@sparring/tech-catalog/core';

const categories = getCategories();
// ['LENGUAJE', 'FRAMEWORK', 'LIBRERÍA', ...]
```

#### `getTechByName(name)`

FINDS A TECHNOLOGY BY EXACT NAME (CASE-INSENSITIVE).

```typescript
import { getTechByName } from '@sparring/tech-catalog/core';

const tech = getTechByName('JavaScript');
const alsoFound = getTechByName('javascript'); // SAME RESULT
```

#### `getTechByNameStrict(name)`

FINDS A TECHNOLOGY BY EXACT NAME (CASE-SENSITIVE).

```typescript
import { getTechByNameStrict } from '@sparring/tech-catalog/core';

const tech = getTechByNameStrict('JavaScript'); // FOUND
const notFound = getTechByNameStrict('javascript'); // UNDEFINED
```

#### `getTechsByPartialName(partialName, caseSensitive?)`

FINDS ALL TECHNOLOGIES WHOSE NAMES CONTAIN THE SEARCH STRING.

```typescript
import { getTechsByPartialName } from '@sparring/tech-catalog/core';

const techs = getTechsByPartialName('Script');
// RETURNS: JAVASCRIPT, TYPESCRIPT, ETC.
```

#### `techExists(name)`

CHECKS IF A TECHNOLOGY EXISTS IN THE CATALOG.

```typescript
import { techExists } from '@sparring/tech-catalog/core';

if (techExists('React')) {
  console.log('REACT IS IN THE CATALOG');
}
```

#### `getStatistics()`

RETURNS STATISTICAL INFORMATION ABOUT THE CATALOG.

```typescript
import { getStatistics } from '@sparring/tech-catalog/core';

const stats = getStatistics();
console.log(stats.total);
console.log(stats.byCategory);
console.log(stats.totalStacks);
```

#### `getCountByCategory(category)`

RETURNS THE NUMBER OF TECHNOLOGIES IN A SPECIFIC CATEGORY.

```typescript
import { getCountByCategory } from '@sparring/tech-catalog/core';

const frameworkCount = getCountByCategory('Framework');
```

#### `getMostPopularCategory()`

RETURNS THE CATEGORY WITH THE MOST TECHNOLOGIES.

```typescript
import { getMostPopularCategory } from '@sparring/tech-catalog/core';

const result = getMostPopularCategory();
console.log(result.category); // E.G., 'FRAMEWORK'
console.log(result.count); // E.G., 250
```

### SEARCH MODULE

#### `searchTech(query, options?)`

SEARCHES FOR TECHNOLOGIES WITH OPTIONAL FUZZY MATCHING.

```typescript
import { searchTech } from '@sparring/tech-catalog/search';

// BASIC FUZZY SEARCH
const results = searchTech('recat');

// WITH OPTIONS
const results = searchTech('react', {
  fuzzy: true,
  caseSensitive: false,
  maxResults: 10,
  categories: ['Framework', 'Librería'],
});

// RESULT STRUCTURE
results.forEach((result) => {
  console.log(result.technology.nombre);
  console.log(result.score); // SIMILARITY SCORE (0-1)
  console.log(result.matches); // MATCHED FIELDS
});
```

**OPTIONS:**

- `fuzzy` (BOOLEAN, DEFAULT: TRUE): ENABLE FUZZY MATCHING
- `caseSensitive` (BOOLEAN, DEFAULT: FALSE): CASE-SENSITIVE SEARCH
- `maxResults` (NUMBER, DEFAULT: 20): MAXIMUM NUMBER OF RESULTS
- `categories` (ARRAY, OPTIONAL): FILTER BY TECHNOLOGY TYPES

#### `searchByName(name, maxResults?)`

SIMPLE NAME-BASED SEARCH WITH SCORING.

```typescript
import { searchByName } from '@sparring/tech-catalog/search';

const results = searchByName('JavaScript', 5);
```

#### `autocomplete(input, maxSuggestions?, filterByType?)`

RETURNS AUTOCOMPLETE SUGGESTIONS.

```typescript
import { autocomplete } from '@sparring/tech-catalog/search';

// BASIC AUTOCOMPLETE
const suggestions = autocomplete('reac', 5);

// WITH TYPE FILTER
const frameworks = autocomplete('reac', 5, ['Framework']);
```

### FILTERS MODULE

#### `filterTechnologies(criteria)`

FILTERS TECHNOLOGIES BASED ON MULTIPLE CRITERIA.

```typescript
import { filterTechnologies } from '@sparring/tech-catalog/filters';

const results = filterTechnologies({
  types: ['Framework', 'Librería'],
  nameContains: 'React',
  caseSensitive: false,
  excludeStacks: true,
  onlyStacks: false,
});
```

**CRITERIA:**

- `types` (ARRAY): FILTER BY TECHNOLOGY TYPES
- `nameContains` (STRING): NAME MUST CONTAIN THIS STRING
- `caseSensitive` (BOOLEAN): CASE-SENSITIVE NAME MATCHING
- `excludeStacks` (BOOLEAN): EXCLUDE STACK TECHNOLOGIES
- `onlyStacks` (BOOLEAN): ONLY STACK TECHNOLOGIES

#### `getStacksByComponent(componentName)`

FINDS STACKS CONTAINING A SPECIFIC COMPONENT.

```typescript
import { getStacksByComponent } from '@sparring/tech-catalog/filters';

const stacks = getStacksByComponent('React');
// RETURNS STACKS LIKE MERN, T3, ETC.
```

#### `getStacksByComponentType(componentType)`

FINDS STACKS WITH COMPONENTS OF A SPECIFIC TYPE.

```typescript
import { getStacksByComponentType } from '@sparring/tech-catalog/filters';

const stacks = getStacksByComponentType('Framework');
```

#### `getTechnologiesUsedInStacks()`

RETURNS ALL TECHNOLOGIES THAT APPEAR IN STACKS.

```typescript
import { getTechnologiesUsedInStacks } from '@sparring/tech-catalog/filters';

const usedInStacks = getTechnologiesUsedInStacks();
```

#### `getStandaloneTechnologies()`

RETURNS TECHNOLOGIES NOT USED IN ANY STACK.

```typescript
import { getStandaloneTechnologies } from '@sparring/tech-catalog/filters';

const standalone = getStandaloneTechnologies();
```

#### `sortByName(technologies, ascending?)`

SORTS TECHNOLOGIES ALPHABETICALLY.

```typescript
import { sortByName } from '@sparring/tech-catalog/filters';

const sorted = sortByName(technologies, true); // A-Z
const reversed = sortByName(technologies, false); // Z-A
```

#### `sortByType(technologies, typeOrder?)`

SORTS TECHNOLOGIES BY TYPE, THEN BY NAME.

```typescript
import { sortByType } from '@sparring/tech-catalog/filters';

const sorted = sortByType(technologies);

// CUSTOM ORDER
const customSorted = sortByType(technologies, [
  'Stack',
  'Framework',
  'Lenguaje',
]);
```

### VALIDATORS MODULE

#### `validateTechnology(tech)`

VALIDATES A TECHNOLOGY OBJECT.

```typescript
import { validateTechnology } from '@sparring/tech-catalog/validators';

const result = validateTechnology({
  nombre: 'React',
  tipo: 'Framework',
});

if (!result.isValid) {
  console.error(result.errors);
}
```

#### `isValidTechnologyType(type)`

CHECKS IF A STRING IS A VALID TECHNOLOGY TYPE.

```typescript
import { isValidTechnologyType } from '@sparring/tech-catalog/validators';

if (isValidTechnologyType('Framework')) {
  // VALID TYPE
}
```

#### `validateStack(tech)`

VALIDATES A STACK TECHNOLOGY STRUCTURE.

```typescript
import { validateStack } from '@sparring/tech-catalog/validators';

const result = validateStack(stackTech);
```

#### `validateCatalog(technologies)`

CHECKS CATALOG CONSISTENCY AND INTEGRITY.

```typescript
import { validateCatalog } from '@sparring/tech-catalog/validators';
import { getTechnologies } from '@sparring/tech-catalog/core';

const result = validateCatalog(getTechnologies());
console.log(result.errors);
console.log(result.warnings);
```

#### `sanitizeName(name)`

CLEANS AND NORMALIZES A TECHNOLOGY NAME.

```typescript
import { sanitizeName } from '@sparring/tech-catalog/validators';

const clean = sanitizeName('  React   Native  ');
// 'REACT NATIVE'
```

#### `validateSearchOptions(options)`

VALIDATES SEARCH OPTIONS OBJECT.

```typescript
import { validateSearchOptions } from '@sparring/tech-catalog/validators';

const result = validateSearchOptions({
  fuzzy: true,
  maxResults: 10,
  categories: ['Framework'],
});
```

## USAGE EXAMPLES

### BASIC CATALOG ACCESS

```typescript
import { getTechnologies, getMetadata } from '@sparring/tech-catalog';

const metadata = getMetadata();
console.log(`${metadata.nombre} v${metadata.version}`);

const technologies = getTechnologies();
console.log(`TOTAL: ${technologies.length} TECHNOLOGIES`);
```

### SEARCH WITH TYPO TOLERANCE

```typescript
import { searchTech } from '@sparring/tech-catalog';

// USER TYPES 'RECAT' INSTEAD OF 'REACT'
const results = searchTech('recat', { maxResults: 5 });

results.forEach((result) => {
  console.log(
    `${result.technology.nombre} (${(result.score * 100).toFixed(0)}% MATCH)`
  );
});
```

### AUTOCOMPLETE IMPLEMENTATION

```typescript
import { autocomplete } from '@sparring/tech-catalog';

function handleInputChange(userInput: string) {
  const suggestions = autocomplete(userInput, 10);
  return suggestions.map((tech) => ({
    label: tech.nombre,
    category: tech.tipo,
  }));
}
```

### FILTER FRAMEWORKS BY NAME

```typescript
import { filterTechnologies } from '@sparring/tech-catalog';

const reactFrameworks = filterTechnologies({
  types: ['Framework'],
  nameContains: 'React',
  excludeStacks: true,
});

reactFrameworks.forEach((tech) => {
  console.log(tech.nombre);
});
```

### EXPLORE TECHNOLOGY STACKS

```typescript
import { getStacks } from '@sparring/tech-catalog';

const stacks = getStacks();

stacks.forEach((stack) => {
  console.log(`\n${stack.nombre}:`);
  stack.componentes.forEach((comp) => {
    console.log(`  - ${comp.nombre} (${comp.tipo})`);
  });
});
```

### VALIDATE USER INPUT

```typescript
import {
  validateTechnology,
  sanitizeName,
} from '@sparring/tech-catalog/validators';

function addCustomTechnology(userInput: any) {
  // SANITIZE NAME
  if (userInput.nombre) {
    userInput.nombre = sanitizeName(userInput.nombre);
  }

  // VALIDATE
  const validation = validateTechnology(userInput);

  if (!validation.isValid) {
    throw new Error(`INVALID: ${validation.errors.join(', ')}`);
  }

  return userInput;
}
```

### GET STATISTICS

```typescript
import { getStatistics } from '@sparring/tech-catalog';

const stats = getStatistics();

console.log(`TOTAL TECHNOLOGIES: ${stats.total}`);
console.log(`STACKS: ${stats.totalStacks}`);
console.log(`SIMPLE TECHNOLOGIES: ${stats.totalSimpleTechnologies}`);

console.log('\nBY CATEGORY:');
Object.entries(stats.byCategory).forEach(([category, count]) => {
  console.log(`  ${category}: ${count}`);
});
```

## TECHNOLOGY CATEGORIES

THE CATALOG ORGANIZES TECHNOLOGIES INTO 8 DISTINCT CATEGORIES:

1. **LANGUAGE** - PROGRAMMING LANGUAGES
   - JAVASCRIPT, TYPESCRIPT, PYTHON, RUST, GO, ETC.

2. **FRAMEWORK** - FRAMEWORKS
   - REACT, ANGULAR, VUE, SVELTE, NEXT.JS, ETC.

3. **LIBRARY** - LIBRARIES
   - LODASH, AXIOS, REACT QUERY, ZUSTAND, ETC.

4. **DATABASE** - DATABASES
   - POSTGRESQL, MONGODB, REDIS, MYSQL, SUPABASE, ETC.

5. **SERVER** - SERVERS
   - NGINX, APACHE, CADDY, TOMCAT, ETC.

6. **TOOL** - TOOLS
   - WEBPACK, VITE, ESLINT, PRETTIER, DOCKER, ETC.

7. **PLATFORM** - PLATFORMS
   - AWS, VERCEL, NETLIFY, HEROKU, CLOUDFLARE, ETC.

8. **STACK** - TECHNOLOGY STACKS
   - MERN, MEAN, T3, LAMP, JAMSTACK, ETC.

## DATA STRUCTURE

### SIMPLE TECHNOLOGY

```typescript
{
  nombre: 'React',
  tipo: 'Framework'
}
```

### STACK TECHNOLOGY

```typescript
{
  nombre: 'MERN',
  tipo: 'Stack',
  componentes: [
    { nombre: 'MongoDB', tipo: 'Database' },
    { nombre: 'Express', tipo: 'Framework' },
    { nombre: 'React', tipo: 'Framework' },
    { nombre: 'Node.js', tipo: 'Platform' }
  ]
}
```

### CATALOG METADATA

```typescript
{
  nombre: 'SPARRING Technology Catalog',
  version: '3.0',
  total_tecnologias: 1094,
  categorias: {
    Language: 'PROGRAMMING LANGUAGES...',
    Framework: 'WEB AND APPLICATION FRAMEWORKS...',
    // ...
  }
}
```

## TYPESCRIPT SUPPORT

FULL TYPESCRIPT SUPPORT WITH COMPREHENSIVE TYPE DEFINITIONS:

```typescript
import type {
  Technology,
  SimpleTechnology,
  StackTechnology,
  TechnologyType,
  SearchOptions,
  SearchResult,
  FilterCriteria,
  ValidationResult,
} from '@sparring/tech-catalog';

// TYPE GUARD
import { isStackTechnology } from '@sparring/tech-catalog';

function processTechnology(tech: Technology) {
  if (isStackTechnology(tech)) {
    // TYPE IS NARROWED TO STACKTECHNOLOGY
    console.log(tech.componentes);
  } else {
    // TYPE IS SIMPLETECHNOLOGY
    console.log(tech.nombre);
  }
}
```

### AVAILABLE TYPES

- `Technology` - UNION TYPE OF SIMPLETECHNOLOGY AND STACKTECHNOLOGY
- `SimpleTechnology` - NON-STACK TECHNOLOGY
- `StackTechnology` - STACK WITH COMPONENTS
- `TechnologyType` - CATEGORY ENUM
- `StackComponent` - COMPONENT WITHIN A STACK
- `Catalog` - COMPLETE CATALOG STRUCTURE
- `CatalogMetadata` - METADATA STRUCTURE
- `SearchOptions` - SEARCH CONFIGURATION
- `SearchResult` - SEARCH RESULT WITH SCORE
- `FilterCriteria` - FILTER CONFIGURATION
- `ValidationResult` - VALIDATION RESPONSE
- `CatalogStatistics` - STATISTICS STRUCTURE

## LINKS

- **HOMEPAGE**: https://www.686f6c61.dev
- **REPOSITORY**: https://github.com/686f6c61/npm-tech-catalog
- **ISSUES**: https://github.com/686f6c61/npm-tech-catalog/issues

## CONTRIBUTING

CONTRIBUTIONS ARE WELCOME! PLEASE FOLLOW THESE GUIDELINES:

1. FORK THE REPOSITORY AT https://github.com/686f6c61/npm-tech-catalog
2. CREATE A FEATURE BRANCH
3. MAKE YOUR CHANGES
4. ADD TESTS FOR NEW FUNCTIONALITY
5. ENSURE ALL TESTS PASS
6. SUBMIT A PULL REQUEST

## LICENSE

MIT LICENSE - SEE LICENSE FILE FOR DETAILS.

---

MADE WITH PRECISION BY SPARRING | https://www.686f6c61.dev
