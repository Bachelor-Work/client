import { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import './Header.scss';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  function toggleClick() {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  }

  return (
    <div className={cx('navigation', { active: menuActive })}>
      <div className="container">
        <div className="navbar">
          <div className="logo-toggle-container">
            <div className="logo">Online Museum</div>
            <div className="burger" onClick={toggleClick}>
              <span> </span>
            </div>
          </div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/museums">Museums</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/auth">Login / Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
