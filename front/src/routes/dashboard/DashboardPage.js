import { connect } from 'unistore/preact';
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
