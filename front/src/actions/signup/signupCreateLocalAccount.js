import { RequestStatus } from '../../utils/consts';
import update from 'immutability-helper';
import { route } from 'preact-router';

function validateEmail(email) {
  return email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}

function createActions(store) {

  const actions = {
    resetNewUser (state) {
      store.setState({
        signupNewUser: {
          firstname: '',
          lastname: '',
          email: '',
          role: 'admin',
          language: 'en',
          password: '',
          passwordRepeat: ''
        },
        createLocalAccountStatus: null,
        signupErrors: {}
      });
    },
    validateUser(state) {
      let errored = false;
      const errors = {};
      if (!state.signupNewUser.firstname || state.signupNewUser.firstname.length === 0) {
        errored = true;
        errors.firstname = true;
      }
      if (!state.signupNewUser.lastname || state.signupNewUser.lastname.length === 0) {
        errored = true;
        errors.lastname = true;
      }
      if (!validateEmail(state.signupNewUser.email)) {
        errored = true;
        errors.email = true;
      }
      if (state.signupNewUser.password !== state.signupNewUser.passwordRepeat) {
        errored = true;
        errors.passwordRepeat = true;
      }
      if (state.signupNewUser.password.length < 8) {
        errored = true;
        errors.password = true;
      }
      if (!state.signupNewUser.birthdateMonth || !state.signupNewUser.birthdateDay || !state.signupNewUser.birthdateYear) {
        errored = true;
        errors.birthdate = true;
      }
      store.setState({ signupErrors: errors });
      return errored;
    },
    async createUser (state) {
      store.setState({ signupAlreadySubmitted: true });
      const errored = actions.validateUser(state);
      if (errored) {
        return ;
      }
      const userToCreate = Object.assign({}, state.signupNewUser, {
        birthdate: `${state.signupNewUser.birthdateYear}-${state.signupNewUser.birthdateMonth}-${state.signupNewUser.birthdateDay}`
      });
      store.setState({ createLocalAccountStatus: RequestStatus.Getting });
      try {
        const user = await state.httpClient.post(`/api/v1/user`, userToCreate);
        store.setState({ user, createLocalAccountStatus: RequestStatus.Success });
        state.session.saveUser(user);
        route('/signup/preference');
      } catch (e) {
        if (!e.response) {
          store.setState({ createLocalAccountStatus: RequestStatus.NetworkError });
        } else if (e.response && e.response.status === 409) {
          store.setState({ createLocalAccountStatus: RequestStatus.ConflictError, createLocalAccountError: e.response.data });
        } else {
          store.setState({ createLocalAccountStatus: RequestStatus.Error });
        }
      }
    },
    updateNewUser (state, property, value) {
      const newState = update(state, {
        signupNewUser: {
          [property]: { $set: value }
        }
      });
      store.setState(newState);
      if (state.signupAlreadySubmitted) {
        actions.validateUser(store.getState());
      }
    }
  };
  return actions;
}

export default createActions;