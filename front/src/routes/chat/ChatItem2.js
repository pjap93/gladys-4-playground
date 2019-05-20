
import { connect } from 'unistore/preact';
import actions from '../../actions/integration';

const IntegrationPage = connect('integrations,currentUrl,integrationsFiltered,totalSize', actions)(
  ({ integrations, integrationsFiltered, totalSize, currentUrl, search }) => (

    
    <ul class="list-group card-list-group" style={{
      height: '400px', overflow: 'auto' 
    }}
    >
      <li class="list-group-item py-5">
        <div class="media">
          <div class="media-object avatar avatar-md mr-4" style="background-image: url(https://www.gravatar.com/avatar/3704fd91da1bfad756b6457a4f373ebd)" />
          <div class="media-body">
            <div class="media-heading">
              <small class="float-right text-muted">12 min</small>
              <h5>Pierre-Gilles</h5>
            </div>
            <div>
                            Turn on the light in the living room
            </div>
          </div>
                        
        </div>
      </li>
      <li class="list-group-item py-5">
        <div class="media">
          <div class="media-object avatar avatar-md mr-4" style="background-image: url(/assets/icons/android-icon-192x192.png)" />
          <div class="media-body">
            <div class="media-heading">
              <small class="float-right text-muted">12 min</small>
              <h5>Gladys</h5>
            </div>
            <div>
                            Sure, turning on the lights right now...
            </div>
          </div>
        </div>
      </li>
      <li class="list-group-item py-5">
        <div class="media">
          <div class="media-object avatar avatar-md mr-4" style="background-image: url(/assets/icons/android-icon-192x192.png)" />
          <div class="media-body">
            <div class="media-heading">
              <small class="float-right text-muted">12 min</small>
              <h5>Gladys</h5>
            </div>
            <div>
                            Done!
            </div>
          </div>
        </div>
      </li>
    </ul>
  ));

export default IntegrationPage;