import { RequestStatus } from '../../../../utils/consts';

const actions = store => ({
  async getNodes (state) {
    store.setState({ zwaveGetNodesStatus: RequestStatus.Getting });
    try {
      const zwaveNodes = await state.httpClient.get('/api/v1/service/zwave/node');
      store.setState({ zwaveNodes, zwaveGetNodesStatus: RequestStatus.Success });
    } catch (e) {
      store.setState({ zwaveGetNodesStatus: RequestStatus.Error });
    }
  }
});

export default actions;