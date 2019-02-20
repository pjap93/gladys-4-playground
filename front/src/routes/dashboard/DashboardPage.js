import { connect } from 'unistore/preact';
import { Text, MarkupText, Localizer } from 'preact-i18n';
import * as consts from '../../utils/consts';
import PageLayout from '../../components/layout/page';
import loginActions from '../../actions/login';

const DashboardPage = connect('user', loginActions)(
  ({ user }) => (
    <PageLayout>
      <h1>Hey {user.firstname}</h1>
    </PageLayout>
  )
);


export default DashboardPage;
