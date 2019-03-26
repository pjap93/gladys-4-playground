import { Link } from 'preact-router/match';

const SceneCards = ({ children, ...props }) => (
  <div class="row row-cards">
    { props.scenes.map((scene) => (
      <div class="col-sm-6 col-lg-3">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{ scene.name }</h3>
            <div class="card-options">
              <a href="#" class="btn btn-primary btn-sm"><i class="fe fe-play" /></a>
              <Link href={`${props.currentUrl}/${scene.id}`} class="btn btn-secondary btn-sm ml-2"><i class="fe fe-settings" /></Link>
            </div>
          </div>
          <Link href={`${props.currentUrl}/${scene.id}`} style={{ color: '#9aa0ac', textAlign: 'center', padding: '40px', textDecoration: 'none' }}>
            { false && <img class="card-img-top" src={scene.img} alt={scene.name} /> }
            <i class={scene.icon} style={{ fontSize: '100px' }} />
          </Link>
          { false && <div class="card-body">
            <div class="row">
              <div class="col-md-8">
                <h4>Holidays</h4>
              </div>
              <div class="col-md-4">
                <div class="float-right">
                  <Link href="#" class="btn btn-primary btn-sm"><i class="fe fe-play" /></Link>
                  <Link href={`${props.currentUrl}/${scene.id}`} class="btn btn-secondary btn-sm ml-2"><i class="fe fe-settings" /></Link>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    ))}
  </div>
);

export default SceneCards;