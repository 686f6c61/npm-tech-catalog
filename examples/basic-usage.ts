/**
 * BASIC USAGE EXAMPLES
 * Demonstrates common use cases for the tech catalog
 */

import {
  getTechnologies,
  getMetadata,
  getTechByName,
  getTechsByType,
  getStacks,
  searchTech,
  autocomplete,
  filterTechnologies,
  getStatistics,
} from '@sparring/tech-catalog';

// GET CATALOG INFORMATION
console.log('=== CATALOG INFORMATION ===');
const metadata = getMetadata();
console.log(`Catalog: ${metadata.nombre}`);
console.log(`Version: ${metadata.version}`);
console.log(`Total technologies: ${metadata.total_tecnologias}`);

// GET STATISTICS
console.log('\n=== STATISTICS ===');
const stats = getStatistics();
console.log(`Total: ${stats.total}`);
console.log(`By category:`, stats.byCategory);

// FIND TECHNOLOGY BY NAME
console.log('\n=== FIND BY NAME ===');
const javascript = getTechByName('JavaScript');
if (javascript) {
  console.log(`Found: ${javascript.nombre} (${javascript.tipo})`);
}

// GET TECHNOLOGIES BY TYPE
console.log('\n=== GET BY TYPE ===');
const frameworks = getTechsByType('Framework');
console.log(`Frameworks: ${frameworks.length} found`);
console.log(`First 5:`, frameworks.slice(0, 5).map((t) => t.nombre));

// GET ALL STACKS
console.log('\n=== STACKS ===');
const stacks = getStacks();
console.log(`Total stacks: ${stacks.length}`);
if (stacks.length > 0) {
  const firstStack = stacks[0];
  console.log(`Example: ${firstStack.nombre}`);
  console.log(
    `Components:`,
    firstStack.componentes.map((c) => c.nombre)
  );
}

// SEARCH WITH FUZZY MATCHING
console.log('\n=== FUZZY SEARCH ===');
const searchResults = searchTech('Recat', { maxResults: 3 });
console.log('Searching for "Recat" (typo):');
searchResults.forEach((result) => {
  console.log(
    `  - ${result.technology.nombre} (score: ${result.score.toFixed(2)})`
  );
});

// AUTOCOMPLETE
console.log('\n=== AUTOCOMPLETE ===');
const suggestions = autocomplete('java', 5);
console.log('Autocomplete suggestions for "java":');
suggestions.forEach((tech) => {
  console.log(`  - ${tech.nombre} (${tech.tipo})`);
});

// ADVANCED FILTERING
console.log('\n=== ADVANCED FILTERING ===');
const filtered = filterTechnologies({
  types: ['Framework', 'Library'],
  nameContains: 'React',
  excludeStacks: true,
});
console.log('React-related frameworks and libraries:');
filtered.forEach((tech) => {
  console.log(`  - ${tech.nombre} (${tech.tipo})`);
});

// SEARCH WITH CATEGORY FILTER
console.log('\n=== CATEGORY-FILTERED SEARCH ===');
const dbResults = searchTech('SQL', {
  categories: ['Database'],
  maxResults: 5,
});
console.log('Databases matching "SQL":');
dbResults.forEach((result) => {
  console.log(`  - ${result.technology.nombre}`);
});
