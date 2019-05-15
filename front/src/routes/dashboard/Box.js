import WeatherBox from '../../components/boxs/weather/WeatherBox';
import RoomTemperatureBox from '../../components/boxs/room-temperature/RoomTemperature';
import CameraBox from '../../components/boxs/camera/Camera';
import AtHomeBox from '../../components/boxs/user-presence/UserPresence';

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
  }
};

export default Box;