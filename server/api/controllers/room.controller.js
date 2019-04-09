const asyncMiddleware = require('../middlewares/asyncMiddleware');


module.exports = function RoomController(gladys) {
  /**
   * @api {post} /api/house/:house_selector/room create
   * @apiName create
   * @apiGroup Room
   *
   */
  async function create(req, res) {
    const newRoom = await gladys.room.create(req.params.house_selector, req.body);
    res.status(201).json(newRoom);
  }

  /**
   * @api {patch} /api/room/:room_selector update
   * @apiName update
   * @apiGroup Room
   *
   */
  async function update(req, res) {
    const newRoom = await gladys.room.update(req.params.room_selector, req.body);
    res.json(newRoom);
  }

  /**
   * @api {delete} /api/room/:room_selector delete
   * @apiName delete
   * @apiGroup Room
   *
   */
  async function destroy(req, res) {
    await gladys.room.destroy(req.params.room_selector);
    res.json({
      success: true,
    });
  }

  return Object.freeze({
    create: asyncMiddleware(create),
    destroy: asyncMiddleware(destroy),
    update: asyncMiddleware(update),
  });
};
