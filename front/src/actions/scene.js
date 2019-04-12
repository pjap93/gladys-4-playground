import { RequestStatus } from '../utils/consts';
import update from 'immutability-helper';

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
        if (scene.actions[scene.actions.length - 1].length > 0) {
          scene.actions.push([]);
        }
        store.setState({ scene, SceneGetStatus: RequestStatus.Success });
      } catch (e) {
        store.setState({ SceneGetStatus: RequestStatus.Error });
      }
    },
    async startScene(state) {
      store.setState({ SceneStartStatus: RequestStatus.Getting });
      try {
        await state.httpClient.post(`/api/v1/scene/${state.scene.selector}/start`);
        store.setState({ SceneStartStatus: RequestStatus.Success });
      } catch (e) {
        store.setState({ SceneStartStatus: RequestStatus.Error });
      }
    },
    async saveScene(state) {
      store.setState({ SceneSaveStatus: RequestStatus.Getting });
      try {
        await state.httpClient.patch(`/api/v1/scene/${state.scene.selector}`, state.scene);
        store.setState({ SceneSaveStatus: RequestStatus.Success });
      } catch (e) {
        store.setState({ SceneSaveStatus: RequestStatus.Error });
      }
    },
    addAction (state, columnIndex) {
      let newState = update(state, {
        scene: {
          actions: {
            [columnIndex]: { $push: [{ type: state.selectedNewAction }] }
          }
        }
      });
      if (state.scene.actions[columnIndex].length === 0) {
        newState = update(newState,  {
          scene: {
            actions: { $push: [[]] }
          }
        });
      }
      store.setState(newState);
    },
    deleteAction (state, columnIndex, rowIndex) {
      const newState = update(state, {
        scene: {
          actions: {
            [columnIndex]: { $splice: [[rowIndex, 1]] }
          }
        }
      });
      store.setState(newState);
    },
    updateActionProperty (state, columnIndex, rowIndex, property, value) {
      const newState = update(state, {
        scene: {
          actions: {
            [columnIndex]: {
              [rowIndex]: {
                [property]: { $set: value }
              }
            }
          }
        }
      });
      store.setState(newState);
    },
    updateSelectedNewAction (state, e) {
      store.setState({ selectedNewAction: e.target.value });
    },
    highlighCurrentlyExecutedAction (state, { columnIndex, rowIndex }) {
      store.setState({
        highLightedActions: {
          [`${columnIndex}:${rowIndex}`]: true
        }
      });
    },
    removeHighlighAction (state, { columnIndex, rowIndex }) {
      setTimeout(() => {
        store.setState({
          highLightedActions: {
            [`${columnIndex}:${rowIndex}`]: false
          }
        });
      }, 500);
    },
    async getUsers (state) {
      store.setState({ GetUsersStatus: RequestStatus.Getting });
      try {
        const users = await state.httpClient.get(`/api/v1/user`);
        const sceneParamsData = { users };
        store.setState({ sceneParamsData, GetUsersStatus: RequestStatus.Success });
      } catch (e) {
        store.setState({ GetUsersStatus: RequestStatus.Error });
      }
    }
  };
  return actions;
}

export default createActions;