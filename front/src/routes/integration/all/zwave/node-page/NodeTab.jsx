import { Text, MarkupText } from 'preact-i18n';

const NodeTab = ({ children, ...props }) => (
  <div class="dimmer">
    <div class="dimmer-content">
      <h2>
        <Text id="integration.zwave.title" />
      </h2>
      <p>
        <MarkupText id="integration.zwave.introduction" />
      </p>

      <h3>List of available Z-wave nodes</h3>
      <div class="card-columns">
        {props.zwaveNodes &&
          props.zwaveNodes.map((zwaveNode, index) => (
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">{zwaveNode.product}</h3>
              </div>
              <div class="card-body">
                <b>Manufacturer:</b> {zwaveNode.manufacturer} <br />
                <b>Type:</b> {zwaveNode.type}
              </div>
            </div>
          ))}
      </div>
      <dib class="form-group">
        <button class="btn btn-info btn-sm" onClick={props.getBridges}>
          <Text id="integration.philipsHue.searchForBridgesButton" /> <i class="fe fe-radio" />
        </button>
      </dib>
    </div>
  </div>
);

export default NodeTab;
