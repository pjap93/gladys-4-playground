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
    this.props.session.dispatcher.addListener('scene.executing-action', payload =>
      this.props.highlighCurrentlyExecutedAction(payload)
    );
    this.props.session.dispatcher.addListener('scene.finished-executing-action', payload =>
      this.props.removeHighlighAction(payload)
    );
  }

  render({}, {}) {
    return <EditScenePage />;
  }
}

export default EditScene;
