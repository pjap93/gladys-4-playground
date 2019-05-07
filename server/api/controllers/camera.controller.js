const asyncMiddleware = require('../middlewares/asyncMiddleware');


module.exports = function HouseController(gladys) {
  /**
   * @api {post} /api/v1/camera/:camera_selector/image setImage
   * @apiName setImage
   * @apiGroup Camera
   */
  async function setImage(req, res) {
    await gladys.device.camera.setImage(req.params.camera_selector, req.body.image);
    res.status(201).json({
      success: true,
    });
  }

  /**
   * @api {get} /api/v1/camera/:camera_selector/image getImage
   * @apiName getImage
   * @apiGroup Camera
   */
  async function getImage(req, res) {
    const image = await gladys.device.camera.getImage(req.params.camera_selector);
    res.send(image);
  }

  return Object.freeze({
    setImage: asyncMiddleware(setImage),
    getImage: asyncMiddleware(getImage),
  });
};
