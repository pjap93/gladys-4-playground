import { Component } from 'preact';
import { connect } from 'unistore/preact';
import ChatPage from './ChatPage';
import actions from '../../actions/message';

@connect(
  '',
  actions
)
class Chat extends Component {

  componentWillMount() {
    this.props.getMessages();
  }

  render({}, { }) {
    return (
      <ChatPage />
    );
  }
}

export default Chat;
