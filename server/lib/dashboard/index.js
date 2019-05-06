const { create } = require('./dashboard.create');
const { getBySelector } = require('./dashboard.getBySelector');

const Dashboard = function Dashboard() {};

Dashboard.prototype.create = create;
Dashboard.prototype.getBySelector = getBySelector;

module.exports = Dashboard;
