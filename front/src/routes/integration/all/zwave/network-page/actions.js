import { RequestStatus } from '../../../../../utils/consts';
import vis from 'vis';

function renderGraph(zwaveNodes) {
  const nodeData = zwaveNodes.map(node => ({
    id: node.id,
    label: node.product
  }));
  let nodes = new vis.DataSet(nodeData);

  const edgeData = [];

  const alreadyIn = {};

  zwaveNodes.forEach(node => {
    node.neighbors.forEach(neighborId => {
      if (!alreadyIn[`${neighborId}-${node.id}`]) {
        edgeData.push({
          from: node.id,
          to: neighborId
        });
        alreadyIn[`${node.id}-${neighborId}`] = true;
      }
    });
  });

  // create an array with edges
  let edges = new vis.DataSet(edgeData);

  // create a network
  let container = document.getElementById('zwave-network-graph');

  // provide the data in the vis format
  let data = {
    nodes,
    edges
  };
  let options = {};

  // initialize your network!
  return new vis.Network(container, data, options);
}

const actions = store => ({
  async getNeighbors(state) {
    store.setState({
      zwaveGetNeighborsStatus: RequestStatus.Getting
    });
    try {
      const zwaveNodesNeighbors = await state.httpClient.get('/api/v1/service/zwave/neighbor');
      store.setState({
        zwaveNodesNeighbors,
        zwaveGetNeighborsStatus: RequestStatus.Success
      });
      renderGraph(zwaveNodesNeighbors);
    } catch (e) {
      store.setState({
        zwaveGetNeighborsStatus: RequestStatus.Error
      });
    }
  }
});

export default actions;
