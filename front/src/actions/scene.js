import { SceneGetStatus } from '../utils/consts';

function createActions(store) {

  const actions = {
    async getScenes(state) {
      store.setState({ SceneGetStatus: SceneGetStatus.Getting });
      try {
        const scenes = await state.httpClient.get('/api/v1/scene');
        store.setState({ scenes, SceneGetStatus: SceneGetStatus.Success });
      } catch (e) {
        store.setState({ SceneGetStatus: SceneGetStatus.Error });
      }
    }
  };
  return actions;
}

export default createActions;