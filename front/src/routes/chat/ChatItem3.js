import { connect } from 'unistore/preact';
import actions from '../../actions/integration';

const IntegrationPage = connect(
  'integrations,currentUrl,integrationsFiltered,totalSize',
  actions
)(({ integrations, integrationsFiltered, totalSize, currentUrl, search }) => (
  <div class="box-body">
    <div class="direct-chat-messages">
      <div class="direct-chat-msg">
        <div class="direct-chat-info clearfix">
          <span class="direct-chat-name float-left">Alexander Pierce</span>
          <span class="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
        </div>
        <img class="direct-chat-img" src="/assets/icons/favicon-96x96.png" alt="message user image" />
        <div class="direct-chat-text">Is this template really for free? That's unbelievable!</div>
      </div>

      <div class="direct-chat-msg right">
        <div class="direct-chat-info clearfix">
          <span class="direct-chat-name float-right">Sarah Bullock</span>
          <span class="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
        </div>

        <img class="direct-chat-img" src="/assets/icons/favicon-96x96.png" alt="message user image" />

        <div class="direct-chat-text">You better believe it!</div>
      </div>
    </div>
  </div>
));

export default IntegrationPage;
