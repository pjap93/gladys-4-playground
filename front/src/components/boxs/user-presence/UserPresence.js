
const AtHomeBox = ({ children, ...props }) => (
  <div class="card">
    <div class="card-header"><h3 class="card-title">Users Presence</h3>
    </div>
    <div class="table-responsive">
      <table class="table card-table table-vcenter"><tbody>
        <tr>
          <td>Tony</td>
          <td class="text-right"><span class="badge badge-success">At home</span></td>
        </tr>
        <tr>
          <td>Pepper</td>
          <td class="text-right"><span class="badge badge-success">At home</span></td>
        </tr>
        <tr>
          <td>John</td>
          <td class="text-right"><span class="badge badge-danger">Left 5 min ago</span></td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>
);

export default AtHomeBox;
