const { setValue } = require('./variable.setValue');

const Variable = function Variable() {};

Variable.prototype.setValue = setValue;

module.exports = Variable;
