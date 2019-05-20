import update from 'immutability-helper';

const DASHBOARD_BOX_STATUS_KEY = 'DashboardBoxStatus';
const DASHBOARD_BOX_DATA_KEY = 'DashboardBoxData';

function createActions(store) {
  const actions = {
    updateBoxStatus(state, key, x, y, status) {
      let newState = store.getState();
      if (!newState[`${DASHBOARD_BOX_STATUS_KEY}${key}`]) {
        newState = update(newState, {
          [`${DASHBOARD_BOX_STATUS_KEY}${key}`]: {
            $set: {}
          }
        });
      }
      newState = update(newState, {
        [`${DASHBOARD_BOX_STATUS_KEY}${key}`]: {
          [`${x}.${y}`]: {
            $set: status
          }
        }
      });
      store.setState(newState);
    },
    mergeBoxData(state, key, x, y, data) {
      let newState = store.getState();
      // if DashboardBoxData doesn't exist for this box
      if (!newState[`${DASHBOARD_BOX_DATA_KEY}${key}`]) {
        newState = update(newState, {
          [`${DASHBOARD_BOX_DATA_KEY}${key}`]: {
            $set: {}
          }
        });
      }
      // if this box doesn't exist
      if (!newState[`${DASHBOARD_BOX_DATA_KEY}${key}`][`${x}.${y}`]) {
        newState = update(newState, {
          [`${DASHBOARD_BOX_DATA_KEY}${key}`]: {
            [`${x}.${y}`]: {
              $set: {}
            }
          }
        });
      }
      // finally, merge data
      newState = update(newState, {
        [`${DASHBOARD_BOX_DATA_KEY}${key}`]: {
          [`${x}.${y}`]: {
            $merge: data
          }
        }
      });
      store.setState(newState);
    },
    getBoxData(state, key, x, y) {
      let latestState = store.getState();
      if (
        latestState[`${DASHBOARD_BOX_DATA_KEY}${key}`] &&
        latestState[`${DASHBOARD_BOX_DATA_KEY}${key}`][`${x}.${y}`]
      ) {
        return latestState[`${DASHBOARD_BOX_DATA_KEY}${key}`][`${x}.${y}`];
      }
      return null;
    },
    updateBoxConfig(state, x, y, data) {
      const newState = update(state, {
        homeDashboard: {
          boxes: {
            [x]: {
              [y]: {
                $merge: data
              }
            }
          }
        }
      });
      store.setState(newState);
    }
  };
  return actions;
}

export default createActions;
