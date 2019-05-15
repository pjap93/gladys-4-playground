import { h, Component } from 'preact';
import { Router, getCurrentUrl } from 'preact-router';
import createStore from 'unistore';
import { Provider, connect } from 'unistore/preact';
import { IntlProvider } from 'preact-i18n';
import { HttpClient } from '../utils/HttpClient';
import { DemoHttpClient } from '../utils/DemoHttpClient';
import { Session } from '../utils/Session';
import translationEn from '../config/i18n/en.json';
import actions from '../actions/main';
import { SYSTEM_VARIABLE_NAMES } from '../../../server/utils/constants';

import Header from './header';
import Layout from './layout';
import Redirect from './router/Redirect';
import Login from '../routes/login';
import LoginBlockstack from '../routes/login/login-blockstack';

import SignupWelcomePage from '../routes/signup/1-welcome';
import SignupCreateAccountLocal from '../routes/signup/2-create-account-local';
import SignupCreateAccountGladysGateway from '../routes/signup/2-create-account-gladys-gateway';
import SignupCreateAccountBlockstack from '../routes/signup/2-create-account-blockstack';
import SignupPreferences from '../routes/signup/3-preferences';
import SignupConfigureHouse from '../routes/signup/4-configure-house';
import SignupSuccess from '../routes/signup/5-success';

import Dashboard from '../routes/dashboard';
import Device from '../routes/device';
import IntegrationPage from '../routes/integration';
import ChatPage from '../routes/chat';
import MapPage from '../routes/map';
import CalendarPage from '../routes/calendar';
import ScenePage from '../routes/scene';
import EditScenePage from '../routes/scene/edit-scene';
import TriggerPage from '../routes/trigger';
import ProfilePage from '../routes/profile';
import SettingsSessionPage from '../routes/settings/settings-session';
import SettingsHousePage from '../routes/settings/settings-house';
import SettingsAdvancedPage from '../routes/settings/settings-advanced';
import SettingsSystemPage from '../routes/settings/settings-system';

// Integrations
import TelegramPage from '../routes/integration/all/telegram';
import PhilipsHuePage from '../routes/integration/all/philips-hue';
import ZwaveNodePage from '../routes/integration/all/zwave/node-page';
import ZwaveNetworkPage from '../routes/integration/all/zwave/network-page';
import ZwaveSettingsPage from '../routes/integration/all/zwave/settings-page';

const session = new Session();
const httpClient = (process.env.DEMO_MODE === 'true') ? new DemoHttpClient() : new HttpClient(session);

const store = createStore({
  httpClient,
  session,
  currentUrl: getCurrentUrl(),
  user: {
    language: 'en'
  },
  signupNewUser: {},
  signupUserPreferences: {
    temperature_unit_preference: 'celsius',
    distance_unit_preference: 'metric'
  },
  signupSystemPreferences: {
    [SYSTEM_VARIABLE_NAMES.DEVICE_STATE_HISTORY_IN_DAYS]: 90
  },
  signupRooms: [],
  showDropDown: false
});

const AppRouter = connect('currentUrl,user,profilePicture,showDropDown,', actions)(
  ({ currentUrl, user, profilePicture, showDropDown, handleRoute, toggleDropDown }) => (
    <div id="app">
      <Layout currentUrl={currentUrl}>
        <Header currentUrl={currentUrl} user={user} profilePicture={profilePicture} toggleDropDown={toggleDropDown} showDropDown={showDropDown} />
        <Router onChange={handleRoute}>
          <Login path="/login" />
          <LoginBlockstack path="/login/blockstack" />
          
          <SignupWelcomePage path="/signup" />
          <SignupCreateAccountLocal path="/signup/create-account-local" />
          <SignupCreateAccountGladysGateway path="/signup/create-account-gladys-gateway" />
          <SignupCreateAccountBlockstack path="/signup/create-account-blockstack" />
          <SignupPreferences path="/signup/preference" />
          <SignupConfigureHouse path="/signup/configure-house" />
          <SignupSuccess path="/signup/success" />

          <Dashboard path="/dashboard" />
          <Device path="/dashboard/device" />
          <IntegrationPage path="/dashboard/integration" />
          <IntegrationPage path="/dashboard/integration/device" />
          <IntegrationPage path="/dashboard/integration/communication" />
          <IntegrationPage path="/dashboard/integration/calendar" />
          <IntegrationPage path="/dashboard/integration/music" />
          <IntegrationPage path="/dashboard/integration/health" />
          <IntegrationPage path="/dashboard/integration/weather" />
          <IntegrationPage path="/dashboard/integration/navigation" />

          <TelegramPage path="/dashboard/integration/communication/telegram" />
          <PhilipsHuePage path="/dashboard/integration/device/philips-hue" />
          <Redirect path="/dashboard/integration/device/zwave" to="/dashboard/integration/device/zwave/node" />
          <ZwaveNodePage path="/dashboard/integration/device/zwave/node" />
          <ZwaveNetworkPage path="/dashboard/integration/device/zwave/network" />
          <ZwaveSettingsPage path="/dashboard/integration/device/zwave/settings" />

          <ChatPage path="/dashboard/chat" />
          <MapPage path="/dashboard/maps" />
          <CalendarPage path="/dashboard/calendar" />
          <ScenePage path="/dashboard/scene" />
          <EditScenePage path="/dashboard/scene/:scene_selector" />
          <TriggerPage path="/dashboard/trigger" />

          <ProfilePage path="/dashboard/profile" />
          <SettingsSessionPage path="/dashboard/settings/session" />
          <SettingsHousePage path="/dashboard/settings/house" />
          <SettingsAdvancedPage path="/dashboard/settings/advanced" />
          <SettingsSystemPage path="/dashboard/settings/system" />
        </Router>
      </Layout>
    </div>
  )
);

@connect(
  'session',
  actions
)
class MainApp extends Component {

  componentWillMount() {
    this.props.checkSession();
    this.props.loadProfilePicture();
  }

  render({}, { }) {
    return (
      <AppRouter />
    );
  }
}

const App = () => (
  <Provider store={store}>
    <IntlProvider definition={translationEn}>
      <MainApp />
    </IntlProvider>
  </Provider>
);

export default App;
