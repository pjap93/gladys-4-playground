const Joi = require('joi');

const schema = Joi.object().keys({
  firstname: Joi.string(),
  lastname: Joi.string(),
  email: Joi.string().email().lowercase(),
  password: Joi.string().min(8),
  birthdate: Joi.date(),
  language: Joi.string().allow('en', 'fr'),
  role: Joi.string().allow('admin', 'habitant', 'guest'),
});

/**
 * @private
 * @description This function validate a user passed in parameters for create and returns the user cleaned
 * @name validateCreate
 * @param {Object} user - A new user.
 * @param {string} user.firstname - The firstname of the user.
 * @param {string} user.lastname - The lastname of the user.
 * @param {string} user.email - The email of the user.
 * @param {string} user.password - The password for his account (min 8 characters).
 * @param {string} user.birthdate - The birthdate of the user.
 * @param {string} user.language - The language of the user.
 * @param {string} user.role - The role of the user (admin, habitant, guest).
 * @example
 * validateCreate(user);
 */
function validateCreate(user) {
  const { error, value } = Joi.validate(user, schema, { abortEarly: true, stripUnknown: true, presence: 'required' });

  if (error) {
    throw error;
  }

  return value;
}

/**
 * @private
 * @description This function validate a user passed in parameters for update and returns the user cleaned
 * @name validateCreate
 * @param {Object} user - A new user.
 * @param {string} user.firstname - The firstname of the user.
 * @param {string} user.lastname - The lastname of the user.
 * @param {string} user.email - The email of the user.
 * @param {string} user.password - The password for his account (min 8 characters).
 * @example
 * validateCreate(user);
 */
function validateUpdate(user) {
  const { error, value } = Joi.validate(user, schema, { abortEarly: true, stripUnknown: true });

  if (error) {
    throw error;
  }

  return value;
}

module.exports = {
  validateCreate,
  validateUpdate,
};
