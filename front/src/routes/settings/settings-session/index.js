import { Component } from 'preact';
import { connect } from 'unistore/preact';
import SessionPage from './SessionsPage';
import actions from '../../../actions/device';

@connect(
  '',
  actions
)
class SettingsSessions extends Component {

  componentWillMount() {
    
  }

  render({}, { }) {
    return (
      <SessionPage />
    );
  }
}

export default SettingsSessions;
