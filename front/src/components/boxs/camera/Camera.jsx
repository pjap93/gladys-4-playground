
const CameraBox = ({ children, ...props }) => (
  <div class="card">
    <a href="#"><img class="card-img-top" src={props.url} alt={props.roomName} /></a>
    <div class="card-body d-flex flex-column">
      <h4>{props.roomName}</h4>
    </div>
  </div>
);

export default CameraBox;
