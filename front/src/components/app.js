import { h } from 'preact';
import { Router, getCurrentUrl } from 'preact-router';
import createStore from 'unistore';
import { Provider, connect } from 'unistore/preact';
import { IntlProvider } from 'preact-i18n';
import { HttpClient } from '../utils/HttpClient';
import translationEn from '../i18n/en.json';
import translationFr from '../i18n/fr.json';

import Header from './header';
import Layout from './layout';
import Login from '../routes/login/LoginPage';
import Dashboard from '../routes/dashboard/DashboardPage';

const store = createStore({
  httpClient: new HttpClient(),
  currentUrl: getCurrentUrl(),
  user: {
    profile_url: ''
  }
});

const actions = store => ({
  handleRoute(e) {
    store.setState({ currentUrl: e.url });
  }
});

const Main = connect('currentUrl,user', actions)(
  ({ currentUrl, user, handleRoute }) => (
    <div id="app">
      <Layout main={currentUrl !== '/login'}>
        <Header currentUrl={currentUrl} user={user} />
        <Router onChange={handleRoute}>
          <Dashboard path="/dashboard" />
          <Login path="/login" />
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
