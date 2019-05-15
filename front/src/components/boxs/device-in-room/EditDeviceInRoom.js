import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../../actions/dashboard';

const EditDeviceInRoom = ({ children, ...props }) => (
  <div class="card">
    <div class="card-header"><h3 class="card-title">Device In Room</h3>
    </div>
    <div class="card-body">
      <div class="form-group">
        <label>Select the room you want to display here:</label>
        <select class="form-control">
          {props.rooms && props.rooms.map((room) => (
            <option value={room.selector}>{room.name}</option>
          ))}
        </select>
      </div>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col"><button class="btn btn-sm btn-default btn-block"><i class="fe fe-arrow-up" /></button></div>
        <div class="col">
          <button class="btn btn-sm btn-default btn-block"><i class="fe fe-arrow-down" /></button>
        </div>
        <div class="col"><button class="btn btn-sm btn-danger btn-block">Delete</button></div>
        
      </div>
    </div>
  </div>
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
      <EditDeviceInRoom rooms={rooms} />
    );
  }
}


export default EditDeviceInRoomComponent;
