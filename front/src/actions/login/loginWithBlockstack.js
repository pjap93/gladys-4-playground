import { loadBlockstack, getAuthInfos } from '../../utils/blockstack';
import createActionsLoginEmail from './login';

function createActions(store) {
  const actionsEmail = createActionsLoginEmail(store);

  const actions = {
    async login(state) {
      await loadBlockstack();
      const userSession = new window.blockstack.UserSession();
        
      // handle blockstack login
      if (userSession.isUserSignedIn()) {
        const blockstackUserData = userSession.loadUserData();
        store.setState({
          blockstackUserData 
        });
      } else if (userSession.isSignInPending()) {
        const blockstackUserData = await userSession.handlePendingSignIn();
        store.setState({
          blockstackUserData 
        });
      } else {
        const redirectURI = `${window.location.href}`;
        const manifestURI = `${window.location.origin}/assets/blockstack/manifest.json`;
        return userSession.redirectToSignIn(redirectURI, manifestURI);
      }
      // get gladys auth informations
      const blockstackAuthInfos = await getAuthInfos(userSession);
      store.setState({
        loginFormEmailValue: blockstackAuthInfos.email,
        loginFormPasswordValue: blockstackAuthInfos.token
      });
      await actionsEmail.login(store.getState());
    }
  };

  return actions;
}

export default createActions;