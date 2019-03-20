const express = require('express');
const path = require('path');
const errorMiddleware = require('./middlewares/errorMiddleware');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware');
const logger = require('../utils/logger');
const { setupRoutes } = require('./routes');

const STATIC_FOLDER = path.join(__dirname, '/../static');

/**
 * @description Start Gladys server
 * @param {Object} gladys - Gladys library.
 * @param {number} port - Server port to listen to.
 * @param {Object} options - Options to start the server.
 * @example
 * server.start(gladys, 1337);
 */
function start(gladys, port, options) {
  const app = express();

  // parse json
  app.use(express.json());

  if (options.serveFront) {
    // serving static app
    app.use(express.static(STATIC_FOLDER));
  }

  // loading app
  app.use(setupRoutes(gladys));

  // if not API routes was found
  app.use('/api', notFoundMiddleware);

  if (options.serveFront) {
    // handle every other route with index.html
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(STATIC_FOLDER, 'index.html'));
    });
  }

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
