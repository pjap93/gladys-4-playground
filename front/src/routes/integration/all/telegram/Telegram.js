import { Link } from 'preact-router/match';
import { Text, MarkupText } from 'preact-i18n';
import { TelegramSaveApiKeyStatus, TelegramGetApiKeyStatus } from '../../../../utils/consts';

const TelegramPage = ({ children, ...props }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">
              <Link href="/dashboard/integration/communication" class="btn btn-secondary btn-sm btn-block" >◀️️ Back</Link>
            </h1>
          </div>
          
          <div class="row">
            <div class="col-lg-3">
              <div class="card">
                <Link href={`${props.currentUrl}/${props.integration.key}`}><img class="card-img-top" src={props.integration.img} alt={props.integration.name} /></Link>
                <div class="card-body d-flex flex-column">
                  <h4><Link href="#">{props.integration.name}</Link></h4>
                  <div class="text-muted">{props.integration.description}</div>
                  <br />
                  <div class="row">
                    <div class="col-6">
                      <button class="btn btn-success btn-block">Restart</button>
                    </div>
                    <div class="col-6">
                      <button class="btn btn-danger btn-block">Stop</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="card">
                <div class="card-body">
                  <div class="dimmer">
                    <div class="dimmer-content">
                      <h2><Text id="integration.telegram.title" /></h2>
                      <p><MarkupText id="integration.telegram.introduction" /></p>
                      <div class="form-group">
                        <div class="form-label">Telegram Bot API Key</div>
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Telegram Bot API Key" onInput={props.updateTelegramApiKey} />
                          <span class="input-group-append">
                            <button class={props.telegramSaveApiKeyStatus === TelegramSaveApiKeyStatus.Saving ? 'btn btn-primary btn-loading' : 'btn btn-primary'} onClick={props.saveTelegramApiKey} type="button">Save</button>
                          </span>
                        </div>
                      </div>
                      <p><MarkupText id="integration.telegram.link" fields={{ link: 'https://telegram.org' }} />
                        {' '} <Text id="integration.telegram.note" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TelegramPage;