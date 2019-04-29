import { Text, Localizer } from 'preact-i18n';

const ConfigureHouseTab = ({ children, ...props }) => (
  <div class="row">
    <div class="col-md-8 mx-auto">
      <h2><Text id="signup.configureHouse.title" /></h2>
      <p><Text id="signup.configureHouse.description" /></p>
      <div class="form-group">
        <label class="form-label"><Text id="signup.configureHouse.houseNameLabel" /></label>
        <Localizer><input type="text" class="form-control" placeholder={<Text id="signup.configureHouse.houseNamePlaceHolder" />} /></Localizer>
      </div>
      <div class="form-group">
        <label class="form-label"><Text id="signup.configureHouse.houseLocationLabel" /></label>
        <div id="select-house-location-map" style="width: 100%; height: 300px;" />
      </div>
      <div class="form-group">
        <label class="form-label"><Text id="signup.configureHouse.roomsLabel" /></label>
        <div class="tags">
          <span class="tag">
            Living Room
            <a href="#" class="tag-addon"><i class="fe fe-x" /></a>
          </span>
        </div>
        <Localizer><input type="text" style={{ marginTop: '10px' }} class="form-control" placeholder={<Text id="signup.configureHouse.roomNamePlaceHolder" />} /></Localizer>
      </div>
      
      <div class="form-group">
        <button class="btn btn-success"><Text id="signup.configureHouse.saveHouse" /></button>
      </div>
    </div>
  </div>
);

export default ConfigureHouseTab;
