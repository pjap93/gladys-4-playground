const { newMessage } = require('./message.new');
const { reply } = require('./message.reply');

const MessageHandler = function MessageHandler(event, brain, light, services) {
  this.event = event;
  this.brain = brain;
  this.light = light;
  this.services = services;
  event.on('new-message', async (message) => {
    this.new(message);
  });
};

MessageHandler.prototype.new = newMessage;
MessageHandler.prototype.reply = reply;

module.exports = MessageHandler;
