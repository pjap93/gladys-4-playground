const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middlewares/errorMiddleware');
const logger = require('../utils/logger');
const { setupRoutes } = require('./routes');

/**
 * @description Start Gladys server
 * @param {Object} gladys - Gladys library.
 * @param {number} port - Server port to listen to.
 * @example
 * server.start(gladys, 1337);
 */
function start(gladys, port) {
  const app = express();

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  // loading app
  app.use(setupRoutes(gladys));

  // loading error middleware
  app.use(errorMiddleware);

  app.listen(port, () => {
    logger.info(`Server listening on port ${port}`);
  });

  return app;
}

module.exports = {
  start,
};
