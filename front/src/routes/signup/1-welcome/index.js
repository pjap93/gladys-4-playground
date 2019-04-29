import { Component } from 'preact';
import { connect } from 'unistore/preact';
import SignupLayout from '../layout';
import WelcomeTab from './WelcomeTab';
import actions from '../../../actions/scene';

@connect(
  '',
  actions
)
class WelcomePage extends Component {

  componentWillMount() {
  }

  render({}, { currentUrl }) {
    return (
      <SignupLayout currentUrl="/signup">
        <WelcomeTab />
      </SignupLayout>
    );
  }
}

export default WelcomePage;
