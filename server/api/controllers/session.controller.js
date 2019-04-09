const asyncMiddleware = require('../middlewares/asyncMiddleware');


module.exports = function SessionController(gladys) {
  /**
   * @api {post} /api/v1/session/:session_id/revoke revoke
   * @apiName revoke
   * @apiGroup Session
   *
   */
  async function revoke(req, res) {
    const session = await gladys.session.revoke(req.user.id, req.params.session_id);
    res.json(session);
  }

  return Object.freeze({
    revoke: asyncMiddleware(revoke),
  });
};
