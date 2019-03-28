const db = require('../../models');

/**
 * @description Get the value of a variable
 * @param {string} key - The unique key of the variable.
 * @param {string} [serviceId] - The unique ID of a service, or null.
 * @returns {Promise} - Resolve with the variable.
 * @example
 * variable.getValue('API_KEY', '5bbaaea4-2ad6-4f3e-9bbc-819b9d310309');
 */
async function getValue(key, serviceId = null) {
  const variable = await db.Variable.findOne({
    where: {
      name: key,
      service_id: serviceId,
    },
  });

  // if variable was not found
  if (!variable) {
    return null;
  }

  // else, return the value
  return variable.value;
}

module.exports = {
  getValue,
};
