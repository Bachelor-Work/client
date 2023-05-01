import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';

import './Header.scss';

const CustomLink = ({ href, title }) => {
  const location = useLocation();

  if (href === location.pathname) console.log(href);

  return (
    <li>
      <Link
        to={href}
        className={href === location.pathname ? 'activeLink' : ''}
      >
        {title}
      </Link>
    </li>
  );
};

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
            <CustomLink href="/" title="Home" />
            <CustomLink href="/museums" title="Museums" />
            <CustomLink href="/contacts" title="Contacts" />
            <CustomLink href="/auth" title="Login / Sign Up" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
