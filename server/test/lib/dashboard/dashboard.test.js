const { expect } = require('chai');
const { DASHBOARD_BOX_TYPE, DASHBOARD_TYPE } = require('../../../utils/constants');

const Dashboard = require('../../../lib/dashboard');

describe('dashboard.create', () => {
  const dashboard = new Dashboard();
  it('should create a dashboard', async () => {
    const newDashboard = await dashboard.create({
      name: 'My new dashboard',
      type: DASHBOARD_TYPE.MAIN,
      boxes: [[{
        type: DASHBOARD_BOX_TYPE.USER_PRESENCE,
      }]],
    });
    expect(newDashboard).to.have.property('name', 'My new dashboard');
    expect(newDashboard).to.have.property('selector', 'my-new-dashboard');
  });
});
