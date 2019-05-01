import { Text, Localizer } from 'preact-i18n';
import { Link } from 'preact-router/match';
import { RequestStatus } from '../../../utils/consts';

const updateLocalNewUser = (property, updateNewUser) => (e) => {
  updateNewUser(property, e.target.value);
};

const today = new Date();
const startYear = today.getFullYear();
const endYear = 1900;
const startDay = 1;
const endDay = 31;

// build years
const years = [];
const days = [];
let i = startYear;
while (i >= endYear) {
  years.push(i);
  i--;
}
i = startDay;
while (i <= endDay) {
  days.push(i);
  i++;
}

const CreateLocalGladysAccount = ({ children, ...props }) => (
  <div>
    <Link href="/signup" class="btn btn-secondary btn-sm float-left" >◀️️  <Text id="signup.createLocalAccount.backButton" /></Link>
    <div class="row">
      <div class="col-md-8 mx-auto">
        <h2><Text id="signup.createLocalAccount.title" /></h2>
        <p><Text id="signup.createLocalAccount.description" /></p>
        {props.createLocalAccountStatus === RequestStatus.NetworkError &&
        <div class="alert alert-danger" role="alert">
          <Text id="signup.createLocalAccount.networkError" />
        </div>
        }
        {props.createLocalAccountStatus === RequestStatus.ConflictError
        && props.createLocalAccountError.error && props.createLocalAccountError.error.attribute === 'email' &&
        <div class="alert alert-danger" role="alert">
          <Text id="signup.createLocalAccount.emailAlreadyExistError" />
        </div>
        }
        {props.createLocalAccountStatus === RequestStatus.ConflictError
        && props.createLocalAccountError.error && props.createLocalAccountError.error.attribute === 'selector' &&
        <div class="alert alert-danger" role="alert">
          <Text id="signup.createLocalAccount.selectorAlreadyExistError" />
        </div>
        }
        <div class="form-group">
          <label class="form-label"><Text id="signup.createLocalAccount.firstnameLabel" /></label>
          <Localizer><input type="text" class={props.signupErrors && props.signupErrors.firstname ? 'form-control is-invalid' : 'form-control'} value={props.signupNewUser.firstname} onInput={updateLocalNewUser('firstname', props.updateNewUser)} placeholder={<Text id="signup.createLocalAccount.firstnamePlaceHolder" />} /></Localizer>
          <div class="invalid-feedback"><Text id="signup.createLocalAccount.firstnameError" /></div>
        </div>
        <div class="form-group">
          <label class="form-label"><Text id="signup.createLocalAccount.lastnameLabel" /></label>
          <Localizer><input type="text" class={props.signupErrors && props.signupErrors.lastname ? 'form-control is-invalid' : 'form-control'} value={props.signupNewUser.lastname} onInput={updateLocalNewUser('lastname', props.updateNewUser)} placeholder={<Text id="signup.createLocalAccount.lastnamePlaceHolder" />} /></Localizer>
          <div class="invalid-feedback"><Text id="signup.createLocalAccount.lastnameError" /></div>
        </div>
        <div class="form-group">
          <label class="form-label"><Text id="signup.createLocalAccount.languageLabel" /></label>
          <select class="form-control">
            <option value="en"><Text id="signup.createLocalAccount.english" /></option>
            <option value="fr"><Text id="signup.createLocalAccount.french" /></option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label"><Text id="signup.createLocalAccount.birthdateLabel" /></label>
          <div class="row gutters-xs">
            <div class="col-5">
              <select  value={props.signupNewUser.birthdateMonth} onInput={updateLocalNewUser('birthdateMonth', props.updateNewUser)}  class={props.signupErrors && props.signupErrors.birthdate ? 'form-control custom-select is-invalid' : 'form-control custom-select'}>
                <option value="">Month</option>
                <option value="1"><Text id="signup.createLocalAccount.january" /></option>
                <option value="2"><Text id="signup.createLocalAccount.february" /></option>
                <option value="3"><Text id="signup.createLocalAccount.march" /></option>
                <option value="4"><Text id="signup.createLocalAccount.april" /></option>
                <option value="5"><Text id="signup.createLocalAccount.may" /></option>
                <option value="6"><Text id="signup.createLocalAccount.june" /></option>
                <option value="7"><Text id="signup.createLocalAccount.july" /></option>
                <option value="8"><Text id="signup.createLocalAccount.august" /></option>
                <option value="9"><Text id="signup.createLocalAccount.september" /></option>
                <option value="10"><Text id="signup.createLocalAccount.october" /></option>
                <option value="11"><Text id="signup.createLocalAccount.november" /></option>
                <option value="12"><Text id="signup.createLocalAccount.december" /></option>
              </select>
            </div>
            <div class="col-3">
              <select value={props.signupNewUser.birthdateDay} onInput={updateLocalNewUser('birthdateDay', props.updateNewUser)}  class={props.signupErrors && props.signupErrors.birthdate ? 'form-control custom-select is-invalid' : 'form-control custom-select'}>
                <option value="">Day</option>
                {days.map((day) => (
                  <option>{day}</option>
                ))}
              </select>
            </div>
            <div class="col-4">
              <select value={props.signupNewUser.birthdateYear} onInput={updateLocalNewUser('birthdateYear', props.updateNewUser)}  class={props.signupErrors && props.signupErrors.birthdate ? 'form-control custom-select is-invalid' : 'form-control custom-select'}>
                <option value="">Year</option>
                {years.map((year) => (
                  <option>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <input type="hidden" class={props.signupErrors && props.signupErrors.birthdate ? 'form-control is-invalid' : 'form-control'} />
          <div class="invalid-feedback"><Text id="signup.createLocalAccount.birthdateError" /></div>
        </div>
        {!props.disableEmailPassword &&
      <div>
        <div class="form-group">
          <label class="form-label"><Text id="signup.createLocalAccount.emailLabel" /></label>
          <Localizer><input type="email" class={props.signupErrors && props.signupErrors.email ? 'form-control is-invalid' : 'form-control'} value={props.signupNewUser.email} onInput={updateLocalNewUser('email', props.updateNewUser)} placeholder={<Text id="signup.createLocalAccount.emailPlaceHolder" />} /></Localizer>
          <div class="invalid-feedback"><Text id="signup.createLocalAccount.emailError" /></div>
        </div>
        <div class="form-group">
          <label class="form-label"><Text id="signup.createLocalAccount.passwordLabel" /></label>
          <Localizer><input type="password" class={props.signupErrors && props.signupErrors.password ? 'form-control is-invalid' : 'form-control'} value={props.signupNewUser.password} onInput={updateLocalNewUser('password', props.updateNewUser)} placeholder={<Text id="signup.createLocalAccount.passwordPlaceHolder" />} /></Localizer>
          <div class="invalid-feedback"><Text id="signup.createLocalAccount.passwordError" /></div>
        </div>
        <div class="form-group">
          <label class="form-label"><Text id="signup.createLocalAccount.passwordRepeatLabel" /></label>
          <Localizer><input type="password" class={props.signupErrors && props.signupErrors.passwordRepeat ? 'form-control is-invalid' : 'form-control'} value={props.signupNewUser.passwordRepeat} onInput={updateLocalNewUser('passwordRepeat', props.updateNewUser)} placeholder={<Text id="signup.createLocalAccount.passwordRepeatPlaceHolder" />} /></Localizer>
          <div class="invalid-feedback"><Text id="signup.createLocalAccount.passwordRepeatError" /></div>
        </div>
      </div>
        }
        <div class="form-group">
          <button onClick={props.createUser} class="btn btn-success"><Text id="signup.createLocalAccount.createAccountButton" /></button>
        </div>
      </div>
    </div>
  </div>
);

export default CreateLocalGladysAccount;
