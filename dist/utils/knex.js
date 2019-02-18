"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex");
const config_1 = require("../config/config");
const object_1 = require("../utils/object");
const knexConfig = Object.assign({}, config_1.default.database, { postProcessResponse: (result) => {
        if (Array.isArray(result)) {
            return result.map(row => object_1.toCamelCase(row));
        }
        return object_1.toCamelCase(result);
    }, wrapIdentifier: (value, origImpl) => origImpl(object_1.toSnakeCase(value)) });
exports.default = knex(knexConfig);
//# sourceMappingURL=knex.js.map