import { connect } from 'unistore/preact';
import actions from '../../actions/message';
import ChatItems from './ChatItems';

const IntegrationPage = connect(
  'messages,currentMessageTextInput,gladysIsTyping',
  actions
)(({ messages, currentMessageTextInput, updateMessageTextInput, onKeyPress, sendMessage, gladysIsTyping }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header" />
          <div class="row">
            <div class="col-lg-8">
              <div class="card">
                <ChatItems messages={messages} gladysIsTyping={gladysIsTyping} />
                <div class="card-footer">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Message"
                      value={currentMessageTextInput}
                      onInput={updateMessageTextInput}
                      onKeyPress={onKeyPress}
                    />
                    <div class="input-group-append">
                      <button type="button" class="btn btn-secondary" onClick={sendMessage}>
                        <i class="fe fe-send" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">What can you ask?</h3>
                </div>
                <div class="card-body">
                  <ul>
                    <li>"Turn on the Light in the living room"</li>
                    <li>"What's the weather like tomorrow?"</li>
                    <li>"Set an alarm for tomorrow 8:30AM"</li>
                    <li>"Play some music in the kitchen"</li>
                    <li>"What's the temperature in the bathroom?"</li>
                  </ul>
                  <p>
                    Full list of commands <a href="">here</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default IntegrationPage;
