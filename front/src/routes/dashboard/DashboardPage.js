import { connect } from 'unistore/preact';
import PageLayout from '../../components/layout/page';
import loginActions from '../../actions/login';
import WeatherBox from '../../components/boxs/weather/WeatherBox';

const DashboardPage = connect('user', loginActions)(
  ({ user }) => (
    <PageLayout>
      <div class="card-columns">

        <WeatherBox  temperature={27} unit={'C'} date={'Fri 20/5'} weather="sun" />

        <div class="card" style="display: inline-block; min-width: 300px;">
          <div class="card-header"><h3 class="card-title">Main room</h3>
            <div class="card-options"><a href="" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up" /></a></div></div><div class="table-responsive">
            <table class="table card-table table-vcenter"><tbody>
              <tr><td><i class="fe fe-toggle-right" /></td>
                <td>Might</td><td class="text-right"><label class="custom-switch"><input type="radio" name="16" value="1" class="custom-switch-input" /><span class="custom-switch-indicator" /></label>
                </td></tr>
              <tr>
                <td><i class="fe fe-thermometer" /></td>
                <td>Temperature</td>
                <td class="text-right">22°C</td>
              </tr>
              <tr>
                <td><i class="fe fe-home" /></td>
                <td>Window</td>
                <td class="text-right"><i class="fe fe-shield" /></td>
              </tr>
            </tbody>
            </table></div></div>

        <div class="card" style="display: inline-block; min-width: 300px;">
          <div class="card-header"><h3 class="card-title">Chambre</h3>
            <div class="card-options"><a href="" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up" /></a></div></div><div class="table-responsive">
            <table class="table card-table table-vcenter"><tbody>
              <tr><td><i class="fe fe-toggle-right" /></td>
                <td>Main light</td><td class="text-right"><label class="custom-switch"><input type="radio" name="16" value="1" class="custom-switch-input" /><span class="custom-switch-indicator" /></label>
                </td></tr>
              <tr><td><i class="fe fe-toggle-right" /></td>
                <td>Christmas tree</td><td class="text-right"><label class="custom-switch"><input type="radio" name="16" value="1" class="custom-switch-input" /><span class="custom-switch-indicator" /></label>
                </td></tr>
            </tbody>
            </table></div></div>

        <div class="card">
          <a href="#"><img class="card-img-top" src="https://www.cctvcamerapros.com/v/images/HD-Security-Cameras/AHD-BL5H-1080p-HD-CCTV-Camera-Infrared-Surveillance.jpg" alt="And this isn't my nose. This is a false one." /></a>
          <div class="card-body d-flex flex-column">
            <h4>Living room</h4>
          </div>
        </div>

        <div class="card" style="display: inline-block; min-width: 300px;">
          <div class="card-header"><h3 class="card-title">Chambre</h3>
            <div class="card-options"><a href="" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up" /></a></div></div><div class="table-responsive">
            <table class="table card-table table-vcenter"><tbody>
              <tr><td><i class="fe fe-toggle-right" /></td>
                <td>Main light</td><td class="text-right"><label class="custom-switch"><input type="radio" name="16" value="1" class="custom-switch-input" /><span class="custom-switch-indicator" /></label>
                </td></tr>
              <tr><td><i class="fe fe-toggle-right" /></td>
                <td>Christmas tree</td><td class="text-right"><label class="custom-switch"><input type="radio" name="16" value="1" class="custom-switch-input" /><span class="custom-switch-indicator" /></label>
                </td></tr>
            </tbody>
            </table></div></div>

        <div class="card" style="display: inline-block; min-width: 300px;">
          <div class="card-header"><h3 class="card-title">Chambre</h3>
            <div class="card-options"><a href="" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up" /></a></div></div><div class="table-responsive">
            <table class="table card-table table-vcenter"><tbody>
              <tr><td><i class="fe fe-toggle-right" /></td>
                <td>Main light</td><td class="text-right"><label class="custom-switch"><input type="radio" name="16" value="1" class="custom-switch-input" /><span class="custom-switch-indicator" /></label>
                </td></tr>
              <tr><td><i class="fe fe-toggle-right" /></td>
                <td>Christmas tree</td><td class="text-right"><label class="custom-switch"><input type="radio" name="16" value="1" class="custom-switch-input" /><span class="custom-switch-indicator" /></label>
                </td></tr>
            </tbody>
            </table></div></div>
      </div>
    </PageLayout>
  )
);


export default DashboardPage;
