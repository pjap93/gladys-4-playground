const express = require('express');
const UserController = require('./controllers/user.controller');
const LightController = require('./controllers/light.controller');
const MessageController = require('./controllers/message.controller');
const VariableController = require('./controllers/variable.controller');
const AuthMiddleware = require('./middlewares/authMiddleware');
const CorsMiddleware = require('./middlewares/corsMiddleware');
const setupServiceRoutes = require('./servicesRoutes');

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
  const lightController = LightController(gladys);
  const userController = UserController(gladys);
  const messageController = MessageController(gladys);
  const variableController = VariableController(gladys);
  const authMiddleware = AuthMiddleware(gladys.config.jwtSecret, 'dashboard:write', gladys.cache, gladys.user);

  // enable cross origin requests
  router.use(CorsMiddleware);

  // open routes
  router.post('/api/v1/login', userController.login);
  router.post('/api/v1/access_token', userController.getAccessToken);
  router.post('/api/v1/forgot_password', userController.forgotPassword);

  // todo: add check if one account already exist.
  router.post('/api/v1/user', userController.create);

  // we load all services routes
  setupServiceRoutes(gladys, router, authMiddleware);

  // after this, all requests to /api must have authenticated
  router.use('/api/*', authMiddleware);

  // message
  router.post('/api/v1/message', messageController.create);

  // user
  router.get('/api/v1/me', userController.getMySelf);

  // variable
  router.post('/api/v1/service/:service_name/:variable_key', variableController.setForLocalService);

  // light
  router.post('/api/v1/light/:device_selector/on', lightController.turnOn);

  return router;
}

module.exports = {
  setupRoutes,
};
