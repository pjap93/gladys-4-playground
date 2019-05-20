import { connect } from 'unistore/preact';
import actions from '../../../actions/scene';
import ActionColumn from './ActionColumn';
import { Link } from 'preact-router/match';

const ScenePage = connect('sceneParamsData,scene,highLightedActions', actions)(
  ({ sceneParamsData, highLightedActions, scene, startScene, saveScene, addAction, deleteAction, updateActionProperty, updateSelectedNewAction }) => (
 
    <div class="page">
      <div class="page-main">
        <div class="my-3 my-md-5">
          <div class="container">
            <div class="page-header">
              <h1 class="page-title" style={{
                marginRight: '20px' 
              }}
              >
                <Link href="/dashboard/scene" class="btn btn-secondary btn-sm btn-block" >◀️️ Back</Link>
              </h1>
              <h1 class="page-title">
                {scene && scene.name}
              </h1>
              <div class="page-options d-flex">
                <button onClick={startScene} class="btn btn-sm btn-primary ml-2">Run <i class="fe fe-play" /></button>
                <button onClick={saveScene} class="btn btn-sm btn-success ml-2">Save <i class="fe fe-save" /></button>
                <button class="btn btn-sm btn-danger ml-2">Delete <i class="fe fe-trash" /></button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <div class="row flex-nowrap" style="overflow-x: auto;">
                      {scene && scene.actions.map((parallelActions, index) => (
                        <ActionColumn
                          addAction={addAction}
                          actions={parallelActions}
                          deleteAction={deleteAction}
                          updateSelectedNewAction={updateSelectedNewAction}
                          updateActionProperty={updateActionProperty}
                          highLightedActions={highLightedActions}
                          sceneParamsData={sceneParamsData}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

export default ScenePage;