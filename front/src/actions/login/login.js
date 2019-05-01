import { LoginStatus } from '../../utils/consts';
import { validateEmail } from '../../utils/validator';
import { route } from 'preact-router';

const actions = store => ({
  async login(state, e) {
    if (e) {
      e.preventDefault();
    }
    if (!validateEmail(state.loginFormEmailValue)) {
      return store.setState({ loginStatus: LoginStatus.WrongEmailError });
    }
    store.setState({ loginStatus: LoginStatus.Processing });
    try {
      const user = await state.httpClient.post('/api/v1/login', {
        email: state.loginFormEmailValue,
        password: state.loginFormPasswordValue
      });
      store.setState({ user, loginStatus: LoginStatus.LoginSuccess, loginFormEmailValue: '', loginFormPasswordValue: '' });
      state.session.saveUser(user);
      state.session.init();
      route('/dashboard');
    } catch (e) {
      store.setState({ loginStatus: LoginStatus.WrongCredentialsError });
    }
  },
  onEmailChange(state, event) {
    store.setState({ loginFormEmailValue: event.target.value });
  },
  onPasswordChange(state, event) {
    store.setState({ loginFormPasswordValue: event.target.value });
  }
});

export default actions;