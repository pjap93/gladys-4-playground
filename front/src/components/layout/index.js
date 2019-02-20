import { h } from 'preact';

const Layout = ({ children, ...props }) => (
  <div class="page">
    <div class={props.main === true ? 'page-main' : 'page-single'}>
      {children}
    </div>
  </div>
);

export default Layout;
