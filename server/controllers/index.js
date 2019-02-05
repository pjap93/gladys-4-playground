const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./user');

module.exports.start = function start() {
  const app = express();

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  // loading controllers
  app.use(UserController);

  return app;
};
