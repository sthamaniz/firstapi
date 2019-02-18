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

/**
 * exclude the attributes from the given object
 * 
 * @param {Object} obj
 * @param {Array} excludeAttr
 * @return {Object}
 */
export function excludeAttr(obj:any, excludeAttr:any[]) {
  const result: any = {};

  Object.keys(obj).forEach((key: string) => {
    if (!excludeAttr.includes(key)) {
      result[key] = obj[key];
    }
  });

  return result;
}
