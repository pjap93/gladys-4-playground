import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../actions/map';
import 'leaflet/dist/leaflet.css';

@connect(
  '',
  actions
)
class Map extends Component {

  componentDidMount() {
    this.props.initLeafletMap();
  }

  render({}, { }) {
    return (
      <div class="page">
        <div class="page-main">
          <div class="my-3 my-md-5">
            <div class="map-header">
              <div id="map-tab-leaflet" style={{ height: '550px' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
