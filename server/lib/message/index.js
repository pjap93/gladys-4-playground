const { create } = require('./message.create');
const { reply } = require('./message.reply');

const MessageHandler = function MessageHandler(event, brain, service) {
  this.event = event;
  this.brain = brain;
  this.service = service;
  event.on('new-message', async (message) => {
    this.create(message);
  });
};

MessageHandler.prototype.create = create;
MessageHandler.prototype.reply = reply;

module.exports = MessageHandler;
