const padding = {
  paddingLeft: '40px',
  paddingRight: '40px',
  paddingTop: '10px',
  paddingBottom: '10px'
};

const WeatherBox = ({ children, ...props }) => (
  <div class="card">
    <div style={padding} class="card-block px-30 py-10">
      <div class="row">
        <div class="col-6">
          <div style={{ fontSize: '14px', color: '#76838f' }}>{props.date}</div>
          <div style={{ fontSize: '40px' }} class="font-size-40 blue-grey-700">
            { props.temperature }°
            <span style={{ fontSize: '30px' }}>{props.unit}</span>
          </div>
        </div>
        <div class="col-6 text-right" style={{ padding: '10px' }}>
          { props.weather === 'rain' && <i class="fe fe-cloud-drizzle" style={{ fontSize: '60px' }} /> }
          { props.weather === 'sun' && <i class="fe fe-sun" style={{ fontSize: '60px' }} /> }
          { props.weather === 'cloud' && <i class="fe fe-cloud-drizzle" style={{ fontSize: '60px' }} /> }
        </div>
      </div>
    </div>
  </div>
);

export default WeatherBox;
