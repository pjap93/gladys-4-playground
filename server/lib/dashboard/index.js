const { create } = require('./dashboard.create');

const Dashboard = function Dashboard() {};

Dashboard.prototype.create = create;

module.exports = Dashboard;
