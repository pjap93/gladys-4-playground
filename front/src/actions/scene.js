import { RequestStatus } from '../utils/consts';

const actionsColumns = [
  { actions: [{
    type: 'Lock the door',
    icon: 'fe fe-lock'
  },{
    type: 'Lock the windows',
    icon: 'fe fe-lock'
  }]
  },
  { actions: [{
    type: 'Wait',
    icon: 'fe fe-clock'
  }] },
  { actions: [{
    type: 'Arm Home',
    icon: 'fe fe-home'
  }] }
];

function createActions(store) {

  const actions = {
    async getScenes(state) {
      store.setState({ ScenesGetStatus: RequestStatus.Getting });
      try {
        const scenes = await state.httpClient.get('/api/v1/scene');
        store.setState({ scenes, ScenesGetStatus: RequestStatus.Success });
      } catch (e) {
        store.setState({ ScenesGetStatus: RequestStatus.Error });
      }
    },
    async getSceneBySelector(state, sceneSelector) {
      store.setState({ SceneGetStatus: RequestStatus.Getting });
      try {
        const scene = await state.httpClient.get(`/api/v1/scene/${sceneSelector}`);
        store.setState({ scene, SceneGetStatus: RequestStatus.Success });
      } catch (e) {
        store.setState({ SceneGetStatus: RequestStatus.Error });
      }
    }
  };
  return actions;
}

export default createActions;