import './header.css';

const Header = () => (
  <header>
    <div className="cont-nav">
      <h2 className="navbar-title">Math Magicians</h2>

      <nav>

        <ul className="navbar-list">
          <li className="navbar-option">
            <a className="navbar-link" href="/">Home</a>
          </li>
          <li className="navbar-option">
            <a className="navbar-link" href="/calculator">Calculator</a>
          </li>
          <li className="navbar-option">
            <a className="navbar-link" href="/quote">Quote</a>

          </li>
        </ul>

      </nav>
    </div>
  </header>
);

export default Header;
