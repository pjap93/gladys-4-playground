const asyncMiddleware = require('../middlewares/asyncMiddleware');
const logger = require('../../utils/logger');

const LOGIN_SESSION_VALIDITY_IN_SECONDS = 30 * 24 * 60 * 60;

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
   * @apiParam {string="admin","habitant", "guest"} role role of the user
   * @apiParam {date} birthdate Birthdate of the user
   * @apiParam {string="en", "fr"} language Language of the user
   *
   * @apiSuccess {String} id id of the created user
   */
  async function create(req, res, next) {
    const newUser = await gladys.user.create(req.body);
    res.status(201).json(newUser);
  }

  /**
   * @api {post} /api/login Login user
   * @apiName LoginUser
   * @apiGroup User
   *
   * @apiParam {String} email Email of the user
   * @apiParam {String} password Password of the user
   *
   * @apiSuccess {String} refresh_token the refresh token
   * @apiSuccess {String} access_token the access token
   */
  async function login(req, res, next) {
    const user = await gladys.user.login(req.body.email, req.body.password);
    const scope = req.body.scope || ['dashboard:write', 'dashboard:read'];
    const session = await gladys.session.create(user.id, scope, LOGIN_SESSION_VALIDITY_IN_SECONDS);
    const response = Object.assign({}, user, session);
    res.json(response);
  }

  /**
   * @api {get} /api/me getMySelf
   * @apiName getMySelf
   * @apiGroup User
   *
   */
  async function getMySelf(req, res, next) {
    const user = await gladys.user.getById(req.user.id);
    res.json(user);
  }

  /**
   * @api {post} /api/access_token getAccessToken
   * @apiName getAccessToken
   * @apiGroup User
   *
   */
  async function getAccessToken(req, res) {
    const scope = req.body.scope || ['dashboard:write', 'dashboard:read'];
    const session = await gladys.session.getAccessToken(req.body.refresh_token, scope);
    res.json(session);
  }

  /**
   * @api {post} /api/forgot_password forgotPassword
   * @apiName forgotPassword
   * @apiGroup User
   *
   */
  async function forgotPassword(req, res) {
    const session = await gladys.user.forgotPassword(req.body.email);
    logger.info(`Forgot password initiated for user ${req.body.email}, access_token = ${session.access_token}`);
    res.json({
      success: true,
    });
  }

  /**
   * @api {post} /api/reset_password resetPassword
   * @apiName resetPassword
   * @apiGroup User
   *
   */
  async function resetPassword(req, res) {
    const user = await gladys.user.updatePassword(req.user.id, req.body.password);
    res.json(user);
  }

  return Object.freeze({
    create: asyncMiddleware(create),
    login: asyncMiddleware(login),
    getMySelf: asyncMiddleware(getMySelf),
    getAccessToken: asyncMiddleware(getAccessToken),
    forgotPassword: asyncMiddleware(forgotPassword),
    resetPassword: asyncMiddleware(resetPassword),
  });
};
