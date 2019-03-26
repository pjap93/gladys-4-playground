import { connect } from 'unistore/preact';
import SceneCards from './SceneCards';
import actions from '../../actions/integration';

const someScenes = [{
  id: '6a37dd9d-48c7-4d09-a7bb-33f257edb78d',
  name: 'Wake Up',
  description: 'When it\'s time to wake up',
  icon: 'fe fe-bell',
  img: '/assets/integrations/cover/wemo.jpg'
}, {
  id: '064df5f5-6813-4ad5-836c-2967b2b8dcd9',
  name: 'Night',
  description: 'When we party',
  icon: 'fe fe-moon',
  img: '/assets/integrations/cover/wemo.jpg'
}
];

const ScenePage = connect('user,scenes,totalSize,currentUrl', actions)(
  ({ user, scenes, search, currentUrl }) => (
 
    <div class="page">
      <div class="page-main">
        <div class="my-3 my-md-5">
          <div class="container">
            <div class="page-header">
              <h1 class="page-title">
                Scenes
              </h1>
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
                <button class="btn btn-outline-primary ml-2">New <i class="fe fe-plus" /></button>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <SceneCards scenes={someScenes} currentUrl={currentUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

export default ScenePage;