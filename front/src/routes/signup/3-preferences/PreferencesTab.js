import { Text, Localizer } from 'preact-i18n';

const CreateLocalGladysAccount = ({ children, ...props }) => (
  <div class="row">
    <div class="col-md-8 mx-auto">
      <h2><Text id="signup.preferences.title" /></h2>
      <p><Text id="signup.preferences.description" /></p>
      <div class="form-group">
        <label class="form-label"><Text id="signup.preferences.temperatureUnitsLabel" /></label>
        <select class="form-control">
          <option value="celsius"><Text id="signup.preferences.temperatureUnitsCelsius" /></option>
          <option value="fahrenheit"><Text id="signup.preferences.temperatureUnitsFahrenheit" /></option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label"><Text id="signup.preferences.distanceUnit" /></label>
        <select class="form-control">
          <option value="celsius"><Text id="signup.preferences.distanceUnitMeter" /></option>
          <option value="fahrenheit"><Text id="signup.preferences.distanceUnitUs" /></option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label"><Text id="signup.preferences.deviceStateHistoryDuration" /></label>
        <div class="custom-controls-stacked">
          <label class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="device-state-history-radio" value="1" />
            <div class="custom-control-label">1 day</div>
          </label>
          <label class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="device-state-history-radio" value="7"  />
            <div class="custom-control-label">1 week</div>
          </label>
          <label class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="device-state-history-radio" value="30" checked="true" />
            <div class="custom-control-label">1 month</div>
          </label>
          <label class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="device-state-history-radio" value="30" checked="" />
            <div class="custom-control-label">Forever</div>
          </label>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-success"><Text id="signup.preferences.saveSettingsButton" /></button>
      </div>
    </div>
  </div>
);

export default CreateLocalGladysAccount;
