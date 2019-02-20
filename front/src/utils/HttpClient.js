import axios from 'axios';
import config from '../../config';
import gladysGatewayClient from '@gladysassistant/gladys-gateway-js';

export class HttpClient {
  constructor(isGateway = false){
    this.isGateway = isGateway;
    if (this.isGateway) {
      this.gatewayClient = gladysGatewayClient({ serverUrl: config.serverUrl, cryptoLib: window.crypto });
    }
  }

  setToken(refreshToken, accessToken) {
    this.refreshToken = refreshToken;
    this.accessToken = accessToken;
  }

  getAxiosHeaders() {
    const headers = {};
    if (this.accessToken) {
      headers.authorization = `Bearer ${this.accessToken}`;
    }
    return headers;
  }

  async get(url, query) {
    if (!this.isGateway) {
      const { data } = await axios({
        baseURL: config.localApiUrl,
        url,
        method: 'get',
        params: query,
        headers: this.getAxiosHeaders()
      });
      return data;
    }

    return this.gatewayClient.request.get(url, query);
  }

  async post(url, data) {
    if (!this.isGateway) {
      const { data } = await axios({
        baseURL: config.localApiUrl,
        url,
        method: 'post',
        data,
        headers: this.getAxiosHeaders()
      });
      return data;
    }

    return this.gatewayClient.request.post(url, data);
  }

  async patch(url, data) {
    if (!this.isGateway) {
      const { data } = await axios({
        baseURL: config.localApiUrl,
        url,
        method: 'patch',
        data,
        headers: this.getAxiosHeaders()
      });
      return data;
    }

    return this.gatewayClient.request.patch(url, data);
  }
}