import { h } from 'preact';
import DelayActionParams from './actions/DelayActionParams';
import ArmHomeActionParams from './actions/ArmHomeActionParam';
import LockActionParams from './actions/LockActionParam';
import TurnOnLightParams from './actions/TurnOnLightParams';

const deleteActionFromColumn = (columnIndex, rowIndex, deleteAction) => () => {
  deleteAction(columnIndex, rowIndex);
};

const ActionCard = ({ children, ...props }) => (
  <div class="card" style={{ minWidth: '350px' }}>
    <div class="card-header">
      <div class="card-title">
        <i class={props.action.icon} style={{ marginRight: '10px' }} /> {props.action.type}
      </div>
      { props.highLightedActions && props.highLightedActions[`${props.columnIndex}:${props.index}`] && <div class="card-status bg-blue" /> }
      <div class="card-options">
        <button onClick={deleteActionFromColumn(props.columnIndex, props.index, props.deleteAction)} class="btn btn-sm btn-outline-danger"><i class="fe fe-trash" /></button>
      </div>
    </div>
    <div class="card-body">
      { props.action.type === 'delay' && <DelayActionParams action={props.action} columnIndex={props.columnIndex} index={props.index} updateActionProperty={props.updateActionProperty} /> }
      { props.action.type === 'Arm Home' && <ArmHomeActionParams /> }
      { props.action.type === 'Lock the door' && <LockActionParams /> }
      { props.action.type === 'Lock the windows' && <LockActionParams /> }
      { props.action.type === 'light.turn-on' && <TurnOnLightParams lightDevices={[{ name: 'Main Lamp' }]} /> }
    </div>
  </div>
);

export default ActionCard;
