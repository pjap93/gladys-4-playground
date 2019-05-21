import { connect } from 'unistore/preact';
import SceneCards from './SceneCards';
import actions from '../../actions/integration';

const ScenePage = connect(
  'user,scenes,totalSize,currentUrl',
  actions
)(({ user, scenes, search, currentUrl }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">Scenes</h1>
            <div class="page-options d-flex">
              <select class="form-control custom-select w-auto">
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
              </select>
              <div class="input-icon ml-2">
                <span class="input-icon-addon">
                  <i class="fe fe-search" />
                </span>
                <input type="text" class="form-control w-10" placeholder="Search scenes" onInput={search} />
              </div>
              <button class="btn btn-outline-primary ml-2">
                New <i class="fe fe-plus" />
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">{scenes && <SceneCards scenes={scenes} currentUrl={currentUrl} />}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default ScenePage;
