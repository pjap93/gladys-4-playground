import { Component } from 'preact';
import { connect } from 'unistore/preact';
import { Text } from 'preact-i18n';
import actions from '../../../actions/dashboard';
import BaseEditBox from '../baseEditBox';

const EditWeatherBox = ({ children, ...props }) => (
  <BaseEditBox {...props} titleKey="dashboard.boxTitle.weather">
    <div class="form-group">
      <label><Text id="dashboard.boxes.weather.editHouseLabel" /></label>
      <select class="form-control">
        {props.houses && props.houses.map((house) => (
          <option value={house.selector}>{house.name}</option>
        ))}
      </select>
    </div>
  </BaseEditBox>
);


@connect(
  'rooms',
  actions
)
class EditWeatherBoxComponent extends Component {

  componentDidMount() {
    
  }

  render(props, { }) {
    return (
      <EditWeatherBox {...props} />
    );
  }
}


export default EditWeatherBoxComponent;
