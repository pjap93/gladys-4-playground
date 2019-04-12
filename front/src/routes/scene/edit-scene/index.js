import { Component } from 'preact';
import { connect } from 'unistore/preact';
import EditScenePage from './EditScenePage';
import actions from '../../../actions/scene';

@connect(
  'session',
  actions
)
class EditScene extends Component {

  componentWillMount() {
    this.props.getSceneBySelector(this.props.scene_selector);
    this.props.getUsers();
    this.props.session.event.addEventListener('scene.executing-action', (event) => this.props.highlighCurrentlyExecutedAction(event.detail));
    this.props.session.event.addEventListener('scene.finished-executing-action', (event) => this.props.removeHighlighAction(event.detail));
  }

  render({}, { }) {
    return (
      <EditScenePage />
    );
  }
}

export default EditScene;
