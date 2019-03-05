import * as Joi from 'joi';

/**
 * Validates a given data against predefined schema.
 *
 * @param {object} data
 * @param {object} schema
 * @returns {Promise<object>}
 */
export function validate(data: object, schema: object): Promise<object> {

  return new Promise((resolve, reject) => {

    const options = { abortEarly: false };
    const { error, value } = Joi.validate(data, schema, options);
    
    if (error) {

      reject(error);

      return;
    }

    resolve(value);
  });

}