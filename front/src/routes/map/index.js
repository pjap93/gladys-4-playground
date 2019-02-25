import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../actions/integration';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

@connect(
  '',
  actions
)
class Map extends Component {

  componentDidMount() {
    const leafletMap = leaflet.map('mapid').setView([51.505, -0.09], 13);
    const cartoDBPsitron = leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://cartodb.com/attributions">CartoDB</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(leafletMap);
  }

  render({}, { }) {
    return (
      <div class="page">
        <div class="page-main">
          <div class="my-3 my-md-5">
            <div class="map-header">
              <div id="mapid" style={{ height: '550px' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
