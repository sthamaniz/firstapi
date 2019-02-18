"use strict";
/**
 * creating the migration
 */
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const knexConfig = Object.assign({}, config_1.default.database, { migration: {
        tableName: 'migration_list',
        directory: './src/migrations',
        stub: './src/stubs/migration.stub',
        extension: ['ts']
    } });
module.exports = knexConfig;
//# sourceMappingURL=knexfile.js.map