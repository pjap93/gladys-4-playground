const { generateJwtSecret } = require('../utils/jwtSecret');
const { Cache } = require('../utils/cache');
const Area = require('./area');
const Brain = require('./brain');
const Calendar = require('./calendar');
const Dashboard = require('./dashboard');
const Event = require('./event');
const House = require('./house');
const Location = require('./location');
const MessageHandler = require('./message');
const Service = require('./service');
const Session = require('./session');
const User = require('./user');
const Device = require('./device');
const Room = require('./room');
const StateManager = require('./state');
const Scene = require('./scene');
const TriggerManager = require('./trigger');
const Variable = require('./variable');
const services = require('../services');
const Weather = require('./weather');

/**
 * @description Start a new Gladys instance
 * @param {Object} config - Configuration when starting Gladys.
 * @param {string} [config.jwtSecret] - A secret to generate jsonwebtoken.
 * @param {boolean} [config.disableService] - If true, disable the loading of services.
 * @param {boolean} [config.disableBrainLoading] - If true, disable the loading of the brain.
 * @param {boolean} [config.disableRoomLoading] - If true, disable the loading of the rooms.
 * @param {boolean} [config.disableTriggerLoading] - If true, disable the loading of the triggers.
 * @param {boolean} [config.disableSceneLoading] - If true, disable the loading of the scenes.
 * @param {boolean} [config.disableDeviceLoading] - If true, disable the loading of devices in RAM.
 * @param {boolean} [config.disableUserLoading] - If true, disable the loading of users in RAM.
 * @example
 * const gladys = Gladys();
 */
function Gladys(config = {}) {
  config.jwtSecret = config.jwtSecret || generateJwtSecret();

  const brain = new Brain();
  const cache = new Cache();
  const calendar = new Calendar();
  const event = new Event();
  const area = new Area();
  const dashboard = new Dashboard();
  const stateManager = new StateManager(event);
  const house = new House(event);
  const room = new Room(brain);
  const service = new Service(services, stateManager);
  const location = new Location();
  const message = new MessageHandler(event, brain, service);
  const session = new Session(config.jwtSecret, cache);
  const user = new User(session, stateManager);
  const device = new Device(event, message, stateManager, service);
  const scene = new Scene(stateManager, event);
  const trigger = new TriggerManager(event, stateManager, scene);
  const variable = new Variable();
  const weather = new Weather(service, event, message);

  const gladys = {
    version: '0.1.0', // todo, read package.json
    area,
    calendar,
    dashboard,
    event,
    house,
    location,
    message,
    user,
    service,
    scene,
    session,
    cache,
    config,
    device,
    room,
    stateManager,
    trigger,
    variable,
    weather,
    start: async () => {
      if (!config.disableBrainLoading) {
        await brain.load();
      }
      if (!config.disableService) {
        await service.load(gladys);
        await service.startAll();
      }
      if (!config.disableTriggerLoading) {
        await trigger.init();
      }
      if (!config.disableSceneLoading) {
        await scene.init();
      }
      if (!config.disableDeviceLoading) {
        await device.init();
      }
      if (!config.disableUserLoading) {
        await user.init();
      }
      if (!config.disableRoomLoading) {
        await room.init();
      }
    },
  };

  // freeze Gladys object to ensure it's not modified
  return Object.freeze(gladys);
}

module.exports = Gladys;
