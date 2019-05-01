import { loadBlockstack, getAuthInfos } from '../../utils/blockstack';
import createActionSignupCreateLocalAccount from './signupCreateLocalAccount';

function createActions(store) {

  const signupLocalAccountActions = createActionSignupCreateLocalAccount(store);

  const actions = {
    async init(state) {
      if (!state.blockstackLoaded) {
        store.setState({ blockstackLoaded: true });
        await loadBlockstack();
      }
      const userSession = new window.blockstack.UserSession();
      
      // handle blockstack login
      if (userSession.isUserSignedIn()) {
        const blockstackUserData = userSession.loadUserData();
        store.setState({ blockstackUserData });
      } else if (userSession.isSignInPending()) {
        const blockstackUserData = await userSession.handlePendingSignIn();
        store.setState({ blockstackUserData });
      } else {
        const redirectURI = `${window.location.href}`;
        const manifestURI = `${window.location.origin}/assets/blockstack/manifest.json`;
        return userSession.redirectToSignIn(redirectURI, manifestURI);
      }
      // get gladys auth informations
      const blockstackAuthInfos = await getAuthInfos(userSession);
      store.setState({
        blockstackAuthInfos,
        signupNewUser: {
          language: 'en',
          role: 'admin',
          email: blockstackAuthInfos.email,
          password: blockstackAuthInfos.token,
          passwordRepeat: blockstackAuthInfos.token
        }
      });
    }
  };

  return Object.assign(actions, signupLocalAccountActions);
}

export default createActions;