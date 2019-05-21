import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from './actions';
import TelegramPage from './Telegram';
import integrationConfig from '../../../../config/integrations';

@connect(
  'user,telegramSaveApiKeyStatus',
  actions
)
class TelegramIntegration extends Component {
  componentWillMount() {}

  render({ user, telegramSaveApiKeyStatus, saveTelegramApiKey, updateTelegramApiKey }, {}) {
    return (
      <TelegramPage
        integration={integrationConfig[user.language].telegram}
        telegramSaveApiKeyStatus={telegramSaveApiKeyStatus}
        updateTelegramApiKey={updateTelegramApiKey}
        saveTelegramApiKey={saveTelegramApiKey}
      />
    );
  }
}

export default TelegramIntegration;
