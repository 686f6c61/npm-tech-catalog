import { readFileSync, writeFileSync } from 'fs';

// Read the NPM package
const pkg = await import('@sparring/tech-catalog');

// Create a bundle with all the functions
const bundle = `
// @sparring/tech-catalog - Bundled version
const catalog = ${JSON.stringify(pkg.getTechnologies(), null, 2)};

export function getTechnologies() {
  return catalog;
}

export function getStatistics() {
  const total = catalog.length;
  const byCategory = {};
  let totalStacks = 0;

  catalog.forEach(tech => {
    byCategory[tech.tipo] = (byCategory[tech.tipo] || 0) + 1;
    if (tech.tipo === 'Stack') totalStacks++;
  });

  return {
    total,
    byCategory,
    totalStacks,
    totalSimpleTechnologies: total - totalStacks
  };
}

export function autocomplete(query, limit = 10) {
  if (!query || query.length < 2) return [];

  const q = query.toLowerCase();
  const results = [];

  for (const tech of catalog) {
    const name = tech.nombre.toLowerCase();
    if (name.includes(q) || levenshtein(name, q) <= 2) {
      results.push(tech);
      if (results.length >= limit) break;
    }
  }

  return results;
}

export function getCategories() {
  return [...new Set(catalog.map(t => t.tipo))];
}

export function getCountByCategory(category) {
  return catalog.filter(t => t.tipo === category).length;
}

function levenshtein(a, b) {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}
`;

writeFileSync('./catalog.js', bundle);
console.log('✅ Bundle created: catalog.js');
