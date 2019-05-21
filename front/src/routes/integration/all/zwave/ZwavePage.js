import { Link } from 'preact-router/match';
import IntegrationPage from '../../../../components/layout/IntegrationPage';

const ZwavePage = ({ children, ...props }) => (
  <IntegrationPage integration={props.integration}>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <Link class="nav-link" activeClassName="active" href="/dashboard/integration/device/zwave/node">
          Nodes
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" activeClassName="active" href="/dashboard/integration/device/zwave/network">
          Network
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" activeClassName="active" href="/dashboard/integration/device/zwave/settings">
          Settings
        </Link>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" role="tabpanel">
        {children}
      </div>
    </div>
  </IntegrationPage>
);

export default ZwavePage;
