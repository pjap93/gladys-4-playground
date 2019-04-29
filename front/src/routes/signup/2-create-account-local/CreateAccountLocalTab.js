import { Text, Localizer } from 'preact-i18n';

const CreateLocalGladysAccount = ({ children, ...props }) => (
  <div class="row">
    <div class="col-md-8 mx-auto">
      <h2><Text id="signup.createLocalAccount.title" /></h2>
      <p><Text id="signup.createLocalAccount.description" /></p>
      <div class="form-group">
        <label class="form-label"><Text id="signup.createLocalAccount.firstnameLabel" /></label>
        <Localizer><input type="text" class="form-control" placeholder={<Text id="signup.createLocalAccount.firstnamePlaceHolder" />} /></Localizer>
      </div>
      <div class="form-group">
        <label class="form-label"><Text id="signup.createLocalAccount.lastnameLabel" /></label>
        <Localizer><input type="text" class="form-control" placeholder={<Text id="signup.createLocalAccount.lastnamePlaceHolder" />} /></Localizer>
      </div>
      <div class="form-group">
        <label class="form-label"><Text id="signup.createLocalAccount.emailLabel" /></label>
        <Localizer><input type="email" class="form-control" placeholder={<Text id="signup.createLocalAccount.emailPlaceHolder" />} /></Localizer>
      </div>
      <div class="form-group">
        <label class="form-label"><Text id="signup.createLocalAccount.passwordLabel" /></label>
        <Localizer><input type="password" class="form-control" placeholder={<Text id="signup.createLocalAccount.passwordPlaceHolder" />} /></Localizer>
      </div>
      <div class="form-group">
        <label class="form-label"><Text id="signup.createLocalAccount.passwordRepeatLabel" /></label>
        <Localizer><input type="password" class="form-control" placeholder={<Text id="signup.createLocalAccount.passwordRepeatPlaceHolder" />} /></Localizer>
      </div>
      <div class="form-group">
        <button class="btn btn-success"><Text id="signup.createLocalAccount.createAccountButton" /></button>
      </div>
    </div>
  </div>
);

export default CreateLocalGladysAccount;
