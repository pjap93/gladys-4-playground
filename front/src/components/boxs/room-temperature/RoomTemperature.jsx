

const RoomTemperatureBox = ({ children, ...props }) => (
  <div class="card p-3">
    <div class="d-flex align-items-center">
      <span class="stamp stamp-md bg-blue mr-3">
        <i class="fe fe-thermometer" />
      </span>
      <div>
        <h4 class="m-0">{props.temperature}°{props.unit}</h4>
        <small class="text-muted">{props.roomName}</small>
      </div>
    </div>
  </div>
);

export default RoomTemperatureBox;
