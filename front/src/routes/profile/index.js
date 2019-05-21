import { Component } from 'preact';
import { connect } from 'unistore/preact';
import DashboardProfile from './DashboardProfile';
import actions from '../../actions/profile';

@connect(
  'user,profileUpdateErrors',
  actions
)
class Profile extends Component {
  componentWillMount() {
    this.props.getMySelf();
  }

  render({ user, profileUpdateErrors }, {}) {
    return <DashboardProfile user={user} newUser={user} errors={profileUpdateErrors} />;
  }
}

export default Profile;
