const { load } = require('./service.load');

module.exports = function Service() {
  return {
    load,
  };
};
