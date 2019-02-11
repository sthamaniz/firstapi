/**
 * creating the migration
 */

import config from './config/config';

const knexConfig = {
  ...config.database,
  migration : {
    tableName : 'migration_list',
    directory : './src/migrations',
    stub: './src/stubs/migration.stub',
    extension : ['ts']
  }

};

module.exports = knexConfig;