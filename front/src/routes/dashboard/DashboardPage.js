import { connect } from 'unistore/preact';
import PageLayout from '../../components/layout/page';
import loginActions from '../../actions/login/login';
import WeatherBox from '../../components/boxs/weather/WeatherBox';
import RoomTemperatureBox from '../../components/boxs/room-temperature/RoomTemperature';
import CameraBox from '../../components/boxs/camera/Camera';
import HumidityBox from '../../components/boxs/humidity/HumidityBox';
import AtHomeBox from '../../components/boxs/at-home/AtHomeBox';
import StartSceneBox from '../../components/boxs/start-scene/StartSceneBox';

const DashboardPage = connect('user', loginActions)(
  ({ user }) => (
    <PageLayout>
      <div class="card-columns">

        <WeatherBox  temperature={27} unit={'C'} date={'Fri 20/5'} weather="sun" />

        <RoomTemperatureBox temperature={22} unit="C" roomName="Living Room" />

        <CameraBox roomName="Living Room" url="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=apartment-ceiling-chairs-1571460.jpg&fm=jpg?dl&fit=crop&crop=entropy&w=640&h=411"  />

        <HumidityBox />

        <AtHomeBox />

        <StartSceneBox />

        <div class="card" style="display: inline-block; min-width: 300px;">
          <div class="card-header"><h3 class="card-title">Main room</h3>
            <div class="card-options">
              <label class="custom-switch m-0">
                <input type="checkbox" value="1" class="custom-switch-input" checked="checked" />
                <span class="custom-switch-indicator" />
              </label>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table card-table table-vcenter"><tbody>
              <tr><td><i class="fe fe-toggle-right" /></td>
                <td>Main Lamp</td><td class="text-right"><label class="custom-switch"><input type="radio" name="16" value="1" class="custom-switch-input" checked /><span class="custom-switch-indicator" /></label>
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
