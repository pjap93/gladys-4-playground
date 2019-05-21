import { Component } from 'preact';
import { connect } from 'unistore/preact';
import { Text } from 'preact-i18n';
import actions from '../../../actions/dashboard';
import BaseEditBox from '../baseEditBox';

const EditCameraBox = ({ children, ...props }) => (
  <BaseEditBox {...props} titleKey="dashboard.boxTitle.camera">
    <div class="form-group">
      <label>
        <Text id="dashboard.boxes.camera.editCameraLabel" />
      </label>
      <select class="form-control">
        {props.cameras && props.cameras.map(camera => <option value={camera.selector}>{camera.name}</option>)}
      </select>
    </div>
  </BaseEditBox>
);

@connect(
  '',
  actions
)
class EditCameraBoxComponent extends Component {
  componentDidMount() {}

  render(props, {}) {
    return <EditCameraBox {...props} />;
  }
}

export default EditCameraBoxComponent;
