const asyncMiddleware = require('../middlewares/asyncMiddleware');

/**
 * @apiDefine AreaParam
 * @apiParam {String} name Name of the area.
 * @apiParam {String} [selector] Selector of the area.
 * @apiParam {Double} [latitude] Latitude of the center of the area.
 * @apiParam {Double} [longitude] Longitude of the center of the area.
 * @apiParam {Integer} [radius] Radius of the area in meter.
 * @apiParam {String} [color] Hexadecimal color of the area.
 */

/**
 * @apiDefine AreaSuccess
 * @apiSuccess {String} name Name of the area.
 * @apiSuccess {String} [selector] Selector of the area.
 * @apiSuccess {Double} [latitude] Latitude of the center of the area.
 * @apiSuccess {Double} [longitude] Longitude of the center of the area.
 * @apiSuccess {Integer} [radius] Radius of the area in meter.
 * @apiSuccess {String} [color] Hexadecimal color of the area.
 */


module.exports = function AreaController(gladys) {
  /**
   * @api {post} /api/v1/area create
   * @apiName create
   * @apiGroup Area
   * @apiUse AreaParam
   * @apiUse AreaSuccess
   */
  async function create(req, res) {
    const area = await gladys.area.create(req.body);
    res.status(201).json(area);
  }

  /**
   * @api {patch} /api/v1/area/:area_selector update
   * @apiName update
   * @apiGroup Area
   *
   * @apiUse AreaParam
   * @apiUse AreaSuccess
   */
  async function update(req, res) {
    const area = await gladys.area.update(req.params.area_selector, req.body);
    res.json(area);
  }

  /**
   * @api {delete} /api/v1/area/:area_selector delete
   * @apiName delete
   * @apiGroup Area
   */
  async function destroy(req, res) {
    await gladys.area.destroy(req.params.area_selector);
    res.json({
      success: true,
    });
  }

  /**
   * @api {get} /api/v1/area get
   * @apiName get
   * @apiGroup Area
   */
  async function get(req, res) {
    const areas = await gladys.area.get();
    res.json(areas);
  }

  return Object.freeze({
    create: asyncMiddleware(create),
    destroy: asyncMiddleware(destroy),
    update: asyncMiddleware(update),
    get: asyncMiddleware(get),
  });
};
