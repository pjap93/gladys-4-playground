const Joi = require('joi');

const schema = Joi.object().keys({
  firstname: Joi.string(),
  lastname: Joi.string(),
  email: Joi.string().email().lowercase(),
  password: Joi.string().min(8),
});

function validateCreate(user) {
  const { error, value } = Joi.validate(user, schema, { abortEarly: true, stripUnknown: true, presence: 'required' });

  if (error) {
    throw error;
  }

  return value;
}

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
