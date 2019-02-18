const { NlpManager, NlgManager } = require('node-nlp');
const { SUPPORTED_LANGUAGES } = require('../../config/brain/index');
const { train } = require('./brain.train');
const { classify } = require('./brain.classify');

const Brain = function Brain() {
  this.nlpManager = new NlpManager({ languages: SUPPORTED_LANGUAGES });
  this.nlgManager = new NlgManager();
};

Brain.prototype.train = train;
Brain.prototype.classify = classify;

module.exports = Brain;
