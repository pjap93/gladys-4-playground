import { Component } from 'preact';
import { connect } from 'unistore/preact';
import SignupLayout from '../layout';
import actions from '../../../actions/signup/signupCreateLocalAccount';

@connect(
  '',
  actions
)
class CreateAccountGladysGateway extends Component {

  componentWillMount() {
    
  }

  render({ }, {}) {

    return (
      <SignupLayout currentUrl="/signup/create-account-blockstack">
        Work in progress...
      </SignupLayout>
    );
  }
}

export default CreateAccountGladysGateway;
