const { generateJwtSecret } = require('../utils/jwtSecret');
const { Cache } = require('../utils/cache');
const Brain = require('./brain');
const Event = require('./event');
const House = require('./house');
const Location = require('./location');
const MessageHandler = require('./message');
const Service = require('./service');
const Session = require('./session');
const User = require('./user');
const Device = require('./device');
const StateManager = require('./state');
const SceneManager = require('./scene');
const TriggerManager = require('./trigger');
const Variable = require('./variable');
const services = require('../services');

/**
 * @description Start a new Gladys instance
 * @param {Object} config - Configuration when starting Gladys.
 * @param {string} [config.jwtSecret] - A secret to generate jsonwebtoken.
 * @param {boolean} [config.disableService] - If true, disable the loading of services.
 * @param {boolean} [config.disableBrainLoading] - If true, disable the loading of the brain.
 * @param {boolean} [config.disableTriggerLoading] - If true, disable the loading of the triggers.
 * @param {boolean} [config.disableDeviceLoading] - If true, disabvle the loading of devices in RAM.
 * @example
 * const gladys = Gladys();
 */
function Gladys(config = {}) {
  config.jwtSecret = config.jwtSecret || generateJwtSecret();

  const brain = new Brain();
  const cache = new Cache();
  const event = new Event();
  const house = new House();
  const service = new Service(services);
  const location = new Location();
  const message = new MessageHandler(event, brain, service);
  const session = new Session(config.jwtSecret, cache);
  const user = new User(session);
  const stateManager = new StateManager(event);
  const device = new Device(event, message, stateManager, service);
  const sceneManager = new SceneManager(stateManager);
  const triggerManager = new TriggerManager(event, stateManager, sceneManager);
  const variable = new Variable();

  const gladys = {
    version: '0.1.0', // todo, read package.json
    event,
    house,
    location,
    message,
    user,
    service,
    session,
    cache,
    config,
    device,
    stateManager,
    triggerManager,
    variable,
    start: async () => {
      if (!config.disableBrainLoading) {
        await brain.load();
      }
      if (!config.disableService) {
        await service.load(gladys);
        await service.startAll();
      }
      if (!config.disableTriggerLoading) {
        await triggerManager.init();
      }
      if (!config.disableDeviceLoading) {
        await device.init();
      }
    },
  };

  // freeze Gladys object to ensure it's not modified
  return Object.freeze(gladys);
}

module.exports = Gladys;
