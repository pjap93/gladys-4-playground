import { Component } from 'preact';
import { connect } from 'unistore/preact';
import SignupLayout from '../layout';
import CreateAccountLocalTab from './CreateAccountLocalTab';
import actions from '../../../actions/scene';

@connect(
  'currentUrl',
  actions
)
class CreateAccountLocal extends Component {

  componentWillMount() {
  }

  render({}, { currentUrl }) {
    return (
      <SignupLayout currentUrl="/signup/create-account-local">
        <CreateAccountLocalTab />
      </SignupLayout>
    );
  }
}

export default CreateAccountLocal;
