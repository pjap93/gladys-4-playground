const logger = require('../../../utils/logger');

const MockedClient = {
  create: function create() {
    return {
      post: url => Promise.resolve(logger.info(`Turning On Light, calling ${url}`)),
      get: url => Promise.resolve(5),
    };
  },
};

module.exports = MockedClient;
