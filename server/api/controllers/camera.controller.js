const asyncMiddleware = require('../middlewares/asyncMiddleware');


module.exports = function HouseController(gladys) {
  /**
   * @api {post} /api/v1/camera/:camera_selector/image set Image
   * @apiName setImage
   * @apiGroup Camera
   *
   * @apiParam {string} image Base64 image of the camera (max 50 ko)
   * @apiParamExample {json} Request-Example:
   * {
   *   "image": "image/png;base64,iVBORw0KGgoAmP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
   * }
   */
  async function setImage(req, res) {
    await gladys.device.camera.setImage(req.params.camera_selector, req.body.image);
    res.status(201).json({
      success: true,
    });
  }

  /**
   * @api {get} /api/v1/camera/:camera_selector/image get Image
   * @apiName getImage
   * @apiGroup Camera
   *
   * @apiSuccessExample {json} Success-Response:
   * image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==
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
