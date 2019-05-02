import createActionsProfilePicture from './profilePicture';

function createActions(store) {

  const actionsProfilePicture = createActionsProfilePicture(store);

  const actions = {
    handleRoute(state, e) {
      state.session.init();
      store.setState({ currentUrl: e.url, showDropDown: false });
    },
    toggleDropDown(state) {
      store.setState({ showDropDown: !state.showDropDown });
    }
  };

  return Object.assign(actions, actionsProfilePicture);
}

export default createActions;