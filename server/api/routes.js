const express = require('express');
const UserController = require('./controllers/user.controller');

/**
 * @description Setup the routes.
 * @param {Object} gladys - Gladys library.
 * @returns {Object} Express router.
 * @example
 * setupRoutes(gladys);
 */
function setupRoutes(gladys) {
  const router = express.Router();
  // Configure router
  const userController = UserController(gladys);

  // User routes
  router.post('/api/user', userController.create);
  router.post('/api/login', userController.login);

  return router;
}

module.exports = {
  setupRoutes,
};
