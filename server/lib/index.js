const { generateJwtSecret } = require('../utils/jwtSecret');
const { Cache } = require('../utils/cache');
const Brain = require('./brain');
const Event = require('./event');
const MessageHandler = require('./message');
const Service = require('./service');
const Session = require('./session');
const User = require('./user');

const Gladys = function Gladys() {
  // CONFIG
  const config = {
    jwtSecret: process.env.JWT_SECRET || generateJwtSecret(),
  };

  const brain = new Brain();
  const cache = new Cache();
  const event = new Event();
  const service = new Service();
  const message = new MessageHandler(event, brain, service);
  const user = new User();
  const session = new Session(config.jwtSecret);

  const gladys = {
    event,
    message,
    user,
    service,
    session,
    cache,
    config,
    start: async () => {
      await brain.load();
      await service.load(gladys);
      await service.start();
    },
  };

  // freeze Gladys object to ensure it's not modified
  return Object.freeze(gladys);
};

module.exports = Gladys;
