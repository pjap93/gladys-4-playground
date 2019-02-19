const express = require('express');
const UserController = require('./controllers/user.controller');
const MessageController = require('./controllers/message.controller');
const AuthMiddleware = require('./middlewares/authMiddleware');

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
  const messageController = MessageController(gladys);

  // open routes
  router.post('/api/user', userController.create);
  router.post('/api/login', userController.login);

  // after this, all requests to /api must have authenticated
  router.use('/api/*', AuthMiddleware(gladys.config.jwtSecret, 'dashboard:write', gladys.cache));

  // message
  router.post('/api/message', messageController.create);

  router.get('/api/me', userController.getMySelf);

  return router;
}

module.exports = {
  setupRoutes,
};
