const createError = require('http-errors');

module.exports = function errorMiddleware(error, req, res, next) {
  let responseError;

  // If Joi validationError
  if (error && error.isJoi === true) {
    responseError = createError(422, error.details[0].message);
  } else {
    responseError = createError(500, error, {
      expose: true,
    });
  }

  res.status(responseError.statusCode).send(responseError);
};
