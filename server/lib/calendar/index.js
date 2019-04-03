const { create } = require('./calendar.create');
const { destroy } = require('./calendar.destroy');
const { update } = require('./calendar.update');

const Calendar = function Calendar() {};

Calendar.prototype.create = create;
Calendar.prototype.destroy = destroy;
Calendar.prototype.update = update;

module.exports = Calendar;
