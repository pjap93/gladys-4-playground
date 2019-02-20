const express = require('express');
const UserController = require('./controllers/user.controller');
const MessageController = require('./controllers/message.controller');
const AuthMiddleware = require('./middlewares/authMiddleware');
const CorsMiddleware = require('./middlewares/corsMiddleware');

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

  // enable cross origin requests
  router.use(CorsMiddleware);

  // open routes
  router.post('/api/v1/login', userController.login);

  // todo: add check if one account already exist.
  router.post('/api/v1/user', userController.create);

  // after this, all requests to /api must have authenticated
  router.use('/api/*', AuthMiddleware(gladys.config.jwtSecret, 'dashboard:write', gladys.cache, gladys.user));

  // message
  router.post('/api/v1/message', messageController.create);

  router.get('/api/v1/me', userController.getMySelf);

  return router;
}

module.exports = {
  setupRoutes,
};
