import { Component } from 'preact';
import { connect } from 'unistore/preact';
import ScenePage from './ScenePage';
import actions from '../../actions/scene';

@connect(
  '',
  actions
)
class Scene extends Component {

  componentWillMount() {
    this.props.getScenes();
  }

  render({}, { }) {
    return (
      <ScenePage />
    );
  }
}

export default Scene;
