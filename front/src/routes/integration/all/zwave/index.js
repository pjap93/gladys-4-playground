import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from './actions';
import ZwavePage from './ZwavePage';
import integrationConfig from '../../../../config/integrations';

@connect(
  'user,zwaveNodes',
  actions
)
class ZwaveIntegration extends Component {

  componentWillMount() {
    this.props.getNodes();
  }

  render({ user, zwaveNodes }, {}) {
    return (
      <ZwavePage
        integration={integrationConfig[user.language].zwave}
        zwaveNodes={zwaveNodes}
      />
    );
  }
}

export default ZwaveIntegration;
