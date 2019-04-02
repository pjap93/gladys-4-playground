const asyncMiddleware = require('../middlewares/asyncMiddleware');


module.exports = function HouseController(gladys) {
  /**
   * @api {post} /api/house createHouse
   * @apiName createHouse
   * @apiGroup House
   *
   */
  async function create(req, res) {
    const house = await gladys.house.create(req.body);
    res.status(201).json(house);
  }

  /**
   * @api {get} /api/house getHouses
   * @apiName getHouses
   * @apiGroup House
   *
   */
  async function get(req, res) {
    const houses = await gladys.house.get();
    res.json(houses);
  }

  /**
   * @api {patch} /api/house/:house_selector updateHouse
   * @apiName updateHouse
   * @apiGroup House
   *
   */
  async function update(req, res) {
    const house = await gladys.house.update(req.params.house_selector, req.body);
    res.json(house);
  }

  /**
   * @api {delete} /api/house/:house_selector deleteHouse
   * @apiName deleteHouse
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
   * @api {post} /api/house/:house_selector/user/:user_selector/seen userSeen
   * @apiName userSeen
   * @apiGroup House
   *
   */
  async function userSeen(req, res) {
    const user = await gladys.house.userSeen(req.params.house_selector, req.params.user_selector);
    res.json(user);
  }

  /**
   * @api {get} /api/house/:house_selector/room getRooms
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
