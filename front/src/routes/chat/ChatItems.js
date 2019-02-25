import { connect } from 'unistore/preact';
import actions from '../../actions/integration';
import style from './style.css';

const IntegrationPage = connect('integrations,currentUrl,integrationsFiltered,totalSize', actions)(
  ({ integrations, integrationsFiltered, totalSize, currentUrl, search }) => (

    <div class={style.messaging}>
      <div class={style.inbox_msg}>
        
        <div class={style.mesgs}>
	  <div class={style.msg_history}>
            <div class={style.incoming_msg}>
              <div class={style.incoming_msg_img}> <img src="/assets/icons/android-icon-192x192.png" alt="sunil" /> </div>
              <div class={style.received_msg}>
                <div class={style.received_withd_msg}>
                  <p>Hey, this is Gladys and this is a test!</p>
                  <span class={style.time_date}> 12 min</span></div>
              </div>
            </div>
            <div class={style.outgoing_msg}>
		  <div class={style.sent_msg}>
                <p>Turn on the light in the living room</p>
                <span class={style.time_date}> 12 min</span> </div>
            </div>
            <div class={style.incoming_msg}>
              <div class={style.incoming_msg_img}> <img src="/assets/icons/android-icon-192x192.png" alt="sunil" /> </div>
              <div class={style.received_msg}>
                <div class={style.received_withd_msg}>
                  <p>Sure, trying to turn on the light now...</p>
                  <span class={style.time_date}> 12 min</span></div>
              </div>
            </div>
            
	  </div>
        </div>
      </div>
    </div>
  ));

export default IntegrationPage;