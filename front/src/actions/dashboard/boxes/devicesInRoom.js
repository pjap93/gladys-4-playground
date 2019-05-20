import { RequestStatus } from '../../../utils/consts';
import createBoxActions from '../boxActions';
const { DEVICE_FEATURE_TYPES, DEVICE_FEATURE_CATEGORIES } = require('../../../../../server/utils/constants');

const BOX_KEY = 'DevicesInRoom';

function createActions(store) {
  const boxActions = createBoxActions(store);

  const actions = {
    async getDevicesInRoom(state, box, x, y) {
      boxActions.updateBoxStatus(state, BOX_KEY, x, y, RequestStatus.Getting);
      try {
        const room = await state.httpClient.get(`/api/v1/room/${box.room}?expand=devices`);
        // we test if there are lights ON/OFF device features to control in this room
        const binaryLightDevice = room.devices.find(device => {
          return (
            device.features.find(feature => {
              return (
                feature.category === DEVICE_FEATURE_CATEGORIES.LIGHT &&
                feature.type === DEVICE_FEATURE_TYPES.LIGHT.BINARY
              );
            }) !== undefined
          );
        });
        // if yes, it will display the "ON/OFF" button for the room
        const hasBinaryLightDeviceFeature = binaryLightDevice !== undefined;
        boxActions.mergeBoxData(state, BOX_KEY, x, y, {
          room,
          hasBinaryLightDeviceFeature
        });
        boxActions.updateBoxStatus(state, BOX_KEY, x, y, RequestStatus.Success);
      } catch (e) {
        boxActions.updateBoxStatus(state, BOX_KEY, x, y, RequestStatus.Error);
      }
    }
  };
  return actions;
}

export default createActions;
