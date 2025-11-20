/**
 * CORE MODULE
 * Essential functions for accessing and querying the technology catalog
 */

export {
  getCatalog,
  getTechnologies,
  getMetadata,
  getTechnologyCount,
} from './catalog';

export {
  getTechsByType,
  getTechsByTypes,
  getSimpleTechnologies,
  getStacks,
  getCategories,
} from './getByType';

export {
  getTechByName,
  getTechByNameStrict,
  getTechsByPartialName,
  techExists,
} from './getByName';

export {
  getStatistics,
  getCountByCategory,
  getMostPopularCategory,
} from './statistics';
