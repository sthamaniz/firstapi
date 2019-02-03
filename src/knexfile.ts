import config from './config/config';

import { toCamelCase, toSnakeCase} from './utils/object';

export const knexConfig = {
  ...config.database,
  postProcessResponse: (result: any) => {
    if (Array.isArray(result)) {
      return result.map(row => toCamelCase(row));
    }
    return toCamelCase(result);
  },
  wrapIdentifier: (value: string, origImpl: any) => origImpl(toSnakeCase(value)),
  migration : {
    tableName : 'migration_list',
    directory : './src/migrations',
    stub: './src/stubs/migration.stub',
    extension : ['ts']
  }
};