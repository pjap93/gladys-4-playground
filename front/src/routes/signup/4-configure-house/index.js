import { Component } from 'preact';
import { connect } from 'unistore/preact';
import SignupLayout from '../layout';
import ConfigureHouseTab from './ConfigureHouseTab';
import actions from '../../../actions/signup';
import 'leaflet/dist/leaflet.css';

@connect(
  '',
  actions
)
class ConfigureHouse extends Component {

  componentDidMount() {
    this.props.initLeafletMap();
  }

  render({}, { }) {
    return (
      <SignupLayout>
        <ConfigureHouseTab />
      </SignupLayout>
    );
  }
}

export default ConfigureHouse;
