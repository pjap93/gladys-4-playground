import { TelegramSaveApiKeyStatus, TelegramGetApiKeyStatus } from '../../../../utils/consts';

const actions = store => ({
  updateTelegramApiKey(state, e) {
    store.setState({
      telegramApiKey: e.target.value 
    });
  },
  async getTelegramApiKey(state) {
    store.setState({
      telegramGetApiKeyStatus: TelegramGetApiKeyStatus.Getting 
    });
    try {
      const variable = await state.httpClient.get('/api/v1/service/telegram/TELEGRAM_API_KEY');
      store.setState({
        telegramApiKey: variable.value, telegramGetApiKeyStatus: TelegramGetApiKeyStatus.Success 
      });
    } catch (e) {
      store.setState({
        TelegramGetApiKeyStatus: TelegramGetApiKeyStatus.GetError 
      });
    }
  },
  async saveTelegramApiKey(state) {
    store.setState({
      telegramSaveApiKeyStatus: TelegramSaveApiKeyStatus.Saving 
    });
    try {
      await state.httpClient.post('/api/v1/service/telegram/TELEGRAM_API_KEY', {
        value: state.telegramApiKey
      });
      store.setState({
        telegramSaveApiKeyStatus: TelegramSaveApiKeyStatus.Success 
      });
    } catch (e) {
      store.setState({
        telegramSaveApiKeyStatus: TelegramSaveApiKeyStatus.SavingError 
      });
    }

  }
});

export default actions;