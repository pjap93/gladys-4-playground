const { create } = require('./dashboard.create');
const { get } = require('./dashboard.get');
const { getBySelector } = require('./dashboard.getBySelector');

const Dashboard = function Dashboard() {};

Dashboard.prototype.create = create;
Dashboard.prototype.get = get;
Dashboard.prototype.getBySelector = getBySelector;

module.exports = Dashboard;
