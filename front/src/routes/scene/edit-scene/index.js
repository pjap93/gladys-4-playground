import { Component } from 'preact';
import { connect } from 'unistore/preact';
import EditScenePage from './EditScenePage';
import actions from '../../../actions/scene';

@connect(
  '',
  actions
)
class EditScene extends Component {

  componentWillMount() {
    this.props.getSceneBySelector(this.props.scene_selector);
  }

  render({}, { }) {
    return (
      <EditScenePage />
    );
  }
}

export default EditScene;
