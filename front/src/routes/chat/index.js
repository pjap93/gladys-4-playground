import { Component } from 'preact';
import { connect } from 'unistore/preact';
import ChatPage from './ChatPage';
import actions from '../../actions/integration';

@connect(
  '',
  actions
)
class Chat extends Component {

  componentWillMount() {
    
  }

  render({}, { }) {
    return (
      <ChatPage />
    );
  }
}

export default Chat;
