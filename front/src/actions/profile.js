import { RequestStatus } from '../utils/consts';

function createActions(store) {
  const actions = {
    async getMySelf(state) {
      store.setState({ ProfileGetStatus: RequestStatus.Getting });
      try {
        const user = await state.httpClient.get('/api/v1/me');
        store.setState({ user, SceneGetStatus: RequestStatus.Success });
      } catch (e) {
        store.setState({ ProfileGetStatus: RequestStatus.Error });
      }
    }
  };
  return actions;
}

export default createActions;
