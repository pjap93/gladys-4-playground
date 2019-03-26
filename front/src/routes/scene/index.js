import { Component } from 'preact';
import { connect } from 'unistore/preact';
import ScenePage from './ScenePage';
import actions from '../../actions/device';

@connect(
  '',
  actions
)
class Scene extends Component {

  componentWillMount() {
    
  }

  render({}, { }) {
    return (
      <ScenePage />
    );
  }
}

export default Scene;
