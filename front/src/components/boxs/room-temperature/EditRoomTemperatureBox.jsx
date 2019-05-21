import { Component } from 'preact';
import { connect } from 'unistore/preact';
import { Text } from 'preact-i18n';
import actions from '../../../actions/dashboard';
import BaseEditBox from '../baseEditBox';

const EditRoomTemperatureBox = ({ children, ...props }) => (
  <BaseEditBox {...props} titleKey="dashboard.boxTitle.temperature-in-room">
    <div class="card-body">
      <div class="form-group">
        <label>
          <Text id="dashboard.boxes.temperatureInRoom.editRoomLabel" />
        </label>
        <select class="form-control">
          {props.rooms && props.rooms.map(room => <option value={room.selector}>{room.name}</option>)}
        </select>
      </div>
    </div>
  </BaseEditBox>
);

@connect(
  'rooms',
  actions
)
class EditRoomTemperatureBoxComponent extends Component {
  componentDidMount() {}

  render(props, {}) {
    return <EditRoomTemperatureBox {...props} />;
  }
}

export default EditRoomTemperatureBoxComponent;
