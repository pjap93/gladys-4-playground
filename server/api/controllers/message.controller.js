const asyncMiddleware = require('../middlewares/asyncMiddleware');


module.exports = function MessageController(gladys) {
  /**
   * @api {post} /api/message Send message to Gladys
   * @apiName SendMessage
   * @apiGroup Message
   *
   * @apiParam {string} text Text to send
   */
  async function create(req, res) {
    const message = {
      text: req.body.text,
      source: 'api_client',
      source_user_id: req.user.id,
    };
    const newMessage = await gladys.message.new(message);
    res.status(201).json(newMessage);
  }

  return Object.freeze({
    create: asyncMiddleware(create),
  });
};
