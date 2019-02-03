import * as camelCase from 'camelize';

/**
 * Make objects value into camelCase.
 *
 * @param {Object} obj
 * @returns {Object}
 */
export function toCamelCase(obj: any) {
  return camelCase(obj);
}

/**
 * Make objects value into snake_case.
 *
 * @param {Object} obj
 * @returns {Object}
 */
export function toSnakeCase(obj: any) {
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
