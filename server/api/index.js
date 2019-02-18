const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware');
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

  // parse json
  app.use(express.json());

  // loading app
  app.use(setupRoutes(gladys));

  // if not routes was found
  app.use(notFoundMiddleware);

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
