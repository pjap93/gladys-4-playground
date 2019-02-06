const asyncMiddleware = require('../middlewares/asyncMiddleware');

module.exports = function UserController(gladys) {
  /**
   * @api {post} /api/user Create user
   * @apiName CreateUser
   * @apiGroup User
   *
   * @apiParam {String} firstname Firstname of the user
   * @apiParam {String} lastname Lastname of the user
   * @apiParam {String} email Email of the user
   * @apiParam {String} password Password of the user
   *
   * @apiSuccess {String} id id of the created user
   */
  async function create(req, res, next) {
    const newUser = await gladys.user.create(req.body);
    res.status(201).json(newUser);
  }

  return Object.freeze({
    create: asyncMiddleware(create),
  });
};
