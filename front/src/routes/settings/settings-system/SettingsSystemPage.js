import SettingsLayout from '../SettingsLayout';

const SystemPage = ({ children, ...props }) => (
  <SettingsLayout>
    <div class="card">
      <h3 class="card-header">System</h3>
      <div class="card-body">
        <h4>Upgrade</h4>
        <h4>Reboot</h4>
      </div>
    </div>
  </SettingsLayout>
);

export default SystemPage;