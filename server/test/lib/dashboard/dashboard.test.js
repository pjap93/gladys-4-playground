const { expect, assert } = require('chai');
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
  it('should return error, missing box type', async () => {
    const promise = dashboard.create({
      name: 'My new dashboard',
      type: DASHBOARD_TYPE.MAIN,
      boxes: [[{
      }]],
    });
    return assert.isRejected(promise);
  });
});

describe('dashboard.getBySelector', () => {
  const dashboard = new Dashboard();
  it('should return dashboard', async () => {
    const testDashboard = await dashboard.getBySelector('test-dashboard');
    expect(testDashboard).to.have.property('name', 'Test dashboard');
    expect(testDashboard).to.have.property('selector', 'test-dashboard');
  });
  it('should return not found', async () => {
    const promise = dashboard.getBySelector('not-found-dashboard');
    return assert.isRejected(promise, 'Dashboard not found');
  });
});
