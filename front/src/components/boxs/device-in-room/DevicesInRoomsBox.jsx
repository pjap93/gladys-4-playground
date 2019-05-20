import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../../actions/dashboard/boxes/devicesInRoom';
import { RequestStatus } from '../../../utils/consts';
// import { WEBSOCKET_MESSAGE_TYPES } from '../../../../../server/utils/constants';

import DeviceRow from './DeviceRow';

const cardStyle = {
  maxHeight: '20rem'
};

const minHeight = {
  minHeight: '6rem'
};

const RoomCard = ({ children, ...props }) => {
  const boxData = props.DashboardBoxDataDevicesInRoom && props.DashboardBoxDataDevicesInRoom[`${props.x}.${props.y}`];
  const boxStatus =
    props.DashboardBoxStatusDevicesInRoom && props.DashboardBoxStatusDevicesInRoom[`${props.x}.${props.y}`];
  const loading = boxStatus === RequestStatus.Getting && !boxData;
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
      {loading && (
        <div class="card-body o-auto" style={cardStyle}>
          <div class={loading ? 'dimmer active' : 'dimmer'}>
            <div class="loader" />
            <div class="dimmer-content">{loading && <div style={minHeight} />}</div>
          </div>
        </div>
      )}
      <div class="table-responsive" style={cardStyle}>
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
  'session,DashboardBoxDataDevicesInRoom,DashboardBoxStatusDevicesInRoom',
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
