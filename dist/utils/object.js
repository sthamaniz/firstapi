"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const camelCase = require("camelize");
/**
 * Make objects value into camelCase.
 *
 * @param {Object} obj
 * @returns {Object}
 */
function toCamelCase(obj) {
    return camelCase(obj);
}
exports.toCamelCase = toCamelCase;
/**
 * Make objects value into snake_case.
 *
 * @param {Object} obj
 * @returns {Object}
 */
function toSnakeCase(obj) {
    if (!obj) {
        return '';
    }
    const snakeCased = String(obj)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/([a-z])([A-Z])/g, (m, a, b) => a + '_' + b.toLowerCase())
        .replace(/[^A-Za-z0-9]+|_+/g, '_')
        .toLowerCase();
    return snakeCased;
}
exports.toSnakeCase = toSnakeCase;
//# sourceMappingURL=object.js.map