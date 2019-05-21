const SettingsTab = ({ children, ...props }) => (
  <div
    class="dimmer"
    style={{
      marginTop: '20px'
    }}
  >
    <div class="dimmer-content">
      <h2>Settings</h2>
      <div class="form-group">
        <label class="form-label">Z-Wave stick USB port</label>
        <select class="form-control">
          {props.usbPorts && props.usbPorts.map(usbPort => <option>{usbPort.comName}</option>)}
        </select>
      </div>
      <h3>Advanced</h3>
      {props.zwaveInfos && (
        <div>
          <p>
            <b>Controller Node ID:</b> {props.zwaveInfos.controller_node_id} <br />
            <b>Suc Node ID:</b> {props.zwaveInfos.suc_node_id} <br />
            <b>Primary Controller:</b> {props.zwaveInfos.is_primary_controller ? 'Yes' : 'No'}
            <br />
            <b>Bridge Controller:</b> {props.zwaveInfos.is_bridge_controller ? 'Yes' : 'No'}
            <br />
            <b>Z-Wave library version:</b> {props.zwaveInfos.zwave_library_version}
            <br />
            <b>Library Type Name:</b> {props.zwaveInfos.library_type_name}
            <br />
            <b>Send Queue Length:</b> {props.zwaveInfos.send_queue_count}
          </p>
        </div>
      )}
    </div>
  </div>
);

export default SettingsTab;
