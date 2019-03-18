
module.exports = function HueController(philipsHueLightHandler) {
  /**
   * @api {get} /api/v1/services/philips-hue/bridges Get Philips Hue bridges
   * @apiName GetBridges
   * @apiGroup PhilipsHue
   */
  async function getBridges(req, res) {
    const bridges = await philipsHueLightHandler.getBridges();
    res.json(bridges);
  }

  return {
    'get /api/v1/services/philips-hue/bridges': {
      authenticated: true,
      controller: getBridges,
    },
  };
};
