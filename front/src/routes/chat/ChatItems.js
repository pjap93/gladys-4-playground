import style from './style.css';

const dateDisplayOptions = { hour: 'numeric', minute: 'numeric' };

const IncomingMessage = ({ children, ...props }) => (
  <div class={style.incoming_msg}>
    <div class={style.incoming_msg_img}> <img src="/assets/icons/android-icon-192x192.png" alt="sunil" /> </div>
    <div class={style.received_msg}>
      <div class={style.received_withd_msg}>
        <p>{props.message.text}</p>
        <span class={style.time_date}> {new Date(props.message.created_at).toLocaleDateString('en-US', dateDisplayOptions)}</span></div>
    </div>
  </div>
);

const OutGoingMessage = ({ children, ...props }) => (
  <div class={style.outgoing_msg}>
    <div class={style.sent_msg}>
      <p>{props.message.text}</p>
      <span class={style.time_date}>  {new Date(props.message.created_at).toLocaleDateString('en-US', dateDisplayOptions)}</span></div>
  </div>
);

const Messages = ({ children, ...props }) => (

  <div class={style.messaging}>
    <div class={style.inbox_msg}>
      
      <div class={style.mesgs}>
        <div class={style.msg_history} id="chat-window">
          
          { props.messages && props.messages.map((message) => {
            if (message.sender_id === null) return (<IncomingMessage message={message} />);
            return (<OutGoingMessage message={message} />);
          })
          }

          { props.gladysIsTyping && <p>Typing...</p> }
        </div>
      </div>
    </div>
  </div>
);

export default Messages;