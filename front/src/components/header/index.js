import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = ({ ...props }) => (
  <div>
    { props.currentUrl !== '/' &&
    <header>
      <h1>Gladys</h1>
      <nav>
        <Link href="/">Login</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
    }
  </div>
);

export default Header;
