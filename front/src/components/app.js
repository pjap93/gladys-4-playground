import { h } from 'preact';
import { Router, getCurrentUrl } from 'preact-router';
import createStore from 'unistore';
import { Provider, connect } from 'unistore/preact';
import { IntlProvider } from 'preact-i18n';
import { HttpClient } from '../utils/HttpClient';
import translationEn from '../config/i18n/en.json';

import Header from './header';
import Layout from './layout';
import Login from '../routes/login/LoginPage';
import Dashboard from '../routes/dashboard/DashboardPage';
import IntegrationPage from '../routes/integration';

const store = createStore({
  httpClient: new HttpClient(),
  currentUrl: getCurrentUrl(),
  user: {
    language: 'en'
  }
});

const actions = store => ({
  handleRoute(state, e) {
    store.setState({ currentUrl: e.url });
  }
});

const Main = connect('currentUrl,user', actions)(
  ({ currentUrl, user, handleRoute }) => (
    <div id="app">
      <Layout main={currentUrl !== '/login'}>
        <Header currentUrl={currentUrl} user={user} />
        <Router onChange={handleRoute}>
          <Login path="/login" />
          <Dashboard path="/dashboard" />
          <IntegrationPage path="/dashboard/integration" />
          <IntegrationPage path="/dashboard/integration/device" />
          <IntegrationPage path="/dashboard/integration/communication" />
          <IntegrationPage path="/dashboard/integration/calendar" />
          <IntegrationPage path="/dashboard/integration/music" />
          <IntegrationPage path="/dashboard/integration/health" />
          <IntegrationPage path="/dashboard/integration/weather" />
          <IntegrationPage path="/dashboard/integration/navigation" />
        </Router>
      </Layout>
    </div>
  )
);

const App = () => (
  <Provider store={store}>
    <IntlProvider definition={translationEn}>
      <Main />
    </IntlProvider>
  </Provider>
);

export default App;
