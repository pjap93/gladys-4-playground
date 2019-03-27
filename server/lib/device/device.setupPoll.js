const { DEVICE_POLL_FREQUENCIES } = require('../../utils/constants');

/**
 * @description Setup poll setInterval
 * @example
 * setupPoll();
 */
function setupPoll() {
  // poll devices who need to be polled every minutes
  setInterval(() => {
    if (this.devicesByPollFrequency[DEVICE_POLL_FREQUENCIES.EVERY_MINUTES]) {
      this.devicesByPollFrequency[DEVICE_POLL_FREQUENCIES.EVERY_MINUTES].forEach(this.poll);
    }
  }, DEVICE_POLL_FREQUENCIES.EVERY_MINUTES);
}

module.exports = {
  setupPoll,
};
