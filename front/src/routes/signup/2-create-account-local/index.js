import { Component } from 'preact';
import { connect } from 'unistore/preact';
import SignupLayout from '../layout';
import CreateAccountLocalTab from './CreateAccountLocalTab';
import actions from '../../../actions/signup/signupCreateLocalAccount';

@connect(
  'signupNewUser,signupErrors,createLocalAccountStatus,createLocalAccountError',
  actions
)
class CreateAccountLocal extends Component {

  componentWillMount() {
    this.props.resetNewUser();
    this.props.checkIfInstanceIsConfigured();
  }

  render({ signupNewUser, updateNewUser, createUser, signupErrors, createLocalAccountStatus, createLocalAccountError }, {}) {
    return (
      <SignupLayout currentUrl="/signup/create-account-local">
        { signupNewUser &&
        <CreateAccountLocalTab
          createUser={createUser}
          updateNewUser={updateNewUser}
          signupNewUser={signupNewUser}
          signupErrors={signupErrors}
          createLocalAccountStatus={createLocalAccountStatus}
          createLocalAccountError={createLocalAccountError}
        />
        }
      </SignupLayout>
    );
  }
}

export default CreateAccountLocal;
