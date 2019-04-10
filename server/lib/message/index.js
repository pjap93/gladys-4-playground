const { create } = require('./message.create');
const { get } = require('./message.get');
const { reply } = require('./message.reply');
const { replyByIntent } = require('./message.replyByIntent');

const MessageHandler = function MessageHandler(event, brain, service) {
  this.event = event;
  this.brain = brain;
  this.service = service;
  event.on('new-message', async (message) => {
    this.create(message);
  });
};

MessageHandler.prototype.create = create;
MessageHandler.prototype.get = get;
MessageHandler.prototype.reply = reply;
MessageHandler.prototype.replyByIntent = replyByIntent;

module.exports = MessageHandler;
