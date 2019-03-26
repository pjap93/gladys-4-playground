import { Link } from 'preact-router/match';
import style from './style.css';

const SceneCards = ({ children, ...props }) => (
  <div class="row row-cards">
    { props.scenes.map((scene) => (
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100">
          <div class="card-body p-3 text-center">
            <div class="text-right text-green">
              <a href="#" class="icon" data-toggle="card-remove" ><i class="fe fe-trash" /></a>
            </div>
            <div class={style.scene_icon}><i class={`fe fe-${scene.icon}`} /></div>
            <h4>{scene.name}</h4>
            <div class="text-muted">{scene.description}</div>
          </div>
          <div class="card-footer">
            <div class="btn-list text-center">
              <Link href={`${props.currentUrl}/${scene.id}`} class="btn btn-outline-primary btn-sm"><i class="fe fe-edit" />Edit</Link>
              <button type="button" class="btn btn-outline-success btn-sm" id={scene.selector}><i class="fe fe-play" />Play</button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default SceneCards;