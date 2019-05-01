import { Component } from 'preact';
import { connect } from 'unistore/preact';
import SignupLayout from '../layout';
import ConfigureHouseTab from './ConfigureHouseTab';
import actions from '../../../actions/signup/signupConfigureHouse';
import 'leaflet/dist/leaflet.css';

@connect(
  'signupRooms,signupNewHouseName,signupNewRoomName,signupConfigureHouseErrors',
  actions
)
class ConfigureHouse extends Component {

  componentDidMount() {
    this.props.initLeafletMap();
  }

  render({ saveHouse, onKeyPressRoomInput, updateNewHouseName, updateNewRoomName, addRoom, removeRoom, signupRooms, signupNewHouseName, signupNewRoomName, signupConfigureHouseErrors }, { }) {
    return (
      <SignupLayout>
        <ConfigureHouseTab
          saveHouse={saveHouse}
          onKeyPressRoomInput={onKeyPressRoomInput}
          updateNewHouseName={updateNewHouseName}
          updateNewRoomName={updateNewRoomName}
          addRoom={addRoom}
          removeRoom={removeRoom}
          signupRooms={signupRooms}
          signupNewHouseName={signupNewHouseName}
          signupNewRoomName={signupNewRoomName}
          signupConfigureHouseErrors={signupConfigureHouseErrors}
        />
      </SignupLayout>
    );
  }
}

export default ConfigureHouse;
