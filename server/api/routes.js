const express = require('express');
const AreaController = require('./controllers/area.controller');
const CalendarController = require('./controllers/calendar.controller');
const CameraController = require('./controllers/camera.controller');
const DashboardController = require('./controllers/dashboard.controller');
const DeviceController = require('./controllers/device.controller');
const UserController = require('./controllers/user.controller');
const HouseController = require('./controllers/house.controller');
const LightController = require('./controllers/light.controller');
const LocationController = require('./controllers/location.controller');
const MessageController = require('./controllers/message.controller');
const RoomController = require('./controllers/room.controller');
const SessionController = require('./controllers/session.controller');
const ServiceController = require('./controllers/service.controller');
const SceneController = require('./controllers/scene.controller');
const TriggerController = require('./controllers/trigger.controller');
const VariableController = require('./controllers/variable.controller');
const WeatherController = require('./controllers/weather.controller');
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
  const areaController = AreaController(gladys);
  const calendarController = CalendarController(gladys);
  const cameraController = CameraController(gladys);
  const dashboardController = DashboardController(gladys);
  const deviceController = DeviceController(gladys);
  const lightController = LightController(gladys);
  const locationController = LocationController(gladys);
  const userController = UserController(gladys);
  const houseController = HouseController(gladys);
  const messageController = MessageController(gladys);
  const roomController = RoomController(gladys);
  const variableController = VariableController(gladys);
  const sessionController = SessionController(gladys);
  const serviceController = ServiceController(gladys);
  const sceneController = SceneController(gladys);
  const triggerController = TriggerController(gladys);
  const weatherController = WeatherController(gladys);
  const authMiddleware = AuthMiddleware('dashboard:write', gladys);
  const resetPasswordAuthMiddleware = AuthMiddleware('reset-password:write', gladys);

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

  // area
  router.post('/api/v1/area', areaController.create);
  router.get('/api/v1/area', areaController.get);
  router.patch('/api/v1/area/:area_selector', areaController.update);
  router.delete('/api/v1/area/:area_selector', areaController.destroy);

  // calendar
  router.post('/api/v1/calendar', calendarController.create);
  router.get('/api/v1/calendar', calendarController.get);
  router.get('/api/v1/calendar/event', calendarController.getEvents);
  router.patch('/api/v1/calendar/:calendar_selector', calendarController.update);
  router.delete('/api/v1/calendar/:calendar_selector', calendarController.destroy);
  router.post('/api/v1/calendar/:calendar_selector/event', calendarController.createEvent);
  router.patch('/api/v1/calendar/event/:calendar_event_selector', calendarController.updateEvent);
  router.delete('/api/v1/calendar/event/:calendar_event_selector', calendarController.destroyEvent);

  // camera
  router.get('/api/v1/camera/:camera_selector/image', cameraController.getImage);
  router.post('/api/v1/camera/:camera_selector/image', cameraController.setImage);

  // dashboard
  router.get('/api/v1/dashboard', dashboardController.get);
  router.post('/api/v1/dashboard', dashboardController.create);
  router.get('/api/v1/dashboard/:dashboard_selector', dashboardController.getBySelector);
  router.patch('/api/v1/dashboard/:dashboard_selector', dashboardController.update);
  router.delete('/api/v1/dashboard/:dashboard_selector', dashboardController.destroy);

  // device
  router.get('/api/v1/device/:device_selector', deviceController.getBySelector);

  // house
  router.post('/api/v1/house', houseController.create);
  router.patch('/api/v1/house/:house_selector', houseController.update);
  router.get('/api/v1/house', houseController.get);
  router.delete('/api/v1/house/:house_selector', houseController.destroy);
  router.get('/api/v1/house/:house_selector/room', houseController.getRooms);
  router.post('/api/v1/house/:house_selector/user/:user_selector/seen', houseController.userSeen);

  // room
  router.get('/api/v1/room', roomController.get);
  router.get('/api/v1/room/:room_selector', roomController.getBySelector);
  router.post('/api/v1/house/:house_selector/room', roomController.create);
  router.patch('/api/v1/room/:room_selector', roomController.update);
  router.delete('/api/v1/room/:room_selector', roomController.destroy);

  // message
  router.post('/api/v1/message', messageController.create);
  router.get('/api/v1/message', messageController.get);

  // service
  router.post('/api/v1/service/:service_name/start', serviceController.start);
  router.post('/api/v1/service/:service_name/stop', serviceController.stop);

  // user
  router.get('/api/v1/user', userController.getUsers);
  router.get('/api/v1/me', userController.getMySelf);
  router.patch('/api/v1/me', userController.updateMySelf);
  router.get('/api/v1/me/picture', userController.getMyPicture);

  // location
  router.post('/api/v1/user/:user_selector/location', locationController.create);
  router.get('/api/v1/user/:user_selector/location', locationController.getLocationsUser);

  // variable
  router.post('/api/v1/service/:service_name/variable/:variable_key', variableController.setForLocalService);
  router.post('/api/v1/variable/:variable_key', variableController.setValue);

  // session
  router.post('/api/v1/session/:session_id/revoke', sessionController.revoke);
  router.post('/api/v1/session/api_key', sessionController.createApiKey);
  router.get('/api/v1/session', sessionController.get);

  // light
  router.post('/api/v1/light/:device_selector/on', lightController.turnOn);

  // scene
  router.post('/api/v1/scene', sceneController.create);
  router.get('/api/v1/scene', sceneController.get);
  router.get('/api/v1/scene/:scene_selector', sceneController.getBySelector);
  router.patch('/api/v1/scene/:scene_selector', sceneController.update);
  router.delete('/api/v1/scene/:scene_selector', sceneController.destroy);
  router.post('/api/v1/scene/:scene_selector/start', sceneController.start);

  // trigger
  router.post('/api/v1/trigger', triggerController.create);
  router.get('/api/v1/trigger', triggerController.get);
  router.patch('/api/v1/trigger/:trigger_selector', triggerController.update);
  router.delete('/api/v1/trigger/:trigger_selector', triggerController.destroy);

  // weather
  router.get('/api/v1/user/:user_selector/weather', weatherController.getByUser);
  router.get('/api/v1/house/:house_selector/weather', weatherController.getByHouse);

  return router;
}

module.exports = {
  setupRoutes,
};
