const { NlpManager } = require('node-nlp');
const { SUPPORTED_LANGUAGES } = require('../../config/brain/index');
const { train } = require('./brain.train');
const { classify } = require('./brain.classify');
const { getReply } = require('./brain.getReply');

const Brain = function Brain() {
  this.nlpManager = new NlpManager({ languages: SUPPORTED_LANGUAGES });
};

Brain.prototype.train = train;
Brain.prototype.classify = classify;
Brain.prototype.getReply = getReply;

module.exports = Brain;
