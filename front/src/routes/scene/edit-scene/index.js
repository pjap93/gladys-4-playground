import { Component } from 'preact';
import { connect } from 'unistore/preact';
import EditScenePage from './EditScenePage';
import actions from '../../../actions/device';

@connect(
  '',
  actions
)
class EditScene extends Component {

  componentWillMount() {
    
  }

  render({}, { }) {
    return (
      <EditScenePage />
    );
  }
}

export default EditScene;
