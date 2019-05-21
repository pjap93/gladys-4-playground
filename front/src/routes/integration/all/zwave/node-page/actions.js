import { RequestStatus } from '../../../../../utils/consts';

const actions = store => ({
  async getNodes(state) {
    store.setState({
      zwaveGetNodesStatus: RequestStatus.Getting
    });
    try {
      const zwaveNodesWithUnactiveNodes = await state.httpClient.get('/api/v1/service/zwave/node');
      const zwaveNodes = zwaveNodesWithUnactiveNodes.filter(node => node.ready === true);
      store.setState({
        zwaveNodes,
        zwaveGetNodesStatus: RequestStatus.Success
      });
    } catch (e) {
      store.setState({
        zwaveGetNodesStatus: RequestStatus.Error
      });
    }
  }
});

export default actions;
