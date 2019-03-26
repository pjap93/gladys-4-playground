import { h } from 'preact';
import ActionCard from './ActionCard';

const ActionColumn = ({ children, ...props }) => (
  <div class="col-lg-4">
    <h4 class="text-center">{ props.index === 0 ? 'First' : 'Then' }</h4>
    <hr />
    {props.actions.map((action, index) => (
      <ActionCard action={action} index={index} />
    ))}
    <button class="btn btn-block btn-outline-primary">
      <i class="fe fe-plus" />
    </button>
  </div>
);

export default ActionColumn;
