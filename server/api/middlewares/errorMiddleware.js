const { Error422, Error500, Error409 } = require('../../utils/httpErrors');
const logger = require('../../utils/logger');

module.exports = function errorMiddleware(error, req, res, next) {
  let responseError;

  // If Joi validationError
  if (error && error.isJoi === true) {
    responseError = new Error422(error.details[0].message);
  } else if (error && error.name === 'SequelizeValidationError') {
    const errorsArray = [];
    error.errors.forEach((err) => {
      errorsArray.push({
        message: err.message,
        attribute: err.path,
        value: err.value,
        type: err.type,
      });
    });
    responseError = new Error422(errorsArray);
  } else if (error && error.name === 'SequelizeUniqueConstraintError') {
    const errorToReturn = {
      message: error.errors[0].message,
      attribute: error.errors[0].path,
      value: error.errors[0].value,
      type: error.errors[0].type,
    };
    responseError = new Error409(errorToReturn);
  } else {
    logger.trace(error);
    responseError = new Error500(error);
  }

  res.status(responseError.status).send(responseError);
};
