const asyncMiddleware = require('../middlewares/asyncMiddleware');
const { EVENTS } = require('../../utils/constants');

module.exports = function MessageController(gladys) {
  /**
   * @api {post} /api/v1/message Send message to Gladys
   * @apiName SendMessage
   * @apiGroup Message
   *
   * @apiParam {string} text Text to send
   */
  async function create(req, res) {
    const messageToSend = {
      text: req.body.text,
      source: 'api_client',
      source_user_id: req.user.id,
      user_id: req.user.id,
      language: req.user.language,
      created_at: new Date(),
    };
    gladys.event.emit(EVENTS.MESSAGE.NEW, messageToSend);
    res.status(201).json(messageToSend);
  }

  /**
   * @api {get} /api/v1/message get
   * @apiName get
   * @apiGroup Message
   *
   */
  async function get(req, res) {
    const messages = await gladys.message.get(req.user.id);
    res.json(messages);
  }

  return Object.freeze({
    create: asyncMiddleware(create),
    get: asyncMiddleware(get),
  });
};
