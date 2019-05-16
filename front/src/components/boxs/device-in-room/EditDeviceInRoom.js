import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../../actions/dashboard';
import BaseEditBox from '../baseEditBox';

const EditDevicesInRoom = ({ children, ...props }) => (
  <BaseEditBox {...props} titleKey="dashboard.boxTitle.devices-in-room" >
    <div class="form-group">
      <label>Select the room you want to display here:</label>
      <select class="form-control">
        {props.rooms && props.rooms.map((room) => (
          <option value={room.selector}>{room.name}</option>
        ))}
      </select>
    </div>
  </BaseEditBox>
);


@connect(
  'rooms',
  actions
)
class EditDeviceInRoomComponent extends Component {

  componentDidMount() {
    
  }

  render({ rooms }, { }) {
    return (
      <EditDevicesInRoom rooms={rooms} />
    );
  }
}


export default EditDeviceInRoomComponent;
