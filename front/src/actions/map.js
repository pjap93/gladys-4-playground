import { RequestStatus } from '../utils/consts';
import update from 'immutability-helper';
import leaflet from 'leaflet';

const icon = leaflet.icon({
  iconUrl: '/assets/leaflet/marker-icon.png',
  iconRetinaUrl: '/assets/leaflet/marker-icon-2x.png',
  shadowUrl: '/assets/leaflet/marker-shadow.png',
  iconSize: [25,41],
  iconAnchor: [12,41],
  popupAnchor: [1,-34],
  tooltipAnchor: [16,-28],
  shadowSize: [41,41]
});

function createActions(store) {

  const actions = {
    async initLeafletMap(state) {
      if (state.mapTabLeafletMap) {
        state.mapTabLeafletMap.remove();
      }
      const leafletMap = leaflet.map('map-tab-leaflet').setView([48.8583, 2.2945], 2);
      leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(leafletMap);
      store.setState({ mapTabLeafletMap: leafletMap });
    }
  };
  return actions;
}

export default createActions;