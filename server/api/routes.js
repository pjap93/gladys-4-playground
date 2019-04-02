const express = require('express');
const UserController = require('./controllers/user.controller');
const HouseController = require('./controllers/house.controller');
const LightController = require('./controllers/light.controller');
const MessageController = require('./controllers/message.controller');
const SessionController = require('./controllers/session.controller');
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
  const houseController = HouseController(gladys);
  const messageController = MessageController(gladys);
  const variableController = VariableController(gladys);
  const sessionController = SessionController(gladys);
  const authMiddleware = AuthMiddleware(gladys.config.jwtSecret, 'dashboard:write', gladys.cache, gladys.user);
  const resetPasswordAuthMiddleware = AuthMiddleware(gladys.config.jwtSecret, 'reset-password:write', gladys.cache, gladys.user);

  // enable cross origin requests
  router.use(CorsMiddleware);

  // open routes
  router.post('/api/v1/login', userController.login);
  router.post('/api/v1/access_token', userController.getAccessToken);
  router.post('/api/v1/forgot_password', userController.forgotPassword);
  router.post('/api/v1/reset_password', resetPasswordAuthMiddleware, userController.resetPassword);

  // todo: add check if one account already exist.
  router.post('/api/v1/user', userController.create);

  // we load all services routes
  setupServiceRoutes(gladys, router, authMiddleware);

  // after this, all requests to /api must have authenticated
  router.use('/api/*', authMiddleware);

  // house
  router.post('/api/v1/house', houseController.create);
  router.patch('/api/v1/house/:house_selector', houseController.update);
  router.get('/api/v1/house', houseController.get);
  router.delete('/api/v1/house/:house_selector', houseController.destroy);

  // message
  router.post('/api/v1/message', messageController.create);

  // user
  router.get('/api/v1/me', userController.getMySelf);
  router.patch('/api/v1/me', userController.updateMySelf);
  router.get('/api/v1/me/picture', userController.getMyPicture);

  // variable
  router.post('/api/v1/service/:service_name/:variable_key', variableController.setForLocalService);

  // session
  router.post('/api/v1/session/:session_id/revoke', sessionController.revoke);

  // light
  router.post('/api/v1/light/:device_selector/on', lightController.turnOn);

  return router;
}

module.exports = {
  setupRoutes,
};
