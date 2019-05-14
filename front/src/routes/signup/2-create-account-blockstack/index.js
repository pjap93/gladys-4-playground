import { Component } from 'preact';
import { connect } from 'unistore/preact';
import SignupLayout from '../layout';
import CreateAccountBlockstackTab from '../2-create-account-local/CreateAccountLocalTab';
import RedirectingToBlockstack from './RedirecteringToBlockstack';
import actions from '../../../actions/signup/signupBlockstack';

@connect(
  'blockstackAuthInfos,signupNewUser,signupErrors,createLocalAccountStatus,createLocalAccountError',
  actions
)
class CreateAccountBlockstack extends Component {

  componentWillMount() {
    this.props.checkIfInstanceIsConfigured();
    this.props.init();
  }

  render({ blockstackAuthInfos, createUser, updateNewUser, signupNewUser, signupErrors, createLocalAccountStatus, createLocalAccountError }, {}) {

    return (
      <SignupLayout currentUrl="/signup/create-account-blockstack">
        {blockstackAuthInfos &&
          <CreateAccountBlockstackTab
            createUser={createUser}
            updateNewUser={updateNewUser}
            signupNewUser={signupNewUser}
            signupErrors={signupErrors}
            createLocalAccountStatus={createLocalAccountStatus}
            createLocalAccountError={createLocalAccountError}
            disableEmailPassword
          />
        }
        {!blockstackAuthInfos &&
          <RedirectingToBlockstack />
        }
      </SignupLayout>
    );
  }
}

export default CreateAccountBlockstack;
