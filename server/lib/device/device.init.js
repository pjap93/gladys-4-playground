
/**
 * @description Init devices in local RAM
 * @example
 * gladys.device.init();
 */
async function init() {
  await this.lightManager.init();
}

module.exports = {
  init,
};
