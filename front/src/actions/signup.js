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
    async createAccountLocal (state) {
      store.setState({ CreateLocalAccountStatus: RequestStatus.Getting });
      try {
        const user = await state.httpClient.post(`/api/v1/user`, store.newLocalAccountUser);
        store.setState({ user, CreateLocalAccountStatus: RequestStatus.Success });
      } catch (e) {
        store.setState({ CreateLocalAccountStatus: RequestStatus.Error });
      }
    },
    async initLeafletMap(state) {
      if (state.signupHouseLeafletMap) {
        state.signupHouseLeafletMap.remove();
      }
      const leafletMap = leaflet.map('select-house-location-map').setView([48.8583, 2.2945], 2);
      leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(leafletMap);
      leafletMap.on('click', (e) => {
        if (store.getState().signupNewHouseMarker) {
          store.getState().signupNewHouseMarker.setLatLng(e.latlng);
        } else {
          const marker = leaflet.marker([e.latlng.lat, e.latlng.lng], { icon }).addTo(leafletMap);
          store.setState({ signupNewHouseMarker: marker });
        }
        store.setState({ signupNewHouseLatitude: e.latlng.lat, signupNewHouseLongitude: e.latlng.lng });
      });
      store.setState({ signupHouseLeafletMap: leafletMap });
    }
  };
  return actions;
}

export default createActions;