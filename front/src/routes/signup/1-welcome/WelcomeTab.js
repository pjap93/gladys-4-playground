import style from '../style.css';
import { Text, MarkupText } from 'preact-i18n';
import { Link } from 'preact-router/match';

const WelcomeStep = ({ children, ...props }) => (
  <div class={'row ' + style.equal}>
    <div class="col-lg-6">
      <h2><Text id="signup.welcome.title" /></h2>
      <p><Text id="signup.welcome.introSentence" /></p>
      <p><Text id="signup.welcome.introTimeToCreateAccount" /></p>
      <p><Text id="signup.welcome.introDontWorryLocal" /></p>
      <p><MarkupText id="signup.welcome.introInCaseOfIssues" /></p>
      <p><MarkupText id="signup.welcome.introReadMoreGladysGateway" /></p>
    </div>
    <div class="col-lg-6">
      <div class="row" style={{ marginTop: '70px' }}>
        <div class="col text-center">
          <button type="button" class="btn btn-info btn-block"><i class="fe fe-activity" /> <Text id="signup.welcome.buttonCreateAccountGladysGateway" /></button>
        </div>
      </div>
      <div class="row" style={{ marginTop: '20px' }}>
        <div class="col text-center">
          <Link class="btn btn-success btn-block" href="/signup/create-account-local"><i class="fe fe-mail" /> <Text id="signup.welcome.buttonCreateAccountWithEmail" /></Link>
        </div>
      </div>
      <div class="row" style={{ marginTop: '20px' }}>
        <div class="col text-center">
          <Link class="btn btn-primary btn-block" href="/signup/create-account-blockstack"><i class="fe fe-box" /> <Text id="signup.welcome.buttonCreateAccountWithBlockstack" /></Link>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeStep;