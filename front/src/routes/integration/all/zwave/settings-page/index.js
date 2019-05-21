import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from './actions';
import ZwavePage from '../ZwavePage';
import SettingsTab from './SettingsTab';
import integrationConfig from '../../../../../config/integrations';

@connect(
  'user,usbPorts,zwaveInfos',
  actions
)
class ZwaveSettingsPage extends Component {
  componentWillMount() {
    this.props.getUsbPorts();
    this.props.getInfos();
  }

  render({ user, usbPorts, zwaveInfos }, {}) {
    return (
      <ZwavePage integration={integrationConfig[user.language].zwave}>
        <SettingsTab usbPorts={usbPorts} zwaveInfos={zwaveInfos} />
      </ZwavePage>
    );
  }
}

export default ZwaveSettingsPage;
