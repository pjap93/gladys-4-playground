import { RequestStatus } from '../../../../../utils/consts';

const actions = store => ({
  async getUsbPorts(state) {
    store.setState({
      getZwaveUsbPortStatus: RequestStatus.Getting
    });
    try {
      const usbPorts = await state.httpClient.get('/api/v1/service/usb/port');
      store.setState({
        usbPorts,
        getZwaveUsbPortStatus: RequestStatus.Success
      });
    } catch (e) {
      store.setState({
        getZwaveUsbPortStatus: RequestStatus.Error
      });
    }
  },
  async getInfos(state) {
    store.setState({
      getZwaveInfos: RequestStatus.Getting
    });
    try {
      const zwaveInfos = await state.httpClient.get('/api/v1/service/zwave/info');
      store.setState({
        zwaveInfos,
        getZwaveInfos: RequestStatus.Success
      });
    } catch (e) {
      store.setState({
        getZwaveInfos: RequestStatus.Error
      });
    }
  }
});

export default actions;
