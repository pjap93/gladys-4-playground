import { Component } from 'preact';
import { connect } from 'unistore/preact';
import HousePage from './HousePage';
import actions from '../../../actions/device';

@connect(
  '',
  actions
)
class SettingsHouses extends Component {
  componentWillMount() {}

  render({}, {}) {
    return <HousePage />;
  }
}

export default SettingsHouses;
