const asyncMiddleware = require('../middlewares/asyncMiddleware');

/**
 * @apiDefine HouseParam
 * @apiParam {String} name Name of the house.
 * @apiParam {String} [selector] Selector of the house.
 * @apiParam {Number} [latitude] Latitude of the house.
 * @apiParam {Number} [longitude] Longitude of the house.
 */

/**
 * @apiDefine HouseSuccess
 * @apiSuccess {String} name Name of the house.
 * @apiSuccess {String} [selector] Selector of the house.
 * @apiSuccess {Number} [latitude] Latitude of the house.
 * @apiSuccess {Number} [longitude] Longitude of the house.
 */


module.exports = function HouseController(gladys) {
  /**
   * @api {post} /api/v1/house create
   * @apiName create
   * @apiGroup House
   *
   * @apiUse HouseParam
   * @apiUse HouseSuccess
   */
  async function create(req, res) {
    const house = await gladys.house.create(req.body);
    res.status(201).json(house);
  }

  /**
   * @api {get} /api/v1/house get
   * @apiName get
   * @apiGroup House
   */
  async function get(req, res) {
    const houses = await gladys.house.get();
    res.json(houses);
  }

  /**
   * @api {patch} /api/v1/house/:house_selector update
   * @apiName update
   * @apiGroup House
   * @apiUse HouseParam
   * @apiUse HouseSuccess
   */
  async function update(req, res) {
    const house = await gladys.house.update(req.params.house_selector, req.body);
    res.json(house);
  }

  /**
   * @api {delete} /api/v1/house/:house_selector delete
   * @apiName delete
   * @apiGroup House
   *
   */
  async function destroy(req, res) {
    await gladys.house.destroy(req.params.house_selector);
    res.json({
      success: true,
    });
  }

  /**
   * @api {post} /api/v1/house/:house_selector/user/:user_selector/seen userSeen
   * @apiName userSeen
   * @apiGroup House
   *
   */
  async function userSeen(req, res) {
    const user = await gladys.house.userSeen(req.params.house_selector, req.params.user_selector);
    res.json(user);
  }

  /**
   * @api {get} /api/v1/house/:house_selector/room getRooms
   * @apiName getRooms
   * @apiGroup House
   *
   */
  async function getRooms(req, res) {
    const rooms = await gladys.house.getRooms(req.params.house_selector);
    res.json(rooms);
  }

  return Object.freeze({
    create: asyncMiddleware(create),
    destroy: asyncMiddleware(destroy),
    get: asyncMiddleware(get),
    update: asyncMiddleware(update),
    userSeen: asyncMiddleware(userSeen),
    getRooms: asyncMiddleware(getRooms),
  });
};
