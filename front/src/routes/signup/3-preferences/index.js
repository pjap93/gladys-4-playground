import { Component } from 'preact';
import { connect } from 'unistore/preact';
import SignupLayout from '../layout';
import PreferencesTab from './PreferencesTab';
import actions from '../../../actions/scene';

@connect(
  '',
  actions
)
class Preferences extends Component {

  componentWillMount() {
  }

  render({}, { }) {
    return (
      <SignupLayout>
        <PreferencesTab />
      </SignupLayout>
    );
  }
}

export default Preferences;
