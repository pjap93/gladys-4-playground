import { Component } from 'preact';
import { connect } from 'unistore/preact';
import SignupLayout from '../layout';
import SuccessTab from './SuccessTab';
import actions from '../../../actions/signup';

@connect(
  '',
  actions
)
class Success extends Component {

  componentDidMount() {
    
  }

  render({}, { }) {
    return (
      <SignupLayout>
        <SuccessTab />
      </SignupLayout>
    );
  }
}

export default Success;
