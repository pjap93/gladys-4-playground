import { Component } from 'preact';
import { connect } from 'unistore/preact';
import SettingsSystemPage from './SettingsSystemPage';
import actions from '../../../actions/device';

@connect(
  '',
  actions
)
class SettingsSystem extends Component {

  componentWillMount() {
    
  }

  render({}, { }) {
    return (
      <SettingsSystemPage />
    );
  }
}

export default SettingsSystem;
