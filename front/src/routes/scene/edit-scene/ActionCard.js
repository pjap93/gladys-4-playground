import { h } from 'preact';
import WaitActionParams from './actions/WaitActionParams';
import ArmHomeActionParams from './actions/ArmHomeActionParam';
import LockActionParams from './actions/LockActionParam';

const ActionCard = ({ children, ...props }) => (
  <div class="card" style={{ minWidth: '350px' }}>
    <div class="card-header">
      <div class="card-title">
        <i class={props.action.icon} style={{ marginRight: '10px' }} /> {props.action.type}
      </div>
      <div class="card-options">
        <a href="#" class="btn btn-sm btn-outline-danger"><i class="fe fe-trash" /></a>
      </div>
    </div>
    <div class="card-body">
      { props.action.type === 'Wait' && <WaitActionParams /> }
      { props.action.type === 'Arm Home' && <ArmHomeActionParams /> }
      { props.action.type === 'Lock the door' && <LockActionParams /> }
      { props.action.type === 'Lock the windows' && <LockActionParams /> }
    </div>
  </div>
);

export default ActionCard;
