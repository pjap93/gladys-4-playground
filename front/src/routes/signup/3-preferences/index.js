import { Component } from 'preact';
import { connect } from 'unistore/preact';
import SignupLayout from '../layout';
import PreferencesTab from './PreferencesTab';
import actions from '../../../actions/signup/signupSetPreferences';

@connect(
  'signupUserPreferences,signupSystemPreferences',
  actions
)
class Preferences extends Component {
  componentWillMount() {
    this.props.resetPreferences();
  }

  render(
    { signupUserPreferences, signupSystemPreferences, updateUserPreferences, updateSystemPreferences, savePreferences },
    {}
  ) {
    return (
      <SignupLayout currentUrl="/signup/preference">
        {signupUserPreferences && signupSystemPreferences && (
          <PreferencesTab
            signupUserPreferences={signupUserPreferences}
            signupSystemPreferences={signupSystemPreferences}
            updateUserPreferences={updateUserPreferences}
            updateSystemPreferences={updateSystemPreferences}
            savePreferences={savePreferences}
          />
        )}
      </SignupLayout>
    );
  }
}

export default Preferences;
