import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../../actions/login/loginWithBlockstack';
import LoginBlockstackForm from './LoginBlockstackForm';

@connect(
  '',
  actions
)
class LoginBlockstack extends Component {
  componentWillMount() {
    this.props.login();
  }

  render({}, {}) {
    return <LoginBlockstackForm />;
  }
}

export default LoginBlockstack;
