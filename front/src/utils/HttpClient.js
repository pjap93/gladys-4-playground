import axios from 'axios';
import config from '../../config';

export class HttpClient {
  constructor(session) {
    this.session = session;
  }

  getAxiosHeaders() {
    const headers = {};
    if (this.session.getAccessToken()) {
      headers.authorization = `Bearer ${this.session.getAccessToken()}`;
    }
    return headers;
  }

  async refreshAccessToken() {
    const { data } = await axios({
      baseURL: config.localApiUrl,
      url: '/api/v1/access_token',
      method: 'post',
      data: {
        refresh_token: this.session.getRefreshToken()
      }
    });
    this.session.setAccessToken(data.access_token);
  }

  async executeQuery(method, url, query, body) {
    try {
      const { data } = await axios({
        baseURL: config.localApiUrl,
        url,
        method,
        params: query,
        data: body,
        headers: this.getAxiosHeaders()
      });
      return data;
    } catch (e) {
      if (e.response && e.response.status === 401) {
        await this.refreshAccessToken();
        return this.executeQuery(method, url, query, body);
      }
      throw e;
    }
  }

  async get(url, query) {
    return this.executeQuery('get', url, query);
  }

  async post(url, body) {
    return this.executeQuery('post', url, {}, body);
  }

  async patch(url, body) {
    return this.executeQuery('patch', url, {}, body);
  }

  async delete(url, body) {
    return this.executeQuery('delete', url);
  }
}
