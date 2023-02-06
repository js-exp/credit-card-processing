import jsonschema from 'jsonschema';

/**
 * @description - validate schema
 * @params {object} - input schema
 * @params {object} - expected schema
 * @returns {boolean} -  true if valid
 */
function validate (object, schema) {
  return jsonschema.validate(object, schema).errors.length === 0;
}

/**
 * @description - give errors if schama is not valid
 * @params {object} - input schema
 * @params {object} - expected schema
 * @returns {array} -  list of errors
 */
function getErrors (object, schema) {
  return jsonschema.validate(object, schema).errors;
}

export { validate, getErrors };
