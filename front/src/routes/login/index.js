import { Component } from 'preact';
import LoginForm from './LoginForm';

class LoginPage extends Component {
  
  state = {
    email: '',
    password: '',
    displayTwoFactorInput: false,
    twoFactorCode: '',
    loginErrored: false,
    loginTwoFactorErrored: false,
    loginInProgress: false,
    loginTwoFactorInProgress: false
  };

  render({}, { email, password, displayTwoFactorInput, twoFactorCode, browserCompatible, loginErrored, loginTwoFactorErrored, loginInProgress, loginTwoFactorInProgress, isFireFox }) {
    return (
      <LoginForm
        email={email}
        password={password}
      />
    );
  }
}

export default LoginPage;
