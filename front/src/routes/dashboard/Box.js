import WeatherBox from '../../components/boxs/weather/WeatherBox';
import RoomTemperatureBox from '../../components/boxs/room-temperature/RoomTemperature';
import CameraBox from '../../components/boxs/camera/Camera';
import AtHomeBox from '../../components/boxs/user-presence/UserPresence';
import RoomCard from '../../components/boxs/device-in-room/RoomCard';


const room = {
  id: '2398c689-8b47-43cc-ad32-e98d9be098b5',
  house_id: 'a741dfa6-24de-4b46-afc7-370772f068d5',
  name: 'Living Room',
  selector: 'test-room',
  created_at: '2019-02-12T07:49:07.556Z',
  updated_at: '2019-02-12T07:49:07.556Z',
  devices: [
    {
      name: 'Test device',
      selector: 'test-device',
      features: [
        {
          name: 'Main light',
          selector: 'test-device-feature',
          category: 'light',
          type: 'binary',
          read_only: false,
          unit: null,
          min: 0,
          max: 1,
          last_value: 0,
          last_value_changed: '2019-02-12T07:49:07.556Z'
        }
      ]
    }
  ]
};

const Box = ({ children, ...props }) => {
  switch (props.box.type) {
  case 'weather':
    return (<WeatherBox  temperature={27} unit={'C'} date={'Fri 20/5'} weather="sun" />);
  case 'user-presence':
    return (<AtHomeBox />);
  case 'camera':
    return (<CameraBox roomName="Living Room" url="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=apartment-ceiling-chairs-1571460.jpg&fm=jpg?dl&fit=crop&crop=entropy&w=640&h=411"  />);
  case 'temperature-in-room':
    return (<RoomTemperatureBox  temperature={22} unit="C" roomName="Living Room"  />);
  case 'devices-in-room':
    return (<RoomCard room={room} />);
  }
};

export default Box;