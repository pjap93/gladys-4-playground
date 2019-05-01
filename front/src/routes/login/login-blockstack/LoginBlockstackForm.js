import { Text } from 'preact-i18n';

const LoginBlockstackForm = ({ children, ...props }) => (
  <div class="container">
    <div class="row">
      <div class="col col-login mx-auto">
        <div class="text-center mb-6">
          <h2><img src="/assets/icons/favicon-96x96.png" class="header-brand-img" alt="Gladys logo" /><Text id="login.title" /></h2>
        </div>
        <form class="card">
          <div class="card-body p-6">
            <div class="dimmer active" style={{ height: '300px' }}>
              <div class="loader" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);


export default LoginBlockstackForm;
