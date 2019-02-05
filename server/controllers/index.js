const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./user');
const errorMiddleware = require('../middlewares/errorMiddleware');

const SERVER_PORT = process.env.SERVER_PORT || 1337;

module.exports.start = function start() {
  const app = express();

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  // loading controllers
  app.use(UserController);

  // loading error middleware
  app.use(errorMiddleware);

  app.listen(SERVER_PORT, (port) => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });

  return app;
};
