import { h } from 'preact';
import { Link } from 'preact-router/match';

const PAGES_WITHOUT_HEADER = [
  '/login',
  '/login/blockstack',
  '/signup',
  '/signup/create-account-local',
  '/signup/create-account-gladys-gateway',
  '/signup/create-account-blockstack',
  '/signup/preference',
  '/signup/configure-house',
  '/signup/success'
];

const Header = ({ ...props }) => {
  let url = props.currentUrl.split('?')[0];
  if (url.substring(url.length - 1) === '/') {
    url = url.substring(0, url.length - 1);
  }
  if (PAGES_WITHOUT_HEADER.includes(url)) {
    return null;
  }
  return (
    <div>
      <div class="header py-4">
        <div class="container">
          <div class="d-flex">
            <a class="header-brand" href="/dashboard">
              <img src="/assets/icons/favicon-96x96.png" class="header-brand-img" alt="Gladys logo" />
              <span id="header-title">Gladys Assistant</span>
            </a>
            <div class="d-flex order-lg-2 ml-auto">
              <div class={'dropdown' + (props.showDropDown && ' show')}>
                <a onClick={props.toggleDropDown} class="nav-link pr-0 leading-none" data-toggle="dropdown">
                  <span class="avatar" style={`background-image: url(${props.profilePicture})`} />
                  <span class="ml-2 d-none d-lg-block">
                    <span class="text-default">{props.user.firstname}</span>
                    <small class="text-muted d-block mt-1">
                      {props.user.role === 'admin' ? 'Administrator' : 'User'}
                    </small>
                  </span>
                </a>
                <div class={'dropdown-menu dropdown-menu-right dropdown-menu-arrow' + (props.showDropDown && ' show')}>
                  <a class="dropdown-item" href="/dashboard/profile">
                    <i class="dropdown-icon fe fe-user" /> Profile
                  </a>
                  <a class="dropdown-item" href="/dashboard/settings/house">
                    <i class="dropdown-icon fe fe-settings" /> Settings
                  </a>
                  <div class="dropdown-divider" />
                  <a class="dropdown-item" href="/dashboard/help">
                    <i class="dropdown-icon fe fe-help-circle" /> Need help?
                  </a>
                  <a class="dropdown-item" href="" onClick={props.logout}>
                    <i class="dropdown-icon fe fe-log-out" /> Sign out
                  </a>
                </div>
              </div>
            </div>
            <a
              class="header-toggler d-lg-none ml-3 ml-lg-0"
              data-toggle="collapse"
              data-target="#headerMenuCollapse"
              onClick={props.toggleCollapsedMenu}
            >
              <span class="header-toggler-icon" />
            </a>
          </div>
        </div>
      </div>
      <div class={'header collapse d-lg-flex p-0 ' + (props.showCollapsedMenu && ' show')} id="headerMenuCollapse">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg order-lg-first">
              <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
                <li class="nav-item">
                  <Link activeClassName="active" href="/dashboard" class="nav-link">
                    <i class="fe fe-home" /> Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link activeClassName="active" href="/dashboard/chat" class="nav-link">
                    <i class="fe fe-message-square" /> Chat
                  </Link>
                </li>
                <li class="nav-item">
                  <Link activeClassName="active" href="/dashboard/device" class="nav-link">
                    <i class="fe fe-toggle-right" /> Devices
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    href="/dashboard/integration/device"
                    class={props.currentUrl.startsWith('/dashboard/integration') ? 'active nav-link' : 'nav-link'}
                  >
                    <i class="fe fe-grid" /> Integrations
                  </Link>
                </li>
                <li class="nav-item">
                  <Link activeClassName="active" href="/dashboard/calendar" class="nav-link">
                    <i class="fe fe-calendar" /> Calendar
                  </Link>
                </li>
                <li class="nav-item">
                  <Link activeClassName="active" href="/dashboard/maps" class="nav-link">
                    <i class="fe fe-map" /> Maps
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    href="/dashboard/scene"
                    class={props.currentUrl.startsWith('/dashboard/scene') ? 'active nav-link' : 'nav-link'}
                  >
                    <i class="fe fe-play" /> Scene
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    href="/dashboard/trigger"
                    class={props.currentUrl.startsWith('/dashboard/trigger') ? 'active nav-link' : 'nav-link'}
                  >
                    <i class="fe fe-zap" /> Trigger
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
