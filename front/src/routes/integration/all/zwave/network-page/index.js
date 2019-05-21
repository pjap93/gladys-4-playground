import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from './actions';
import ZwavePage from '../ZwavePage';
import NetworkTab from './NetworkTab';
import integrationConfig from '../../../../../config/integrations';

@connect(
  'user,zwaveNodesNeighbors',
  actions
)
class ZwaveNodePage extends Component {
  componentWillMount() {}

  componentDidMount() {
    this.props.getNeighbors();
  }

  render({ user, zwaveNodesNeighbors }, {}) {
    return (
      <ZwavePage integration={integrationConfig[user.language].zwave}>
        <NetworkTab zwaveNodesNeighbors={zwaveNodesNeighbors} />
      </ZwavePage>
    );
  }
}

export default ZwaveNodePage;
