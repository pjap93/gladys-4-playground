import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../../actions/dashboard/boxes/devicesInRoom';
// import { RequestStatus } from '../../../utils/consts';
// import { WEBSOCKET_MESSAGE_TYPES } from '../../../../../server/utils/constants';

import DeviceRow from './DeviceRow';

const RoomCard = ({ children, ...props }) => {
  const boxData = props.DashboardBoxDataDevicesInRoom && props.DashboardBoxDataDevicesInRoom[`${props.x}.${props.y}`];
  return (
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">{boxData && boxData.room && boxData.room.name}</h3>
        {boxData && boxData.hasBinaryLightDeviceFeature && (
          <div class="card-options">
            <label class="custom-switch m-0">
              <input type="checkbox" value="1" class="custom-switch-input" />
              <span class="custom-switch-indicator" />
            </label>
          </div>
        )}
      </div>
      <div class="table-responsive">
        <table class="table card-table table-vcenter">
          <tbody>
            {boxData &&
              boxData.room &&
              boxData.room.devices.map((device, deviceIndex) =>
                device.features.map((deviceFeature, deviceFeatureIndex) => (
                  <DeviceRow
                    device={device}
                    deviceFeature={deviceFeature}
                    roomIndex={props.roomIndex}
                    deviceIndex={deviceIndex}
                    deviceFeatureIndex={deviceFeatureIndex}
                    updateValue={props.updateValue}
                  />
                ))
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

@connect(
  'session,DashboardBoxDataDevicesInRoom',
  actions
)
class DevicesInRoomComponent extends Component {
  componentDidMount() {
    this.props.getDevicesInRoom(this.props.box, this.props.x, this.props.y);
  }

  render(props, {}) {
    return <RoomCard {...props} />;
  }
}

export default DevicesInRoomComponent;
