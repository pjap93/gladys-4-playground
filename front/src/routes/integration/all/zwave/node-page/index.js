import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from './actions';
import ZwavePage from '../ZwavePage';
import NodeTab from './NodeTab';
import integrationConfig from '../../../../../config/integrations';

@connect(
  'user,zwaveNodes',
  actions
)
class ZwaveNodePage extends Component {
  componentWillMount() {
    this.props.getNodes();
  }

  render({ user, zwaveNodes }, {}) {
    return (
      <ZwavePage integration={integrationConfig[user.language].zwave}>
        <NodeTab zwaveNodes={zwaveNodes} />
      </ZwavePage>
    );
  }
}

export default ZwaveNodePage;
